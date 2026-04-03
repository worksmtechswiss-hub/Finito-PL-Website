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
    title: "Branchen - Software für jede Branche | Finito Pro",
    description: "Finito Pro passt sich an Ihre Branche an. Software für Maler, Gipser, Elektriker, Sanitär, Schreiner und viele weitere Handwerksbranchen.",
    path: "/branchen",
    locale,
    keywords: ["Handwerker Software", "Branchen Software", "KMU Software Schweiz"],
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
