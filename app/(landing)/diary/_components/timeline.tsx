"use client";

import React, { useCallback, useMemo, useRef } from "react";
import {
  animate,
  m,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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
  lineWidth = 1,
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
  const cursorOpacity = useMotionValue(easierLayout ? 1 : 0);

  const step = useCallback(
    (x: number) => lineOffset * Math.round(x / lineOffset),
    [lineOffset]
  );

  const calculateStep = useCallback(() => {
    if (easierLayout) return 0;

    const offset = container.current?.getBoundingClientRect().left || 0;
    const shift = scrollX.get() % lineOffset;

    return step(cursorPoint.get() - offset) - shift;
  }, [lineOffset]);

  const calculateIndex = useCallback(() => {
    const i = scrollX.get() / lineOffset;
    const s = scrollX.get() % lineOffset;
    const e = cursorStep.get() / lineOffset;

    return e + i - s;
  }, [lineOffset]);

  const cursorStep = useTransform(calculateStep);
  const cursorIndex = useTransform(calculateIndex);

  const cursorX = useSpring(cursorStep, {
    stiffness: 150,
    damping: 18,
    mass: 0.7,
  });

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
      onMouseEnter={() => !easierLayout && animate(cursorOpacity, 1)}
      onMouseMove={(e) => cursorPoint.set(e.clientX)}
      onMouseLeave={() => !easierLayout && animate(cursorOpacity, 0)}
    >
      <div className="absolute left-0 z-20 h-full w-[100px] bg-gradient-to-r from-stone-50 to-transparent dark:from-stone-950" />
      <div className="absolute right-0 z-20 h-full w-[100px] bg-gradient-to-l from-stone-50 to-transparent dark:from-stone-950" />
      <m.div
        key="cursor"
        className={cn(
          "absolute top-0 z-10 h-full w-px bg-black dark:bg-white",
          easierLayout ? "left-1/2" : "left-0"
        )}
        style={{
          x: cursorX,
          opacity: cursorOpacity,
        }}
      />
      <div
        ref={wrapper}
        key="wrapper"
        className="overflow-auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="w-1/2" />
        <m.div
          dir="ltr"
          key="timeline"
          ref={timeline}
          className="flex flex-row flex-nowrap items-baseline justify-start gap-1.5"
        >
          {lines}
        </m.div>
        <div className="w-1/2" />
      </div>
    </div>
  );
}
