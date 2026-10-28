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
  size = "default",
}: {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  size?: "sm" | "default" | "lg" | "header" | "footer";
}) {
  const sizeClasses = {
    sm: "h-10 w-10",
    default: "h-12 w-12",
    lg: "h-14 w-14",
    header: "h-16 w-16 sm:h-14 sm:w-14", // 64px desktop, 56px mobile
    footer: "h-12 w-12",
  };

  return (
    <Image
      src="/images/crmo-logo.jpg"
      alt={decorative ? "" : "College of Registered Manual Osteopaths logo"}
      width={975}
      height={975}
      sizes="64px"
      priority={priority}
      className={cn(
        "rounded-full object-contain transition-transform duration-300",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function Logo({ className, size = "header" }: { className?: string; size?: "sm" | "default" | "lg" | "header" | "footer" }) {
  return (
    <span className={cn("group inline-flex items-center", className)}>
      <LogoMark
        priority
        size={size}
        className="group-hover:scale-[1.03]"
      />
    </span>
  );
}
