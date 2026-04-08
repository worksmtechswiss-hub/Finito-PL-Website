import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { PreiseContent } from "./PreiseContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Cennik - Finito Pro oprogramowanie dla MSP",
    description:
      "Cennik Finito Pro: Starter za darmo, MSP od 100 zł/miesiac. Porownanie wszystkich funkcji. 14 dni bezplatnego testu - bez karty kredytowej.",
    path: "/preise",
    locale,
    keywords: [
      "Finito Pro cennik",
      "koszty oprogramowania MSP",
      "ceny oprogramowania rzemieslniczego",
      "szwajcarskie oprogramowanie tanio",
      "porownanie oprogramowania biznesowego",
    ],
  });
}

export default async function PreisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PreiseContent />;
}
