import type { Metadata } from "next";
import {
  Gavel,
  Mail,
  MapPin,
  Megaphone,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton, buttonClasses } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Reporting",
  description:
    "How the public and third-party payers can report malpractice, unethical or unauthorized behaviour by a registered manual osteopath to CRMO.",
  alternates: { canonical: "/reporting" },
};

const REPORTABLE_CONCERNS = [
  {
    icon: ShieldAlert,
    title: "Malpractice",
    body: "Concerns about the professional care a registered manual osteopath has provided.",
  },
  {
    icon: Scale,
    title: "Unethical behaviour",
    body: "Conduct that conflicts with the CRMO Code of Ethics.",
  },
  {
    icon: Gavel,
    title: "Unauthorized behaviour",
    body: "Behaviour that falls outside a practitioner's professional authority or registration.",
  },
];

const PROCESS = [
  {
    icon: Mail,
    title: "Submit a report",
    body: "Send your concern to CRMO by mail or email. Reports may come from the public or from third-party payers such as extended health plan insurers.",
  },
  {
    icon: Gavel,
    title: "Investigation",
    body: "CRMO's disciplinary board investigates every claim.",
  },
  {
    icon: Megaphone,
    title: "Public outcome",
    body: "Reports of disciplinary action are made public.",
  },
];

export default function ReportingPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Reporting" }]}
        eyebrow="Public Protection"
        title="Report a concern about a registered manual osteopath"
        description="CRMO takes every report seriously. The public and third-party payers can report malpractice, unethical or unauthorized behaviour for investigation."
      />

      <section className="bg-white py-16 lg:py-20" aria-label="Reporting a concern">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Reporting a Concern"
              title="What can be reported"
              description="Registered manual osteopaths are accountable to the college and to the public they serve."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                College of Registered Manual Osteopaths (Canada) registers
                manual osteopaths who provide manual osteopathic care on
                Indigenous Peoples lands across Canada. These manual osteopaths
                — also known as osteopathic manual practitioners, osteopathic
                manual therapists or ostéopathe — are issued the protected title
                of RMO (Registered Manual Osteopath). All RMOs must adhere to
                the codes of ethics established by CRMO.
              </p>
              <p>
                Public and third party payers such as extended health plan
                insurers who wish to report a registered manual osteopath to
                CRMO for malpractice, unethical or unauthorized behavior should
                do so either through mail or email.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {REPORTABLE_CONCERNS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-navy-100 bg-canvas p-5"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-teal-700 shadow-card"
                  >
                    <item.icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>

            <LinkButton
              href="/resources#code-of-ethics"
              variant="outline"
              className="mt-8"
            >
              Read the CRMO Code of Ethics
            </LinkButton>
          </div>

          <aside className="rounded-2xl border border-navy-100 bg-canvas p-7 shadow-card lg:sticky lg:top-40">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Report by mail or email
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Send your concern directly to the college. CRMO&rsquo;s
              disciplinary board investigates every claim.
            </p>

            <div className="mt-6 space-y-5 border-t border-navy-100 pt-6">
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-700"
                  strokeWidth={2.2}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-navy-500 uppercase">
                    By mail
                  </p>
                  <address className="mt-1 text-sm leading-relaxed not-italic text-ink">
                    {SITE.legalName}
                    <br />
                    {SITE.contact.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail
                  className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-700"
                  strokeWidth={2.2}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-navy-500 uppercase">
                    By email
                  </p>
                  <a
                    href={`mailto:${SITE.contact.email}?subject=Report%20to%20CRMO`}
                    className="mt-1 block rounded-sm font-medium text-teal-700 hover:text-teal-800"
                  >
                    {SITE.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${SITE.contact.email}?subject=Report%20to%20CRMO`}
              className={buttonClasses({ className: "mt-6 w-full" })}
            >
              <Mail className="h-4 w-4" strokeWidth={2.4} aria-hidden />
              Email a report
            </a>
          </aside>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-label="The reporting process">
        <Container>
          <SectionHeading
            eyebrow="What Happens Next"
            title="Every report is investigated"
            description="CRMO's disciplinary board reviews and investigates claims about registered manual osteopaths."
            align="center"
            className="[&>p]:mx-auto"
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {PROCESS.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
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

          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
              strokeWidth={2.2}
              aria-hidden
            />
            <p className="text-sm leading-relaxed font-medium text-teal-900">
              Reports of disciplinary action are made public. This transparency
              helps patients, insurers and the profession understand how CRMO
              upholds its standards.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 lg:pb-24" aria-label="Contact CRMO about reporting">
        <Container>
          <div className="rounded-3xl border border-navy-100 bg-canvas p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              Questions about the reporting process?
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">
              Contact the college if you are unsure how to submit a concern or
              need help directing your report to the right person.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/contact">Contact CRMO</LinkButton>
              <LinkButton href="/resources" variant="outline">
                Browse guidelines
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
