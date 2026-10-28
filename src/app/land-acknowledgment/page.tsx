import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Landmark } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Land Acknowledgment",
  description:
    "CRMO's land acknowledgment recognizing the ancestral lands of the Wendat, the Haudenosaunee, and the Anishinaabe peoples, and the college's commitment to reconciliation.",
  alternates: { canonical: "/land-acknowledgment" },
};

export default function LandAcknowledgmentPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Land Acknowledgment" },
        ]}
        eyebrow="Reconciliation"
        title="Land Acknowledgment"
        description="The office of the College of Registered Manual Osteopaths (Canada) is located on the ancestral lands of the Wendat, the Haudenosaunee, and the Anishinaabe peoples."
      />

      <section className="bg-white py-16 lg:py-20" aria-label="CRMO land acknowledgment">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-ochre-200 bg-ochre-100 p-7 sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full border-[1.5rem] border-white/30"
            />
            <div className="relative">
              <p className="eyebrow">At CRMO</p>
              <blockquote className="mt-5 max-w-4xl font-display text-2xl leading-relaxed text-navy-900 sm:text-3xl">
                The office of College of Registered Manual Osteopaths (Canada)
                is located on the ancestral lands of the Wendat, the
                Haudenosaunee, and the Anishinaabe peoples, who have left their
                footprints on Mother Earth before us. We respectfully
                acknowledge those who have walked on it, those who walk on it
                now, and future generations who have yet to walk upon it. We
                wish to express gratitude to Mother Earth and for the resources
                we are using, and honour all the Indigenous people who have been
                living on this land since time immemorial.
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-label="Understanding land acknowledgements">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              eyebrow="Understanding"
              title="What is a land acknowledgement and why do we do it?"
            />
            <div className="mt-8 flex gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700"
              >
                <HeartHandshake className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="text-sm leading-relaxed font-medium text-navy-800">
                Land acknowledgements mark a small and important step in the
                process of reconciliation and building a positive relationship
                with Indigenous peoples.
              </p>
            </div>
            <Link
              href="/council-of-elders"
              className="mt-6 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800"
            >
              Meet the Council of Elders
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </Link>
          </div>

          <div className="prose-crmo">
            <p>
              A territorial or land acknowledgement involves making a statement
              recognizing the traditional territory of the Indigenous peoples
              such as First Nations, Métis and Inuit, who called the land home
              before the arrival of European settlers, and in many cases still
              do call it home.
            </p>
            <p>
              Indigenous peoples have been acknowledging the land at the start
              of gatherings, ceremonies and events for time immemorial.
              Recently more non-Indigenous people are becoming aware of its
              importance. Providing a land acknowledgement at the beginning of
              an event or meeting gives time for reflection and demonstrates
              recognition of Indigenous lands, treaties and peoples. It involves
              thinking about what happened in the past and what changes can be
              made going forward in order to further the reconciliation
              process.
            </p>
            <p>
              Land acknowledgements mark a small and important step in the
              process of reconciliation and building a positive relationship
              with Indigenous peoples. By making a land acknowledgement you are
              taking part in an act of reconciliation, honouring the land and
              Indigenous presence which dates back over 10,000 years.
            </p>
            <p>
              Using and participating in a land acknowledgement is a way to
              recognize the enduring presence and resilience of Indigenous
              peoples in this area for time immemorial. They are also a reminder
              that we are all accountable to these relationships.
            </p>
            <p>
              At College of Registered Manual Osteopaths (Canada) we recommend
              registered manual osteopaths post a land acknowledgement statement
              on their websites.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 lg:pb-24" aria-label="Learn more about CRMO">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 via-teal-800 to-navy-900 px-6 py-12 text-center sm:px-12">
            <svg
              aria-hidden
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 opacity-[0.12]"
            >
              <circle cx="200" cy="200" r="180" fill="none" stroke="#fff" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#fff" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" strokeWidth="1.5" />
            </svg>
            <Landmark
              className="relative mx-auto h-9 w-9 text-teal-200"
              strokeWidth={1.8}
              aria-hidden
            />
            <h2 className="relative mx-auto mt-5 max-w-2xl font-display text-2xl font-semibold text-balance text-white sm:text-3xl">
              Learn more about CRMO&rsquo;s Indigenous-led governance
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl leading-relaxed text-teal-100">
              Discover the Council of Elders and the college&rsquo;s commitment
              to Indigenous knowledge, cultural heritage and reconciliation.
            </p>
            <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/council-of-elders" variant="inverse">
                Council of Elders
              </LinkButton>
              <LinkButton
                href="/about"
                className="border border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                About CRMO
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
