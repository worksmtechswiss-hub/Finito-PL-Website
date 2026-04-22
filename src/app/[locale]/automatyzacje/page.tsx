import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { AutomationenContent } from "./AutomationenContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Automatyzacje i oszczędność czasu | Finito Pro",
    description:
      "Odkryj, jak Finito Pro automatyzuje Twoje procesy. Przykłady z praktyki pokazują: do 30% oszczędności czasu i mniej błędów.",
    path: "/automatyzacje",
    locale,
    keywords: [
      "automatyzacja MŚP",
      "oszczędność czasu oprogramowanie",
      "automatyzacja dla rzemieślników",
      "optymalizacja procesów firma usługowa",
      "automatyzacja ofert",
      "faktury automatyczne",
      "automatyczny czas pracy",
    ],
  });
}

export default async function AutomationenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Automatyzacje", path: "/automatyzacje" },
            ])
          ),
        }}
      />
      <AutomationenContent />
    </>
  );
}
