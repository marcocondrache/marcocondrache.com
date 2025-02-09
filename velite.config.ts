import { defineCollection, defineConfig, s } from "velite";
import { highlight } from "remark-sugar-high";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.md",
  schema: s.object({
    slug: s.slug("posts"),
    date: s.isodate(),
    title: s.string(),
    content: s.markdown(),
    draft: s.boolean().default(true),
  }),
});

export default defineConfig({
  root: "./src/content",
  collections: { posts },
  markdown: {
    remarkPlugins: [highlight],
  },
});
