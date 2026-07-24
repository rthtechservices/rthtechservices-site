# Handoff: RTH Tech Services — IT Consulting Portfolio Site

## Overview
A multi-page portfolio/consulting site for Rohan Hare (RTH Tech Services Inc.), an IT consultant specializing in automation, reporting and Microsoft 365 solutions. Structure: a homepage with a "latest work" grid, a reusable case-study/showcase template used across 5 project pages, a filterable scripts library, and a filterable reports gallery with a detail modal. Built with an Eleventy (11ty)-style mental model in mind — shared header/footer partials, a reusable page layout, and a single content/data module — even though the prototype itself is plain HTML/JS, not compiled 11ty templates.

## About the Design Files
The files in `source/` are **design references built in HTML** — high-fidelity prototypes of look, content, and interaction behavior. They are not production code to copy verbatim. The task is to **recreate this design in the target codebase's actual stack** (11ty, Next.js, or whatever the team uses) following that stack's conventions — templates/partials, a proper templating data layer, componentized CSS, etc. Where the prototype approximates a pattern (e.g. its JS-based responsive breakpoints, or its plain-JS filter logic), reimplement it using idiomatic tools for the target framework (real CSS media queries, framework state/routing, etc.) rather than porting the prototype's JS 1:1.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy and component states shown are final-intent, not placeholder. Recreate pixel-close using the values below. Photos are drag-and-drop placeholders (see Assets) and should be swapped for real photography/screenshots before launch.

## Site Map & Templating Structure
- `Header.dc.html` — shared header partial (logo, nav, CTA, mobile hamburger). Imported on every page.
- `Footer.dc.html` — shared footer partial. Imported on every page.
- `Home.dc.html` — homepage (hero + latest work grid).
- `ShowcaseLayout.dc.html` — **reusable case-study template**. Takes structured props (title, category, summary, "what it solves" bullets, tech stack, feature cards, freeform sections). This is the pattern to implement as an 11ty layout (`_includes/showcase.njk` or similar) driven by front-matter/data.
- `TaskDesk.dc.html`, `FiscalDesk.dc.html`, `Reporting.dc.html`, `SharePoint.dc.html`, `Infrastructure.dc.html` — the 5 case studies. Each is a thin data file that feeds `ShowcaseLayout`. In 11ty terms: 5 content pages using one layout, each supplying its own front-matter data.
- `Work.dc.html` — index/grid of all case studies.
- `ScriptsLibrary.dc.html` — filterable/searchable script directory with a detail modal.
- `ReportsGallery.dc.html` — filterable report gallery with a detail modal (screenshot + methodology).
- `About.dc.html`, `Contact.dc.html` — standard pages.
- `site-data.js` — **the content/data layer**: nav items, the 6 "latest work" items, the scripts array, and the reports array. In 11ty this maps directly to a `_data/*.json` or `_data/*.js` file — the case-study pages, Home's grid, Work's grid, and the two libraries all read from here.
- `theme.js` — shared style constants and small helpers (color palette, CTA/card/chip style builders, a `attachResponsive` window-resize helper used for the JS-driven responsive breakpoints). Recreate as real design tokens (CSS custom properties / Sass variables) in the target codebase rather than JS-built inline style strings.

## Screens / Views

### Header (all pages)
- Sticky top bar, `rgba(9,8,14,0.9)` background with `backdrop-filter: blur(10px)`, 1px bottom border `rgba(255,255,255,0.08)`.
- Left: 38×38px logo mark (`assets/rth-logo.png`) + wordmark "Rohan Hare" (Manrope SemiBold 18px, solid `#F2F1F7`) with "RTH Tech Services Inc." beneath (BC Sans, 10.5px, uppercase, letter-spacing 0.09em, `#75738A`).
- Center-right: nav — Work / Scripts Library / Reports Gallery / About / Contact. Manrope 14px/500. Active item: solid `#F2F1F7` text + 2px `#5CC1FF` bottom border. Inactive: `#9A9AAE`, hover → `#F2F1F7`.
- Right: "Discuss a project" CTA button (see CTA spec below), small variant (`10px 18px` padding, 14px text).
- **Mobile (<860px):** nav and CTA hide; a hamburger button (3 bars, 18×2px each, `#F2F1F7`) appears and toggles a full-width dropdown nav panel below the header.

### Footer (all pages)
- `#0B0A11` background, thin 1px gradient line across the top (`transparent → #5CC1FF → #8F00FF → transparent`, 50% opacity) as the sole color accent.
- 3-column grid (desktop): 1.3fr / 0.9fr / 1fr, 48px gap, collapses to 1 column under 860px.
- Col 1: "RTH TECH SERVICES" wordmark set in **ROGER** (24px, solid `#F2F1F7`, letter-spacing 0.02em — NOT a gradient), "SOLUTIONS CONSULTANT" beneath in Manrope 11px/600, uppercase, letter-spacing 0.12em, `#8890A0`; then a BC Sans body blurb.
- Col 2: "Site" nav links. Col 3: "Contact" details (email, LinkedIn, location, availability).
- Bottom bar: `© 2026 RTH Tech Services Inc. All rights reserved.` (legal name kept here even though the wordmark above says "RTH TECH SERVICES").

### Home
- Hero: 1.15fr/0.85fr grid (1 col under 860px). Left: eyebrow label, H1 (Manrope 600, `clamp(30px,4.5vw,44px)`, `#F2F1F7`) with the phrase "reporting that solve real operational problems." rendered as a `linear-gradient(90deg,#5CC1FF,#8F00FF)` text-fill — **this is the one intentional gradient-text treatment on the site, reserved for this headline**. Bio paragraph (BC Sans, 16.5px, `#B4B1C6`). Primary CTA + a secondary "View selected work" text link (Manrope, underline).
- Right: portrait image slot, 3:4 aspect, rounded 6px corners, subtle 1px ring only (`box-shadow:0 0 0 1px rgba(255,255,255,0.08)`) — no heavy glow.
- "Latest work" section: header row with "View all work →" link; 3-column card grid (1 col mobile) pulling from `site-data.js`'s `workItems`. Cards: `#121116` bg, 1px `rgba(255,255,255,0.10)` border, 16:10 image slot, title (Manrope 18px/600), tagline (14px, `#8890A0`), summary (BC Sans 14px, `#9A9AAE`).

### Showcase / Case Study template (used by all 5 project pages)
- Back link → Work index.
- Category eyebrow: small blue accent bar (22×2px, `#5CC1FF`, subtle glow) + label text, `#A9B3C1`, 12.5px uppercase, letter-spacing 0.09em — always left-aligned, never a bright/purple fill.
- H1 title, summary paragraph, full-bleed 16:9 hero image slot.
- Two-column section (0.9fr/1.1fr, stacks under 860px): "What it solves" bullet list (blue dot markers) + "Technology stack" neutral chip list.
- "Highlights" — 3-up feature cards (1 col mobile), each a title + short body.
- Freeform "sections" — heading + paragraph blocks, arbitrary count, for architecture/roadmap/lessons-learned style content.
- Bottom CTA band: `#0F0D14` bg, "Have a similar problem to solve?" + Discuss-a-project CTA.

### Work (index)
- 2-column card grid (1 col mobile) of all 6 items, same visual language as Home's cards plus a row of neutral tag chips per card.

### Scripts Library
- Intro copy + a note that entries are demonstration examples, not deployed-client artifacts.
- Search input (full width).
- Filter row: Language / Platform / Function / Complexity / Availability, each a horizontal row of pill buttons (see Filter Chip spec).
- 2-column card grid (1 col mobile) of matching scripts; each card shows title, a "Demonstration" badge, an availability badge, summary, and 4 metadata chips (language/platform/function/complexity). Cards are real `<button>` elements (keyboard accessible) that open a detail modal (prerequisites, safety notes, availability).

### Reports Gallery
- Same filter-row pattern (Platform / Function / Output Type / Audience).
- 2-column gallery cards with a 16:10 screenshot slot, title, output-type badge, business question, and metadata chips + a "Demonstration" badge.
- Clicking a card opens a modal: larger screenshot, business question, audience, data sources, key calculations, intended use. Modal has `role="dialog"`, `aria-modal="true"`, closes on Escape or backdrop click, and returns focus to the triggering card on close.

### About
- Portrait image slot (no border/frame — designed for a transparent-background cutout photo) with a soft ambient radial glow (`rgba(92,193,255,0.10)` → `rgba(143,0,255,0.05)` → transparent) behind it, not a frame.
- Bio copy (3 paragraphs) + CTA row.
- "How I work" — 3-up value props (1 col mobile).

### Contact
- Two-column layout (stacks under 860px): contact details left, form right.
- Form fields: Name, Email (required, validated), Organization (optional), Message (required). Real `name`/`id`/`autocomplete`/`required`/`aria-invalid` attributes; invalid fields get a `#FF9E9E` border. Submit shows a "Sending…" state then a success panel. **The form's submit handler is a client-side simulation only — no backend is wired up.** Wire it to a real static-form-compatible endpoint (Netlify Forms, Formspree, a serverless function, etc.) in the target codebase.

## Interactions & Behavior
- **CTA buttons** ("Discuss a project", "Send inquiry") use a single shared `.rth-cta` CSS class (real `:hover`/`:focus-visible`/`:active` pseudo-classes — not JS-driven) — see Design Tokens for exact values.
- **Cards** (`.rth-card`) get a bright-blue border + layered blue box-shadow ring + 2px lift on hover/focus, via real CSS pseudo-classes.
- **Filter chips**: click toggles a single-select filter per dimension (clicking the active chip again clears it); active state = blue border + tinted background + glow.
- **Responsive**: implemented in the prototype via a JS `resize` listener (`theme.js`'s `attachResponsive`) toggling an `isMobile` flag at 860px, because the prototype cannot use real `@media` queries. **Reimplement this with real CSS media queries in production** — the JS approach was a prototyping constraint, not a design intent.
- **Reduced motion**: `prefers-reduced-motion: reduce` disables transitions site-wide.
- **Modals** (Scripts + Reports): Escape closes, backdrop click closes, focus returns to the trigger.

## Design Tokens

### Colors
- Background gradient (page): `radial-gradient(900px 600px at 10% -10%, rgba(143,0,255,0.07), transparent 55%), linear-gradient(160deg, #0d0c11 0%, #09080b 55%, #08080a 100%)`
- Header/footer surface: `#0B0A11` / `rgba(9,8,14,0.9)`
- Card surface: `#121116`
- Border (neutral, default): `rgba(255,255,255,0.10)`
- Text primary: `#F2F1F7` · Text body: `#C7C5D8` · Text muted: `#9A9AAE` · Text faint: `#75738A`
- Brand blue: `#5CC1FF` (primary interactive color) · Brand purple: `#8F00FF` (secondary/atmospheric accent only — used in the footer top line, the Home headline gradient, and subtle glows)
- Error/invalid: `#FF9E9E`

### CTA button (`.rth-cta`)
```
border: 2px solid #5CC1FF
background (rest): rgba(10,10,14,0.55)
color: #FFFFFF
font: Manrope 600 15px (14px/10px-18px padding for the small header variant, .rth-cta--sm)
padding: 14px 26px; border-radius: 4px
box-shadow (rest): inset 0 0 10px rgba(92,193,255,0.15), 0 0 10px rgba(92,193,255,0.18)
hover: background rgba(92,193,255,0.16); box-shadow: inset 0 0 16px rgba(92,193,255,0.28), 0 0 32px rgba(92,193,255,0.42), 0 0 46px rgba(143,0,255,0.14); translateY(-1px)
focus-visible: outline 2px solid #5CC1FF, outline-offset 3px
active: translateY(0); box-shadow: inset 0 0 10px rgba(92,193,255,0.2), 0 0 18px rgba(92,193,255,0.3)
```

### Card hover (`.rth-card`)
```
rest border: 1px solid rgba(255,255,255,0.10)
hover: border-color #5CC1FF; box-shadow: 0 0 0 1px rgba(92,193,255,.65), 0 0 20px rgba(92,193,255,.24), 0 0 36px rgba(92,193,255,.12); translateY(-2px)
focus-visible: outline 2px solid #5CC1FF, outline-offset 2px
transition: border-color/box-shadow/transform 0.2s ease
```

### Typography
- **ROGER** — wordmark only. Used exactly once: the footer "RTH TECH SERVICES" lockup, 24px. Never for body, nav, or buttons.
- **Manrope** (500/600/700) — all headings, project/card titles, nav links, buttons, filter chips.
- **BC Sans** (400/700/italic; fallback **Source Sans 3**) — body copy, form fields, descriptions, metadata, tags/chips, captions, footer detail text.
- Font files are in `fonts/` (woff2) — `Roger-Regular.woff2`, `BCSans-Regular.woff2`, `BCSans-Bold.woff2`, `BCSans-Italic.woff2`. Manrope and Source Sans 3 are loaded from Google Fonts.
- Base sizes: H1 28–44px (fluid via `clamp()`), section H2 21–26px, card title 17–20px, body 14–16.5px, meta/labels 11–13px.

### Spacing / Layout
- Page max-width: 1180px, centered, 32px side padding (20px under 860px).
- Standard section vertical rhythm: ~48–100px top/bottom padding depending on section weight.
- Grid gaps: 22–30px for card grids, 48–64px for major column splits.
- Border radius: 3–6px throughout (never fully rounded/pill except chips at 3px).
- Breakpoint: 860px (single breakpoint used for all mobile collapses).

## Assets
- `assets/rth-logo.png` — RTH Tech Services logo mark (blue-to-purple circular "maze" icon), used in the header (38px) and favicon.
- `fonts/` — Roger and BC Sans woff2 files, user-supplied; original source files (otf/ttf/woff/woff2, all weights) are in the project's `uploads/` folder if more weights are needed.
- All photos (portrait, case-study screenshots, report screenshots) are **drag-and-drop placeholders** in the prototype (`<image-slot>` elements) — no real imagery is included. Replace with real photography and product screenshots (report screenshots should use anonymized/synthetic data per the Reports Gallery copy).

## Content Notes
- Case-study copy for TaskDesk and Fiscal Desk is intentionally minimal/high-level — technical details (architecture, feature list) beyond "Python + PostgreSQL" (TaskDesk) and "PostgreSQL-based" (Fiscal Desk) were not confirmed and should be filled in by the client before launch, not invented.
- All Scripts Library and Reports Gallery entries are labeled "Demonstration" — they are illustrative sample content, not a record of deployed client work. Replace with real entries (or keep the demonstration labeling) per the client's direction.
- The Contact form has no backend wired up (see Interactions & Behavior above).

## Files
All source files are in `source/`:
`Header.dc.html`, `Footer.dc.html`, `Home.dc.html`, `Work.dc.html`, `ShowcaseLayout.dc.html`, `TaskDesk.dc.html`, `FiscalDesk.dc.html`, `Reporting.dc.html`, `SharePoint.dc.html`, `Infrastructure.dc.html`, `ScriptsLibrary.dc.html`, `ReportsGallery.dc.html`, `About.dc.html`, `Contact.dc.html`, `site-data.js`, `theme.js`.

These are custom "Design Component" HTML files (a proprietary prototyping format: inline styles, `{{ }}` template holes, a small custom-element runtime) — they will not run as-is outside this tool. Read them as **reference markup and copy**, not as code to lift directly; a plain browser will not render them correctly without the tool's runtime script (`support.js`, not included here since it's a closed prototyping runtime, not meant for reuse).
