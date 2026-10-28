/**
 * Single source of truth for site navigation.
 * Consumed by the header and footer.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

/**
 * Primary navigation mirrors the live CRMO site's information architecture.
 * All destinations are now hosted locally in this redesigned site.
 */
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Osteopathy", href: "/osteopathy" },
  { label: "Reporting", href: "/reporting" },
  { label: "Council of Elders", href: "/council-of-elders" },
  { label: "Land Acknowledgment", href: "/land-acknowledgment" },
  { label: "News", href: "/news" },
  { label: "Members List", href: "/members-list" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: { heading: string; links: NavItem[] }[] = [
  {
    heading: "College",
    links: [
      { label: "Home", href: "/" },
      { label: "Osteopathy", href: "/osteopathy" },
      { label: "Reporting", href: "/reporting" },
      { label: "Council of Elders", href: "/council-of-elders" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Land Acknowledgment", href: "/land-acknowledgment" },
      { label: "News", href: "/news" },
      { label: "Members List", href: "/members-list" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];
