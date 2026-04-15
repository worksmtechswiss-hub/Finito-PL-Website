import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { FunktionenOverview } from "./FunktionenOverview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Wszystkie funkcje - Finito Pro oprogramowanie MŚP",
    description:
      "Odkryj wszystkie 13 funkcji Finito Pro: Dashboard, zarządzanie projektami, faktury, oferty, rejestracja czasu pracy, CRM, zarządzanie urlopami i wiele więcej.",
    path: "/moduly",
    locale,
    keywords: [
      "Funkcje Finito Pro",
      "Funkcje oprogramowania MŚP",
      "Funkcje oprogramowania dla rzemieślników",
      "Szwajcarskie oprogramowanie biznesowe",
      "Zarządzanie projektami",
      "Faktury",
      "Rejestracja czasu pracy",
    ],
  });
}

export default async function FunktionenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FunktionenOverview />;
}
