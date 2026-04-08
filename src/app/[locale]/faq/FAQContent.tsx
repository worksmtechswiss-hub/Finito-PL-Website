"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Czy jest darmowa wersja próbna?",
    answer:
      "Tak! Możesz testować Finito Pro przez 14 dni za darmo i bez zobowiązań. Bez karty kredytowej, bez ukrytych kosztów. Otrzymujesz pełny dostęp do wszystkich funkcji MŚP. Po zakończeniu okresu próbnego możesz wybrać abonament lub korzystać z darmowego planu Starter.",
    category: "Ogólne",
  },
  {
    question: "Kiedy mogę anulować abonament?",
    answer:
      "Możesz anulować abonament w dowolnym momencie - bez okresu wypowiedzenia i ukrytych opłat. Różnica za pozostały okres zostanie proporcjonalnie zwrócona. Twoje dane pozostaną dostępne jeszcze przez 90 dni, abyś mógł spokojnie je wyeksportować.",
    category: "Ogólne",
  },
  {
    question: "Czy mogę poprosić o dodatkowe funkcje?",
    answer:
      "Tak, oczywiście! Stale rozwijamy Finito Pro na podstawie opinii naszych użytkowników. Podziel się z nami swoimi potrzebami, a sprawdzimy możliwość ich realizacji. Klienci korporacyjni mogą nawet zlecić indywidualne funkcje dostosowane specjalnie do ich potrzeb.",
    category: "Funkcje",
  },
  {
    question: "Jak mogę mieć przegląd wszystkich projektów?",
    answer:
      "Finito Pro oferuje przejrzysty dashboard ze wszystkimi bieżącymi projektami w jednym miejscu. Dodatkowo istnieje osobna sekcja projektów, w której możesz filtrować według statusu, klienta, daty i zespołu. Każdy projekt pokazuje postęp, otwarte zadania i przypisanych pracowników.",
    category: "Funkcje",
  },
  {
    question: "Jak długo przechowywane są moje dane?",
    answer:
      "Twoje dane są bezpiecznie i w formie zaszyfrowanej przechowywane na serwerach w Szwajcarii przez 25 lat. Masz stały pełny dostęp do wszystkich swoich historycznych projektów, faktur i dokumentów. Ściśle przestrzegamy szwajcarskich przepisów o ochronie danych oraz RODO.",
    category: "Bezpieczeństwo",
  },
  {
    question: "Czy istnieje wersja mobilna?",
    answer:
      "Tak! Aplikacja Finito dla pracowników działa na każdym smartfonie i tablecie - niezależnie od tego, czy to iPhone, Android czy iPad. Twoi pracownicy mogą rejestrować czas pracy, przesyłać zdjęcia, przeglądać zadania i komunikować się z zespołem - wszystko w terenie. Aplikacja automatycznie synchronizuje się z wersją desktopową.",
    category: "Funkcje",
  },
  {
    question: "Czy mogę tworzyć faktury w Finito Pro?",
    answer:
      "Tak, Finito Pro tworzy profesjonalne faktury ze szwajcarskim kodem QR zgodne ze standardami szwajcarskimi. Faktury mogą być automatycznie generowane z projektów lub tworzone ręcznie. Każda faktura zawiera polecenie zapłaty QR, które można wysłać bezpośrednio e-mailem lub pocztą.",
    category: "Funkcje",
  },
  {
    question: "Jakie metody płatności są akceptowane?",
    answer:
      "Możesz opłacać abonament miesięcznie lub rocznie (z 2 miesiącami gratis). Akceptujemy karty kredytowe (Visa, Mastercard, American Express) oraz płatność na fakturę. Dla dużych firm oferujemy indywidualne warunki płatności.",
    category: "Ogólne",
  },
  {
    question: "Czy mogę zapraszać członków zespołu i zarządzać prawami dostępu?",
    answer:
      "Tak, możesz zaprosić dowolną liczbę członków zespołu. Dla każdego użytkownika można ustawić indywidualne prawa dostępu - od administratora po pracownika z ograniczonym dostępem. Dzięki temu masz kontrolę nad tym, kto co może widzieć i edytować.",
    category: "Funkcje",
  },
  {
    question: "Czy jest integracja z innymi narzędziami?",
    answer:
      "Tak, Finito Pro oferuje API REST do integracji z innymi rozwiązaniami programistycznymi. Standardowo wspieramy połączenia z popularnymi narzędziami księgowymi i kalendarzami. Klienci korporacyjni mogą dodatkowo zlecić niestandardowe integracje.",
    category: "Funkcje",
  },
  {
    question: "Jak mogę skontaktować się ze wsparciem technicznym?",
    answer:
      "Z naszym zespołem wsparcia możesz skontaktować się e-mailem pod adresem kontakt@finitopro.pl lub bezpośrednio przez czat w aplikacji. Klienci MŚP otrzymują odpowiedź zazwyczaj w ciągu 24 godzin. Klienci korporacyjni mają dostęp do dedykowanego menedżera wsparcia i priorytetowych czasów odpowiedzi.",
    category: "Wsparcie",
  },
  {
    question: "Czy mogę zarządzać powtarzającymi się umowami serwisowymi?",
    answer:
      "Tak! Dzięki funkcji abonamentów serwisowych możesz tworzyć i automatyzować powtarzające się umowy serwisowe. System automatycznie przypomina Tobie i Twoim klientom o zaplanowanych przeglądach, tworzy odpowiednie zlecenia i może automatycznie generować faktury.",
    category: "Funkcje",
  },
];

const categories = ["Wszystkie", "Ogólne", "Funkcje", "Bezpieczeństwo", "Wsparcie"];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "Wszystkie" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <span className="gradient-text-animated">Często zadawane pytania</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Tutaj znajdziesz odpowiedzi na najważniejsze pytania dotyczące
              Finito Pro.
            </p>
          </motion.div>
        </div>


      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Szukaj pytania..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-light-secondary border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-glow-sm"
                    : "bg-surface-light-secondary text-neutral-600 hover:bg-neutral-100"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <button
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all",
                    openIndex === i
                      ? "bg-white border-primary-100 shadow-card"
                      : "bg-white border-neutral-100 hover:border-primary-100"
                  )}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-surface-light-secondary text-neutral-500 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="font-medium text-neutral-900">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300",
                        openIndex === i && "rotate-180 text-primary-500"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-0 sm:pl-[calc(2rem+0.75rem)] text-neutral-500 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-neutral-400 mb-4">
                Nie znaleziono pytań pasujących do tego wyszukiwania.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Wszystkie");
                }}
                className="text-primary-600 text-sm font-medium hover:underline"
              >
                Zresetuj filtry
              </button>
            </motion.div>
          )}
          </div>

          {/* Sidebar with app mockup and support icon */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center gap-8 sticky top-32"
          >
            {/* Customer support icon */}
            <div className="w-full bg-primary-50 rounded-2xl p-6 border border-primary-100 text-center">
              <Image
                src="/images/customer-support.svg"
                alt="Obsługa klienta"
                width={64}
                height={64}
                className="w-16 h-16 mx-auto mb-3"
              />
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                Potrzebujesz pomocy?
              </h3>
              <p className="text-xs text-neutral-500 mb-3">
                Nasz zespół wsparcia chętnie Ci pomoże.
              </p>
              <a
                href="mailto:kontakt@finitopro.pl"
                className="text-xs font-medium text-primary-600 hover:underline"
              >
                kontakt@finitopro.pl
              </a>
            </div>

            {/* Mobile app mockup */}
            <div className="relative">
              <Image
                src="/images/Finito-Mob.png"
                alt="Finito Pro - aplikacja mobilna zawsze pod ręką"
                width={240}
                height={480}
                className="w-full max-w-[220px] h-auto drop-shadow-xl"
                sizes="220px"
              />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-surface-light-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h2>
            <p className="text-neutral-500 mb-8">
              Skontaktuj się z nami - chętnie pomożemy Ci osobiście.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-2xl text-sm shadow-glow-sm hover:shadow-glow transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                14 dni za darmo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a
                href="mailto:kontakt@finitopro.pl"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-200 text-neutral-700 font-medium rounded-2xl text-sm hover:bg-white hover:shadow-card transition-all"
              >
                Napisz e-mail
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
