import { notFound } from "next/navigation";

import { getCraftsIndex } from "@/lib/crafts";
import { MorphingNavbar } from "@/components/crafts/morphing-navbar";
import { CraftContainer } from "@/components/layout/craft-container";
import { Section } from "@/components/layout/section";
import { MDXContent } from "@/components/mdx-content";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const craft = getCraftsIndex()[params.slug];

  if (!craft) return notFound();

  return {
    title: craft.title,
  };
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const craft = getCraftsIndex()[params.slug];
  if (!craft) return notFound();

  return (
    <Section
      size="full"
      type="subgrid"
      role="article"
      className="pb-5 *:col-start-1 *:md:col-start-2"
    >
      <h1 className="text-2xl">{craft.title}</h1>
      <MDXContent
        content={craft.content}
        components={{
          CraftContainer,
          MorphingNavbar,
        }}
      />
    </Section>
  );
}
