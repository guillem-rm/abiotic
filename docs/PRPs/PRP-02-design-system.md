# PRP-02: Design System & Shared Components

## Goal

Define the visual identity and build the shared structural components (header, navigation, footer, base layout). After this phase every page has a consistent shell and the design tokens are established.

---

## Context

Àbiòtic is an environmental consulting company. The visual language must convey:
- Professionalism and technical credibility
- Connection to the natural environment (water, land, ecology)
- Clarity and simplicity — the opposite of the previous agency site

The design must differ significantly from the old template-heavy site. No sliders, no decorative complexity, no dark sidebars.

---

## Scope

### What this phase delivers

- Tailwind design tokens: color palette, font scale, spacing
- `BaseLayout.astro` — full HTML document shell with meta charset, viewport, title slot, lang="ca"
- `Header.astro` — logo + navigation links
- `Footer.astro` — company name, address, contact info, copyright
- `Nav.astro` (or inline in Header) — desktop and mobile navigation
- Global CSS baseline (`src/styles/global.css`)
- No page content yet — only the chrome

### Out of scope

- Page-specific sections or components
- Contact form
- SEO meta tags (handled in PRP-06)
- Any JavaScript beyond minimal mobile menu toggle (if needed)

---

## Technical Specification

### Color palette (Tailwind config)

Nature-inspired, professional, minimal:

```js
colors: {
  brand: {
    50:  '#f0f9f4',
    100: '#d8f0e3',
    500: '#2d7a52',   // primary green — main CTAs, links
    700: '#1a5438',   // dark green — headings, hover states
    900: '#0d2e1f',   // near-black green — text
  },
  stone: { /* use Tailwind default stone scale */ },
  white: '#ffffff',
}
```

Rationale: green tones signal environmental work without being cliché; stone/neutral grays provide clean backgrounds.

### Typography

Use a system font stack for performance (no Google Fonts external call):

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  // Inter loaded via @fontsource/inter or self-hosted woff2
}
```

Font scale via Tailwind defaults. Body text: `text-base` (16px), headings: `text-2xl`–`text-4xl`.

### `BaseLayout.astro`

Props:
- `title: string` — page title (used in `<title>` and later in OG tags)
- `description?: string` — meta description

Renders:
- `<!DOCTYPE html>` with `lang="ca"`
- `<head>` with charset, viewport, title, linked global CSS
- `<Header />`
- `<main><slot /></main>`
- `<Footer />`

### `Header.astro`

- Left: company name "Àbiòtic" as a text logo (or SVG if available), linking to `/`
- Right: navigation links — Inici (`/`), L'empresa (`/company`), Serveis (dropdown or flat links to 3 service pages), Contacte (`/contact`)
- Sticky on scroll or static — keep it simple; prefer static
- Background: white or very light stone, bottom border `border-stone-200`
- No hamburger menu required if desktop-first; if added, use minimal CSS toggle (no JS framework)

### `Footer.astro`

Three columns on desktop, stacked on mobile:
1. Company name + tagline
2. Navigation links (same as header)
3. Contact: address, phone, email, Instagram link

Bottom bar: `© {year} Àbiòtic. Tots els drets reservats.`

### `src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-stone-800 bg-white antialiased;
  }
  h1, h2, h3 {
    @apply font-semibold text-brand-700;
  }
  a {
    @apply text-brand-500 hover:text-brand-700 transition-colors;
  }
}
```

---

## Acceptance Criteria

- [x] All 6 pages render with header and footer correctly
- [x] Navigation links are correct and functional
- [x] Active page link is visually differentiated in the nav
- [x] Layout is responsive: readable on 375px and 1280px viewports
- [x] No JavaScript errors in browser console
- [x] Tailwind purges correctly — `npm run build` CSS is < 20 KB (10.8 KB)
- [x] `lang="ca"` is set on `<html>`

---

## Dependencies

- PRP-01 must be complete

---

## Files created / modified

| File | Action |
|---|---|
| `tailwind.config.mjs` | Modified — add brand colors and font |
| `src/styles/global.css` | Created — Tailwind base + custom layer |
| `src/layouts/BaseLayout.astro` | Created — full document shell |
| `src/components/Header.astro` | Created |
| `src/components/Footer.astro` | Created |
| `src/components/Nav.astro` | Created (or inline in Header) |
| `src/pages/*.astro` | Modified — use BaseLayout |
