import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientShell } from "@/components/layout/ClientShell";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Finito Pro | Oprogramowanie dla MŚP ze Szwajcarii",
    template: "%s | Finito Pro",
  },
  description:
    "Finito Pro - Kompleksowe oprogramowanie dla szwajcarskich firm rzemieślniczych. Zarządzanie projektami, faktury QR, rejestracja czasu pracy i CRM.",
  metadataBase: new URL("https://www.finitopro.ch"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-neutral-900">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ClientShell />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
