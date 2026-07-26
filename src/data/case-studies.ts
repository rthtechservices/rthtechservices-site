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
  | 'Under review'
  | 'To be determined';

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  summary: string;
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
    slug: 'sharepoint',
    category: 'Microsoft 365',
    title: 'SharePoint & Microsoft 365 Solutions',
    summary:
      'Governance, document-management and workflow solutions built using SharePoint Online, Power Automate, Microsoft 365 and custom formatting or SPFx components — an umbrella of related work spanning several organizations.',
    whatItSolves: [
      'Document libraries with inconsistent permissions and no clear ownership of what should be approved for external use.',
      'No searchable, governed record of approved templates, forms or reference documents.',
      'Manual routing of documents for review and approval, with status tracked in email.',
      'Financial and compliance records without a clear, enforced retention structure.',
    ],
    stack: ['SharePoint Online', 'Power Automate', 'Microsoft 365', 'SPFx', 'PowerShell'],
    features: [
      {
        title: 'Approved Source Register',
        body: 'A governed, searchable register of approved documents and templates, replacing informal shared drives with clear ownership and version control.',
      },
      {
        title: 'OCR & search workflows',
        body: 'Automated OCR intake so scanned documents become searchable content rather than opaque files sitting in a library.',
      },
      {
        title: 'Financial-record retention',
        body: 'A retention structure enforcing how long financial records are kept and when they are archived, aligned to policy rather than habit.',
      },
    ],
    sections: [
      {
        heading: 'Governance model',
        body: 'Each solution in this umbrella follows the same underlying model: a defined ownership structure for content, explicit approval workflows built in Power Automate, and permission structures that are reviewed rather than inherited by accident. This keeps the pattern consistent even as it is applied to different document types across organizations.',
      },
      {
        heading: 'Selected automations',
        body: 'Beyond the Approved Source Register, the umbrella includes document-approval routing, automated retention and archival flows, and several SPFx components delivering custom formatting where out-of-the-box SharePoint views were insufficient.',
      },
    ],
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
