import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { featurePages, featureSlugs } from "@/data/feature-pages";
import { FeatureDetailClient } from "./FeatureDetailClient";

/* ========================================
   Static Params - pre-generate all 13 slugs
   ======================================== */

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

/* ========================================
   Metadata - per feature SEO
   ======================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const feature = featurePages[slug];

  if (!feature) {
    return {};
  }

  return generatePageMetadata({
    title: feature.metaTitle,
    description: feature.metaDescription,
    path: `/funkcje/${slug}`,
    locale,
    keywords: feature.keywords,
  });
}

/* ========================================
   Page Component
   ======================================== */

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const feature = featurePages[slug];

  if (!feature) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Strona glowna", path: "/" },
              { name: "Funkcje", path: "/moduly" },
              { name: feature.title, path: `/funkcje/${slug}` },
            ])
          ),
        }}
      />
      <FeatureDetailClient slug={slug} />
    </>
  );
}
