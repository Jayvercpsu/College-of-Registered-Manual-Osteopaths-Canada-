import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/home/cta-banner";
import { NEWS } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Public CRMO announcements — insurer recognition, professional guidance and updates for members, patients and third-party payers.",
  alternates: { canonical: "/news" },
};

const CATEGORY_TONES = {
  Insurance: "teal",
  Guideline: "navy",
  Policy: "ochre",
} as const;

const YEARS = Array.from(new Set(NEWS.map((item) => item.date.slice(0, 4))));

export default function NewsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
        eyebrow="News & Announcements"
        title="News from the college"
        description="Public announcements from CRMO — insurer recognition, professional guidance and updates for members, patients and third-party payers."
      />

      <section className="bg-canvas py-14 lg:py-20" aria-label="CRMO news archive">
        <Container>
          <div className="flex flex-col gap-6 border-b border-navy-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Archive"
              title="Announcements and updates"
              description="A dated index of publicly announced CRMO updates. Each entry links to the related guidance in Resources."
            />
            <p className="text-sm font-medium text-muted">
              {NEWS.length} entries
            </p>
          </div>

          <div className="mt-12 space-y-14">
            {YEARS.map((year) => {
              const items = NEWS.filter((item) => item.date.startsWith(year));
              return (
                <section key={year} aria-labelledby={`news-year-${year}`}>
                  <div className="flex items-center gap-4">
                    <h2
                      id={`news-year-${year}`}
                      className="font-display text-2xl font-semibold text-navy-900"
                    >
                      {year}
                    </h2>
                    <span aria-hidden className="h-px flex-1 bg-navy-100" />
                    <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                      {items.length} {items.length === 1 ? "update" : "updates"}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {items.map((item) => (
                      <li key={`${item.date}-${item.title}`}>
                        <Link
                          href={item.href}
                          className="card-lift group grid gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:grid-cols-[10rem_1fr]"
                        >
                          <div>
                            <time
                              dateTime={item.date}
                              className="flex items-center gap-2 text-sm font-medium text-muted"
                            >
                              <CalendarDays
                                className="h-4 w-4 shrink-0 text-navy-300"
                                strokeWidth={2}
                                aria-hidden
                              />
                              {item.displayDate}
                            </time>
                            <Badge
                              tone={CATEGORY_TONES[item.category]}
                              className="mt-3"
                            >
                              {item.category}
                            </Badge>
                          </div>

                          <div>
                            <h3 className="font-display text-xl font-semibold text-navy-900 transition-colors group-hover:text-teal-800">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {item.summary}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                              Read the summary
                              <ArrowUpRight
                                className="h-4 w-4"
                                strokeWidth={2.4}
                                aria-hidden
                              />
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <div className="mt-14 flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700"
            >
              <Newspaper className="h-5.5 w-5.5" strokeWidth={2} />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                About this archive
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                This page indexes publicly announced CRMO updates. Full-text
                versions of older posts are being migrated; each entry currently
                links to the related guidance in Resources. Announcements are
                published here as they are released.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Find a registered manual osteopath"
        description="Search the public directory, or learn how to join the college."
      />
    </>
  );
}
