"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Paintbrush, Hammer, Zap, Droplets, Ruler, Home, Grid3x3,
  Building2, Blocks, Building, Sparkles, TreePine, Truck,
  Thermometer, PenTool, Palette, User, ArrowRight,
} from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const branches = [
  { icon: Paintbrush, slug: "malarze", title: "Malarze", desc: "Katalogi usług do szybkiego tworzenia ofert, udostępnianie projektów klientom" },
  { icon: Hammer, slug: "tynkarze", title: "Tynkarze", desc: "Cyfrowe raporty fotograficzne, zarządzanie magazynem ze śledzeniem artykułów" },
  { icon: Zap, slug: "elektrycy", title: "Elektrycy", desc: "Schematy elektryczne na urządzeniach mobilnych, zarządzanie magazynem z linkami do dostawców" },
  { icon: Droplets, slug: "hydraulicy", title: "Hydraulicy", desc: "Mobilna rejestracja czasu pracy na miejscu, cyfrowe raporty robocze" },
  { icon: Ruler, slug: "stolarze", title: "Stolarze", desc: "Dokumentowanie zamówień na wymiar, obciążenie warsztatu w dashboardzie" },
  { icon: Home, slug: "dekarze", title: "Dekarze", desc: "Planowanie pracowników z kalendarzem, cyfrowe archiwum projektów (25+ lat)" },
  { icon: Grid3x3, slug: "posadzkarze", title: "Posadzkarze", desc: "Kalkulacja metrów kwadratowych, śledzenie resztek materiałów" },
  { icon: Building2, slug: "rusztowania", title: "Firmy rusztowaniowe", desc: "Śledzenie elementów rusztowań w magazynie, automatyczne rozliczenia wynajmu" },
  { icon: Blocks, slug: "murarze", title: "Murarze", desc: "Automatyczny dziennik budowy, przegląd wielu projektów z filtrami" },
  { icon: Building, slug: "obsluga-budynkow", title: "Obsługa techniczna budynków", desc: "Automatyczne interwały konserwacyjne, koordynacja z partnerami" },
  { icon: Sparkles, slug: "sprzatanie", title: "Firmy sprzątające", desc: "Planowanie tras, dokumentacja jakości ze zdjęciami" },
  { icon: TreePine, slug: "ogrodnictwo", title: "Ogrodnictwo", desc: "Sezonowe planowanie projektów, dokumentacja roślin" },
  { icon: Truck, slug: "przeprowadzki", title: "Przeprowadzki", desc: "Planowanie dnia z optymalizacją tras, listy inwentaryzacyjne ze zdjęciami" },
  { icon: Thermometer, slug: "technika-budynkowa", title: "Instalacje budowlane", desc: "Dokumentacja instalacji, planowanie i protokoły konserwacji" },
  { icon: PenTool, slug: "architekci", title: "Architekci", desc: "Centralne zarządzanie dokumentami projektowymi, tablica zadań dla poszczególnych faz" },
  { icon: Palette, slug: "agencje", title: "Agencje", desc: "Rejestracja czasu pracy do rozliczeń, indywidualne uprawnienia użytkowników" },
  { icon: User, slug: "jednoosobowe-firmy", title: "Jednoosobowe firmy", desc: "Kompletne biuro na smartfonie, szablony oszczędzają 80% czasu" },
];

export function BranchenOverview() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        {/* Floating product mockup - left side */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -5 }}
          animate={{ opacity: 0.3, x: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-[-5%] top-1/3 w-64 lg:w-80 hidden lg:block pointer-events-none"
        >
          <Image
            src="/images/mockup4.png"
            alt=""
            width={400}
            height={300}
            className="w-full h-auto drop-shadow-2xl"
            sizes="320px"
          />
        </motion.div>

        {/* Floating software screenshot - right side */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 5 }}
          animate={{ opacity: 0.25, x: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-[-5%] top-1/4 w-64 lg:w-72 hidden lg:block pointer-events-none"
        >
          <Image
            src="/images/hero.png"
            alt=""
            width={400}
            height={300}
            className="w-full h-auto drop-shadow-2xl rounded-xl"
            sizes="288px"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full border border-white/10 mb-6">
              17 branż, jedno rozwiązanie
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Odpowiednie <span className="gradient-text-animated">rozwiązanie</span> dla każdej branży
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Finito Pro dostosowuje się do Twojej branży - z funkcjami i procesami dopasowanymi do specyfiki danego sektora.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Branch Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Przegląd wszystkich branż
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Wybierz swoją branżę i odkryj, jak Finito Pro upraszcza Twoją codzienną pracę.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {branches.map((branch) => (
              <motion.div key={branch.slug} variants={staggerItem}>
                <Link
                  href={`/branze/${branch.slug}`}
                  className="group block p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <branch.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {branch.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {branch.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 group-hover:gap-2.5 transition-all">
                    Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Software Preview */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Jedno oprogramowanie, wszystkie branże
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Finito Pro oferuje elastyczny interfejs, który dostosowuje się do Twojej branży.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-neutral-200">
              <Image
                src="/images/Finito-Software.png"
                alt="Finito Pro - przegląd dla wszystkich branż"
                width={1200}
                height={675}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 1152px"
              />
            </div>
            {/* Floating mobile mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:right-8 w-32 sm:w-44 hidden sm:block"
            >
              <Image
                src="/images/Finito-Mob.png"
                alt="Finito Pro - aplikacja mobilna"
                width={200}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                sizes="176px"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Nie ma Twojej branży?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Finito Pro jest wszechstronny w zastosowaniu. Skontaktuj się z nami, a pokażemy Ci,
              jak oprogramowanie sprawdzi się w Twojej firmie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Wypróbuj za darmo
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
