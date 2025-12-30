import { defineCollection, z } from "astro:content";

const rolesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  roles: rolesCollection,
};
