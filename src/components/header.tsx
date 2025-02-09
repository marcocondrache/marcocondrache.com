import Link from "next/link";

export function Header() {
  const links = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
  ];

  return (
    <header>
      <nav>
        <ul>
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
