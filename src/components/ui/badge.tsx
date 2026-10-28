import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "teal" | "navy" | "ochre" | "muted" | "sample";

const tones: Record<Tone, string> = {
  teal: "bg-teal-50 text-teal-800 ring-teal-200",
  navy: "bg-navy-50 text-navy-800 ring-navy-200",
  ochre: "bg-ochre-100 text-ochre-700 ring-ochre-200",
  muted: "bg-slate-100 text-slate-600 ring-slate-200",
  sample: "bg-ochre-100 text-ochre-700 ring-ochre-200 border-dashed",
};

export function Badge({
  tone = "teal",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
