import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ScrollText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Osteopathy",
  description:
    "Manual osteopathy's roots in Indigenous medicine and bodywork, the legacy of Dr Andrew Taylor Still, and the protected Registered Manual Osteopath (RMO) title.",
  alternates: { canonical: "/osteopathy" },
};

const PROTECTIONS = [
  {
    icon: BadgeCheck,
    title: "A protected title",
    body: "CRMO ensures only qualified health professionals are eligible to be granted the title of RMO — Registered Manual Osteopath.",
  },
  {
    icon: ShieldCheck,
    title: "Public protection",
    body: `CRMO registers and supervises manual osteopaths practising on treaty and territorial lands of Indigenous Peoples across Canada.`,
  },
  {
    icon: ScrollText,
    title: "Ethical practice",
    body: "All RMOs must adhere to the codes of ethics established by CRMO, which hold that the paramount purpose of professional services is to benefit the client.",
  },
];

export default function OsteopathyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Osteopathy" }]}
        eyebrow="The Profession"
        title="Manual osteopathy, rooted in Indigenous healing traditions"
        description="Manual osteopathy has roots in traditional Indigenous medicine, bodywork and healing arts — a heritage CRMO is committed to honouring and protecting."
      />

      <section className="bg-white py-16 lg:py-20" aria-label="Origins of manual osteopathy">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Origins"
              title="A practice with deep Indigenous roots"
              description="Osteopathy's founding story is intertwined with the bodywork and medicine of Native American peoples."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Manual osteopathy has roots in traditional Indigenous medicine,
                bodywork and healing arts.{" "}
                <strong className="font-semibold text-ink">
                  Dr Andrew Taylor Still
                </strong>
                , MD, DO, founder of osteopathy, lived on Shawnee Tribe
                reservation land for a decade and was introduced to Shawnee and
                Cherokee bodywork.
              </p>
              <p>
                Osteopathic techniques introduced by Dr Still — such as
                osteoarticular techniques and soft tissue therapy — as well as
                techniques introduced later by other osteopaths, such as cranial
                osteopathy (from which craniosacral therapy originated) and
                visceral (organ) manipulation, have origins in Native American
                bodywork and medicine.
              </p>
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-ochre-500 bg-ochre-100 p-6">
              <p className="font-display text-xl font-semibold text-navy-900">
                We consider manual osteopathy a part of Indigenous Peoples
                heritage.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ochre-700">
                We aim to protect the profession and the public from those who
                are not qualified to be known as registered manual osteopaths.
              </p>
            </blockquote>

            <Link
              href="/council-of-elders"
              className="mt-7 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
            >
              Meet the Council of Elders
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </Link>
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
              className="absolute -right-6 -bottom-6 hidden h-full w-full rounded-3xl border-2 border-ochre-200 lg:block"
            />
          </div>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-label="The Registered Manual Osteopath title">
        <Container>
          <SectionHeading
            eyebrow="The RMO Title"
            title="Protecting the profession and the public"
            description="The Registered Manual Osteopath title is a public signal that a practitioner is qualified and accountable to the college."
            align="center"
            className="[&>p]:mx-auto"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {PROTECTIONS.map((item) => (
              <li
                key={item.title}
                className="card-lift rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
                >
                  <item.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-teal-200 bg-teal-50 px-6 py-5 text-center text-sm leading-relaxed font-medium text-teal-900">
            Manual osteopaths are also known as osteopathic manual
            practitioners, osteopathic manual therapists or ostéopathe. All RMOs
            are accountable to the college&rsquo;s standards and Code of Ethics.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Find a registered manual osteopath"
        description="Search the CRMO directory by practitioner name, city or province, or learn how to join the college."
      />
    </>
  );
}
