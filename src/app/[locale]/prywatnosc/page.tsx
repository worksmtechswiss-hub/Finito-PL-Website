import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { DatenschutzContent } from "./DatenschutzContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Polityka prywatności - Finito Pro",
    description:
      "Polityka prywatności Finito Pro. Dowiedz się, jak chronimy i przetwarzamy Państwa dane. Serwery w Szwajcarii, zgodność z RODO.",
    path: "/prywatnosc",
    locale,
  });
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DatenschutzContent />;
}
