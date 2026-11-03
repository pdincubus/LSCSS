import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

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
