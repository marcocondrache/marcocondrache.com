import Link from "next/link";

import { getCrafts } from "@/lib/crafts";
import { Section } from "@/components/layout/section";

export const metadata = {
  title: "Crafts",
  description: "My personal blog where I share my thoughts and learnings.",
};

export default function Page() {
  const crafts = getCrafts();

  if (crafts.length === 0)
    return <span>Currently there are no published posts.</span>;

  return (
    <Section>
      {crafts.map((craft, index) => (
        <div key={index} className="mb-4 flex flex-row justify-between">
          <div className="flex w-4/6 flex-col space-y-1">
            <Link
              href={`/crafts/${craft.slug}`}
              className="special-link text-lg"
            >
              {craft.title}
            </Link>
            <p className="truncate text-sm text-stone-500">{craft.summary}</p>
          </div>
        </div>
      ))}
    </Section>
  );
}
