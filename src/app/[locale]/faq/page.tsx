import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { FAQContent } from "./FAQContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "FAQ - Często zadawane pytania o Finito Pro",
    description:
      "Odpowiedzi na najczęściej zadawane pytania o Finito Pro: wersja próbna, ceny, funkcje, bezpieczeństwo danych, aplikacja mobilna i więcej.",
    path: "/faq",
    locale,
    keywords: [
      "Finito Pro FAQ",
      "Pytania o oprogramowanie MŚP",
      "Pomoc oprogramowanie dla rzemieślników",
      "Finito Pro wersja próbna",
      "Szwajcarskie oprogramowanie FAQ",
    ],
  });
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FAQContent />;
}
