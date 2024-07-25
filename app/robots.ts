import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://marcocondrache.com/sitemap",
    host: "https://marcocondrache.com",
  };
}
