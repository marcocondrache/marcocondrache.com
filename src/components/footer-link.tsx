import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { buttonVariants } from "./ui/button";

type FooterLinkProps = React.PropsWithChildren<LinkProps> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function FooterLink({ children, className, ...props }: FooterLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-8 rounded-full text-base",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
