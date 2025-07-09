import type { CollectionEntry } from "astro:content";

/**
 * Extracts the title from a role entry by looking for the first H1 in the markdown content
 * Falls back to frontmatter title or slug if no H1 is found
 */
export function extractRoleTitle(role: CollectionEntry<"roles">): string {
  // Use frontmatter title first if available, then parse H1, then fallback to slug
  if (role.data.title) {
    return role.data.title;
  }

  const h1Match = role.body.match(/^#\s+(.+)$/m);
  return h1Match
    ? h1Match[1]
    : role.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
