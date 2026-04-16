"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Administrator danych osobowych",
    content: `Administratorem Państwa danych osobowych jest:

OCTOLABS Spółka z ograniczoną odpowiedzialnością
ul. Hoża 29, 00-521 Warszawa
KRS: 0001185907 | NIP: 7011270907 | REGON: 542315362
E-mail: kontakt@finitopro.pl
Strona internetowa: www.finitopro.pl

Producentem oprogramowania Finito Pro jest SM Tech GmbH z siedzibą w Szwajcarii. OCTOLABS Sp. z o.o. pełni rolę przedstawiciela na rynku polskim i jest administratorem danych osobowych użytkowników z Polski.`,
  },
  {
    title: "2. Podstawy prawne przetwarzania danych",
    content: `Państwa dane osobowe przetwarzamy na podstawie:

- Art. 6 ust. 1 lit. a RODO — zgoda (np. newsletter, pliki cookie analityczne)
- Art. 6 ust. 1 lit. b RODO — wykonanie umowy lub podjęcie działań przed zawarciem umowy (rejestracja konta, świadczenie usługi Finito Pro)
- Art. 6 ust. 1 lit. c RODO — obowiązek prawny (np. dokumentacja podatkowa, KSeF)
- Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora (np. marketing bezpośredni, analityka, bezpieczeństwo)`,
  },
  {
    title: "3. Zakres gromadzonych danych",
    content: `A. Odwiedzanie strony internetowej finitopro.pl — automatycznie gromadzone są:
- Adres IP (zanonimizowany)
- Data i godzina dostępu
- Odwiedzone strony i pliki
- Adres URL strony odsyłającej
- Używana przeglądarka i system operacyjny

B. Rejestracja i korzystanie z Finito Pro — gromadzimy:
- Imię i nazwisko
- Adres e-mail
- Nazwę i adres firmy
- NIP
- Numer telefonu (opcjonalnie)
- Dane płatnicze (w przypadku płatnych subskrypcji — obsługiwane przez Stripe)

C. Formularz kontaktowy — gromadzimy:
- Imię i nazwisko
- Adres e-mail
- Treść wiadomości`,
  },
  {
    title: "4. Cele przetwarzania danych",
    content: `Państwa dane osobowe przetwarzamy w następujących celach:

- Świadczenie usługi Finito Pro (art. 6 ust. 1 lit. b RODO)
- Obsługa konta użytkownika i wsparcie techniczne
- Realizacja płatności i rozliczeń
- Wysyłka informacji handlowych (za zgodą — art. 6 ust. 1 lit. a RODO)
- Analiza statystyczna ruchu na stronie (prawnie uzasadniony interes)
- Zapewnienie bezpieczeństwa i zapobieganie nadużyciom
- Wypełnienie obowiązków prawnych (m.in. dokumentacja podatkowa)`,
  },
  {
    title: "5. Przechowywanie danych i bezpieczeństwo",
    content: `Dane użytkowników Finito Pro przechowywane są na serwerach w Szwajcarii (2 lokalizacje z automatycznymi kopiami zapasowymi). Szwajcaria zapewnia odpowiedni poziom ochrony danych osobowych zgodnie z decyzją Komisji Europejskiej.

Środki bezpieczeństwa:
- Szyfrowanie TLS/SSL podczas przesyłania danych
- Szyfrowanie danych w spoczynku na poziomie bankowym
- Wielopoziomowy system kontroli dostępu
- Regularne szyfrowane kopie zapasowe na redundantnych systemach
- Monitorowanie bezpieczeństwa 24/7

Okres przechowywania:
- Dane konta: przez czas trwania umowy + 30 dni po usunięciu konta
- Dane rozliczeniowe: 5 lat od końca roku podatkowego (obowiązek podatkowy)
- Dane z formularza kontaktowego: do 12 miesięcy od ostatniego kontaktu
- Dane analityczne: 26 miesięcy (Google Analytics)`,
  },
  {
    title: "6. Pliki cookie",
    content: `Nasza strona internetowa wykorzystuje pliki cookie:

A. Niezbędne pliki cookie — wymagane do funkcjonowania strony (nie wymagają zgody):
- Sesja użytkownika
- Preferencje plików cookie
- Zabezpieczenia CSRF

B. Analityczne pliki cookie — Google Analytics z anonimizacją IP (za zgodą):
- Analiza ruchu na stronie
- Statystyki odwiedzin
- Optymalizacja treści

C. Marketingowe pliki cookie — ustawiane wyłącznie za Państwa wyraźną zgodą

Zgodę na pliki cookie można wycofać w dowolnym momencie poprzez ustawienia przeglądarki lub baner cookie na stronie.`,
  },
  {
    title: "7. Przekazywanie danych podmiotom trzecim",
    content: `Państwa dane osobowe mogą być przekazywane następującym kategoriom odbiorców:

- SM Tech GmbH (Szwajcaria) — producent oprogramowania, przetwarzanie danych w ramach świadczenia usługi
- Stripe Inc. — obsługa płatności (dane płatnicze)
- Netlify Inc. — hosting strony internetowej
- Google LLC — usługi analityczne (Google Analytics z anonimizacją IP)

Przekazywanie danych do państw trzecich (poza EOG) odbywa się wyłącznie na podstawie:
- Decyzji Komisji Europejskiej o adekwatności (Szwajcaria)
- Standardowych klauzul umownych (USA — Stripe, Google, Netlify)

Nie sprzedajemy Państwa danych osobowych podmiotom trzecim.`,
  },
  {
    title: "8. Prawa osób, których dane dotyczą",
    content: `Na podstawie RODO przysługują Państwu następujące prawa:

- Prawo dostępu do danych (art. 15 RODO)
- Prawo do sprostowania danych (art. 16 RODO)
- Prawo do usunięcia danych — „prawo do bycia zapomnianym" (art. 17 RODO)
- Prawo do ograniczenia przetwarzania (art. 18 RODO)
- Prawo do przenoszenia danych (art. 20 RODO)
- Prawo do sprzeciwu wobec przetwarzania (art. 21 RODO)
- Prawo do cofnięcia zgody w dowolnym momencie (art. 7 ust. 3 RODO)

Aby skorzystać ze swoich praw, prosimy o kontakt: kontakt@finitopro.pl

Mają Państwo również prawo wniesienia skargi do organu nadzorczego:
Prezes Urzędu Ochrony Danych Osobowych (PUODO)
ul. Stawki 2, 00-193 Warszawa
www.uodo.gov.pl`,
  },
  {
    title: "9. Profilowanie i zautomatyzowane podejmowanie decyzji",
    content: `Nie podejmujemy wobec Państwa decyzji opierających się wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby skutki prawne lub w podobny sposób istotnie na Państwa wpływały.`,
  },
  {
    title: "10. Zmiany polityki prywatności",
    content: `Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatności w celu dostosowania jej do zmian przepisów prawa lub zakresu świadczonych usług. O istotnych zmianach poinformujemy za pośrednictwem strony internetowej lub poczty elektronicznej.

Aktualna wersja: kwiecień 2026`,
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
              Informacje o przetwarzaniu danych osobowych zgodnie z RODO.
              Administrator: OCTOLABS Sp. z o.o., Warszawa.
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
