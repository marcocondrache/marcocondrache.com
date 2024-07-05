"use client";

export function Inspiration() {
  return (
    <span>
      Inspired by
      <a href="https://duncan.land" onClick={(e) => e.stopPropagation()}>
        <em> duncan</em>
      </a>
      .
    </span>
  );
}
