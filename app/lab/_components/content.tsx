import { ComponentProps } from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { MDXContent } from "@/components/mdx-content";

const MorphingNavbar = dynamic(
  () => import("@/components/crafts/morphing-navbar/navbar")
);

const ExclusionTabs = dynamic(
  () => import("@/components/crafts/exclusion-tabs/tabs")
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
        className
      )}
      {...props}
    >
      <MDXContent
        content={content}
        components={{ MorphingNavbar, ExclusionTabs }}
      />
    </div>
  );
}
