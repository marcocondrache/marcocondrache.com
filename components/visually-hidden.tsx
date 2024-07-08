import React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

export const VisuallyHidden = React.forwardRef<
  React.ElementRef<typeof VisuallyHiddenPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof VisuallyHiddenPrimitive.Root>
>(({ className, ...props }, ref) => (
  <VisuallyHiddenPrimitive.Root ref={ref} {...props} />
));
VisuallyHidden.displayName = VisuallyHiddenPrimitive.Root.displayName;
