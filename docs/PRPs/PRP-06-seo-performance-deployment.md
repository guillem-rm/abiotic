# PRP-06: SEO, Performance & Deployment

## Goal

Add all SEO meta tags, optimize performance, generate a sitemap, and deploy the site to a static hosting platform. After this phase the site is live and indexed.

---

## Context

Target Lighthouse score: > 90 on all four categories (Performance, Accessibility, Best Practices, SEO).

The site is in Catalan, targeting local Andorran clients. Primary search intent: "consultoria ambiental Andorra", "gestió d'aigua Andorra", "enginyeria ambiental Andorra".

---

## Scope

### What this phase delivers

- `<title>` and `<meta name="description">` on every page
- Open Graph tags for social sharing
- Canonical URLs
- `robots.txt`
- XML sitemap via `@astrojs/sitemap`
- Favicon
- Image optimization via Astro's built-in `<Image />` component
- Font optimization (self-hosted or `font-display: swap`)
- Deployment configuration for the chosen platform
- Lighthouse audit pass

### Out of scope

- Google Analytics or any tracking script
- Structured data / JSON-LD (good to add later, not blocking)
- Multi-language support

---

## Technical Specification

### SEO meta tags

Extend `BaseLayout.astro` with a `<SEO />` component or inline meta block.

Per-page data to pass as props to `BaseLayout`:

| Page | Title | Description |
|---|---|---|
| Home | `Àbiòtic — Consultoria Ambiental a Andorra` | `Gestió de xarxes d'aigua, consultoria ambiental i enginyeria a Andorra. Àbiòtic ofereix serveis tècnics de qualitat per a empreses i administracions.` |
| Company | `L'empresa — Àbiòtic` | `Coneix Àbiòtic, empresa de gestió ambiental fundada el 2019 a Andorra.` |
| Water management | `Gestió d'Aigua — Àbiòtic` | `Serveis de planificació, manteniment i consultoria de xarxes d'aigua potable a Andorra.` |
| Environmental | `Gestió Ambiental — Àbiòtic` | `Auditories ambientals, energies renovables i certificacions ISO 14001 i EMAS a Andorra.` |
| Engineering | `Enginyeria i Tecnologia — Àbiòtic` | `Disseny de projectes tècnics i integració de noves tecnologies en enginyeria ambiental.` |
| Contact | `Contacte — Àbiòtic` | `Posa't en contacte amb Àbiòtic per a qualsevol consulta sobre serveis ambientals a Andorra.` |

Add these as frontmatter in the relevant content Markdown files or directly in page `.astro` files.

### Open Graph

Add to `BaseLayout.astro` `<head>`:

```html
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:locale" content="ca_AD" />
<!-- og:image: add once a brand image is available -->
```

### Canonical URL

```html
<link rel="canonical" href={canonicalURL} />
```

Derive `canonicalURL` from `Astro.url` and a `site` configured in `astro.config.mjs`.

### Sitemap

```bash
npx astro add sitemap
```

Configure in `astro.config.mjs`:
```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abiotic.ad', // or actual domain
  integrations: [tailwind(), sitemap()],
});
```

### `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://abiotic.ad/sitemap-index.xml
```

### Favicon

Create `public/favicon.svg` — a simple SVG with the letter "À" or an abstract leaf/water mark in brand-500 green. Use `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` in `BaseLayout.astro`.

### Image optimization

For any images added to the site:
- Use Astro's `<Image />` component from `astro:assets`
- Specify `width`, `height`, and `alt` on every image
- Use `.webp` or `.avif` format
- Keep images in `src/assets/images/` (not `public/`) so Astro can optimize them

### Font optimization

If using Inter via `@fontsource/inter`:

```bash
npm install @fontsource-variable/inter
```

In `global.css`:
```css
@import '@fontsource-variable/inter';
```

This self-hosts the font, eliminating external network requests. Add `font-display: swap` via the `@fontsource` package options.

### Lighthouse audit checklist

Run via Chrome DevTools or `npx lighthouse`:

- [ ] Performance ≥ 90: verify no render-blocking resources, image sizes optimized
- [ ] Accessibility ≥ 90: all images have `alt`, form labels associated, color contrast ≥ 4.5:1
- [ ] Best Practices ≥ 90: HTTPS, no mixed content, no deprecated APIs
- [ ] SEO ≥ 90: meta description present, canonical set, sitemap linked

---

## Deployment

### Recommended: Cloudflare Pages or Netlify

For Netlify:
- Connect GitHub repo
- Build command: `npm run build`
- Publish directory: `dist`
- Environment: Node 20+

Create `netlify.toml` at repo root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

For Cloudflare Pages:
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

No server configuration needed — pure static output.

---

## Acceptance Criteria

- [ ] All pages have unique `<title>` and `<meta name="description">`
- [ ] Open Graph tags present on all pages
- [ ] Canonical URL set on all pages
- [ ] `sitemap-index.xml` accessible at `/sitemap-index.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Favicon visible in browser tab
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Site deployed and accessible at production URL
- [ ] `npm run build` passes with zero errors

---

## Dependencies

- PRP-01 through PRP-05 must be complete

---

## Files created / modified

| File | Action |
|---|---|
| `astro.config.mjs` | Modified — add `site`, sitemap integration |
| `src/layouts/BaseLayout.astro` | Modified — add SEO meta, OG, canonical |
| `src/pages/*.astro` | Modified — pass title + description props |
| `public/robots.txt` | Created |
| `public/favicon.svg` | Created |
| `netlify.toml` | Created (if deploying to Netlify) |
