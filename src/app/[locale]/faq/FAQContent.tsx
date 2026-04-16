"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  // OGÓLNE
  {
    question: "Czy jest darmowa wersja próbna?",
    answer:
      "Tak! Możesz testować Finito Pro przez 14 dni za darmo i bez zobowiązań. Bez karty kredytowej, bez ukrytych kosztów. Otrzymujesz pełny dostęp do wszystkich funkcji. Po zakończeniu okresu próbnego możesz wybrać abonament MŚP za 100 PLN/użytkownik/miesiąc.",
    category: "Ogólne",
  },
  {
    question: "Ile kosztuje Finito Pro?",
    answer:
      "Plan MŚP kosztuje 100 PLN netto za użytkownika miesięcznie. W tej cenie otrzymujesz wszystkie 13 modułów: faktury z KSeF, projekty, CRM, oferty, czas pracy, urlopy, magazyn, portal klienta, aplikację mobilną i więcej. Dla firm 50+ osób przygotowujemy indywidualną wycenę.",
    category: "Ogólne",
  },
  {
    question: "Kiedy mogę anulować abonament?",
    answer:
      "Możesz anulować abonament w dowolnym momencie — bez okresu wypowiedzenia i ukrytych opłat. Twoje dane pozostaną dostępne jeszcze przez 30 dni, abyś mógł spokojnie je wyeksportować.",
    category: "Ogólne",
  },
  {
    question: "Jakie metody płatności są akceptowane?",
    answer:
      "Akceptujemy karty kredytowe (Visa, Mastercard) przez Stripe oraz płatność na fakturę. Płatność może być miesięczna lub roczna. Przy płatności rocznej oferujemy rabat — skontaktuj się z nami po szczegóły.",
    category: "Ogólne",
  },
  {
    question: "Ile trwa wdrożenie Finito Pro?",
    answer:
      "Wdrożenie trwa od kilku godzin do kilku dni — zależy od ilości danych do migracji. Pomagamy przenieść klientów, usługi i cennik z Excela lub innego systemu. Nie potrzebujesz partnera IT ani konsultantów.",
    category: "Ogólne",
  },
  {
    question: "Kto jest producentem Finito Pro?",
    answer:
      "Finito Pro jest produkowany przez SM Tech GmbH z siedzibą w Szwajcarii. Na rynku polskim przedstawicielem jest OCTOLABS Sp. z o.o. z Warszawy. Ponad 200 firm w Szwajcarii korzysta z systemu, a teraz startujemy w Polsce.",
    category: "Ogólne",
  },
  // FUNKCJE
  {
    question: "Jakie moduły zawiera Finito Pro?",
    answer:
      "Finito Pro to 13 modułów w jednej cenie: Panel główny (dashboard), Projekty, Faktury z KSeF, Oferty, Rejestracja czasu pracy, CRM, Zarządzanie urlopami, Dokumentacja fotograficzna GPS, Magazyn, Księgowość, Aplikacja mobilna dla pracowników, Portal klienta, Abonamenty serwisowe.",
    category: "Funkcje",
  },
  {
    question: "Czy Finito Pro obsługuje KSeF?",
    answer:
      "Tak! Finito Pro posiada własną integrację z Krajowym Systemem e-Faktur. Faktury są automatycznie przesyłane do KSeF, a koszty pobierane z systemu — wszystko bez logowania na zewnętrzny portal. Gotowe na obowiązkowe e-fakturowanie w 2026.",
    category: "Funkcje",
  },
  {
    question: "Czy istnieje aplikacja mobilna?",
    answer:
      "Tak! Aplikacja Finito działa na każdym smartfonie — iPhone, Android, tablet. Pracownicy mogą rejestrować czas pracy (start/stop jednym kliknięciem), robić zdjęcia z realizacji z GPS, przeglądać zadania, nawigować do klienta i składać wnioski urlopowe. Automatyczna synchronizacja z wersją desktopową.",
    category: "Funkcje",
  },
  {
    question: "Czy mogę tworzyć oferty i faktury?",
    answer:
      "Tak. Oferty tworzone są z katalogu usług z automatycznym VAT. Klient może je zaakceptować online przez portal klienta. Zaakceptowana oferta jednym kliknięciem staje się projektem, a po zakończeniu projektu — jednym kliknięciem fakturą. Cały cykl w jednym systemie.",
    category: "Funkcje",
  },
  {
    question: "Czym jest Portal klienta?",
    answer:
      "Portal klienta pozwala Twoim klientom śledzić postępy projektu online — bez dzwonienia. Są dwie opcje: zakodowany link (bez logowania) lub pełny dostęp jako Partner. Klient może przeglądać status, dodawać komentarze i zdjęcia.",
    category: "Funkcje",
  },
  {
    question: "Czy mogę zarządzać magazynem?",
    answer:
      "Tak. Moduł magazynu pozwala śledzić pozycje, stany, zdjęcia, ceny i dostawców. Każdy wydatek z magazynu może być przypisany do projektu. Dziennik aktywności pokazuje kto co pobrał. W przyszłości dodamy alerty o niskim stanie i skanowanie QR/kodów.",
    category: "Funkcje",
  },
  {
    question: "Czy mogę zarządzać uprawnieniami pracowników?",
    answer:
      "Tak. Finito oferuje granularne uprawnienia — 10 checkboxów per pracownik. Możesz tworzyć grupy (np. Brygadziści, Biuro, Pracownicy, Kierownictwo) i precyzyjnie kontrolować kto widzi faktury, klientów, ceny, magazyn czy aktywność.",
    category: "Funkcje",
  },
  {
    question: "Czym jest Marketplace?",
    answer:
      "Marketplace (Targowisko) to unikalna funkcja — firmy mogą zlecać sobie nawzajem projekty, których nie zdążą wykonać. Działa jak wewnętrzna giełda zleceń. Funkcja aktywna w Szwajcarii, planowane uruchomienie w Polsce.",
    category: "Funkcje",
  },
  {
    question: "Czy mogę poprosić o dodatkowe funkcje?",
    answer:
      "Tak! Rozwijamy Finito Pro na podstawie opinii użytkowników. Podziel się swoimi potrzebami przez czat lub email. Firmy 50+ użytkowników mogą zlecić indywidualne automatyzacje — wizualny builder drag & drop z triggerami i akcjami.",
    category: "Funkcje",
  },
  {
    question: "Czy jest integracja z innymi narzędziami?",
    answer:
      "Tak. Finito Pro oferuje otwarte REST API do podłączenia zewnętrznych programów. Wspieramy integrację z KSeF, formularzami stron www i systemami księgowymi. Pobieranie rachunków z emaila automatycznie dodaje je jako koszty. Integracja z Zapier i Make jest w planach.",
    category: "Funkcje",
  },
  // BEZPIECZEŃSTWO
  {
    question: "Gdzie przechowywane są moje dane?",
    answer:
      "Wszystkie dane przechowywane są na serwerach w Szwajcarii — w 2 lokalizacjach z automatycznymi kopiami zapasowymi. Szyfrowanie na poziomie kont bankowych. Szwajcaria zapewnia odpowiedni poziom ochrony danych zgodnie z decyzją Komisji Europejskiej.",
    category: "Bezpieczeństwo",
  },
  {
    question: "Czy Finito Pro jest zgodne z RODO?",
    answer:
      "Tak. Finito Pro jest w pełni zgodne z RODO. Administratorem danych użytkowników z Polski jest OCTOLABS Sp. z o.o. (Warszawa). Pełna polityka prywatności dostępna jest na stronie finitopro.pl/prywatnosc.",
    category: "Bezpieczeństwo",
  },
  {
    question: "Jak długo przechowywane są moje dane?",
    answer:
      "Dane konta przechowywane są przez czas trwania umowy + 30 dni po usunięciu. Dane rozliczeniowe — 5 lat (obowiązek podatkowy). Na życzenie eksportujemy wszystkie dane w formacie Excel. Brak vendor lock-in.",
    category: "Bezpieczeństwo",
  },
  {
    question: "Czy mogę wyeksportować swoje dane?",
    answer:
      "Tak. Na życzenie eksportujemy wszystkie Twoje dane w formacie Excel — klienci, projekty, faktury, czas pracy. Nie ma vendor lock-in. Twoje dane należą do Ciebie.",
    category: "Bezpieczeństwo",
  },
  // WSPARCIE
  {
    question: "Jak mogę skontaktować się ze wsparciem?",
    answer:
      "Przez czat w aplikacji lub email kontakt@finitopro.pl. Wiadomości trafiają bezpośrednio do działu programistów — nie do call center. Czas odpowiedzi: max 12–24 godziny. Firmy 50+ użytkowników mają dostęp do dedykowanego opiekuna.",
    category: "Wsparcie",
  },
  {
    question: "Czy pomagacie z migracją danych?",
    answer:
      "Tak! Pomagamy przenieść dane z Excela, papierowych dokumentów lub innego systemu. Migracja klientów, cennika usług i historii jest po naszej stronie. Czas migracji zależy od ilości danych — zazwyczaj kilka dni.",
    category: "Wsparcie",
  },
  {
    question: "Czy oferujecie szkolenia?",
    answer:
      "Tak. Dla planu MŚP oferujemy szkolenie produktowe online. Dla firm 50+ użytkowników — dedykowane szkolenia zespołowe (online lub na miejscu). Dodatkowo każdy partner otrzymuje demo konto z polskimi danymi do prezentacji.",
    category: "Wsparcie",
  },
  {
    question: "W jakich językach dostępne jest Finito Pro?",
    answer:
      "Finito Pro dostępne jest w 8 językach: polski, niemiecki, angielski, hiszpański, włoski, francuski, portugalski i serbski. Każdy użytkownik może wybrać swój język — przydatne gdy zatrudniasz obcokrajowców.",
    category: "Wsparcie",
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

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center gap-6 sticky top-32"
          >
            {/* Contact support */}
            <div className="w-full bg-primary-50 rounded-2xl p-6 border border-primary-100 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                Potrzebujesz pomocy?
              </h3>
              <p className="text-xs text-neutral-500 mb-3">
                Nasz zespół wsparcia chętnie Ci pomoże — odpowiedź w ciągu 24h.
              </p>
              <a
                href="mailto:kontakt@finitopro.pl"
                className="text-xs font-medium text-primary-600 hover:underline"
              >
                kontakt@finitopro.pl
              </a>
            </div>

            {/* Quick stats */}
            <div className="w-full bg-white rounded-2xl p-6 border border-neutral-200 text-center">
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary-600">24</div>
                  <div className="text-xs text-neutral-500">pytań i odpowiedzi</div>
                </div>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="text-2xl font-bold text-primary-600">13</div>
                  <div className="text-xs text-neutral-500">modułów w jednej cenie</div>
                </div>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="text-2xl font-bold text-primary-600">14 dni</div>
                  <div className="text-xs text-neutral-500">darmowego testu</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://app.finitopro.pl/register"
              className="w-full block text-center py-3.5 px-6 bg-gradient-to-r from-primary-500 to-accent-400 text-white text-sm font-semibold rounded-xl shadow-glow-sm hover:shadow-glow transition-all"
            >
              Wypróbuj za darmo →
            </a>
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
