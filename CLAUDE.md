@AGENTS.md

# Finito Pro — Polska Strona Internetowa

## Produkt
- **Finito Pro** — szwajcarski ERP/CRM SaaS dla firm usługowych i rzemieślniczych
- **Producent:** SM Tech GmbH, Szwajcaria
- **Przedstawiciel PL:** OCTOLABS Sp. z o.o., ul. Hoża 29, 00-521 Warszawa
- **Cena:** 100 PLN/użytkownik/miesiąc
- **Trial:** 14 dni za darmo, potem karta (model jak Netflix, Stripe)
- **Firmy:** 1–500 osób (focus na 2–50)
- **Branże:** 18 (malarze, elektrycy, hydraulicy, HVAC, stolarze, dekarze, facility, sprzątanie, ogrody, przeprowadzki, murarze, posadzkarze, rusztowania, architekci, agencje, instalatorzy, JDG, facility service)
- **Wdrożenie:** kilka dni (zależy od ilości danych do migracji — Finito zajmuje się migracją)
- **Języki:** 8 (PL, DE, EN, ES, IT, FR, PT, SR, AL)
- **Użytkownicy:** 200+ w Szwajcarii, start w Polsce (kilka firm testuje)

## 13 Modułów (w jednej cenie)
Dashboard KPI, Projekty, Faktury, Oferty, Czas pracy, CRM, Urlopy, Zdjęcia GPS, Magazyn, Księgowość, Apka mobilna, Portal klienta, Serwis

## Unikalne funkcje (których NIE MA konkurencja)
- **Marketplace (Targowisko):** firmy zlecają sobie nawzajem projekty przy nadmiarze pracy. Działa w Szwajcarii.
- **Builder automatyzacji:** wizualny drag & drop — triggery (Invoice Created, Webhook, Every Day) → akcje (Send Email, HTTP Request). Tylko panel admina.
- **Głosowe dodawanie zadań:** ikona mikrofonu — pracownik mówi zamiast pisać.
- **Skan rachunków:** zdjęcie rachunku → automatyczne dodanie jako koszt. Możliwość AI do kategoryzacji.
- **Rating Page:** po zakończeniu projektu wysyłka linku do oceny usługi przez klienta.
- **Multi-firma / Multi-oddział:** jedno konto → kilka firm, przełączanie bez wylogowywania, analiza rentowności per oddział.
- **Portal klienta:** 2 opcje — zakodowany link (bez logowania) lub pełny dostęp jako Partner (Share with Partners).
- **Granularne uprawnienia:** 10 checkboxów per pracownik, grupy (Brygadziści, Biuro, Pracownicy, Kierownictwo).
- **KSeF API:** własne rozwiązanie — automatyczne przesyłanie faktur i pobieranie kosztów, bez logowania na zewnętrzny portal.

## Architektura — jedno źródło danych (data lake)
Wszystkie moduły korzystają z jednej bazy danych. Ten sam klient widoczny w: CRM → Oferty → Projekty → Faktury → Dashboard. Pracownicy z Urlopów to ci sami co w Śledzeniu czasu i Aktywności. Zero ręcznego przepisywania, zero silosów.

## Aplikacja pracownika (mobile)
Responsywna web app. Dolna nawigacja: Projekty | ▶ Play (start/stop czasu) | Mój profil.
- Projekty: karty z klientem, adresem, zadaniami, "Szczegóły" + "Nawiguj" (GPS)
- Raporty: dodaj raport dziennie per zadanie (Od/Do + przerwa + notatki + zdjęcie)
- Urlopy: wnioski + zatwierdzenia + kalendarz
- Ograniczenia: Vacation / Sick Leave / Day Off

## Szczegóły projektu
Zakładki: Zadania, Raporty, Dokumenty (umowy, plany, protokoły, filmiki, PDF, JPG), Faktury, Aktywność, Komentarze.
Menu Opcje: Share with Partners, Rating Page, Utwórz fakturę, Edytuj, Usuń.

## Automatyzacje — cennik
- Indywidualna wycena — zależy od skomplikowania i użycia AI
- Firmy 50+ użytkowników: 2 automatyzacje bezpłatnie (bez AI, tylko server-side)
- Dodatkowa opłata miesięczna za automatyzacje, prowizja partnera naliczana indywidualnie

## Ustawienia (7 zakładek)
Dane firmy (logo, IBAN, VAT, "Dodaj partnera"/"Zarządzaj partnerami"), Wyświetlenia (wybór widocznych modułów), Zapytania (integracja z formularzami stron www, customowe statusy), Faktury (szablon PDF, numeracja, konto bankowe, waluta, termin płatności), Oferty (szablon PDF, numeracja, ważność), Urlopy (limity per pracownik, typy), Relations (partnerzy, multi-org), Plan płatności (subskrypcja Stripe)

## Bezpieczeństwo
- Szyfrowanie na poziomie kont bankowych w Szwajcarii
- Serwery w Szwajcarii — 2 lokalizacje z automatycznymi kopiami zapasowymi
- Zgodność z RODO
- Eksport danych na życzenie (format Excel)

## Wsparcie techniczne
- Chat w apce lub email
- Wiadomości trafiają do działu programistów
- Czas odpowiedzi: max 12–24h

## Integracje
- **KSeF:** własne API — faktury automatycznie do KSeF + koszty z KSeF
- **API:** otwarte REST API do podłączenia zewnętrznych programów
- **Zapytania:** integracja z formularzami stron www i systemami księgowymi
- **Email:** pobieranie rachunków z emaila → koszty (z opcją AI)

## Program partnerski
- **Prowizja rok 1:** 20–40% zysków netto (minus podatki)
- **Prowizja rok 2+:** 5% lifetime (dopóki klient zostaje)
- **Wymaganie:** posiadanie własnego konta Finito Pro
- **CTA:** kierować na rejestrację (app.finitopro.pl/register) lub kontakt (finitopro.pl/kontakt)
- **Zysk netto szacowany:** ~40 PLN/użytkownik/mies. (do obliczeń kalkulatora)
- **Prezentacja partnerska:** public/prezentacja-partnerska.html (16 slajdów)

## Konkurencja w Polsce (8 konkurentów — połączona analiza kwiecień 2026)

### Bezpośredni konkurenci ERP/CRM
- **Comarch ERP Optima** — lider PL 23,6%, 70 000+ klientów, 265+ PLN/user, UX 5/10, wdrożenie 2–8 tyg. z partnerem. Mocne: pełna księgowość, KSeF, duża sieć partnerów. Słabe: złożony interfejs, koszty modułów, zależność od partnera. Finito 13/13 vs Comarch 5/13 funkcji dla firm usługowych.
- **Enova365** — 17 000 klientów, 50+ modułów, 3 warianty (srebro/złoto/platyna), 200–500 PLN/user, pakiet Nowa Firma od 1 990 zł. Mocne: ogromna skalowalność, CRM, kadry, BI, produkcja. Słabe: wymaga partnera, wyższy próg wejścia. Finito 13/13 vs Enova 8/13.
- **Symfonia** — 40 000 klientów, desktop (on-premise), od ~200 zł/mies. + moduły, KSeF od 59 zł/pakiet. 30+ lat na rynku, silne FK i kadry. UX 4/10, brak mobile, brak AI, brak dokumentacji foto. Finito 13/13 vs Symfonia 5/13.

### Nowi/mniejsi konkurenci (analiza Izy, kwiecień 2026)
- **SAP Business One** — globalny ERP, od ~5 000 zł/user, wdrożenie 3–6 mies. Overkill dla MŚP usługowych. Finito 13/13 vs SAP 7/13.
- **IC Project** — polski PM/task manager, plan darmowy (Startup) + pełny ~50 zł/os./mies. Dobry do projektów biurowych (agencje, IT). Słaby: brak faktur KSeF, brak zleceń w terenie z mobilną dokumentacją. Finito 13/13 vs IC 6/13.
- **Mizzox** — cyfrowy asystent dla mikrofirm. Cennik: Free / Business 29 zł/mies. / Enterprise 119 zł/mies. AI-powered automatyzacja, rezerwacje online 24/7, KSeF. Słaby: brak zarządzania ekipami, brak czasu pracy, brak dokumentacji foto. Finito 13/13 vs Mizzox 5/13.
- **Tillio** — polski CRM/CXM, cennik na zapytanie. Mocny CRM z automatyzacjami, generowanie ofert i umów, dobry moduł projektowy. Słaby: brak operacyjnego ERP, brak dokumentacji foto, brak rozliczania czasu pracy. Finito 13/13 vs Tillio 7/13.

### Niszowi / inne segmenty
- **SCCOT** — 99 PLN/firma, tylko CPQ/ofertowanie (NIE ERP)
- IFS, Axians, ELO, e-MSI, Exant, Budoku — inne segmenty, nie konkurenci

### 13 kluczowych modułów — porównanie zbiorcze
| Moduł | Finito | Comarch | Enova | Symfonia | SAP | IC | Mizzox | Tillio |
|-------|--------|---------|-------|----------|-----|----|--------|--------|
| Oferty + auto VAT | ✓ | ◐ | ◐ | ◐ | ◐ | — | — | ◐ |
| Faktury + KSeF | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — |
| Projekty/zadania | ✓ | ◐ | ✓ | — | ✓ | ✓ | ◐ | ✓ |
| Kalendarz/planowanie | ✓ | ◐ | ✓ | — | ✓ | ✓ | ◐ | ✓ |
| Apka mobilna | ✓ | ◐ | ✓ | — | ✓ | ◐ | ◐ | ◐ |
| Dokumentacja foto | ✓ | — | — | — | — | — | — | — |
| CRM | ✓ | ✓ | ✓ | — | ✓ | ◐ | ◐ | ✓ |
| Czas pracy | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | ◐ |
| Dashboard/raporty | ✓ | ✓ | ✓ | ◐ | ✓ | ◐ | ◐ | ✓ |
| Chmura PL | ✓ | ◐ | ◐ | — | ◐ | — | ✓ | ✓ |
| PL interfejs + wsparcie | ✓ | ✓ | ✓ | ✓ | ◐ | ✓ | ✓ | ✓ |
| Wdrożenie bez partnera | ✓ | — | — | — | — | ✓ | ✓ | ✓ |
| Test bez karty | ✓ | — | — | — | — | ✓ | ✓ | ✓ |

### Luki produktowe Finito (gdzie konkurencja wygrywa)
1. Pełna księgowość (KH/KPiR) — NIE budujemy (za drogie, za skomplikowane)
2. Magazyn — MAMY bazę, brakuje: próg min + alert, auto-odjęcie, QR scan
3. Kadry — MAMY (urlopy, czas pracy), brakuje: generator umów, terminy BHP, eksport do Symfonia/Comarch HR
4. BI / zaawansowane raporty — brakuje: pulpit główny z KPI, konfigurowalne alerty, ranking rentowności
5. Weryfikacja NIP (GUS/MF biała lista) — QUICK WIN, 1–2 dni pracy
6. Bramki płatności / link to pay — Przelewy24 + Stripe, "Zapłać teraz" w fakturze
7. Multi-walutowość — faktury EUR/USD/CHF z kursem NBP
8. Transparentny cennik na stronie — lista funkcji per plan, toggle roczny, kalkulator
9. AI-asystent w interfejsie — nikt z konkurencji nie ma dla MŚP usługowych
10. Strona integracji z logotypami partnerów — KSeF, GUS, Przelewy24, iFirma, Google

### Prezentacje sprzedażowe
- **Prezentacja partnerska:** public/prezentacja-partnerska.html (16 slajdów — focus na prowizje)
- **Prezentacja sprzedażowa:** public/prezentacja-sprzedazowa.html (20 slajdów — pełna analiza 8 konkurentów + argumenty)

## Rynek polski
- 3,2 mln firm MŚP, 72% bez ERP, 87% nowych wdrożeń = SaaS
- KSeF 2026 wymusza digitalizację
- PARP 2026: 1,3 mld PLN na digitalizację MŚP

## WAŻNE — czego NIE pisać
- **NIE** pisać o Swiss QR-Code (tylko w Szwajcarii)
- **NIE** pisać o trybie offline (niestabilny)
- **NIE** podawać planu Starter jako darmowego
- **NIE** używać emaila partner@finitopro.pl (nie istnieje)
- **NIE** pisać "hosting w Szwajcarii" jako argument sprzedażowy dla PL (budzi pytania)

## Repo
- **Technologia:** Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion
- **Tłumaczenia:** src/messages/de.json (polskie teksty w kluczu "de" — defaultLocale="de")
- **Deploy:** Netlify (automatyczny po push na main)
- **Git author:** worksmtechswiss-hub <worksmtechswiss-hub@users.noreply.github.com>
