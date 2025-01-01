import { incrementView } from "@/server/db/queries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Balancer } from "react-wrap-balancer";

import { Section } from "@/components/section";
import { getPostsIndex } from "@/lib/posts";

const baseUrl = "https://marcocondrache.com/writing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostsIndex()[slug];
  if (!post) return notFound();

  const { title, summary: description, date } = post;

  const ogUrl = `${baseUrl}/${post.slug}/og`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${baseUrl}/${post.slug}`,
      authors: ["Marco Condrache"],
      images: [{ url: ogUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
    alternates: {
      canonical: `${baseUrl}/${post.slug}`,
    },
  } satisfies Metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostsIndex()[slug];
  if (!post) return notFound();

  await incrementView(slug);

  return (
    <Section className="mb-10">
      <h1 className="text-2xl">
        <Balancer>{post.title}</Balancer>
      </h1>
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
