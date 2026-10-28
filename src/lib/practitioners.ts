import { SAMPLE_PRACTITIONERS } from "@/data/practitioners";
import type {
  DirectoryPage,
  DirectoryQuery,
  Practitioner,
  ProvinceCode,
} from "@/types/practitioner";

/**
 * Directory data-access layer.
 *
 * Today every function reads the in-repo demonstration dataset. To move to
 * production, re-implement `listPractitioners` (and the query helpers below)
 * as Drizzle queries against the verified CRMO registry database, or proxy an
 * official registry API here. Components depend only on the returned types,
 * so the swap is confined to this module.
 */

const PAGE_SIZE = 6;

/** Normalizes free text for forgiving, case- and diacritic-insensitive search. */
function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Returns the full demonstration dataset.
 * Production: `SELECT ... FROM practitioners WHERE ...` via Drizzle.
 */
export async function listPractitioners(): Promise<Practitioner[]> {
  return SAMPLE_PRACTITIONERS;
}

/**
 * Applies the directory query (name, city, province, toggles) to the dataset.
 * Kept pure and synchronous over a provided list so it is trivially testable
 * and maps 1:1 onto SQL WHERE clauses later.
 */
export function filterPractitioners(
  all: Practitioner[],
  query: DirectoryQuery,
): Practitioner[] {
  const q = normalize(query.q ?? "");
  const city = normalize(query.city ?? "");

  return all.filter((p) => {
    if (q) {
      const haystack = normalize(
        [p.name, p.credentials.join(" "), p.clinicName ?? ""].join(" "),
      );
      if (!haystack.includes(q)) return false;
    }

    if (city) {
      if (!normalize(p.city).includes(city)) return false;
    }

    if (query.province && p.province !== query.province) return false;
    if (query.virtual && !p.offersVirtualCare) return false;
    if (query.acceptsPatients && !p.acceptingNewPatients) return false;

    return true;
  });
}

/** Filters + paginates the directory for a given query. */
export async function searchPractitioners(
  query: DirectoryQuery,
): Promise<DirectoryPage> {
  const all = await listPractitioners();
  const filtered = filterPractitioners(all, query);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(Math.max(1, query.page ?? 1), totalPages);
  const start = (page - 1) * PAGE_SIZE;

  return {
    results: filtered.slice(start, start + PAGE_SIZE),
    total,
    page,
    totalPages,
    pageSize: PAGE_SIZE,
  };
}

/** Looks up one practitioner by slug (used by profile pages). */
export async function getPractitionerBySlug(
  slug: string,
): Promise<Practitioner | undefined> {
  const all = await listPractitioners();
  return all.find((p) => p.slug === slug);
}

/** Distinct cities present in the dataset — used for search hints. */
export async function listCities(): Promise<string[]> {
  const all = await listPractitioners();
  return Array.from(new Set(all.map((p) => p.city))).sort();
}

/** Type guard for the province filter select. */
export function asProvinceCode(value: string): ProvinceCode | "" {
  const valid: ProvinceCode[] = [
    "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT",
  ];
  return (valid as string[]).includes(value) ? (value as ProvinceCode) : "";
}
