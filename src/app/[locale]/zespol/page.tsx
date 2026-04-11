import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { TeamContent } from "./TeamContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Zespół i historia - Finito Pro",
    description:
      "Poznaj zespół stojący za Finito Pro. Nasza misja: wspieranie MŚP w Szwajcarii prostym i wydajnym oprogramowaniem.",
    path: "/zespol",
    locale,
    keywords: [
      "zespół Finito Pro",
      "szwajcarski startup",
      "oprogramowanie MŚP Szwajcaria",
      "oprogramowanie dla rzemieślników",
    ],
  });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TeamContent />;
}
