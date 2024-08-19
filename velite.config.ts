import fs from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.md",
  schema: s.object({
    slug: s.slug("posts"),
    date: s.isodate(),
    title: s.string(),
    summary: s.string(),
    content: s.markdown(),
    published: s.boolean().default(false),
  }),
});

const crafts = defineCollection({
  name: "Craft",
  pattern: "crafts/**/*.mdx",
  schema: s.object({
    title: s.string(),
    summary: s.string(),

    content: s.mdx(),

    slug: s.slug("crafts"),
    tags: s.array(s.string()),
    published: s.boolean().default(false),
    link: s.object({
      url: s.string().url(),
      text: s.string(),
    }),
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
