"use client";

import { useSyncExternalStore } from "react";
import { m } from "framer-motion";
import { RxArrowUp } from "react-icons/rx";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./ui/button";

export function ScrollButton() {
  const y = useSyncExternalStore(
    (change) => {
      window.addEventListener("scroll", change);
      return () => window.removeEventListener("scroll", change);
    },
    () => window.scrollY,
    () => 0
  );

  return (
    (y ?? 0) > 20 && (
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "h-[unset]"
        )}
        onClick={() => window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      >
        <RxArrowUp />
      </m.button>
    )
  );
}
