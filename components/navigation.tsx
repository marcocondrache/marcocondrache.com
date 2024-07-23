import Link from "next/link";

export function Navigation() {
  return (
    <aside className="mb-12 mt-10 tracking-tight">
      <nav className="flex flex-row items-start gap-3" role="navigation">
        <Link href="/home">home</Link>
        <Link href="/blog">blog</Link>
        <Link href="/diary" prefetch={true}>
          gym
        </Link>
      </nav>
    </aside>
  );
}
