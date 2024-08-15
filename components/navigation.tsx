import Link from "next/link";

export function Navigation({ className }: React.ComponentProps<"aside">) {
  return (
    <aside className={className}>
      <nav className="flex flex-row items-start gap-3" role="navigation">
        <Link className="exclude" href="/">
          home
        </Link>
        <Link className="exclude" href="/blog">
          blog
        </Link>
        <Link className="exclude" href="/lab">
          lab
        </Link>
      </nav>
    </aside>
  );
}
