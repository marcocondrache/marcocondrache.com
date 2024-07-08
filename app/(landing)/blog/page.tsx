import { cache } from "react";
import Link from "next/link";

import { getPublishedPosts } from "@/lib/posts";

const getPosts = cache(getPublishedPosts);

export default function Page() {
  const posts = getPosts();

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
          <div className="flex w-5/6 flex-col space-y-3">
            <h2 className="text-lg">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.excerpt}</p>
          </div>
          <div className="flex flex-col">{post.metadata.readingTime}m</div>
        </Link>
      ))}
    </section>
  );
}
