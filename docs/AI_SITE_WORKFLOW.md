# AI-Assisted Website Delivery Workflow

Status: Active working process  
Applies to: ChatGPT, OpenAI Codex, Claude Code, GitHub Copilot cloud agent, and human contributors

---

## 1. Goal

Use AI to accelerate research, content development, implementation, validation, and review while keeping Rohan in control of factual claims and publication.

The workflow is designed around pull requests. AI may prepare and revise changes, but public deployment should remain reviewable and reversible.

---

## 2. Repository knowledge model

The repository—not chat memory—is the system of record.

### Controlling sources

1. `docs/PROFILE_SOURCE_OF_TRUTH.md` — approved facts, names, dates, project status, and exclusions
2. `docs/CONTENT_STRATEGY.md` — narrative, information architecture, and editorial direction
3. `AGENTS.md` — repository-wide implementation rules
4. `CLAUDE.md` and `.github/copilot-instructions.md` — platform-specific entry points
5. Current code and content data — actual implementation state

When a new fact is approved, update the profile source of truth in the same pull request or in a preceding documentation pull request.

---

## 3. Recommended agent roles

### Strategist / researcher

Best suited to:

- examining the current site and profile sources;
- identifying narrative gaps;
- preparing draft copy and case-study outlines;
- separating confirmed facts from assumptions;
- creating implementation plans and acceptance criteria.

Recommended tools:

- ChatGPT with GitHub access;
- Claude Opus for a second editorial perspective;
- web research for public corroboration;
- LinkedIn as a supplementary source, not the controlling source.

### Developer

Best suited to:

- editing Astro pages and data modules;
- adding reusable components;
- implementing structured data and SEO files;
- running the build;
- preparing screenshots of changed pages where supported;
- opening a draft pull request.

Recommended tools:

- OpenAI Codex;
- GitHub Copilot cloud agent;
- Claude Code when it has local repository and build access.

### Reviewer

Best suited to:

- checking factual accuracy against the source-of-truth file;
- reviewing tone for inflation, repetition, and résumé language;
- reviewing accessibility, responsive behaviour, metadata, and broken links;
- checking the actual diff and build output;
- identifying claims that require owner approval.

Recommended tools:

- Claude Opus as an independent editorial/code reviewer;
- Codex or GitHub Copilot code review for technical verification;
- Rohan for final factual and visual approval.

Do not use the same model session as both sole author and sole reviewer when a material public change is involved.

---

## 4. Standard change lifecycle

### Step 1 — Define the change

Create an issue or prompt containing:

- objective;
- pages/files likely affected;
- facts to use;
- facts not yet known;
- content and visual constraints;
- acceptance criteria;
- explicit instruction not to merge.

### Step 2 — Research and plan

The strategist reads the controlling files and inspects the current implementation.

Output:

- proposed narrative;
- claims inventory;
- file-level implementation plan;
- unresolved questions;
- testing plan.

### Step 3 — Implement

The developer:

- creates a focused branch;
- makes the smallest coherent set of changes;
- preserves the existing design language;
- updates source-of-truth documentation if new facts are introduced;
- runs `npm ci` and `npm run build`;
- opens a draft pull request.

### Step 4 — Independent review

The reviewer checks:

- factual consistency;
- tone and readability;
- accessibility and responsive behaviour;
- internal links and image paths;
- metadata and crawlability;
- build results;
- scope creep;
- confidentiality and screenshot approval.

The reviewer should leave actionable PR comments rather than replacing the entire implementation without cause.

### Step 5 — Owner approval

Rohan reviews:

- factual claims;
- employer/client naming;
- screenshots;
- public tone;
- project status;
- contact/availability wording.

### Step 6 — Merge and deploy

After approval:

- mark the PR ready;
- merge using the repository’s preferred method;
- confirm the GitHub Pages workflow succeeds;
- validate the live URL in a private browser window;
- inspect the page source and metadata;
- request search-engine re-indexing for important page changes.

---

## 5. Recommended division of work for the current site

### Release 1 — Personal narrative and foundations

- Homepage hero copy
- Experience in Context section
- About-page narrative
- Career Through-line section
- Selected Experience section
- Contact response-time wording
- Person and Organization structured data
- `robots.txt`
- deployment verification

### Release 2 — Specific project replacements

- JFK Law LLP Supreme Court workflow case study
- Escala water-sensor to Condo Control automation case study
- replace or retire the generic SharePoint & Microsoft 365 item

### Release 3 — Product case studies

- expand TaskDesk
- expand Fiscal Desk
- add status, decisions, constraints, screenshots, and roadmap sections

### Release 4 — Reporting portfolio decision

- decide whether Enterprise Reporting & Forecasting remains one umbrella case study, becomes a reports gallery, or becomes several focused examples
- use the approved “more than 400 reporting assets” scale carefully

### Release 5 — Scripts Library expansion

- publish SQL as a first-class language
- add output examples, direct source links, test status, safety levels, and curated collections
- leave Java out until real publishable material exists

---

## 6. LinkedIn use

LinkedIn is useful for recovering chronology, titles, certifications, and role descriptions, but the current profile is dated.

Rules:

- treat LinkedIn as a source to reconcile, not copy verbatim;
- do not reuse “over 15 years”;
- do not copy generic LinkedIn adjectives into the site;
- update `docs/PROFILE_SOURCE_OF_TRUTH.md` after Rohan approves recovered facts;
- let the website emphasize professional through-lines and selected evidence rather than a full employment timeline.

A separate LinkedIn refresh can reuse the same source-of-truth file after the website narrative is stable.

---

## 7. Automation levels

### Safe to automate fully

- repository research;
- content gap analysis;
- draft copy;
- internal documentation;
- code changes on a branch;
- build and lint checks;
- link checks;
- PR creation;
- reviewer comments;
- metadata generation from approved facts.

### Requires owner approval before publication

- new employer or client names;
- dates and titles not already approved;
- metrics and outcomes;
- screenshots;
- testimonials;
- project production status;
- contact commitments;
- removal of major portfolio items.

### Should not be automated without explicit instruction

- merging to `main`;
- changing GitHub Pages or DNS settings;
- publishing unsanitized client material;
- adding third-party tracking, forms, or dependencies;
- changing the overall design direction;
- deleting under-review work.

---

## 8. Suggested ongoing maintenance

For each meaningful project milestone:

1. Add an approved fact or note to `docs/PROFILE_SOURCE_OF_TRUTH.md`.
2. Add sanitized screenshots to `public/images/`.
3. Ask a strategist agent to draft or revise the case study.
4. Assign a developer agent to implement the approved plan.
5. Assign an independent reviewer.
6. Merge only after factual and visual approval.

For scripts:

1. Publish and validate the script in the scripts repository.
2. Update its catalogue metadata there.
3. Update `src/data/scripts.ts` here.
4. Run the site build.
5. Review safety and sanitization notes before merge.

---

## 9. Definition of done

A website change is complete only when:

- public claims are supported by approved repository sources;
- the copy sounds like Rohan rather than a generic agency;
- the Astro build passes;
- changed pages work on desktop and mobile;
- links and images resolve;
- metadata is correct;
- confidentiality requirements are satisfied;
- the pull request is reviewed;
- the live deployment is verified after merge.
