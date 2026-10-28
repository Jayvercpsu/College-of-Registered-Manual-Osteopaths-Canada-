import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { DirectorySearch } from "@/components/directory/directory-search";
import { PractitionerCard } from "@/components/directory/practitioner-card";
import { Pagination } from "@/components/directory/pagination";
import { SampleDataNotice } from "@/components/directory/sample-data-notice";
import { asProvinceCode, searchPractitioners } from "@/lib/practitioners";
import type { DirectoryQuery } from "@/types/practitioner";

export const metadata: Metadata = {
  title: "Find a Registered Manual Osteopath",
  description:
    "Search the public CRMO directory by practitioner name, city or province to find a registered manual osteopath (RMO) near you.",
  alternates: { canonical: "/directory" },
};

interface DirectoryPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function first(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function DirectoryPage({ searchParams }: DirectoryPageProps) {
  const params = await searchParams;

  const query: DirectoryQuery = {
    q: first(params.q)?.slice(0, 120),
    city: first(params.city)?.slice(0, 80),
    province: asProvinceCode(first(params.province) ?? ""),
    virtual: first(params.virtual) === "true",
    acceptsPatients: first(params.acceptsPatients) === "true",
    page: Math.max(1, Number.parseInt(first(params.page) ?? "1", 10) || 1),
  };

  const page = await searchPractitioners(query);
  const startItem = (page.page - 1) * page.pageSize + 1;
  const endItem = Math.min(page.total, page.page * page.pageSize);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Find an Osteopath" }]}
        eyebrow="Public Directory"
        title="Find a registered manual osteopath"
        description="Search by practitioner name, city or province. Every registered manual osteopath (RMO) listed in the official register can be verified here."
      />

      <section aria-labelledby="results-heading" className="bg-canvas py-12 lg:py-16">
        <Container>
          <SampleDataNotice />
          <div className="mt-6">
            <DirectorySearch query={query} />
          </div>

          {/* Results */}
          <div id="results" className="mt-10 scroll-mt-24">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2
                id="results-heading"
                className="font-display text-xl font-semibold text-navy-900"
              >
                {page.total === 0
                  ? "No matching practitioners"
                  : `Showing ${startItem}–${endItem} of ${page.total} practitioners`}
              </h2>
              <p className="text-sm text-muted" role="status">
                {page.total === 0
                  ? "Try broadening your search."
                  : `Page ${page.page} of ${page.totalPages}`}
              </p>
            </div>

            {page.total === 0 ? (
              <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-navy-200 bg-white px-6 py-16 text-center">
                <span
                  aria-hidden
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-400"
                >
                  <SearchX className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  No practitioners match your search
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  Check the spelling of the name or city, remove a filter, or
                  browse the full demonstration directory.
                </p>
                <LinkButton href="/directory" variant="secondary" className="mt-6">
                  Clear search &amp; show all
                </LinkButton>
              </div>
            ) : (
              <>
                <ul className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {page.results.map((p) => (
                    <li key={p.id}>
                      <PractitionerCard practitioner={p} />
                    </li>
                  ))}
                </ul>
                <Pagination
                  page={page.page}
                  totalPages={page.totalPages}
                  query={query}
                />
              </>
            )}
          </div>

          <p className="mt-12 text-center text-xs leading-relaxed text-muted">
            Practitioners use the title Registered Manual Osteopath (RMO). To
            verify a registration or report a concern, contact the college at{" "}
            <a
              href="mailto:info@manualosteopaths.org"
              className="rounded-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              info@manualosteopaths.org
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
