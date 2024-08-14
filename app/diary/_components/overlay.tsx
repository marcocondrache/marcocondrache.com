import { memo } from "react";

function Left() {
  return (
    <div className="pointer-events-none absolute left-0 z-20 h-full w-1/6 bg-gradient-to-r from-stone-50 to-transparent dark:from-stone-950" />
  );
}

function Right() {
  return (
    <div className="pointer-events-none absolute right-0 z-20 h-full w-1/6 bg-gradient-to-l from-stone-50 to-transparent dark:from-stone-950" />
  );
}

export const OverlayLeft = memo(Left);
export const OverlayRight = memo(Right);
