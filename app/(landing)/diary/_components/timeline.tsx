"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  animate,
  m,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { clamp } from "remeda";

import { cn } from "@/lib/utils";

export interface TimelineProps<D = unknown>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: D[];
  offset?: number;
  defaultIndex?: number;
  renderLine: (data: D) => React.ReactNode;
  selectedLine?: (data?: D) => void;
  easierLayout?: boolean;
  lineOffset?: number;
  lineWidth?: number;
}

export function Timeline<D = unknown>({
  data,
  offset = 0,
  defaultIndex = 0,
  lineOffset = 7,
  renderLine,
  selectedLine,
  easierLayout = false,
  className,
  children,
  ...props
}: TimelineProps<D>) {
  const wrapper = useRef<HTMLDivElement>(null);
  const timeline = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const { scrollX } = useScroll({ container: wrapper });

  const cursorPoint = useMotionValue(0);
  const cursorOpacity = useMotionValue(0);

  const step = useCallback(
    (x: number) => lineOffset * Math.round(x / lineOffset),
    [lineOffset]
  );

  const moveTo = useCallback(
    (index: number) => {
      const rect = container.current?.getBoundingClientRect();
      const left = rect?.left || 0;
      const width = rect?.width || 0;
      const point = width / 2;

      cursorPoint.set(point + left);
      wrapper.current?.scroll({
        left: index * lineOffset - point,
        behavior: "smooth",
      });
    },
    [lineOffset, wrapper, cursorPoint]
  );

  const calculateStep = useCallback(() => {
    const rect = container.current?.getBoundingClientRect();

    const left = rect?.left || 0;
    const width = rect?.width || 0;

    const shift = scrollX.get() % lineOffset;
    const point = easierLayout ? (width + left) / 2 : cursorPoint.get();

    return clamp(step(point - left) - shift, { min: 0 });
  }, [cursorPoint, easierLayout, lineOffset, scrollX, step]);

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
  }, [cursorOpacity, easierLayout]);

  useEffect(() => {
    moveTo(defaultIndex);
    animate(cursorOpacity, 1);
  }, [defaultIndex, moveTo, cursorOpacity]);

  useMotionValueEvent(cursorIndex, "change", (i) => selectedLine?.(data[i]));
  useMotionValueEvent(
    cursorOpacity,
    "animationComplete",
    () => cursorOpacity.get() === 0 && selectedLine?.(undefined)
  );

  const lines = useMemo(
    () => data.map((date) => renderLine(date)),
    [data, renderLine]
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
      <div className="absolute left-0 z-20 h-full w-1/6 bg-gradient-to-r from-stone-50 to-transparent dark:from-stone-950" />
      <div className="absolute right-0 z-20 h-full w-1/6 bg-gradient-to-l from-stone-50 to-transparent dark:from-stone-950" />
      <m.div
        key="cursor"
        className={cn(
          "absolute left-0 top-0 z-10 h-full w-[1.5px] bg-orange-600"
        )}
        style={{
          x: cursorX,
          opacity: cursorOpacity,
        }}
      />
      <div ref={wrapper} key="wrapper" className="scrollbar-hide overflow-auto">
        <m.div
          dir="ltr"
          key="timeline"
          ref={timeline}
          className="flex flex-row flex-nowrap items-baseline justify-start gap-1.5"
        >
          {lines}
        </m.div>
      </div>
    </div>
  );
}
