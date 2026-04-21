import type { Metadata } from "next";

export function generatePageMetadata(page: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  locale?: string;
}): Metadata {
  const locale = page.locale || "pl";
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.join(", "),
    alternates: {
      canonical: `https://finitopro.pl/${locale}${page.path}`,
      languages: {
        pl: `https://finitopro.pl/pl${page.path}`,
        en: `https://finitopro.pl/en${page.path}`,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://finitopro.pl/${locale}${page.path}`,
      siteName: "Finito Pro",
      images: [
        {
          url: page.ogImage || "/images/og-default.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "pl" ? "pl_PL" : "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: { index: true, follow: true },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Finito Pro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PLN",
    description: "Testuj 14 dni za darmo",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  author: {
    "@type": "Organization",
    name: "Finito Pro",
    url: "https://finitopro.pl",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
    },
  },
};

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://finitopro.pl${item.path}`,
    })),
  };
}
