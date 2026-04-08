"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Calculator,
  Cloud,
  Database,
  FileSpreadsheet,
  Mail,
  Puzzle,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const integrations = [
  {
    icon: Calculator,
    title: "Eksport księgowy",
    desc: "Eksportuj dane finansowe bezpośrednio do popularnego szwajcarskiego oprogramowania księgowego. CSV, PDF i inne formaty.",
    status: "Dostępne",
    statusColor: "bg-success/10 text-success",
  },
  {
    icon: FileSpreadsheet,
    title: "Import Excel i CSV",
    desc: "Importuj istniejące listy klientów, bazy artykułów i dane projektów z plików Excel lub CSV.",
    status: "Dostępne",
    statusColor: "bg-success/10 text-success",
  },
  {
    icon: Mail,
    title: "Integracja e-mail",
    desc: "Wysyłaj faktury i oferty bezpośrednio e-mailem z Finito Pro. Z potwierdzeniem dostarczenia.",
    status: "Dostępne",
    statusColor: "bg-success/10 text-success",
  },
  {
    icon: Cloud,
    title: "Chmura",
    desc: "Połącz swoją chmurę, aby automatycznie tworzyć kopie zapasowe i przechowywać dokumenty.",
    status: "W budowie",
    statusColor: "bg-warning/10 text-warning",
  },
  {
    icon: Database,
    title: "Integracja z ERP",
    desc: "Połącz Finito Pro ze swoim istniejącym systemem ERP, aby automatycznie wymieniać dane.",
    status: "Enterprise",
    statusColor: "bg-primary-50 text-primary-600",
  },
  {
    icon: Puzzle,
    title: "Integracja na zamówienie",
    desc: "Wykorzystaj nasze REST API, aby połączyć Finito Pro ze swoimi indywidualnymi systemami.",
    status: "API dostępne",
    statusColor: "bg-accent-50 text-accent-600",
  },
];

const comingSoon = [
  "Synchronizacja kalendarza (Google, Outlook)",
  "Automatyczne uzgadnianie płatności ze szwajcarskimi bankami",
  "Skaner dokumentów z OCR",
  "Optymalizacja tras oparta na GPS",
  "Integracja WhatsApp Business",
  "Rozszerzone szablony raportów",
];

export function MarktplatzContent() {
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
              <span className="gradient-text-animated">Marketplace</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Rozszerzenia i integracje, które czynią Finito Pro jeszcze wydajniejszym.
              Płynnie połącz swoje istniejące narzędzia.
            </p>
          </motion.div>
        </div>


      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Integracje i rozszerzenia
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Połącz Finito Pro ze swoimi istniejącymi systemami i przepływami pracy.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {integrations.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full border border-primary-100 mb-4">
              <Rocket className="w-4 h-4" />
              Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Wkrótce dostępne
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Stale pracujemy nad nowymi rozszerzeniami. Oto wgląd w naszą mapę drogową.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {comingSoon.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full shrink-0" />
                <span className="text-sm text-neutral-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ShieldCheck className="w-12 h-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Brakuje Ci jakiejś integracji?
            </h2>
            <p className="text-lg text-neutral-500 mb-8 max-w-xl mx-auto">
              Powiedz nam, jakich narzędzi używasz. Sprawdzimy możliwość realizacji
              i poinformujemy Cię, gdy integracja będzie dostępna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
              >
                Zapytaj o integrację
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/apis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-200 text-neutral-700 font-medium rounded-2xl hover:bg-surface-light-secondary transition-all"
              >
                Dokumentacja API
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
