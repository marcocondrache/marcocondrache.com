"use client";

import { m } from "framer-motion";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <m.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      {children}
    </m.div>
  );
}
