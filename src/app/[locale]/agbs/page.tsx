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
    title: "Ogólne Warunki Umowy - Finito Pro",
    description:
      "Ogólne Warunki Umowy (OWU) Finito Pro. Warunki korzystania z naszego oprogramowania dla MŚP.",
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
