/**
 * Résumé content for /resume/. Mirrors the PDF in public/resume/ (dated 2026-09-30)
 * with the contact line removed — enquiries go through the contact form, never a
 * published email address or phone number. Update this file and the PDF together.
 */

export const RESUME_PDF = '/resume/Rohan-Hare-Resume-2026-09.pdf';
export const RESUME_PDF_LABEL = 'September 2026';

export const resumeSummary =
  'Cross-functional technology professional with 17+ years of Canadian experience spanning business and systems analysis, enterprise application support, SQL/data and reporting, automation, Microsoft platforms, infrastructure operations, IT service management and project delivery. Strong at translating business needs into practical technical solutions, tracing system dependencies and data flows, coordinating delivery across business and technical teams, and carrying solutions through testing, implementation and operational support.';

export interface ResumeRole {
  title: string;
  dates: string;
  note?: string;
  bullets: string[];
}

export interface ResumeEmployer {
  name: string;
  location: string;
  blurb?: string;
  roles: ResumeRole[];
}

export const resumeExperience: ResumeEmployer[] = [
  {
    name: 'RTH Tech Services Inc.',
    location: 'Vancouver, BC',
    roles: [
      {
        title: 'Principal Consultant',
        dates: 'Apr 2016 – Present',
        bullets: [
          'Lead client discovery to define business problems, requirements, scope, risks and deliverables across reporting, Microsoft 365, SharePoint and automation engagements for several legal firms, a strata corporation, and a sub-contracted role with a digital marketing agency. Work comes largely through repeat business and referrals, including a client relationship spanning more than a decade.',
          'Design and develop reporting on SQL Server, SSRS, Excel and Power BI against Elite 3E ERP data. Built reporting from scratch for two law firms (79 reports, ~18,000 lines of SQL, about 12 months each) covering AR, WIP, billing, rankings and firm KPIs for ~500 users. Rewrote 200+ reports for a third firm’s migration from Enterprise 3.7 to 3E (a 10,000+ table schema change); the catalog now stands at 260 reports and ~40,000 lines of SQL for ~280 users.',
          'Built SSRSVantage, a custom .NET application that replaced manual workflows and legacy VBScripts for SSRS schedules, report moves, RDL backups and various other SSRS Server management items. Also delivered 8 Excel dashboards, 50+ SQL ad-hoc data extracts and a custom exporter for monthly billing uploads of 600+ invoices.',
          'Deployed 5 SharePoint intranet portals for four firms, replacing legacy intranets, comprising 100+ site collections and several hundred pages for ~400 users, covering information architecture, permissions, governance and workflow automation.',
          'Developed a production Power Automate monitor for a law firm that checks Supreme Court of Canada feeds hourly, matches reusable user-defined scan profiles and sends triage-ready alerts with AI-assisted summaries.',
          'Manage IT infrastructure for a client, including PCs, Microsoft 365 tenant administration, domains and AGM A/V support.',
          'Assisting a digital marketing agency as a sub-contractor by leading a data-discovery and mapping engagement spanning 35 golf courses, covering financials, membership, bookings, point-of-sale, food and beverage, and resort-hotel data.',
        ],
      },
    ],
  },
  {
    name: 'Powerex',
    location: 'Vancouver, BC',
    blurb:
      'A wholly owned subsidiary of BC Hydro operating a highly available energy-trading environment across Western North America.',
    roles: [
      {
        title: 'IT Project Analyst, PMO',
        dates: 'May 2023 – Jun 2024',
        bullets: [
          'Promoted into a newly created cross-functional PMO role focused on continual improvement, technology adoption and practical problem-solving across IT.',
          'Supported initiatives as a business analyst, tester, trainer and implementation resource, translating business needs into requirements, plans, risks, dependencies and supportable technical outcomes.',
          'Maintained IT business-continuity and disaster-recovery plans and coordinated at least two annual exercises across critical applications, services, storage and replicated data.',
          'Helped deliver a disaster-recovery exercise with 96% overall success, 92% of systems recovered within four hours and 98% within eight.',
          'Contributed to Change, Incident, Problem, Service Continuity and Continual Improvement Management, producing project documentation, procedural manuals and status reports.',
          'Analysed business and IT processes, working with architects, technical teams and executives to improve system efficiency, usability and support.',
        ],
      },
      {
        title: 'IT Operations Business Analyst',
        dates: 'Dec 2018 – May 2023',
        bullets: [
          'Served as a cross-functional business and operations analyst in a complex energy-trading environment of interconnected applications, integrations and internally developed tools.',
          'Led business-continuity and disaster-recovery activities, including plan maintenance, validation, recovery-site health checks and organization-wide exercises.',
          'Administered Tableau Server, managing access, extract schedules, backups, platform health and capacity.',
          'Supported rapid Microsoft 365 adoption during the shift to remote work, delivering company-wide training on Teams, OneDrive, Planner, To Do and Office Online.',
          'Developed and maintained a self-service portal with technical guidance, training materials, FAQs and learning resources.',
          'Investigated recurring operational friction and coordinated improvements across application, infrastructure, cybersecurity, database and business teams.',
        ],
      },
      {
        title: 'Infrastructure, Operations and Security',
        dates: 'Dec 2017 – Dec 2018',
        bullets: [
          'Coordinated operating-system and application patching and maintained endpoint-protection, spam-detection and phishing-detection solutions.',
          'Managed workstation updates, application deployment and monitoring through Microsoft System Center Configuration Manager.',
          'Supported Windows infrastructure, Group Policy, server installations, IIS application pools and changes affecting clustered services.',
        ],
      },
      {
        title: 'Applications Support Analyst and IT Change Manager',
        dates: 'Apr 2016 – Dec 2017',
        note: 'Contract Apr – Nov 2016',
        bullets: [
          'Supported hundreds of third-party and internally developed applications, services and integrations in an energy-trading environment.',
          'Served as the intermediary between business users and technical teams during issue investigation and resolution.',
          'Scheduled, tracked and reported on production changes, applied ITIL-aligned Change Management practices and supported annual change-management audits.',
        ],
      },
    ],
  },
  {
    name: 'Harper Grey LLP',
    location: 'Vancouver, BC',
    roles: [
      {
        title: 'Applications Analyst',
        dates: 'Apr 2012 – Apr 2016',
        bullets: [
          'Facilitated stakeholder workshops with partners and senior management, documented business requirements and translated them into technical specifications for a firm-wide intranet initiative.',
          'Managed external-vendor participation, requirements clarification, timelines and budget constraints while coordinating delivery with internal stakeholders.',
          'Supported and optimized enterprise applications including document management, time tracking, cost-recovery and ERP systems, troubleshooting issues and coordinating production changes.',
          'Developed an internal document-automation solution that streamlined lawyer/paralegal workflows and reduced printing and scanning associated with document finalization.',
        ],
      },
    ],
  },
];

export const resumeCapabilities = [
  { title: 'Business & systems analysis', body: 'Requirements discovery, process analysis, current-state assessment, technical specifications, needs assessment.' },
  { title: 'Enterprise applications', body: 'Application ownership and support, configuration, upgrades, integrations, vendor coordination, production change.' },
  { title: 'Data & reporting', body: 'Report design and development, data validation, reconciliation, migration, dashboards, ad-hoc data extraction.' },
  { title: 'IT service management', body: 'ITIL-aligned Change, Incident, Problem, Service Continuity and Continual Improvement practices.' },
  { title: 'Project & workstream delivery', body: 'Lifecycle coordination, planning, risks and dependencies, implementation readiness, stakeholder communication.' },
  { title: 'Testing & change', body: 'Test planning, UAT, defect investigation, configuration changes, implementation, operational handover.' },
  { title: 'Automation & integration', body: 'Workflow automation, scripting, API-driven integrations, low-code solutions, data movement, process simplification.' },
  { title: 'Documentation & training', body: 'Business cases, procedures, SOPs, user guides, knowledge bases, training, adoption and support.' },
];

export const resumeTechnical = [
  { label: 'Data & reporting', value: 'MS SQL Server (T-SQL), SSRS/PBIRS, SSIS, Power BI, Tableau/Tableau Server, PostgreSQL, Azure SQL, Excel' },
  { label: 'Microsoft & collaboration', value: 'M365 administration, SharePoint, Power Automate, Teams, OneDrive, Exchange Online, Entra ID/AD' },
  { label: 'Automation & development', value: 'PowerShell, Python, .NET, REST/MS Graph/OData APIs, JSON/XML/YAML, Git/GitHub, Visual Studio' },
  { label: 'Enterprise applications', value: 'Elite Enterprise 3.7 / 3E (ERP), document management, time tracking and cost-recovery systems, ITIL-aligned incident, problem, change and service management' },
  { label: 'AI & workflow automation', value: 'AI-assisted document summarization, feed- and API-driven monitoring, profile-based alerting, low-code workflow design' },
  { label: 'Enterprise / operations', value: 'Windows Server, IIS, SCCM / Configuration Manager, Group Policy, endpoint operations, backup/recovery, DNS, networking fundamentals' },
];

export const resumeEducation = [
  'Advanced Diploma, Computer Systems Engineering — RMIT University, Melbourne, Australia (2006)',
  'ITIL Foundation Certificate in IT Service Management — AXELOS (2018)',
  'Microsoft Certified Technology Specialist: SharePoint 2010 Configuration; SQL Server 2008 Implementation & Maintenance; Windows 7 Configuration',
  'Cisco Certified Network Associate (CCNA) — Cisco (2003)',
];
