import { notFound } from "next/navigation";
import { incrementView } from "@/server/db/queries";
import { format } from "date-fns";

import { getPostsIndex } from "@/lib/posts";
import { Section } from "@/components/section";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostsIndex()[params.slug];

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostsIndex()[params.slug];
  if (!post) return notFound();

  await incrementView(params.slug);

  return (
    <Section className="mb-10">
      <h1 className="text-2xl">{post.title}</h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm text-stone-500">
        <time dateTime={post.date}>
          {format(post.date, "eeee, MMMM d, yyyy")}
        </time>
      </div>
      <article
        className="markdown"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Section>
  );
}
