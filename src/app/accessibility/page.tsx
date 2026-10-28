import type { Metadata } from "next";
import { Accessibility as AccessibilityIcon, Keyboard, MonitorSmartphone, Volume2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "CRMO's commitment to an accessible website: WCAG 2.1 AA targets, keyboard navigation, screen reader support and how to report accessibility barriers.",
  alternates: { canonical: "/accessibility" },
};

const COMMITMENTS = [
  {
    icon: Keyboard,
    title: "Keyboard navigation",
    body: "Every page can be navigated without a mouse: skip link, visible focus indicators, accessible menus and logical tab order.",
  },
  {
    icon: Volume2,
    title: "Screen reader support",
    body: "Semantic HTML landmarks, labelled form controls, status announcements and descriptive alternative text support assistive technology.",
  },
  {
    icon: MonitorSmartphone,
    title: "Readable on every device",
    body: "Responsive layouts, sufficient color contrast (WCAG AA targets) and support for reduced-motion preferences across the site.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
        eyebrow="Accessibility"
        title="An accessible website for everyone"
        description="CRMO aims for this website to meet WCAG 2.1 Level AA — the standard expected of public-facing healthcare organizations in Canada."
      />

      <section className="bg-white py-14 lg:py-16">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {COMMITMENTS.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-navy-100 bg-canvas p-6"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-card"
                >
                  <item.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="prose-crmo mx-auto mt-14 max-w-3xl">
            <h2>Our accessibility practices</h2>
            <ul>
              <li>Semantic HTML with a single, ordered heading hierarchy per page.</li>
              <li>All form fields have explicit labels and inline error messaging announced to screen readers.</li>
              <li>Focus is always visible, with a consistent high-contrast focus ring.</li>
              <li>Images carry descriptive alternative text; purely decorative graphics are hidden from assistive technology.</li>
              <li>Motion and transitions respect the <code>prefers-reduced-motion</code> setting.</li>
              <li>Color is never the only way information is conveyed.</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              We are not aware of accessibility barriers in this preview build.
              Third-party content added later (such as embedded documents or
              maps) will be reviewed against the same standard before launch.
            </p>

            <h2>Feedback</h2>
            <p>
              If you encounter a barrier on this website, please tell us so we
              can fix it:
            </p>
            <ul>
              <li>
                Email{" "}
                <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>{" "}
                with the subject line “Website accessibility”.
              </li>
              <li>
                Call <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>.
              </li>
            </ul>
            <p className="flex items-center gap-2 text-sm text-muted">
              <AccessibilityIcon className="h-4 w-4" aria-hidden />
              Accessibility feedback is treated as a priority support request.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
