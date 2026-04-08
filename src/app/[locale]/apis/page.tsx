import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { APIsContent } from "./APIsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Dokumentacja API - Finito Pro",
    description:
      "Dokumentacja REST API Finito Pro. Zintegruj Finito Pro ze swoimi istniejącymi systemami dzięki naszemu kompleksowemu API.",
    path: "/apis",
    locale,
    keywords: [
      "Finito Pro API",
      "oprogramowanie MŚP API",
      "integracja REST API",
      "szwajcarskie oprogramowanie API",
    ],
  });
}

export default async function APIsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <APIsContent />;
}
