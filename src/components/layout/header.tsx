"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { PRIMARY_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

/**
 * Sticky site header with an accessible mobile menu:
 *  - aria-expanded / aria-controls on the toggle
 *  - Escape closes the menu and returns focus to the toggle
 *  - menu closes automatically on route change
 *  - keyboard-focusable links with visible focus rings (global styles)
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(
    () => typeof window !== "undefined" && window.scrollY > 8,
  );
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pendingScrollTop = useRef(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  /**
   * Every header navigation click should land at the top of the destination
   * page. This also covers clicking the link for the page already open, which
   * does not trigger a Next.js route change. Modified clicks (new tab/window)
   * are left alone.
   */
  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      closeMenu();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const currentPath = pathname.replace(/\/+$/, "") || "/";
      const targetPath =
        event.currentTarget.pathname.replace(/\/+$/, "") || "/";
      if (targetPath !== currentPath) {
        pendingScrollTop.current = true;
      }
    },
    [closeMenu, pathname],
  );

  /*
   * Close the mobile menu whenever the route changes — done during render
   * (React's "adjusting state from previous renders" pattern) to avoid
   * effect-driven cascading renders.
   */
  const [seenPathname, setSeenPathname] = useState(pathname);
  if (seenPathname !== pathname) {
    setSeenPathname(pathname);
    if (open) setOpen(false);
  }

  /* Escape key support + focus return. */
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  /* Shadow appears once the page scrolls (external-system subscription). */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Prevent body scroll while the mobile panel is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Guarantee a top-of-page start after a header navigation completes. */
  useEffect(() => {
    if (!pendingScrollTop.current) return;
    pendingScrollTop.current = false;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const isActive = (href: string) => {
    let targetPath = href;
    if (href.startsWith("http")) {
      try {
        targetPath = new URL(href).pathname;
      } catch {
        return false;
      }
    }
    targetPath = targetPath.replace(/\/+$/, "") || "/";
    return targetPath === "/"
      ? pathname === "/"
      : pathname === targetPath || pathname.startsWith(`${targetPath}/`);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar — verified contact details */}
      <div className="hidden bg-navy-900 text-navy-100 lg:block">
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-between px-5 text-xs sm:px-8">
          <p className="font-medium tracking-wide">
            A national nonprofit Indigenous organization — registering manual
            osteopaths across Canada since {SITE.foundedYear}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={SITE.contact.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-sm hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
              {SITE.contact.phone}
            </a>
            <a
              href={`mailto:${SITE.contact.email}`}
              className="inline-flex items-center gap-1.5 rounded-sm hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
              {SITE.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-navy-100/80 bg-white/95 backdrop-blur-md transition-shadow",
          scrolled && "shadow-[0_8px_30px_-16px_rgb(22_50_79/0.35)]",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            aria-label={`${SITE.legalName} — home`}
            className="rounded-md"
            onClick={handleNavClick}
          >
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={handleNavClick}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm font-semibold tracking-tight whitespace-nowrap transition-colors",
                  isActive(item.href)
                    ? "text-teal-700"
                    : "text-ink hover:bg-navy-50 hover:text-navy-900",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "mx-auto mt-0.5 block h-0.5 rounded-full bg-teal-600 transition-all duration-300",
                    isActive(item.href) ? "w-4/5" : "w-0",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/membership"
              onClick={handleNavClick}
              className="hidden h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-[0.925rem] font-semibold tracking-tight whitespace-nowrap text-white shadow-[0_1px_2px_rgb(22_50_79/0.16),inset_0_1px_0_rgb(255_255_255/0.12)] transition-colors select-none hover:bg-teal-700 active:bg-teal-800 sm:inline-flex"
            >
              Become a Member
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </Link>

            {/* Mobile menu toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy-100 bg-white text-navy-800 transition-colors hover:bg-navy-50 xl:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation panel */}
        <div
          id={menuId}
          ref={panelRef}
          hidden={!open}
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-navy-100 bg-white lg:max-h-[calc(100dvh-6.75rem)] xl:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto w-full max-w-6xl space-y-1 px-5 py-4 sm:px-8"
          >
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={handleNavClick}
                className={cn(
                  "flex items-center justify-between rounded-lg px-4 py-3 text-[0.975rem] font-semibold",
                  isActive(item.href)
                    ? "bg-teal-50 text-teal-800"
                    : "text-ink hover:bg-navy-50",
                )}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden />
                ) : null}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/membership"
                onClick={handleNavClick}
                className="flex h-12 items-center justify-center gap-2 rounded-lg bg-teal-600 text-base font-semibold text-white hover:bg-teal-700"
              >
                Become a Member
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
              </Link>
            </div>
            <div className="flex flex-col gap-2 border-t border-navy-100 pt-4 pb-2 text-sm text-muted">
              <a
                href={SITE.contact.phoneHref}
                className="inline-flex items-center gap-2 hover:text-navy-900"
              >
                <Phone className="h-4 w-4" aria-hidden /> {SITE.contact.phone}
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-navy-900"
              >
                <Mail className="h-4 w-4" aria-hidden /> {SITE.contact.email}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
