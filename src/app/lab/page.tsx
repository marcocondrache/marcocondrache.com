import { Section } from "@/components/section";
import { getCrafts } from "@/lib/crafts";

import { CraftContent } from "./_components/content";
import { Craft } from "./_components/craft";

export const metadata = {
  title: "Laboratory",
  description: "My personal blog where I share my thoughts and learnings.",
};

export default function Page() {
  const crafts = getCrafts();

  if (crafts.length === 0)
    return <span>Currently there are no published posts.</span>;

  return (
    <Section className="space-y-8 pb-12">
      {crafts.map((craft) => (
        <>
          <Craft key={craft.slug} craft={craft} />
          <CraftContent key={`${craft.slug}-content`} content={craft.content} />
        </>
      ))}
    </Section>
  );
}
