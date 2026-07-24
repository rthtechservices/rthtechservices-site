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
}

export const workItems: WorkItem[] = [
  {
    id: 'taskdesk',
    title: 'TaskDesk',
    tagline: 'Structured task tracking and operational workflow',
    summary:
      'A desktop productivity application, built in Python with a PostgreSQL backend, for structured task tracking and operational workflow.',
    href: '/work/taskdesk/',
    tags: ['Desktop App', 'Python', 'PostgreSQL'],
  },
  {
    id: 'fiscaldesk',
    title: 'Fiscal Desk',
    tagline: 'Invoicing, disbursements and billing narratives',
    summary:
      'A custom invoicing and financial-record application, built on PostgreSQL, for generating service invoices and tracking disbursements and billing narratives.',
    href: '/work/fiscal-desk/',
    tags: ['Financial Systems', 'PostgreSQL', 'Document Generation'],
  },
  {
    id: 'reporting',
    title: 'Enterprise Reporting & Forecasting',
    tagline: 'SSRS solutions for professional-services environments',
    summary:
      'A portfolio of SQL Server Reporting Services solutions covering financial forecasting, matter analysis, operational reporting, and executive dashboards.',
    href: '/work/reporting/',
    tags: ['SSRS', 'Forecasting', 'Dashboards'],
  },
  {
    id: 'sharepoint',
    title: 'SharePoint & Microsoft 365 Solutions',
    tagline: 'Governance, document management and workflow automation',
    summary:
      'Governance, document-management and workflow solutions built on SharePoint Online, Power Automate, Microsoft 365 and custom SPFx components.',
    href: '/work/sharepoint/',
    tags: ['SharePoint', 'Power Automate', 'Governance'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure, Remote Management & Resilience',
    tagline: 'Remote administration, backup and recovery planning',
    summary:
      'Practical infrastructure work covering remote administration, database platforms, backup workflows, monitoring and resilient access to distributed systems.',
    href: '/work/infrastructure/',
    tags: ['Infrastructure', 'Monitoring', 'Backup & Recovery'],
  },
  {
    id: 'scripts',
    title: 'Automation & Systems Administration Toolkit',
    tagline: 'PowerShell, SQL and Python tools for operational support',
    summary:
      'A curated, filterable library of scripts and tools for administration, migration, diagnostics, reporting and repeatable operational support.',
    href: '/scripts/',
    tags: ['PowerShell', 'SQL', 'Python'],
  },
];
