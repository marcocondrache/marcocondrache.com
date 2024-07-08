import fs from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Posts",
  pattern: "posts/**/*.md",
  schema: s.object({
    slug: s.slug("posts"),
    title: s.string(),
    content: s.markdown(),
    excerpt: s.excerpt(),
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
          theme: JSON.parse(
            fs.readFileSync("./lib/themes/markdown.json", "utf-8")
          ),
        },
      ],
    ],
  },
});
