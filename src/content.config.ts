import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const writings = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        date: z.string(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { writings };