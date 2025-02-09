import Link from "next/link";

export function Header() {
  const links = [
    { title: "home", href: "/" },
    { title: "writing", href: "/writing" },
    { title: "network", href: "/network" },
  ];

  return (
    <header className="pt-18 pb-4">
      <nav className="inline-flex">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
