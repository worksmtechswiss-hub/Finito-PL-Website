"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  CalendarDays,
  Camera,
  Package,
  Calculator,
  Smartphone,
  Users,
  Repeat,
  UserCircle,
  ArrowRight,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { featureAnimationMap } from "@/components/animations/FeatureAnimations";

const features = [
  {
    icon: LayoutDashboard,
    slug: "dashboard",
    title: "Dashboard",
    description:
      "Wszystkie kluczowe wskaźniki w jednym miejscu. Finansowe KPI, aktywne projekty i raporty roczne w czasie rzeczywistym.",
    category: "Przegląd",
  },
  {
    icon: FolderKanban,
    slug: "projektmanagement",
    title: "Zarządzanie projektami",
    description:
      "Mobilne zarządzanie zadaniami, dokumentacja fotograficzna i koordynacja zespołu dla Twoich projektów.",
    category: "Funkcje główne",
  },
  {
    icon: Receipt,
    slug: "rechnungen",
    title: "Faktury QR",
    description:
      "Szwajcarskie faktury QR zgodne z ISO 20022. Obliczanie VAT, przypomnienia o płatnościach i uzgadnianie z bankiem.",
    category: "Finanse",
  },
  {
    icon: FileText,
    slug: "offerten",
    title: "Oferty",
    description:
      "Szybkie oferty cyfrowe z zapisanymi katalogami usług. Jednym kliknięciem do zlecenia.",
    category: "Finanse",
  },
  {
    icon: Clock,
    slug: "zeiterfassung",
    title: "Rejestracja czasu pracy",
    description:
      "Rejestracja czasu pracy z podziałem na projekty, raporty miesięczne, śledzenie nadgodzin i eksport wynagrodzeń.",
    category: "Funkcje główne",
  },
  {
    icon: UserCircle,
    slug: "crm",
    title: "CRM i zarządzanie klientami",
    description:
      "Centralne zarządzanie kontaktami z pełną historią klienta, tagami i portalem klienta.",
    category: "Funkcje główne",
  },
  {
    icon: CalendarDays,
    slug: "ferienmanagement",
    title: "Zarządzanie urlopami",
    description:
      "Mobilne wnioski urlopowe, przegląd pozostałych dni i proces zatwierdzania z kalendarzem zespołu.",
    category: "Kadry",
  },
  {
    icon: Camera,
    slug: "foto-dokumentation",
    title: "Dokumentacja fotograficzna",
    description:
      "Zdjęcia przed/po z automatycznym przypisaniem do projektu, znacznikiem czasu i danymi GPS.",
    category: "Plac budowy",
  },
  {
    icon: Package,
    slug: "lagerverwaltung",
    title: "Zarządzanie magazynem",
    description:
      "Zarządzanie materiałami i narzędziami z automatycznym odliczaniem na projekt i ostrzeżeniami o minimalnym stanie.",
    category: "Plac budowy",
  },
  {
    icon: Calculator,
    slug: "buchhaltung",
    title: "Księgowość",
    description:
      "Zarządzanie przychodami i wydatkami, rozliczanie VAT oraz eksport dla Twojego księgowego.",
    category: "Finanse",
  },
  {
    icon: Smartphone,
    slug: "mitarbeiter-app",
    title: "Aplikacja pracownika",
    description:
      "Zadania, rejestracja czasu, zdjęcia i komunikacja - wszystko ze smartfona, także offline.",
    category: "Plac budowy",
  },
  {
    icon: Users,
    slug: "kundenportal",
    title: "Portal klienta",
    description:
      "Udostępnianie postępów projektu, zatwierdzanie ofert i transparentna komunikacja z klientami.",
    category: "Komunikacja",
  },
  {
    icon: Repeat,
    slug: "service-abos",
    title: "Abonamenty serwisowe",
    description:
      "Automatyczne zarządzanie powtarzającymi się zleceniami z tworzeniem projektów według harmonogramu.",
    category: "Automatyzacja",
  },
];

export function FunktionenOverview() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            >
              <span className="text-sm text-white/70">13 funkcji, 1 platforma</span>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6"
            >
              <span className="gradient-text-animated">Wszystkie funkcje</span> dla Twojej firmy
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Od oferty po fakturę, od magazynu po portal klienta - Finito Pro obejmuje każdy aspekt Twojej firmy rzemieślniczej.
            </motion.p>
          </motion.div>
        </div>


      </section>

      {/* Hero Product Screenshot */}
      <section className="relative z-10 -mt-16 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-accent-400/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-1.5 shadow-2xl">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <div className="flex-1 mx-8">
                  <div className="h-5 bg-neutral-700/50 rounded-md" />
                </div>
              </div>
              <Image
                src="/images/mockup4.png"
                alt="Finito Pro - wszystkie funkcje w jednym miejscu"
                width={1200}
                height={750}
                className="w-full rounded-b-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature) => {
              const FeatureAnimation = featureAnimationMap[feature.slug];
              return (
                <motion.div key={feature.slug} variants={staggerItem}>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="group block rounded-2xl border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white h-full overflow-hidden"
                  >
                    {FeatureAnimation && <FeatureAnimation />}
                    <div className="p-6 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                          <feature.icon className="w-4.5 h-4.5 text-primary-600" />
                        </div>
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                          {feature.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                        Dowiedz się więcej
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Wszystkie funkcje. Jedna cena.
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Wypróbuj Finito Pro przez 30 dni za darmo i sam przekonaj się o wszystkich funkcjach.
            </p>
            <motion.a
              href="https://app.finitopro.pl/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Wypróbuj za darmo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
