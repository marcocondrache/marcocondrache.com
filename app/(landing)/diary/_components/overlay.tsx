export function OverlayLeft() {
  return (
    <div className="pointer-events-none absolute left-0 z-20 h-full w-1/6 bg-gradient-to-r from-stone-50 to-transparent dark:from-stone-950" />
  );
}

export function OverlayRight() {
  return (
    <div className="pointer-events-none absolute right-0 z-20 h-full w-1/6 bg-gradient-to-l from-stone-50 to-transparent dark:from-stone-950" />
  );
}
