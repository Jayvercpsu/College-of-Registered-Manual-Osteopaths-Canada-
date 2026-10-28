import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildQuery, cn } from "@/lib/utils";
import type { DirectoryQuery } from "@/types/practitioner";

/**
 * Server-rendered pagination that preserves all active filters in page URLs.
 * Links are real anchors: keyboard accessible and shareable.
 */
export function Pagination({
  page,
  totalPages,
  query,
}: {
  page: number;
  totalPages: number;
  query: DirectoryQuery;
}) {
  if (totalPages <= 1) return null;

  const hrefFor = (target: number) =>
    `/directory${buildQuery({
      q: query.q,
      city: query.city,
      province: query.province,
      virtual: query.virtual ? "true" : undefined,
      acceptsPatients: query.acceptsPatients ? "true" : undefined,
      page: target,
    })}#results`;

  /* Compact window of up to 5 page numbers around the current page. */
  const window = 2;
  const start = Math.max(1, Math.min(page - window, totalPages - window * 2));
  const end = Math.min(totalPages, start + window * 2);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const navClasses =
    "inline-flex h-10 items-center gap-1.5 rounded-lg border border-navy-200 bg-white px-3.5 text-sm font-semibold text-navy-800 transition-colors hover:border-teal-400 hover:bg-teal-50 aria-disabled:pointer-events-none aria-disabled:opacity-40";

  return (
    <nav aria-label="Directory pagination" className="mt-10 flex items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} className={navClasses} aria-label="Go to previous page">
          <ChevronLeft className="h-4 w-4" strokeWidth={2.4} aria-hidden />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <span className={navClasses} aria-disabled="true">
          <ChevronLeft className="h-4 w-4" strokeWidth={2.4} aria-hidden />
          <span className="hidden sm:inline">Previous</span>
        </span>
      )}

      <ol className="flex items-center gap-1.5">
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={hrefFor(p)}
              aria-label={`Go to page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition-colors",
                p === page
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-navy-200 bg-white text-navy-800 hover:border-teal-400 hover:bg-teal-50",
              )}
            >
              {p}
            </Link>
          </li>
        ))}
      </ol>

      {page < totalPages ? (
        <Link href={hrefFor(page + 1)} className={navClasses} aria-label="Go to next page">
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
        </Link>
      ) : (
        <span className={navClasses} aria-disabled="true">
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
        </span>
      )}
    </nav>
  );
}
