import Link from "next/link";

import { cn } from "@/lib/utils";

export function Navigation({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  return (
    <aside
      className={cn("flex flex-row justify-between", className)}
      {...props}
    >
      <nav className="inline-flex flex-row items-start gap-3" role="navigation">
        <Link className="exclude" href="/">
          home
        </Link>
        <Link className="exclude" href="/writing">
          writing
        </Link>
        <Link className="exclude" href="/lab">
          lab
        </Link>
      </nav>
    </aside>
  );
}
