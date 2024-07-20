"use client";

import React, { useMemo } from "react";
import { useMouse, useThrottle } from "@uidotdev/usehooks";
import { m } from "framer-motion";

function useVariants() {
  // TODO: Understand if optimization is needed
  const [{ x, y }] = useMouse();
  const defaultVariant = useThrottle({ x, y }, 140);

  return useMemo(
    () => ({
      default: defaultVariant,
    }),
    [defaultVariant]
  );
}

export const Cursor = React.forwardRef<HTMLDivElement>((_, ref) => {
  const variants = useVariants();

  return (
    <m.div
      ref={ref}
      className="fixed left-0 top-0 size-5 bg-black"
      variants={variants}
      animate="default"
    ></m.div>
  );
});
