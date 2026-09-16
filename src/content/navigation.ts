export interface NavItem {
  label: string;
  href: string;
}

// Simplified in-page anchor navigation per VISUAL_DIRECTION.md §5 — not the production
// site's multi-level mega-menu, which doesn't suit a single-page site. Each href must match
// the `id` the corresponding section sets when it is built (T009/T011/T012).
export const navItems: NavItem[] = [
  { label: "Technologies", href: "#technologies" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
];
