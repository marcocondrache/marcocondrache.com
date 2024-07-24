import { Suspense } from "react";
import Link from "next/link";

import { getPublishedPosts } from "@/lib/posts";

import { ViewsCounter } from "./_components/views-counter";

export default function Page() {
  const posts = getPublishedPosts();

  if (posts.length === 0)
    return <span>Currently there are no published posts.</span>;

  return (
    <section>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="mb-4 flex flex-row justify-between"
        >
          <div className="flex w-4/6 flex-col space-y-1">
            <h2 className="text-lg">{post.title}</h2>
            <p className="truncate text-sm text-stone-500">{post.summary}</p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs">
              <Suspense>
                <ViewsCounter slug={post.slug} />
              </Suspense>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
