import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { MarktplatzContent } from "./MarktplatzContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Marketplace - Rozszerzenia Finito Pro",
    description:
      "Odkryj rozszerzenia i integracje dla Finito Pro. Połącz swoje ulubione narzędzia i rozszerz zakres funkcji.",
    path: "/marketplace",
    locale,
    keywords: [
      "Finito Pro marketplace",
      "rozszerzenia oprogramowania MŚP",
      "integracje oprogramowania biznesowego",
      "Finito Pro dodatki",
    ],
  });
}

export default async function MarktplatzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MarktplatzContent />;
}
