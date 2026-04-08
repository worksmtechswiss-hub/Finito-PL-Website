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
      'Tak, mozesz testowac Finito Pro przez 14 dni za darmo i bez zobowiazan. Wszystkie funkcje pakietu MŚP sa w pelni dostepne podczas okresu próbnego. Nie jest wymagana karta kredytowa, brak automatycznego przedluzenia.',
    answerEn:
      'Tak, mozesz testowac Finito Pro przez 14 dni za darmo i bez zobowiazan. Wszystkie funkcje pakietu MŚP sa w pelni dostepne podczas okresu próbnego. Nie jest wymagana karta kredytowa, brak automatycznego przedluzenia.',
  },
  {
    id: 'kündigung',
    questionDe: 'Czy moge zrezygnowac w dowolnym momencie?',
    questionEn: 'Czy moge zrezygnowac w dowolnym momencie?',
    answerDe:
      'Tak, mozesz zrezygnowac z subskrypcji w dowolnym momencie. Nie ma minimalnego okresu umowy ani ukrytych kosztów. Po rezygnacji masz dostep do wszystkich funkcji do konca oplaconego okresu. Swoje dane mozesz wyeksportowac w dowolnym momencie.',
    answerEn:
      'Tak, mozesz zrezygnowac z subskrypcji w dowolnym momencie. Nie ma minimalnego okresu umowy ani ukrytych kosztów. Po rezygnacji masz dostep do wszystkich funkcji do konca oplaconego okresu. Swoje dane mozesz wyeksportowac w dowolnym momencie.',
  },
  {
    id: 'individuelle-funktionen',
    questionDe: 'Czy moge zamówic indywidualne funkcje?',
    questionEn: 'Czy moge zamówic indywidualne funkcje?',
    answerDe:
      'Tak, cieszymy sie z Twoich opinii! Podziel sie swoimi zyczeniami za pomoca formularza opinii w aplikacji. Weryfikujemy kazda sugestie i czesto zglaszane funkcje dodajemy do naszej mapy rozwoju. W pakiecie dla duzych firm indywidualne dostosowania moga byc wdrozone bezposrednio.',
    answerEn:
      'Tak, cieszymy sie z Twoich opinii! Podziel sie swoimi zyczeniami za pomoca formularza opinii w aplikacji. Weryfikujemy kazda sugestie i czesto zglaszane funkcje dodajemy do naszej mapy rozwoju. W pakiecie dla duzych firm indywidualne dostosowania moga byc wdrozone bezposrednio.',
  },
  {
    id: 'projektübersicht',
    questionDe: 'Jak moge sledzic wszystkie projekty?',
    questionEn: 'Jak moge sledzic wszystkie projekty?',
    answerDe:
      'Dashboard pokazuje wszystkie aktywne projekty ze wskaznikiem postepu na pierwszy rzut oka. Dodatkowo dostepny jest oddzielny przeglad projektów z filtrami wedlug statusu, priorytetu, klienta i okresu. Mozesz przelaczac miedzy widokiem listy, kalendarza i tablicy.',
    answerEn:
      'Dashboard pokazuje wszystkie aktywne projekty ze wskaznikiem postepu na pierwszy rzut oka. Dodatkowo dostepny jest oddzielny przeglad projektów z filtrami wedlug statusu, priorytetu, klienta i okresu. Mozesz przelaczac miedzy widokiem listy, kalendarza i tablicy.',
  },
  {
    id: 'datenspeicherung',
    questionDe: 'Jak dlugo przechowywane sa moje dane?',
    questionEn: 'Jak dlugo przechowywane sa moje dane?',
    answerDe:
      'Twoje dane sa przechowywane w postaci zaszyfrowanej na serwerach w Szwajcarii przez co najmniej 25 lat. Jest to szczególnie wazne w przypadku gwarancji, roszczen ubezpieczeniowych i ustawowych obowiazków przechowywania. Zawsze masz pelna kontrole nad swoimi danymi i mozesz je wyeksportowac lub zlecic ich usuniecie.',
    answerEn:
      'Twoje dane sa przechowywane w postaci zaszyfrowanej na serwerach w Szwajcarii przez co najmniej 25 lat. Jest to szczególnie wazne w przypadku gwarancji, roszczen ubezpieczeniowych i ustawowych obowiazków przechowywania. Zawsze masz pelna kontrole nad swoimi danymi i mozesz je wyeksportowac lub zlecic ich usuniecie.',
  },
  {
    id: 'mobile-version',
    questionDe: 'Czy istnieje wersja mobilna?',
    questionEn: 'Czy istnieje wersja mobilna?',
    answerDe:
      'Tak, Finito Pro dziala na kazdym smartfonie i tablecie. Aplikacja webowa jest w pelni responsywna i zoptymalizowana pod katem uzytkowania mobilnego. Twoi pracownicy moga rejestrowac czas pracy, przesylac zdjecia i zarzadzac zadaniami - wszystko bezposrednio ze smartfona, nawet bez polaczenia z internetem dzieki trybowi offline.',
    answerEn:
      'Tak, Finito Pro dziala na kazdym smartfonie i tablecie. Aplikacja webowa jest w pelni responsywna i zoptymalizowana pod katem uzytkowania mobilnego. Twoi pracownicy moga rejestrowac czas pracy, przesylac zdjecia i zarzadzac zadaniami - wszystko bezposrednio ze smartfona, nawet bez polaczenia z internetem dzieki trybowi offline.',
  },
  {
    id: 'rechnungen-erstellen',
    questionDe: 'Jak tworzyc faktury?',
    questionEn: 'Jak tworzyc faktury?',
    answerDe:
      'Faktury mozna tworzyc na dwa sposoby: automatycznie z ukonczonym projektem lub zaakceptowana oferta jednym kliknieciem, lub recznie z dowolnymi pozycjami. Wszystkie faktury automatycznie zawieraja szwajcarski kod QR do latwo platnosci. VAT jest obliczany automatycznie.',
    answerEn:
      'Faktury mozna tworzyc na dwa sposoby: automatycznie z ukonczonym projektem lub zaakceptowana oferta jednym kliknieciem, lub recznie z dowolnymi pozycjami. Wszystkie faktury automatycznie zawieraja szwajcarski kod QR do latwo platnosci. VAT jest obliczany automatycznie.',
  },
  {
    id: 'zahlungsmethoden',
    questionDe: 'Jakie metody platnosci sa akceptowane?',
    questionEn: 'Jakie metody platnosci sa akceptowane?',
    answerDe:
      'Akceptujemy karty kredytowe (Visa, Mastercard) oraz platnosc na fakture. Mozesz wybrac miedzy rozliczeniem miesiecznym a rocznym. Przy platnosci rocznej otrzymujesz 10% rabatu. Faktura jest wystawiana na poczatku kazdego miesiaca.',
    answerEn:
      'Akceptujemy karty kredytowe (Visa, Mastercard) oraz platnosc na fakture. Mozesz wybrac miedzy rozliczeniem miesiecznym a rocznym. Przy platnosci rocznej otrzymujesz 10% rabatu. Faktura jest wystawiana na poczatku kazdego miesiaca.',
  },
  {
    id: 'teammitglieder-rechte',
    questionDe: 'Czy moge zapraszac czlonków zespolu z róznymi uprawnieniami?',
    questionEn: 'Czy moge zapraszac czlonków zespolu z róznymi uprawnieniami?',
    answerDe:
      'Tak, mozesz ustawic indywidualne prawa dostepu dla kazdego czlonka zespolu. Od administratora z pelnymi uprawnieniami, przez kierowników projektów, az po pracowników, którzy widza tylko swoje zadania i rejestracje czasu. W ten sposób chronisz wrazliwe dane biznesowe i dajesz kazdemu dokladnie takie uprawnienia, jakich potrzebuje.',
    answerEn:
      'Tak, mozesz ustawic indywidualne prawa dostepu dla kazdego czlonka zespolu. Od administratora z pelnymi uprawnieniami, przez kierowników projektów, az po pracowników, którzy widza tylko swoje zadania i rejestracje czasu. W ten sposób chronisz wrazliwe dane biznesowe i dajesz kazdemu dokladnie takie uprawnienia, jakich potrzebuje.',
  },
  {
    id: 'integration-tools',
    questionDe: 'Czy Finito Pro mozna polaczyc z innymi narzedziami?',
    questionEn: 'Czy Finito Pro mozna polaczyc z innymi narzedziami?',
    answerDe:
      'Tak, Finito Pro oferuje API do integracji z innymi systemami. Standardowo mozesz eksportowac dane w popularnych formatach (CSV, PDF, JSON), które moga byc importowane przez wiekszość systemów ksiegowych i ERP. W pakiecie dla duzych firm mozliwe sa indywidualne integracje.',
    answerEn:
      'Tak, Finito Pro oferuje API do integracji z innymi systemami. Standardowo mozesz eksportowac dane w popularnych formatach (CSV, PDF, JSON), które moga byc importowane przez wiekszość systemów ksiegowych i ERP. W pakiecie dla duzych firm mozliwe sa indywidualne integracje.',
  },
  {
    id: 'technischer-support',
    questionDe: 'Jakie wsparcie techniczne jest dostepne?',
    questionEn: 'Jakie wsparcie techniczne jest dostepne?',
    answerDe:
      'Nasz zespól wsparcia jest dostepny przez e-mail i czat w aplikacji. W pakiecie MŚP otrzymujesz priorytetowe wsparcie z szybszym czasem odpowiedzi. W pakiecie dla duzych firm masz dedykowana osobe kontaktowa z gwarantowanym czasem reakcji zgodnie z SLA. Dodatkowo dostepna jest obszerna baza wiedzy z instrukcjami i filmami.',
    answerEn:
      'Nasz zespól wsparcia jest dostepny przez e-mail i czat w aplikacji. W pakiecie MŚP otrzymujesz priorytetowe wsparcie z szybszym czasem odpowiedzi. W pakiecie dla duzych firm masz dedykowana osobe kontaktowa z gwarantowanym czasem reakcji zgodnie z SLA. Dodatkowo dostepna jest obszerna baza wiedzy z instrukcjami i filmami.',
  },
  {
    id: 'wartungsvertraege',
    questionDe: 'Czy moge zarzadzac powtarzajacymi sie zleceniami konserwacyjnymi i serwisowymi?',
    questionEn: 'Czy moge zarzadzac powtarzajacymi sie zleceniami konserwacyjnymi i serwisowymi?',
    answerDe:
      'Tak, dzieki funkcji abonamentów serwisowych mozesz automatyzowac powtarzajace sie zlecenia. Zdefiniuj interwaly (tygodniowo, miesieczne, kwartalne, roczne), a Finito Pro automatycznie tworzy odpowiednie projekty i zadania. W tym przypomnienia, automatyczne fakturowanie i kompletna dokumentacja wszystkich zlecen serwisowych.',
    answerEn:
      'Tak, dzieki funkcji abonamentów serwisowych mozesz automatyzowac powtarzajace sie zlecenia. Zdefiniuj interwaly (tygodniowo, miesieczne, kwartalne, roczne), a Finito Pro automatycznie tworzy odpowiednie projekty i zadania. W tym przypomnienia, automatyczne fakturowanie i kompletna dokumentacja wszystkich zlecen serwisowych.',
  },
];
