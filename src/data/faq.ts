export interface FaqEntry {
  id: string;
  questionDe: string;
  questionEn: string;
  answerDe: string;
  answerEn: string;
}

export const faqEntries: FaqEntry[] = [
  {
    id: 'kostenlose-testphase',
    questionDe: 'Czy jest darmowy okres próbny?',
    questionEn: 'Czy jest darmowy okres próbny?',
    answerDe:
      'Tak, możesz testować Finito Pro przez 14 dni za darmo i bez zobowiązań. Wszystkie funkcje pakietu MŚP są w pełni dostępne podczas okresu próbnego. Nie jest wymagana karta kredytowa, brak automatycznego przedłużenia.',
    answerEn:
      'Tak, możesz testować Finito Pro przez 14 dni za darmo i bez zobowiązań. Wszystkie funkcje pakietu MŚP są w pełni dostępne podczas okresu próbnego. Nie jest wymagana karta kredytowa, brak automatycznego przedłużenia.',
  },
  {
    id: 'kündigung',
    questionDe: 'Czy mogę zrezygnować w dowolnym momencie?',
    questionEn: 'Czy mogę zrezygnować w dowolnym momencie?',
    answerDe:
      'Tak, możesz zrezygnować z subskrypcji w dowolnym momencie. Nie ma minimalnego okresu umowy ani ukrytych kosztów. Po rezygnacji masz dostęp do wszystkich funkcji do końca opłaconego okresu. Swoje dane możesz wyeksportować w dowolnym momencie.',
    answerEn:
      'Tak, możesz zrezygnować z subskrypcji w dowolnym momencie. Nie ma minimalnego okresu umowy ani ukrytych kosztów. Po rezygnacji masz dostęp do wszystkich funkcji do końca opłaconego okresu. Swoje dane możesz wyeksportować w dowolnym momencie.',
  },
  {
    id: 'individuelle-funktionen',
    questionDe: 'Czy mogę zamówić indywidualne funkcje?',
    questionEn: 'Czy mogę zamówić indywidualne funkcje?',
    answerDe:
      'Tak, cieszymy się z Twoich opinii! Podziel się swoimi życzeniami za pomocą formularza opinii w aplikacji. Weryfikujemy każdą sugestię i często zgłaszane funkcje dodajemy do naszej mapy rozwoju. W pakiecie dla dużych firm indywidualne dostosowania mogą być wdrożone bezpośrednio.',
    answerEn:
      'Tak, cieszymy się z Twoich opinii! Podziel się swoimi życzeniami za pomocą formularza opinii w aplikacji. Weryfikujemy każdą sugestię i często zgłaszane funkcje dodajemy do naszej mapy rozwoju. W pakiecie dla dużych firm indywidualne dostosowania mogą być wdrożone bezpośrednio.',
  },
  {
    id: 'projektübersicht',
    questionDe: 'Jak mogę śledzić wszystkie projekty?',
    questionEn: 'Jak mogę śledzić wszystkie projekty?',
    answerDe:
      'Dashboard pokazuje wszystkie aktywne projekty ze wskaźnikiem postępu na pierwszy rzut oka. Dodatkowo dostępny jest oddzielny przegląd projektów z filtrami według statusu, priorytetu, klienta i okresu. Możesz przełączać między widokiem listy, kalendarza i tablicy.',
    answerEn:
      'Dashboard pokazuje wszystkie aktywne projekty ze wskaźnikiem postępu na pierwszy rzut oka. Dodatkowo dostępny jest oddzielny przegląd projektów z filtrami według statusu, priorytetu, klienta i okresu. Możesz przełączać między widokiem listy, kalendarza i tablicy.',
  },
  {
    id: 'datenspeicherung',
    questionDe: 'Jak długo przechowywane są moje dane?',
    questionEn: 'Jak długo przechowywane są moje dane?',
    answerDe:
      'Twoje dane są przechowywane w postaci zaszyfrowanej na serwerach w Szwajcarii przez co najmniej 25 lat. Jest to szczególnie ważne w przypadku gwarancji, roszczeń ubezpieczeniowych i ustawowych obowiązków przechowywania. Zawsze masz pełną kontrolę nad swoimi danymi i możesz je wyeksportować lub zlecić ich usunięcie.',
    answerEn:
      'Twoje dane są przechowywane w postaci zaszyfrowanej na serwerach w Szwajcarii przez co najmniej 25 lat. Jest to szczególnie ważne w przypadku gwarancji, roszczeń ubezpieczeniowych i ustawowych obowiązków przechowywania. Zawsze masz pełną kontrolę nad swoimi danymi i możesz je wyeksportować lub zlecić ich usunięcie.',
  },
  {
    id: 'mobile-version',
    questionDe: 'Czy istnieje wersja mobilna?',
    questionEn: 'Czy istnieje wersja mobilna?',
    answerDe:
      'Tak, Finito Pro działa na każdym smartfonie i tablecie. Aplikacja webowa jest w pełni responsywna i zoptymalizowana pod kątem użytkowania mobilnego. Twoi pracownicy mogą rejestrować czas pracy, przesyłać zdjęcia i zarządzać zadaniami - wszystko bezpośrednio ze smartfona, nawet bez połączenia z internetem dzięki trybowi offline.',
    answerEn:
      'Tak, Finito Pro działa na każdym smartfonie i tablecie. Aplikacja webowa jest w pełni responsywna i zoptymalizowana pod kątem użytkowania mobilnego. Twoi pracownicy mogą rejestrować czas pracy, przesyłać zdjęcia i zarządzać zadaniami - wszystko bezpośrednio ze smartfona, nawet bez połączenia z internetem dzięki trybowi offline.',
  },
  {
    id: 'rechnungen-erstellen',
    questionDe: 'Jak tworzyć faktury?',
    questionEn: 'Jak tworzyć faktury?',
    answerDe:
      'Faktury można tworzyć na dwa sposoby: automatycznie z ukończonym projektem lub zaakceptowaną ofertą jednym kliknięciem, lub ręcznie z dowolnymi pozycjami. Wszystkie faktury automatycznie zawierają szwajcarski kod QR do łatwej płatności. VAT jest obliczany automatycznie.',
    answerEn:
      'Faktury można tworzyć na dwa sposoby: automatycznie z ukończonym projektem lub zaakceptowaną ofertą jednym kliknięciem, lub ręcznie z dowolnymi pozycjami. Wszystkie faktury automatycznie zawierają szwajcarski kod QR do łatwej płatności. VAT jest obliczany automatycznie.',
  },
  {
    id: 'zahlungsmethoden',
    questionDe: 'Jakie metody płatności są akceptowane?',
    questionEn: 'Jakie metody płatności są akceptowane?',
    answerDe:
      'Akceptujemy karty kredytowe (Visa, Mastercard) oraz płatność na fakturę. Możesz wybrać między rozliczeniem miesięcznym a rocznym. Przy płatności rocznej otrzymujesz 10% rabatu. Faktura jest wystawiana na początku każdego miesiąca.',
    answerEn:
      'Akceptujemy karty kredytowe (Visa, Mastercard) oraz płatność na fakturę. Możesz wybrać między rozliczeniem miesięcznym a rocznym. Przy płatności rocznej otrzymujesz 10% rabatu. Faktura jest wystawiana na początku każdego miesiąca.',
  },
  {
    id: 'teammitglieder-rechte',
    questionDe: 'Czy mogę zapraszać członków zespołu z różnymi uprawnieniami?',
    questionEn: 'Czy mogę zapraszać członków zespołu z różnymi uprawnieniami?',
    answerDe:
      'Tak, możesz ustawić indywidualne prawa dostępu dla każdego członka zespołu. Od administratora z pełnymi uprawnieniami, przez kierowników projektów, aż po pracowników, którzy widzą tylko swoje zadania i rejestracje czasu. W ten sposób chronisz wrażliwe dane biznesowe i dajesz każdemu dokładnie takie uprawnienia, jakich potrzebuje.',
    answerEn:
      'Tak, możesz ustawić indywidualne prawa dostępu dla każdego członka zespołu. Od administratora z pełnymi uprawnieniami, przez kierowników projektów, aż po pracowników, którzy widzą tylko swoje zadania i rejestracje czasu. W ten sposób chronisz wrażliwe dane biznesowe i dajesz każdemu dokładnie takie uprawnienia, jakich potrzebuje.',
  },
  {
    id: 'integration-tools',
    questionDe: 'Czy Finito Pro można połączyć z innymi narzędziami?',
    questionEn: 'Czy Finito Pro można połączyć z innymi narzędziami?',
    answerDe:
      'Tak, Finito Pro oferuje API do integracji z innymi systemami. Standardowo możesz eksportować dane w popularnych formatach (CSV, PDF, JSON), które mogą być importowane przez większość systemów księgowych i ERP. W pakiecie dla dużych firm możliwe są indywidualne integracje.',
    answerEn:
      'Tak, Finito Pro oferuje API do integracji z innymi systemami. Standardowo możesz eksportować dane w popularnych formatach (CSV, PDF, JSON), które mogą być importowane przez większość systemów księgowych i ERP. W pakiecie dla dużych firm możliwe są indywidualne integracje.',
  },
  {
    id: 'technischer-support',
    questionDe: 'Jakie wsparcie techniczne jest dostępne?',
    questionEn: 'Jakie wsparcie techniczne jest dostępne?',
    answerDe:
      'Nasz zespół wsparcia jest dostępny przez e-mail i czat w aplikacji. W pakiecie MŚP otrzymujesz priorytetowe wsparcie z szybszym czasem odpowiedzi. W pakiecie dla dużych firm masz dedykowaną osobę kontaktową z gwarantowanym czasem reakcji zgodnie z SLA. Dodatkowo dostępna jest obszerna baza wiedzy z instrukcjami i filmami.',
    answerEn:
      'Nasz zespół wsparcia jest dostępny przez e-mail i czat w aplikacji. W pakiecie MŚP otrzymujesz priorytetowe wsparcie z szybszym czasem odpowiedzi. W pakiecie dla dużych firm masz dedykowaną osobę kontaktową z gwarantowanym czasem reakcji zgodnie z SLA. Dodatkowo dostępna jest obszerna baza wiedzy z instrukcjami i filmami.',
  },
  {
    id: 'wartungsvertraege',
    questionDe: 'Czy mogę zarządzać powtarzającymi się zleceniami konserwacyjnymi i serwisowymi?',
    questionEn: 'Czy mogę zarządzać powtarzającymi się zleceniami konserwacyjnymi i serwisowymi?',
    answerDe:
      'Tak, dzięki funkcji abonamentów serwisowych możesz automatyzować powtarzające się zlecenia. Zdefiniuj interwały (tygodniowo, miesięczne, kwartalne, roczne), a Finito Pro automatycznie tworzy odpowiednie projekty i zadania. W tym przypomnienia, automatyczne fakturowanie i kompletna dokumentacja wszystkich zleceń serwisowych.',
    answerEn:
      'Tak, dzięki funkcji abonamentów serwisowych możesz automatyzować powtarzające się zlecenia. Zdefiniuj interwały (tygodniowo, miesięczne, kwartalne, roczne), a Finito Pro automatycznie tworzy odpowiednie projekty i zadania. W tym przypomnienia, automatyczne fakturowanie i kompletna dokumentacja wszystkich zleceń serwisowych.',
  },
];
