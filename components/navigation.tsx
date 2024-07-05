import Link from "next/link";

export function Navigation() {
  return (
    <aside className="mt-10 mb-12">
      <nav className="flex flex-row items-start gap-3">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/curriculum">cv</Link>
      </nav>
    </aside>
  );
}
