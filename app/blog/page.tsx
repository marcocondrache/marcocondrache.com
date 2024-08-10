import { Suspense } from "react";
import Link from "next/link";

import { getPublishedPosts } from "@/lib/posts";
import { Section } from "@/components/section";

import { ViewsCounter } from "./_components/views-counter";

export const metadata = {
  title: "Blog",
  description: "My personal blog where I share my thoughts and learnings.",
};

export default function Page() {
  const posts = getPublishedPosts();

  if (posts.length === 0)
    return <span>Currently there are no published posts.</span>;

  return (
    <Section>
      {posts.map((post, index) => (
        <div key={index} className="mb-4 flex flex-row justify-between">
          <div className="flex w-4/6 flex-col space-y-1">
            <Link href={`/blog/${post.slug}`} className="special-link text-lg">
              {post.title}
            </Link>
            <p className="truncate text-sm text-stone-500">{post.summary}</p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs">
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
