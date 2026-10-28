import type { MetadataRoute } from "next";
import { listPractitioners } from "@/lib/practitioners";
import { SITE } from "@/data/site";

/**
 * XML sitemap covering all public routes, including every practitioner
 * profile (currently the labelled sample profiles — replaced by verified
 * registry slugs in production).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "about", priority: 0.9 },
    { path: "membership", priority: 0.9 },
    { path: "directory", priority: 0.9 },
    { path: "members-list", priority: 0.8 },
    { path: "osteopathy", priority: 0.8 },
    { path: "news", priority: 0.7 },
    { path: "resources", priority: 0.7 },
    { path: "reporting", priority: 0.6 },
    { path: "council-of-elders", priority: 0.6 },
    { path: "land-acknowledgment", priority: 0.5 },
    { path: "contact", priority: 0.8 },
    { path: "privacy", priority: 0.3 },
    { path: "accessibility", priority: 0.3 },
  ].map(
    ({ path, priority }): MetadataRoute.Sitemap[number] => ({
      url: `${base}/${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority,
    }),
  );

  const practitioners = await listPractitioners();
  const profileRoutes: MetadataRoute.Sitemap = practitioners.map((p) => ({
    url: `${base}/practitioners/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...profileRoutes];
}
