"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Zakres obowiązywania",
    content: `Niniejsze Ogólne Warunki Umowy (OWU) obowiązują w odniesieniu do korzystania z platformy oprogramowania „Finito Pro" oraz wszystkich powiązanych usług. Rejestrując się lub korzystając z platformy, akceptują Państwo niniejsze OWU.`,
  },
  {
    title: "2. Przedmiot umowy",
    content: `Finito Pro udostępnia oparte na chmurze rozwiązanie typu Software-as-a-Service (SaaS), które wspiera MŚP w zarządzaniu projektami, klientami, fakturami, rejestracją czasu pracy oraz innymi procesami biznesowymi.`,
  },
  {
    title: "3. Rejestracja i prowadzenie konta",
    content: `- Rejestracja jest bezpłatna i obejmuje 30-dniowy okres próbny
- Są Państwo odpowiedzialni za prawidłowość podanych danych
- Dane logowania należy traktować jako poufne
- Każde konto może być używane wyłącznie przez jedną organizację
- Są Państwo odpowiedzialni za wszelkie działania podejmowane w ramach swojego konta`,
  },
  {
    title: "4. Zakres usług i dostępność",
    content: `- Zakres funkcji zależy od wybranej subskrypcji (Starter, MŚP, Duże firmy)
- Dokładamy starań, aby zapewnić dostępność na poziomie 99,5%
- Planowane prace konserwacyjne będą ogłaszane z wyprzedzeniem
- Zastrzegamy sobie prawo do dalszego rozwoju platformy i dostosowywania funkcji`,
  },
  {
    title: "5. Ceny i warunki płatności",
    content: `- Aktualne ceny znajdują się na naszej stronie z cennikiem
- Wszystkie ceny podane są w CHF i nie zawierają podatku VAT
- Faktury wystawiane są z góry w cyklu miesięcznym lub rocznym
- Płatności są wymagane w ciągu 30 dni
- W przypadku zwłoki w płatności zastrzegamy sobie prawo do ograniczenia dostępu`,
  },
  {
    title: "6. Warunki wypowiedzenia",
    content: `- Subskrypcję można wypowiedzieć w dowolnym momencie
- Wypowiedzenie staje się skuteczne z końcem bieżącego okresu rozliczeniowego
- Po wypowiedzeniu Państwa dane pozostają dostępne do eksportu przez 90 dni
- Plan Starter (bezpłatny) może zostać wypowiedziany w dowolnym momencie bez zachowania okresu wypowiedzenia`,
  },
  {
    title: "7. Ochrona danych i bezpieczeństwo danych",
    content: `- Wszystkie dane są przechowywane na serwerach w Szwajcarii
- Przestrzegamy szwajcarskiej ustawy o ochronie danych (DSG) oraz RODO
- Szczegółowe informacje znajdą Państwo w naszej odrębnej polityce prywatności
- Dane są przesyłane i przechowywane w formie zaszyfrowanej
- Regularne audyty bezpieczeństwa zapewniają ochronę Państwa danych`,
  },
  {
    title: "8. Własność intelektualna",
    content: `- Oprogramowanie, w tym kod, projekt graficzny i dokumentacja, stanowi własność Finito Pro
- Otrzymują Państwo niewyłączne, niezbywalne prawo do korzystania na czas trwania subskrypcji
- Państwa treści i dane pozostają Państwa własnością
- Udzielają nam Państwo prawa do przetwarzania Państwa danych w celu świadczenia usługi`,
  },
  {
    title: "9. Ograniczenie odpowiedzialności",
    content: `- Finito Pro nie ponosi odpowiedzialności za szkody pośrednie ani utracone zyski
- Odpowiedzialność jest ograniczona do kwoty opłat uiszczonych w ciągu ostatnich 12 miesięcy
- Nie ponosimy odpowiedzialności za utratę danych, o ile wykonywane są regularne kopie zapasowe
- Siła wyższa (klęski żywiołowe, awarie zasilania itp.) wyłącza odpowiedzialność`,
  },
  {
    title: "10. Zmiany OWU",
    content: `Zastrzegamy sobie prawo do zmiany niniejszych OWU w dowolnym momencie. Istotne zmiany będą ogłaszane z co najmniej 30-dniowym wyprzedzeniem drogą mailową. Dalsze korzystanie z usługi po wejściu zmian w życie jest równoznaczne z ich akceptacją.

Stan na: marzec 2026`,
  },
  {
    title: "11. Prawo właściwe i właściwość sądu",
    content: `Obowiązuje prawo szwajcarskie. Sądem właściwym jest sąd w Zurychu, Szwajcaria. W odniesieniu do konsumentów zastosowanie mają bezwzględnie obowiązujące przepisy państwa zamieszkania.`,
  },
];

export function AGBsContent() {
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
              <span className="gradient-text-animated">Ogólne Warunki Umowy</span>
            </h1>
            <p className="text-lg text-white/60">
              Warunki korzystania z platformy Finito Pro.
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
