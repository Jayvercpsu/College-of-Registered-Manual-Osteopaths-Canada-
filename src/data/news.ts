/**
 * Public CRMO news index. Entries reflect announcements previously published
 * on manualosteopaths.org; where the redesigned site hosts a summary rather
 * than the full original post, the entry links to the matching guidance in
 * Resources. Full-text migration is tracked in docs/CONTENT-MIGRATION.md.
 */

export type NewsCategory = "Insurance" | "Guideline" | "Policy";

export interface NewsItem {
  date: string;
  displayDate: string;
  category: NewsCategory;
  title: string;
  summary: string;
  href: string;
}

/** Newest first. */
export const NEWS: NewsItem[] = [
  {
    date: "2020-11-20",
    displayDate: "November 20, 2020",
    category: "Insurance",
    title: "Green Shield Canada accepts CRMO",
    summary:
      "Green Shield Canada announced coverage for care provided by CRMO members in good standing.",
    href: "/resources#insurer-recognition",
  },
  {
    date: "2020-09-08",
    displayDate: "September 8, 2020",
    category: "Insurance",
    title: "Pacific Blue Cross now accepts CRMO",
    summary:
      "Pacific Blue Cross publicly recognized billings from registered manual osteopaths who are CRMO members in good standing.",
    href: "/resources#insurer-recognition",
  },
  {
    date: "2020-04-24",
    displayDate: "April 24, 2020",
    category: "Insurance",
    title: "Insurance coverage for virtual osteopathic treatments",
    summary:
      "An update on insurance coverage for manual osteopathic treatments delivered virtually (online).",
    href: "/resources#insurer-recognition",
  },
  {
    date: "2020-02-26",
    displayDate: "February 26, 2020",
    category: "Insurance",
    title: "Manulife accepts CRMO",
    summary:
      "Manulife — the largest extended health plan insurer in Canada — confirmed acceptance of CRMO and requested a public member directory for status verification.",
    href: "/resources#insurer-recognition",
  },
  {
    date: "2019-11-21",
    displayDate: "November 21, 2019",
    category: "Guideline",
    title: "Continuing education requirements",
    summary:
      "CRMO published its continuing education requirements: a minimum of 40 hours every two years, including a mandatory course on fraud prevention, abuse prevention and record keeping.",
    href: "/resources#continuing-education",
  },
  {
    date: "2019-10-18",
    displayDate: "October 18, 2019",
    category: "Policy",
    title: "CRMO Code of Ethics",
    summary:
      "CRMO published its Code of Ethics, which holds that the paramount purpose of a registered manual osteopath's professional services is to benefit the client.",
    href: "/resources#code-of-ethics",
  },
  {
    date: "2019-10-15",
    displayDate: "October 15, 2019",
    category: "Guideline",
    title: "CRMO Informed Consent Guideline",
    summary:
      "Consent must be fully informed, voluntarily given, specific to the client's condition and documented in writing.",
    href: "/resources#informed-consent",
  },
  {
    date: "2019-10-15",
    displayDate: "October 15, 2019",
    category: "Guideline",
    title: "Issuing paid-in-full receipts",
    summary:
      "Guidance for members on receipts that reference their CRMO membership, RMO title and registration number so insurers can verify eligibility.",
    href: "/resources#insurer-recognition",
  },
  {
    date: "2019-10-10",
    displayDate: "October 10, 2019",
    category: "Policy",
    title: "Proper usage of title",
    summary:
      "CRMO clarified proper usage of the RMO title. Outside Quebec, provincial law reserves the title \u201Costeopath\u201D for physicians.",
    href: "/resources#usage-of-title",
  },
];
