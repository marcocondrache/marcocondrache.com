"use client";

import { domMax, LazyMotion } from "framer-motion";

export function Motion({ children }: React.PropsWithChildren) {
  return (
    <LazyMotion features={domMax} strict={true}>
      {children}
    </LazyMotion>
  );
}
