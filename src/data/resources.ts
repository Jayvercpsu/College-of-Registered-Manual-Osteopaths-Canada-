import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  FileCheck2,
  GraduationCap,
  Landmark,
  Newspaper,
  ScrollText,
} from "lucide-react";

/**
 * Education & resource entries. Titles and summaries reflect publicly
 * published CRMO guidance and announcements (manualosteopaths.org). Links
 * point to the corresponding material; where the redesigned site does not yet
 * host a document, the entry links to the Contact page with a note, and the
 * content migration plan (docs/CONTENT-MIGRATION.md) tracks completion.
 */

export interface ResourceItem {
  icon: LucideIcon;
  category: "Guideline" | "Policy" | "Education" | "News";
  title: string;
  summary: string;
  href: string;
}

export const RESOURCES: ResourceItem[] = [
  {
    icon: ScrollText,
    category: "Policy",
    title: "CRMO Code of Ethics",
    summary:
      "The ethical foundation of membership: the paramount purpose of a registered manual osteopath's professional services is to benefit the client.",
    href: "/resources#code-of-ethics",
  },
  {
    icon: FileCheck2,
    category: "Guideline",
    title: "Informed Consent Guideline",
    summary:
      "Members must ensure consent is fully informed, voluntary, specific to the client's condition, and documented in writing.",
    href: "/resources#informed-consent",
  },
  {
    icon: BadgeCheck,
    category: "Policy",
    title: "Proper Usage of Title",
    summary:
      "Outside Quebec, provincial law reserves the title \u201Costeopath\u201D for physicians. CRMO members practise as Registered Manual Osteopaths and use the title accordingly.",
    href: "/resources#usage-of-title",
  },
  {
    icon: GraduationCap,
    category: "Education",
    title: "Continuing Education Requirements",
    summary:
      "A minimum of 40 hours of continuing education every two years, plus a mandatory course on fraud prevention, abuse prevention and record keeping.",
    href: "/resources#continuing-education",
  },
  {
    icon: Landmark,
    category: "Education",
    title: "Scope of Practice in Canada",
    summary:
      "An overview of acts considered outside the scope of practice of a registered manual osteopath (RMO) in Canadian provinces.",
    href: "/resources#scope-of-practice",
  },
  {
    icon: Newspaper,
    category: "News",
    title: "Insurer Recognition Announcements",
    summary:
      "Public announcements confirming that major Canadian extended health insurers accept services from CRMO members in good standing.",
    href: "/resources#insurer-recognition",
  },
];
