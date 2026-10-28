/**
 * Practitioner record model for the public member directory.
 *
 * The directory currently reads from a typed in-repo mock dataset
 * (`src/data/practitioners.ts`). Every field below was chosen so the same
 * shape can later be served from PostgreSQL (Drizzle) or an official CRMO
 * registry API without changing the UI components.
 */

export interface Practitioner {
  /** Stable unique identifier (slug-safe) */
  id: string;
  /** URL slug used for /practitioners/[slug] profile pages */
  slug: string;
  /** Display name of the practitioner */
  name: string;
  /** Post-nominal credentials, e.g. "DOMP, RMO" — must come from verified registry data */
  credentials: string[];
  /** City of practice */
  city: string;
  /** Canadian province / territory code, e.g. "ON" */
  province: ProvinceCode;
  /** Short professional summary shown on cards */
  summary: string;
  /** Longer biography shown on the profile page */
  bio: string;
  /** Areas of practice focus (labels only — no medical claims) */
  practiceAreas: string[];
  /** Languages spoken in practice */
  languages: string[];
  /** Whether the practitioner is accepting new patients */
  acceptingNewPatients: boolean;
  /** Whether virtual (online) appointments are offered */
  offersVirtualCare: boolean;
  /** Public clinic name, when published */
  clinicName?: string;
  /**
   * Public professional contact details. Only data the registry has
   * authorized for publication may appear here.
   */
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
  /**
   * Flags every mock record so it is impossible to mistake demonstration
   * data for a verified registry entry. Verified production records will
   * carry `source: "registry"` plus an official registration number.
   */
  source: "sample" | "registry";
}

export type ProvinceCode =
  | "AB"
  | "BC"
  | "MB"
  | "NB"
  | "NL"
  | "NS"
  | "NT"
  | "NU"
  | "ON"
  | "PE"
  | "QC"
  | "SK"
  | "YT";

export const PROVINCE_NAMES: Record<ProvinceCode, string> = {
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NS: "Nova Scotia",
  NT: "Northwest Territories",
  NU: "Nunavut",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Quebec",
  SK: "Saskatchewan",
  YT: "Yukon",
};

/** Query parameters accepted by the directory search UI. */
export interface DirectoryQuery {
  q?: string;
  city?: string;
  province?: ProvinceCode | "";
  virtual?: boolean;
  acceptsPatients?: boolean;
  page?: number;
}

export interface DirectoryPage {
  results: Practitioner[];
  total: number;
  page: number;
  totalPages: number;
  pageSize: number;
}
