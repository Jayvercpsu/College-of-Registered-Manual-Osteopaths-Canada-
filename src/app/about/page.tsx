import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Landmark, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/home/cta-banner";
import { SITE, SITE_DISCLOSURES } from "@/data/site";

export const metadata: Metadata = {
  title: "About CRMO",
  description:
    "Learn about the College of Registered Manual Osteopaths (Canada) — a national nonprofit Indigenous organization, founded in 2019, registering manual osteopaths and protecting the public's right to safe, ethical manual osteopathic care.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    icon: Landmark,
    title: "Indigenous-led governance",
    body: "CRMO employees, management and board members are all Indigenous peoples — First Nations, Métis and Inuit — either through ancestry or by adoption.",
  },
  {
    icon: ShieldCheck,
    title: "Public protection",
    body: "CRMO registers and supervises its members so the public's right to safe and ethical manual osteopathic care is protected.",
  },
  {
    icon: Users,
    title: "Professional identity",
    body: "Members are awarded the protected title Registered Manual Osteopath (RMO), confirming they have met the college's registration requirements.",
  },
  {
    icon: CalendarDays,
    title: "Heritage stewardship",
    body: "CRMO considers manual osteopathy part of Indigenous Peoples' heritage and works to protect the profession from unqualified practice.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About CRMO" }]}
        eyebrow="About the College"
        title="A national, Indigenous-led home for professional manual osteopathy"
        description={SITE.mission}
      />

      {/* Story */}
      <section aria-labelledby="story-heading" className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Registered in 2019, serving the public across Canada"
            />
            <div className="prose-crmo mt-5">
              <p>
                The College of Registered Manual Osteopaths (Canada), based in
                Thornhill, Ontario, was registered as a national nonprofit
                Indigenous organization on June 27, 2019.
              </p>
              <p>
                CRMO registers and supervises its members practising on the
                treaty and territorial lands of Indigenous Peoples, ensuring the
                public&rsquo;s right to safe and ethical manual osteopathic care
                is protected. Members in good standing are awarded the title of
                Registered Manual Osteopath (RMO).
              </p>
              <p>
                The title of RMO assures the public that a practitioner is a
                qualified manual osteopath who has met the requirements of
                registration. It also gives insurers and patients a clear,
                verifiable standard: every RMO can be confirmed against the
                college&rsquo;s public register.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5">
              <p className="text-sm leading-relaxed font-medium text-teal-900">
                {SITE.regulatorNote}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/hero-treatment.jpeg"
                alt="A manual osteopath palpating a patient's shoulder during a clinical assessment"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 hidden h-full w-full rounded-3xl border-2 border-ochre-200 lg:block"
            />
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section aria-labelledby="pillars-heading" className="bg-canvas py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Commitments"
            title="What guides the college"
            align="center"
            className="[&>p]:mx-auto"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <li
                key={pillar.title}
                className="card-lift rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
                >
                  <pillar.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Standards summary */}
      <section aria-labelledby="standards-summary" className="bg-white py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Standards & Ethics"
              title="Published standards every member follows"
              description="CRMO maintains clear, public expectations for professional conduct. These commitments are referenced throughout the member guidelines."
            />
            <Link
              href="/resources"
              className="mt-7 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
            >
              Read the guidelines in Resources
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {SITE_DISCLOSURES.standards.map((standard) => (
              <li
                key={standard.title}
                className="rounded-2xl border border-navy-100 bg-canvas p-6"
              >
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {standard.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {standard.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        title="Practise with a protected professional title"
        description="Join a national, Indigenous-led college committed to safe, ethical manual osteopathic care."
      />
    </>
  );
}
