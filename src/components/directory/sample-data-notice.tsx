import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Persistent honesty banner: makes it unambiguous that directory records are
 * demonstration data until the verified registry is connected.
 */
export function SampleDataNotice({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-ochre-200 bg-ochre-100 px-5 py-4",
        className,
      )}
    >
      <span
        aria-hidden
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70 text-ochre-700"
      >
        <FlaskConical className="h-4.5 w-4.5" strokeWidth={2.2} />
      </span>
      <p className="text-sm leading-relaxed text-ochre-700">
        <strong className="font-semibold">Demonstration directory.</strong> The
        practitioner records shown are fictional sample data used to preview
        the search experience — they are not real CRMO members and do not
        confirm anyone&rsquo;s registration status. The verified public register
        will replace these records when the official data source is connected.
      </p>
    </div>
  );
}
