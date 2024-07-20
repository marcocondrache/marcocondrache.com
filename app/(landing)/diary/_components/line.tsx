import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

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
