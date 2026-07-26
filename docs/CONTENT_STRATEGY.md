# RTH Tech Services Website Content Strategy

Status: Draft for review  
Scope: Content, information architecture, project storytelling, script-library standards, discoverability, and deployment checks  
Production code changed: No

---

## 1. Executive assessment

The redesigned site has strong visual and structural foundations. It already communicates that RTH Tech Services works across reporting, Microsoft 365, automation, infrastructure, and custom development. The design feels deliberate, technical, and credible rather than like a generic consultancy template.

The main weakness is not a lack of pages. It is a lack of **professional narrative**.

At present, the site explains what Rohan can build, but says comparatively little about:

- how more than two decades of experience shaped the way he works;
- the range of environments in which he has operated;
- the progression from hands-on technical support into systems analysis, reporting, automation, project delivery, governance, and consulting;
- why he is credible when solving ambiguous operational problems;
- what it is like to work with him;
- the constraints, judgement, and decision-making behind the showcased projects.

The solution should not be a résumé page. It should be a set of small, well-placed narrative elements that let a visitor infer experience and competence from context.

The desired impression is:

> Experienced enough to understand the consequences, technical enough to build the solution, practical enough not to over-engineer it, and approachable enough to work through the messy parts with people.

---

## 2. Immediate deployment and discoverability concern

Before adding more content, confirm that GitHub Pages is actually deploying the Astro build through GitHub Actions.

The current deployment workflow contains an explicit warning that it is inert until the repository's Pages source is changed to **GitHub Actions**. External text retrieval is still receiving the retired “Website Coming Soon” content, and there is no workflow run associated with the redesign commit.

Recommended check:

1. Open **Repository Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Manually run the `Deploy to GitHub Pages` workflow once.
4. Confirm the workflow deploys the `dist` artifact successfully.
5. Test the home page and `/about/`, `/work/`, `/scripts/`, and `/contact/` in a private browser window.
6. Confirm the page source contains the new title, description, and Astro-generated markup.
7. Request re-indexing in Google Search Console after deployment is stable.

This matters because the site’s first stated purpose is to give people a useful destination when they search for RTH Tech Services Inc. More content will not help if crawlers continue receiving the placeholder.

---

## 3. Content principles

### 3.1 Write in the first person

First person is the correct voice for the site. Third person would feel artificial because this is clearly an owner-operated consultancy and personal portfolio.

Use calm statements of fact:

- “I have worked across…”
- “My role often sits between…”
- “I tend to be brought in when…”
- “The common thread through my work is…”

Avoid self-awarded labels such as “visionary,” “exceptional,” “world-class,” “thought leader,” or “expert.” Competence should be demonstrated through scope, decisions, constraints, and outcomes.

### 3.2 Describe the work, not the ego

A useful formula is:

> Situation → responsibility → decision → practical result

For example:

> I have spent much of my career in environments where reporting, access, documentation, and operational continuity matter. That has made me cautious about fragile automation and very interested in systems that remain understandable after the original developer is gone.

That says something meaningful about experience without announcing greatness from a rooftop while a brass band fires confetti cannons.

### 3.3 Use specifics selectively

Specifics create credibility when they explain scale or complexity:

- maintaining and improving a reporting estate of more than 300 SSRS reports;
- designing reporting against Thomson Reuters Elite 3E data;
- supporting financial, matter, timekeeper, profitability, WIP, AR, and forecasting requirements;
- working across enterprise IT, professional services, legal, property-management, and small-business environments;
- moving between business analysis, implementation, documentation, governance, and support;
- delivering systems that combine SQL, reporting, Microsoft 365, PowerShell, Python, PostgreSQL, Power Automate, and infrastructure components.

Do not publish client-confidential details, internal system names, private architecture, production data, or claims that cannot be demonstrated safely.

### 3.4 Avoid technology-list paragraphs

The current home and About copy contain long lists of platforms. Those lists help search engines but read more like capability inventory than a human story.

Use technology chips, project metadata, and the Scripts Library for keyword coverage. Let the narrative copy explain judgement, context, and approach.

---

## 4. Recommended site narrative

The site should communicate five things across its pages:

1. **What Rohan does** — solves operational problems using reporting, automation, Microsoft platforms, data, infrastructure, and custom software.
2. **Where that experience came from** — more than two decades across support, systems administration, enterprise operations, reporting, project delivery, professional services, and independent consulting.
3. **How he thinks** — business analysis first, right-sized architecture, supportable handoff, clear documentation, no needless complexity.
4. **What he has built** — case studies with screenshots, constraints, decisions, and outcomes.
5. **What he gives back** — polished, documented scripts that other technical people can safely learn from and adapt.

No single page must carry all five. The story should accumulate naturally as visitors move through the site.

---

## 5. Homepage recommendations

### 5.1 Keep the current headline

The current headline is strong:

> Systems, automation and reporting that solve real operational problems.

It is direct, distinctive, and aligned with the work.

### 5.2 Replace the dense hero biography

The current biography is accurate but tries to describe every capability in one paragraph. Replace it with a clearer positioning statement.

#### Proposed homepage hero copy

> I build practical systems for organizations where the work is complicated, the data is messy, and the off-the-shelf answer never quite fits. My background spans enterprise IT operations, reporting, automation, Microsoft 365, and custom development—often in legal, professional-services, property-management, and other operationally demanding environments.

Optional second sentence beneath it, styled slightly smaller:

> The common thread is simple: understand the real problem, build something supportable, and leave the organization with fewer moving parts than it started with.

### 5.3 Add a compact “Experience in context” strip

Place this between the hero and Latest Work. It should not resemble a résumé timeline.

Suggested heading:

> Experience in context

Suggested four items:

**Enterprise operations**  
Long-running systems, formal change processes, cross-functional delivery, security, resilience, and business continuity.

**Legal & professional services**  
Financial and operational reporting, matter-centric systems, document governance, external collaboration, and workflows where accuracy matters.

**Owner-operated organizations**  
Practical technology planning, Microsoft 365 administration, infrastructure, vendor coordination, and solutions designed for small teams to maintain.

**Independent product development**  
Desktop applications, PostgreSQL-backed tools, automation utilities, and the full path from rough requirement to working, documented software.

This communicates occupational breadth without listing employer names and dates.

### 5.4 Add one trust statement near Latest Work

Suggested copy:

> These are not concept mock-ups presented as finished products. Each project reflects a real operational need, an implementation constraint, or a tool I built to make recurring work more reliable.

Where a project is still in development, label it clearly as **In development** or **Active build**.

---

## 6. About page recommendations

The existing About page is professional but generic. Its first two paragraphs largely repeat the homepage and its technology lists. The page should instead explain the career through-line and working style.

### 6.1 Proposed replacement About copy

#### Opening

> Most of my career has been spent in the space between technology and operations: the point where a business knows something is inefficient, unreliable, or harder than it should be, but the solution does not fit neatly into one product or job description.

> I started in hands-on technical support and systems administration, working deeply in Microsoft and Windows environments. Over time, that work expanded into SQL Server, enterprise reporting, SharePoint, infrastructure, automation, project delivery, business continuity, governance, and custom application development. The titles changed; the underlying role did not. I was usually the person expected to understand how the pieces connected, find the actual cause of the problem, and make the result usable by people who did not want a lecture on the machinery underneath it.

#### Environments and perspective

> I have worked inside large enterprise environments, with legal and professional-services firms, with property-management organizations, and with smaller businesses where one person may be responsible for an entire technology estate. Those environments demand different tools, but they reward the same habits: listen carefully, verify assumptions, document decisions, protect the organization from avoidable risk, and do not build something more complicated than the team can realistically support.

#### Current work

> Today, my work combines consulting, systems analysis, technical project delivery, reporting, automation, Microsoft 365, and software development. Some engagements begin with a clearly defined deliverable. Others begin with a spreadsheet, a recurring complaint, a brittle manual process, or the sentence, “There has to be a better way to do this.” Those are often the interesting ones.

#### Closing

> RTH Tech Services Inc. is the vehicle through which I take on selected consulting and development work. I am most useful when a problem crosses boundaries—data and workflow, infrastructure and access, reporting and business interpretation, or technology and the people who have to live with it afterward.

### 6.2 Add “The career through-line” section

Suggested heading:

> The career through-line

Suggested introduction:

> My experience is broad, but it is not random. Each stage added another layer to the same core capability: understanding operational systems well enough to improve them responsibly.

Suggested cards:

**Support & systems administration**  
Built the diagnostic habits: reproduce the problem, inspect the environment, understand dependencies, and fix the cause rather than the symptom.

**Data, SQL & reporting**  
Learned to translate business questions into governed definitions, reliable queries, useful reports, and outputs that decision-makers can trust.

**Enterprise operations & project delivery**  
Added change management, risk, resilience, documentation, stakeholder coordination, testing, and the reality that technically correct is not the same as operationally successful.

**Consulting & product development**  
Brought the pieces together: clarify the need, choose the right architecture, build the solution, explain it clearly, and remain accountable for how it behaves in the real world.

### 6.3 Add “Where I have worked” without a job timeline

Suggested heading:

> Environments that shaped my approach

Suggested items:

- **Enterprise and regulated operations** — formal governance, business continuity, disaster-recovery exercises, security controls, and systems with many stakeholders.
- **Legal and professional services** — time-sensitive financial reporting, matter data, profitability analysis, document management, external collaboration, and high expectations for accuracy and confidentiality.
- **Property management and strata operations** — Microsoft 365 administration, records governance, hardware and infrastructure planning, vendor coordination, and technology that must remain manageable for non-technical users.
- **Independent consulting and small business** — direct accountability, limited budgets, incomplete requirements, and a strong preference for solutions that provide obvious value without creating a new administrative burden.

Employer names and exact dates can remain on LinkedIn. The website should explain what those environments taught and why the experience matters.

### 6.4 Expand “How I work” from three to five principles

Keep the current three and add two:

**Traceable decisions**  
Requirements, assumptions, changes, and operational decisions are documented so the solution can be understood later—not reconstructed from folklore.

**Useful communication**  
Technical detail is important, but it must be translated into risks, options, decisions, and next actions that the audience can actually use.

Revised order:

1. Business analysis first
2. Practical architecture
3. Traceable decisions
4. Built for handoff
5. Useful communication

Rename “No unnecessary complexity” to **Practical architecture**. The existing body can remain with a small edit:

> The right-sized solution for the organization—not the most impressive architecture, and not enterprise tooling the team cannot realistically maintain.

---

## 7. A subtle alternative to a résumé: Selected experience notes

Rather than adding an Employment History page, add a reusable component titled **Selected experience notes** near the bottom of About.

Each note should be one or two sentences and focus on responsibility or scale, not self-praise.

Draft entries:

- Managed and improved a large SSRS reporting estate supporting financial, operational, matter, timekeeper, WIP, accounts-receivable, and profitability reporting in a legal environment.
- Designed reporting and data solutions around Thomson Reuters Elite 3E, including forecasting, reconciliation, executive reporting, and reusable SQL logic.
- Delivered Microsoft 365, SharePoint, Power Automate, governance, document-management, and collaboration solutions for organizations with different levels of technical maturity.
- Worked in enterprise IT operations and project environments where resilience, disaster recovery, access controls, documentation, and formal change processes were part of delivery—not optional extras.
- Acted as a practical single point of accountability for smaller organizations, covering Microsoft 365, domains, infrastructure, hardware, vendors, applications, and general technical planning.
- Built internal tools and desktop applications using Python, PostgreSQL, SQL, document generation, and AI-assisted workflows to solve needs not well served by off-the-shelf products.

Before publishing, confirm whether the “more than 300 SSRS reports” figure should be stated publicly. It is credible and useful, but the exact scale should be approved deliberately.

---

## 8. Work and case-study recommendations

The reusable case-study layout is a good foundation, but the current content is still closer to a capability summary than a convincing project story. The strongest proof of competence will come from explaining constraints and decisions.

### 8.1 Recommended case-study structure

Each case study should contain:

1. **Context** — what environment or workflow existed?
2. **Problem** — what was unreliable, manual, fragmented, slow, or risky?
3. **Constraints** — legacy systems, security, limited budget, no API, incomplete data, user adoption, hosting restrictions, or confidentiality.
4. **Role** — what Rohan personally analyzed, designed, built, coordinated, or supported.
5. **Solution** — the architecture and workflow in plain language.
6. **Key decisions** — why this approach was chosen over plausible alternatives.
7. **Outcome** — measurable result where possible; otherwise an honest operational result.
8. **What changed after delivery** — adoption, next phase, lessons, or ongoing roadmap.
9. **Screenshots** — annotated images showing what the user sees and what problem each screen solves.
10. **Technology** — retained as chips, not allowed to become the story itself.

### 8.2 Recommended schema changes

Extend `CaseStudy` with optional fields:

```ts
interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  summary: string;
  status?: 'Production' | 'Active build' | 'Prototype' | 'Ongoing program';
  context?: string;
  constraints?: string[];
  role?: string[];
  decisions?: { title: string; body: string }[];
  outcomes?: string[];
  metrics?: { value: string; label: string }[];
  screenshots?: { src: string; alt: string; caption: string }[];
  confidentialityNote?: string;
  whatItSolves: string[];
  stack: string[];
  features: { title: string; body: string }[];
  sections: { heading: string; body: string }[];
}
```

This allows richer projects without forcing invented metrics into every case study.

### 8.3 TaskDesk content direction

TaskDesk should be positioned as more than a to-do application. Its strongest story is the attempt to preserve operational context for a solo consultant working across multiple clients and technical disciplines.

Suggested framing:

> TaskDesk began as a response to a recurring problem in consulting work: the task itself was rarely the only thing that mattered. Useful context was scattered across email, notes, source files, conversations, time records, and partially completed technical work. The application is being designed to keep that context attached to the work, make priorities visible, and reduce the amount of information that has to be reconstructed each time a project is resumed.

Potential sections:

- Why generic task managers were insufficient
- PostgreSQL data model and auditability
- Client, project, task, time, narrative, and document context
- AI-assisted planning without surrendering source-of-truth control
- Migration from prototype to maintainable desktop application
- Current status and roadmap

### 8.4 Fiscal Desk content direction

Fiscal Desk should focus on the relationship between time entries, disbursements, tax treatment, billing narratives, and professional invoice output.

Suggested framing:

> Fiscal Desk is being built around the reality that consulting invoices are not merely totals. They are a record of work performed, costs incurred on a client’s behalf, applicable tax treatment, supporting documentation, and a narrative clear enough for the client to understand what they are paying for.

Potential sections:

- Why general accounting software did not fit the workflow
- Separating professional services from pass-through disbursements
- GST and mixed-tax treatment
- Narrative generation and editing
- PostgreSQL as the financial system of record
- Multi-page invoice and supporting-detail generation
- Audit trail and document retention

### 8.5 Enterprise Reporting & Forecasting content direction

This should become the strongest flagship case study because it demonstrates scale, domain expertise, business interpretation, and long-term ownership.

Add:

- the legal/professional-services reporting context;
- experience supporting a large catalogue of SSRS reports;
- Thomson Reuters Elite 3E as a source platform where appropriate;
- examples of business questions: matter profitability, WIP conversion, AR aging, realization, utilization, fees received, and forecast accuracy;
- the difference between extracting data and defining a trusted business measure;
- report lifecycle: requirements, SQL, validation, deployment, security, documentation, and support;
- sanitized screenshots and methodology notes;
- an explicit confidentiality statement.

Avoid claiming a single shared semantic layer unless that accurately reflects the implemented environment. The present copy should be reviewed for this point.

### 8.6 SharePoint & Microsoft 365 content direction

This case study should be divided into selected initiatives rather than presented as one generic umbrella.

Recommended initiative cards:

- Matter-centric collaboration portal
- Approved Source Register
- OCR and searchable-document intake
- Financial-record retention structure
- Permission and external-sharing governance
- Power Automate routing and lifecycle workflows
- Custom SharePoint formatting and SPFx utilities

For each initiative, include the business problem, governance concern, implementation choice, and result.

### 8.7 Infrastructure content direction

Keep this grounded in resilience and operational support rather than displaying a collection of home-lab products.

Strong themes:

- layered remote-access paths;
- tested restoration rather than “backup succeeded” messages;
- monitoring designed around actionable failure conditions;
- database and container health;
- business continuity and disaster-recovery exercise experience;
- endpoint and system inventory;
- remote support where loss of access is itself the failure being designed against.

Be careful not to describe hypothetical fail-safe designs as production deployments unless they have actually been implemented and tested.

---

## 9. Scripts Library strategy

The Scripts Library can become one of the site’s strongest credibility signals because it demonstrates code quality, judgement, documentation, and willingness to contribute useful work publicly.

### 9.1 Publishing standard

Every published script should include:

- clear purpose and use case;
- supported runtime and prerequisites;
- parameterized inputs—no embedded personal paths, hosts, domains, credentials, tenant IDs, or client references;
- comment-based help or equivalent documentation;
- examples using reserved documentation domains and IP ranges;
- `-WhatIf`, confirmation, dry-run, or read-only defaults where destructive actions are possible;
- structured logging and useful error handling;
- predictable exit codes where appropriate;
- output examples;
- security and privacy notes;
- validation status and test notes;
- license and contribution guidance;
- a clear statement that users must review and test before production use.

### 9.2 Add SQL as a first-class language

The current library publishes PowerShell and Python but no SQL despite SQL and reporting being central to the portfolio.

Recommended first SQL releases:

1. SQL Server object dependency inventory
2. Database/table/row-count inventory with size reporting
3. Index usage and maintenance candidate report
4. Safe duplicate-file or duplicate-record analysis pattern
5. Matter or client monthly activity pattern using a calendar/period table
6. Date-range snapshot pattern for “active as of month end” reporting
7. SSRS dataset validation and reconciliation queries
8. SQL Agent job inventory and failure summary
9. Permission and role membership inventory
10. Generic substring/token extraction pattern with malformed-input safeguards

Each SQL item should use a sample schema or clearly marked placeholders rather than client-specific table names unless the example is intentionally tied to a public product schema.

### 9.3 Add Java only when there is real material

Do not add Java as a category merely to make the library look broad. A smaller library of excellent, tested scripts is more credible than a language zoo assembled to impress passing recruiters.

### 9.4 Improve script cards

Add optional fields:

- `problem`
- `whyItExists`
- `testedOn`
- `riskLevel`
- `lastReviewed`
- `outputExample`
- `relatedProject`
- `repoUrl`

The detail modal should answer three questions quickly:

1. What problem does this solve?
2. Is it safe and relevant for my environment?
3. Where can I inspect the source and documentation?

### 9.5 Create editorial collections

Once the library grows, add curated collections such as:

- Windows diagnostics toolkit
- SQL Server reporting utilities
- Microsoft 365 administration
- File inventory and migration
- Remote support and resilience
- Data validation and reconciliation

This is more useful than relying only on language filters.

---

## 10. Additional pages and sections

### 10.1 Add a “Notes” section later

A small technical Notes section could contain concise write-ups such as:

- why a technically successful backup is not necessarily restorable;
- how to approach month-end snapshot reporting in SQL;
- designing scripts that are safe to publish;
- lessons from maintaining a large SSRS estate;
- when SharePoint formatting is enough and when SPFx is justified;
- the difference between a requested feature and the operational problem behind it.

This would improve search visibility and demonstrate thinking without requiring traditional blog-post theatre.

Do not launch it empty. Add it after at least three useful articles are ready.

### 10.2 Reports Gallery

The Reports Gallery should remain hidden until it has enough sanitized content to feel intentional. Three excellent examples are sufficient for launch:

- Matter profitability or budget forecast
- Executive financial/operational summary
- Timekeeper or practice-group performance analysis

Each entry should explain:

- the business question;
- intended audience;
- source systems;
- important definitions and calculations;
- validation approach;
- how the output informs a decision;
- what has been anonymized.

---

## 11. Search, credibility, and technical SEO

The current layout includes titles, descriptions, canonical URLs, Open Graph tags, and a sitemap integration. Add the following:

### 11.1 Structured data

Add JSON-LD for:

- `Person` — Rohan Hare;
- `ProfessionalService` or `Organization` — RTH Tech Services Inc.;
- `WebSite` — site identity and canonical URL;
- `CreativeWork` or `SoftwareSourceCode` on script detail pages, when individual routes exist.

Suggested organization descriptors:

- IT consulting
- systems analysis
- reporting and analytics
- automation
- Microsoft 365 and SharePoint
- custom software development

### 11.2 Crawl controls

Add and verify:

- `public/robots.txt` with the sitemap URL;
- a valid generated sitemap;
- no accidental `noindex` headers or tags;
- a stable custom-domain `CNAME` in the deployed artifact;
- redirects or canonical handling between `.com`, `.ca`, and any GitHub Pages host;
- a custom Open Graph image rather than the small logo alone.

### 11.3 Search-oriented copy

Use natural phrases in headings and introductory text rather than stuffing keywords:

- IT consultant in Vancouver
- Microsoft 365 and SharePoint consultant
- SQL Server and SSRS reporting
- PowerShell automation
- legal technology and professional-services reporting
- business systems analysis
- custom internal tools

The site should still read naturally to humans. Search engines are sophisticated enough that repeating “Vancouver IT consultant” eleven times is not a strategy; it is a hostage note.

---

## 12. Content and confidentiality rules

Before publishing any project or screenshot:

- remove client names unless expressly approved;
- remove matter names, client numbers, employee names, email addresses, domains, tenant IDs, server names, paths, IP addresses, invoice numbers, and financial data;
- use synthetic or transformed data where possible;
- do not rely only on blur if the underlying text may remain recoverable;
- review image metadata;
- explain that screenshots are sanitized or use demonstration data;
- distinguish production work from prototypes and active builds;
- avoid exact security architecture details that would make a client environment easier to attack;
- obtain permission before displaying client logos or testimonials.

---

## 13. Recommended implementation order

### Phase 0 — Deployment integrity

- Confirm GitHub Pages source is GitHub Actions.
- Run and validate deployment.
- Confirm crawler-visible HTML is the Astro site.
- Add Search Console and request re-indexing.

### Phase 1 — Personal narrative

- Replace the homepage hero biography.
- Rewrite the About page using the proposed narrative.
- Add Experience in Context.
- Expand How I Work.
- Add Selected Experience Notes.

### Phase 2 — Flagship proof

- Fully develop Enterprise Reporting & Forecasting.
- Fully develop SharePoint & Microsoft 365 Solutions.
- Add sanitized screenshots and captions.
- Add project status and confidentiality notes.

### Phase 3 — Product stories

- Finish TaskDesk documentation and screenshots.
- Finish Fiscal Desk documentation and screenshots.
- Add honest status labels and roadmaps.

### Phase 4 — Public technical contribution

- Publish the first polished SQL collection.
- Strengthen script detail metadata.
- Add output examples and direct source links.
- Group scripts into useful collections.

### Phase 5 — Discoverability

- Add structured data, robots.txt, Open Graph image, and domain canonicalization.
- Launch Reports Gallery with at least three strong entries.
- Consider Notes after three articles are complete.

---

## 14. Items requiring Rohan’s confirmation before production implementation

1. Whether to state **more than 20 years** of experience or use a specific starting year.
2. Whether to state publicly that the reporting estate contains **more than 300 SSRS reports**.
3. Whether Powerex, BC Hydro, or individual legal clients may be named.
4. Which earlier roles or industries should be represented explicitly rather than through generalized environment descriptions.
5. Whether disaster-recovery exercise outcomes or metrics may be published.
6. Which case studies are production systems, active builds, prototypes, or conceptual designs.
7. Which screenshots are approved and sufficiently sanitized.
8. Whether the site should actively solicit contract work or primarily function as a portfolio and professional identity page.
9. Whether the one-to-two-business-day reply statement is consistently realistic.
10. Whether Java belongs in the public script roadmap based on actual material ready for publication.

---

## 15. Recommended first production change set

Keep the first implementation deliberately focused:

- homepage hero copy;
- Experience in Context strip;
- About-page narrative rewrite;
- expanded How I Work section;
- Selected Experience Notes;
- deployment verification;
- robots.txt and structured data.

Do not attempt to complete every case study in the same pull request. The personal narrative can be reviewed as one coherent change, while each flagship project should receive its own content pass with screenshots and fact validation.

---

## 16. Final positioning statement

The site should not try to convince visitors that Rohan is impressive by repeatedly saying so. It should make the conclusion difficult to avoid.

The evidence is the combination of:

- long-term experience across several layers of IT;
- credible business and industry context;
- projects explained through problems, constraints, and decisions;
- careful technical documentation;
- useful public scripts;
- an honest distinction between completed work and active development;
- a calm, practical voice.

That voice is not boastful. It is the voice of someone who has spent enough time fixing real systems to know that the clever part is rarely the tool itself—it is understanding what must keep working after the excitement of the build is over.
