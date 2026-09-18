# Golden Wedding Events & Decor

A premium, editorial React website for an Indian luxury wedding planning and décor studio.

## Getting started

```bash
npm install
npm start
```

## Build for production

```bash
npm run build
```

## Structure

- `src/components` — reusable UI, one file + one CSS file per component
- `src/pages` — Home, About, Services, Collections, Portfolio, WeddingStory (dynamic), Contact
- `src/styles` — `variables.css` (design tokens), `global.css` (base styles + reveal
  utility), `animations.css` (extra reveal variants + word-by-word heading reveal),
  `typography.css` (shared text utilities + small-screen type safety net),
  `responsive.css` (cross-component mobile refinements), plus one CSS file per component
- `src/data` — editable content: `weddings.js`, `collections.js`, `services.js`,
  `pricing.js`, `testimonials.js`, `gallery.js`
- `public/images` — the studio's own photography, organized by section
  (`hero/`, `collections/`, `services/`, `pricing/`, `portfolio/`, `gallery/`,
  `about/`, `testimonials/`, `misc/`)

## What's new in this pass

### Real photography
Every placeholder (Unsplash) image across the site has been replaced with the
studio's own photography — hero, all 8 collections, all 11 services, all 3 pricing
tiers, all 6 portfolio weddings (cover + 3-image gallery each), the 8-image studio
gallery, testimonial thumbnails, the About page, both full-width statement sections,
the final CTA, and the Instagram grid. Images live in `public/images/<section>/` and
are referenced by path from the relevant `src/data/*.js` file or component — swap a
photo by replacing the file at that path (same filename) or by changing the path in
the data file.

A few notes on the source photos:
- Several carry the studio's own baked-in watermark ("Golden Wedding Decorators") —
  left as-is since it's your own branding.
- A couple of shop-signage/launch-event photos from the batch weren't used, since
  they weren't wedding décor.
- Portfolio/testimonial captions are written copy, not the real couples' names, even
  where a real couple appears in a photo.

### Mobile responsiveness
- New `responsive.css` adds small-screen refinements that span components: the
  Collections grid drops to one column under ~560px, the Instagram grid drops to two
  columns under ~480px, hero/final-CTA sections shrink gracefully on short landscape
  phones, section padding tightens on phones, and buttons get comfortable full-width
  tap targets in form/card contexts on very small screens.
- New `typography.css` adds a lower type-scale floor under 360px width so headlines
  never run wider than the viewport, plus `overflow-wrap` safety on text elements.
- `html, body { overflow-x: hidden }` as a safety net against any accidental
  horizontal scroll.
- Verified z-index layering across the fixed elements (navbar, mobile menu, scroll
  progress bar, floating contact CTA, gallery lightbox) so nothing overlaps
  incorrectly when the mobile menu or lightbox is open.
- Existing per-component breakpoints (navbar, pricing, services, gallery, contact
  form, etc.) were carried over unchanged — only gaps were filled in.

## Notes

- The contact form is front-end only (no backend wired up); connect it to your
  email/CRM service of choice.
- Update phone/email/social links in `src/components/Footer.js` and
  `src/components/ContactSection.js`.
- Update pricing at any time in `src/data/pricing.js` and `src/data/services.js`.
