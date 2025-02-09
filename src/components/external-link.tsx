import { ArrowUpRight } from "lucide-react";
import type { LinkProps } from "next/link";
import Link from "next/link";

type ExternalLinkProps = React.PropsWithChildren<LinkProps> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex font-light items-center gap-1.5 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
      rel="noopener noreferrer"
      {...props}
    >
      <ArrowUpRight strokeWidth={1.5} className="size-6" />
      <span className="text-base">{children}</span>
    </Link>
  );
}
