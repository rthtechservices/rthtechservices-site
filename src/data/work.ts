/**
 * The six "latest work" items. Ported verbatim from the handoff's
 * site-data.js `workItems`, with prototype filenames mapped to real routes.
 *
 * Copy is final-intent per the handoff, EXCEPT TaskDesk and Fiscal Desk —
 * those summaries are deliberately high-level because the technical detail
 * was never confirmed. Fill those in before launch rather than inventing them.
 */
export interface WorkItem {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  href: string;
  tags: string[];
  /** Controls whether this item appears in the homepage "Latest work" section. */
  showOnHome: boolean;
  /** Optional card image in public/images/. */
  image?: string;
}

export const workItems: WorkItem[] = [
  {
    id: 'taskdesk',
    title: 'TaskDesk',
    tagline: 'Structured task tracking and operational workflow',
    summary:
      'A desktop productivity application, built in Python with a PostgreSQL backend, for structured task tracking and operational workflow.',
    href: '/work/taskdesk/',
    image: '/images/work-taskdesk.jpg',
    showOnHome: true,
    tags: ['Desktop App', 'Python', 'PostgreSQL'],
  },
  {
    id: 'fiscaldesk',
    title: 'Fiscal Desk',
    tagline: 'Invoicing, disbursements and billing narratives',
    summary:
      'A custom invoicing and financial-record application, built on PostgreSQL, for generating service invoices and tracking disbursements and billing narratives.',
    href: '/work/fiscal-desk/',
    image: '/images/work-fiscal-desk.jpg',
    showOnHome: true,
    tags: ['Financial Systems', 'PostgreSQL', 'Document Generation'],
  },
  {
    id: 'reporting',
    title: 'Enterprise Reporting & Forecasting',
    tagline: 'SSRS solutions for professional-services environments',
    summary:
      'A portfolio of SQL Server Reporting Services solutions covering financial forecasting, matter analysis, operational reporting, and executive dashboards.',
    href: '/work/reporting/',
    image: '/images/work-reporting.jpg',
    showOnHome: true,
    tags: ['SSRS', 'Forecasting', 'Dashboards'],
  },
  {
    id: 'jfk-scc-monitor',
    title: 'JFK Law LLP — SCC Decision Monitor',
    tagline: 'Hourly legal publication monitoring and triage',
    summary:
      'A production internal monitoring workflow that checks Supreme Court of Canada publications every hour and alerts legal users when configured matter-specific criteria are matched.',
    href: '/work/jfk-scc-monitor/',
    showOnHome: true,
    tags: ['SharePoint Online', 'Power Automate', 'RSS'],
  },
  {
    id: 'escala-water-sensor-automation',
    title: 'Escala Residences — Water Sensor Automation',
    tagline: 'Leak alerts routed into service requests within seconds',
    summary:
      'A production workflow that parses water-leak sensor alerts, creates pre-populated service requests in the existing property-management queue, and closes requests automatically when sensors return to normal.',
    href: '/work/escala-water-sensor-automation/',
    showOnHome: true,
    tags: ['Microsoft 365', 'Power Automate', 'Property Management'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure, Remote Management & Resilience',
    tagline: 'Remote administration, backup and recovery planning',
    summary:
      'Practical infrastructure work covering remote administration, database platforms, backup workflows, monitoring and resilient access to distributed systems.',
    href: '/work/infrastructure/',
    image: '/images/work-infrastructure.jpg',
    showOnHome: false,
    tags: ['Infrastructure', 'Monitoring', 'Backup & Recovery'],
  },
  {
    id: 'scripts',
    title: 'Automation & Systems Administration Toolkit',
    tagline: 'PowerShell, SQL and Python tools for operational support',
    summary:
      'A curated, filterable library of scripts and tools for administration, migration, diagnostics, reporting and repeatable operational support.',
    href: '/scripts/',
    image: '/images/work-scripts.jpg',
    showOnHome: true,
    tags: ['PowerShell', 'SQL', 'Python'],
  },
];

export const featuredWorkItems: WorkItem[] = workItems.filter((item) => item.showOnHome);
