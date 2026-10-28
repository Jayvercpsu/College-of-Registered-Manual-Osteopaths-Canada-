import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Consistent button system. Use <Button> for actions and <LinkButton> for
 * navigation so semantics stay correct.
 */

type Variant = "primary" | "secondary" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-colors select-none whitespace-nowrap disabled:opacity-55 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-600 text-white shadow-[0_1px_2px_rgb(22_50_79/0.16),inset_0_1px_0_rgb(255_255_255/0.12)] hover:bg-teal-700 active:bg-teal-800",
  secondary:
    "bg-navy-800 text-white shadow-[0_1px_2px_rgb(22_50_79/0.2)] hover:bg-navy-700 active:bg-navy-900",
  outline:
    "border border-navy-200 bg-white text-navy-800 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-800",
  ghost:
    "text-navy-700 hover:bg-navy-50 hover:text-navy-900 -mx-2 px-2",
  inverse:
    "bg-white text-navy-900 hover:bg-teal-50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.925rem]",
  lg: "h-12 px-6 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant, size, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest} />
  );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function LinkButton({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: LinkButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses({ variant, size, className })}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </Link>
  );
}
