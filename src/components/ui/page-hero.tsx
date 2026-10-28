import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./container";
import type { ReactNode } from "react";

/**
 * Consistent inner-page header: breadcrumb + serif title + lede,
 * on the soft navy gradient band used across the site.
 */
export function PageHero({
  breadcrumb,
  title,
  description,
  eyebrow,
  children,
}: {
  breadcrumb: { label: string; href?: string }[];
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative overflow-hidden border-b border-navy-100 bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 26rem at 100% -40%, rgb(36 122 120 / 0.09), transparent 60%), radial-gradient(40rem 22rem at -10% 110%, rgb(22 50 79 / 0.06), transparent 55%)",
        }}
      />
      <Container className="relative py-12 lg:py-18">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            {breadcrumb.map((item, index) => (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <ChevronRight className="h-3.5 w-3.5 text-navy-300" aria-hidden />
                ) : null}
                {item.href && index < breadcrumb.length - 1 ? (
                  <Link
                    href={item.href}
                    className="rounded-sm font-medium transition-colors hover:text-navy-900"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={index === breadcrumb.length - 1 ? "page" : undefined}
                    className="font-medium text-navy-800"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow ? <p className="eyebrow mt-7">{eyebrow}</p> : null}
        <h1
          id="page-heading"
          className="mt-3 max-w-3xl font-display text-4xl font-semibold text-balance text-navy-900 sm:text-5xl"
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
