import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const contentVariants = cva(
  "animate-children place-content-center contain-content",
  {
    variants: {
      type: {
        subgrid: "grid grid-cols-subgrid place-content-start",
      },
      size: {
        full: "col-span-3",
        normal: "md:col-start-2 md:col-end-2",
      },
    },
    defaultVariants: {
      size: "normal",
    },
  },
);

export interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof contentVariants> {}

export function Section({
  type,
  size,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(contentVariants({ type, size }), className)}
      {...props}
    >
      {children}
    </section>
  );
}
