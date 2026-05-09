import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedOn: z.string(),
        layout: z.string().optional()
    })
});

export const collections = {
    articles
};
