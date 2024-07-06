import Link from "next/link";

export function Navigation() {
  return (
    <aside className="mb-12 mt-10">
      <nav className="flex flex-row items-start gap-3">
        <Link href="/home">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/experience">experience</Link>
      </nav>
    </aside>
  );
}
