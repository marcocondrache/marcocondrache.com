"use client";

import { domAnimation, LazyMotion } from "framer-motion";

export function Motion({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
