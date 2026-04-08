import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { KundenContent } from "./KundenContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Klienci i referencje - Finito Pro",
    description:
      "Szwajcarskie firmy rzemieślnicze i MŚP ufają Finito Pro. Poznaj opinie klientów i historie sukcesu.",
    path: "/kunden",
    locale,
    keywords: [
      "Klienci Finito Pro",
      "Referencje oprogramowania MŚP",
      "Doświadczenia z oprogramowaniem dla rzemieślników",
      "Historie sukcesu szwajcarskich MŚP",
    ],
  });
}

export default async function KundenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <KundenContent />;
}
