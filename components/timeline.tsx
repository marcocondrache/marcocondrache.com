"use client";

import React, { useEffect, useRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { m, useMotionValueEvent, useSpring } from "framer-motion";
import { clamp } from "remeda";

import { cn } from "@/lib/utils";

function throttle(mainFunction, delay) {
  let timerFlag = null;

  return (...args) => {
    if (timerFlag === null) {
      mainFunction(...args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
}

export const lineVariants = cva("h-9 w-px shrink-0", {
  variants: {
    variant: {
      default: "bg-stone-300 dark:bg-white",
      starter: "bg-stone-900 dark:bg-stone-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LineProps
  extends VariantProps<typeof lineVariants>,
    React.HTMLAttributes<HTMLDivElement> {}

export const Line = React.forwardRef<HTMLDivElement, LineProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(lineVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Line.displayName = "Line";

export interface TimelineProps<D = unknown>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: D[];
  offset?: number;
  defaultIndex?: number;
  renderLine: (data: D, ref: React.LegacyRef<HTMLElement>) => React.ReactNode;
  currentLine?: (data: D) => void;
}

export function Timeline<D = unknown>({
  data,
  offset = 0,
  defaultIndex = 0,
  renderLine,
  currentLine,
  className,
  children,
  ...props
}: TimelineProps<D>) {
  const index = useRef(defaultIndex);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const x = useSpring(offset, {
    damping: 100,
    stiffness: 1000,
  });

  const max = offset;
  const min = -(data.length - 1) * 7 + offset;

  useMotionValueEvent(x, "change", (latest) => {
    const next = Math.round(Math.abs(latest - offset + 0.5) / 7);

    if (next < 0) return;
    if (next >= data.length) return;
    if (next === index.current) return;

    index.current = next;
    currentLine?.(data[next]);
  });

  const lines = data.map((data) => {
    return renderLine(data, () => {});
  });

  const moveTo = (index: number) => {
    x.set(offset - index * 7);
  };

  const adjust = (value: number, range: [number, number]) => {
    const [min, max] = range;

    if (value > max) {
      const diff = value - max;
      return max + 2 * (diff > 0 ? Math.sqrt(diff) : -Math.sqrt(-diff));
    } else if (value < min) {
      const diff = value - min;
      return min + 2 * (diff > 0 ? Math.sqrt(diff) : -Math.sqrt(-diff));
    }

    return value;
  };

  const handleEnd = () => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const relative = x.get() - offset;
      const rounded = Math.round(relative / 7) * 7;

      x.set(rounded + offset - 0.5);
    }, 100);
  };

  const handler = (delta: number) => {
    let position = 0;

    if (delta > 20 || delta < -20) {
      position = adjust(x.get() + delta, [min, max]);
    } else {
      position = clamp(x.get() + delta, { max, min });
    }

    x.set(position);
  };

  useEffect(() => moveTo(defaultIndex), [offset]);

  return (
    <m.div
      key="pan"
      onPan={(_, { delta, velocity }) => {
        handler((delta.x + delta.y) * Math.sqrt(Math.abs(velocity.x)) * 0.6);
      }}
      onDoubleClick={() => {
        moveTo(defaultIndex);
      }}
      onPanEnd={handleEnd}
      onWheel={(e) => {
        handler(e.deltaX + e.deltaY);
        handleEnd();
      }}
    >
      <m.div
        key="animate"
        dir="ltr"
        className="flex w-full flex-row flex-nowrap items-baseline justify-start gap-1.5"
        style={{ x, willChange: "transform" }}
        role="slider"
        onAnimationEnd={() => {
          console.log("end");
        }}
        transition={{
          damping: 100,
          stiffness: 1000,
          type: "spring",
        }}
      >
        {lines}
      </m.div>
    </m.div>
  );
}
