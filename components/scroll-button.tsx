"use client";

import { RxArrowUp } from "react-icons/rx";

import { Button } from "./ui/button";

export function ScrollButton() {
  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="size-8 rounded-full text-base"
      variant="ghost"
      size="icon"
    >
      <RxArrowUp />
    </Button>
  );
}
