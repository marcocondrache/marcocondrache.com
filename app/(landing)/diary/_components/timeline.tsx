"use client";

import React, { useCallback, useEffect, useRef } from "react";
import {
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useSetAtom } from "jotai";
import { atomWithReset, RESET } from "jotai/utils";
import { clamp } from "remeda";

import { useMediaQuery } from "@/hooks/use-media-query";

import { Cursor } from "./cursor";
import { OverlayLeft, OverlayRight } from "./overlay";
import { Slider } from "./slider";

export const selectedDay = atomWithReset(new Date());

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Date[];
  offset?: number;
  defaultIndex?: number;
  lineOffset?: number;
  onDateChange?: (date?: Date) => void;
}

export function Timeline({
  data,
  offset = 0,
  defaultIndex = 0,
  lineOffset = 7,
  className,
  children,
  onDateChange,
  ...props
}: TimelineProps) {
  const wrapper = useRef<HTMLDivElement>(null);

  const setDay = useSetAtom(selectedDay);
  const noPointer = useMediaQuery("(any-pointer: coarse)");
  const reducedMotion = useReducedMotion();

  const easierLayout = noPointer || reducedMotion;

  const [container, animate] = useAnimate();
  const { scrollX } = useScroll({ container: wrapper });

  const cursorPoint = useMotionValue(0);
  const cursorOpacity = useMotionValue(0);

  const step = useCallback(
    (x: number) => lineOffset * Math.round(x / lineOffset),
    [lineOffset]
  );

  const moveTo = useCallback(
    (index: number, smooth: boolean = true) => {
      const rect = container.current?.getBoundingClientRect();
      const left = rect?.left || 0;
      const width = rect?.width || 0;
      const point = width / 2;

      cursorPoint.set(point + left);
      wrapper.current?.scroll({
        left: index * lineOffset - point,
        behavior: smooth ? "smooth" : "instant",
      });
    },
    [container, cursorPoint, lineOffset]
  );

  const calculateStep = useCallback(() => {
    const rect = container.current?.getBoundingClientRect();

    const left = rect?.left || 0;
    const width = rect?.width || 0;

    const shift = scrollX.get() % lineOffset;
    const point = easierLayout ? (width + left) / 2 : cursorPoint.get();

    return clamp(step(point - left) - shift, { min: 0 });
  }, [container, cursorPoint, easierLayout, lineOffset, scrollX, step]);

  const cursorStep = useTransform(calculateStep);

  const calculateIndex = useCallback(() => {
    const s = scrollX.get() % lineOffset;
    const i = scrollX.get() / lineOffset;
    const e = (cursorStep.get() + s) / lineOffset;

    return ~~(e + i);
  }, [cursorStep, lineOffset, scrollX]);

  const cursorIndex = useTransform(calculateIndex);

  const cursorX = useSpring(cursorStep, {
    stiffness: 150,
    damping: 18,
    mass: 0.7,
  });

  useEffect(() => {
    if (easierLayout) animate(cursorOpacity, 1);
  }, [animate, cursorOpacity, easierLayout]);

  useEffect(() => {
    moveTo(defaultIndex, false);
    animate(cursorOpacity, 1);
  }, [defaultIndex, moveTo, cursorOpacity, animate]);

  useMotionValueEvent(cursorIndex, "change", (i) => setDay(data[i]));
  useMotionValueEvent(
    cursorOpacity,
    "animationComplete",
    () => cursorOpacity.get() === 0 && setDay(RESET)
  );

  return (
    <div
      key="container"
      ref={container}
      className="relative cursor-none"
      onDoubleClick={() => moveTo(defaultIndex)}
      onMouseEnter={() => !easierLayout && animate(cursorOpacity, 1)}
      onMouseMove={(e) => cursorPoint.set(e.clientX)}
      onMouseLeave={() => !easierLayout && animate(cursorOpacity, 0)}
    >
      <OverlayLeft />
      <OverlayRight />
      <Cursor x={cursorX} opacity={cursorOpacity} />
      <Slider
        ref={wrapper}
        className="flex flex-row flex-nowrap items-baseline justify-start gap-1.5"
      >
        {children}
      </Slider>
    </div>
  );
}
