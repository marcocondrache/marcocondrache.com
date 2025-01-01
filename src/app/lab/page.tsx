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
        <div key={craft.slug} className="space-y-8">
          <Craft craft={craft} />
          <CraftContent content={craft.content} />
        </div>
      ))}
    </Section>
  );
}
