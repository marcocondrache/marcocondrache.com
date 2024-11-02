import type React from "react";
import Link, { type LinkProps } from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

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
      <RxArrowTopRight />
      {children}
    </Link>
  );
}
