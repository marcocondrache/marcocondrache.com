import { Suspense } from "react";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

import { getPublishedPosts } from "@/lib/posts";
import { Section } from "@/components/section";

import { ViewsCounter } from "./_components/views-counter";

export const metadata = {
  title: "Blog",
  description: "Articles about coding and life.",
  openGraph: {
    title: "Blog",
    description: "Articles about coding and life.",
  },
  twitter: {
    title: "Blog",
    description: "Articles about coding and life.",
  },
};

export default function Page() {
  const posts = getPublishedPosts();

  if (posts.length === 0)
    return <span>Currently there are no published posts.</span>;

  return (
    <Section>
      {posts.map((post) => (
        <div key={post.slug} className="mb-4 flex flex-row justify-between">
          <div className="flex w-4/6 flex-col space-y-1">
            <Link href={`/writing/${post.slug}`}>
              <Balancer>{post.title}</Balancer>
            </Link>
            <p className="truncate text-sm text-stone-500">{post.summary}</p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm">
              <Suspense>
                <ViewsCounter slug={post.slug} />
              </Suspense>
            </span>
          </div>
        </div>
      ))}
    </Section>
  );
}
