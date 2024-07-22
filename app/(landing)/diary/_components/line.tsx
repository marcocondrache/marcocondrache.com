import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const lineVariants = cva("h-9 w-px shrink-0", {
  variants: {
    variant: {
      default: "bg-stone-300 dark:bg-stone-500",
      starter: "bg-stone-900 dark:bg-stone-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LineProps
  extends VariantProps<typeof lineVariants>,
    React.ComponentProps<"div"> {}

export function Line({ variant, className, ref, ...props }: LineProps) {
  return (
    <div
      ref={ref}
      className={cn(lineVariants({ variant }), className)}
      {...props}
    />
  );
}
