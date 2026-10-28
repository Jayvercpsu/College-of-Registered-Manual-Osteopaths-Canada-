import {
  BadgeCheck,
  BookOpenCheck,
  FileText,
  FolderSearch,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Membership value points. Every item traces back to publicly announced CRMO
 * information (title protection, insurer recognition, guidance documents,
 * member directory). Nothing here invents accreditation or fee policies.
 */

export interface Benefit {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const MEMBERSHIP_BENEFITS: Benefit[] = [
  {
    icon: BadgeCheck,
    title: "Protected RMO title",
    body: "Members in good standing use the title Registered Manual Osteopath (RMO) — a public signal that the practitioner has met CRMO's registration requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Insurer recognition",
    body: "Care provided by CRMO members in good standing has been accepted for reimbursement by major Canadian extended health insurers, including Manulife and Green Shield Canada.",
  },
  {
    icon: FolderSearch,
    title: "Public member directory",
    body: "Members are listed in the public CRMO directory, which extended health insurers and the public can use to verify registration status.",
  },
  {
    icon: BookOpenCheck,
    title: "Structured continuing education",
    body: "A clear framework of 40 hours of relevant continuing education every two years keeps members' clinical knowledge current.",
  },
  {
    icon: FileText,
    title: "Practice guidelines",
    body: "Members receive guidance documents on informed consent, proper use of title, receipt standards and professional conduct.",
  },
  {
    icon: Users,
    title: "Professional community",
    body: "Membership connects practitioners with a national, Indigenous-led professional body committed to safe and ethical manual osteopathic care.",
  },
];
