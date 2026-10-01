/**
 * The case studies. Content is drawn from the project repositories and the
 * owner-approved facts; do not add architecture or outcome claims that those
 * sources do not support.
 *
 * `slug` must match the href in work.ts.
 *
 * Optional fields (status, context, constraints, role, decisions, outcomes,
 * screenshots, confidentialityNote) are rendered only when populated —
 * empty headings and blank sections are never produced.
 */

/** Allowed project-status values — kept narrow so labelling stays honest.
 *  The em dash (—) is an intentional typographic choice consistent with the
 *  site's design language and is valid UTF-8 in TypeScript source files.
 */
export type ProjectStatus =
  | 'Production — actively evolving'
  | 'Production — operational system'
  | 'Production — in use and maintained'
  | 'Active build'
  | 'In design — exploratory'
  | 'Under review'
  | 'To be determined';

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  summary: string;
  /** Optional hero image path in public/images/. */
  image?: string;
  /** Optional short project-status label shown near the introduction. */
  status?: ProjectStatus;
  whatItSolves: string[];
  stack: string[];
  features: { title: string; body: string }[];
  sections: { heading: string; body: string }[];
  /** Background on the environment and workflow that existed before this work. */
  context?: string;
  /** Technical, operational, or organisational limits that shaped the solution. */
  constraints?: string[];
  /** What Rohan personally analysed, designed, built, coordinated, or supported. */
  role?: string;
  /** Key architectural or approach decisions and the reasoning behind them. */
  decisions?: { title: string; body: string }[];
  /** Measured results or clear operational outcomes where evidence exists. */
  outcomes?: string[];
  /** Sanitised screenshot references. All images must be approved before commit. */
  screenshots?: { src: string; alt: string; caption?: string }[];
  /** Explains any demonstration or transformed data used in screenshots or examples. */
  confidentialityNote?: string;
  /** A short process diagram shown above the detail. Icons are keys of src/data/icons.ts. */
  flow?: { heading: string; steps: { title: string; body: string; icon: string }[] };
  /** Headline numbers shown as a strip above the detail. Keep them to approved, supportable figures. */
  stats?: { value: string; label: string }[];
  /** Public links, such as a source repository. Only link repositories that are public. */
  links?: { label: string; href: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'taskdesk',
    category: 'Desktop Application',
    title: 'TaskDesk',
    status: 'Production — actively evolving',
    image: '/images/work-taskdesk.jpg',
    summary:
      'A desktop application with an Android companion that turns client email and meeting transcripts into tracked tasks, logged time and billing-ready records. Python and PostgreSQL, in production use in my own consulting practice.',
    context:
      'Consulting work generates a continuous stream of tasks, open threads, source files and partial progress across several clients at once. The task managers I evaluated treated each task as an isolated item. They had no queryable data model for the relationships that matter here: a task belongs to a project, a project belongs to a client, and the value is in the trail of emails, meeting decisions, notes and time that builds up around it.',
    flow: {
      heading: 'From email to billing record',
      steps: [
        { icon: 'mail', title: 'Email and meetings arrive', body: 'Messages and Teams meeting transcripts are collected on a schedule.' },
        { icon: 'checklist', title: 'They become tasks and notes', body: 'Requests turn into tasks, notes and work-log entries, each linked to its source.' },
        { icon: 'check', title: 'AI decisions are reviewed', body: 'Suggested closures and links wait in the AI Inbox to be approved, edited or undone.' },
        { icon: 'clock', title: 'Time is recorded', body: 'A timer or manual entry captures minutes, notes and a billable flag.' },
        { icon: 'invoice', title: 'Work is invoiced', body: 'Finished work is grouped into reports and billed through Fiscal Desk.' },
      ],
    },
    whatItSolves: [
      'Task status scattered across inboxes, spreadsheets and memory, with no single record of what was asked, what was done and what is waiting on someone else.',
      'Meeting decisions and email requests that never become tracked work, or become it days later and without their source.',
      'Time that has to be reconstructed at invoice time instead of being captured as the work happens.',
      'Losing context when moving between clients or returning to paused work.',
    ],
    stack: [
      'Python',
      'Qt desktop UI',
      'PostgreSQL 18',
      'SQLite local cache',
      'FastAPI',
      'Kotlin / Jetpack Compose (Android)',
      'Microsoft Graph',
      'Windows Task Scheduler',
    ],
    role: 'I designed and built TaskDesk, and I use it to run my consulting practice. Requirements come from real operational use rather than a specification document, and new capabilities are added when a genuine need appears.',
    features: [
      {
        title: 'Email and meeting capture',
        body: 'Incoming email and Microsoft Teams meeting transcripts are summarized and turned into tasks, notes and work-log entries, each linked back to the message or meeting it came from. A run reports exactly what it created and changed, and each change shows its source and the reason.',
      },
      {
        title: 'AI Inbox: land first, review second',
        body: 'Captured facts always land immediately. Decisions layered on top, such as closing a task or linking two records, go to a review queue where they can be approved, edited, rejected or undone. A completion cannot be approved without a written summary.',
      },
      {
        title: 'Task lifecycle with context',
        body: 'Statuses distinguish active work, work waiting on someone else, work pending approval and work an AI review thinks is finished. The detail pane keeps the source context, notes, activity timeline and time history together.',
      },
      {
        title: 'Time tracking that feeds billing',
        body: 'A timer or manual entries record minutes, notes, an optional rate and a billable flag. Finished work is grouped into reports and carried into invoices issued through Fiscal Desk, which marks it invoiced.',
      },
      {
        title: 'Offline-tolerant sync',
        body: 'The desktop app works from a local cache and syncs with the server on demand, with pending-change badges so it is always clear what has not yet been pushed.',
      },
      {
        title: 'Android companion',
        body: 'A mobile client for reading and updating tasks, time and notes. After I confirm, it can also log a completed work phone call. It reaches the data only through a private server-side API.',
      },
    ],
    decisions: [
      {
        title: 'AI decisions are reviewable and never gate the data',
        body: 'An AI suggestion that is rejected or ignored must not hide or discard the email, task or work-log entry underneath it. This keeps the record trustworthy even when the AI is wrong, and keeps a person responsible for anything that closes a task or gets billed.',
      },
      {
        title: 'One self-hosted PostgreSQL database',
        body: 'In June 2026 I moved the data layer from Azure SQL to a self-hosted PostgreSQL 18 server and retired the Azure SQL paths. TaskDesk and Fiscal Desk now share one database, with a headless ingestion runner and the mobile API running alongside it.',
      },
      {
        title: 'The phone never touches the database',
        body: 'The Android app holds no database credentials. All mobile reads and writes go through a server-side API that is private to my own devices and authorizes each user.',
      },
    ],
    sections: [
      {
        heading: 'Why a custom application',
        body: 'Consulting work is relational, and the task managers I evaluated were not. TaskDesk is built around the relationship between client, project, task, source and time, so returning to work that was paused three weeks ago does not mean reconstructing what was happening.',
      },
      {
        heading: 'How data moves',
        body: 'Email and meeting ingestion runs headlessly on a schedule using Microsoft Graph, and the desktop app pulls the results. The database is backed up nightly and weekly, with an off-machine copy.',
      },
      {
        heading: 'Current status and what is next',
        body: 'TaskDesk is in production and actively evolving. A weekly reconciliation pass, which compares open tasks against captured evidence before mail and meeting retention limits remove it, is built and in live testing. Recurring tasks are planned but not started.',
      },
    ],
    outcomes: [
      'Time logged against a task is carried into invoices, so billing narratives start from what was actually recorded.',
      'Every task keeps the email or meeting that created it, so the reason for the work can be found later.',
      'AI-assisted changes are visible, attributable and reversible.',
    ],
    screenshots: [
      {
        src: '/images/taskdesk-active-work.png',
        alt: 'TaskDesk Active Work screen showing a source list of emails and meetings beside a prioritized task queue and a task detail pane, in demonstration mode.',
        caption:
          'Active Work: source items on the left, the task queue in the middle and the task detail on the right. Demonstration data.',
      },
      {
        src: '/images/taskdesk-status-chips.png',
        alt: 'Row of status filter chips: New, In Progress, Waiting, Approval, Needs Review, AI Close and AI Complete, followed by due-date filters.',
        caption:
          'Status and due-date filters that separate active work from work waiting on someone else or pending review.',
      },
      {
        src: '/images/taskdesk-tools-menu.png',
        alt: 'TaskDesk Tools menu listing email processing, online-meeting processing, meeting recording upload, summary generation and AI review tools.',
        caption: 'The Tools menu: processing actions and the AI review tools.',
      },
    ],
    confidentialityNote:
      'The overview image at the top has client details blurred. The screenshots below use demonstration data.',
  },
  {
    slug: 'fiscal-desk',
    category: 'Financial Systems',
    title: 'Fiscal Desk',
    status: 'Production — actively evolving',
    image: '/images/work-fiscal-desk.jpg',
    summary:
      'A desktop application for business and personal financial records that also issues my consulting invoices. It turns reviewed time from TaskDesk and client disbursements into numbered invoices, and reconciles bank transactions against their supporting documents. Python and PostgreSQL, in production use.',
    context:
      'Professional-services billing mixes time-based fees, pass-through disbursements and a tax treatment that differs between them. The invoice also has to stay connected to the time entries and supporting documents behind it, and the books have to reconcile against bank activity. The products I evaluated treated these as separate problems, so I built one application around the whole chain from recorded time to reconciled deposit.',
    flow: {
      heading: 'From recorded hour to reconciled deposit',
      steps: [
        { icon: 'clock', title: 'Time is recorded', body: 'Work is logged in TaskDesk against a client, task and billable rate.' },
        { icon: 'document', title: 'Narratives are reviewed', body: 'Every line needs a reviewed description. AI may draft wording but cannot change minutes.' },
        { icon: 'invoice', title: 'The invoice is issued', body: 'Numbered inside a database transaction, with GST on services and the service fee only.' },
        { icon: 'mail', title: 'Copies are delivered', body: 'A client PDF, an accountant PDF, an Outlook draft and a SharePoint copy.' },
        { icon: 'bank', title: 'The deposit is reconciled', body: 'The payment is matched to the invoice and its supporting documents.' },
      ],
    },
    whatItSolves: [
      'Invoices assembled by hand from time records, receipts and email, with billing narratives written from memory.',
      'Disbursements paid on a client’s behalf that are billed late, billed twice or not billed at all.',
      'GST applying to fees and a service fee but not to pass-through disbursements.',
      'Business bank transactions with no easy way to show which document supports each one.',
    ],
    stack: [
      'Python',
      'PySide6 desktop UI',
      'PostgreSQL',
      'SQL',
      'Microsoft Graph / SharePoint',
      'PDF generation',
      'Outlook integration',
    ],
    role: 'I designed and built Fiscal Desk and use it for my own invoicing and records. Time and tasks stay in TaskDesk; Fiscal Desk is the system of record for invoices.',
    features: [
      {
        title: 'Invoice generation from reviewed time',
        body: 'Time comes from TaskDesk and expense lines come from the client’s documents in SharePoint. Every line needs a reviewed narrative before the invoice can be issued, and the AI that polishes narratives is not allowed to change minutes.',
      },
      {
        title: 'Disbursements and tax treatment',
        body: 'GST is applied to professional services and the service fee, while client disbursements are passed through at cost. Discount and adjustment lines are supported, and the invoice summary shows each component separately.',
      },
      {
        title: 'Transaction-safe numbering and full reversal',
        body: 'Invoice numbers are assigned inside a database transaction, and the numbering year follows the year the work was performed. A finalized invoice can be reversed, which unwinds the number, the locked time entries and the tagged documents.',
      },
      {
        title: 'Delivery',
        body: 'Each issued invoice produces a client-facing PDF and a separate accountant PDF with supporting detail, an Outlook draft for the client email, and an upload of the accountant copy to SharePoint.',
      },
      {
        title: 'Business reconciliation',
        body: 'Bank transactions are matched against SharePoint-held source documents, chargebacks and deposits. Transfers between my own accounts are treated as neither income nor expense, and an expected-no-document reason can be recorded instead of leaving an item unexplained.',
      },
      {
        title: 'Imports, forecasting and close',
        body: 'Statement imports keep their lineage and can be rolled back, with duplicate detection and categorization rules. Recurring forecasts, budget variance, account reconciliation, month-end close and a tax-year package for my accountant sit on the same data.',
      },
    ],
    decisions: [
      {
        title: 'Billing eligibility follows the work, not the task',
        body: 'Work becomes billable because time was recorded in the period, not because its parent task has a particular status. A status filter had quietly hidden billable work on tasks that were still open, so revenue never reached an invoice and nothing showed that it was missing.',
      },
      {
        title: 'Write-offs are audited and reversible',
        body: 'Suppressing unbillable time is a recorded write-off with a reason, an actor and a timestamp that can be restored later. It is never a silent flag on the time entry.',
      },
      {
        title: 'Nothing is issued without review',
        body: 'The review step requires a human-approved description on every line. The application can draft the wording, but a person owns what the client reads.',
      },
      {
        title: 'Tests cannot reach real data',
        body: 'Tests that change data must use a dedicated test database and refuse to run without an explicit test connection, a rule added after a review showed a way for a test run to reach the live database.',
      },
    ],
    sections: [
      {
        heading: 'Why a custom application',
        body: 'The chain from a recorded hour to a reconciled deposit crosses time tracking, billing, document storage and banking. Building it as one application on one PostgreSQL database lets each step check the one before it, and lets the decisions along the way be written down and enforced in code.',
      },
      {
        heading: 'How it is built',
        body: 'The application is organized into services for imports, reconciliation, invoicing, forecasting and reporting over a PostgreSQL schema, with more than 500 automated tests. Product and architecture rulings are kept in a dated decision log so the reasoning survives the branch it was made on.',
      },
      {
        heading: 'Current status',
        body: 'Fiscal Desk is in production and in active use. It continues to evolve as billing and financial-record requirements develop. It also includes personal and household modules, such as investments, debts and shared costs, which are separate from the invoicing story.',
      },
    ],
    outcomes: [
      'Invoices start from recorded time and reviewed narratives rather than reconstruction.',
      'Each issued invoice leaves a client PDF, an accountant PDF with supporting detail and a numbered, reversible record.',
      'Unreconciled bank items and missing supporting documents are visible in one work queue instead of being found at year end.',
    ],
    screenshots: [
      {
        src: '/images/fiscaldesk-invoice-review.png',
        alt: 'Invoice review step showing a time line with narrative, hours, rate and amount, an adjustment section, GST and service-fee settings and an invoice summary.',
        caption:
          'Review and issue: every line needs a reviewed narrative, and GST applies to services and the service fee only. Demonstration data.',
      },
      {
        src: '/images/fiscaldesk-invoice-register.png',
        alt: 'Invoicing register listing an issued and a draft invoice for a demonstration client, with invoice number, period and status columns.',
        caption: 'The invoice register, with actions to generate, reverse and produce PDFs. Demonstration data.',
      },
      {
        src: '/images/fiscaldesk-business-reconciliation.png',
        alt: 'Business Reconciliation screen listing business transactions beside a client selector and document-linking actions.',
        caption: 'Business reconciliation: linking bank transactions to their supporting documents. Demonstration data.',
      },
      {
        src: '/images/fiscaldesk-work-queue.png',
        alt: 'Work Queue listing open work items by priority, such as stale reconciliations, unallocated deposits and transactions missing a supporting record.',
        caption:
          'The work queue gathers reconciliation, review and missing-document items in one place. Demonstration data.',
      },
    ],
    confidentialityNote:
      'The overview image at the top has client and vendor details blurred. The screenshots below were captured from a disposable database with synthetic demonstration data.',
  },
  {
    slug: 'reporting',
    category: 'Reporting & Analytics',
    title: 'Legal Reporting & Analytics on Elite 3E',
    status: 'Production — in use and maintained',
    summary:
      'SQL Server and SSRS reporting for three law firms against Thomson Reuters Elite 3E data: financial, matter, timekeeper, WIP, accounts-receivable and billing reporting, built from scratch at two firms and rewritten from the ground up at a third during its move to Elite 3E.',
    context:
      'Law firms run on time, billing and collections data held in an ERP. Partners, practice groups and accounting staff need accurate, repeatable answers from it: what is unbilled, what is outstanding, how each timekeeper and practice group is performing. Two of these firms had no reporting when I started. The third had a large catalog built on the old Elite Enterprise 3.7 database that could not simply be carried over when the firm moved to Elite 3E.',
    stats: [
      { value: '339', label: 'SSRS reports across three law firms' },
      { value: '~58,000', label: 'lines of SQL behind them' },
      { value: '~776', label: 'people who use the reports' },
      { value: '200+', label: 'reports rewritten for the Elite 3E migration' },
    ],
    whatItSolves: [
      'No repeatable reporting for AR, WIP, billing, timekeeper statistics and firm performance, so each answer meant a fresh manual export.',
      'A reporting catalog tied to the Enterprise 3.7 database, which could not be pointed at 3E, whose schema has more than 10,000 tables compared with a few hundred.',
      'Ad hoc requests that each needed custom work, with no shared catalog to build on.',
      'Manual, error-prone monthly invoice uploads to a firm’s largest client after the client changed its required format.',
    ],
    stack: ['SQL Server', 'T-SQL', 'SSRS', 'Excel', 'Thomson Reuters Elite 3E'],
    role: 'I wrote and maintain the SSRS and SQL reporting at all three firms. At Harper Grey I worked full-time for four years and have continued as a consultant since. RBS and Farris came through Harper Grey referrals, and I built their reporting from scratch. The Enterprise-to-3E application migration at RBS and Farris was done by the software vendor’s professional services; my work there was reporting.',
    features: [
      {
        title: 'A full catalog rewrite for Elite 3E',
        body: 'At Harper Grey I rewrote more than 200 SSRS reports for the move from Elite Enterprise 3.7 to Elite 3E. The database, schema and application all changed, so the rewrite was complete rather than a conversion. The reports were written during user acceptance testing, over roughly 18 to 24 months.',
      },
      {
        title: 'Reporting built from nothing',
        body: 'RBS and Farris had no reporting before. Each catalog took about twelve months and covers AR, WIP, billing, timekeeper statistics, contractor and client billings, client and timekeeper rankings, performance, practice groups and firm KPIs.',
      },
      {
        title: 'Excel dashboards and ad hoc extracts',
        body: 'Eight Excel dashboards linked to SSRS and more than fifty SQL extract files cover requests that do not justify a full report.',
      },
      {
        title: 'Custom billing exporter',
        body: 'A custom exporter prepares the monthly invoice upload to Harper Grey’s largest client. I rewrote it when the client changed its required upload format, replacing a third-party vendor script.',
      },
    ],
    decisions: [
      {
        title: 'Rewrite, not patch',
        body: 'With a new database, schema and application, I wrote Harper Grey’s reports against the Elite 3E schema rather than translating the old SQL line by line.',
      },
      {
        title: 'Build alongside testing',
        body: 'Writing reports during user acceptance testing meant the people who relied on them were exercising the numbers before go-live rather than after.',
      },
    ],
    sections: [
      {
        heading: 'Scale',
        body: 'Across the three firms the catalog is about 339 SSRS reports and roughly 58,000 lines of SQL, serving about 776 people. Harper Grey is the largest: 260 reports and just under 40,000 lines of SQL for about 280 users, with around 60 reports built since go-live from ad hoc requests. RBS has 52 reports (about 12,000 lines, about 220 users) and Farris 27 reports (about 6,400 lines, about 276 users). Together with SQL analyses and Excel workbooks, this is the more than 400 reporting assets I have worked with. These are my own counts and are approximate.',
      },
      {
        heading: 'Managing the catalog',
        body: 'A catalog this size needs administration as well as development. I built SSRS Vantage to handle report moves, definition backups, exports and schedule review.',
      },
      {
        heading: 'What comes next',
        body: 'A Power BI project and a cloud data warehouse are being planned for one of the firms. Neither has started, and the platform has not been chosen.',
      },
    ],
    outcomes: [
      'Three firms that either had no reporting or had a catalog broken by a system migration now have maintained, repeatable reporting.',
      'The rewritten Harper Grey catalog went live with the Elite 3E migration and has grown by about 60 reports since.',
      'Monthly billing uploads to a major client are produced by a purpose-built exporter instead of a vendor script.',
    ],
    confidentialityNote:
      'This case study contains no report screenshots, matter data or client financial information. Firm names are used with approval, for context only.',
  },
  {
    slug: 'ssrs-vantage',
    category: 'Internal Tooling',
    title: 'SSRS Vantage — Report Server Management Tool',
    status: 'Production — operational system',
    summary:
      'A custom .NET Windows desktop application that replaced manual steps and legacy VBScripts for administering a law firm’s SSRS environment: promoting reports, exporting them, backing up report definitions, comparing versions and reviewing schedules and subscriptions.',
    context:
      'A large SSRS catalog needs routine administration: moving reports from development to production, exporting PDFs for individual timekeepers or practice groups, keeping copies of report definitions, and knowing what is scheduled and who is subscribed. At Harper Grey these jobs were done by hand or with VBScripts.',
    whatItSolves: [
      'Moving reports from development to production by hand, one at a time.',
      'Report definitions that existed only on the server, with no easy way to back them up or compare two versions.',
      'Exports for timekeepers, practice groups or the whole inventory that depended on scripts and manual effort.',
      'No clear view of shared schedules, what depended on them and which subscriptions carried risk.',
    ],
    stack: ['C#', '.NET', 'Windows desktop (MSIX package)', 'SQL Server Reporting Services', 'SQL Server'],
    role: 'I designed and built SSRS Vantage for Harper Grey LLP’s report catalog.',
    features: [
      {
        title: 'Promote reports',
        body: 'Check reports in the development folder, choose a destination folder and move them after an overwrite confirmation.',
      },
      {
        title: 'Export and back up',
        body: 'Export reports to PDF or Excel for selected timekeepers or practice groups, in bulk across the inventory, or download report definitions and data sources locally while preserving the server folder structure.',
      },
      {
        title: 'Compare reports',
        body: 'A side-by-side comparison of two report definitions shows exactly what changed.',
      },
      {
        title: 'Subscriptions and schedules',
        body: 'Review, create, edit, disable, enable and export subscriptions. Review shared schedules with their usage, risk flags, linked subscriptions and cache plans.',
      },
      {
        title: 'Project generation',
        body: 'Generate local Visual Studio report projects, and optionally a SQL Server Management Studio project, from content already on the report server.',
      },
      {
        title: 'Connection status and built-in help',
        body: 'Status indicators show whether the report server and databases are reachable from the current Windows session, and an offline help site opens at the topic for the active tool.',
      },
    ],
    decisions: [
      {
        title: 'One launcher, many focused tools',
        body: 'Each task is its own tool under a shared shell, so a new administrative need becomes a new tool rather than another script.',
      },
      {
        title: 'Configuration stays local',
        body: 'Server and folder settings live in a local configuration file rather than in code, so the application can be installed on another workstation without changes to the program.',
      },
    ],
    sections: [
      {
        heading: 'Status',
        body: 'SSRS Vantage is in operational use for Harper Grey’s report catalog.',
      },
    ],
    outcomes: [
      'Report moves, backups and exports are done from one application instead of scattered scripts.',
      'Report definitions can be backed up and compared before and after a change.',
    ],
    confidentialityNote:
      'This case study excludes server names, report names, connection details and screenshots, which would reveal client information.',
  },
  {
    slug: 'sharepoint-intranets',
    category: 'Microsoft 365 & SharePoint',
    title: 'SharePoint Intranets & Microsoft 365 Platforms',
    status: 'Production — in use and maintained',
    summary:
      'Intranet portals and collaboration platforms on SharePoint Online for legal and property-management organizations: information architecture, permissions, governance and workflow automation, replacing older intranets or, in one case, no intranet at all.',
    context:
      'A firm intranet has to be easy to find things on, safe with confidential material and manageable by the people who own it. The organizations I work with had older, hard-to-maintain intranets, or none, and wanted something their staff would actually use.',
    whatItSolves: [
      'Information spread across file shares, email and out-of-date intranet pages.',
      'Permissions that depended on individual people rather than a design.',
      'Manual processes that could run as workflows inside Microsoft 365.',
    ],
    stack: [
      'SharePoint Online',
      'Microsoft Lists',
      'Power Automate',
      'Power Apps',
      'SharePoint Framework (SPFx)',
      'PowerShell',
      'Microsoft 365',
    ],
    role: 'I designed and deployed the portals: information architecture, permissions, governance and workflow automation.',
    features: [
      {
        title: 'Information architecture and permissions',
        body: 'Sites, libraries, lists and permission groups designed around how each organization works and what each audience is allowed to see.',
      },
      {
        title: 'Scale',
        body: 'More than 100 site collections and several hundred pages serving about 400 users across the portals.',
      },
      {
        title: 'Workflow automation',
        body: 'Power Automate and Power Apps handle routine requests and monitoring inside the platform, including the Supreme Court of Canada decision monitor built for JFK Law LLP.',
      },
      {
        title: 'A toolkit for repeatable delivery',
        body: 'I keep my own SharePoint workspace of PowerShell scripts, site designs, SPFx web part projects and a small utility that builds SPFx solution packages, so each new portal starts from parts I have already used.',
      },
    ],
    decisions: [
      {
        title: 'Governance is part of the build',
        body: 'Permissions, structure and ownership are decided and written down during delivery, so the organization can keep changing the platform afterward.',
      },
      {
        title: 'Out-of-the-box first',
        body: 'Where the standard tools do the job I use them, and I reserve custom web parts and formatting for the places they make a real difference.',
      },
    ],
    sections: [
      {
        heading: 'Where it started',
        body: 'At Harper Grey I facilitated stakeholder workshops with partners and senior management and turned their requirements into technical specifications for a firm-wide intranet, working with an external vendor on timelines and budget. That experience shaped the platforms I have built since.',
      },
    ],
    outcomes: [
      'Several organizations moved from legacy or non-existent intranets to maintained SharePoint Online platforms.',
      'Routine processes run as workflows inside the platform that staff already use.',
    ],
    confidentialityNote:
      'This case study excludes tenant details, site names and screenshots, which would reveal client information.',
  },
  {
    slug: 'filedesk',
    category: 'Desktop Application',
    title: 'FileDesk — Safe File Consolidation',
    status: 'Active build',
    summary:
      'A Windows 11 tool for consolidating files scattered across many drives into one organized vault. A deterministic engine decides what is a duplicate and what moves; a small local language model may suggest where a file belongs, but cannot move, copy or delete anything.',
    context:
      'Working files accumulate across several drives, cloud folders and backups, with duplicates everywhere. Cleaning that up by hand is slow, and cleaning it up with a tool that can delete is risky, because the cost of one wrong deletion is a lost file.',
    whatItSolves: [
      'Duplicate files spread across drives, with no certain way to know which copy is the keeper.',
      'Consolidating hundreds of thousands of files without trusting a model, or a script, to decide what is safe to remove.',
      'Long-running jobs that cannot be interrupted without losing progress.',
    ],
    stack: ['Python (standard library)', 'SQLite', 'Local LLM over HTTP', 'Loopback web interface'],
    role: 'I designed and built FileDesk for my own use, including its safety model, which has been through two review rounds with the fixes tracked to tests.',
    features: [
      {
        title: 'Deterministic engine, advisory model',
        body: 'Scanning, hashing, duplicate detection, planning and copying are pure computation that can be repeated and audited. The language model only suggests a destination folder and a confidence score for files the rules could not route, and the engine is free to ignore it. The model never sees or influences duplicate decisions.',
      },
      {
        title: 'Plan, verify, commit, quarantine',
        body: 'Nothing destructive happens without a verified hash match, a recorded plan and an explicit commit. Deletes are moves into quarantine with a retention window, and bytes are destroyed only by a separate purge.',
      },
      {
        title: 'Four modes',
        body: 'Audit reads only and gives the numbers. Dedupe removes only redundant copies and leaves each keeper where it is. Copy builds a vault and keeps the originals. Safe-move builds the vault and retires the originals only after a verified copy.',
      },
      {
        title: 'Overnight queues',
        body: 'Jobs run one after another and copy unattended. Anything that would remove a file is held for review the next morning, judged against the finished vault. Closing the app or losing power pauses cleanly, and a restart resumes from the saved state.',
      },
    ],
    decisions: [
      {
        title: 'The model suggests and never acts',
        body: 'A small model on a laptop should not decide which copy of an important file survives. Rules route the easy majority and the model handles the ambiguous remainder, with every consequential decision left to the deterministic side.',
      },
      {
        title: 'Progress lives in the database, not in memory',
        body: 'Every command can be stopped and rerun, because state is stored in rows rather than in checkpoints.',
      },
      {
        title: 'Split authority for commits',
        body: 'Unattended jobs may only add files. Removals are proposed and wait for approval, so the worst unattended outcome is a vault with files I did not want.',
      },
      {
        title: 'Few dependencies',
        body: 'The core uses only Python’s standard library and SQLite, which keeps the tool simple to audit.',
      },
    ],
    sections: [
      {
        heading: 'Status',
        body: 'FileDesk is an active build for my own use and is not offered as a product. Its design is documented as a set of architecture decision records alongside a written safety model.',
      },
    ],
    confidentialityNote: 'No screenshots are shown because the tool displays the contents of my own drives.',
  },
  {
    slug: 'sql-analyzer',
    category: 'Reporting & Analytics',
    title: 'RTH Utility SQL Analyzer',
    status: 'In design — exploratory',
    summary:
      'A Windows desktop workbench, in early design, intended to turn SQL Server and SSRS assets into a structured, reviewable reporting knowledge base. It would collect report definitions, dataset SQL, schema and dependencies, and keep facts, inferences and human decisions apart.',
    context:
      'Understanding a large SSRS estate means answering questions such as which reports use a given table or filter, and where two similar reports differ in meaning. The product intent is a trustworthy repository of report files, extracted SQL, schema and human-reviewed business rules that those questions can be asked of.',
    whatItSolves: [
      'Finding every report and dataset that touches a given table, column or filter.',
      'Spotting meaningful differences between related reports: joins, filters, date logic and aggregation.',
      'Recording what a metric means, and checking whether reports agree with it.',
    ],
    stack: ['C# / .NET', 'WPF', 'Microsoft ScriptDOM', 'SQLite'],
    role: 'I am defining the product and its governance, with a first end-to-end slice planned before the application is built. The technology choices are working hypotheses and may change.',
    features: [
      {
        title: 'Deterministic first',
        body: 'Parsers, rules and tests establish findings. AI is planned later as a way to retrieve and explain evidence, not as the authority for facts.',
      },
      {
        title: 'Preserve originals',
        body: 'Imported report files are immutable and always traceable, and the workspace is stored as readable, Git-friendly files with SQLite for indexing.',
      },
      {
        title: 'Visible uncertainty',
        body: 'Unresolved references and unknown business meaning become explicit review questions rather than guesses.',
      },
    ],
    decisions: [
      {
        title: 'Read-only by default',
        body: 'Early versions collect metadata and code without changing production systems or importing business data.',
      },
      {
        title: 'Build one vertical slice first',
        body: 'The first release completes one useful workflow end to end before the scope broadens.',
      },
    ],
    sections: [
      {
        heading: 'Status',
        body: 'The repository is in its first phase, product definition and development governance. It is an exploratory internal utility and is not production software.',
      },
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/rthtechservices/RTH-Utility-SQLAnalyzer' }],
  },
  {
    slug: 'jfk-scc-monitor',
    category: 'Legal Workflow Automation',
    title: 'JFK Law LLP — Supreme Court of Canada Decision Monitor',
    status: 'Production — operational system',
    summary:
      'A production internal monitoring workflow designed and implemented by RTH Tech Services Inc. for JFK Law LLP to detect relevant Supreme Court of Canada publications and alert legal users on an hourly cadence.',
    context:
      'Legal teams needed a repeatable way to monitor Supreme Court of Canada publications for matter-relevant changes without relying on manual feed checks throughout the day.',
    whatItSolves: [
      'Manual monitoring of SCC publications is repetitive and easy to miss during busy matter work.',
      'Teams need reusable criteria for different matters, practice areas, and legal topics, not one-off keyword searches.',
      'Initial triage needs enough detail to assess relevance quickly before opening internal systems.',
    ],
    stack: [
      'SharePoint Online',
      'Microsoft Lists',
      'SharePoint document libraries',
      'Power Automate',
      'RSS',
      'Microsoft 365',
      'AI-assisted summarization',
    ],
    role: 'I designed and implemented this solution through RTH Tech Services Inc. for JFK Law LLP.',
    constraints: [
      'The monitor is a keyword and triage workflow, not a replacement for legal research or professional legal judgement.',
      'Public descriptions must exclude internal tenant URLs, list identifiers, private matter names, and prompt details.',
    ],
    features: [
      {
        title: 'Hourly source monitoring',
        body: 'The workflow checks Supreme Court of Canada Applications for Leave and Judgments feeds every hour.',
      },
      {
        title: 'Reusable scan profiles',
        body: 'Users create Scan Profiles with keywords, document categories, optional outcome/status filters, recipients, and an optional AI-summary setting.',
      },
      {
        title: 'Internal knowledge retention',
        body: 'The system stores source documents in a SharePoint document library and maintains searchable historical feed items, extracted text, profiles, and scan results in the internal SharePoint site.',
      },
      {
        title: 'Triage-ready notifications',
        body: 'When a profile match is found, the email can include case name and docket number, document type, outcome/status, jurisdiction, the SCC document link, and an AI-generated plain-language summary when enabled.',
      },
    ],
    decisions: [
      {
        title: 'Profile-driven matching',
        body: 'I used reusable Scan Profiles so legal users can define monitoring rules by matter, party, topic, legislation, legal concept, practice area, or geography without rebuilding the automation.',
      },
      {
        title: 'Email-first triage',
        body: 'Notifications are structured to support a quick relevance assessment from the inbox before opening the internal SharePoint site.',
      },
    ],
    sections: [
      {
        heading: 'How monitoring works in practice',
        body: 'The monitor runs every hour, evaluates new SCC feed items against active Scan Profiles, stores the underlying records in SharePoint, and keeps historical matches reviewable for follow-up and auditing.',
      },
      {
        heading: 'Operational boundary',
        body: 'This tool helps with monitoring and triage. It does not replace legal research workflows, legal analysis, or professional judgement.',
      },
    ],
    outcomes: [
      'Reusable matter-specific monitoring rules can be maintained by legal users through Scan Profiles.',
      'Matched notifications provide enough context for a brief relevance decision without first opening the internal site.',
      'Historical matches remain reviewable inside the SharePoint environment.',
    ],
    confidentialityNote:
      'This case study describes the operational design at a public-safe level and intentionally excludes internal tenant URLs, private matter information, and implementation secrets.',
  },
  {
    slug: 'escala-water-sensor-automation',
    category: 'Building Operations Automation',
    title: 'Escala Residences — Water Sensor Automation',
    status: 'Production — in use and maintained',
    summary:
      'A production automation maintained by RTH Tech Services Inc. that converts building water-leak sensor emails into service requests within seconds and automatically closes matching requests when return-to-normal alerts arrive.',
    context:
      'Before automation, leak alerts arrived as plain emails in a shared mailbox. Concierge and property-management staff had to read each message, identify location details, find contact information, and manually create service requests around the clock.',
    whatItSolves: [
      'Manual alert handling was slower and inconsistent during high-volume or after-hours periods.',
      'Service request details depended on individual interpretation of plain-text sensor emails.',
      'Closing resolved events required separate follow-up even when return-to-normal alerts were available.',
    ],
    stack: [
      'Microsoft 365 shared mailbox',
      'Power Automate',
      'Building water-leak sensor system',
      'Condo Control',
      'Operational logging',
      'Version-controlled scripts and documentation',
    ],
    role: 'I designed, implemented, and maintain this production workflow through RTH Tech Services Inc.',
    constraints: [
      'The parser depends on vendor email formatting.',
      'Common-area sensors do not have resident contacts.',
      'Units without a designated contact still generate a service request with a note.',
      'The current configuration is property-specific.',
      'Fallback depends on original mailbox alerts remaining available.',
    ],
    features: [
      {
        title: 'Automated alert-to-request path',
        body: 'When a leak alert email arrives, the workflow parses device, location, unit, and alert time, records the event, looks up the affected unit/contact, and creates a pre-populated service request in seconds.',
      },
      {
        title: 'Automatic recovery closure',
        body: 'When a return-to-normal email arrives, the matching open service request is located and closed automatically with a note.',
      },
      {
        title: 'Exception and fallback handling',
        body: 'If any step cannot complete, designated on-call staff receive an exception email, while original mailbox alerts remain as the fallback record for manual processing.',
      },
      {
        title: 'No new concierge interface',
        body: 'Concierge continues working in the existing service-request queue and interface rather than learning a separate day-to-day tool.',
      },
    ],
    decisions: [
      {
        title: 'Keep the operational queue unchanged',
        body: 'I integrated with the existing property-management request queue so operational adoption stays low-friction.',
      },
      {
        title: 'Preserve manual fallback by design',
        body: 'Original sensor emails remain in the shared mailbox, allowing staff to revert to the prior manual process without reconfiguration.',
      },
    ],
    sections: [
      {
        heading: 'Alert flow',
        body: 'The workflow receives sensor email alerts, parses key fields, writes an operational-log entry, maps the event to resident-contact context where available, and opens a pre-populated service request for concierge follow-up.',
      },
      {
        heading: 'Roadmap',
        body: 'Planned improvements include managed secret storage, stronger common-area labeling, more resilient operational-log reporting, scheduled parsing tests, and broader configuration parameterization.',
      },
    ],
    outcomes: [
      'Service requests are created within seconds of sensor alert emails.',
      'Request formatting is consistent across alert events.',
      'Resolved sensor events can be closed automatically when return-to-normal messages arrive.',
      'Operational history is auditable through mailbox records, workflow run history, and the event log.',
    ],
    confidentialityNote:
      'This case study excludes resident information, unit identifiers, tenant details, credentials, internal endpoints, and other implementation secrets.',
  },
  {
    slug: 'infrastructure',
    category: 'Infrastructure',
    title: 'Infrastructure, Remote Management & Resilience',
    summary:
      'Practical infrastructure solutions covering remote administration, database platforms, backup workflows, monitoring, recovery planning and resilient access to distributed systems.',
    whatItSolves: [
      'No reliable fallback path to reach systems remotely when a primary VPN or remote-access tool fails.',
      'Backup jobs that run but are never actually verified, discovered only when a restore is needed.',
      'Database platforms (PostgreSQL, Docker-hosted services) with no consistent health monitoring.',
      'Recovery plans that exist as documents but have never been tested end-to-end.',
    ],
    stack: ['RustDesk', 'Tailscale', 'PostgreSQL', 'Docker', 'Bash', 'Monitoring'],
    features: [
      {
        title: 'Remote-management fail-safe',
        body: 'A layered approach combining Tailscale mesh networking with RustDesk as a fallback, so remote access survives a single tool or provider outage.',
      },
      {
        title: 'Backup verification, not just backup',
        body: 'Automated checksum verification of backup archives, closing the gap between "the job ran" and "the backup is actually restorable".',
      },
      {
        title: 'Practical monitoring',
        body: 'Lightweight monitoring for Docker-hosted services and PostgreSQL health, tuned to flag real problems instead of alert fatigue.',
      },
    ],
    sections: [
      {
        heading: 'Resilience philosophy',
        body: 'The guiding principle across this work is that a single point of failure in access or backup is a hidden liability until the day it matters. Every remote-access and backup solution here is built with an explicit, tested fallback path rather than assumed reliability.',
      },
      {
        heading: 'Selected components',
        body: 'This includes a Tailscale/RustDesk remote-access fail-safe, containerized service deployment on Docker with health checks, PostgreSQL monitoring, and a tested backup verification and recovery workflow — kept as a coherent resilience story rather than a miscellaneous tool list.',
      },
    ],
  },
];
