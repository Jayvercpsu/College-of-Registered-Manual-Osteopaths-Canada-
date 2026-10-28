import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges conditional class names and resolves Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Builds a URL query string, skipping empty values. */
export function buildQuery(
  params: Record<string, string | number | boolean | undefined>,
): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "" || value === false) continue;
    search.set(key, String(value));
  }
  const str = search.toString();
  return str ? `?${str}` : "";
}

/** Derives up to two initials from a display name. */
export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]!.toUpperCase())
    .filter((c) => /[A-Z]/.test(c))
    .slice(0, 2)
    .join("");
}

/** Deterministic pastel pairing for sample avatars. */
export function avatarTone(name: string): string {
  const tones = [
    "bg-teal-100 text-teal-800",
    "bg-navy-100 text-navy-800",
    "bg-ochre-100 text-ochre-700",
    "bg-navy-200 text-navy-900",
    "bg-teal-200 text-teal-900",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return tones[hash % tones.length]!;
}
