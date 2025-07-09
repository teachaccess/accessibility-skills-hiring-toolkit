# Contributing New Roles

## Quick Start

1. Copy the `_template.md` file in this directory
2. Rename it to match your role (e.g., `ux-designer.md`)
3. Fill in the frontmatter fields at the top
4. Replace the content with your role details
5. Set `draft: false` when ready to publish

## Frontmatter Fields

- **title**: The display name of the role
- **description**: A brief summary (appears on homepage cards)
- **slug**: URL-friendly identifier (no spaces, lowercase, dashes only)
- **department**: Group similar roles together
- **level**: entry, mid, senior, or lead
- **draft**: Set to `true` to hide from public site while working
- **lastUpdated**: Update when making changes (YYYY-MM-DD format)

## Content Structure

Keep the existing section structure:
- Position Description
- Qualifications (Required/Preferred)
- Interview Questions (Screening/Committee)
- Translations

## Tips for Junior Developers/Marketers

1. **Don't worry about technical setup** - just focus on the content
2. **Use the template** - it has all the structure you need
3. **Check the slug** - make sure it's unique and URL-friendly
4. **Start with draft: true** - you can preview locally before publishing
5. **Look at existing roles** - use them as examples for formatting

## File Naming

- Use lowercase letters
- Use dashes instead of spaces
- Match the slug in the frontmatter
- Example: `senior-accessibility-engineer.md`

## Preview Your Changes

Run `npm run dev` and navigate to `/roles/your-slug` to see your page.
