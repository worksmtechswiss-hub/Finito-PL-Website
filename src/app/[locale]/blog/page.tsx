import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { BlogListContent } from "./BlogListContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Blog - Porady dla firm usługowych | Finito Pro",
    description:
      "Praktyczne porady, poradniki i aktualności dla firm usługowych i rzemieślniczych. Zarządzanie projektami, fakturowanie, KSeF, rejestracja czasu pracy.",
    path: "/blog",
    locale,
    keywords: [
      "blog firma usługowa",
      "porady dla rzemieślników",
      "zarządzanie firmą budowlaną",
      "oprogramowanie MŚP blog",
      "KSeF poradnik",
    ],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogListContent />;
}
