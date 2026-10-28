import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official College of Registered Manual Osteopaths seal. The artwork is a
 * square JPEG with a circular mark, so it is clipped to a circle to sit
 * cleanly on both the white header and the dark footer.
 */
export function LogoMark({
  className,
  decorative = true,
  priority = false,
}: {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/crmo-logo.jpg"
      alt={decorative ? "" : "College of Registered Manual Osteopaths logo"}
      width={975}
      height={975}
      sizes="64px"
      priority={priority}
      className={cn("h-10 w-10 rounded-full object-contain", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("group inline-flex items-center", className)}>
      <LogoMark
        priority
        className="h-14 w-14 transition-transform duration-300 group-hover:scale-[1.04]"
      />
    </span>
  );
}
