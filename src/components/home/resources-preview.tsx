import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { RESOURCES } from "@/data/resources";

export function ResourcesPreview() {
  const featured = RESOURCES.slice(0, 3);

  return (
    <section aria-labelledby="resources-heading" className="bg-canvas py-16 lg:py-24 reveal-on-scroll">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Education & Resources"
            title="Guidance for members and the public"
            description="Published CRMO guidelines and professional policies — covering ethics, informed consent, proper use of title and continuing education."
            className="animate-fade-in-up"
          />
          <Link
            href="/resources"
            className="inline-flex shrink-0 items-center gap-2 rounded-md font-semibold text-teal-700 transition-colors hover:text-teal-800 animate-fade-in-up delay-1"
          >
            View all resources
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3 reveal-stagger" role="list">
          {featured.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="card-hover-elevate block h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700"
                  >
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <Badge tone="muted">{item.category}</Badge>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                  Read the guidance
                  <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
