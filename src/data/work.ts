/**
 * Work items shown on /work/ and, where `showOnHome` is set, in the homepage
 * "Latest work" grid. Each item with an `href` under /work/ needs a matching
 * case study in case-studies.ts.
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
    tagline: 'Email and meetings turned into tracked tasks, time and billing records',
    summary:
      'A production desktop application with an Android companion, built in Python on PostgreSQL, that turns client email and meeting transcripts into tracked tasks and logged time, with AI decisions kept reviewable.',
    href: '/work/taskdesk/',
    image: '/images/work-taskdesk.jpg',
    showOnHome: true,
    tags: ['Desktop App', 'Python', 'PostgreSQL'],
  },
  {
    id: 'fiscaldesk',
    title: 'Fiscal Desk',
    tagline: 'Invoicing, disbursements and bank reconciliation',
    summary:
      'A production application, built in Python on PostgreSQL, that issues numbered invoices from reviewed time and disbursements and reconciles bank transactions against their supporting documents.',
    href: '/work/fiscal-desk/',
    image: '/images/work-fiscal-desk.jpg',
    showOnHome: true,
    tags: ['Financial Systems', 'PostgreSQL', 'Document Generation'],
  },
  {
    id: 'reporting',
    title: 'Legal Reporting & Analytics on Elite 3E',
    tagline: 'SSRS reporting for three law firms',
    summary:
      'SQL Server and SSRS reporting against Elite 3E data: built from scratch at two firms and rewritten from the ground up for a third firm’s migration, across roughly 339 reports.',
    href: '/work/reporting/',
    showOnHome: true,
    tags: ['SSRS', 'SQL Server', 'Elite 3E'],
  },
  {
    id: 'ssrs-vantage',
    title: 'SSRS Vantage — Report Server Management Tool',
    tagline: 'One application for report moves, exports and backups',
    summary:
      'A custom .NET desktop application that replaced manual steps and VBScripts for promoting, exporting, backing up and comparing SSRS reports, and for reviewing schedules and subscriptions.',
    href: '/work/ssrs-vantage/',
    showOnHome: false,
    tags: ['.NET', 'SSRS', 'Administration'],
  },
  {
    id: 'sharepoint-intranets',
    title: 'SharePoint Intranets & Microsoft 365 Platforms',
    tagline: 'Intranets, governance and workflow for legal and property management',
    summary:
      'Intranet portals on SharePoint Online covering more than 100 site collections, with information architecture, permissions, governance and workflow automation.',
    href: '/work/sharepoint-intranets/',
    showOnHome: false,
    tags: ['SharePoint Online', 'Power Automate', 'SPFx'],
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
    id: 'filedesk',
    title: 'FileDesk — Safe File Consolidation',
    tagline: 'A deterministic engine with an advisory-only local model',
    summary:
      'An active build that consolidates files from many drives. Hashes decide duplicates, a local language model only suggests, and nothing is removed without a verified match, a recorded plan and an explicit commit.',
    href: '/work/filedesk/',
    showOnHome: false,
    tags: ['Python', 'SQLite', 'Local LLM'],
  },
  {
    id: 'sql-analyzer',
    title: 'RTH Utility SQL Analyzer',
    tagline: 'Early design: a reporting knowledge base for SSRS estates',
    summary:
      'An exploratory workbench, in early design, for cataloguing SSRS reports, dataset SQL and schema dependencies so related reports can be compared on evidence.',
    href: '/work/sql-analyzer/',
    showOnHome: false,
    tags: ['SQL Server', 'SSRS', 'Exploratory'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure, Remote Management & Resilience',
    tagline: 'Remote administration, backup and recovery planning',
    summary:
      'Practical infrastructure work covering remote administration, database platforms, backup workflows, monitoring and resilient access to distributed systems.',
    href: '/work/infrastructure/',
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
