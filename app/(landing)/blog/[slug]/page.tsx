import { cache } from "react";
import { notFound } from "next/navigation";

import { getPostsIndex } from "@/lib/posts";

const getIndex = cache(getPostsIndex);

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getIndex()[params.slug];

  if (!post) return notFound();

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
