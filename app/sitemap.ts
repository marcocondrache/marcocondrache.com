import { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getPublishedPosts().map((post) => ({
    url: `https://marcocondrache.com/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  const routes = ["", "/blog", "/diary"].map((route) => ({
    url: `https://marcocondrache.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
