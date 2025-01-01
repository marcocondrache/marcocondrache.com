"use client";

import { AnimatePresence, LayoutGroup } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";

import { cn } from "@/lib/utils";

const links = ["Products", "Pricing", "Features", "Benefits"];

type NavigationProps = Parameters<typeof m.div>[0];

export function Navigation({ className, ...props }: NavigationProps) {
  const [index, setIndex] = useState(0);

  return (
    <LayoutGroup>
      <m.div
        layout="position"
        className={cn("flex flex-row justify-center space-x-7 px-7", className)}
        {...props}
      >
        {links.map((value, i) => (
          <div
            key={value}
            className=" flex flex-col items-center justify-center space-y-1"
          >
            <m.button
              layout="position"
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
              }}
              className={cn("exclude text-xs", {
                "text-stone-500": i !== index,
                "text-black dark:text-white": i === index,
              })}
            >
              {value}
            </m.button>

            <AnimatePresence mode="popLayout">
              {i === index && (
                <m.div
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 6, opacity: 0 }}
                  className="text-sm font-thin leading-[1px] text-black dark:text-white"
                  transition={{ duration: 0.1 }}
                >
                  •
                </m.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </m.div>
    </LayoutGroup>
  );
}
