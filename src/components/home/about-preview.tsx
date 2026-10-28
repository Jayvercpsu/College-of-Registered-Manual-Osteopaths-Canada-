import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE, SITE_DISCLOSURES } from "@/data/site";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-heading" className="bg-white py-16 lg:py-24 reveal-on-scroll">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image composition */}
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-card animate-scale-in">
            <Image
              src="/images/about-consult.jpeg"
              alt="A practitioner discussing treatment options with a patient in a bright clinic"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="aspect-[4/3] w-full object-cover image-hover-scale"
            />
          </div>
          <div className="absolute -bottom-7 right-4 hidden w-64 rounded-2xl border border-navy-100 bg-white p-5 shadow-lift sm:block lg:-right-6 animate-fade-in-up delay-3">
            <p className="font-display text-3xl font-semibold text-teal-700">2019</p>
            <p className="mt-1 text-sm leading-snug text-muted">
              Registered June 27, 2019 as a national nonprofit Indigenous
              organization
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About CRMO"
            title="An Indigenous-led college protecting the public and the profession"
            className="animate-fade-in-up"
          />
          <p className="mt-5 leading-relaxed text-muted animate-fade-in-up delay-1">
            Based in {SITE.location}, {SITE.legalName} registers and
            supervises manual osteopaths practising on the treaty and
            territorial lands of Indigenous Peoples. CRMO considers manual
            osteopathy part of Indigenous Peoples&rsquo; heritage — and it is
            committed to protecting both the public and qualified
            professionals.
          </p>
          <ul className="mt-7 space-y-3.5 reveal-stagger" role="list">
            {SITE_DISCLOSURES.about.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800 animate-fade-in-up delay-5"
          >
            Learn more about CRMO
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
