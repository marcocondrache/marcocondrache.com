import { defineCollection, defineConfig, s } from "velite";

const projects = defineCollection({
  name: "Projects",
  pattern: "projects/**/*.md",
  schema: s.object({
    title: s.string(),
    content: s.markdown(),
  }),
});

export default defineConfig({
  collections: { projects },
});
