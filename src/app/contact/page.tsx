import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the College of Registered Manual Osteopaths (Canada) — questions about membership, the public register, guidelines, or verifying a manual osteopath's registration status.",
  alternates: { canonical: "/contact" },
};

const CONTACT_CARDS = [
  {
    icon: MapPin,
    label: "Mailing address",
    lines: SITE.contact.addressLines,
  },
  {
    icon: Phone,
    label: "Telephone",
    lines: [SITE.contact.phone],
    href: SITE.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    lines: [SITE.contact.email],
    href: `mailto:${SITE.contact.email}`,
  },
];

const LEADERSHIP_GROUPS = [
  {
    heading: "Council of Elders",
    roles: [
      {
        role: "Chair",
        name: "Hereditary Chief Delbert Good (Si’m o Gyet Yobx)",
      },
      { role: "Board Member", name: "Hereditary Chief Kym Guno-Good" },
      { role: "Board Member", name: "Hereditary Chief Arthur Morgan" },
      { role: "Indigenous Peoples Public Member", name: "Alysia Good" },
      { role: "Indigenous Peoples Public Member", name: "Ruby Morgan" },
    ],
  },
  {
    heading: "Executive",
    roles: [
      {
        role: "President",
        name: "Amber Bellis, DOMP, DN, DO (Spain), PhD, RMO",
      },
      {
        role: "Registrar",
        name: "Dasha Veprjitska, DOMP, BSc (Ost), MBA, DO (Spain), DN",
      },
      { role: "Legal Counsel", name: "Dr. Mateen Pourgol, JD" },
      {
        role: "Director of Insurance Relations",
        name: "Judy Tanko, DOMP, RMO",
      },
      {
        role: "Indigenous Relations Chair",
        name: "Amber Bellis, DOMP, DN, DO (Spain), PhD, RMO",
      },
      {
        role: "Executive Committee Chair",
        name: "Dr. Doug Devlin, DOM, BSc (Ost), MBA, MSc, DO, PhD",
      },
    ],
  },
  {
    heading: "Committees",
    roles: [
      {
        role: "Registration Committee Chair",
        name: "Daniel Fow, DOMP, RMO",
      },
      {
        role: "Fitness to Practice Chair",
        name: "Melanie Price, RMT, DOMP, RMO",
      },
      {
        role: "Quality Assurance Chair",
        name: "Janet Maendel, BSc (Ost), DOMP, RMO",
      },
      {
        role: "Patient Relations Committee",
        name: "Cherise Jacques, CST-T, DOMP, RMO",
      },
      {
        role: "Discipline Committee Chair",
        name: "Dan Renaud, BPE, RMT, DOMP, PhD, RMO",
      },
      {
        role: "Inquiries, Complaints & Reports Committee Chair",
        name: "Ali Haghighi, DOMP, BSc (Ost), DO (EU), RMO",
      },
    ],
  },
  {
    heading: "Board Members",
    roles: [
      {
        role: "Board Member",
        name: "Angela Waller, BSc. HK, CSEP-CPT, DOMP, RMO",
      },
      { role: "Board Member", name: "Korena Carballo, DOMP, RMO" },
      {
        role: "Board Member",
        name: "Teresa Nieman, BSc., TCMP, R.Ac, DOMP, RMO",
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Get in touch with CRMO"
        description="Questions about membership, the public register or professional guidelines — the college is happy to help."
      />

      <section className="bg-canvas py-14 lg:py-20" aria-label="Contact options and form">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Verified contact channels */}
          <div className="space-y-5">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
                >
                  <card.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy-900">
                    {card.label}
                  </h2>
                  {card.lines.map((line) =>
                    card.href ? (
                      <a
                        key={line}
                        href={card.href}
                        className="mt-1 block rounded-sm font-medium text-teal-700 hover:text-teal-800"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="mt-1 text-muted">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700"
              >
                <Clock3 className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Response times
                </h2>
                <p className="mt-1 leading-relaxed text-muted">
                  The college responds to written inquiries by email. Official
                  office hours will be published here once confirmed by CRMO.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Send a message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Fields marked <span aria-hidden className="text-red-500">*</span> are
              required. This form posts to our secure intake endpoint.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section
        className="bg-white py-14 lg:py-20"
        aria-label="College leadership and committees"
      >
        <Container>
          <SectionHeading
            eyebrow="Governance"
            title="College leadership and committees"
            description="The board, committees and Council of Elders who guide the college's work."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {LEADERSHIP_GROUPS.map((group) => (
              <div
                key={group.heading}
                className="rounded-2xl border border-navy-100 bg-canvas p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-teal-700 shadow-card"
                  >
                    <Users className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    {group.heading}
                  </h2>
                </div>
                <dl className="mt-5 space-y-3 border-t border-navy-100 pt-5">
                  {group.roles.map((person) => (
                    <div key={`${group.heading}-${person.role}-${person.name}`}>
                      <dt className="text-sm font-semibold text-navy-900">
                        {person.name}
                      </dt>
                      <dd className="text-sm text-muted">{person.role}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-muted">
            Roles and names are published as provided by CRMO. Contact the
            college if any details need correction.
          </p>
        </Container>
      </section>
    </>
  );
}
