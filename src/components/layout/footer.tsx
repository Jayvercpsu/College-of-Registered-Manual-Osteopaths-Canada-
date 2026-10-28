import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";
import { LogoMark } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-white">
                  {SITE.shortName}
                </p>
                <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-navy-300">
                  Registered Manual Osteopaths
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              {SITE.description}
            </p>
            <address className="mt-6 space-y-2.5 text-sm not-italic text-navy-200">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden />
                <span>
                  {SITE.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-teal-300" aria-hidden />
                <a href={SITE.contact.phoneHref} className="rounded-sm hover:text-white">
                  {SITE.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-teal-300" aria-hidden />
                <a href={`mailto:${SITE.contact.email}`} className="rounded-sm hover:text-white">
                  {SITE.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FOOTER_NAV.map((group) => (
              <div key={group.heading}>
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="rounded-sm text-sm text-navy-200 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Honesty note — part of CRMO's public identity */}
        <p className="mt-12 rounded-xl border border-navy-800 bg-navy-900/60 px-5 py-4 text-xs leading-relaxed text-navy-300">
          {SITE.regulatorNote}
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-navy-800 pt-7 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="rounded-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="rounded-sm hover:text-white">
              Accessibility
            </Link>
            <span>Website redesign proposal for review</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
