import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";
import { GlobalScrollReveal } from "@/components/layout/global-scroll-reveal";
import { SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

/**
 * Canonical host: the redesign targets www.manualosteopaths.org. Override via
 * NEXT_PUBLIC_SITE_URL in staging/preview environments so canonical URLs and
 * Open Graph links never leak to the wrong origin.
 */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE.name} | ${SITE.shortName}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    title: `${SITE.name} | ${SITE.shortName}`,
    description: SITE.description,
    url: "/",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#16324F",
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.shortName,
    url: baseUrl,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    foundingDate: "2019-06-27",
    nonprofitStatus: "NonprofitType",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7250 Keele Street, Suite 412",
      addressLocality: "Vaughan",
      addressRegion: "ON",
      postalCode: "L4K 1Z8",
      addressCountry: "CA",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-dvh flex-col bg-canvas text-ink antialiased">
        <SkipLink />
        <Header />
        <GlobalScrollReveal />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
