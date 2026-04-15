"use client";

import { motion } from "framer-motion";
import { ArrowRight, X, Check, Frown, Smile } from "lucide-react";

const comparisons = [
  {
    category: "Tworzenie ofert",
    vorher: "45 minut kopiowania w Wordzie",
    nachher: "5 minut z szablonów",
  },
  {
    category: "Rejestracja czasu pracy",
    vorher: "Kartki i Excel, często zapomniane",
    nachher: "1 kliknięcie w aplikacji, automatyczne przypisanie",
  },
  {
    category: "Wysyłanie faktur",
    vorher: "Tygodnie opóźnienia, ręcznie w Wordzie",
    nachher: "Od razu po zakończeniu projektu, faktura automatycznie",
  },
  {
    category: "Przegląd projektów",
    vorher: "W głowie, na kartkach, w WhatsApp",
    nachher: "Jeden dashboard do wszystkiego",
  },
  {
    category: "Komunikacja z klientem",
    vorher: "Telefony, e-maile, WhatsApp w chaosie",
    nachher: "Portal klienta ze statusem w czasie rzeczywistym",
  },
  {
    category: "Planowanie urlopów",
    vorher: "Kalendarz ścienny w biurze",
    nachher: "Cyfrowe zarządzanie nieobecnościami",
  },
];

export function VorherNachher() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
            Tak Finito Pro zmienia Twój dzień pracy
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Bezpośrednie porównanie - zobacz różnicę.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-4"
          >
            <div />
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-red-50 rounded-xl">
              <Frown className="w-5 h-5 text-red-400" />
              <span className="text-sm font-semibold text-red-500">Bez Finito</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-green-50 rounded-xl">
              <Smile className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-green-600">Z Finito Pro</span>
            </div>
          </motion.div>

          {/* Rows */}
          {comparisons.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="grid grid-cols-3 gap-4 mb-3 group"
            >
              <div className="flex items-center py-4 px-4 rounded-xl">
                <span className="text-sm font-semibold text-neutral-900">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-2 py-4 px-4 bg-red-50/50 rounded-xl group-hover:bg-red-50 transition-colors">
                <X className="w-4 h-4 text-red-300 shrink-0" />
                <span className="text-sm text-neutral-500">{item.vorher}</span>
              </div>
              <div className="flex items-center gap-2 py-4 px-4 bg-green-50/50 rounded-xl group-hover:bg-green-50 transition-colors">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-neutral-700 font-medium">{item.nachher}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://app.finitopro.pl/register"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl text-base shadow-glow-sm hover:shadow-glow transition-all"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Testuj 14 dni za darmo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
