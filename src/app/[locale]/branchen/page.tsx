import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { BranchenOverview } from "./BranchenOverview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Branże - oprogramowanie dla każdej branży | Finito Pro",
    description: "Finito Pro dostosowuje się do Twojej branży. Oprogramowanie dla malarzy, tynkarzy, elektryków, hydraulików, stolarzy i wielu innych branż rzemieślniczych.",
    path: "/branchen",
    locale,
    keywords: ["Oprogramowanie dla rzemieślników", "Oprogramowanie branżowe", "Oprogramowanie MŚP Szwajcaria"],
  });
}

export default async function BranchenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BranchenOverview />;
}
