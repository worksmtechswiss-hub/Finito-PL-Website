import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { organizationSchema } from "@/lib/seo";

// Lazy load below-the-fold sections to reduce initial bundle size
const FeatureVideoShowcase = dynamic(
  () => import("@/components/sections/FeatureVideoShowcase").then((m) => ({ default: m.FeatureVideoShowcase })),
  { ssr: true }
);
const WorkflowSteps = dynamic(
  () => import("@/components/sections/WorkflowSteps").then((m) => ({ default: m.WorkflowSteps })),
  { ssr: true }
);
const SavingsBanner = dynamic(
  () => import("@/components/sections/SavingsBanner").then((m) => ({ default: m.SavingsBanner })),
  { ssr: true }
);
const VorherNachher = dynamic(
  () => import("@/components/sections/VorherNachher").then((m) => ({ default: m.VorherNachher })),
  { ssr: true }
);
const PraxisBeispiele = dynamic(
  () => import("@/components/sections/PraxisBeispiele").then((m) => ({ default: m.PraxisBeispiele })),
  { ssr: true }
);
const PartnerBanner = dynamic(
  () => import("@/components/sections/PartnerProgram").then((m) => ({ default: m.PartnerBanner })),
  { ssr: true }
);
const MitarbeiterApp = dynamic(
  () => import("@/components/sections/MitarbeiterApp").then((m) => ({ default: m.MitarbeiterApp })),
  { ssr: true }
);
const BranchenGrid = dynamic(
  () => import("@/components/sections/BranchenGrid").then((m) => ({ default: m.BranchenGrid })),
  { ssr: true }
);
const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })),
  { ssr: true }
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
  { ssr: true }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((m) => ({ default: m.CTA })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Finito Pro | Oprogramowanie dla MŚP ze Szwajcarii - zarządzanie projektami, faktury i CRM",
  description:
    "Finito Pro - Kompleksowe oprogramowanie dla MŚP. Zarządzanie projektami, tworzenie faktur, rejestracja czasu pracy i CRM. 14 dni bezpłatnego testu!",
  keywords:
    "oprogramowanie MŚP, oprogramowanie do zarządzania projektami, oprogramowanie rzemieślnicze, oprogramowanie faktury, Finito Pro",
  openGraph: {
    title: "Finito Pro | Oprogramowanie dla firm usługowych",
    description:
      "Zarządzanie projektami, faktury, CRM i rejestracja czasu pracy w jednej aplikacji. Testuj 14 dni za darmo!",
    url: "https://finitopro.pl",
    siteName: "Finito Pro",
    images: [
      {
        url: "https://finitopro.pl/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Finito Pro - Oprogramowanie dla firm usługowych",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finito Pro | Oprogramowanie dla firm usługowych",
    description:
      "Zarządzanie projektami, faktury, CRM i rejestracja czasu pracy w jednej aplikacji. Testuj 14 dni za darmo!",
    images: ["https://finitopro.pl/images/og-default.png"],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <TrustBanner />
      <FeatureVideoShowcase />
      <WorkflowSteps />
      <SavingsBanner />
      <VorherNachher />
      <PraxisBeispiele />
      <PartnerBanner />
      <MitarbeiterApp />
      <BranchenGrid />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
