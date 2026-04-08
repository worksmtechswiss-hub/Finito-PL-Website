"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Administrator danych",
    content: `Administratorem danych osobowych przetwarzanych za pośrednictwem niniejszej strony internetowej jest:

Finito Pro
Szwajcaria
E-mail: hello@finitopro.ch
Strona internetowa: www.finitopro.ch`,
  },
  {
    title: "2. Gromadzenie i przechowywanie danych osobowych",
    content: `Podczas odwiedzania naszej strony internetowej automatycznie gromadzone są następujące dane:

- Adres IP (zanonimizowany)
- Data i godzina dostępu
- Odwiedzone strony i pliki
- Adres URL strony odsyłającej
- Używana przeglądarka i system operacyjny

Dane te są wykorzystywane w celu technicznego udostępniania strony internetowej oraz doskonalenia naszej oferty. Nie następuje przyporządkowanie do poszczególnych osób.`,
  },
  {
    title: "3. Korzystanie z oprogramowania Finito Pro",
    content: `Podczas rejestracji i korzystania z Finito Pro gromadzimy:

- Imię i nazwisko
- Adres e-mail
- Nazwę i adres firmy
- Numer telefonu (opcjonalnie)
- Dane płatnicze (w przypadku płatnych subskrypcji)

Dane te są niezbędne do realizacji umowy i świadczenia naszej usługi (art. 6 ust. 1 lit. b RODO).`,
  },
  {
    title: "4. Przechowywanie danych i bezpieczeństwo",
    content: `Wszystkie dane są przechowywane na serwerach w Szwajcarii i chronione za pomocą nowoczesnych technologii szyfrowania.

- Okres przechowywania: dane biznesowe są przechowywane do 25 lat (ustawowy obowiązek przechowywania)
- Szyfrowanie: szyfrowanie TLS/SSL podczas przesyłania danych
- Kontrola dostępu: wielopoziomowy system uprawnień
- Kopie zapasowe: regularne szyfrowane kopie zapasowe na redundantnych systemach`,
  },
  {
    title: "5. Pliki cookie i śledzenie",
    content: `Nasza strona internetowa wykorzystuje pliki cookie w celu poprawy doświadczeń użytkownika:

- Niezbędne pliki cookie: wymagane do podstawowego funkcjonowania strony
- Analityczne pliki cookie: Google Analytics (z anonimizacją IP) w celu doskonalenia naszej oferty
- Marketingowe pliki cookie: ustawiane wyłącznie za Państwa wyraźną zgodą

Pliki cookie można w każdej chwili dezaktywować w ustawieniach przeglądarki.`,
  },
  {
    title: "6. Przekazywanie danych osobom trzecim",
    content: `Przekazujemy Państwa dane osobowe wyłącznie w przypadku, gdy:

- Wyrazili Państwo na to wyraźną zgodę
- Jest to niezbędne do realizacji umowy
- Istnieje obowiązek prawny

Korzystamy z następujących usługodawców:
- Dostawca hostingu (szwajcarskie centra danych)
- Operator płatności (do obsługi opłat abonamentowych)
- Usługa poczty elektronicznej (do wiadomości transakcyjnych)

Wszyscy usługodawcy są zobowiązani umownie do przestrzegania przepisów o ochronie danych.`,
  },
  {
    title: "7. Państwa prawa",
    content: `Przysługują Państwu następujące prawa w odniesieniu do Państwa danych osobowych:

- Prawo dostępu do danych (art. 15 RODO)
- Prawo do sprostowania danych (art. 16 RODO)
- Prawo do usunięcia danych (art. 17 RODO)
- Prawo do ograniczenia przetwarzania (art. 18 RODO)
- Prawo do przenoszenia danych (art. 20 RODO)
- Prawo do sprzeciwu (art. 21 RODO)

W celu skorzystania z przysługujących Państwu praw prosimy o kontakt pod adresem hello@finitopro.ch.`,
  },
  {
    title: "8. Zmiany niniejszej polityki prywatności",
    content: `Zastrzegamy sobie prawo do dostosowania niniejszej polityki prywatności w celu uwzględnienia zmian stanu prawnego lub zmian w zakresie naszych usług. Aktualną wersję znajdą Państwo zawsze na niniejszej stronie.

Stan na: marzec 2026`,
  },
];

export function DatenschutzContent() {
  return (
    <>
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
              <span className="gradient-text-animated">Polityka prywatności</span>
            </h1>
            <p className="text-lg text-white/60">
              Państwa dane są u nas bezpieczne — przechowywane w Szwajcarii,
              chronione zgodnie z najwyższymi standardami.
            </p>
          </motion.div>
        </div>

      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-neutral-600 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
