import Image from "next/image";
import { ArrowRight, BadgeCheck, Landmark, Search, ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { SITE } from "@/data/site";

/**
 * Homepage hero: verified organizational positioning — no medical claims,
 * no invented statistics.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-canvas"
    >
      {/* Soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70rem 40rem at 85% -10%, rgb(36 122 120 / 0.10), transparent 55%), radial-gradient(50rem 30rem at -10% 20%, rgb(22 50 79 / 0.07), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pt-14 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pt-24 lg:pb-28">
        {/* Copy */}
        <div>
          <p className="eyebrow">The College of Registered Manual Osteopaths</p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl leading-[1.12] font-semibold text-balance text-navy-900 sm:text-5xl lg:text-[3.4rem]"
          >
            A national register for{" "}
            <span className="relative whitespace-nowrap text-teal-700">
              professional
              <svg
                aria-hidden
                viewBox="0 0 220 10"
                className="absolute -bottom-1 left-0 w-full text-ochre-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c55-6 161-6 216-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            manual osteopathy in Canada
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {SITE.legalName} is a national nonprofit Indigenous organization
            registering qualified manual osteopaths — protecting the right of
            the public to safe, ethical manual osteopathic care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/directory" size="lg">
              <Search className="h-4.5 w-4.5" strokeWidth={2.4} aria-hidden />
              Find a Registered Osteopath
            </LinkButton>
            <LinkButton href="/membership" variant="outline" size="lg">
              Become a Member
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </LinkButton>
          </div>

          {/* Verified trust signals */}
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-navy-800">
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-teal-600" strokeWidth={2.2} aria-hidden />
              Protected RMO professional title
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="h-4.5 w-4.5 text-teal-600" strokeWidth={2.2} aria-hidden />
              Indigenous-led, registered nonprofit
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-teal-600" strokeWidth={2.2} aria-hidden />
              Recognized by major Canadian insurers
            </li>
          </ul>
        </div>

        {/* Imagery */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-5 -right-5 hidden h-full w-full rounded-3xl border-2 border-teal-200 lg:block"
          />
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/hero-treatment.jpeg"
              alt="A manual osteopath assessing a patient's neck and shoulder during a clinical treatment"
              width={1920}
              height={1280}
              priority
              sizes="(min-width: 1024px) 44rem, 100vw"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          {/* Floating verification card — sample UI pattern */}
          <figure className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl border border-navy-100 bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <BadgeCheck className="h-5 w-5" strokeWidth={2.2} aria-hidden />
            </span>
            <figcaption className="text-sm">
              <span className="block font-semibold text-navy-900">
                Registered Manual Osteopath
              </span>
              <span className="block text-muted">
                Verifiable in the public directory
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
