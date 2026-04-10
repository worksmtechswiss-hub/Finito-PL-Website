export interface BranchUseCase {
  title: string;
  description: string;
}

export interface Branch {
  id: string;
  icon: string;
  titleDe: string;
  titleEn: string;
  genitiveDe: string;
  descriptionDe: string;
  descriptionEn: string;
  slug: string;
  useCasesDe: BranchUseCase[];
  useCasesEn: BranchUseCase[];
}

export const branches: Branch[] = [
  {
    id: 'maler',
    icon: 'Paintbrush',
    titleDe: 'Malarze',
    titleEn: 'Malarze',
    genitiveDe: 'malarzy',
    descriptionDe:
      'Cyfrowe oferty z zapisanymi katalogami usług i przejrzysty postęp projektu dla Twoich klientów.',
    descriptionEn:
      'Cyfrowe oferty z zapisanymi katalogami usług i przejrzysty postęp projektu dla Twoich klientów.',
    slug: 'maler',
    useCasesDe: [
      {
        title: 'Katalogi usług do szybkich ofert',
        description:
          'Zapisz najczęściej wykonywane prace malarskie jako katalog. Malowanie wnętrz, renowacja fasad czy tapetowanie - twórz oferty w minuty zamiast godzin.',
      },
      {
        title: 'Udostępnianie postępu projektu klientom',
        description:
          'Udostępniaj zdjęcia przed/po i aktualny stan bezpośrednio swoim klientom przez portal klienta. Przejrzystość buduje zaufanie.',
      },
      {
        title: 'Zarządzanie kolorami i zamawianie materiałów',
        description:
          'Zarządzaj odcieniami kolorów, ilościami i zapotrzebowaniem na materiały dla każdego projektu. Automatyczny przegląd stanów zapobiega brakom na placu budowy.',
      },
    ],
    useCasesEn: [
      {
        title: 'Katalogi usług do szybkich ofert',
        description:
          'Zapisz najczęściej wykonywane prace malarskie jako katalog. Malowanie wnętrz, renowacja fasad czy tapetowanie - twórz oferty w minuty zamiast godzin.',
      },
      {
        title: 'Udostępnianie postępu projektu klientom',
        description:
          'Udostępniaj zdjęcia przed/po i aktualny stan bezpośrednio swoim klientom przez portal klienta. Przejrzystość buduje zaufanie.',
      },
      {
        title: 'Zarządzanie kolorami i zamawianie materiałów',
        description:
          'Zarządzaj odcieniami kolorów, ilościami i zapotrzebowaniem na materiały dla każdego projektu. Automatyczny przegląd stanów zapobiega brakom na placu budowy.',
      },
    ],
  },
  {
    id: 'gipser',
    icon: 'Hammer',
    titleDe: 'Tynkarze',
    titleEn: 'Tynkarze',
    genitiveDe: 'tynkarzy',
    descriptionDe:
      'Cyfrowe fotoraporty i zarządzanie magazynem dla prac tynkarskich. Dokumentuj każdy etap pracy bez luk.',
    descriptionEn:
      'Cyfrowe fotoraporty i zarządzanie magazynem dla prac tynkarskich. Dokumentuj każdy etap pracy bez luk.',
    slug: 'gipser',
    useCasesDe: [
      {
        title: 'Cyfrowe fotoraporty',
        description:
          'Dokumentuj podłoże, etapy pośrednie i efekt końcowy zdjęciami bezpośrednio w projekcie. Doskonałe jako dowód jakości i dla przypadków ubezpieczeniowych.',
      },
      {
        title: 'Zarządzanie magazynem materiałów',
        description:
          'Kontroluj zapasy gipsu, tynku, siatki zbrojeniowej i narzędzi. Automatyczne odliczanie na projekt pokazuje rzeczywiste zużycie.',
      },
      {
        title: 'Obmiary i obliczanie powierzchni',
        description:
          'Rejestruj powierzchnie i ilości bezpośrednio na miejscu. Dane automatycznie wpływają do Twoich ofert i faktur.',
      },
    ],
    useCasesEn: [
      {
        title: 'Cyfrowe fotoraporty',
        description:
          'Dokumentuj podłoże, etapy pośrednie i efekt końcowy zdjęciami bezpośrednio w projekcie. Doskonałe jako dowód jakości i dla przypadków ubezpieczeniowych.',
      },
      {
        title: 'Zarządzanie magazynem materiałów',
        description:
          'Kontroluj zapasy gipsu, tynku, siatki zbrojeniowej i narzędzi. Automatyczne odliczanie na projekt pokazuje rzeczywiste zużycie.',
      },
      {
        title: 'Obmiary i obliczanie powierzchni',
        description:
          'Rejestruj powierzchnie i ilości bezpośrednio na miejscu. Dane automatycznie wpływają do Twoich ofert i faktur.',
      },
    ],
  },
  {
    id: 'elektriker',
    icon: 'Zap',
    titleDe: 'Elektrycy',
    titleEn: 'Elektrycy',
    genitiveDe: 'elektryków',
    descriptionDe:
      'Schematy na smartfonie i zarządzanie magazynem z powiązaniem z dostawcami dla wydajnych instalacji elektrycznych.',
    descriptionEn:
      'Schematy na smartfonie i zarządzanie magazynem z powiązaniem z dostawcami dla wydajnych instalacji elektrycznych.',
    slug: 'elektriker',
    useCasesDe: [
      {
        title: 'Schematy na smartfonie',
        description:
          'Uzyskaj dostęp do schematów elektrycznych i dokumentów technicznych bezpośrednio na placu budowy. Wszystkie plany zawsze przy sobie, bez ciężkich segregatorów.',
      },
      {
        title: 'Zarządzanie magazynem z powiązaniem z dostawcami',
        description:
          'Zarządzaj kablami, włącznikami, bezpiecznikami i częściami specjalnymi z bezpośrednim powiązaniem z dostawcami w celu szybkiego ponownego zamówienia.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne bezpośrednio na miejscu z rejestracją czasu, materiałami i zdjęciami. Klient może podpisać cyfrowo.',
      },
    ],
    useCasesEn: [
      {
        title: 'Schematy na smartfonie',
        description:
          'Uzyskaj dostęp do schematów elektrycznych i dokumentów technicznych bezpośrednio na placu budowy. Wszystkie plany zawsze przy sobie, bez ciężkich segregatorów.',
      },
      {
        title: 'Zarządzanie magazynem z powiązaniem z dostawcami',
        description:
          'Zarządzaj kablami, włącznikami, bezpiecznikami i częściami specjalnymi z bezpośrednim powiązaniem z dostawcami w celu szybkiego ponownego zamówienia.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne bezpośrednio na miejscu z rejestracją czasu, materiałami i zdjęciami. Klient może podpisać cyfrowo.',
      },
    ],
  },
  {
    id: 'sanitär',
    icon: 'Droplets',
    titleDe: 'Hydraulicy',
    titleEn: 'Hydraulicy',
    genitiveDe: 'hydraulików',
    descriptionDe:
      'Mobilna rejestracja czasu pracy u klienta i cyfrowe raporty dzienne dla instalacji i napraw hydraulicznych.',
    descriptionEn:
      'Mobilna rejestracja czasu pracy u klienta i cyfrowe raporty dzienne dla instalacji i napraw hydraulicznych.',
    slug: 'sanitär',
    useCasesDe: [
      {
        title: 'Mobilna rejestracja czasu pracy u klienta',
        description:
          'Rozpocznij rejestrację czasu po przybyciu i zatrzymaj po wyjściu. W tym czas dojazdu, czas pracy i przerwy - wszystko przejrzyście rozdzielone.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne z materiałami, czasem pracy i zdjęciami bezpośrednio na placu budowy. Klient może od razu podpisać cyfrowo.',
      },
      {
        title: 'Zarządzanie częściami zamiennymi',
        description:
          'Zarządzaj zapasami w samochodzie serwisowym i zamawiaj brakujące części. Automatyczna rejestracja zużycia na zlecenie.',
      },
    ],
    useCasesEn: [
      {
        title: 'Mobilna rejestracja czasu pracy u klienta',
        description:
          'Rozpocznij rejestrację czasu po przybyciu i zatrzymaj po wyjściu. W tym czas dojazdu, czas pracy i przerwy - wszystko przejrzyście rozdzielone.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne z materiałami, czasem pracy i zdjęciami bezpośrednio na placu budowy. Klient może od razu podpisać cyfrowo.',
      },
      {
        title: 'Zarządzanie częściami zamiennymi',
        description:
          'Zarządzaj zapasami w samochodzie serwisowym i zamawiaj brakujące części. Automatyczna rejestracja zużycia na zlecenie.',
      },
    ],
  },
  {
    id: 'schreiner',
    icon: 'Ruler',
    titleDe: 'Stolarze',
    titleEn: 'Stolarze',
    genitiveDe: 'stolarzy',
    descriptionDe:
      'Indywidualna dokumentacja zleceń i wydajność warsztatu w dashboardzie dla stolarni i producentów mebli.',
    descriptionEn:
      'Indywidualna dokumentacja zleceń i wydajność warsztatu w dashboardzie dla stolarni i producentów mebli.',
    slug: 'schreiner',
    useCasesDe: [
      {
        title: 'Indywidualna dokumentacja zleceń',
        description:
          'Dokumentuj zamówienia specjalne z wymiarami, doborem materiałów i ustaleniami z klientem. Każdy szczegół jest zapisany i dostępny w każdej chwili.',
      },
      {
        title: 'Wydajność warsztatu w dashboardzie',
        description:
          'Zobacz na pierwszy rzut oka, jakie zlecenia są w warsztacie, kto nad nimi pracuje i kiedy planowana jest dostawa.',
      },
      {
        title: 'Oferty na zamówienia indywidualne',
        description:
          'Twórz szczegółowe oferty na indywidualne meble i zabudowy. Z pozycjami na materiał, czas pracy i montaż.',
      },
    ],
    useCasesEn: [
      {
        title: 'Indywidualna dokumentacja zleceń',
        description:
          'Dokumentuj zamówienia specjalne z wymiarami, doborem materiałów i ustaleniami z klientem. Każdy szczegół jest zapisany i dostępny w każdej chwili.',
      },
      {
        title: 'Wydajność warsztatu w dashboardzie',
        description:
          'Zobacz na pierwszy rzut oka, jakie zlecenia są w warsztacie, kto nad nimi pracuje i kiedy planowana jest dostawa.',
      },
      {
        title: 'Oferty na zamówienia indywidualne',
        description:
          'Twórz szczegółowe oferty na indywidualne meble i zabudowy. Z pozycjami na materiał, czas pracy i montaż.',
      },
    ],
  },
  {
    id: 'dachdecker',
    icon: 'Home',
    titleDe: 'Dekarze',
    titleEn: 'Dekarze',
    genitiveDe: 'dekarzy',
    descriptionDe:
      'Planowanie pracowników z kalendarzem i cyfrowe archiwum projektów na ponad 25 lat. Idealne do renowacji dachów i nowych budów.',
    descriptionEn:
      'Planowanie pracowników z kalendarzem i cyfrowe archiwum projektów na ponad 25 lat. Idealne do renowacji dachów i nowych budów.',
    slug: 'dachdecker',
    useCasesDe: [
      {
        title: 'Planowanie pracowników z kalendarzem',
        description:
          'Planuj swoje zespoły na różne place budowy. Kalendarz pokazuje dostępność, zaplanowane zlecenia i urlopy na pierwszy rzut oka.',
      },
      {
        title: 'Cyfrowe archiwum projektów na 25+ lat',
        description:
          'Przechowuj wszystkie dane projektów, zdjęcia i dokumenty w postaci zaszyfrowanej przez co najmniej 25 lat. Idealne dla przypadków gwarancyjnych i prac dodatkowych.',
      },
      {
        title: 'Dokumentacja pogody i bezpieczeństwa',
        description:
          'Dokumentuj warunki pogodowe i środki bezpieczeństwa na każdy dzień pracy. Ważne dla zapewnienia jakości i kwestii odpowiedzialności.',
      },
    ],
    useCasesEn: [
      {
        title: 'Planowanie pracowników z kalendarzem',
        description:
          'Planuj swoje zespoły na różne place budowy. Kalendarz pokazuje dostępność, zaplanowane zlecenia i urlopy na pierwszy rzut oka.',
      },
      {
        title: 'Cyfrowe archiwum projektów na 25+ lat',
        description:
          'Przechowuj wszystkie dane projektów, zdjęcia i dokumenty w postaci zaszyfrowanej przez co najmniej 25 lat. Idealne dla przypadków gwarancyjnych i prac dodatkowych.',
      },
      {
        title: 'Dokumentacja pogody i bezpieczeństwa',
        description:
          'Dokumentuj warunki pogodowe i środki bezpieczeństwa na każdy dzień pracy. Ważne dla zapewnienia jakości i kwestii odpowiedzialności.',
      },
    ],
  },
  {
    id: 'bodenleger',
    icon: 'Grid3x3',
    titleDe: 'Posadzkarze',
    titleEn: 'Posadzkarze',
    genitiveDe: 'posadzkarzy',
    descriptionDe:
      'Obliczanie metraży i śledzenie pozostałych materiałów dla parkietu, płytek i wszelkiego rodzaju podłóg.',
    descriptionEn:
      'Obliczanie metraży i śledzenie pozostałych materiałów dla parkietu, płytek i wszelkiego rodzaju podłóg.',
    slug: 'bodenleger',
    useCasesDe: [
      {
        title: 'Obliczanie metraży',
        description:
          'Automatycznie obliczaj ilości materiałów na podstawie powierzchni pomieszczeń. W tym naddatek na cięcie i formaty specjalne dla precyzyjnych zamówień.',
      },
      {
        title: 'Śledzenie pozostałych materiałów',
        description:
          'Śledź materiał pozostały po projekcie. Resztki mogą być ponownie wykorzystane do mniejszych zleceń lub napraw.',
      },
      {
        title: 'Dokumentacja wzorów układania',
        description:
          'Dokumentuj wybrany wzór układania zdjęciami i notatkami. Dzięki temu przy ponownych zamówieniach lub naprawach wszystko jest jasne.',
      },
    ],
    useCasesEn: [
      {
        title: 'Obliczanie metraży',
        description:
          'Automatycznie obliczaj ilości materiałów na podstawie powierzchni pomieszczeń. W tym naddatek na cięcie i formaty specjalne dla precyzyjnych zamówień.',
      },
      {
        title: 'Śledzenie pozostałych materiałów',
        description:
          'Śledź materiał pozostały po projekcie. Resztki mogą być ponownie wykorzystane do mniejszych zleceń lub napraw.',
      },
      {
        title: 'Dokumentacja wzorów układania',
        description:
          'Dokumentuj wybrany wzór układania zdjęciami i notatkami. Dzięki temu przy ponownych zamówieniach lub naprawach wszystko jest jasne.',
      },
    ],
  },
  {
    id: 'gerüstbauer',
    icon: 'Building2',
    titleDe: 'Rusztowaniowcy',
    titleEn: 'Rusztowaniowcy',
    genitiveDe: 'rusztowaniowców',
    descriptionDe:
      'Śledzenie części rusztowań i automatyczne rozliczanie wynajmu. Kontroluj wszystkie części i lokalizacje.',
    descriptionEn:
      'Śledzenie części rusztowań i automatyczne rozliczanie wynajmu. Kontroluj wszystkie części i lokalizacje.',
    slug: 'gerüstbauer',
    useCasesDe: [
      {
        title: 'Śledzenie części rusztowań',
        description:
          'Śledź każdą część rusztowania od dostawy do zwrotu. Zawsze wiesz, które części są gdzie i od jak dawna.',
      },
      {
        title: 'Automatyczne rozliczanie wynajmu',
        description:
          'Automatycznie obliczaj koszty wynajmu na podstawie czasu ustawienia i typu rusztowania. Faktury są automatycznie generowane i wysyłane do klienta.',
      },
      {
        title: 'Dokumentowanie inspekcji bezpieczeństwa',
        description:
          'Dokumentuj regularne inspekcje bezpieczeństwa zdjęciami i listami kontrolnymi. Spełniaj wszystkie wymagania prawne bez luk.',
      },
    ],
    useCasesEn: [
      {
        title: 'Śledzenie części rusztowań',
        description:
          'Śledź każdą część rusztowania od dostawy do zwrotu. Zawsze wiesz, które części są gdzie i od jak dawna.',
      },
      {
        title: 'Automatyczne rozliczanie wynajmu',
        description:
          'Automatycznie obliczaj koszty wynajmu na podstawie czasu ustawienia i typu rusztowania. Faktury są automatycznie generowane i wysyłane do klienta.',
      },
      {
        title: 'Dokumentowanie inspekcji bezpieczeństwa',
        description:
          'Dokumentuj regularne inspekcje bezpieczeństwa zdjęciami i listami kontrolnymi. Spełniaj wszystkie wymagania prawne bez luk.',
      },
    ],
  },
  {
    id: 'maurer',
    icon: 'Blocks',
    titleDe: 'Murarze',
    titleEn: 'Murarze',
    genitiveDe: 'murarzy',
    descriptionDe:
      'Automatyczny dziennik budowy i przegląd wielu projektów z filtrami statusu dla prac murarskich i projektów budowlanych.',
    descriptionEn:
      'Automatyczny dziennik budowy i przegląd wielu projektów z filtrami statusu dla prac murarskich i projektów budowlanych.',
    slug: 'maurer',
    useCasesDe: [
      {
        title: 'Automatyczny dziennik budowy',
        description:
          'Prowadź dziennik budowy automatycznie z pogodą, obecnością, postępem prac i zdjęciami. Wszystkie wpisy są udokumentowane w sposób prawnie wiążący.',
      },
      {
        title: 'Przegląd wielu projektów z filtrami statusu',
        description:
          'Zarządzaj wieloma placami budowy jednocześnie. Filtruj według statusu, priorytetu lub terminu dla doskonałego przeglądu.',
      },
      {
        title: 'Zamawianie materiałów i betonu',
        description:
          'Obliczaj i zamawiaj materiały na podstawie postępu budowy. Automatyczne obliczanie ilości oszczędza czas i redukuje marnotrawstwo.',
      },
    ],
    useCasesEn: [
      {
        title: 'Automatyczny dziennik budowy',
        description:
          'Prowadź dziennik budowy automatycznie z pogodą, obecnością, postępem prac i zdjęciami. Wszystkie wpisy są udokumentowane w sposób prawnie wiążący.',
      },
      {
        title: 'Przegląd wielu projektów z filtrami statusu',
        description:
          'Zarządzaj wieloma placami budowy jednocześnie. Filtruj według statusu, priorytetu lub terminu dla doskonałego przeglądu.',
      },
      {
        title: 'Zamawianie materiałów i betonu',
        description:
          'Obliczaj i zamawiaj materiały na podstawie postępu budowy. Automatyczne obliczanie ilości oszczędza czas i redukuje marnotrawstwo.',
      },
    ],
  },
  {
    id: 'facility-service',
    icon: 'Building',
    titleDe: 'Facility Service',
    titleEn: 'Facility Service',
    genitiveDe: 'facility service',
    descriptionDe:
      'Zautomatyzowane interwały konserwacji i koordynacja partnerów dla profesjonalnego zarządzania budynkami.',
    descriptionEn:
      'Zautomatyzowane interwały konserwacji i koordynacja partnerów dla profesjonalnego zarządzania budynkami.',
    slug: 'facility-service',
    useCasesDe: [
      {
        title: 'Zautomatyzowane interwały konserwacji',
        description:
          'Zdefiniuj interwały konserwacji dla ogrzewania, wentylacji, wind i innych. Finito Pro automatycznie przypomina i tworzy zlecenia.',
      },
      {
        title: 'Koordynacja partnerów',
        description:
          'Koordynuj zewnętrznych partnerów i podwykonawców przez platformę. Każdy widzi swoje zadania i terminy w czasie rzeczywistym.',
      },
      {
        title: 'Zarządzanie budynkami z dossier obiektu',
        description:
          'Prowadź cyfrowe dossier dla każdej części budynku z historią konserwacji, danymi urządzeń i osobami odpowiedzialnymi.',
      },
    ],
    useCasesEn: [
      {
        title: 'Zautomatyzowane interwały konserwacji',
        description:
          'Zdefiniuj interwały konserwacji dla ogrzewania, wentylacji, wind i innych. Finito Pro automatycznie przypomina i tworzy zlecenia.',
      },
      {
        title: 'Koordynacja partnerów',
        description:
          'Koordynuj zewnętrznych partnerów i podwykonawców przez platformę. Każdy widzi swoje zadania i terminy w czasie rzeczywistym.',
      },
      {
        title: 'Zarządzanie budynkami z dossier obiektu',
        description:
          'Prowadź cyfrowe dossier dla każdej części budynku z historią konserwacji, danymi urządzeń i osobami odpowiedzialnymi.',
      },
    ],
  },
  {
    id: 'reinigung',
    icon: 'Sparkles',
    titleDe: 'Firmy sprzątające',
    titleEn: 'Firmy sprzątające',
    genitiveDe: 'firm sprzątających',
    descriptionDe:
      'Planowanie tras i dokumentacja jakości ze zdjęciami dla profesjonalnych firm sprzątających.',
    descriptionEn:
      'Planowanie tras i dokumentacja jakości ze zdjęciami dla profesjonalnych firm sprzątających.',
    slug: 'reinigung',
    useCasesDe: [
      {
        title: 'Planowanie tras dla zespołów',
        description:
          'Planuj optymalne trasy dla swoich zespołów sprzątających. Zobacz, który zespół jest gdzie przydzielony i minimalizuj czas dojazdu.',
      },
      {
        title: 'Dokumentacja jakości ze zdjęciami',
        description:
          'Dokumentuj jakość sprzątania zdjęciami przed i po wykonaniu zlecenia. Doskonałe jako dowód dla zleceniodawców.',
      },
      {
        title: 'Listy kontrolne na obiekt',
        description:
          'Twórz indywidualne listy kontrolne sprzątania dla każdej części budynku. Pracownicy odznaczają wykonane zadania na smartfonie.',
      },
    ],
    useCasesEn: [
      {
        title: 'Planowanie tras dla zespołów',
        description:
          'Planuj optymalne trasy dla swoich zespołów sprzątających. Zobacz, który zespół jest gdzie przydzielony i minimalizuj czas dojazdu.',
      },
      {
        title: 'Dokumentacja jakości ze zdjęciami',
        description:
          'Dokumentuj jakość sprzątania zdjęciami przed i po wykonaniu zlecenia. Doskonałe jako dowód dla zleceniodawców.',
      },
      {
        title: 'Listy kontrolne na obiekt',
        description:
          'Twórz indywidualne listy kontrolne sprzątania dla każdej części budynku. Pracownicy odznaczają wykonane zadania na smartfonie.',
      },
    ],
  },
  {
    id: 'gartenbau',
    icon: 'TreePine',
    titleDe: 'Ogrodnictwo',
    titleEn: 'Ogrodnictwo',
    genitiveDe: 'firm ogrodniczych',
    descriptionDe:
      'Sezonowe planowanie projektów i dokumentacja roślin dla ogrodnictwa i pielęgnacji krajobrazu.',
    descriptionEn:
      'Sezonowe planowanie projektów i dokumentacja roślin dla ogrodnictwa i pielęgnacji krajobrazu.',
    slug: 'gartenbau',
    useCasesDe: [
      {
        title: 'Sezonowe planowanie projektów',
        description:
          'Planuj swoje projekty wzdłuż pór roku. Automatyczne przypomnienia o pracach sezonowych, takich jak przycinanie, nawożenie czy zimowa obsługa.',
      },
      {
        title: 'Dokumentacja roślin',
        description:
          'Dokumentuj posadzone gatunki, lokalizacje i wskazówki pielęgnacyjne dla każdego ogrodu. Idealne do powtarzających się zleceń pielęgnacyjnych.',
      },
      {
        title: 'Plany pielęgnacji dla klientów',
        description:
          'Twórz indywidualne plany pielęgnacji i udostępniaj je swoim klientom. Ze zdjęciami postępu ogrodu przez sezony.',
      },
    ],
    useCasesEn: [
      {
        title: 'Sezonowe planowanie projektów',
        description:
          'Planuj swoje projekty wzdłuż pór roku. Automatyczne przypomnienia o pracach sezonowych, takich jak przycinanie, nawożenie czy zimowa obsługa.',
      },
      {
        title: 'Dokumentacja roślin',
        description:
          'Dokumentuj posadzone gatunki, lokalizacje i wskazówki pielęgnacyjne dla każdego ogrodu. Idealne do powtarzających się zleceń pielęgnacyjnych.',
      },
      {
        title: 'Plany pielęgnacji dla klientów',
        description:
          'Twórz indywidualne plany pielęgnacji i udostępniaj je swoim klientom. Ze zdjęciami postępu ogrodu przez sezony.',
      },
    ],
  },
  {
    id: 'umzug',
    icon: 'Truck',
    titleDe: 'Przeprowadzki',
    titleEn: 'Przeprowadzki',
    genitiveDe: 'firm przeprowadzkowych',
    descriptionDe:
      'Codzienne planowanie tras i listy inwentarzowe z dokumentacją fotograficzną dla firm przeprowadzkowych.',
    descriptionEn:
      'Codzienne planowanie tras i listy inwentarzowe z dokumentacją fotograficzną dla firm przeprowadzkowych.',
    slug: 'umzug',
    useCasesDe: [
      {
        title: 'Codzienne planowanie tras',
        description:
          'Planuj codzienne trasy swoich zespołów przeprowadzkowych. Optymalizuj drogi dojazdu i koordynuj miejsca załadunku i rozładunku efektywnie.',
      },
      {
        title: 'Listy inwentarzowe z dokumentacją fotograficzną',
        description:
          'Twórz szczegółowe listy inwentarzowe ze zdjęciami każdego przedmiotu. Doskonałe jako dowód dla ubezpieczeń i przeciwko roszczeniom odszkodowawczym.',
      },
      {
        title: 'Protokół szkód',
        description:
          'Dokumentuj stan mebli i przedmiotów przed i po przeprowadzce. Ze znacznikiem czasu i danymi GPS dla maksymalnego bezpieczeństwa.',
      },
    ],
    useCasesEn: [
      {
        title: 'Codzienne planowanie tras',
        description:
          'Planuj codzienne trasy swoich zespołów przeprowadzkowych. Optymalizuj drogi dojazdu i koordynuj miejsca załadunku i rozładunku efektywnie.',
      },
      {
        title: 'Listy inwentarzowe z dokumentacją fotograficzną',
        description:
          'Twórz szczegółowe listy inwentarzowe ze zdjęciami każdego przedmiotu. Doskonałe jako dowód dla ubezpieczeń i przeciwko roszczeniom odszkodowawczym.',
      },
      {
        title: 'Protokół szkód',
        description:
          'Dokumentuj stan mebli i przedmiotów przed i po przeprowadzce. Ze znacznikiem czasu i danymi GPS dla maksymalnego bezpieczeństwa.',
      },
    ],
  },
  {
    id: 'haustechnik',
    icon: 'Thermometer',
    titleDe: 'Technika budynkowa',
    titleEn: 'Technika budynkowa',
    genitiveDe: 'techniki budynkowej',
    descriptionDe:
      'Dokumentacja zleceń HVAC i planowanie konserwacji dla techniki grzewczej, wentylacyjnej i klimatyzacyjnej.',
    descriptionEn:
      'Dokumentacja zleceń HVAC i planowanie konserwacji dla techniki grzewczej, wentylacyjnej i klimatyzacyjnej.',
    slug: 'haustechnik',
    useCasesDe: [
      {
        title: 'Dokumentacja zleceń HVAC',
        description:
          'Dokumentuj prace przy instalacjach grzewczych, wentylacyjnych i klimatyzacyjnych ze szczegółami technicznymi, zdjęciami i wartościami pomiarowymi bezpośrednio na miejscu.',
      },
      {
        title: 'Planowanie i przypomnienia o konserwacji',
        description:
          'Planuj regularne konserwacje dla wszystkich instalacji. Automatyczne przypomnienia zapewniają, że żaden termin nie zostanie pominięty.',
      },
      {
        title: 'Historia instalacji na część budynku',
        description:
          'Prowadź kompletną historię każdej instalacji ze wszystkimi konserwacjami, naprawami i wymienionymi częściami.',
      },
    ],
    useCasesEn: [
      {
        title: 'Dokumentacja zleceń HVAC',
        description:
          'Dokumentuj prace przy instalacjach grzewczych, wentylacyjnych i klimatyzacyjnych ze szczegółami technicznymi, zdjęciami i wartościami pomiarowymi bezpośrednio na miejscu.',
      },
      {
        title: 'Planowanie i przypomnienia o konserwacji',
        description:
          'Planuj regularne konserwacje dla wszystkich instalacji. Automatyczne przypomnienia zapewniają, że żaden termin nie zostanie pominięty.',
      },
      {
        title: 'Historia instalacji na część budynku',
        description:
          'Prowadź kompletną historię każdej instalacji ze wszystkimi konserwacjami, naprawami i wymienionymi częściami.',
      },
    ],
  },
  {
    id: 'architekten',
    icon: 'PenTool',
    titleDe: 'Architekci',
    titleEn: 'Architekci',
    genitiveDe: 'architektów',
    descriptionDe:
      'Centralne dokumenty projektowe i tablica zadań dla faz projektu. Kontroluj wszystkie projekty budowlane.',
    descriptionEn:
      'Centralne dokumenty projektowe i tablica zadań dla faz projektu. Kontroluj wszystkie projekty budowlane.',
    slug: 'architekten',
    useCasesDe: [
      {
        title: 'Centralne dokumenty projektowe',
        description:
          'Zarządzaj wszystkimi planami, obliczeniami i korespondencją w jednym miejscu. Każdy członek zespołu ma dostęp do najnowszej wersji.',
      },
      {
        title: 'Tablica zadań dla faz projektu',
        description:
          'Organizuj projekty w fazy od planowania po odbiór. Przydzielaj zadania i śledź postęp w czasie rzeczywistym.',
      },
      {
        title: 'Komunikacja z inwestorem',
        description:
          'Udostępniaj postępy projektu, stany planowania i decyzje przejrzyście swoim inwestorom przez portal klienta.',
      },
    ],
    useCasesEn: [
      {
        title: 'Centralne dokumenty projektowe',
        description:
          'Zarządzaj wszystkimi planami, obliczeniami i korespondencją w jednym miejscu. Każdy członek zespołu ma dostęp do najnowszej wersji.',
      },
      {
        title: 'Tablica zadań dla faz projektu',
        description:
          'Organizuj projekty w fazy od planowania po odbiór. Przydzielaj zadania i śledź postęp w czasie rzeczywistym.',
      },
      {
        title: 'Komunikacja z inwestorem',
        description:
          'Udostępniaj postępy projektu, stany planowania i decyzje przejrzyście swoim inwestorom przez portal klienta.',
      },
    ],
  },
  {
    id: 'agenturen',
    icon: 'Palette',
    titleDe: 'Agencje',
    titleEn: 'Agencje',
    genitiveDe: 'agencji',
    descriptionDe:
      'Projektowa rejestracja czasu pracy do rozliczeń i indywidualne uprawnienia użytkowników dla Twojego zespołu.',
    descriptionEn:
      'Projektowa rejestracja czasu pracy do rozliczeń i indywidualne uprawnienia użytkowników dla Twojego zespołu.',
    slug: 'agenturen',
    useCasesDe: [
      {
        title: 'Projektowa rejestracja czasu do rozliczeń',
        description:
          'Rejestruj czas na projekt i klienta dla przejrzystych rozliczeń. Raporty godzinowe mogą być bezpośrednio wykorzystane jako podstawa faktur.',
      },
      {
        title: 'Indywidualne uprawnienia użytkowników',
        description:
          'Określ dokładnie, kto co może widzieć i edytować. Od kierowników projektów przez designerów po freelancerów - każdy ma odpowiednie uprawnienia.',
      },
      {
        title: 'Budżety klientów i projektów',
        description:
          'Zarządzaj budżetami na klienta i projekt. Automatyczne ostrzeżenia o przekroczeniu budżetu chronią przed finansowymi niespodziankami.',
      },
    ],
    useCasesEn: [
      {
        title: 'Projektowa rejestracja czasu do rozliczeń',
        description:
          'Rejestruj czas na projekt i klienta dla przejrzystych rozliczeń. Raporty godzinowe mogą być bezpośrednio wykorzystane jako podstawa faktur.',
      },
      {
        title: 'Indywidualne uprawnienia użytkowników',
        description:
          'Określ dokładnie, kto co może widzieć i edytować. Od kierowników projektów przez designerów po freelancerów - każdy ma odpowiednie uprawnienia.',
      },
      {
        title: 'Budżety klientów i projektów',
        description:
          'Zarządzaj budżetami na klienta i projekt. Automatyczne ostrzeżenia o przekroczeniu budżetu chronią przed finansowymi niespodziankami.',
      },
    ],
  },
  {
    id: 'einmann-betriebe',
    icon: 'User',
    titleDe: 'Jednoosobowe firmy',
    titleEn: 'Jednoosobowe firmy',
    genitiveDe: 'jednoosobowych firm',
    descriptionDe:
      'Kompletne biuro na smartfonie. Szablony oszczędzają do 80% czasu administracyjnego dla jednoosobowych przedsiębiorców.',
    descriptionEn:
      'Kompletne biuro na smartfonie. Szablony oszczędzają do 80% czasu administracyjnego dla jednoosobowych przedsiębiorców.',
    slug: 'einmann-betriebe',
    useCasesDe: [
      {
        title: 'Kompletne biuro na smartfonie',
        description:
          'Oferty, faktury, rejestracja czasu i zarządzanie klientami - wszystko w jednej aplikacji. Bez potrzeby komputera, załatwisz wszystko w drodze.',
      },
      {
        title: 'Szablony oszczędzają 80% czasu administracyjnego',
        description:
          'Korzystaj z gotowych szablonów ofert, faktur i raportów. To, co wcześniej zajmowało godziny, teraz zrobisz w kilka minut.',
      },
      {
        title: 'Automatyczne przygotowanie księgowości',
        description:
          'Wszystkie przychody i wydatki są automatycznie rejestrowane. Na koniec roku eksportujesz wszystko dla swojego księgowego jednym kliknięciem.',
      },
    ],
    useCasesEn: [
      {
        title: 'Kompletne biuro na smartfonie',
        description:
          'Oferty, faktury, rejestracja czasu i zarządzanie klientami - wszystko w jednej aplikacji. Bez potrzeby komputera, załatwisz wszystko w drodze.',
      },
      {
        title: 'Szablony oszczędzają 80% czasu administracyjnego',
        description:
          'Korzystaj z gotowych szablonów ofert, faktur i raportów. To, co wcześniej zajmowało godziny, teraz zrobisz w kilka minut.',
      },
      {
        title: 'Automatyczne przygotowanie księgowości',
        description:
          'Wszystkie przychody i wydatki są automatycznie rejestrowane. Na koniec roku eksportujesz wszystko dla swojego księgowego jednym kliknięciem.',
      },
    ],
  },
];
