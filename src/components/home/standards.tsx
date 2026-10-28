import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_DISCLOSURES } from "@/data/site";

/**
 * Professional standards — all four commitment blocks are verified CRMO
 * policies (title, continuing education, ethics, informed consent).
 */
export function Standards() {
  return (
    <section aria-labelledby="standards-heading" className="bg-navy-900 py-16 lg:py-24 reveal-on-scroll">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow !text-teal-300 animate-fade-in-up">Professional Standards</p>
          <h2
            id="standards-heading"
            className="mt-3 font-display text-3xl font-semibold text-balance text-white sm:text-4xl animate-fade-in-up delay-1"
          >
            Standards that put public trust first
          </h2>
          <p className="mt-4 leading-relaxed text-navy-200 animate-fade-in-up delay-2">
            Every registered manual osteopath commits to published standards that
            govern professional titles, ethics, consent and ongoing education.
          </p>

          <div className="relative mt-9 hidden overflow-hidden rounded-2xl lg:block animate-scale-in delay-3">
            <Image
              src="/images/standards-shoulder.jpeg"
              alt="A manual osteopath assessing a patient's shoulder joints"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="aspect-[16/10] w-full object-cover opacity-90 image-hover-scale"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"
            />
          </div>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 reveal-stagger" role="list">
          {SITE_DISCLOSURES.standards.map((standard, index) => (
            <li
              key={standard.title}
              className="card-hover-elevate rounded-2xl border border-navy-700/70 bg-navy-800/60 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600/20 text-teal-300"
                >
                  <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2.2} />
                </span>
                <span className="font-display text-sm font-semibold text-ochre-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {standard.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">
                {standard.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
