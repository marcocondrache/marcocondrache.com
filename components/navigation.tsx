import Link from "next/link";

import { cn } from "@/lib/utils";

export function Navigation({ className }: React.ComponentProps<"aside">) {
  return (
    <aside className={cn("tracking-tight", className)}>
      <nav className="flex flex-row items-start gap-3" role="navigation">
        <Link href="/">home</Link>
        <Link href="/blog">blog</Link>
        <Link href="/diary">gym</Link>
        <Link href="/crafts">crafts</Link>
      </nav>
    </aside>
  );
}
