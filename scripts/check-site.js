#!/usr/bin/env node
// @ts-check
/**
 * scripts/check-site.js — post-build site validation
 *
 * Inspects every HTML file emitted by `npm run build` and reports:
 *   - missing or empty <title>
 *   - missing or empty <meta name="description">
 *   - root-relative <a href>, <link href>, <img src>, <script src> and
 *     <source src> values that do not resolve to a real file in dist/
 *
 * URL resolution rules
 * --------------------
 *   /foo/bar/           →  dist/foo/bar/index.html  (Astro directory format)
 *   /foo/bar            →  dist/foo/bar  OR  dist/foo/bar/index.html  OR  dist/foo/bar.html
 *   /assets/logo.png    →  dist/assets/logo.png  (exact file)
 *   /_astro/main.abc.css → dist/_astro/main.abc.css
 *
 * Silently skipped
 * ----------------
 *   - External URLs  (https://, http://, //)
 *   - Fragment-only  (#anchor)
 *   - Protocol URLs  (mailto:, tel:, data:, javascript:)
 *
 * Duplicate broken references are reported once with every source page listed.
 *
 * Usage
 * -----
 *   node scripts/check-site.js [dist-dir]
 *   (defaults to <repo-root>/dist)
 *
 * Exit 0 — all checks passed
 * Exit 1 — one or more failures found
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const distDir = process.argv[2]
  ? resolve(process.argv[2])
  : resolve(__dirname, '..', 'dist');

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

/** True when path exists and is a regular file (not a directory). */
function isFile(p) {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
}

/** Recursively collect absolute paths of every .html file under dir. */
function walkHtml(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtml(full, out);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// URL resolution
// ---------------------------------------------------------------------------

/**
 * Attempt to resolve a root-relative URL path to a real file inside distDir.
 *
 * Candidates tried in order:
 *  1. dist/<pathname>               — exact file (images, CSS, XML …)
 *  2. dist/<pathname>/index.html    — Astro directory-format page
 *  3. dist/<pathname>.html          — flat HTML fallback
 *
 * Returns the first matching path, or null if nothing is found.
 */
function resolveInDist(rawPath) {
  // Strip query string and fragment before resolving.
  const pathname = rawPath.split('?')[0].split('#')[0];

  const stripped = pathname.replace(/\/+$/, ''); // remove trailing slashes

  const candidates = [
    join(distDir, pathname),                   // exact
    join(distDir, stripped, 'index.html'),     // directory format
    join(distDir, stripped + '.html'),         // flat HTML
  ];

  for (const c of candidates) {
    if (isFile(c)) return c;
  }
  return null;
}

/** True for URLs that should not be validated against the filesystem. */
function isSkipped(url) {
  if (!url) return true;
  const u = url.trim();
  return (
    u === '' ||
    u.startsWith('#') ||
    /^https?:\/\//i.test(u) ||
    u.startsWith('//') ||
    /^(mailto|tel|data|javascript):/i.test(u)
  );
}

// ---------------------------------------------------------------------------
// HTML extraction (regex-based; no DOM dependency)
// ---------------------------------------------------------------------------

function extractTitle(html) {
  const m = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  return m ? m[1].trim() : '';
}

function extractDescription(html) {
  // Both attribute orderings are valid HTML.
  const m =
    /<meta\b[^>]*\bname="description"[^>]*\bcontent="([^"]*)"/i.exec(html) ||
    /<meta\b[^>]*\bcontent="([^"]*)"[^>]*\bname="description"/i.exec(html);
  return m ? m[1].trim() : '';
}

/**
 * Return every root-relative URL referenced in an HTML document.
 * Covers: <a href>, <link href>, <img src>, <script src>, <source src>.
 */
function extractInternalRefs(html) {
  const rules = [
    { re: /<a\b[^>]*?\bhref="([^"]*)"/gi, tag: 'a', attr: 'href' },
    { re: /<link\b[^>]*?\bhref="([^"]*)"/gi, tag: 'link', attr: 'href' },
    { re: /<img\b[^>]*?\bsrc="([^"]*)"/gi, tag: 'img', attr: 'src' },
    { re: /<script\b[^>]*?\bsrc="([^"]*)"/gi, tag: 'script', attr: 'src' },
    { re: /<source\b[^>]*?\bsrc="([^"]*)"/gi, tag: 'source', attr: 'src' },
  ];

  const refs = [];
  for (const { re, tag, attr } of rules) {
    let m;
    while ((m = re.exec(html)) !== null) {
      const url = m[1];
      if (!isSkipped(url) && url.startsWith('/')) {
        refs.push({ tag, attr, url });
      }
    }
  }
  return refs;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!existsSync(distDir)) {
    console.error(`\ncheck-site: dist directory not found: ${distDir}`);
    console.error('Run `npm run build` first.\n');
    process.exit(1);
  }

  const files = walkHtml(distDir);

  if (files.length === 0) {
    console.error(`\ncheck-site: no HTML files found in ${distDir}\n`);
    process.exit(1);
  }

  console.log(`check-site: validating ${files.length} HTML page(s) in ${distDir}\n`);

  let errorCount = 0;

  // Broken references: url → Set of source page paths (for deduplication)
  const brokenRefs = new Map();

  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    // Display path relative to dist root, with forward slashes.
    const page = '/' + file.slice(distDir.length + 1).replace(/\\/g, '/');

    // --- Metadata checks ---

    if (!extractTitle(html)) {
      console.error(`✗ [missing title]       ${page}`);
      errorCount++;
    }

    if (!extractDescription(html)) {
      console.error(`✗ [missing description] ${page}`);
      errorCount++;
    }

    // --- Reference checks ---

    for (const { url } of extractInternalRefs(html)) {
      if (!resolveInDist(url)) {
        if (!brokenRefs.has(url)) brokenRefs.set(url, new Set());
        brokenRefs.get(url).add(page);
      }
    }
  }

  // Report broken references once each, listing all referencing pages.
  for (const [url, sources] of brokenRefs) {
    console.error(`✗ [broken ref]          ${url}`);
    for (const src of sources) {
      console.error(`    ↳ referenced from ${src}`);
    }
    errorCount++;
  }

  if (errorCount === 0) {
    console.log(`✓ All checks passed (${files.length} pages).\n`);
    process.exit(0);
  }

  console.error(`\ncheck-site: ${errorCount} error(s) found.\n`);
  process.exit(1);
}

main();
