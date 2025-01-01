"use client";

import { incrementView } from "@/server/db/queries";
import Link from "next/link";

export function PostLink({
  slug,
  children,
}: { slug: string; children: React.ReactNode }) {
  return (
    <Link
      href={`/writing/${slug}`}
      onClick={async () => await incrementView(slug)}
    >
      {children}
    </Link>
  );
}
