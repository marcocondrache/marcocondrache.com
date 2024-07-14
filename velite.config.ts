import fs from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Posts",
  pattern: "posts/**/*.md",
  schema: s.object({
    slug: s.slug("posts"),
    date: s.isodate(),
    title: s.string(),
    summary: s.string(),
    content: s.markdown(),
    metadata: s.metadata(),
    published: s.boolean().default(false),
  }),
});

const projects = defineCollection({
  name: "Projects",
  pattern: "projects/**/*.md",
  schema: s.object({
    title: s.string(),
    content: s.markdown(),
  }),
});

export default defineConfig({
  collections: { projects, posts },
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
