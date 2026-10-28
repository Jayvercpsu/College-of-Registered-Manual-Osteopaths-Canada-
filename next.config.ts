import type { NextConfig } from "next";

/**
 * Redirect mapping for legacy WordPress URLs (manualosteopaths.org).
 * Preserves search equity when the redesigned site replaces the old one.
 * Full rationale: docs/CONTENT-MIGRATION.md
 */
const legacyRedirects = [
  /* Legacy URLs for sections now hosted locally */
  { source: "/news-2", destination: "/news", permanent: true },
  { source: "/contact-us", destination: "/contact", permanent: true },
  { source: "/about-crmo", destination: "/about", permanent: true },
  { source: "/member-list", destination: "/members-list", permanent: true },
  { source: "/member-list-2", destination: "/members-list", permanent: true },

  /* Known legacy posts → the matching guideline section */
  {
    source: "/2019/10/10/proper-usage-of-title",
    destination: "/resources#usage-of-title",
    permanent: true,
  },
  {
    source: "/2019/10/15/crmo-informed-consent-guideline",
    destination: "/resources#informed-consent",
    permanent: true,
  },
  {
    source: "/2019/10/18/crmo-code-of-ethics",
    destination: "/resources#code-of-ethics",
    permanent: true,
  },
  {
    source: "/2019/11/21/continuing-education-requirements",
    destination: "/resources#continuing-education",
    permanent: true,
  },
  {
    source: "/2019/10/15/issuing-paid-in-full-receipts",
    destination: "/resources#insurer-recognition",
    permanent: true,
  },
  {
    source: "/2020/02/26/manulife-insurance-company-accepts-crmo",
    destination: "/resources#insurer-recognition",
    permanent: true,
  },
  {
    source: "/2020/09/08/pacific-blue-cross-now-accepts",
    destination: "/resources#insurer-recognition",
    permanent: true,
  },
  {
    source: "/2020/11/20/green-shield-canada-accepts-crmo-1",
    destination: "/resources#insurer-recognition",
    permanent: true,
  },
  {
    source: "/2020/04/24/insurance-coverage-for-virtual-online-osteopathic-treatments-copy",
    destination: "/resources#insurer-recognition",
    permanent: true,
  },

  /* Catch-all for any remaining dated news posts: /YYYY/MM/DD/slug */
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug+",
    destination: "/news",
    permanent: true,
  },
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
