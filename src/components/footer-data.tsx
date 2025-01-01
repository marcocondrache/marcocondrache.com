"use client";

import { useLayoutEffect, useState } from "react";

// https://nextjs.org/docs/messages/next-prerender-current-time
export function FooterData() {
  const [time, setTime] = useState<string | null>(null);

  useLayoutEffect(() => {
    setTime(
      Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date()),
    );
  }, []);

  return <span className="block">{time}</span>;
}
