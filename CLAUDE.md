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

## Konkurencja w Polsce
- **Comarch ERP Optima** — lider 23,6%, 265+ PLN/user, UX 5/10, wdrożenie 2–8 tyg.
- **Enova365** — 17 000 klientów, 200–500 PLN/user, słaby CRM
- **Symfonia** — 40 000 klientów, UX 4/10, desktop, brak AI, brak mobile
- **SCCOT** — 99 PLN/firma, tylko CPQ/ofertowanie (NIE ERP)
- IFS, Axians, ELO, e-MSI, Exant, Budoku — inne segmenty, nie konkurenci

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
