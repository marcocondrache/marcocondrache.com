import { posts } from "@/content";
import Link from "next/link";
import { format } from "date-fns";

export default function WritingPosts() {
  const list = posts.filter((post) => !post.draft);

  return (
    <div>
      {list.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-row items-center gap-3 mb-4 w-full"
          href={`/writing/${post.slug}`}
        >
          <span className="text-muted-foreground">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </span>
          <h2 className="text-foreground">{post.title}</h2>
        </Link>
      ))}
    </div>
  );
}
