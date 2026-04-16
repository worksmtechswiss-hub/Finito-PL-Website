"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const kmuFeatures = [
  "Faktury",
  "Tworzenie ofert",
  "Zarządzanie projektami",
  "Zarządzanie klientami (CRM)",
  "Portal klienta",
  "Rejestracja czasu",
  "Księgowość",
  "Zarządzanie magazynem",
  "Zarządzanie urlopami",
  "Aplikacja dla pracowników",
  "Dokumentacja fotograficzna",
  "Abonamenty serwisowe",
  "Dashboard CEO (wskaźniki efektywności)",
  "Dostęp API",
  "Multi-waluta",
  "Dane na serwerach w Szwajcarii",
  "Wsparcie",
];

export function Pricing() {
  const t = useTranslations("pricing");

  return (
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
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards: KMU + Grossfirmen */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* KMU Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-3xl bg-white border-2 border-[#8b5cf6]/20 p-10 shadow-xl shadow-[#8b5cf6]/5">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#8b5cf6]/25">
              Najpopularniejszy plan
            </div>

            {/* Plan name */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                MŚP
              </h3>
              <p className="text-neutral-500 text-sm">
                Wszystko, czego potrzebuje Twoja firma rzemieślnicza
              </p>
            </div>

            {/* Price */}
            <div className="text-center mb-2">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-neutral-900">
                  100 zł
                </span>
                <span className="text-neutral-400 text-sm">
                  / miesiąc na użytkownika
                </span>
              </div>
            </div>
            <p className="text-center text-[#8b5cf6] font-medium text-sm mb-8">
              Od 3 zł dziennie
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-8" />

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {kmuFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#8b5cf6]" />
                  <span className="text-sm text-neutral-600">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Animated CTA Button */}
            <motion.a
              href="https://app.finitopro.pl/register"
              className="group relative block w-full text-center py-4 px-6 rounded-2xl font-semibold text-white text-base overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
              <span className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.4)] animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Rozpocznij za darmo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <p className="text-center text-xs text-neutral-400 mt-4">
              Testuj 14 dni za darmo. Bez karty kredytowej.
            </p>
          </div>
        </motion.div>

        {/* Grossfirmen Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative rounded-3xl bg-surface-light-secondary border border-neutral-200 p-10 h-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Duże firmy
              </h3>
              <p className="text-neutral-500 text-sm">
                Dla firm, które chcą więcej
              </p>
            </div>

            <div className="mb-8">
              <span className="text-3xl font-bold text-neutral-900">Indywidualnie</span>
              <p className="text-neutral-400 text-sm mt-1">Dostosowane do Twojej firmy</p>
            </div>

            <div className="h-px bg-neutral-200 mb-8" />

            <ul className="space-y-3 mb-10 flex-1">
              {[
                "Wszystko z planu MŚP w cenie",
                "Niestandardowe aplikacje i automatyzacje na bazie Finito",
                "Dostosowane przepływy pracy dla Twojej firmy",
                "Indywidualne interfejsy i integracje",
                "Szkolenia zespołowe (online i na miejscu)",
                "Dedykowany opiekun",
                "Priorytetowe wsparcie",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#8b5cf6]" />
                  <span className="text-sm text-neutral-600">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/de/kontakt"
              className="block w-full text-center py-4 px-6 rounded-2xl font-semibold text-[#8b5cf6] text-base border-2 border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/5 transition-colors"
            >
              Skontaktuj się
            </a>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
}
