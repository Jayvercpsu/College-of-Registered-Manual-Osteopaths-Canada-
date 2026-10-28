import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Consistent section header: ochre-ruled eyebrow, serif title, muted lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      ) : null}
      <Tag className="mt-3 text-3xl font-semibold text-navy-900 text-balance sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
