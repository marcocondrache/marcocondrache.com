import { cache } from "react";
import Link from "next/link";
import { getViews } from "@/actions/views";

import { getPublishedPosts } from "@/lib/posts";

const getPosts = cache(getPublishedPosts);

export default async function Page() {
  const posts = getPosts();
  const views = await getViews();

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
            <span className="text-xs">{post.metadata.readingTime}m</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
