import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { AboutPreview } from "@/components/home/about-preview";
import { Benefits } from "@/components/home/benefits";
import { DirectoryPreview } from "@/components/home/directory-preview";
import { Standards } from "@/components/home/standards";
import { ResourcesPreview } from "@/components/home/resources-preview";
import { CtaBanner } from "@/components/home/cta-banner";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE.name} | National Registry of Manual Osteopaths in Canada`,
  description:
    "CRMO is a national nonprofit Indigenous organization registering qualified manual osteopaths across Canada. Find a registered manual osteopath, explore membership, and read our professional standards.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Benefits />
      <DirectoryPreview />
      <Standards />
      <ResourcesPreview />
      <CtaBanner />
    </>
  );
}
