"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
