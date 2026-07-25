/**
 * Primary navigation. Ported from the handoff's site-data.js `navItems`,
 * with prototype filenames (Work.dc.html) mapped to real routes.
 */
export interface NavItem {
  label: string;
  href: string;
  key: string;
}

export const navItems: NavItem[] = [
  { label: 'Work', href: '/work/', key: 'work' },
  { label: 'Scripts Library', href: '/scripts/', key: 'scripts' },
  // Reports Gallery is built but the catalog content isn't ready — restore this
  // line (and add src/pages/reports.astro) when it is.
  // { label: 'Reports Gallery', href: '/reports/', key: 'reports' },
  { label: 'About', href: '/about/', key: 'about' },
  { label: 'Contact', href: '/contact/', key: 'contact' },
];
