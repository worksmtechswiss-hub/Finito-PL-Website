import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { KontaktContent } from "./KontaktContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Kontakt - Finito Pro",
    description:
      "Skontaktuj sie z zespolem Finito Pro. Chetnie pomozemy w pytaniach dotyczacych naszego oprogramowania dla MSP. Przez e-mail, WhatsApp lub formularz kontaktowy.",
    path: "/kontakt",
    locale,
    keywords: [
      "Finito Pro kontakt",
      "wsparcie oprogramowania MSP",
      "kontakt szwajcarskie oprogramowanie",
      "pomoc oprogramowanie rzemieslnicze",
    ],
  });
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <KontaktContent />;
}
