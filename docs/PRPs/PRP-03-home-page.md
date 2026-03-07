# PRP-03: Home Page

## Goal

Build the fully designed and content-populated home page (`/`). After this phase the home page is production-ready and represents the visual benchmark for all other pages.

---

## Context

Content source: `content/home.md`

The home page is the primary entry point. It must immediately communicate what Àbiòtic does, who it serves, and how to contact them. Sections come directly from the existing Markdown content.

---

## Scope

### What this phase delivers

- Fully implemented `/` route with all five sections
- All content from `content/home.md` rendered
- Page-specific components for each section
- Responsive design (mobile and desktop)

### Out of scope

- Animations beyond simple CSS transitions
- Image assets (placeholder divs are acceptable if no assets exist)
- SEO meta tags (PRP-06)

---

## Technical Specification

### Sections (in order)

#### 1. Hero

Content from `home.md > ## Hero`:
- Headline rotating through: "Gestió de xarxes d'aigua", "Gestió ambiental", "Energies renovables"
- Subtext: company tagline
- CTA button: "Descobreix els serveis" → `#serveis` anchor or `/services/water-management`
- Secondary CTA: "Contacta'ns" → `/contact`

Implementation note: The three-line hero text should NOT use a JS carousel/slider. Options:
  - Static headline with all three lines stacked (preferred, zero JS)
  - CSS-only fade animation if desired (acceptable)

Layout: full-width section, vertically centered, min-height 60vh. Light background (brand-50 or white). No hero image required unless assets become available.

#### 2. Serveis principals

Content from `home.md > ## Serveis principals`:
- Three service cards: Aigua, Ambiental, Enginyeria
- Each card: icon (or colored block), title, one-line description, link to service page
- Grid: 3 columns on desktop, 1 column on mobile
- Card style: clean white card with subtle border or shadow, brand-colored top accent

Component: `ServiceCard.astro` — props: `title`, `description`, `href`, `icon?`

#### 3. Missió

Content from `home.md > ## Missió` and `## Visió energètica`:
- Two-column layout on desktop: left text, right visual accent (solid color block or simple illustration)
- Headline: "Invertim en ciutats més saludables"
- Body text from Markdown

#### 4. Valors

Content from `home.md > ## Valors`:
- Three values: Terminis d'execució, Servei personalitzat, Proximitat
- Icon + title + description for each
- Layout: horizontal list on desktop, stacked on mobile

Component: `ValueItem.astro` — props: `title`, `description`

#### 5. Contact CTA

- Simple full-width band with brand-500 background
- Text: "Parlem del teu projecte"
- Button linking to `/contact`

---

## Component Inventory

| Component | Props | Notes |
|---|---|---|
| `ServiceCard.astro` | `title`, `description`, `href` | Reused on home + service index |
| `ValueItem.astro` | `title`, `description` | Used in home + company |
| `SectionHeading.astro` | `heading`, `subheading?` | Reusable heading block |
| `CtaBand.astro` | `heading`, `cta`, `href` | Reusable CTA banner |

---

## Acceptance Criteria

- [ ] All five sections render with correct content from `home.md`
- [ ] Service cards link correctly to their respective service pages
- [ ] "Contacta'ns" button links to `/contact`
- [ ] Page is fully responsive at 375px and 1280px
- [ ] No content is hard-coded — all text comes from the content collection
- [ ] Lighthouse Performance score ≥ 90 on this page
- [ ] No JavaScript required (or only for optional CSS-only animation)

---

## Dependencies

- PRP-01 (scaffolding)
- PRP-02 (layout + design tokens)

---

## Files created / modified

| File | Action |
|---|---|
| `src/pages/index.astro` | Modified — full implementation |
| `src/components/ServiceCard.astro` | Created |
| `src/components/ValueItem.astro` | Created |
| `src/components/SectionHeading.astro` | Created |
| `src/components/CtaBand.astro` | Created |
