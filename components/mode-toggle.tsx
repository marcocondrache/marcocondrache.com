"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const order = ["light", "dark", "system"];
  const nextTheme = order[(order.indexOf(theme ?? "light") + 1) % order.length];

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
        onClick={() => setTheme(nextTheme)}
      >
        <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </TooltipTrigger>
      <TooltipContent>{theme}</TooltipContent>
    </Tooltip>
  );
}
