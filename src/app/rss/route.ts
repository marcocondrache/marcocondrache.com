import { posts } from "@/content";
import { links } from "@/lib/links";
import { Feed } from "feed";

const feed = new Feed({
  id: links.baseURL.toString(),
  title: "Marco Condrache",
  description: "Personal website, blog, and portfolio.",
  copyright: "All rights reserved 2024",
  language: "en-US",
  link: links.baseURL.toString(),
  image: `${links.baseURL}/icons/favicon.png`,
  favicon: `${links.baseURL}/icons/favicon.png`,
  author: {
    name: "Marco Condrache",
    link: links.baseURL.toString(),
  },
  updated: new Date(),
});

for (const post of posts.filter((post) => !post.draft)) {
  feed.addItem({
    title: post.title,
    link: `${links.baseURL}/writing/${post.slug}`,
    date: new Date(post.date),
  });
}

export async function GET() {
  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
