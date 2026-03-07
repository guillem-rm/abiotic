# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website redesign for **Àbiòtic**, an environmental consulting company based in Andorra. The site is being built from scratch using Astro + Tailwind CSS as a fully static site. The Astro project has not been scaffolded yet — this repo currently contains content and documentation only.

Content is written in **Catalan** (the company's operating language in Andorra).

## Tech Stack

- **Framework:** Astro (static site generation, zero client-side JS by default)
- **Styling:** Tailwind CSS
- **Content:** Markdown files in `content/` (gitignored from remote, present locally)
- **Deployment target:** Static hosts (Vercel, Netlify, Cloudflare Pages, GitHub Pages)

## Commands

Once the Astro project is scaffolded:

```bash
npm run dev        # Start dev server
npm run build      # Build static site to dist/
npm run preview    # Preview the production build
npx astro check    # Type-check the project
```

## Site Structure

Five pages total:

| Route | Content source |
|---|---|
| `/` | `content/home.md` |
| `/company` | `content/company.md` |
| `/services/water-management` | `content/services/water-management.md` |
| `/services/environmental` | `content/services/environmental.md` |
| `/services/engineering` | `content/services/engineering.md` |
| `/contact` | `content/contact.md` |

## Content Architecture

Content lives in `content/` as Markdown and is gitignored from the remote repo (kept local only). The Astro project should use **Astro Content Collections** to type-safe load these files.

## Design Principles (from PRD)

- Simple layout with clear content hierarchy — do NOT replicate the old agency site
- Minimal UI components, no sliders, no popups, no complex animations
- Readable typography, static performance (target Lighthouse > 90)
- Minimal client-side JavaScript

## Available Skills

The following Claude agent skills are installed and should be used when relevant:

- `/astro` — Astro CLI, config, and project structure reference
- `/seo-audit` — SEO audit for the site
- `/web-design-guidelines` — UI review against web design best practices
- `frontend-design` plugin — for generating high-quality frontend UI code
