import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CalendarCheck2,
  FlaskConical,
  Languages,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { InitialsAvatar } from "@/components/ui/initials-avatar";
import { SampleDataNotice } from "@/components/directory/sample-data-notice";
import { getPractitionerBySlug, listPractitioners } from "@/lib/practitioners";
import { PROVINCE_NAMES } from "@/types/practitioner";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render all sample profiles at build time. */
export async function generateStaticParams() {
  const all = await listPractitioners();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const practitioner = await getPractitionerBySlug(slug);
  if (!practitioner) {
    return { title: "Practitioner not found" };
  }
  return {
    title: `${practitioner.name} — Sample Practitioner Profile`,
    description: `Demonstration profile page for the CRMO public directory. Sample record: ${practitioner.city}, ${PROVINCE_NAMES[practitioner.province]}.`,
    alternates: { canonical: `/practitioners/${practitioner.slug}` },
  };
}

export default async function PractitionerProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const p = await getPractitionerBySlug(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Find an Osteopath", href: "/directory" },
          { label: p.name },
        ]}
        eyebrow="Directory Profile"
        title={p.name}
        description={p.credentials.join(" · ")}
      />

      <section className="bg-canvas py-12 lg:py-16" aria-label="Practitioner details">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            {/* Main column */}
            <div className="space-y-6">
              <SampleDataNotice />

              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
                <div className="flex flex-wrap items-center gap-5">
                  <InitialsAvatar name={p.name} size="xl" />
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-navy-900">
                      {p.name}
                    </h2>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-teal-600" aria-hidden />
                        {p.city}, {PROVINCE_NAMES[p.province]}
                      </span>
                      {p.clinicName ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="h-4 w-4 text-teal-600" aria-hidden />
                          {p.clinicName}
                        </span>
                      ) : null}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.source === "sample" ? (
                        <Badge tone="sample">
                          <FlaskConical className="h-3 w-3" aria-hidden />
                          Demonstration record
                        </Badge>
                      ) : (
                        <Badge tone="teal">
                          <ShieldCheck className="h-3 w-3" aria-hidden />
                          Registration verified
                        </Badge>
                      )}
                      {p.acceptingNewPatients ? (
                        <Badge tone="teal">
                          <CalendarCheck2 className="h-3 w-3" aria-hidden />
                          Accepting new patients
                        </Badge>
                      ) : (
                        <Badge tone="muted">Waitlist</Badge>
                      )}
                      {p.offersVirtualCare ? (
                        <Badge tone="navy">
                          <MonitorSmartphone className="h-3 w-3" aria-hidden />
                          Virtual care available
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 font-display text-lg font-semibold text-navy-900">
                  About
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{p.bio}</p>

                <h3 className="mt-7 font-display text-lg font-semibold text-navy-900">
                  Areas of practice
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.practiceAreas.map((area) => (
                    <li key={area}>
                      <Badge tone="navy" className="!px-3 !py-1 !text-[0.8rem]">
                        {area}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-7 font-display text-lg font-semibold text-navy-900">
                  Languages
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <Languages className="h-4 w-4 text-teal-600" aria-hidden />
                  {p.languages.join(", ")}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Contact
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  Public professional contact details are published only when
                  authorized by the member.
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {p.contact?.email ? (
                    <li className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 shrink-0 text-teal-600" aria-hidden />
                      <span className="break-all text-muted">{p.contact.email}</span>
                    </li>
                  ) : null}
                  {p.contact?.phone ? (
                    <li className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 shrink-0 text-teal-600" aria-hidden />
                      <span className="text-muted">{p.contact.phone}</span>
                    </li>
                  ) : null}
                  {!p.contact?.email && !p.contact?.phone ? (
                    <li className="rounded-lg bg-canvas px-4 py-3 text-xs leading-relaxed text-muted">
                      No public contact details on this sample record. Real
                      profiles can display an authorized clinic phone, email or
                      website.
                    </li>
                  ) : null}
                </ul>
              </div>

              <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-teal-900">
                  <BadgeCheck className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  Verify registration
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-teal-900/80">
                  To confirm the registration status of any manual osteopath,
                  contact the college at{" "}
                  <a
                    href="mailto:info@manualosteopaths.org"
                    className="rounded-sm font-semibold underline underline-offset-2"
                  >
                    info@manualosteopaths.org
                  </a>{" "}
                  or call (905) 597-5897.
                </p>
              </div>

              <Link
                href="/directory"
                className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                Back to directory
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
