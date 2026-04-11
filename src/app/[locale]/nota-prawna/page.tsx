import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { ImpressumContent } from "./ImpressumContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Informacje prawne - Finito Pro",
    description:
      "Informacje prawne Finito Pro. Dane zgodnie z prawem szwajcarskim. Dane kontaktowe i informacje prawne.",
    path: "/nota-prawna",
    locale,
  });
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ImpressumContent />;
}
