# PRP-04: Company Page & Service Pages

## Goal

Build the Company page (`/company`) and the three Service pages (`/services/water-management`, `/services/environmental`, `/services/engineering`). After this phase all informational pages are production-ready.

---

## Context

Content sources:
- `content/company.md`
- `content/services/water-management.md`
- `content/services/environmental.md`
- `content/services/engineering.md`

These four pages share a similar structure: a clear intro, a list of items (areas of activity / services), and optionally a CTA. Building them together allows for maximum layout reuse.

---

## Scope

### What this phase delivers

- Fully implemented `/company` route
- Fully implemented three service routes
- Shared `PageHero.astro` component for page-top headers
- Shared `ServiceLayout.astro` (or reuse `BaseLayout`) for service page structure
- All content rendered from Markdown collections

### Out of scope

- Contact form (PRP-05)
- SEO meta tags (PRP-06)
- Image assets

---

## Technical Specification

### Company Page (`/company`)

Sections from `content/company.md`:

#### 1. Page hero

- Heading: "Qui som"
- Subheading: brief intro sentence
- Background: brand-50 or a thin brand-colored top border

#### 2. Company introduction

- Full body text from `## Introducció`
- Two-column on desktop: text left, pull-quote right (e.g. founding date + mission)
- Mentions EMAS / ISO 14001 standards — render as a subtle badge list or inline pill

#### 3. Àrees d'activitat

- Three service areas from `## Àrees d'activitat`: Aigua, Ambiental, Enginyeria
- Render using `ServiceCard.astro` (created in PRP-03)
- Each card links to the corresponding service page

#### 4. Valors

- Three values from `## Valors`
- Render using `ValueItem.astro` (created in PRP-03)

#### 5. Contact CTA

- Reuse `CtaBand.astro` with "Treballa amb nosaltres" or "Contacta'ns"

---

### Service Pages (three pages, same layout)

Each service page follows this template:

#### 1. Page hero

- `title` from frontmatter as `<h1>`
- Short introductory paragraph (first paragraph of Markdown body)
- Component: `PageHero.astro` — props: `title`, `subtitle?`

#### 2. Serveis list

- Rendered from `## Serveis` section
- Unordered list, styled as a clean checkmark or bullet list with brand-colored icons

#### 3. Aplicacions list

- Rendered from `## Aplicacions` section
- Tag-style pills or a simple bullet list

#### 4. Cross-links to other services

- Below the content: "Altres serveis" with cards or links to the other two service pages
- Reuse `ServiceCard.astro`

#### 5. Contact CTA

- Reuse `CtaBand.astro`

---

### New components

| Component | Props | Notes |
|---|---|---|
| `PageHero.astro` | `title`, `subtitle?` | Top-of-page header for interior pages |
| `ProseContent.astro` | `content` (rendered HTML) | Wrapper for Markdown body with Tailwind Typography |

### Tailwind Typography plugin

Install `@tailwindcss/typography` for rendering Markdown prose content:

```bash
npm install -D @tailwindcss/typography
```

Add to `tailwind.config.mjs`:
```js
plugins: [require('@tailwindcss/typography')]
```

Apply `class="prose prose-stone max-w-none"` to Markdown content containers.

---

## Acceptance Criteria

- [x] `/company` renders all four sections with correct content
- [x] All three service routes render correctly with their respective content
- [x] Service pages link to each other via "Altres serveis"
- [x] `ServiceCard.astro` and `ValueItem.astro` are reused (no duplication)
- [x] Prose Markdown content is properly styled via Tailwind Typography
- [x] All pages are responsive at 375px and 1280px
- [x] No content is hard-coded — all text comes from Markdown collections
- [x] `npx astro check` passes with no type errors (0 errors, 0 warnings)

---

## Dependencies

- PRP-01 (scaffolding)
- PRP-02 (design system)
- PRP-03 (shared components: `ServiceCard`, `ValueItem`, `CtaBand`)

---

## Files created / modified

| File | Action |
|---|---|
| `src/pages/company.astro` | Modified — full implementation |
| `src/pages/services/water-management.astro` | Modified — full implementation |
| `src/pages/services/environmental.astro` | Modified — full implementation |
| `src/pages/services/engineering.astro` | Modified — full implementation |
| `src/components/PageHero.astro` | Created |
| `src/components/ProseContent.astro` | Created |
| `tailwind.config.mjs` | Modified — add typography plugin |
