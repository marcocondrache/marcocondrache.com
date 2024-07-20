"use client";

import { domMax, LazyMotion } from "framer-motion";

export function Motion({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
