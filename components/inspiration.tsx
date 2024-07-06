"use client";

import Link from "next/link";

export function Inspiration() {
  return (
    <span>
      Inspired by
      <Link
        href="https://duncan.land"
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        <em> duncan</em>
      </Link>
    </span>
  );
}
