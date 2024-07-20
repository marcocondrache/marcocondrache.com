import { cache } from "react";
import { notFound } from "next/navigation";
import { incrementView } from "@/server/queries";
import { format } from "@formkit/tempo";

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
    <section className="mb-10">
      <h1 className="text-2xl">{post.title}</h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm text-stone-500">
        <time dateTime={post.date}>{format(post.date, "full")}</time>
      </div>
      <article
        className="prose prose-stone dark:prose-invert prose-headings:font-medium prose-a:font-normal prose-a:decoration-1 prose-a:underline-offset-[2.5px]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
