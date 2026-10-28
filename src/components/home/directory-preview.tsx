import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { PractitionerCard } from "@/components/directory/practitioner-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { listPractitioners } from "@/lib/practitioners";

/**
 * Directory teaser: a real, working search entry point (GET → /directory)
 * plus a small set of sample practitioner cards.
 */
export async function DirectoryPreview() {
  const all = await listPractitioners();
  const featured = all.slice(0, 3);

  return (
    <section
      aria-labelledby="directory-preview-heading"
      className="bg-white py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Public Directory"
          title="Find a registered manual osteopath near you"
          description="Search the public CRMO directory by name or location. Directory entries shown during this preview are demonstration records."
        />

        {/* Search entry — progressive enhancement: a plain GET form, no JS required */}
        <form
          action="/directory"
          method="get"
          role="search"
          aria-label="Search the practitioner directory"
          className="mx-auto mt-10 grid max-w-3xl gap-3 rounded-2xl border border-navy-100 bg-white p-3 shadow-card sm:grid-cols-[1fr_1fr_auto]"
        >
          <label className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-canvas px-4">
            <Search className="h-4.5 w-4.5 shrink-0 text-muted" aria-hidden />
            <span className="sr-only">Practitioner name</span>
            <input
              type="search"
              name="q"
              placeholder="Practitioner name"
              className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            />
          </label>
          <label className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-canvas px-4">
            <MapPin className="h-4.5 w-4.5 shrink-0 text-muted" aria-hidden />
            <span className="sr-only">City or location</span>
            <input
              type="search"
              name="city"
              placeholder="City or location"
              className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            <Search className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            Search
          </button>
        </form>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <li key={p.id}>
              <PractitionerCard practitioner={p} />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
          >
            Browse the complete directory
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
