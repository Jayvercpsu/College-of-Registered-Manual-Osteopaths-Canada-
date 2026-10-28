import { avatarTone, cn, initialsOf } from "@/lib/utils";

/**
 * Initials-based avatar. Deliberately avoids AI/photo portraits for sample
 * practitioners so no fabricated human faces appear in the directory.
 */
export function InitialsAvatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-lg",
    xl: "h-24 w-24 text-2xl",
  } as const;

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-display font-semibold ring-1 ring-inset ring-black/5",
        sizes[size],
        avatarTone(name),
        className,
      )}
    >
      {initialsOf(name)}
    </span>
  );
}
