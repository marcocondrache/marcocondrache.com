import dynamic from "next/dynamic";

import { MDXContent } from "@/components/mdx-content";

const MorphingNavbar = dynamic(
  () => import("@/components/crafts/morphing-navbar/navbar")
);

const ExclusionTabs = dynamic(
  () => import("@/components/crafts/exclusion-tabs/tabs")
);

export function CraftContent({ content }: { content: string }) {
  return (
    <MDXContent
      content={content}
      components={{ MorphingNavbar, ExclusionTabs }}
    />
  );
}
