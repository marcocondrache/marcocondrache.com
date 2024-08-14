"use client";

import { useState } from "react";
import { LayoutGroup, m } from "framer-motion";

import { cn } from "@/lib/utils";

const links = ["Products", "Pricing", "Features", "Benefits"];

export function Navigation() {
  const [index, setIndex] = useState(0);

  return (
    <LayoutGroup>
      <m.div
        layout="position"
        className="flex flex-row justify-center space-x-7 px-7"
      >
        {links.map((value, i) => (
          <div
            key={value}
            className="flex flex-col items-center justify-center space-y-1"
          >
            <m.a
              href="#"
              layout="position"
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
              }}
              className={cn("text-xs", {
                "text-stone-500": i !== index,
                "text-white dark:text-black": i === index,
              })}
            >
              {value}
            </m.a>

            {i === index && (
              <m.div
                layoutId="selectionIndicator"
                className="text-sm leading-[1px] text-white dark:text-black"
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
