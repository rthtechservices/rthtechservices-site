/**
 * The five case studies. Copy ported verbatim from the handoff prototypes
 * (TaskDesk/FiscalDesk/Reporting/SharePoint/Infrastructure .dc.html).
 *
 * TaskDesk and Fiscal Desk are deliberately thin — the designer flagged that
 * architecture detail beyond "Python + PostgreSQL" / "PostgreSQL-based" was
 * never confirmed. Fill them in; don't invent them.
 *
 * `slug` must match the href in work.ts.
 */
export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  summary: string;
  whatItSolves: string[];
  stack: string[];
  features: { title: string; body: string }[];
  sections: { heading: string; body: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'taskdesk',
    category: 'Desktop Application',
    title: 'TaskDesk',
    summary:
      'A desktop productivity application, built in Python with a PostgreSQL backend, for structured task tracking and operational workflow management.',
    whatItSolves: [
      'Task and project status scattered across email, spreadsheets and verbal handoffs, with no single source of truth.',
      'No consistent, queryable record of task status and history for day-to-day operational work.',
    ],
    stack: ['Python', 'PostgreSQL', 'SQL'],
    features: [
      {
        title: 'Structured task model',
        body: 'Tasks are tracked with defined fields and status rather than free-text notes.',
      },
      {
        title: 'PostgreSQL-backed data',
        body: 'Task and workflow data is stored in PostgreSQL, enabling direct querying rather than relying on spreadsheets.',
      },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'TaskDesk is a Python desktop application backed by a PostgreSQL database. Additional architecture and feature detail will be added here as the project documentation is finalized.',
      },
    ],
  },
  {
    slug: 'fiscal-desk',
    category: 'Financial Systems',
    title: 'Fiscal Desk',
    summary:
      'A custom invoicing and financial-record application, built on PostgreSQL, for generating service invoices and tracking disbursements and billing narratives.',
    whatItSolves: [
      'Invoice generation and disbursement tracking not well served by off-the-shelf billing software for this workflow.',
      'A need for a financial record that keeps invoice, disbursement and narrative data together.',
    ],
    stack: ['PostgreSQL', 'SQL', 'Document Generation'],
    features: [
      {
        title: 'Invoice generation',
        body: 'Generates professional service invoices from underlying billing and disbursement data.',
      },
      {
        title: 'PostgreSQL data model',
        body: 'Invoice, disbursement and narrative data is stored in PostgreSQL as the system of record.',
      },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Fiscal Desk is a PostgreSQL-based invoicing and financial-record application. Further architecture and workflow detail will be documented here as it is confirmed.',
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
