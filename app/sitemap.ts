import { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().map((post) => ({
    url: `https://marcocondrache.com/writing/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  const routes = ["", "/writing", "/diary"].map((route) => ({
    url: `https://marcocondrache.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
