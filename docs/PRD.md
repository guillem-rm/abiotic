# Product Requirements Document

## Abiotic Website Redesign

## 1. Overview

This project consists of rebuilding the website of **Àbiòtic**, an environmental consulting company based in Andorra.

The current website was developed by a third-party agency and presents several limitations in terms of:

* clarity of services
* information architecture
* content structure
* modern web standards
* maintainability

The new website will be **rebuilt from scratch** using a modern static architecture while **reusing the factual company information** from the existing website.

The new implementation **must not replicate the current design, layout, or visual identity structure**. Instead, it should focus on clarity, simplicity, and modern UX.

---

# 2. Goals

The new website must:

* clearly explain the services offered by Abiotic
* present the company in a credible and professional way
* make it easy for potential clients to contact the company
* improve readability and information structure
* be easy to maintain and extend
* load extremely fast

---

# 3. Non-Goals

The following features are explicitly **out of scope**:

* CMS integration
* blog or news system
* user authentication
* dynamic backend systems
* complex animations or sliders
* marketing popups or intrusive UI

The website should remain **simple, static, and content-focused**.

---

# 4. Key Differentiation from the Current Website

The new website **must differ significantly** from the current implementation.

The current website has the following issues:

* heavy template-based design
* unnecessary visual complexity
* unclear service explanations
* poor content hierarchy
* slider-heavy layout
* difficult maintainability

The new website will instead emphasize:

* simple layout
* clear content hierarchy
* service clarity
* readable typography
* minimal UI components
* static performance

No attempt should be made to reproduce the current layout.

---

# 5. Target Audience

The website primarily targets:

* local administrations
* engineering and infrastructure stakeholders
* private companies
* environmental project managers

Secondary audience:

* organizations needing environmental consulting
* partners or collaborators

---

# 6. Website Structure

The new website will contain a **small and clear set of pages**.

## Home

Purpose:
Introduce the company and summarize services.

Sections:

* Hero introduction
* Overview of services
* Company mission
* Core values
* Contact call-to-action

---

## Company

Purpose:
Explain the origin, context and philosophy of the company.

Sections:

* Company introduction
* Environmental context
* Core values
* Areas of activity

---

## Services

Purpose:
Explain the areas of work of Abiotic.

Main service categories:

* Water infrastructure and network management
* Environmental management
* Engineering and technological solutions

Each service should have its own page.

---

## Contact

Purpose:
Allow potential clients to easily reach the company.

Sections:

* Contact form
* Phone numbers
* Email
* Physical address
* Social media

---

# 7. Content Source

The textual content of the new website will be derived from the existing website.

However:

* content should be **cleaned**
* duplicated information should be removed
* structure should be improved
* readability should be increased

---

# 8. Technical Requirements

The website must use a **modern static architecture**.

Stack:

Framework: Astro
Styling: Tailwind CSS
Content format: Markdown collections
Images: optimized static assets

Rendering:

Static site generation.

---

# 9. Performance Requirements

The website must prioritize:

* extremely fast load times
* minimal JavaScript
* optimized images
* static rendering

Target characteristics:

* Lighthouse score > 90
* minimal client-side JavaScript
* small bundle size

---

# 10. Maintainability

The project should be easy to maintain.

Key principles:

* content stored in Markdown
* reusable UI components
* simple folder structure
* minimal dependencies

The codebase should remain understandable without external documentation.

---

# 11. Deployment

The website should be deployable as a static site.

Possible platforms:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages