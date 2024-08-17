"use client";

import { useState } from "react";
import { HTMLMotionProps, LayoutGroup, m } from "framer-motion";

import { cn } from "@/lib/utils";

const links = ["Products", "Pricing", "Features", "Benefits"];

export function Navigation({ className, ...props }: HTMLMotionProps<"div">) {
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
            <m.a
              href="#"
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
            </m.a>

            {i === index && (
              <m.div
                layoutId="selectionIndicator"
                className="text-sm font-thin leading-[1px] text-black dark:text-white"
                transition={{ ease: "linear" }}
              >
                •
              </m.div>
            )}
          </div>
        ))}
      </m.div>
    </LayoutGroup>
  );
}
