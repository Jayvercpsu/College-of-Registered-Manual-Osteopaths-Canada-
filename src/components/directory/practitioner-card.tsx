import Link from "next/link";
import { ArrowRight, FlaskConical, Languages, MapPin, MonitorSmartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InitialsAvatar } from "@/components/ui/initials-avatar";
import { PROVINCE_NAMES, type Practitioner } from "@/types/practitioner";

/**
 * Directory result card. `source === "sample"` records are clearly badged as
 * demonstration data in every context they appear.
 */
export function PractitionerCard({
  practitioner: p,
}: {
  practitioner: Practitioner;
}) {
  return (
    <article className="card-hover-elevate flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <InitialsAvatar name={p.name} />
          <div>
            <h3 className="font-display text-lg leading-snug font-semibold text-navy-900">
              <Link
                href={`/practitioners/${p.slug}`}
                className="rounded-sm transition-colors hover:text-teal-700"
              >
                {p.name}
              </Link>
            </h3>
            <p className="mt-0.5 text-xs font-semibold tracking-wide text-muted">
              {p.credentials.join(" · ")}
            </p>
          </div>
        </div>
        {p.source === "sample" ? (
          <Badge tone="sample" className="shrink-0">
            <FlaskConical className="h-3 w-3" aria-hidden />
            Sample
          </Badge>
        ) : null}
      </div>

      <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-navy-700">
        <MapPin className="h-4 w-4 text-teal-600" strokeWidth={2.2} aria-hidden />
        {p.city}, {PROVINCE_NAMES[p.province]}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {p.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.acceptingNewPatients ? (
          <Badge tone="teal">Accepting new patients</Badge>
        ) : (
          <Badge tone="muted">Waitlist</Badge>
        )}
        {p.offersVirtualCare ? (
          <Badge tone="navy">
            <MonitorSmartphone className="h-3 w-3" aria-hidden />
            Virtual care
          </Badge>
        ) : null}
        <Badge tone="muted">
          <Languages className="h-3 w-3" aria-hidden />
          {p.languages.slice(0, 2).join(", ")}
        </Badge>
      </div>

      <div className="mt-6 border-t border-navy-100 pt-4">
        <Link
          href={`/practitioners/${p.slug}`}
          className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800"
          aria-label={`View the sample profile of ${p.name}`}
        >
          View profile
          <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
