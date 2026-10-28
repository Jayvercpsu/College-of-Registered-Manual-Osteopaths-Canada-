import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowRight, Building2, Mail } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { MEMBERSHIP_BENEFITS } from "@/data/benefits";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "CRMO membership: the protected RMO title, recognition by major Canadian extended health insurers, structured continuing education and professional guidelines for registered manual osteopaths.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Membership" }]}
        eyebrow="Membership"
        title="Join a national register your patients and insurers can verify"
        description="CRMO membership awards qualified practitioners the protected title of Registered Manual Osteopath (RMO) and connects them to a national, Indigenous-led professional body."
      />

      {/* Benefits */}
      <section aria-labelledby="benefits-heading" className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Membership benefits"
            description="Each benefit below is grounded in CRMO's published announcements and policies."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERSHIP_BENEFITS.map((benefit) => (
              <li
                key={benefit.title}
                className="card-lift rounded-2xl border border-navy-100 bg-canvas p-6"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-card"
                >
                  <benefit.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {benefit.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Insurer recognition */}
      <section aria-labelledby="insurers-heading" className="bg-canvas py-16 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Insurer Recognition"
              title="Accepted by major Canadian extended health insurers"
              description="CRMO has publicly announced that members in good standing are recognized for manual osteopathic care reimbursement by leading Canadian insurers, including:"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Patients should always confirm coverage details directly with
              their extended health plan provider.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SITE.insurers.map((insurer) => (
              <li
                key={insurer}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 shadow-card"
              >
                <Building2 className="h-5 w-5 shrink-0 text-teal-600" strokeWidth={2} aria-hidden />
                <span className="font-semibold text-navy-900">{insurer}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How to apply — honest placeholder */}
      <section aria-labelledby="apply-heading" className="bg-white py-16 lg:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-navy-100">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="bg-navy-900 p-8 sm:p-12">
                <p className="eyebrow !text-teal-300">How to Apply</p>
                <h2
                  id="apply-heading"
                  className="mt-3 font-display text-3xl font-semibold text-balance text-white"
                >
                  Become a Registered Manual Osteopath
                </h2>
                <p className="mt-4 leading-relaxed text-navy-200">
                  Registration is open to qualified manual osteopaths who meet
                  CRMO&rsquo;s requirements, uphold its Code of Ethics and commit
                  to continuing education.
                </p>
                <div className="mt-8">
                  <LinkButton href="/contact" variant="inverse" size="lg">
                    <Mail className="h-4.5 w-4.5" strokeWidth={2.4} aria-hidden />
                    Request application details
                  </LinkButton>
                </div>
              </div>
              <div className="bg-canvas p-8 sm:p-12">
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  Application process
                </h3>
                <ol className="mt-5 space-y-4">
                  {[
                    "Contact CRMO to request the current application package and eligibility criteria.",
                    "Submit your application with supporting education and practice documentation.",
                    "The college reviews qualifications against registration requirements.",
                    "Approved members are awarded the RMO title and listed in the public directory.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span
                        aria-hidden
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 font-display text-sm font-bold text-white"
                      >
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-muted">{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 flex gap-3 rounded-xl border border-ochre-200 bg-ochre-100 p-4">
                  <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ochre-700" aria-hidden />
                  <p className="text-xs leading-relaxed text-ochre-700">
                    <strong className="font-semibold">Placeholder notice:</strong>{" "}
                    detailed eligibility criteria, fees and the application form
                    will be confirmed with CRMO before launch. This sequence
                    reflects the organization&rsquo;s published registration model and
                    is pending official approval.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            Questions about membership?{" "}
            <Link
              href="/contact"
              className="rounded-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Contact the college
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden />
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
