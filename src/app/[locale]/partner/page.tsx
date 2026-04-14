import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  PartnerHero,
  PartnerHowItWorks,
  PartnerCommission,
  PartnerComparison,
  PartnerMarket,
  PartnerBenefits,
  PartnerCalculator,
  PartnerFAQ,
} from "@/components/sections/PartnerProgram";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Program Partnerski — Finito Pro | 50% zysków w roku 1 + 5% lifetime",
  description:
    "Dołącz do programu partnerskiego Finito Pro. 50% zysków netto przez pierwszy rok, 5% lifetime. Opcja equity. Firmy do 500 osób.",
};

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PartnerHero />
      <PartnerHowItWorks />
      <PartnerCommission />
      <PartnerComparison />
      <PartnerMarket />
      <PartnerBenefits />
      <PartnerCalculator />
      <PartnerFAQ />
      <CTA />
    </>
  );
}
