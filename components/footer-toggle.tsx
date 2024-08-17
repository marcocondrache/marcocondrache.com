"use client";

import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export function FooterToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="size-8 rounded-full text-base"
      variant="ghost"
      size="icon"
    >
      <div className="size-4 rounded-full bg-stone-900 dark:bg-stone-50" />
    </Button>
  );
}
