"use client";

import { cva, VariantProps } from "class-variance-authority";
import { HTMLMotionProps, m } from "framer-motion";

import { cn } from "@/lib/utils";

export const lineVariants = cva("h-9 w-px shrink-0", {
  variants: {
    variant: {
      default: "bg-stone-300 dark:bg-stone-500",
      starter: "bg-stone-950 dark:bg-white",
    },
    state: {
      loading: "animate-pulse",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LineProps
  extends VariantProps<typeof lineVariants>,
    HTMLMotionProps<"div"> {
  height: number;
  maxHeight: number;
}

export function Line({
  variant,
  state,
  className,
  height,
  maxHeight,
  ...props
}: LineProps) {
  return (
    <m.div
      className={cn(lineVariants({ variant, state }), className)}
      style={{
        height: maxHeight,
      }}
      animate={{
        clipPath: `inset(${maxHeight - height}px 0 0 0)`,
      }}
      {...props}
    />
  );
}
