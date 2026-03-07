# PRP-05: Contact Page

## Goal

Build the fully functional contact page (`/contact`) with a working form submission, all contact details rendered from Markdown, and a privacy policy acknowledgement.

---

## Context

Content source: `content/contact.md`

Contact details:
- Address: Sant Joan de Caselles, Edifici Vilaedra nº75, AD100 Canillo, Andorra
- Phone: +376 877 770 / +376 677 588
- Email: abiotic.and@gmail.com
- Instagram: https://www.instagram.com/_abiotic_/

The site is static (no backend). The form must be handled via a third-party service. **Netlify Forms** is the preferred solution — zero cost, zero external service dependency beyond the host. Formspree is the fallback if the deployment target is not Netlify.

---

## Scope

### What this phase delivers

- Fully designed `/contact` page
- Working HTML form compatible with Netlify Forms (or Formspree)
- Contact details rendered from `content/contact.md`
- Privacy policy checkbox
- Success / error state handling (CSS-only or minimal inline script)
- No backend code

### Out of scope

- Privacy policy page (not in scope per PRD)
- CAPTCHA integration (optional, can be added later)
- Map embed (not in scope, adds external dependency)

---

## Technical Specification

### Page layout

Two-column layout on desktop, stacked on mobile:
- Left column (60%): contact form
- Right column (40%): contact details

#### Contact form

Fields as specified in `contact.md`:
- **Nom i cognoms** — `<input type="text" name="name" required>`
- **Correu electrònic** — `<input type="email" name="email" required>`
- **Empresa** — `<input type="text" name="company">` (optional)
- **Missatge** — `<textarea name="message" required>`
- **Acceptació política de privadesa** — `<input type="checkbox" name="privacy" required>`
- Submit button: "Envia el missatge"

Netlify Forms integration:
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
  <!-- fields -->
</form>
```

For Formspree fallback:
```html
<form action="https://formspree.io/f/{ID}" method="POST">
```

#### Form success state

After submission Netlify redirects to `?success=true`. Detect this with a minimal inline script or Astro `Astro.url.searchParams`:
- If `success=true`: hide form, show success message in Catalan: "Gràcies! Ens posarem en contacte aviat."
- Implement without client-side JS if possible (server-side Astro param check works at build time for static, so use query param detection in client with minimal `<script>`)

#### Form styling

- Labels above inputs
- Inputs: full width, `border border-stone-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500`
- Submit button: brand-500 background, white text, hover brand-700
- Privacy checkbox: inline with small legal text

#### Contact details column

Rendered from `content/contact.md`:
- Address block with a building/location icon (SVG inline or via Heroicons)
- Phone numbers (both, clickable `tel:` links)
- Email (clickable `mailto:` link)
- Instagram link (opens in new tab, `rel="noopener noreferrer"`)

---

## Component

| Component | Props | Notes |
|---|---|---|
| `ContactForm.astro` | `netlifyFormName?` | Encapsulates form markup and Netlify attributes |
| `ContactDetail.astro` | `icon`, `label`, `value`, `href?` | Single contact info row |

---

## Privacy compliance note

The checkbox links to a privacy policy. Since no separate privacy policy page is in scope, the checkbox text can read: "He llegit i accepto la política de privadesa." with "política de privadesa" as a placeholder link to `#` until a policy page exists. Document this as a known pending item.

---

## Acceptance Criteria

- [x] Contact page renders all details from `content/contact.md`
- [x] All form fields are present with correct `name` attributes
- [ ] Form submits correctly via Netlify Forms (test with `netlify dev` or deploy preview)
- [x] Privacy checkbox is required and prevents submission when unchecked
- [x] Phone numbers and email are clickable links
- [x] Instagram link opens in new tab (`target="_blank" rel="noopener noreferrer"`)
- [x] Success state is shown after submission (`?success=true` detection via minimal inline script)
- [x] Form is accessible: labels are properly associated with inputs (`for`/`id`)
- [x] Page is responsive at 375px and 1280px

---

## Dependencies

- PRP-01 (scaffolding)
- PRP-02 (design system)

---

## Files created / modified

| File | Action |
|---|---|
| `src/pages/contact.astro` | Modified — full implementation |
| `src/components/ContactForm.astro` | Created |
| `src/components/ContactDetail.astro` | Created |
