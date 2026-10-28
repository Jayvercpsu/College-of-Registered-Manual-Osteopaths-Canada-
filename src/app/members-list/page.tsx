import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { SampleDataNotice } from "@/components/directory/sample-data-notice";
import { CtaBanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Members List",
  description:
    "Find a registered manual osteopath in the CRMO public members list, and learn how to verify a practitioner's Registered Manual Osteopath (RMO) title.",
  alternates: { canonical: "/members-list" },
};

const VERIFY_STEPS = [
  {
    icon: Search,
    title: "Search the directory",
    body: "Search the public directory by practitioner name, city or province.",
  },
  {
    icon: BadgeCheck,
    title: "Confirm the RMO title",
    body: "Members in good standing use the protected title Registered Manual Osteopath (RMO).",
  },
  {
    icon: UserCheck,
    title: "Contact the college",
    body: "If you cannot find a practitioner or need registration status confirmed, contact CRMO directly.",
  },
];

export default function MembersListPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Members List" }]}
        eyebrow="Public Register"
        title="Find a registered manual osteopath"
        description="The CRMO members list helps the public and third-party payers confirm that a practitioner holds the protected Registered Manual Osteopath (RMO) title."
      />

      <section className="bg-white py-16 lg:py-20" aria-label="About the members list">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="The Members List"
              title="A public record of registered manual osteopaths"
              description="CRMO registers manual osteopaths who provide manual osteopathic care on Indigenous Peoples lands across Canada."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Members in good standing use the protected title Registered
                Manual Osteopath (RMO). The title confirms that the practitioner
                is a qualified manual osteopath who has met the college&rsquo;s
                registration requirements.
              </p>
              <p>
                The searchable directory is the fastest way to find a
                practitioner by name, city or province. Each listing is designed
                to help patients and insurers confirm who they are dealing with.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/directory" size="lg">
                Search the members list
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg">
                Verify with CRMO
              </LinkButton>
            </div>
          </div>

          <div className="space-y-5">
            <SampleDataNotice />
            <div className="rounded-2xl border border-navy-100 bg-canvas p-6">
              <h2 className="font-display text-lg font-semibold text-navy-900">
                Why the register matters
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <ShieldCheck
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-700"
                    strokeWidth={2.2}
                    aria-hidden
                  />
                  It helps protect the public from people who are not qualified
                  to be known as registered manual osteopaths.
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <BadgeCheck
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-700"
                    strokeWidth={2.2}
                    aria-hidden
                  />
                  It gives patients and insurers a way to confirm the RMO title.
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <UserCheck
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-700"
                    strokeWidth={2.2}
                    aria-hidden
                  />
                  It supports receipts and insurance claims that reference a
                  member&rsquo;s CRMO membership and registration details.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-label="How to verify a practitioner">
        <Container>
          <SectionHeading
            eyebrow="Verification"
            title="How to verify a practitioner"
            description="A few simple steps help you confirm that a manual osteopath is registered with CRMO."
            align="center"
            className="[&>p]:mx-auto"
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {VERIFY_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <step.icon
                    className="h-5 w-5 text-navy-400"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-label="Members and listing updates">
        <Container className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-canvas p-7">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Are you a manual osteopath?
            </h2>
            <p className="mt-2 leading-relaxed text-muted">
              Learn about membership, the RMO title and the college&rsquo;s
              registration requirements.
            </p>
            <Link
              href="/membership"
              className="mt-5 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
            >
              Explore membership
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </Link>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-canvas p-7">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Need to update your listing?
            </h2>
            <p className="mt-2 leading-relaxed text-muted">
              Contact the college if your professional details need correction
              or if you have a question about the public register.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
            >
              Contact CRMO
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Search the public members list"
        description="Find a registered manual osteopath near you, or contact the college if you need help verifying a practitioner."
      />
    </>
  );
}
