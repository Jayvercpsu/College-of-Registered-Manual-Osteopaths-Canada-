import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { LogoMark } from "@/components/layout/logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-canvas py-20 lg:py-28">
      <Container className="flex flex-col items-center text-center">
        <LogoMark className="h-16 w-16" />
        <p className="mt-8 font-display text-6xl font-bold text-navy-200 sm:text-7xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-balance text-navy-900 sm:text-4xl">
          This page has moved or no longer exists
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          The redesigned website has a new structure. The page you were looking
          for may now live under one of the sections below.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/" size="lg" variant="secondary">
            <Compass className="h-4.5 w-4.5" strokeWidth={2.4} aria-hidden />
            Return home
          </LinkButton>
          <LinkButton href="/directory" size="lg">
            <Search className="h-4.5 w-4.5" strokeWidth={2.4} aria-hidden />
            Search the directory
          </LinkButton>
        </div>

        <nav aria-label="Helpful links" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-teal-700">
            <li><Link href="/about" className="rounded-sm hover:text-teal-800">About CRMO</Link></li>
            <li><Link href="/membership" className="rounded-sm hover:text-teal-800">Membership</Link></li>
            <li><Link href="/resources" className="rounded-sm hover:text-teal-800">Resources</Link></li>
            <li><Link href="/contact" className="rounded-sm hover:text-teal-800">Contact</Link></li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
