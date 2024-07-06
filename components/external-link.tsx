import React from "react";
import Link, { LinkProps } from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

export type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

function ExternalLinkComponent({
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      {...props}
      className={cn("flex flex-row items-center gap-1", className)}
      target="_blank"
    >
      <ArrowTopRightIcon />
      {children}
    </Link>
  );
}

export const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  ExternalLinkProps
>(ExternalLinkComponent);
