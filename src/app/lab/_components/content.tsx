import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

import { MDXContent } from "@/components/mdx-content";
import { cn } from "@/lib/utils";

const MorphingNavbar = dynamic<unknown>(
  () => import("@/components/crafts/morphing-navbar/navbar"),
);

export function CraftContent({
  content,
  className,
  ...props
}: { content: string } & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "linear-border relative flex min-h-96 w-full items-center rounded-xl bg-stone-50 contain-strict dark:bg-stone-950 sm:justify-center",
        className,
      )}
      {...props}
    >
      <MDXContent content={content} components={{ MorphingNavbar }} />
    </div>
  );
}
