import { defineCollection, z } from 'astro:content';

const thoughts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});

export const collections = { thoughts };
