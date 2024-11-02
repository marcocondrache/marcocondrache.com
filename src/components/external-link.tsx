import React from "react";
import Link, { LinkProps } from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

export type ExternalLinkProps = React.ComponentProps<"a"> & LinkProps;

export function ExternalLink({
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      className={cn("inline-flex flex-row items-center gap-1", className)}
      target="_blank"
      {...props}
    >
      <ArrowTopRightIcon />
      {children}
    </Link>
  );
}
