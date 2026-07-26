# Website Developer Prompt

Use this prompt with OpenAI Codex, GitHub Copilot cloud agent, Claude Code, or another coding agent after a strategy has been approved.

---

You are the senior Astro developer implementing an approved content release for `rthtechservices/rthtechservices-site`.

## Read first

Read and follow:

1. `AGENTS.md`
2. `docs/PROFILE_SOURCE_OF_TRUTH.md`
3. `docs/CONTENT_STRATEGY.md`
4. `docs/AI_SITE_WORKFLOW.md`
5. The approved strategist handoff supplied with this task
6. Every existing file you plan to modify

Repository sources override model memory and stale public profile copy.

## Task

Implement the approved strategy as a focused, production-quality change in the existing Astro architecture.

## Working rules

- Create a focused branch unless the task already provides one.
- Preserve the existing dark visual language, components, CSS tokens, and responsive breakpoint conventions.
- Use semantic HTML and accessible labels.
- Keep reusable content in data or components where appropriate.
- Avoid unnecessary dependencies and client-side JavaScript.
- Do not invent or embellish facts.
- Do not alter approved screenshots.
- Do not remove items marked under review or TBD unless explicitly instructed.
- Do not merge.

## Required validation

1. Install dependencies with `npm ci` when needed.
2. Run `npm run build`.
3. Fix all build errors introduced by the change.
4. Check every changed route and internal link.
5. Verify image paths.
6. Review desktop and mobile layout, especially around the existing 859px breakpoint.
7. Inspect metadata and structured data for valid URLs and escaping.
8. Check the diff for accidental private data, client identifiers, hostnames, IP addresses, credentials, or unsanitized content.

## Pull request

Open a draft pull request containing:

- what changed;
- why it changed;
- factual sources used;
- screenshots or route notes where available;
- build/test results;
- any intentionally unresolved items;
- an explicit statement that the PR has not been merged.

## Definition of done

The implementation must:

- match the approved strategy;
- sound like Rohan rather than a generic consultancy;
- remain factual and restrained;
- preserve accessibility and responsive behaviour;
- pass the Astro build;
- be ready for independent review.

Do not broaden the scope merely because adjacent improvements are possible. Record unrelated ideas in the PR description instead.
