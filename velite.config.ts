import fs from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Posts",
  pattern: "posts/**/*.md",
  schema: s.object({
    toc: s.toc(),
    slug: s.slug("posts"),
    date: s.isodate(),
    title: s.string(),
    summary: s.string(),
    content: s.markdown(),
    metadata: s.metadata(),
    published: s.boolean().default(false),
  }),
});

const crafts = defineCollection({
  name: "Crafts",
  pattern: "crafts/**/*.mdx",
  schema: s.object({
    slug: s.slug("crafts"),
    title: s.string(),
    summary: s.string(),
    content: s.mdx(),
  }),
});

export default defineConfig({
  collections: { crafts, posts },
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: true,
          theme: {
            dark: JSON.parse(
              fs.readFileSync("./lib/themes/dark.json", "utf-8")
            ),
            light: JSON.parse(
              fs.readFileSync("./lib/themes/light.json", "utf-8")
            ),
          },
        },
      ],
    ],
  },
});
