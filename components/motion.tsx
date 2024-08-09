"use client";

import { LazyMotion } from "framer-motion";

export function Motion({ children }: React.PropsWithChildren) {
  return (
    <LazyMotion
      strict={true}
      features={() => import("framer-motion").then((res) => res.domMax)}
    >
      {children}
    </LazyMotion>
  );
}
