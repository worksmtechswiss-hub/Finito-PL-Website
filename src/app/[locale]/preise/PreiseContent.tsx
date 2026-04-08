"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    desc: "Idealny na start dla jednoosobowych firm i małych zespołów.",
    price: "0",
    priceLabel: "Za darmo",
    period: "",
    highlighted: false,
    cta: "Zacznij za darmo",
    ctaHref: "https://app.finitopro.ch/register",
  },
  {
    id: "kmu",
    name: "MŚP",
    desc: "Pełna moc dla rozwijających się firm rzemieślniczych i usługowych.",
    price: "30",
    priceLabel: "CHF",
    period: "/ miesiąc / użytkownik",
    highlighted: true,
    cta: "Testuj 30 dni za darmo",
    ctaHref: "https://app.finitopro.ch/register",
  },
  {
    id: "enterprise",
    name: "Duże firmy",
    desc: "Rozwiązanie dostosowane do większych firm z indywidualnymi wymaganiami.",
    price: null,
    priceLabel: "Indywidualnie",
    period: "",
    highlighted: false,
    cta: "Skontaktuj się",
    ctaHref: "/kontakt",
  },
];

const featureCategories = [
  {
    category: "Podstawowe funkcje",
    features: [
      { name: "Rejestracja czasu", starter: true, kmu: true, enterprise: true },
      { name: "Dokumentacja fotograficzna", starter: true, kmu: true, enterprise: true },
      { name: "Kalendarz", starter: true, kmu: true, enterprise: true },
      { name: "Nawigacja", starter: true, kmu: true, enterprise: true },
      { name: "Dziennik aktywności", starter: true, kmu: true, enterprise: true },
      { name: "Dane na serwerach w Szwajcarii", starter: true, kmu: true, enterprise: true },
    ],
  },
  {
    category: "Procesy biznesowe",
    features: [
      { name: "Faktury QR (Swiss QR-Code)", starter: false, kmu: true, enterprise: true },
      { name: "Tworzenie ofert", starter: false, kmu: true, enterprise: true },
      { name: "Zarządzanie projektami", starter: false, kmu: true, enterprise: true },
      { name: "Zarządzanie klientami (CRM)", starter: false, kmu: true, enterprise: true },
      { name: "Portal klienta", starter: false, kmu: true, enterprise: true },
      { name: "Księgowość", starter: false, kmu: true, enterprise: true },
      { name: "Zarządzanie magazynem", starter: false, kmu: true, enterprise: true },
    ],
  },
  {
    category: "Zespół i zarządzanie",
    features: [
      { name: "Zarządzanie urlopami", starter: false, kmu: true, enterprise: true },
      { name: "Aplikacja dla pracowników", starter: false, kmu: true, enterprise: true },
      { name: "Abonamenty serwisowe i umowy konserwacyjne", starter: false, kmu: true, enterprise: true },
      { name: "Dashboard CEO (KPI)", starter: false, kmu: true, enterprise: true },
      { name: "Multi-waluta", starter: false, kmu: true, enterprise: true },
    ],
  },
  {
    category: "Integracja i wsparcie",
    features: [
      { name: "Dostęp API", starter: false, kmu: true, enterprise: true },
      { name: "Wsparcie e-mail i w aplikacji", starter: false, kmu: true, enterprise: true },
      { name: "Niestandardowe integracje", starter: false, kmu: false, enterprise: true },
      { name: "Zamówienie własnych funkcji", starter: false, kmu: false, enterprise: true },
      { name: "Szkolenia zespołowe", starter: false, kmu: false, enterprise: true },
      { name: "Dedykowany menedżer wsparcia", starter: false, kmu: false, enterprise: true },
    ],
  },
];

const priceComparisons = [
  { item: "Croissant", price: "CHF 2.50", emoji: "🥐" },
  { item: "Red Bull", price: "CHF 2.90", emoji: "🥤" },
  { item: "Kawa na wynos", price: "CHF 5.50", emoji: "☕" },
  { item: "Kebab", price: "CHF 9.50", emoji: "🥙" },
  { item: "Bilet do kina", price: "CHF 18.00", emoji: "🎬" },
  { item: "Bilet parkingowy (1 godz.)", price: "CHF 4.00", emoji: "🅿️" },
];

const faqs = [
  {
    q: "Czy muszę podać kartę kredytową?",
    a: "Nie, 30-dniowa wersja testowa jest całkowicie bezpłatna. Dane płatnicze są potrzebne dopiero po wybraniu subskrypcji.",
  },
  {
    q: "Co się stanie po okresie testowym?",
    a: "Po 30 dniach możesz wybrać subskrypcję lub pozostać na darmowym planie Starter. Twoje dane nie zostaną utracone.",
  },
  {
    q: "Czy mogę anulować w dowolnym momencie?",
    a: "Tak, możesz anulować subskrypcję w dowolnym momencie. Różnica za pozostały okres zostanie zwrócona. Bez ukrytych opłat.",
  },
  {
    q: "Czy jest zniżka roczna?",
    a: "Tak! Przy płatności rocznej otrzymasz 2 miesiące gratis. Skontaktuj się z nami, aby uzyskać indywidualną ofertę.",
  },
  {
    q: "Jakie metody płatności są dostępne?",
    a: "Możesz płacić miesięcznie lub rocznie. Akceptujemy karty kredytowe (Visa, Mastercard) i fakturę.",
  },
];

export function PreiseContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        {/* Decorative Background SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image
            src="/images/Background-Price.svg"
            alt=""
            width={800}
            height={600}
            className="w-full max-w-4xl h-auto"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              <span className="gradient-text-animated">Uczciwe ceny</span> dla każdej wielkości firmy
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Zacznij za darmo i rozwijaj się z planem dopasowanym do Twojej
              firmy. Bez ukrytych kosztów.
            </p>
          </motion.div>
        </div>


      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={staggerItem}
                className={cn(
                  "relative rounded-2xl p-8 transition-all",
                  tier.highlighted
                    ? "bg-surface-dark text-white border-2 border-primary-500 shadow-glow lg:scale-105"
                    : "bg-white border border-neutral-200 hover:border-primary-200 hover:shadow-card-hover"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-semibold rounded-full">
                    Najpopularniejszy wybór
                  </div>
                )}

                <h3
                  className={cn(
                    "text-xl font-semibold mb-2",
                    tier.highlighted ? "text-white" : "text-neutral-900"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "text-sm mb-6 min-h-[40px]",
                    tier.highlighted ? "text-white/60" : "text-neutral-500"
                  )}
                >
                  {tier.desc}
                </p>

                <div className="mb-8">
                  {tier.price !== null ? (
                    <div className="flex items-baseline gap-1">
                      {tier.price === "0" ? (
                        <span className="text-4xl font-bold">Za darmo</span>
                      ) : (
                        <>
                          <span className="text-sm text-neutral-400">CHF</span>
                          <span className="text-4xl font-bold">{tier.price}</span>
                          <span
                            className={cn(
                              "text-sm",
                              tier.highlighted ? "text-white/50" : "text-neutral-400"
                            )}
                          >
                            {tier.period}
                          </span>
                        </>
                      )}
                    </div>
                  ) : (
                    <span className="text-3xl font-bold">{tier.priceLabel}</span>
                  )}
                </div>

                {tier.id === "enterprise" ? (
                  <Link
                    href="/kontakt"
                    className="block w-full text-center py-3.5 px-6 rounded-xl font-medium text-sm transition-all bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  >
                    {tier.cta}
                  </Link>
                ) : (
                  <a
                    href={tier.ctaHref}
                    className={cn(
                      "block w-full text-center py-3.5 px-6 rounded-xl font-medium text-sm transition-all",
                      tier.highlighted
                        ? "bg-gradient-to-r from-primary-500 to-accent-400 text-white hover:shadow-glow-sm"
                        : "bg-primary-50 text-primary-700 hover:bg-primary-100"
                    )}
                  >
                    {tier.cta}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
              Wszystko w jednym miejscu
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Dashboard Finito Pro pokazuje wszystkie ważne wskaźniki w jednym miejscu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-card-hover border border-neutral-200"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              poster="/images/Dashboard-Finito-Pro-App.png"
            >
              <source src="/videos/1Dashboard-Desktop-transcode.mp4" type="video/mp4" />
              <source src="/videos/1Dashboard-Desktop-transcode.webm" type="video/webm" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Porównanie wszystkich funkcji
            </h2>
            <p className="text-lg text-neutral-500">
              Znajdź plan, który do Ciebie pasuje.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-card"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-neutral-100 bg-surface-light-secondary">
              <div className="text-sm font-semibold text-neutral-900">
                Funkcja
              </div>
              <div className="text-sm font-semibold text-neutral-900 text-center">
                Starter
              </div>
              <div className="text-sm font-semibold text-center">
                <span className="gradient-text">MŚP</span>
              </div>
              <div className="text-sm font-semibold text-neutral-900 text-center">
                Duże firmy
              </div>
            </div>

            {/* Table Body */}
            {featureCategories.map((category, catIndex) => (
              <div key={category.category}>
                <div className="px-6 py-3 bg-surface-light-tertiary">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    {category.category}
                  </span>
                </div>
                {category.features.map((feature, i) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "grid grid-cols-4 gap-4 px-6 py-3.5 items-center",
                      i < category.features.length - 1 &&
                        "border-b border-neutral-50"
                    )}
                  >
                    <div className="text-sm text-neutral-700">{feature.name}</div>
                    <div className="flex justify-center">
                      {feature.starter ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <X className="w-4 h-4 text-neutral-300" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {feature.kmu ? (
                        <Check className="w-4 h-4 text-primary-500" />
                      ) : (
                        <X className="w-4 h-4 text-neutral-300" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {feature.enterprise ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <X className="w-4 h-4 text-neutral-300" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Price Comparison Fun Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              CHF 1 dziennie = mniej niż...
            </h2>
            <p className="text-lg text-neutral-500">
              Profesjonalne oprogramowanie biznesowe za mniej niż Twoja codzienna kawa.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {priceComparisons.map((item) => (
              <motion.div
                key={item.item}
                variants={staggerItem}
                className="relative bg-surface-light-secondary rounded-2xl p-6 border border-neutral-100 text-center hover:border-primary-200 hover:shadow-card transition-all group"
              >
                <span className="text-4xl mb-3 block">{item.emoji}</span>
                <h3 className="font-medium text-neutral-900 mb-1">
                  {item.item}
                </h3>
                <p className="text-sm text-neutral-500">{item.price}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 rounded-2xl border border-primary-100">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                Finito Pro MŚP: tylko CHF 1 dziennie na pracownika
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Pytania dotyczące cen
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all",
                    openFaqIndex === i
                      ? "bg-white border-primary-100 shadow-card"
                      : "bg-white border-neutral-100 hover:border-primary-100"
                  )}
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === i ? null : i)
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium text-neutral-900">{faq.q}</h3>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300",
                        openFaqIndex === i && "rotate-180 text-primary-500"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-neutral-500 leading-relaxed text-sm">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
            >
              Zobacz wszystkie FAQ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
              Gotowy, aby zacząć?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Testuj 30 dni za darmo. Bez karty kredytowej. Możesz anulować
              w dowolnym momencie.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
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
