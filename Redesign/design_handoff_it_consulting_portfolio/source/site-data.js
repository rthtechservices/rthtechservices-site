export const navItems = [
  { label: 'Work', href: 'Work.dc.html', key: 'work' },
  { label: 'Scripts Library', href: 'ScriptsLibrary.dc.html', key: 'scripts' },
  { label: 'Reports Gallery', href: 'ReportsGallery.dc.html', key: 'reports' },
  { label: 'About', href: 'About.dc.html', key: 'about' },
  { label: 'Contact', href: 'Contact.dc.html', key: 'contact' }
];

export const workItems = [
  {
    id: 'taskdesk',
    title: 'TaskDesk',
    tagline: 'Structured task tracking and operational workflow',
    summary: 'A desktop productivity application, built in Python with a PostgreSQL backend, for structured task tracking and operational workflow.',
    href: 'TaskDesk.dc.html',
    tags: ['Desktop App', 'Python', 'PostgreSQL']
  },
  {
    id: 'fiscaldesk',
    title: 'Fiscal Desk',
    tagline: 'Invoicing, disbursements and billing narratives',
    summary: 'A custom invoicing and financial-record application, built on PostgreSQL, for generating service invoices and tracking disbursements and billing narratives.',
    href: 'FiscalDesk.dc.html',
    tags: ['Financial Systems', 'PostgreSQL', 'Document Generation']
  },
  {
    id: 'reporting',
    title: 'Enterprise Reporting & Forecasting',
    tagline: 'SSRS solutions for professional-services environments',
    summary: 'A portfolio of SQL Server Reporting Services solutions covering financial forecasting, matter analysis, operational reporting, and executive dashboards.',
    href: 'Reporting.dc.html',
    tags: ['SSRS', 'Forecasting', 'Dashboards']
  },
  {
    id: 'sharepoint',
    title: 'SharePoint & Microsoft 365 Solutions',
    tagline: 'Governance, document management and workflow automation',
    summary: 'Governance, document-management and workflow solutions built on SharePoint Online, Power Automate, Microsoft 365 and custom SPFx components.',
    href: 'SharePoint.dc.html',
    tags: ['SharePoint', 'Power Automate', 'Governance']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure, Remote Management & Resilience',
    tagline: 'Remote administration, backup and recovery planning',
    summary: 'Practical infrastructure work covering remote administration, database platforms, backup workflows, monitoring and resilient access to distributed systems.',
    href: 'Infrastructure.dc.html',
    tags: ['Infrastructure', 'Monitoring', 'Backup & Recovery']
  },
  {
    id: 'scripts',
    title: 'Automation & Systems Administration Toolkit',
    tagline: 'PowerShell, SQL and Python tools for operational support',
    summary: 'A curated, filterable library of scripts and tools for administration, migration, diagnostics, reporting and repeatable operational support.',
    href: 'ScriptsLibrary.dc.html',
    tags: ['PowerShell', 'SQL', 'Python']
  }
];

export const scripts = [
  { id: 's1', title: 'AD Stale Account Auditor', language: 'PowerShell', platform: 'Windows', func: 'Administration', complexity: 'Intermediate', availability: 'Source Available', sample: true, summary: 'Scans Active Directory for inactive accounts past a configurable threshold and lists them for admin review.' },
  { id: 's2', title: 'SharePoint Permission Drift Report', language: 'PowerShell', platform: 'SharePoint', func: 'Reporting', complexity: 'Full Workflow', availability: 'Case Study Only', sample: true, summary: 'Compares current site permissions against a defined baseline and lists differences for review.' },
  { id: 's3', title: 'Invoice Data Reconciliation', language: 'SQL', platform: 'SQL Server', func: 'Data Migration', complexity: 'Intermediate', availability: 'Code Excerpt', sample: true, summary: 'Reconciles disbursement and billing data between two systems during a migration and flags mismatches.' },
  { id: 's4', title: 'Nightly Backup Verifier', language: 'Bash', platform: 'Linux', func: 'Backup and Recovery', complexity: 'Utility', availability: 'Source Available', sample: true, summary: 'Verifies checksum integrity of nightly backup archives and alerts on failure.' },
  { id: 's5', title: 'Log File Triage Tool', language: 'Python', platform: 'Windows', func: 'Diagnostics', complexity: 'Utility', availability: 'Source Available', sample: true, summary: 'Parses large application log files and clusters recurring errors by frequency.' },
  { id: 's6', title: 'Power Automate Flow Exporter', language: 'JavaScript/TypeScript', platform: 'Power Automate', func: 'Deployment', complexity: 'Intermediate', availability: 'Code Excerpt', sample: true, summary: 'Exports flow definitions with metadata for change tracking and environment migration.' },
  { id: 's7', title: 'PostgreSQL Health Snapshot', language: 'SQL', platform: 'PostgreSQL', func: 'Monitoring', complexity: 'Utility', availability: 'Source Available', sample: true, summary: 'Captures connection counts, table bloat, index usage and slow-query signals into a single snapshot.' },
  { id: 's8', title: 'Docker Container Rebuild Pipeline', language: 'Bash', platform: 'Docker', func: 'Deployment', complexity: 'Full Workflow', availability: 'Case Study Only', sample: true, summary: 'Automates image rebuild, health check and rollback for services running in Docker.' },
  { id: 's9', title: 'M365 License Usage Auditor', language: 'PowerShell', platform: 'Microsoft 365', func: 'Administration', complexity: 'Intermediate', availability: 'Source Available', sample: true, summary: 'Reports unused and underused license assignments across a tenant.' },
  { id: 's10', title: 'GitHub Repo Hygiene Checker', language: 'Python', platform: 'GitHub', func: 'Security', complexity: 'Utility', availability: 'Source Available', sample: true, summary: 'Flags repos missing branch protection, exposed secrets patterns, or stale dependency manifests.' },
  { id: 's11', title: 'File Share Duplicate Finder', language: 'Python', platform: 'Windows', func: 'File Management', complexity: 'Intermediate', availability: 'Source Available', sample: true, summary: 'Walks a network file share, hashes contents, and lists duplicate and near-duplicate files.' },
  { id: 's12', title: 'Azure VM Cost Baseline', language: 'SQL', platform: 'Azure', func: 'Monitoring', complexity: 'Utility', availability: 'Code Excerpt', sample: true, summary: 'Aggregates VM usage exports into a monthly cost baseline for anomaly review.' }
];

export const reports = [
  { id: 'r1', title: 'Matter Profitability Forecast', platform: 'SSRS', func: 'Finance', outputType: 'Forecast', audience: 'Executive', sample: true, question: 'Which active matters are trending toward loss before write-off, and why?', sources: 'Time entries, billing rates, disbursements, matter budgets (synthetic).', calculations: 'Realized vs. billed rate variance, burn-rate projection against budget, weighted forecast by matter stage.', outcome: 'Designed to give practice leaders early visibility into matters trending off budget.' },
  { id: 'r2', title: 'Timekeeper Utilization Summary', platform: 'SSRS', func: 'Legal Operations', outputType: 'Summary Report', audience: 'Management', sample: true, question: 'Are billable targets being met across practice groups and individual timekeepers?', sources: 'Timekeeper entries, target hours, non-billable categories (synthetic).', calculations: 'Utilization rate, realization rate, variance to target by role and group.', outcome: 'Intended for use in practice-group reviews to flag utilization variance early.' },
  { id: 'r3', title: 'Executive Financial Dashboard', platform: 'Power BI', func: 'Finance', outputType: 'Dashboard', audience: 'Executive', sample: true, question: 'What is the firm-wide financial position this month against plan?', sources: 'GL exports, billing summary, AR aging, disbursement ledger (synthetic).', calculations: 'Revenue vs. plan, AR aging buckets, WIP-to-billing conversion, trailing 12-month trend.', outcome: 'Consolidates financial signals otherwise assembled from separate spreadsheets into one monthly view.' },
  { id: 'r4', title: 'Client Reporting Package', platform: 'SSRS', func: 'Legal Operations', outputType: 'Client-Facing', audience: 'Client-Facing', sample: true, question: 'What did we bill and why, in language a client finance team can audit?', sources: 'Approved invoice data, disbursement narrative, matter budget (synthetic).', calculations: 'Fee vs. budget summary, disbursement categorization, plain-language billing narrative.', outcome: 'Structured to give clients an auditable, self-serve summary of billing narrative and disbursements.' },
  { id: 'r5', title: 'IT Ticket Volume & Resolution', platform: 'Power BI', func: 'IT Operations', outputType: 'Dashboard', audience: 'Management', sample: true, question: 'Where is support load concentrated, and is resolution time improving?', sources: 'Helpdesk ticket export, category taxonomy, SLA targets (synthetic).', calculations: 'Ticket volume by category and requester, mean time to resolution, SLA compliance rate.', outcome: 'Highlights where support load concentrates and whether resolution time is trending.' },
  { id: 'r6', title: 'Backup Job Compliance Report', platform: 'SQL-generated', func: 'IT Operations', outputType: 'Exception Report', audience: 'Operational User', sample: true, question: 'Which systems missed their backup or verification window last week?', sources: 'Backup job logs, retention policy table (synthetic).', calculations: 'Job success rate, verification pass rate, exceptions against policy thresholds.', outcome: 'Turns a manual daily backup check into an automated exception list.' },
  { id: 'r7', title: 'Project Delivery Status Rollup', platform: 'Excel', func: 'Project Management', outputType: 'Summary Report', audience: 'Management', sample: true, question: 'Across active projects, what is on track, at risk, or behind?', sources: 'Project tracker exports, milestone dates, resourcing notes (synthetic).', calculations: 'Schedule variance, milestone completion rate, RAG status rollup.', outcome: 'Standardizes a status-reporting format across projects.' },
  { id: 'r8', title: 'Data Quality Reconciliation Report', platform: 'SQL-generated', func: 'Administration', outputType: 'Data Export', audience: 'Analyst', sample: true, question: 'Where do source system and reporting warehouse figures disagree?', sources: 'Source system extract, warehouse fact tables (synthetic).', calculations: 'Row-count and sum reconciliation by table, variance threshold flagging.', outcome: 'Surfaces data pipeline drift between source and warehouse before it reaches a dashboard.' }
];
