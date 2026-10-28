import { ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

/**
 * Reusable closing call-to-action band — used on the homepage and inner pages.
 */
export function CtaBanner({
  title = "Ready to take the next step?",
  description = "Whether you are looking for a registered manual osteopath or considering membership, CRMO is here to help.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-canvas pb-16 lg:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 via-teal-800 to-navy-900 px-6 py-14 text-center sm:px-12 lg:px-20">
          {/* Decorative arcs echoing the mark */}
          <svg
            aria-hidden
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 opacity-[0.12]"
          >
            <circle cx="200" cy="200" r="180" fill="none" stroke="#fff" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#fff" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 opacity-[0.12]"
          >
            <circle cx="200" cy="200" r="180" fill="none" stroke="#fff" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#fff" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" strokeWidth="1.5" />
          </svg>

          <h2
            id="cta-heading"
            className="relative mx-auto max-w-2xl font-display text-3xl font-semibold text-balance text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-teal-100">
            {description}
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href="/directory" variant="inverse" size="lg">
              <Search className="h-4.5 w-4.5" strokeWidth={2.4} aria-hidden />
              Find an Osteopath
            </LinkButton>
            <LinkButton
              href="/membership"
              size="lg"
              className="border border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              Become a Member
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
