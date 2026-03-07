# PRP-01: Project Scaffolding & Configuration

## Goal

Initialize the Astro project with Tailwind CSS, configure content collections with type-safe schemas, and establish the foundational folder structure. After this phase the dev server must start and content must be loadable.

---

## Context

The repository currently contains only content (`content/`) and documentation. No Astro project exists yet. This phase creates the full working skeleton that all subsequent phases will build upon.

---

## Scope

### What this phase delivers

- Astro project initialized at the repo root
- Tailwind CSS installed and configured
- Astro content collections defined for all content types
- Base folder structure for pages, layouts, and components
- Empty placeholder pages for each route (no styling, no real content yet)
- `npm run dev` runs without errors
- `npx astro check` passes with no type errors

### Out of scope

- Any visual design or styling
- Actual page content rendering
- SEO tags
- Deployment configuration

---

## Technical Specification

### Package initialization

```
npm create astro@latest . -- --template minimal --no-install --no-git
npm install
npx astro add tailwind
```

### Folder structure to create

```
src/
  components/        # Shared UI components
  layouts/           # Page layout wrappers
  pages/             # Astro route files
    index.astro
    company.astro
    services/
      water-management.astro
      environmental.astro
      engineering.astro
    contact.astro
  content/           # Symlink or copy from root content/
    config.ts        # Collection schemas
content/             # Source Markdown (gitignored from remote)
public/              # Static assets (images, favicon)
```

### Content collections schema (`src/content/config.ts`)

Define two collections:

**`pages` collection** — for singleton pages (home, company, contact):
- No required frontmatter beyond optional `title: string`

**`services` collection** — for the three service pages:
- `title: string` (required)
- Optional: `description: string`

Use `defineCollection` with `z.object(...)` from `astro:content`.

Reference the `content/` folder at the repo root. Either configure `astro.config.mjs` to point `srcDir` or use a symlink/copy strategy so Astro can pick up the existing Markdown files.

### `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
});
```

### Placeholder pages

Each page file should:
- Import the relevant content collection entry
- Render only `<h1>{title}</h1>` as a placeholder
- Use a minimal base layout wrapping a `<main>` slot

---

## Acceptance Criteria

- [ ] `npm run dev` starts without errors
- [ ] All 6 routes return HTTP 200 and render placeholder content
- [ ] `npx astro check` reports zero errors
- [ ] `npm run build` produces a `dist/` folder with all 6 HTML files
- [ ] Content collections load Markdown from `content/` correctly
- [ ] TypeScript types for collection entries are available in page files

---

## Dependencies

- None (first phase)

---

## Files created / modified

| File | Action |
|---|---|
| `package.json` | Created by Astro init |
| `astro.config.mjs` | Created / configured |
| `tailwind.config.mjs` | Created by Tailwind integration |
| `tsconfig.json` | Created by Astro init |
| `src/content/config.ts` | Created — collection schemas |
| `src/layouts/Base.astro` | Created — minimal HTML shell |
| `src/pages/*.astro` | Created — placeholder pages |
| `src/pages/services/*.astro` | Created — placeholder service pages |
