import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the College of Registered Manual Osteopaths (Canada) handles personal information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

/**
 * NOTE FOR HANDOVER: this policy covers website data practices for the
 * redesigned site. CRMO's legal counsel should review and approve the final
 * text (PIPEDA alignment) before launch. Marked sections summarize intended
 * practice rather than asserting completed legal review.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        eyebrow="Policies"
        title="Privacy Policy"
        description={`How ${SITE.shortName} collects, uses and protects personal information submitted through this website.`}
      />

      <section className="bg-white py-14 lg:py-16">
        <Container>
          <div className="prose-crmo mx-auto max-w-3xl">
            <p className="rounded-xl border border-ochre-200 bg-ochre-100 px-5 py-4 text-sm text-ochre-700">
              <strong>Handover note:</strong> this policy reflects the data
              practices implemented in this website build. It requires review
              and approval by CRMO (including PIPEDA considerations and any
              applicable provincial privacy law) before the site launches.
            </p>

            <h2>Information we collect</h2>
            <p>When you use the contact form, we collect:</p>
            <ul>
              <li>Your name and email address, so we can respond to you.</li>
              <li>The topic you select, so your inquiry reaches the right person.</li>
              <li>The content of your message.</li>
            </ul>
            <p>
              Beyond form submissions, this website does not require accounts,
              does not use advertising trackers, and does not sell personal
              information.
            </p>

            <h2>How information is used</h2>
            <ul>
              <li>To respond to your inquiry.</li>
              <li>To verify practitioner registration status when requested.</li>
              <li>To process membership application requests.</li>
            </ul>

            <h2>Public directory data</h2>
            <p>
              The practitioner directory displays only professional information
              that members have authorized for public publication. During this
              preview phase all directory records are clearly labelled
              demonstration data. When the verified register goes live, records
              will display only registry-approved professional details — never
              private member information.
            </p>

            <h2>Data retention and security</h2>
            <p>
              Form submissions are transmitted over HTTPS. Once the email
              delivery service is connected, retention periods and storage
              locations will be documented here and aligned with CRMO policy.
              Access to submissions is limited to personnel who need it to
              respond.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              This website currently sets no tracking or analytics cookies. If
              privacy-respecting analytics are added later, this section will
              describe what is collected and how to opt out.
            </p>

            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal
              information you have submitted, subject to legal retention
              requirements. Contact the college using the details below.
            </p>

            <h2>Contact</h2>
            <p>
              {SITE.legalName}
              <br />
              {SITE.contact.addressLines[0]}
              <br />
              {SITE.contact.addressLines[1]}
              <br />
              Telephone: <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>
              <br />
              Email: <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </p>

            <h2>Changes to this policy</h2>
            <p>
              Updates to this policy will be published on this page with a
              revised date. Significant changes will be announced on the
              Resources page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
