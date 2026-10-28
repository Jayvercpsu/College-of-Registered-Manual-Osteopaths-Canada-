import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { CtaBanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Council of Elders",
  description:
    "Meet the CRMO Council of Elders — Indigenous hereditary chiefs and community leaders providing cultural guidance, wisdom and leadership to the college.",
  alternates: { canonical: "/council-of-elders" },
};

const COUNCIL_MEMBERS = [
  {
    name: "Hereditary Chief Delbert Good (Si’m o Gyet Yobx)",
    role: "Chair",
    note: "Wii Gyet Clan House, Gitxsan Nation",
  },
  {
    name: "Hereditary Chief Kym Guno-Good",
    role: "Member",
  },
  {
    name: "Hereditary Chief Arthur Morgan",
    role: "Member",
  },
  {
    name: "Clan Member Alysia Good",
    role: "Member",
  },
  {
    name: "Clan Member Ruby Morgan",
    role: "Member",
  },
];

export default function CouncilOfEldersPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Council of Elders" },
        ]}
        eyebrow="Indigenous Leadership"
        title="Council of Elders"
        description="Distinguished Indigenous hereditary chiefs and community leaders providing cultural guidance, wisdom and leadership to CRMO."
      />

      <section className="bg-white py-16 lg:py-20" aria-label="About the Council of Elders">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Guidance & Wisdom"
              title="Indigenous leadership at the heart of the college"
              description="The Council helps ensure that Indigenous perspectives, traditions and values are respected and represented within CRMO."
            />
            <div className="mt-8 rounded-2xl border border-ochre-200 bg-ochre-100 p-6">
              <p className="font-display text-lg font-semibold text-navy-900">
                Indigenous knowledge, cultural heritage and traditional
                leadership shape respectful relationships with Indigenous
                communities.
              </p>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              The College of Registered Manual Osteopaths (Canada) is honoured
              to have distinguished Indigenous hereditary chiefs and community
              leaders serving on its Council of Elders.
            </p>
            <p>
              The Council of Elders provides cultural guidance, wisdom,
              leadership, and advice to CRMO and its members, helping ensure
              that the perspectives, traditions, and values of Indigenous
              Peoples, including First Nations, Métis, and Inuit communities,
              are respected and represented within the College.
            </p>
            <p>
              The Council plays an important role in strengthening relationships
              between CRMO and Indigenous communities while promoting cultural
              understanding, mutual respect, and Indigenous participation in the
              advancement of manual osteopathy across Canada.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-label="Chair of the Council of Elders">
        <Container>
          <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
              <span
                aria-hidden
                className="flex h-24 w-24 items-center justify-center rounded-2xl bg-ochre-100 text-ochre-700"
              >
                <Landmark className="h-10 w-10" strokeWidth={1.8} />
              </span>
              <div>
                <p className="eyebrow">Chair of the CRMO Council of Elders</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                  Hereditary Chief Delbert Good
                  <span className="mt-1 block text-lg font-medium text-navy-600">
                    (Si’m o Gyet Yobx)
                  </span>
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Hereditary Chief Delbert Good (Si’m o Gyet Yobx), of the Wii
                  Gyet Clan House of the Gitxsan Nation in British Columbia,
                  serves as Chair of the CRMO Council of Elders. Chief Good
                  represents a distinguished hereditary leadership tradition that
                  has been passed down through his family for approximately
                  1,000 years, making it one of the longest-standing hereditary
                  leadership lineages in North America. His leadership brings
                  valuable traditional knowledge, cultural perspectives, and
                  generations of Indigenous wisdom to the College.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-label="Members of the Council of Elders">
        <Container>
          <SectionHeading
            eyebrow="The Council"
            title="Members of the Council of Elders"
            description="The Council consists of respected Indigenous hereditary chiefs and community representatives."
            align="center"
            className="[&>p]:mx-auto"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COUNCIL_MEMBERS.map((member) => (
              <li
                key={member.name}
                className="card-lift rounded-2xl border border-navy-100 bg-canvas p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-card"
                  >
                    <Users className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <Badge tone={member.role === "Chair" ? "ochre" : "muted"}>
                    {member.role}
                  </Badge>
                </div>
                <h3 className="mt-5 font-display text-lg leading-snug font-semibold text-navy-900">
                  {member.name}
                </h3>
                {member.note ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {member.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-label="Contact the Council of Elders">
        <Container>
          <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow">Council Contact</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
                  Contact the Chair
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Hereditary Chief Delbert Good (Si’m o Gyet Yobx)
                  <br />
                  Chair, CRMO Council of Elders
                  <br />
                  Hereditary Chief, Wii Gyet Clan House, Gitxsan Nation
                </p>
                <a
                  href="mailto:dale.good@hotmail.com"
                  className={buttonClasses({ className: "mt-6" })}
                >
                  <Mail className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                  Email the Chair
                </a>
              </div>

              <address className="grid gap-5 not-italic sm:grid-cols-2">
                <div className="flex gap-3 rounded-2xl bg-canvas p-5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-navy-500 uppercase">
                      Mailing address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">
                      P.O. Box 335
                      <br />
                      Kitwanga, British Columbia
                      <br />
                      Canada V0J 2A0
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl bg-canvas p-5">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-navy-500 uppercase">
                      Telephone
                    </p>
                    <a
                      href="tel:+12508495772"
                      className="mt-1 block rounded-sm text-sm font-medium text-teal-700 hover:text-teal-800"
                    >
                      250-849-5772
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl bg-canvas p-5 sm:col-span-2">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-navy-500 uppercase">
                      Email
                    </p>
                    <a
                      href="mailto:dale.good@hotmail.com"
                      className="mt-1 block rounded-sm text-sm font-medium text-teal-700 hover:text-teal-800"
                    >
                      dale.good@hotmail.com
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-label="Honouring Indigenous leadership">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Reconciliation"
            title="Honouring Indigenous leadership and traditions"
            description="The college is committed to fostering meaningful Indigenous participation and preserving cultural traditions."
          />
          <div className="prose-crmo">
            <p>
              CRMO recognizes the importance of Indigenous knowledge, cultural
              heritage, and traditional leadership in shaping respectful
              relationships with Indigenous communities. Through its Council of
              Elders, CRMO is committed to fostering meaningful Indigenous
              participation, preserving cultural traditions, and promoting
              collaboration between Indigenous leaders and the manual
              osteopathic profession.
            </p>
            <p>
              CRMO is deeply grateful to the hereditary chiefs and community
              representatives who generously contribute their time, wisdom, and
              leadership to our Council of Elders.
            </p>
            <p>
              <Link href="/land-acknowledgment">
                Read CRMO&rsquo;s Land Acknowledgment
              </Link>{" "}
              or{" "}
              <Link href="/about">learn more about the college</Link>.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="A college guided by Indigenous leadership"
        description="Join a national, Indigenous-led college committed to safe, ethical manual osteopathic care."
      />
    </>
  );
}
