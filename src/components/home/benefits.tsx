import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { MEMBERSHIP_BENEFITS } from "@/data/benefits";

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="bg-canvas py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Membership"
            title="What CRMO membership offers"
            description="Registration with CRMO connects qualified manual osteopaths to a protected professional title, insurer recognition and structured professional standards."
          />
          <LinkButton href="/membership" variant="secondary" className="shrink-0">
            Explore Membership
          </LinkButton>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERSHIP_BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="card-lift rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
            >
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
              >
                <benefit.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {benefit.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
