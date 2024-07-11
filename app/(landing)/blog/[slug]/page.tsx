import { cache } from "react";
import { notFound } from "next/navigation";
import { incrementView } from "@/server/queries";

import { getPostsIndex } from "@/lib/posts";

const getIndex = cache(getPostsIndex);
const increment = cache(incrementView);

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getIndex()[params.slug];

  if (!post) return notFound();

  increment(params.slug);

  return (
    <section>
      <h1 className="text-2xl">{post.title}</h1>
      <div className="mb-8 mt-2"></div>
      <article
        className="prose prose-stone dark:prose-invert prose-headings:font-medium"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
