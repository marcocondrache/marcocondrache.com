import { cache, Suspense } from "react";
import Link from "next/link";
import { getViews } from "@/server/queries";

import { getPublishedPosts } from "@/lib/posts";

const getPosts = cache(getPublishedPosts);

async function ViewsCounter({
  slug,
  promise,
}: {
  slug: string;
  promise: Promise<{ slug: string; count: number }[]>;
}) {
  const data = await promise;

  return <>{data.find((item) => item.slug === slug)?.count ?? 0} views</>;
}

export default function Page() {
  const posts = getPosts();
  const views = getViews();

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
            <p className="truncate text-sm text-gray-500">{post.excerpt}</p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs">
              <Suspense>
                <ViewsCounter promise={views} slug={post.slug} />
              </Suspense>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
