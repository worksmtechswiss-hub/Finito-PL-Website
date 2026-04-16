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
    id: 'faktury',
    icon: 'FileText',
    titleDe: 'Faktury i KSeF',
    titleEn: 'Faktury i KSeF',
    descriptionDe:
      'Twórz profesjonalne faktury w kilka sekund. Automatyczne naliczanie VAT, integracja z KSeF, przypomnienia o płatności i eksport do księgowości.',
    descriptionEn:
      'Twórz profesjonalne faktury w kilka sekund. Automatyczne naliczanie VAT, integracja z KSeF, przypomnienia o płatności i eksport do księgowości.',
    slug: 'faktury',
    bulletsDe: [
      'Faktury zgodne z KSeF i polskimi przepisami VAT',
      'Automatyczne obliczanie VAT (7,7% / 2,5% / 0%)',
      'Przypomnienia o płatności e-mailem lub pocztą',
      'Eksport jako PDF lub bezpośrednio do oprogramowania księgowego',
      'Zarządzanie płatnością częściową i ratalną',
      'Automatyczne uzgadnianie płatności z kontami bankowymi',
    ],
    bulletsEn: [
      'Faktury zgodne z KSeF i polskimi przepisami VAT',
      'Automatyczne obliczanie VAT (7,7% / 2,5% / 0%)',
      'Przypomnienia o płatności e-mailem lub pocztą',
      'Eksport jako PDF lub bezpośrednio do oprogramowania księgowego',
      'Zarządzanie płatnością częściową i ratalną',
      'Automatyczne uzgadnianie płatności z kontami bankowymi',
    ],
  },
  {
    id: 'crm',
    icon: 'Users',
    titleDe: 'Zarządzanie klientami',
    titleEn: 'Zarządzanie klientami',
    descriptionDe:
      'Wszystkie dane klientów w jednym miejscu. Historia kontaktów, powtarzające się zlecenia i indywidualne notatki usprawniają współpracę.',
    descriptionEn:
      'Wszystkie dane klientów w jednym miejscu. Historia kontaktów, powtarzające się zlecenia i indywidualne notatki usprawniają współpracę.',
    slug: 'crm',
    bulletsDe: [
      'Centralne zarządzanie kontaktami z funkcją wyszukiwania',
      'Pełna historia klienta ze wszystkimi projektami i fakturami',
      'Automatyczne planowanie powtarzających się zleceń',
      'Indywidualne notatki i dokumenty dla każdego klienta',
      'Kategorie klientów i tagi do segmentacji',
      'Import/eksport danych kontaktowych (CSV, vCard)',
    ],
    bulletsEn: [
      'Centralne zarządzanie kontaktami z funkcją wyszukiwania',
      'Pełna historia klienta ze wszystkimi projektami i fakturami',
      'Automatyczne planowanie powtarzających się zleceń',
      'Indywidualne notatki i dokumenty dla każdego klienta',
      'Kategorie klientów i tagi do segmentacji',
      'Import/eksport danych kontaktowych (CSV, vCard)',
    ],
  },
  {
    id: 'zarzadzanie-projektami',
    icon: 'FolderKanban',
    titleDe: 'Zarządzanie projektami',
    titleEn: 'Zarządzanie projektami',
    descriptionDe:
      'Zarządzaj wszystkimi projektami mobilnie. Przydzielaj zadania, twórz dokumentację fotograficzną i koordynuj swój zespół w dowolnym momencie.',
    descriptionEn:
      'Zarządzaj wszystkimi projektami mobilnie. Przydzielaj zadania, twórz dokumentację fotograficzną i koordynuj swój zespół w dowolnym momencie.',
    slug: 'zarzadzanie-projektami',
    bulletsDe: [
      'Mobilne zarządzanie zadaniami ze śledzeniem statusu',
      'Dokumentacja fotograficzna bezpośrednio w projekcie',
      'Koordynacja zespołu z aktualizacjami w czasie rzeczywistym',
      'Szablony projektów dla powtarzających się zleceń',
      'Planowanie zadań typu drag-and-drop w kalendarzu',
      'Automatyczne powiadomienia o zmianach',
    ],
    bulletsEn: [
      'Mobilne zarządzanie zadaniami ze śledzeniem statusu',
      'Dokumentacja fotograficzna bezpośrednio w projekcie',
      'Koordynacja zespołu z aktualizacjami w czasie rzeczywistym',
      'Szablony projektów dla powtarzających się zleceń',
      'Planowanie zadań typu drag-and-drop w kalendarzu',
      'Automatyczne powiadomienia o zmianach',
    ],
  },
  {
    id: 'ewidencja-czasu-pracy',
    icon: 'Clock',
    titleDe: 'Ewidencja czasu pracy',
    titleEn: 'Ewidencja czasu pracy',
    descriptionDe:
      'Projektowa ewidencja czasu pracy jednym kliknięciem. Raporty miesięczne, śledzenie nadgodzin i bezpośredni eksport do listy płac.',
    descriptionEn:
      'Projektowa ewidencja czasu pracy jednym kliknięciem. Raporty miesięczne, śledzenie nadgodzin i bezpośredni eksport do listy płac.',
    slug: 'ewidencja-czasu-pracy',
    bulletsDe: [
      'Ewidencja czasu pracy jednym kliknięciem dla projektu i zadania',
      'Automatyczne raporty miesięczne na pracownika',
      'Śledzenie nadgodzin z porównaniem plan/wykonanie',
      'Eksport do listy płac (CSV, PDF)',
      'Ewidencja oparta na GPS na placu budowy',
      'Oddzielna ewidencja przerw i czasu dojazdu',
    ],
    bulletsEn: [
      'Ewidencja czasu pracy jednym kliknięciem dla projektu i zadania',
      'Automatyczne raporty miesięczne na pracownika',
      'Śledzenie nadgodzin z porównaniem plan/wykonanie',
      'Eksport do listy płac (CSV, PDF)',
      'Ewidencja oparta na GPS na placu budowy',
      'Oddzielna ewidencja przerw i czasu dojazdu',
    ],
  },
  {
    id: 'oferty',
    icon: 'Send',
    titleDe: 'Oferty',
    titleEn: 'Oferty',
    descriptionDe:
      'Szybkie cyfrowe oferty z zapisanymi katalogami usług. Jednym kliknięciem zamień ofertę w zlecenie.',
    descriptionEn:
      'Szybkie cyfrowe oferty z zapisanymi katalogami usług. Jednym kliknięciem zamień ofertę w zlecenie.',
    slug: 'oferty',
    bulletsDe: [
      'Zapisane katalogi usług do szybkiego tworzenia',
      'Profesjonalne oferty we własnym designie firmy',
      'Konwersja oferty na zlecenie jednym kliknięciem',
      'Opcjonalne i alternatywne pozycje',
      'Cyfrowy podpis klienta',
      'Automatyczne śledzenie otwartych ofert',
    ],
    bulletsEn: [
      'Zapisane katalogi usług do szybkiego tworzenia',
      'Profesjonalne oferty we własnym designie firmy',
      'Konwersja oferty na zlecenie jednym kliknięciem',
      'Opcjonalne i alternatywne pozycje',
      'Cyfrowy podpis klienta',
      'Automatyczne śledzenie otwartych ofert',
    ],
  },
  {
    id: 'dashboard',
    icon: 'LayoutDashboard',
    titleDe: 'Dashboard',
    titleEn: 'Dashboard',
    descriptionDe:
      'Wszystkie ważne wskaźniki na pierwszy rzut oka. Wskaźniki finansowe, aktywne projekty, wykorzystanie pracowników i raporty roczne.',
    descriptionEn:
      'Wszystkie ważne wskaźniki na pierwszy rzut oka. Wskaźniki finansowe, aktywne projekty, wykorzystanie pracowników i raporty roczne.',
    slug: 'dashboard',
    bulletsDe: [
      'Wskaźniki finansowe: przychód, otwarte faktury, przepływy pieniężne',
      'Aktywne projekty ze wskaźnikiem postępu',
      'Wykorzystanie pracowników w czasie rzeczywistym',
      'Raporty roczne i miesięczne w formacie PDF',
      'Indywidualne widgety i filtry',
      'Porównanie z analogicznym okresem roku poprzedniego',
    ],
    bulletsEn: [
      'Wskaźniki finansowe: przychód, otwarte faktury, przepływy pieniężne',
      'Aktywne projekty ze wskaźnikiem postępu',
      'Wykorzystanie pracowników w czasie rzeczywistym',
      'Raporty roczne i miesięczne w formacie PDF',
      'Indywidualne widgety i filtry',
      'Porównanie z analogicznym okresem roku poprzedniego',
    ],
  },
  {
    id: 'urlopy',
    icon: 'Palmtree',
    titleDe: 'Zarządzanie urlopami',
    titleEn: 'Zarządzanie urlopami',
    descriptionDe:
      'Mobilne wnioski urlopowe, przegląd pozostałych dni i proces zatwierdzania. Dzięki kalendarzowi zespołu nie będzie już wąskich gardeł.',
    descriptionEn:
      'Mobilne wnioski urlopowe, przegląd pozostałych dni i proces zatwierdzania. Dzięki kalendarzowi zespołu nie będzie już wąskich gardeł.',
    slug: 'urlopy',
    bulletsDe: [
      'Mobilne wnioski urlopowe ze smartfona',
      'Przegląd pozostałych dni na pracownika',
      'Proces zatwierdzania dla przełożonych',
      'Kalendarz zespołu w celu uniknięcia wąskich gardeł',
      'Automatyczne obliczanie przysługującego urlopu',
      'Wstępnie skonfigurowane dni świąteczne i dni pomostowe',
    ],
    bulletsEn: [
      'Mobilne wnioski urlopowe ze smartfona',
      'Przegląd pozostałych dni na pracownika',
      'Proces zatwierdzania dla przełożonych',
      'Kalendarz zespołu w celu uniknięcia wąskich gardeł',
      'Automatyczne obliczanie przysługującego urlopu',
      'Wstępnie skonfigurowane dni świąteczne i dni pomostowe',
    ],
  },
  {
    id: 'dokumentacja-zdjec',
    icon: 'Camera',
    titleDe: 'Dokumentacja fotograficzna',
    titleEn: 'Dokumentacja fotograficzna',
    descriptionDe:
      'Zdjęcia przed/po z automatycznym przypisaniem do projektu. Doskonałe dowody jakości dla klientów i ubezpieczycieli.',
    descriptionEn:
      'Zdjęcia przed/po z automatycznym przypisaniem do projektu. Doskonałe dowody jakości dla klientów i ubezpieczycieli.',
    slug: 'dokumentacja-zdjec',
    bulletsDe: [
      'Zdjęcia przed/po bezpośrednio w projekcie',
      'Automatyczne przypisanie do właściwego projektu',
      'Dowody jakości dla klientów i ubezpieczycieli',
      'Znacznik czasu i dane GPS dla każdego zdjęcia',
      'Nieograniczona przestrzeń na zdjęcia',
      'Przesyłanie zdjęć bezpośrednio ze smartfona',
    ],
    bulletsEn: [
      'Zdjęcia przed/po bezpośrednio w projekcie',
      'Automatyczne przypisanie do właściwego projektu',
      'Dowody jakości dla klientów i ubezpieczycieli',
      'Znacznik czasu i dane GPS dla każdego zdjęcia',
      'Nieograniczona przestrzeń na zdjęcia',
      'Przesyłanie zdjęć bezpośrednio ze smartfona',
    ],
  },
  {
    id: 'magazyn',
    icon: 'Warehouse',
    titleDe: 'Zarządzanie magazynem',
    titleEn: 'Zarządzanie magazynem',
    descriptionDe:
      'Zarządzanie materiałami i narzędziami z automatycznym odliczaniem na projekt. Kontroluj stan magazynowy w każdej chwili.',
    descriptionEn:
      'Zarządzanie materiałami i narzędziami z automatycznym odliczaniem na projekt. Kontroluj stan magazynowy w każdej chwili.',
    slug: 'magazyn',
    bulletsDe: [
      'Zarządzanie materiałami i narzędziami w jednym miejscu',
      'Automatyczne odliczanie na projekt',
      'Przegląd stanów magazynowych w czasie rzeczywistym',
      'Ostrzeżenia o minimalnym stanie przy niskich zapasach',
      'Powiązanie z dostawcami w celu szybkiego ponownego zamówienia',
      'Skaner kodów kreskowych do szybkiej rejestracji',
    ],
    bulletsEn: [
      'Zarządzanie materiałami i narzędziami w jednym miejscu',
      'Automatyczne odliczanie na projekt',
      'Przegląd stanów magazynowych w czasie rzeczywistym',
      'Ostrzeżenia o minimalnym stanie przy niskich zapasach',
      'Powiązanie z dostawcami w celu szybkiego ponownego zamówienia',
      'Skaner kodów kreskowych do szybkiej rejestracji',
    ],
  },
  {
    id: 'ksiegowosc',
    icon: 'Calculator',
    titleDe: 'Księgowość',
    titleEn: 'Księgowość',
    descriptionDe:
      'Zarządzaj przychodami i wydatkami, kontroluj koszty i eksportuj dane dla swojego księgowego. Wszystkie dane bezpiecznie na serwerach w Szwajcarii.',
    descriptionEn:
      'Zarządzaj przychodami i wydatkami, kontroluj koszty i eksportuj dane dla swojego księgowego. Wszystkie dane bezpiecznie na serwerach w Szwajcarii.',
    slug: 'ksiegowosc',
    bulletsDe: [
      'Przejrzyste zarządzanie przychodami i wydatkami',
      'Zarządzanie kosztami na projekt i klienta',
      'Eksport dla księgowego (CSV, PDF)',
      'Wszystkie dane bezpiecznie na serwerach w Szwajcarii',
      'Automatyczna kategoryzacja dokumentów',
      'Rozliczenie VAT przygotowane dla ESTV',
    ],
    bulletsEn: [
      'Przejrzyste zarządzanie przychodami i wydatkami',
      'Zarządzanie kosztami na projekt i klienta',
      'Eksport dla księgowego (CSV, PDF)',
      'Wszystkie dane bezpiecznie na serwerach w Szwajcarii',
      'Automatyczna kategoryzacja dokumentów',
      'Rozliczenie VAT przygotowane dla ESTV',
    ],
  },
  {
    id: 'aplikacja-pracownika',
    icon: 'Smartphone',
    titleDe: 'Aplikacja pracownika',
    titleEn: 'Aplikacja pracownika',
    descriptionDe:
      'Przeglądaj zadania, rejestruj czas pracy, przesyłaj zdjęcia i komunikuj się z zespołem - wszystko ze smartfona.',
    descriptionEn:
      'Przeglądaj zadania, rejestruj czas pracy, przesyłaj zdjęcia i komunikuj się z zespołem - wszystko ze smartfona.',
    slug: 'aplikacja-pracownika',
    bulletsDe: [
      'Zadania i plan dnia na smartfonie',
      'Rozpoczęcie rejestracji czasu jednym kliknięciem',
      'Przesyłanie zdjęć i przypisywanie do projektu',
      'Komunikacja z biurem w czasie rzeczywistym',
      'Tryb offline dla placów budowy bez zasięgu',
      'Powiadomienia push przy nowych zadaniach',
    ],
    bulletsEn: [
      'Zadania i plan dnia na smartfonie',
      'Rozpoczęcie rejestracji czasu jednym kliknięciem',
      'Przesyłanie zdjęć i przypisywanie do projektu',
      'Komunikacja z biurem w czasie rzeczywistym',
      'Tryb offline dla placów budowy bez zasięgu',
      'Powiadomienia push przy nowych zadaniach',
    ],
  },
  {
    id: 'portal-klienta',
    icon: 'Globe',
    titleDe: 'Portal klienta',
    titleEn: 'Portal klienta',
    descriptionDe:
      'Udostępniaj postęp projektu swoim klientom. Przejrzysta komunikacja i zdjęcia postępu budują zaufanie.',
    descriptionEn:
      'Udostępniaj postęp projektu swoim klientom. Przejrzysta komunikacja i zdjęcia postępu budują zaufanie.',
    slug: 'portal-klienta',
    bulletsDe: [
      'Udostępnianie postępu projektu klientom',
      'Przejrzysta komunikacja na wszystkich etapach',
      'Automatyczne udostępnianie zdjęć z postępu prac',
      'Klienci mogą cyfrowo zatwierdzać oferty',
      'Przeglądanie faktur i dokumentów w portalu',
      'Nie wymaga instalacji aplikacji przez klienta',
    ],
    bulletsEn: [
      'Udostępnianie postępu projektu klientom',
      'Przejrzysta komunikacja na wszystkich etapach',
      'Automatyczne udostępnianie zdjęć z postępu prac',
      'Klienci mogą cyfrowo zatwierdzać oferty',
      'Przeglądanie faktur i dokumentów w portalu',
      'Nie wymaga instalacji aplikacji przez klienta',
    ],
  },
  {
    id: 'umowy-serwisowe',
    icon: 'RefreshCw',
    titleDe: 'Umowy serwisowe',
    titleEn: 'Umowy serwisowe',
    descriptionDe:
      'Zarządzaj powtarzającymi się zleceniami z automatycznym tworzeniem projektów. Idealne do umów serwisowych i abonamentów.',
    descriptionEn:
      'Zarządzaj powtarzającymi się zleceniami z automatycznym tworzeniem projektów. Idealne do umów serwisowych i abonamentów.',
    slug: 'umowy-serwisowe',
    bulletsDe: [
      'Automatyczne zarządzanie powtarzającymi się zleceniami',
      'Automatyczne tworzenie projektów według harmonogramu',
      'Cyfrowe odwzorowanie umów serwisowych',
      'Przypomnienia o zalegających zleceniach serwisowych',
      'Automatyczne generowanie rozliczeń',
      'Historia klienta ze wszystkimi zleceniami serwisowymi',
    ],
    bulletsEn: [
      'Automatyczne zarządzanie powtarzającymi się zleceniami',
      'Automatyczne tworzenie projektów według harmonogramu',
      'Cyfrowe odwzorowanie umów serwisowych',
      'Przypomnienia o zalegających zleceniach serwisowych',
      'Automatyczne generowanie rozliczeń',
      'Historia klienta ze wszystkimi zleceniami serwisowymi',
    ],
  },
];
