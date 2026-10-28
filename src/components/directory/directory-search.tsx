import Link from "next/link";
import { RotateCcw, Search } from "lucide-react";
import { PROVINCE_NAMES, type DirectoryQuery } from "@/types/practitioner";
import { cn } from "@/lib/utils";

/**
 * Directory search & filter panel.
 *
 * Implemented as a progressively-enhanced GET form: it works fully without
 * client JavaScript and keeps every search state shareable via the URL
 * (/directory?q=&city=&province=...). Accessible labels are explicit and
 * inputs keep their values from the current query.
 */
export function DirectorySearch({ query }: { query: DirectoryQuery }) {
  const hasFilters = Boolean(
    query.q || query.city || query.province || query.virtual || query.acceptsPatients,
  );

  const inputClasses =
    "h-11 w-full rounded-lg border border-navy-200 bg-white px-3.5 text-sm text-ink shadow-[0_1px_2px_rgb(22_50_79/0.05)] outline-none transition-colors placeholder:text-muted hover:border-navy-300 focus-visible:border-teal-500";
  const labelClasses = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-700";

  return (
    <form
      id="search"
      action="/directory"
      method="get"
      role="search"
      aria-label="Search registered manual osteopaths"
      className="scroll-mt-24 rounded-2xl border border-navy-100 bg-white p-5 shadow-card sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr]">
        <div>
          <label htmlFor="dir-q" className={labelClasses}>
            Practitioner name
          </label>
          <input
            id="dir-q"
            type="search"
            name="q"
            defaultValue={query.q ?? ""}
            placeholder="e.g. Beaulieu"
            className={inputClasses}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="dir-city" className={labelClasses}>
            City or location
          </label>
          <input
            id="dir-city"
            type="search"
            name="city"
            defaultValue={query.city ?? ""}
            placeholder="e.g. Toronto"
            className={inputClasses}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="dir-province" className={labelClasses}>
            Province / Territory
          </label>
          <select
            id="dir-province"
            name="province"
            defaultValue={query.province ?? ""}
            className={cn(inputClasses, "pr-8")}
          >
            <option value="">All provinces</option>
            {Object.entries(PROVINCE_NAMES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
        <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm font-medium text-ink">
          <input
            type="checkbox"
            name="virtual"
            value="true"
            defaultChecked={query.virtual}
            className="h-4.5 w-4.5 rounded border-navy-300 text-teal-600 accent-teal-600"
          />
          Offers virtual care
        </label>
        <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm font-medium text-ink">
          <input
            type="checkbox"
            name="acceptsPatients"
            value="true"
            defaultChecked={query.acceptsPatients}
            className="h-4.5 w-4.5 rounded border-navy-300 text-teal-600 accent-teal-600"
          />
          Accepting new patients
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-navy-100 pt-5">
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          <Search className="h-4 w-4" strokeWidth={2.4} aria-hidden />
          Search directory
        </button>
        {hasFilters ? (
          <Link
            href="/directory"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
          >
            <RotateCcw className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            Reset filters
          </Link>
        ) : null}
        <p aria-hidden className="ml-auto hidden text-xs text-muted lg:block">
          Sample records only
        </p>
      </div>
    </form>
  );
}
