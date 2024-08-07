"use client";

import { cva, VariantProps } from "class-variance-authority";
import { HTMLMotionProps, m } from "framer-motion";

import { cn } from "@/lib/utils";

export const contentVariants = cva("place-content-center", {
  variants: {
    type: {
      subgrid: "grid grid-cols-subgrid",
    },
    size: {
      full: "col-span-3",
      normal: "md:col-start-2 md:col-end-2",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export interface SectionProps
  extends HTMLMotionProps<"section">,
    VariantProps<typeof contentVariants> {}

export function Section({
  type,
  size,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <m.section
      className={cn(contentVariants({ type, size }), className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {children}
    </m.section>
  );
}
