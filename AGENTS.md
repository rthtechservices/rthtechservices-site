# RTH Tech Services Site — Agent Guide

This repository contains the public website for RTH Tech Services Inc. It is both a consulting portfolio and a professional identity site for Rohan Hare.

## Read first

Before changing public content or structure, read:

1. `docs/PROFILE_SOURCE_OF_TRUTH.md`
2. `docs/CONTENT_STRATEGY.md`
3. The current page or data file being changed
4. `docs/AI_SITE_WORKFLOW.md` for the expected developer/reviewer process

The profile source of truth overrides stale LinkedIn copy, old website copy, chat memory, and model inference.

## Core intent

The site should:

- provide a credible destination for searches for RTH Tech Services Inc. and Rohan Hare;
- showcase real projects, technical judgement, and useful public scripts;
- function as a subtle online résumé without looking like a CV;
- make Rohan sound competent, capable, practical, and approachable;
- signal openness to selected consulting work without sounding desperate or aggressively sales-driven.

## Content voice

- Use first person for Rohan’s narrative.
- Prefer facts, decisions, constraints, responsibilities, and outcomes over adjectives.
- Do not use self-awarded labels such as visionary, world-class, exceptional, guru, ninja, or thought leader.
- Avoid generic consultancy filler and technology-list paragraphs.
- Dry humour is acceptable in internal documentation, but public copy should remain restrained and professional.
- Never invent dates, titles, metrics, client outcomes, architecture, or project status.

## Approved factual anchors

- Rohan’s IT career began in May 2005.
- Safe wording: “nearly two decades of hands-on IT experience.”
- Approved organization names include Powerex (a subsidiary of BC Hydro), Tourism Whistler, Harper Grey LLP, Farris LLP, RBS LLP, JFK Law LLP, Escala, and RTH Tech Services Inc.
- Across Harper Grey LLP, Farris LLP, and RBS LLP, Rohan has worked with more than 400 SSRS reports, SQL analyses, and Excel reporting workbooks. Do not rewrite this as “created more than 400 reports.”
- TaskDesk and Fiscal Desk are production applications under active development.
- Java is not currently part of the Scripts Library roadmap.
- Initial contact replies should be described as within one business day; initial meetings can normally be arranged within two to three business days.

## Technical stack

- Astro 5
- TypeScript data modules
- Static output for GitHub Pages
- Shared components and layouts
- CSS design tokens in `src/styles/`

## Implementation rules

- Preserve the existing visual language and responsive breakpoint conventions.
- Reuse components and data structures where practical.
- Keep content in data files when it is reused across routes.
- Use semantic HTML and accessible labels.
- Do not add heavy client-side dependencies for content-only features.
- Do not expose secrets, private client details, internal hosts, production data, or unsanitized screenshots.
- All current repository screenshots are approved. New screenshots require explicit approval before commit.
- Do not automatically remove portfolio items marked “under review” or “TBD.”

## Validation

For any production change:

1. Run `npm ci` when dependencies are not already installed.
2. Run `npm run build`.
3. Inspect generated routes for the changed pages.
4. Confirm there are no broken internal links or missing image paths.
5. Review mobile layout at the existing 859px breakpoint.
6. Summarize factual claims added or changed in the pull request.

## Pull requests

- Use a focused branch and draft pull request.
- Keep content strategy, implementation, and major case-study expansions reviewable.
- Explain what changed, why, what facts were used, and what remains intentionally unresolved.
- Never merge automatically unless Rohan explicitly requests it.
