import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { AGBsContent } from "./AGBsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Allgemeine Geschäftsbedingungen - Finito Pro",
    description:
      "Allgemeine Geschäftsbedingungen (AGB) von Finito Pro. Nutzungsbedingungen für unsere KMU Software.",
    path: "/agbs",
    locale,
  });
}

export default async function AGBsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AGBsContent />;
}
