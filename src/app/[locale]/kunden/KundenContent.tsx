"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Star, ArrowRight, Quote, Shield, Users, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Marco S.",
    company: "Malerbetrieb Suter",
    branch: "Malarze",
    text: "Od kiedy korzystamy z Finito Pro, tworzymy oferty w połowie czasu. Portal klienta robi wrażenie na naszych zleceniodawcach i zapewnia przejrzystość.",
    rating: 5,
  },
  {
    name: "Stefan B.",
    company: "Elektro Brunner AG",
    branch: "Elektrycy",
    text: "Mobilne zarządzanie magazynem z linkami do dostawców zrewolucjonizowało nasze zamówienia uzupełniające. Koniec z papierową robotą na placu budowy.",
    rating: 5,
  },
  {
    name: "Andrea M.",
    company: "Reinigung Plus GmbH",
    branch: "Sprzątanie",
    text: "Planowanie tras i dokumentacja jakości w jednej aplikacji - to zwiększyło naszą wydajność o 40%. Klienci uwielbiają zdjęcia przed/po.",
    rating: 5,
  },
  {
    name: "Thomas K.",
    company: "Gartenbau Koller",
    branch: "Ogrodnictwo",
    text: "Planowanie sezonowe to prawdziwy przełom. Finito Pro automatycznie przypomina mi o powtarzających się pracach pielęgnacyjnych - żaden klient nie zostaje pominięty.",
    rating: 5,
  },
  {
    name: "Lisa W.",
    company: "Kreativbüro Weber",
    branch: "Agencja",
    text: "Wreszcie rejestracja czasu pracy, która pasuje także do agencji. Raporty godzinowe według projektów są gotowe jednym kliknięciem - idealne do naszych rozliczeń.",
    rating: 4,
  },
  {
    name: "Patrick H.",
    company: "Haustechnik Huber",
    branch: "Instalacje budowlane",
    text: "Planowanie konserwacji było kiedyś koszmarem. Z Finito Pro wszystkie instalacje są czytelnie zarejestrowane, a automatyczne przypomnienia są na wagę złota.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Firm korzysta z Finito Pro" },
  { value: "17", label: "Obsługiwanych branż" },
  { value: "4.8/5", label: "Średnia ocena" },
  { value: "25+", label: "Lat przechowywania danych" },
];

export function KundenContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Nasi <span className="gradient-text-animated">klienci</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Szwajcarskie MŚP ufają Finito Pro. Dowiedz się, jak
              firmy rzemieślnicze i usługowe cyfryzują swoją codzienną pracę.
            </p>
          </motion.div>
        </div>


      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-surface-light-secondary border border-neutral-100"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-16 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
              Tak pracują nasi klienci
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Od przeglądu projektów po zarządzanie magazynem - wszystko w jednym rozwiązaniu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-200">
              <Image
                src="/images/Projekt-Übersicht.png"
                alt="Finito Pro - przegląd projektów w jednym miejscu"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-200">
              <Image
                src="/images/Lagerverwaltung-Finito-Pro.png"
                alt="Finito Pro - zarządzanie magazynem z pełną kontrolą"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Co mówią nasi klienci
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Prawdziwe opinie szwajcarskich firm, które pracują z Finito Pro.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating ? "text-warning fill-warning" : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.company}</div>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-primary-50 text-primary-600 text-[10px] font-medium rounded">
                    {t.branch}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Dlaczego firmy nam ufają
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Serwery w Szwajcarii", desc: "Wszystkie dane są szyfrowane i przechowywane w Szwajcarii. 100% zgodności z RODO." },
              { icon: Users, title: "Osobiste wsparcie", desc: "Żadnego call center - prawdziwi ludzie pomagają Ci w pytaniach i konfiguracji." },
              { icon: TrendingUp, title: "Ciągły rozwój", desc: "Regularne aktualizacje oparte na opiniach naszych użytkowników." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Dołącz do rodziny Finito Pro
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Testuj za darmo przez 14 dni i sam przekonaj się, dlaczego szwajcarskie MŚP wybierają Finito Pro.
            </p>
            <motion.a
              href="https://app.finitopro.pl/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Zacznij za darmo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
