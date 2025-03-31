export function Header() {
  const links = [
    { title: "home", href: "/" },
    { title: "writing", href: "/writing" },
  ];

  return (
    <header className="pt-18 pb-4">
      <nav className="inline-flex">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}