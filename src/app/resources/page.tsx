import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileDown, Newspaper } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/home/cta-banner";
import { RESOURCES } from "@/data/resources";

export const metadata: Metadata = {
  title: "Education & Resources",
  description:
    "CRMO guidelines and professional policies: Code of Ethics, informed consent, proper usage of title, continuing education requirements and insurer recognition announcements.",
  alternates: { canonical: "/resources" },
};

const GUIDELINES = [
  {
    anchor: "code-of-ethics",
    title: "CRMO Code of Ethics",
    intro:
      "The Code of Ethics acknowledges the profession's responsibilities to the client, the public and the profession itself.",
    points: [
      "The paramount purpose of a registered manual osteopath's professional services is to benefit the client.",
      "RMOs adhere to a commitment to the highest standards of excellence and attend to clients in accordance with established best practices.",
      "All members of the college must adhere to the Code of Ethics as a condition of membership.",
    ],
  },
  {
    anchor: "informed-consent",
    title: "Informed Consent Guideline",
    intro:
      "Every CRMO member is required to ensure clients consent to treatment — and that the consent is meaningful, not assumed.",
    points: [
      "Consent must be fully informed and voluntarily given.",
      "Consent must relate to the client's condition and circumstances.",
      "Consent must never be obtained through fraud or misrepresentation.",
      "Consent must be evidenced in written form signed by the client, or otherwise documented in the client record.",
    ],
  },
  {
    anchor: "usage-of-title",
    title: "Proper Usage of Title",
    intro:
      "Members must follow provincial law regarding what they may call themselves.",
    points: [
      "Only in Quebec are manual osteopaths permitted to use the title \u201Costeopath\u201D; in provinces such as Ontario, the term is reserved for licensed physicians.",
      "CRMO members are not osteopathic physicians and do not provide medical care — they provide manual osteopathic care.",
      "Outside Quebec, any CRMO member using the title \u201Costeopath\u201D commits professional misconduct and faces disciplinary action.",
      "Members everywhere are encouraged to use the title Registered Manual Osteopath (RMO) to avoid confusing the public.",
    ],
  },
  {
    anchor: "continuing-education",
    title: "Continuing Education Requirements",
    intro:
      "Professional knowledge is maintained through structured, recurring education.",
    points: [
      "A minimum of 40 hours of continuing education every two years.",
      "Programs must relate to the clinical practice of osteopathy.",
      "A mandatory course covers insurance fraud prevention, sexual abuse prevention and proper record keeping.",
    ],
  },
  {
    anchor: "scope-of-practice",
    title: "Scope of Practice in Canada",
    intro:
      "Certain authorized health acts fall outside the scope of practice of a registered manual osteopath (RMO).",
    points: [
      "RMOs in Canada are prohibited from performing acts reserved by provincial legislation to other regulated health professions.",
      "Members are expected to know and respect the scope rules of the province or territory in which they practise.",
      "When a client's needs exceed manual osteopathic scope, members refer appropriately.",
    ],
  },
  {
    anchor: "insurer-recognition",
    title: "Insurer Recognition Announcements",
    intro:
      "CRMO has publicly announced recognition from leading Canadian extended health insurers for care delivered by members in good standing.",
    points: [
      "Manulife — the largest extended health plan insurer in Canada — confirmed acceptance of CRMO and requested a public member directory for status verification.",
      "Green Shield Canada announced coverage for care provided by RMOs in good standing.",
      "Pacific Blue Cross, Alberta Blue Cross and Medavie Blue Cross have publicly recognized or accepted billings from CRMO members.",
      "Receipts issued by members reference their CRMO membership, RMO title and registration number so insurers can verify eligibility.",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        eyebrow="Education & Resources"
        title="Guidelines, policies and professional updates"
        description="Published CRMO standards and public announcements — for members, patients and insurers who want to understand how registered manual osteopathy is governed."
      />

      {/* Resource index cards */}
      <section aria-labelledby="index-heading" className="bg-canvas py-14 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Library"
            title="Browse by topic"
            description="Each document below summarizes published CRMO guidance. Full document texts are being migrated and will be available as accessible pages and PDFs."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="card-lift flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700"
                    >
                      <item.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <Badge tone="muted">{item.category}</Badge>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Read summary
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Guideline summaries with stable anchors */}
      <section aria-labelledby="guidelines-heading" className="bg-white py-14 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              eyebrow="Published Guidance"
              title="Member guidelines at a glance"
              description="Plain-language summaries of the standards every registered manual osteopath follows."
            />
            <figure className="mt-8 overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/about-consult.jpeg"
                alt="A practitioner discussing treatment options with a patient in a bright clinic"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
              <FileDown className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Official PDF versions will be linked as document migration is
              completed. See the content migration checklist in the project
              handover documentation.
            </p>
          </div>

          <div className="space-y-6">
            {GUIDELINES.map((guide) => (
              <article
                key={guide.anchor}
                id={guide.anchor}
                className="scroll-mt-32 rounded-2xl border border-navy-100 bg-canvas p-7 sm:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {guide.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink">{guide.intro}</p>
                <ul className="mt-4 space-y-2.5">
                  {guide.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* News note */}
      <section aria-labelledby="news-heading" className="bg-canvas py-14 lg:py-16">
        <Container>
          <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-7 shadow-card sm:p-8">
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700"
            >
              <Newspaper className="h-5.5 w-5.5" strokeWidth={2} />
            </span>
            <div>
              <h2
                id="news-heading"
                className="font-display text-xl font-semibold text-navy-900"
              >
                News & announcements
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                The CRMO news archive — including insurer recognition
                announcements, professional guidance and updates for members and
                the public — is now available on the News page.
              </p>
              <Link
                href="/news"
                className="mt-4 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
              >
                Read the latest updates
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Have a question about professional standards?"
        description="The college answers questions from members, patients and insurers about registration, titles and guidelines."
      />
    </>
  );
}
