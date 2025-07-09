import { defineCollection, z } from "astro:content";

const rolesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    department: z.string().optional(),
    level: z.enum(["entry", "mid", "senior", "lead"]).optional(),
    draft: z.boolean().default(false),
    lastUpdated: z.date().optional(),
    // Add SEO fields for better content management
    metaDescription: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  roles: rolesCollection,
};
