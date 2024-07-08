"use client";

import { Transition } from "@/components/transition";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Transition>{children}</Transition>;
}
