"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Clock,
  Zap,
  FileText,
  Receipt,
  CalendarClock,
  Camera,
  RefreshCw,
  TrendingUp,
  Banknote,
  ShieldCheck,
  FolderCheck,
  Sparkles,
  Palmtree,
  Warehouse,
  MessageCircle,
  Calculator,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useAnimatedCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return { count, ref };
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
interface AutomationExample {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  vorher: string;
  vorherZeit: string;
  nachher: string;
  nachherZeit: string;
  ersparnis: string;
  prozent: number;
}

const automationExamples: AutomationExample[] = [
  {
    icon: FileText,
    title: "Tworzenie oferty",
    vorher: "Szukanie szablonu Word, sprawdzanie cen, formatowanie",
    vorherZeit: "30 min",
    nachher: "Zapisane katalogi usług, automatyczne ceny",
    nachherZeit: "3 min",
    ersparnis: "90% oszczędności czasu = 27 minut na ofertę",
    prozent: 90,
  },
  {
    icon: Receipt,
    title: "Wystawianie i wysyłanie faktury",
    vorher: "Word, ręczne tworzenie faktury, eksport PDF, e-mail",
    vorherZeit: "20 min",
    nachher: "Automatyczne generowanie z projektu, fakturę, natychmiastowa wysyłka",
    nachherZeit: "1 min",
    ersparnis: "95% oszczędności czasu = zamiast 20 min tylko 1 minuta",
    prozent: 95,
  },
  {
    icon: CalendarClock,
    title: "Miesięczny raport czasu pracy",
    vorher: "Zbieranie danych w Excelu, weryfikacja, formatowanie",
    vorherZeit: "2 godz./mies.",
    nachher: "Automatyczny raport miesięczny jednym kliknięciem",
    nachherZeit: "0 min",
    ersparnis: "100% = 24 godziny zaoszczędzone rocznie",
    prozent: 100,
  },
  {
    icon: Camera,
    title: "Dokumentacja projektu",
    vorher: "Sortowanie zdjęć, opisywanie, ręczne przypisywanie",
    vorherZeit: "15 min/projekt",
    nachher: "Automatyczne przypisanie podczas fotografowania",
    nachherZeit: "0 min",
    ersparnis: "Przy 200 projektach/rok = 50 godzin zaoszczędzonych",
    prozent: 100,
  },
  {
    icon: RefreshCw,
    title: "Zlecenia cykliczne (abonamenty serwisowe)",
    vorher: "Ręczne przypominanie, tworzenie projektu, wystawianie faktury",
    vorherZeit: "30 min/zlecenie",
    nachher: "Automatycznie nowy projekt + faktura we właściwym czasie",
    nachherZeit: "0 min",
    ersparnis: "0 zapomnianych zleceń, 100% automatycznie",
    prozent: 100,
  },
  {
    icon: Palmtree,
    title: "Planowanie urlopów",
    vorher: "Pisanie e-maila, dzwonienie do szefa, aktualizacja Excela",
    vorherZeit: "45 min/wniosek",
    nachher: "Wniosek w aplikacji, automatyczna akceptacja, zaktualizowany kalendarz",
    nachherZeit: "30 sek.",
    ersparnis: "99% = przy 50 wnioskach/rok = 37 godzin zaoszczędzonych",
    prozent: 99,
  },
  {
    icon: Warehouse,
    title: "Zarządzanie magazynem",
    vorher: "Ręczne liczenie, listy w Excelu, brak materiałów na budowie",
    vorherZeit: "60 min/tydzień",
    nachher: "Automatyczne odliczanie materiałów przy przypisaniu do projektu",
    nachherZeit: "0 min",
    ersparnis: "0 braków materiałowych, 100% przegląd stanów",
    prozent: 100,
  },
  {
    icon: MessageCircle,
    title: "Komunikacja z klientem",
    vorher: "Klient dzwoni 3x (\"Na jakim etapie jesteście?\"), zdjęcia przez WhatsApp",
    vorherZeit: "15 min/klient",
    nachher: "Klient widzi postęp w portalu klienta w czasie rzeczywistym",
    nachherZeit: "0 min",
    ersparnis: "80% mniej telefonów od klientów",
    prozent: 80,
  },
  {
    icon: Calculator,
    title: "Zamknięcie roku / księgowość",
    vorher: "2 tygodnie chaosu: szukanie dowodów, dzwonienie do księgowego",
    vorherZeit: "2 tygodnie",
    nachher: "Eksport jednym kliknięciem, wszystkie dane posortowane",
    nachherZeit: "2 godz.",
    ersparnis: "Z 2 tygodni do 2 godzin",
    prozent: 98,
  },
];

const totalSavings = [
  {
    icon: Clock,
    value: 520,
    suffix: "",
    label: "godzin/rok zaoszczędzonych",
    sub: "= 13 tygodni roboczych",
  },
  {
    icon: Banknote,
    value: 31200,
    suffix: " zł",
    label: "zaoszczędzonych",
    sub: "przy stawce 60 zł/godz.",
    format: true,
  },
  {
    icon: ShieldCheck,
    value: 0,
    suffix: "",
    label: "zapomnianych faktur",
    sub: "Nigdy więcej utraconych przychodów",
    static: true,
    staticDisplay: "0",
  },
  {
    icon: FolderCheck,
    value: 100,
    suffix: "%",
    label: "cyfrowa dokumentacja",
    sub: "Bezpapierowo i bezpiecznie",
  },
];

/* ------------------------------------------------------------------ */
/*  Progress bar component                                             */
/* ------------------------------------------------------------------ */
function ComparisonBar({ prozent }: { prozent: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-4">
      <div className="flex justify-between text-xs text-neutral-400 mb-1.5">
        <span>Przed</span>
        <span>Z Finito</span>
      </div>
      <div className="relative h-3 bg-neutral-100 rounded-full overflow-hidden">
        {/* "Vorher" bar (full width, faded) */}
        <div className="absolute inset-0 bg-neutral-200 rounded-full" />
        {/* "Nachher" bar (saved portion, colored) */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full"
          initial={{ width: "100%" }}
          animate={isInView ? { width: `${100 - prozent}%` } : { width: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-xs font-semibold text-violet-600">
          {prozent}% oszczędności czasu
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export function AutomationenContent() {
  return (
    <>
      {/* ============================================================ */}
      {/* A) HERO (dark)                                                */}
      {/* ============================================================ */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-violet-400" />
              Automatyzacje i oszczędność czasu
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Automatyzuj{" "}
              <span className="gradient-text-animated">zamiast administrować</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
              Zobacz na konkretnych przykładach z praktyki, ile czasu i pieniędzy
              oszczędzisz z Finito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Testuj 14 dni za darmo
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Zamów demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* B) PRAXISBEISPIELE                                            */}
      {/* ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-medium rounded-full mb-4">
              Przed vs. Po
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Przykłady z praktyki: tyle czasu naprawdę oszczędzisz
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Konkretne porównania z codziennej pracy MŚP i firm rzemieślniczych.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {automationExamples.map((example, i) => {
              const Icon = example.icon;
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative p-6 rounded-2xl bg-white border border-neutral-100 hover:border-violet-200 hover:shadow-card-hover transition-all duration-300 group"
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                      <Icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 text-lg">
                      {example.title}
                    </h3>
                  </div>

                  {/* Vorher */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-neutral-300" />
                      <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Przed
                      </span>
                      <span className="ml-auto text-sm font-bold text-neutral-600">
                        {example.vorherZeit}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 pl-4">
                      {example.vorher}
                    </p>
                  </div>

                  {/* Nachher */}
                  <div className="mb-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-violet-500" />
                      <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">
                        Z Finito
                      </span>
                      <span className="ml-auto text-sm font-bold text-violet-600">
                        {example.nachherZeit}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 pl-4">
                      {example.nachher}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <ComparisonBar prozent={example.prozent} />

                  {/* Ersparnis badge */}
                  <div className="mt-4 px-3 py-2 bg-violet-50 rounded-xl">
                    <p className="text-sm font-medium text-violet-700">
                      <TrendingUp className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                      {example.ersparnis}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* C) GESAMTERSPARNIS-RECHNER                                    */}
      {/* ============================================================ */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-medium rounded-full mb-4">
              Łączne oszczędności
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Tyle oszczędza typowe MŚP
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Dla typowego MŚP z 5 pracownikami i 200 projektami
              rocznie:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {totalSavings.map((item, i) => {
              const Icon = item.icon;
              const counter = useAnimatedCounter(
                item.static ? 0 : item.value,
                2000
              );

              const displayValue = item.static
                ? item.staticDisplay
                : item.format
                ? counter.count.toLocaleString("de-CH")
                : counter.count;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative p-6 rounded-2xl bg-white border border-neutral-100 text-center hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-1">
                    <span ref={counter.ref}>
                      {i === 1 && ""}
                      {displayValue}
                      {item.suffix}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-600 mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-neutral-400">{item.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* D) CUSTOM AUTOMATIONEN                                        */}
      {/* ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-50 text-violet-600 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Enterprise
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">
                Potrzebujesz jeszcze więcej automatyzacji?
              </h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Dla dużych firm tworzymy dedykowane aplikacje i automatyzacje
                na bazie Finito. Indywidualne przepływy pracy, interfejsy i
                integracje - szyte na miarę Twojej firmy.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Indywidualne przepływy pracy i procesy",
                  "Interfejsy API do istniejącego oprogramowania",
                  "Dedykowane aplikacje dla specyficznych wymagań",
                  "Osobiste doradztwo i wdrożenie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 shrink-0">
                      <Zap className="w-3 h-3 text-violet-600" />
                    </div>
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors"
              >
                Skontaktuj się
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Visual accent */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 w-full lg:w-[380px]"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-violet-600/10 to-violet-400/10 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-neutral-700/50">
                  <div className="space-y-4">
                    {[
                      { label: "Workflow", value: "Zautomatyzowany", color: "bg-violet-500" },
                      { label: "Interfejs", value: "ERP połączone", color: "bg-emerald-500" },
                      { label: "Trigger", value: "Czas rzeczywisty", color: "bg-amber-500" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${row.color}`} />
                          <span className="text-sm text-white/70">
                            {row.label}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-white">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
                    <p className="text-sm text-violet-300 font-medium">
                      Integracja na zamówienie aktywna
                    </p>
                    <p className="text-xs text-violet-400/60 mt-1">
                      3 przepływy pracy - 12 automatyzacji - 0 błędów
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* E) CTA (dark)                                                 */}
      {/* ============================================================ */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Zacznij teraz i oszczędzaj od pierwszego dnia
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              14 dni za darmo, bez karty kredytowej. Przekonaj się
              sam, ile czasu oszczędzisz z Finito Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Testuj teraz za darmo
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Zamów demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
