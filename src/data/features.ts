export interface Feature {
  id: string;
  icon: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  slug: string;
  bulletsDe: string[];
  bulletsEn: string[];
}

export const features: Feature[] = [
  {
    id: 'rechnungen',
    icon: 'FileText',
    titleDe: 'Faktury QR',
    titleEn: 'Faktury QR',
    descriptionDe:
      'Twórz profesjonalne szwajcarskie faktury QR w kilka sekund. Automatyczne obliczanie VAT, przypomnienia o platnosci i bezproblemowy eksport do ksiegowosci.',
    descriptionEn:
      'Twórz profesjonalne szwajcarskie faktury QR w kilka sekund. Automatyczne obliczanie VAT, przypomnienia o platnosci i bezproblemowy eksport do ksiegowosci.',
    slug: 'rechnungen',
    bulletsDe: [
      'Szwajcarskie faktury QR zgodne ze standardem ISO 20022',
      'Automatyczne obliczanie VAT (7,7% / 2,5% / 0%)',
      'Przypomnienia o platnosci e-mailem lub poczta',
      'Eksport jako PDF lub bezposrednio do oprogramowania ksiegowego',
      'Zarzadzanie platnoscia czesciowa i ratalna',
      'Automatyczne uzgadnianie platnosci z kontami bankowymi',
    ],
    bulletsEn: [
      'Szwajcarskie faktury QR zgodne ze standardem ISO 20022',
      'Automatyczne obliczanie VAT (7,7% / 2,5% / 0%)',
      'Przypomnienia o platnosci e-mailem lub poczta',
      'Eksport jako PDF lub bezposrednio do oprogramowania ksiegowego',
      'Zarzadzanie platnoscia czesciowa i ratalna',
      'Automatyczne uzgadnianie platnosci z kontami bankowymi',
    ],
  },
  {
    id: 'crm',
    icon: 'Users',
    titleDe: 'Zarzadzanie klientami',
    titleEn: 'Zarzadzanie klientami',
    descriptionDe:
      'Wszystkie dane klientów w jednym miejscu. Historia kontaktów, powtarzajace sie zlecenia i indywidualne notatki usprawniaja wspólprace.',
    descriptionEn:
      'Wszystkie dane klientów w jednym miejscu. Historia kontaktów, powtarzajace sie zlecenia i indywidualne notatki usprawniaja wspólprace.',
    slug: 'crm',
    bulletsDe: [
      'Centralne zarzadzanie kontaktami z funkcja wyszukiwania',
      'Pelna historia klienta ze wszystkimi projektami i fakturami',
      'Automatyczne planowanie powtarzajacych sie zlecen',
      'Indywidualne notatki i dokumenty dla kazdego klienta',
      'Kategorie klientów i tagi do segmentacji',
      'Import/eksport danych kontaktowych (CSV, vCard)',
    ],
    bulletsEn: [
      'Centralne zarzadzanie kontaktami z funkcja wyszukiwania',
      'Pelna historia klienta ze wszystkimi projektami i fakturami',
      'Automatyczne planowanie powtarzajacych sie zlecen',
      'Indywidualne notatki i dokumenty dla kazdego klienta',
      'Kategorie klientów i tagi do segmentacji',
      'Import/eksport danych kontaktowych (CSV, vCard)',
    ],
  },
  {
    id: 'projektmanagement',
    icon: 'FolderKanban',
    titleDe: 'Zarzadzanie projektami',
    titleEn: 'Zarzadzanie projektami',
    descriptionDe:
      'Zarzadzaj wszystkimi projektami mobilnie. Przydzielaj zadania, twórz dokumentacje fotograficzna i koordynuj swój zespól w dowolnym momencie.',
    descriptionEn:
      'Zarzadzaj wszystkimi projektami mobilnie. Przydzielaj zadania, twórz dokumentacje fotograficzna i koordynuj swój zespól w dowolnym momencie.',
    slug: 'projektmanagement',
    bulletsDe: [
      'Mobilne zarzadzanie zadaniami ze sledzeniem statusu',
      'Dokumentacja fotograficzna bezposrednio w projekcie',
      'Koordynacja zespolu z aktualizacjami w czasie rzeczywistym',
      'Szablony projektów dla powtarzajacych sie zlecen',
      'Planowanie zadan typu drag-and-drop w kalendarzu',
      'Automatyczne powiadomienia o zmianach',
    ],
    bulletsEn: [
      'Mobilne zarzadzanie zadaniami ze sledzeniem statusu',
      'Dokumentacja fotograficzna bezposrednio w projekcie',
      'Koordynacja zespolu z aktualizacjami w czasie rzeczywistym',
      'Szablony projektów dla powtarzajacych sie zlecen',
      'Planowanie zadan typu drag-and-drop w kalendarzu',
      'Automatyczne powiadomienia o zmianach',
    ],
  },
  {
    id: 'zeiterfassung',
    icon: 'Clock',
    titleDe: 'Rejestracja czasu pracy',
    titleEn: 'Rejestracja czasu pracy',
    descriptionDe:
      'Projektowa rejestracja czasu pracy jednym kliknieciem. Raporty miesieczne, sledzenie nadgodzin i bezposredni eksport do listy plac.',
    descriptionEn:
      'Projektowa rejestracja czasu pracy jednym kliknieciem. Raporty miesieczne, sledzenie nadgodzin i bezposredni eksport do listy plac.',
    slug: 'zeiterfassung',
    bulletsDe: [
      'Rejestracja czasu pracy jednym kliknieciem dla projektu i zadania',
      'Automatyczne raporty miesieczne na pracownika',
      'Sledzenie nadgodzin z porównaniem plan/wykonanie',
      'Eksport do listy plac (CSV, PDF)',
      'Rejestracja oparta na GPS na placu budowy',
      'Oddzielna rejestracja przerw i czasu dojazdu',
    ],
    bulletsEn: [
      'Rejestracja czasu pracy jednym kliknieciem dla projektu i zadania',
      'Automatyczne raporty miesieczne na pracownika',
      'Sledzenie nadgodzin z porównaniem plan/wykonanie',
      'Eksport do listy plac (CSV, PDF)',
      'Rejestracja oparta na GPS na placu budowy',
      'Oddzielna rejestracja przerw i czasu dojazdu',
    ],
  },
  {
    id: 'offerten',
    icon: 'Send',
    titleDe: 'Oferty',
    titleEn: 'Oferty',
    descriptionDe:
      'Szybkie cyfrowe oferty z zapisanymi katalogami uslug. Jednym kliknieciem zamien oferte w zlecenie.',
    descriptionEn:
      'Szybkie cyfrowe oferty z zapisanymi katalogami uslug. Jednym kliknieciem zamien oferte w zlecenie.',
    slug: 'offerten',
    bulletsDe: [
      'Zapisane katalogi uslug do szybkiego tworzenia',
      'Profesjonalne oferty w wlasnym designie firmy',
      'Konwersja oferty na zlecenie jednym kliknieciem',
      'Opcjonalne i alternatywne pozycje',
      'Cyfrowy podpis klienta',
      'Automatyczne sledzenie otwartych ofert',
    ],
    bulletsEn: [
      'Zapisane katalogi uslug do szybkiego tworzenia',
      'Profesjonalne oferty w wlasnym designie firmy',
      'Konwersja oferty na zlecenie jednym kliknieciem',
      'Opcjonalne i alternatywne pozycje',
      'Cyfrowy podpis klienta',
      'Automatyczne sledzenie otwartych ofert',
    ],
  },
  {
    id: 'dashboard',
    icon: 'LayoutDashboard',
    titleDe: 'Dashboard',
    titleEn: 'Dashboard',
    descriptionDe:
      'Wszystkie wazne wskazniki na pierwszy rzut oka. Finansowe KPI, aktywne projekty, wykorzystanie pracowników i raporty roczne.',
    descriptionEn:
      'Wszystkie wazne wskazniki na pierwszy rzut oka. Finansowe KPI, aktywne projekty, wykorzystanie pracowników i raporty roczne.',
    slug: 'dashboard',
    bulletsDe: [
      'Finansowe KPI: przychód, otwarte faktury, przeplywy pieniezne',
      'Aktywne projekty ze wskaznikiem postepu',
      'Wykorzystanie pracowników w czasie rzeczywistym',
      'Raporty roczne i miesieczne w formacie PDF',
      'Indywidualne widgety i filtry',
      'Porównanie z analogicznym okresem roku poprzedniego',
    ],
    bulletsEn: [
      'Finansowe KPI: przychód, otwarte faktury, przeplywy pieniezne',
      'Aktywne projekty ze wskaznikiem postepu',
      'Wykorzystanie pracowników w czasie rzeczywistym',
      'Raporty roczne i miesieczne w formacie PDF',
      'Indywidualne widgety i filtry',
      'Porównanie z analogicznym okresem roku poprzedniego',
    ],
  },
  {
    id: 'ferienmanagement',
    icon: 'Palmtree',
    titleDe: 'Zarzadzanie urlopami',
    titleEn: 'Zarzadzanie urlopami',
    descriptionDe:
      'Mobilne wnioski urlopowe, przeglad pozostalych dni i proces zatwierdzania. Dzieki kalendarzowi zespolu nie bedzie juz waskich gardel.',
    descriptionEn:
      'Mobilne wnioski urlopowe, przeglad pozostalych dni i proces zatwierdzania. Dzieki kalendarzowi zespolu nie bedzie juz waskich gardel.',
    slug: 'ferienmanagement',
    bulletsDe: [
      'Mobilne wnioski urlopowe ze smartfona',
      'Przeglad pozostalych dni na pracownika',
      'Proces zatwierdzania dla przelozonych',
      'Kalendarz zespolu w celu unikniecia waskich gardel',
      'Automatyczne obliczanie przyslugujacego urlopu',
      'Wstepnie skonfigurowane dni swiateczne i dni pomostowe',
    ],
    bulletsEn: [
      'Mobilne wnioski urlopowe ze smartfona',
      'Przeglad pozostalych dni na pracownika',
      'Proces zatwierdzania dla przelozonych',
      'Kalendarz zespolu w celu unikniecia waskich gardel',
      'Automatyczne obliczanie przyslugujacego urlopu',
      'Wstepnie skonfigurowane dni swiateczne i dni pomostowe',
    ],
  },
  {
    id: 'foto-dokumentation',
    icon: 'Camera',
    titleDe: 'Dokumentacja fotograficzna',
    titleEn: 'Dokumentacja fotograficzna',
    descriptionDe:
      'Zdjecia przed/po z automatycznym przypisaniem do projektu. Doskonale dowody jakosci dla klientów i ubezpieczycieli.',
    descriptionEn:
      'Zdjecia przed/po z automatycznym przypisaniem do projektu. Doskonale dowody jakosci dla klientów i ubezpieczycieli.',
    slug: 'foto-dokumentation',
    bulletsDe: [
      'Zdjecia przed/po bezposrednio w projekcie',
      'Automatyczne przypisanie do wlasciwego projektu',
      'Dowody jakosci dla klientów i ubezpieczycieli',
      'Znacznik czasu i dane GPS dla kazdego zdjecia',
      'Nieograniczona przestrzen na zdjecia',
      'Przesylanie zdjec bezposrednio ze smartfona',
    ],
    bulletsEn: [
      'Zdjecia przed/po bezposrednio w projekcie',
      'Automatyczne przypisanie do wlasciwego projektu',
      'Dowody jakosci dla klientów i ubezpieczycieli',
      'Znacznik czasu i dane GPS dla kazdego zdjecia',
      'Nieograniczona przestrzen na zdjecia',
      'Przesylanie zdjec bezposrednio ze smartfona',
    ],
  },
  {
    id: 'lagerverwaltung',
    icon: 'Warehouse',
    titleDe: 'Zarzadzanie magazynem',
    titleEn: 'Zarzadzanie magazynem',
    descriptionDe:
      'Zarzadzanie materialami i narzedziami z automatycznym odliczaniem na projekt. Kontroluj stan magazynowy w kazdej chwili.',
    descriptionEn:
      'Zarzadzanie materialami i narzedziami z automatycznym odliczaniem na projekt. Kontroluj stan magazynowy w kazdej chwili.',
    slug: 'lagerverwaltung',
    bulletsDe: [
      'Zarzadzanie materialami i narzedziami w jednym miejscu',
      'Automatyczne odliczanie na projekt',
      'Przeglad stanów magazynowych w czasie rzeczywistym',
      'Ostrzezenia o minimalnym stanie przy niskich zapasach',
      'Powiazanie z dostawcami w celu szybkiego ponownego zamówienia',
      'Skaner kodów kreskowych do szybkiej rejestracji',
    ],
    bulletsEn: [
      'Zarzadzanie materialami i narzedziami w jednym miejscu',
      'Automatyczne odliczanie na projekt',
      'Przeglad stanów magazynowych w czasie rzeczywistym',
      'Ostrzezenia o minimalnym stanie przy niskich zapasach',
      'Powiazanie z dostawcami w celu szybkiego ponownego zamówienia',
      'Skaner kodów kreskowych do szybkiej rejestracji',
    ],
  },
  {
    id: 'buchhaltung',
    icon: 'Calculator',
    titleDe: 'Ksiegowosc',
    titleEn: 'Ksiegowosc',
    descriptionDe:
      'Zarzadzaj przychodami i wydatkami, kontroluj koszty i eksportuj dane dla swojego ksiegowego. Wszystkie dane bezpiecznie na serwerach w Szwajcarii.',
    descriptionEn:
      'Zarzadzaj przychodami i wydatkami, kontroluj koszty i eksportuj dane dla swojego ksiegowego. Wszystkie dane bezpiecznie na serwerach w Szwajcarii.',
    slug: 'buchhaltung',
    bulletsDe: [
      'Przejrzyste zarzadzanie przychodami i wydatkami',
      'Zarzadzanie kosztami na projekt i klienta',
      'Eksport dla ksiegowego (CSV, PDF)',
      'Wszystkie dane bezpiecznie na serwerach w Szwajcarii',
      'Automatyczna kategoryzacja dokumentów',
      'Rozliczenie VAT przygotowane dla ESTV',
    ],
    bulletsEn: [
      'Przejrzyste zarzadzanie przychodami i wydatkami',
      'Zarzadzanie kosztami na projekt i klienta',
      'Eksport dla ksiegowego (CSV, PDF)',
      'Wszystkie dane bezpiecznie na serwerach w Szwajcarii',
      'Automatyczna kategoryzacja dokumentów',
      'Rozliczenie VAT przygotowane dla ESTV',
    ],
  },
  {
    id: 'mitarbeiter-app',
    icon: 'Smartphone',
    titleDe: 'Aplikacja pracownika',
    titleEn: 'Aplikacja pracownika',
    descriptionDe:
      'Przegladaj zadania, rejestruj czas pracy, przesylaj zdjecia i komunikuj sie z zespolem - wszystko ze smartfona.',
    descriptionEn:
      'Przegladaj zadania, rejestruj czas pracy, przesylaj zdjecia i komunikuj sie z zespolem - wszystko ze smartfona.',
    slug: 'mitarbeiter-app',
    bulletsDe: [
      'Zadania i plan dnia na smartfonie',
      'Rozpoczecie rejestracji czasu jednym kliknieciem',
      'Przesylanie zdjec i przypisywanie do projektu',
      'Komunikacja z biurem w czasie rzeczywistym',
      'Tryb offline dla placów budowy bez zasiegu',
      'Powiadomienia push przy nowych zadaniach',
    ],
    bulletsEn: [
      'Zadania i plan dnia na smartfonie',
      'Rozpoczecie rejestracji czasu jednym kliknieciem',
      'Przesylanie zdjec i przypisywanie do projektu',
      'Komunikacja z biurem w czasie rzeczywistym',
      'Tryb offline dla placów budowy bez zasiegu',
      'Powiadomienia push przy nowych zadaniach',
    ],
  },
  {
    id: 'kundenportal',
    icon: 'Globe',
    titleDe: 'Portal klienta',
    titleEn: 'Portal klienta',
    descriptionDe:
      'Udostepniaj postep projektu swoim klientom. Przejrzysta komunikacja i zdjecia postepu buduja zaufanie.',
    descriptionEn:
      'Udostepniaj postep projektu swoim klientom. Przejrzysta komunikacja i zdjecia postepu buduja zaufanie.',
    slug: 'kundenportal',
    bulletsDe: [
      'Udostepnianie postepu projektu klientom',
      'Przejrzysta komunikacja na wszystkich etapach',
      'Automatyczne udostepnianie zdjec z postepu prac',
      'Klienci moga cyfrowo zatwierdzac oferty',
      'Przegladanie faktur i dokumentów w portalu',
      'Nie wymaga instalacji aplikacji przez klienta',
    ],
    bulletsEn: [
      'Udostepnianie postepu projektu klientom',
      'Przejrzysta komunikacja na wszystkich etapach',
      'Automatyczne udostepnianie zdjec z postepu prac',
      'Klienci moga cyfrowo zatwierdzac oferty',
      'Przegladanie faktur i dokumentów w portalu',
      'Nie wymaga instalacji aplikacji przez klienta',
    ],
  },
  {
    id: 'service-abos',
    icon: 'RefreshCw',
    titleDe: 'Abonamenty serwisowe',
    titleEn: 'Abonamenty serwisowe',
    descriptionDe:
      'Zarzadzaj powtarzajacymi sie zleceniami z automatycznym tworzeniem projektów. Idealne do umów serwisowych i abonamentów.',
    descriptionEn:
      'Zarzadzaj powtarzajacymi sie zleceniami z automatycznym tworzeniem projektów. Idealne do umów serwisowych i abonamentów.',
    slug: 'service-abos',
    bulletsDe: [
      'Automatyczne zarzadzanie powtarzajacymi sie zleceniami',
      'Automatyczne tworzenie projektów wedlug harmonogramu',
      'Cyfrowe odwzorowanie umów serwisowych',
      'Przypomnienia o zalegajacych zleceniach serwisowych',
      'Automatyczne generowanie rozliczen',
      'Historia klienta ze wszystkimi zleceniami serwisowymi',
    ],
    bulletsEn: [
      'Automatyczne zarzadzanie powtarzajacymi sie zleceniami',
      'Automatyczne tworzenie projektów wedlug harmonogramu',
      'Cyfrowe odwzorowanie umów serwisowych',
      'Przypomnienia o zalegajacych zleceniach serwisowych',
      'Automatyczne generowanie rozliczen',
      'Historia klienta ze wszystkimi zleceniami serwisowymi',
    ],
  },
];
