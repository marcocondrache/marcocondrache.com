import { posts } from "@/content";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ExternalLink } from "@/components/external-link";
import { links } from "@/lib/links";

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = posts.find((post) => post.slug === slug);

  if (!post) return notFound();

  return (
    <section className="pb-24">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            image: `/og?title=${encodeURIComponent(post.title)}`,
            url: `${links.baseURL}/writing/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title text-2xl tracking-tighter">{post.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {format(new Date(post.date), "MMMM d, yyyy")}
        </p>
      </div>
      <article
        className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-medium prose-a:font-normal prose-a:decoration-1 prose-a:underline-offset-[2.5px] prose-pre:border-1 prose-pre:bg-accent dark:prose-pre:bg-stone-900"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <nav className="flex justify-start items-center gap-3 py-8">
        <ExternalLink href={new URL("/rss", links.baseURL).toString()}>
          rss
        </ExternalLink>
        <ExternalLink href={links.github}>github</ExternalLink>
        <ExternalLink href={links.github}>view source</ExternalLink>
      </nav>
    </section>
  );
}
