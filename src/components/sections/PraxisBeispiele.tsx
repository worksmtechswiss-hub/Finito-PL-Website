"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Paintbrush,
  Zap,
  Building2,
  Wrench,
  TreePine,
  Scissors,
  Clock,
  FileText,
  Receipt,
  Camera,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

const beispiele = [
  {
    branche: "Firma malarska",
    icon: Paintbrush,
    firma: "5 pracowników, Warszawa",
    vorher: [
      "Oferty tworzone ręcznie w Wordzie (45 min na ofertę)",
      "Czas pracy notowany na papierze, często zapomniany",
      "Faktury wysyłane dopiero tygodnie po zakończeniu projektu",
    ],
    nachher: [
      "Oferty w 5 minut z szablonów",
      "Automatyczna rejestracja czasu przez aplikację na miejscu",
      "Faktura od razu po zakończeniu projektu jednym kliknięciem",
    ],
    ersparnis: "12 godzin/tydzień",
    highlight: "90% mniej czasu na oferty",
  },
  {
    branche: "Firma elektryczna",
    icon: Zap,
    firma: "8 pracowników, Kraków",
    vorher: [
      "Listy Excel do śledzenia materiałów",
      "Brak przeglądu otwartych faktur",
      "Zarządzanie urlopami przez kalendarz ścienny",
    ],
    nachher: [
      "Cyfrowe zarządzanie magazynem z alertami stanów",
      "Dashboard pokazuje wszystkie otwarte pozycje na pierwszy rzut oka",
      "Cyfrowe zarządzanie urlopami i nieobecnościami",
    ],
    ersparnis: "2 800 zł/miesiąc",
    highlight: "0 zapomnianych faktur",
  },
  {
    branche: "Obsługa techniczna budynków",
    icon: Building2,
    firma: "12 pracowników, Wrocław",
    vorher: [
      "Plany zleceń koordynowane przez WhatsApp",
      "Reklamacje klientów bez dokumentacji",
      "Faktura miesięczna wymagała 2 dni pracy",
    ],
    nachher: [
      "Centralne planowanie zleceń z powiadomieniami w aplikacji",
      "Kompletna dokumentacja fotograficzna przy każdym zleceniu",
      "Automatyczne rozliczenie miesięczne w 10 minut",
    ],
    ersparnis: "15 godzin/tydzień",
    highlight: "98% zadowolenia klientów",
  },
  {
    branche: "Firma hydrauliczna",
    icon: Wrench,
    firma: "3 pracowników, Poznań",
    vorher: [
      "Raporty robocze wypełniane ręcznie",
      "Klienci musieli dzwonić po aktualizacje statusu",
      "Księgowość zlecana zewnętrznie (drogie)",
    ],
    nachher: [
      "Cyfrowe raporty robocze bezpośrednio na smartfonie",
      "Portal klienta ze statusem projektu w czasie rzeczywistym",
      "Zintegrowana księgowość oszczędza koszty biura rachunkowego",
    ],
    ersparnis: "1 500 zł/miesiąc",
    highlight: "Koszty biura rachunkowego zmniejszone o połowę",
  },
  {
    branche: "Ogrodnictwo",
    icon: TreePine,
    firma: "6 pracowników, Gdańsk",
    vorher: [
      "Planowanie sezonowe na papierowym kalendarzu",
      "Całkowity brak kalkulacji końcowych",
      "Materiały zamawiane podwójnie",
    ],
    nachher: [
      "Cyfrowe planowanie sezonowe i projektowe",
      "Automatyczna kalkulacja końcowa po zakończeniu projektu",
      "Zarządzanie magazynem zapobiega podwójnym zamówieniom",
    ],
    ersparnis: "3 200 zł/miesiąc",
    highlight: "30% mniej kosztów materiałów",
  },
  {
    branche: "Stolarnia",
    icon: Scissors,
    firma: "4 pracowników, Łódź",
    vorher: [
      "Zlecenia przez telefon i kartki",
      "Brak przeglądu postępu projektu",
      "Pracownicy nie wiedzieli, co robić dalej",
    ],
    nachher: [
      "Wszystkie zlecenia cyfrowo z priorytetami",
      "Tablica Kanban pokazuje status każdego projektu",
      "Aplikacja dla pracowników z codzienną listą zadań",
    ],
    ersparnis: "8 godzin/tydzień",
    highlight: "Projekty 20% szybciej ukończone",
  },
];

export function PraxisBeispiele() {
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
            Przykłady z{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              praktyki
            </span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Tak szwajcarskie MŚP korzystają z Finito Pro - prawdziwe wyniki z prawdziwych firm.
          </p>
        </motion.div>

        {/* Examples Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {beispiele.map((beispiel) => (
            <motion.div
              key={beispiel.branche}
              variants={staggerItem}
              className="group bg-white rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50/50 p-5 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <beispiel.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{beispiel.branche}</h3>
                    <p className="text-xs text-neutral-500">{beispiel.firma}</p>
                  </div>
                </div>
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs font-semibold text-green-700">{beispiel.highlight}</span>
                </div>
              </div>

              {/* Vorher/Nachher */}
              <div className="p-5 space-y-4">
                {/* Vorher */}
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Przed</p>
                  <ul className="space-y-1.5">
                    {beispiel.vorher.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                        <span className="w-1 h-1 rounded-full bg-red-300 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nachher */}
                <div>
                  <p className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">Z Finito Pro</p>
                  <ul className="space-y-1.5">
                    {beispiel.nachher.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="w-1 h-1 rounded-full bg-green-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ersparnis */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Oszczędności</span>
                  <span className="text-sm font-bold text-primary-600">{beispiel.ersparnis}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/automatyzacje"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
          >
            Więcej przykładów i automatyzacji
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
