/**
 * The published script library.
 *
 * Source of truth is the rthtechservices-scripts repo — README.md (purpose,
 * runtime) and CATALOG.md (sanitization notes, validation status). When a
 * script is added or its validation status changes there, update it here.
 *
 * `func` is the one field not lifted verbatim: it groups the README's stated
 * purposes into filterable categories.
 */

export const REPO_URL = 'https://github.com/rthtechservices/rthtechservices-scripts';

/** Returns the exact GitHub blob URL for a script at the given repo-relative path. */
export function scriptSourceUrl(path: string): string {
  return `${REPO_URL}/blob/main/${path}`;
}

export interface Script {
  id: string;
  title: string;
  summary: string;
  language: 'PowerShell' | 'Python' | 'SQL';
  runtime: string;
  func: string;
  validation: 'Validated' | 'Testing pending';
  path: string;
  /** Sanitization / review notes from CATALOG.md. */
  review: string;
  /** Validation detail from CATALOG.md. */
  validationDetail: string;
  /** Operational cautions. Repo-wide guidance plus anything script-specific. */
  safety: string;
  // --- Optional metadata; populate only where supportable from repository content ---
  /**
   * Broad operational risk level. Classification guidance:
   * - `low`    — read-only or monitoring operations with no persistent side-effects.
   * - `medium` — operations that write, modify, or delete files/resources on the local system.
   * - `high`   — operations that require explicit written authorization (e.g. network scanning).
   */
  riskLevel?: 'low' | 'medium' | 'high';
  /** ISO 8601 date of the last source review. */
  lastReviewed?: string;
  /** Environment or platform the script was tested on. */
  testedOn?: string;
  /** Short description or excerpt of expected output. */
  outputExample?: string;
  /** Name of a related portfolio project, if applicable. */
  relatedProject?: string;
}

const RESPONSIBLE_USE =
  'Read the script help before running it, and test in a non-production environment first.';

export const scripts: Script[] = [
  {
    id: 'get-systeminventory',
    title: 'Get-SystemInventory.ps1',
    summary:
      'Export a detailed Windows hardware, software, network, and event-log inventory.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Inventory & Reporting',
    validation: 'Validated',
    path: 'powershell/Get-SystemInventory.ps1',
    review:
      'Standardized author/company/version metadata; no embedded secrets or private endpoints detected.',
    validationDetail: 'PowerShell parse and local report-generation test passed.',
    safety: `${RESPONSIBLE_USE} Review generated reports before sharing — system inventories can contain computer names, usernames, serial numbers, installed software and IP addresses.`,
  },
  {
    id: 'get-systemreport-html',
    title: 'Get-SystemReport-HTML.ps1',
    summary: 'Build a styled, navigable HTML system report.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Inventory & Reporting',
    validation: 'Validated',
    path: 'powershell/Get-SystemReport-HTML.ps1',
    review:
      'Standardized author/company/version metadata; no embedded secrets or private endpoints detected.',
    validationDetail: 'PowerShell parse and local HTML-generation test passed.',
    safety: `${RESPONSIBLE_USE} The generated report captures local system detail — review it before sharing.`,
  },
  {
    id: 'invoke-domainhealthcheck',
    title: 'Invoke-DomainHealthCheck.ps1',
    summary: 'Diagnose DNS, routing, ports, HTTP/S, and SNI for a domain.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Diagnostics',
    validation: 'Testing pending',
    path: 'powershell/Invoke-DomainHealthCheck.ps1',
    review: 'Standardized metadata; examples use public documentation domains and resolvers.',
    validationDetail: 'PowerShell parse passed; live-network test pending.',
    safety: `${RESPONSIBLE_USE} Runs outbound network queries against the domain you supply.`,
  },
  {
    id: 'measure-diskthroughput',
    title: 'Measure-DiskThroughput.ps1',
    summary: 'Measure sequential disk read and write throughput with cleanup safeguards.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Performance',
    validation: 'Testing pending',
    path: 'powershell/Measure-DiskThroughput.ps1',
    review:
      'Safer 1 GB single-drive default; dedicated work folder; partial-file cleanup; configurable CSV output.',
    validationDetail:
      'PowerShell parse and missing-drive/CSV safety path passed; full throughput test intentionally pending.',
    safety: `${RESPONSIBLE_USE} Creates and deletes large temporary benchmark files in a dedicated work folder — confirm free space before running.`,
  },
  {
    id: 'scan-portrange',
    title: 'Scan-PortRange.ps1',
    summary: 'Scan an authorized TCP port range using bounded parallel connections.',
    language: 'PowerShell',
    runtime: 'PowerShell 7+',
    func: 'Networking',
    validation: 'Validated',
    path: 'powershell/Scan-PortRange.ps1',
    review:
      'Replaced private-network examples with reserved documentation addresses; added authorization warning and PowerShell version guard.',
    validationDetail: 'PowerShell parse and two-port loopback smoke test passed.',
    safety:
      'Use only against systems you own or have explicit written permission to test. Unauthorized port scanning may breach acceptable-use policy or law. Requires PowerShell 7 or later.',
  },
  {
    id: 'get-processsnapshot-csv',
    title: 'Get-ProcessSnapshot-CSV.ps1',
    summary: 'Export process CPU, memory, I/O, thread, and handle data.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Inventory & Reporting',
    validation: 'Validated',
    path: 'powershell/Get-ProcessSnapshot-CSV.ps1',
    review:
      'Standardized author/company/version metadata; no embedded secrets or private endpoints detected.',
    validationDetail: 'PowerShell parse and local CSV-generation test passed.',
    safety: `${RESPONSIBLE_USE} Exported process data can reveal usernames and installed software.`,
  },
  {
    id: 'watch-routertraffic-upnp',
    title: 'Watch-RouterTraffic-UPnP.ps1',
    summary: 'Log router WAN byte counters and calculated bandwidth to CSV.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Networking',
    validation: 'Testing pending',
    path: 'powershell/Watch-RouterTraffic-UPnP.ps1',
    review: 'Removed embedded router address; unicast fallback is now explicit and optional.',
    validationDetail: 'PowerShell parse passed; compatible-router test pending.',
    safety: `${RESPONSIBLE_USE} Requires a UPnP-capable router with the service enabled.`,
  },
  {
    id: 'watch-pinguntiloffline',
    title: 'Watch-PingUntilOffline.ps1',
    summary: 'Monitor a host until it becomes unreachable, with optional logging.',
    language: 'PowerShell',
    runtime: 'PowerShell 5.1+',
    func: 'Diagnostics',
    validation: 'Validated',
    path: 'powershell/Watch-PingUntilOffline.ps1',
    review: 'Removed embedded home-network target; target is now a mandatory parameter.',
    validationDetail: 'PowerShell parse and offline-target/logging test passed.',
    safety: `${RESPONSIBLE_USE} Runs continuously until the target stops responding or you interrupt it.`,
  },
  {
    id: 'batch-compress-images',
    title: 'batch_compress_images.py',
    summary: 'Recompress JPEG/PNG image trees without overwriting source files.',
    language: 'Python',
    runtime: 'Python 3.9+',
    func: 'Image Processing',
    validation: 'Validated',
    path: 'python/batch_compress_images.py',
    review:
      'Added publication metadata, argument validation, deterministic ordering, and protection against reprocessing its own output tree.',
    validationDetail: 'Python compile, JPEG/PNG round trip, and repeat-run tests passed.',
    safety: `${RESPONSIBLE_USE} Writes to a separate output tree and does not modify source images.`,
  },
  {
    id: 'sql-dependency-graph',
    title: 'sql_dependency_graph.py',
    summary: 'Render an interactive dependency graph from a SQL object-edge CSV.',
    language: 'Python',
    runtime: 'Python 3.9+',
    func: 'Data Engineering',
    validation: 'Validated',
    path: 'python/sql_dependency_graph.py',
    review:
      'Added publication metadata, normalized public filename and examples, literal filtering, escaped tooltips, and self-contained UTF-8 HTML output.',
    validationDetail: 'Python compile and two-edge standalone graph-generation test passed.',
    safety: `${RESPONSIBLE_USE} Reads a CSV you supply; the generated HTML embeds your object names.`,
  },
];

/** Filter dimensions rendered as chip rows, in display order. */
export const filterDimensions = [
  { key: 'language', label: 'Language' },
  { key: 'runtime', label: 'Runtime' },
  { key: 'func', label: 'Function' },
  { key: 'validation', label: 'Validation' },
] as const;
