import { Metadata } from "next";
import { notFound } from "next/navigation";
import { incrementView } from "@/server/db/queries";

import { getPostsIndex } from "@/lib/posts";
import { Section } from "@/components/section";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostsIndex()[params.slug];
  if (!post) return notFound();

  const { title, summary: description, date } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `https://marcocondrache.com/writing/${post.slug}`,
      authors: ["Marco Condrache"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://marcocondrache.com/writing/${post.slug}`,
    },
  } satisfies Metadata;
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
          {Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
          }).format(new Date(post.date))}
        </time>
      </div>
      <article
        className="markdown"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Section>
  );
}
