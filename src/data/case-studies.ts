/**
 * The five case studies. Copy ported verbatim from the handoff prototypes
 * (TaskDesk/FiscalDesk/Reporting/SharePoint/Infrastructure .dc.html).
 *
 * TaskDesk and Fiscal Desk are deliberately thin — the designer flagged that
 * architecture detail beyond "Python + PostgreSQL" / "PostgreSQL-based" was
 * never confirmed. Fill them in; don't invent them.
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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'taskdesk',
    category: 'Desktop Application',
    title: 'TaskDesk',
    status: 'Production — actively evolving',
    image: '/images/work-taskdesk.jpg',
    summary:
      'A desktop productivity application, built in Python with a PostgreSQL backend, for structured task tracking and operational workflow management across clients and projects.',
    context:
      'Consulting work generates a continuous stream of tasks, open threads, source files, and partial progress across multiple clients and projects simultaneously. The task managers I evaluated were not structured around this pattern — they lacked the queryable data model needed to retain operational context reliably when moving between clients or returning to paused work.',
    whatItSolves: [
      'Task and project status scattered across email, spreadsheets and verbal handoffs, with no single source of truth.',
      'No consistent, queryable record of task status and history for day-to-day operational work.',
      'Difficulty retaining operational context — notes, related files, and partially completed steps — when moving between clients or returning to paused work.',
    ],
    stack: ['Python', 'PostgreSQL', 'SQL'],
    role: 'Built and used in my own consulting practice. Requirements come from real operational use rather than a specification document.',
    features: [
      {
        title: 'Structured task model',
        body: 'Tasks are tracked with defined fields and status rather than free-text notes.',
      },
      {
        title: 'PostgreSQL-backed data',
        body: 'Task and workflow data is stored in PostgreSQL, enabling direct querying rather than relying on spreadsheets.',
      },
      {
        title: 'Operational context retention',
        body: 'Each task carries its associated notes, source files, and progress state — so returning to paused work does not require reconstructing what was in progress.',
      },
    ],
    sections: [
      {
        heading: 'Why a custom application',
        body: 'The task managers I evaluated treat tasks as isolated items. Consulting work is relational: a task belongs to a project, a project belongs to a client, and the value is in the thread of notes, decisions, and linked files that accumulate over time. TaskDesk is structured around that relational model rather than retrofitting it.',
      },
      {
        heading: 'Current status',
        body: 'TaskDesk is in production and actively evolving. New capabilities are added as genuine operational needs emerge, not as planned features ahead of their usefulness.',
      },
    ],
  },
  {
    slug: 'fiscal-desk',
    category: 'Financial Systems',
    title: 'Fiscal Desk',
    status: 'Production — actively evolving',
    image: '/images/work-fiscal-desk.jpg',
    summary:
      'A custom invoicing and financial-record application, built on PostgreSQL, for professional-services billing — tracking time, fees, disbursements, tax treatment, billing narratives, and generating multi-page invoices.',
    context:
      'Professional-services billing involves mixed tax treatment, pass-through disbursements, detailed billing narratives, and a need for financial records that stay connected to the underlying time and fee entries. The billing workflow in this practice did not map well to the invoicing products I evaluated, so Fiscal Desk was built around the actual billing model from the start.',
    whatItSolves: [
      'Invoice generation and disbursement tracking not well served by off-the-shelf billing software for this workflow.',
      'Mixed GST and tax treatment requiring explicit handling rather than a flat-rate assumption.',
      'A need for a financial record that keeps invoice, disbursement, billing narrative, and supporting detail together in a queryable form.',
    ],
    stack: ['PostgreSQL', 'SQL', 'Document Generation'],
    role: 'Built and used in my own consulting practice. Requirements are driven by real billing and financial-record needs.',
    features: [
      {
        title: 'Invoice generation',
        body: 'Generates professional-service invoices from underlying time, fee, and disbursement data, including multi-page output and supporting detail.',
      },
      {
        title: 'Disbursement and pass-through tracking',
        body: 'Disbursements and pass-through costs are recorded against the billing record, keeping the financial picture complete.',
      },
      {
        title: 'GST and mixed tax treatment',
        body: 'The application handles mixed GST scenarios common in professional-services billing rather than applying a flat-rate assumption.',
      },
      {
        title: 'PostgreSQL data model',
        body: 'Invoice, disbursement, and narrative data is stored in PostgreSQL as the system of record, enabling direct querying and reconciliation.',
      },
    ],
    sections: [
      {
        heading: 'Why a custom application',
        body: 'The billing workflow in this practice — professional-services time and fees, disbursements, narratives, mixed tax treatment — did not fit the products I evaluated. Fiscal Desk was built around that workflow rather than bending the workflow to fit available tooling.',
      },
      {
        heading: 'Current status',
        body: 'Fiscal Desk is in production and in active use. It continues to evolve as billing and financial-record requirements develop.',
      },
    ],
  },
  {
    slug: 'reporting',
    category: 'Reporting & Analytics',
    title: 'Enterprise Reporting & Forecasting',
    image: '/images/work-reporting.jpg',
    summary:
      'A portfolio of SQL Server Reporting Services solutions for legal and professional-services environments, including financial forecasting, matter analysis, operational reporting and executive dashboards.',
    whatItSolves: [
      'Financial forecasts assembled by hand each month from several disconnected exports, with no consistent methodology.',
      'Executives and practice leaders lacking a single reliable view of firm performance until well after month-end.',
      'Matter-level profitability trends invisible until a matter was already over budget.',
      'Report requests that each took custom development time instead of drawing on a shared, governed data layer.',
    ],
    stack: ['SSRS', 'SQL Server', 'T-SQL', 'Power BI', 'Data Warehousing'],
    features: [
      {
        title: 'Matter profitability forecasting',
        body: 'Projects matter-level performance against budget using realized rates and burn-rate trend, surfacing risk before write-off.',
      },
      {
        title: 'Executive dashboards',
        body: 'Consolidates revenue, AR aging and WIP conversion into a single monthly view built for leadership review.',
      },
      {
        title: 'Governed reporting layer',
        body: 'A shared semantic layer over the SQL Server warehouse means new reports draw on the same trusted definitions.',
      },
    ],
    sections: [
      {
        heading: 'Approach',
        body: 'Rather than building each report from raw tables, the underlying data is modelled once into a governed reporting layer of views and calculated fields, so financial definitions (realization, utilization, WIP conversion) are consistent everywhere they appear. SSRS reports and Power BI dashboards both consume this layer.',
      },
      {
        heading: 'Selected reports in this portfolio',
        body: 'The full set spans a matter profitability forecast, timekeeper utilization summary, executive financial dashboard, client-facing billing package, and several operational and data-quality reports — each documented individually in the Reports Gallery with its business question, audience and methodology.',
      },
    ],
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
    image: '/images/work-infrastructure.jpg',
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
