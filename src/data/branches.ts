export interface BranchUseCase {
  title: string;
  description: string;
}

export interface Branch {
  id: string;
  icon: string;
  titleDe: string;
  titleEn: string;
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
    descriptionDe:
      'Cyfrowe oferty z zapisanymi katalogami uslug i przejrzysty postep projektu dla Twoich klientów.',
    descriptionEn:
      'Cyfrowe oferty z zapisanymi katalogami uslug i przejrzysty postep projektu dla Twoich klientów.',
    slug: 'maler',
    useCasesDe: [
      {
        title: 'Katalogi uslug do szybkich ofert',
        description:
          'Zapisz najczesciej wykonywane prace malarskie jako katalog. Malowanie wnetrz, renowacja fasad czy tapetowanie - twórz oferty w minuty zamiast godzin.',
      },
      {
        title: 'Udostepnianie postepu projektu klientom',
        description:
          'Udostepniaj zdjecia przed/po i aktualny stan bezposrednio swoim klientom przez portal klienta. Przejrzystosc buduje zaufanie.',
      },
      {
        title: 'Zarzadzanie kolorami i zamawianie materialów',
        description:
          'Zarzadzaj odcieniami kolorów, ilosciami i zapotrzebowaniem na materialy dla kazdego projektu. Automatyczny przeglad stanów zapobiega brakom na placu budowy.',
      },
    ],
    useCasesEn: [
      {
        title: 'Katalogi uslug do szybkich ofert',
        description:
          'Zapisz najczesciej wykonywane prace malarskie jako katalog. Malowanie wnetrz, renowacja fasad czy tapetowanie - twórz oferty w minuty zamiast godzin.',
      },
      {
        title: 'Udostepnianie postepu projektu klientom',
        description:
          'Udostepniaj zdjecia przed/po i aktualny stan bezposrednio swoim klientom przez portal klienta. Przejrzystosc buduje zaufanie.',
      },
      {
        title: 'Zarzadzanie kolorami i zamawianie materialów',
        description:
          'Zarzadzaj odcieniami kolorów, ilosciami i zapotrzebowaniem na materialy dla kazdego projektu. Automatyczny przeglad stanów zapobiega brakom na placu budowy.',
      },
    ],
  },
  {
    id: 'gipser',
    icon: 'Hammer',
    titleDe: 'Tynkarze',
    titleEn: 'Tynkarze',
    descriptionDe:
      'Cyfrowe fotoraporty i zarzadzanie magazynem dla prac tynkarskich. Dokumentuj kazdy etap pracy bez luk.',
    descriptionEn:
      'Cyfrowe fotoraporty i zarzadzanie magazynem dla prac tynkarskich. Dokumentuj kazdy etap pracy bez luk.',
    slug: 'gipser',
    useCasesDe: [
      {
        title: 'Cyfrowe fotoraporty',
        description:
          'Dokumentuj podloze, etapy posrednie i efekt koncowy zdjeciami bezposrednio w projekcie. Doskonale jako dowód jakosci i dla przypadków ubezpieczeniowych.',
      },
      {
        title: 'Zarzadzanie magazynem materialów',
        description:
          'Kontroluj zapasy gipsu, tynku, siatki zbrojeniowej i narzedzi. Automatyczne odliczanie na projekt pokazuje rzeczywiste zuzycie.',
      },
      {
        title: 'Obmiary i obliczanie powierzchni',
        description:
          'Rejestruj powierzchnie i ilosci bezposrednio na miejscu. Dane automatycznie wplywaja do Twoich ofert i faktur.',
      },
    ],
    useCasesEn: [
      {
        title: 'Cyfrowe fotoraporty',
        description:
          'Dokumentuj podloze, etapy posrednie i efekt koncowy zdjeciami bezposrednio w projekcie. Doskonale jako dowód jakosci i dla przypadków ubezpieczeniowych.',
      },
      {
        title: 'Zarzadzanie magazynem materialów',
        description:
          'Kontroluj zapasy gipsu, tynku, siatki zbrojeniowej i narzedzi. Automatyczne odliczanie na projekt pokazuje rzeczywiste zuzycie.',
      },
      {
        title: 'Obmiary i obliczanie powierzchni',
        description:
          'Rejestruj powierzchnie i ilosci bezposrednio na miejscu. Dane automatycznie wplywaja do Twoich ofert i faktur.',
      },
    ],
  },
  {
    id: 'elektriker',
    icon: 'Zap',
    titleDe: 'Elektrycy',
    titleEn: 'Elektrycy',
    descriptionDe:
      'Schematy na smartfonie i zarzadzanie magazynem z powiazaniem z dostawcami dla wydajnych instalacji elektrycznych.',
    descriptionEn:
      'Schematy na smartfonie i zarzadzanie magazynem z powiazaniem z dostawcami dla wydajnych instalacji elektrycznych.',
    slug: 'elektriker',
    useCasesDe: [
      {
        title: 'Schematy na smartfonie',
        description:
          'Uzyskaj dostep do schematów elektrycznych i dokumentów technicznych bezposrednio na placu budowy. Wszystkie plany zawsze przy sobie, bez ciezkich segregatorów.',
      },
      {
        title: 'Zarzadzanie magazynem z powiazaniem z dostawcami',
        description:
          'Zarzadzaj kablami, wlacznikami, bezpiecznikami i czesciami specjalnymi z bezposrednim powiazaniem z dostawcami w celu szybkiego ponownego zamówienia.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne bezposrednio na miejscu z rejestracją czasu, materialami i zdjeciami. Klient moze podpisac cyfrowo.',
      },
    ],
    useCasesEn: [
      {
        title: 'Schematy na smartfonie',
        description:
          'Uzyskaj dostep do schematów elektrycznych i dokumentów technicznych bezposrednio na placu budowy. Wszystkie plany zawsze przy sobie, bez ciezkich segregatorów.',
      },
      {
        title: 'Zarzadzanie magazynem z powiazaniem z dostawcami',
        description:
          'Zarzadzaj kablami, wlacznikami, bezpiecznikami i czesciami specjalnymi z bezposrednim powiazaniem z dostawcami w celu szybkiego ponownego zamówienia.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne bezposrednio na miejscu z rejestracją czasu, materialami i zdjeciami. Klient moze podpisac cyfrowo.',
      },
    ],
  },
  {
    id: 'sanitär',
    icon: 'Droplets',
    titleDe: 'Hydraulicy',
    titleEn: 'Hydraulicy',
    descriptionDe:
      'Mobilna rejestracja czasu pracy u klienta i cyfrowe raporty dzienne dla instalacji i napraw hydraulicznych.',
    descriptionEn:
      'Mobilna rejestracja czasu pracy u klienta i cyfrowe raporty dzienne dla instalacji i napraw hydraulicznych.',
    slug: 'sanitär',
    useCasesDe: [
      {
        title: 'Mobilna rejestracja czasu pracy u klienta',
        description:
          'Rozpocznij rejestracje czasu po przybyciu i zatrzymaj po wyjsciu. W tym czas dojazdu, czas pracy i przerwy - wszystko przejrzyscie rozdzielone.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne z materialami, czasem pracy i zdjeciami bezposrednio na placu budowy. Klient moze od razu podpisac cyfrowo.',
      },
      {
        title: 'Zarzadzanie czesciami zamiennymi',
        description:
          'Zarzadzaj zapasami w samochodzie serwisowym i zamawiaj brakujace czesci. Automatyczna rejestracja zuzycia na zlecenie.',
      },
    ],
    useCasesEn: [
      {
        title: 'Mobilna rejestracja czasu pracy u klienta',
        description:
          'Rozpocznij rejestracje czasu po przybyciu i zatrzymaj po wyjsciu. W tym czas dojazdu, czas pracy i przerwy - wszystko przejrzyscie rozdzielone.',
      },
      {
        title: 'Cyfrowe raporty dzienne',
        description:
          'Twórz raporty dzienne z materialami, czasem pracy i zdjeciami bezposrednio na placu budowy. Klient moze od razu podpisac cyfrowo.',
      },
      {
        title: 'Zarzadzanie czesciami zamiennymi',
        description:
          'Zarzadzaj zapasami w samochodzie serwisowym i zamawiaj brakujace czesci. Automatyczna rejestracja zuzycia na zlecenie.',
      },
    ],
  },
  {
    id: 'schreiner',
    icon: 'Ruler',
    titleDe: 'Stolarze',
    titleEn: 'Stolarze',
    descriptionDe:
      'Indywidualna dokumentacja zlecen i wydajnosc warsztatu w dashboardzie dla stolarni i producentów mebli.',
    descriptionEn:
      'Indywidualna dokumentacja zlecen i wydajnosc warsztatu w dashboardzie dla stolarni i producentów mebli.',
    slug: 'schreiner',
    useCasesDe: [
      {
        title: 'Indywidualna dokumentacja zlecen',
        description:
          'Dokumentuj zamówienia specjalne z wymiarami, doborem materialów i ustaleniami z klientem. Kazdy szczegól jest zapisany i dostepny w kazdej chwili.',
      },
      {
        title: 'Wydajnosc warsztatu w dashboardzie',
        description:
          'Zobacz na pierwszy rzut oka, jakie zlecenia sa w warsztacie, kto nad nimi pracuje i kiedy planowana jest dostawa.',
      },
      {
        title: 'Oferty na zamówienia indywidualne',
        description:
          'Twórz szczególowe oferty na indywidualne meble i zabudowy. Z pozycjami na material, czas pracy i montaz.',
      },
    ],
    useCasesEn: [
      {
        title: 'Indywidualna dokumentacja zlecen',
        description:
          'Dokumentuj zamówienia specjalne z wymiarami, doborem materialów i ustaleniami z klientem. Kazdy szczegól jest zapisany i dostepny w kazdej chwili.',
      },
      {
        title: 'Wydajnosc warsztatu w dashboardzie',
        description:
          'Zobacz na pierwszy rzut oka, jakie zlecenia sa w warsztacie, kto nad nimi pracuje i kiedy planowana jest dostawa.',
      },
      {
        title: 'Oferty na zamówienia indywidualne',
        description:
          'Twórz szczególowe oferty na indywidualne meble i zabudowy. Z pozycjami na material, czas pracy i montaz.',
      },
    ],
  },
  {
    id: 'dachdecker',
    icon: 'Home',
    titleDe: 'Dekarze',
    titleEn: 'Dekarze',
    descriptionDe:
      'Planowanie pracowników z kalendarzem i cyfrowe archiwum projektów na ponad 25 lat. Idealne do renowacji dachów i nowych budów.',
    descriptionEn:
      'Planowanie pracowników z kalendarzem i cyfrowe archiwum projektów na ponad 25 lat. Idealne do renowacji dachów i nowych budów.',
    slug: 'dachdecker',
    useCasesDe: [
      {
        title: 'Planowanie pracowników z kalendarzem',
        description:
          'Planuj swoje zespoly na rózne place budowy. Kalendarz pokazuje dostepnosc, zaplanowane zlecenia i urlopy na pierwszy rzut oka.',
      },
      {
        title: 'Cyfrowe archiwum projektów na 25+ lat',
        description:
          'Przechowuj wszystkie dane projektów, zdjecia i dokumenty w postaci zaszyfrowanej przez co najmniej 25 lat. Idealne dla przypadków gwarancyjnych i prac dodatkowych.',
      },
      {
        title: 'Dokumentacja pogody i bezpieczenstwa',
        description:
          'Dokumentuj warunki pogodowe i srodki bezpieczenstwa na kazdy dzien pracy. Wazne dla zapewnienia jakosci i kwestii odpowiedzialnosci.',
      },
    ],
    useCasesEn: [
      {
        title: 'Planowanie pracowników z kalendarzem',
        description:
          'Planuj swoje zespoly na rózne place budowy. Kalendarz pokazuje dostepnosc, zaplanowane zlecenia i urlopy na pierwszy rzut oka.',
      },
      {
        title: 'Cyfrowe archiwum projektów na 25+ lat',
        description:
          'Przechowuj wszystkie dane projektów, zdjecia i dokumenty w postaci zaszyfrowanej przez co najmniej 25 lat. Idealne dla przypadków gwarancyjnych i prac dodatkowych.',
      },
      {
        title: 'Dokumentacja pogody i bezpieczenstwa',
        description:
          'Dokumentuj warunki pogodowe i srodki bezpieczenstwa na kazdy dzien pracy. Wazne dla zapewnienia jakosci i kwestii odpowiedzialnosci.',
      },
    ],
  },
  {
    id: 'bodenleger',
    icon: 'Grid3x3',
    titleDe: 'Posadzkarze',
    titleEn: 'Posadzkarze',
    descriptionDe:
      'Obliczanie metrazy i sledzenie pozostalych materialów dla parkietu, plytek i wszelkiego rodzaju podlóg.',
    descriptionEn:
      'Obliczanie metrazy i sledzenie pozostalych materialów dla parkietu, plytek i wszelkiego rodzaju podlóg.',
    slug: 'bodenleger',
    useCasesDe: [
      {
        title: 'Obliczanie metrazy',
        description:
          'Automatycznie obliczaj ilosci materialów na podstawie powierzchni pomieszczen. W tym naddatek na ciecie i formaty specjalne dla precyzyjnych zamówien.',
      },
      {
        title: 'Sledzenie pozostalych materialów',
        description:
          'Slédz material pozostaly po projekcie. Resztki moga byc ponownie wykorzystane do mniejszych zlecen lub napraw.',
      },
      {
        title: 'Dokumentacja wzorów ukladania',
        description:
          'Dokumentuj wybrany wzór ukladania zdjeciami i notatkami. Dzieki temu przy ponownych zamówieniach lub naprawach wszystko jest jasne.',
      },
    ],
    useCasesEn: [
      {
        title: 'Obliczanie metrazy',
        description:
          'Automatycznie obliczaj ilosci materialów na podstawie powierzchni pomieszczen. W tym naddatek na ciecie i formaty specjalne dla precyzyjnych zamówien.',
      },
      {
        title: 'Sledzenie pozostalych materialów',
        description:
          'Slédz material pozostaly po projekcie. Resztki moga byc ponownie wykorzystane do mniejszych zlecen lub napraw.',
      },
      {
        title: 'Dokumentacja wzorów ukladania',
        description:
          'Dokumentuj wybrany wzór ukladania zdjeciami i notatkami. Dzieki temu przy ponownych zamówieniach lub naprawach wszystko jest jasne.',
      },
    ],
  },
  {
    id: 'gerüstbauer',
    icon: 'Building2',
    titleDe: 'Firmy rusztowaniowe',
    titleEn: 'Firmy rusztowaniowe',
    descriptionDe:
      'Sledzenie czesci rusztowan i automatyczne rozliczanie wynajmu. Kontroluj wszystkie czesci i lokalizacje.',
    descriptionEn:
      'Sledzenie czesci rusztowan i automatyczne rozliczanie wynajmu. Kontroluj wszystkie czesci i lokalizacje.',
    slug: 'gerüstbauer',
    useCasesDe: [
      {
        title: 'Sledzenie czesci rusztowan',
        description:
          'Slédz kazda czesc rusztowania od dostawy do zwrotu. Zawsze wiesz, które czesci sa gdzie i od jak dawna.',
      },
      {
        title: 'Automatyczne rozliczanie wynajmu',
        description:
          'Automatycznie obliczaj koszty wynajmu na podstawie czasu ustawienia i typu rusztowania. Faktury sa automatycznie generowane i wysylane do klienta.',
      },
      {
        title: 'Dokumentowanie inspekcji bezpieczenstwa',
        description:
          'Dokumentuj regularne inspekcje bezpieczenstwa zdjeciami i listami kontrolnymi. Spelniaj wszystkie wymagania prawne bez luk.',
      },
    ],
    useCasesEn: [
      {
        title: 'Sledzenie czesci rusztowan',
        description:
          'Slédz kazda czesc rusztowania od dostawy do zwrotu. Zawsze wiesz, które czesci sa gdzie i od jak dawna.',
      },
      {
        title: 'Automatyczne rozliczanie wynajmu',
        description:
          'Automatycznie obliczaj koszty wynajmu na podstawie czasu ustawienia i typu rusztowania. Faktury sa automatycznie generowane i wysylane do klienta.',
      },
      {
        title: 'Dokumentowanie inspekcji bezpieczenstwa',
        description:
          'Dokumentuj regularne inspekcje bezpieczenstwa zdjeciami i listami kontrolnymi. Spelniaj wszystkie wymagania prawne bez luk.',
      },
    ],
  },
  {
    id: 'maurer',
    icon: 'Blocks',
    titleDe: 'Murarze',
    titleEn: 'Murarze',
    descriptionDe:
      'Automatyczny dziennik budowy i przeglad wielu projektów z filtrami statusu dla prac murarskich i projektów budowlanych.',
    descriptionEn:
      'Automatyczny dziennik budowy i przeglad wielu projektów z filtrami statusu dla prac murarskich i projektów budowlanych.',
    slug: 'maurer',
    useCasesDe: [
      {
        title: 'Automatyczny dziennik budowy',
        description:
          'Prowadz dziennik budowy automatycznie z pogoda, obecnoscia, postepem prac i zdjeciami. Wszystkie wpisy sa udokumentowane w sposób prawnie wiazacy.',
      },
      {
        title: 'Przeglad wielu projektów z filtrami statusu',
        description:
          'Zarzadzaj wieloma placami budowy jednoczesnie. Filtruj wedlug statusu, priorytetu lub terminu dla doskonalego przegladu.',
      },
      {
        title: 'Zamawianie materialów i betonu',
        description:
          'Obliczaj i zamawiaj materialy na podstawie postepu budowy. Automatyczne obliczanie ilosci oszczedza czas i redukuje marnotrawstwo.',
      },
    ],
    useCasesEn: [
      {
        title: 'Automatyczny dziennik budowy',
        description:
          'Prowadz dziennik budowy automatycznie z pogoda, obecnoscia, postepem prac i zdjeciami. Wszystkie wpisy sa udokumentowane w sposób prawnie wiazacy.',
      },
      {
        title: 'Przeglad wielu projektów z filtrami statusu',
        description:
          'Zarzadzaj wieloma placami budowy jednoczesnie. Filtruj wedlug statusu, priorytetu lub terminu dla doskonalego przegladu.',
      },
      {
        title: 'Zamawianie materialów i betonu',
        description:
          'Obliczaj i zamawiaj materialy na podstawie postepu budowy. Automatyczne obliczanie ilosci oszczedza czas i redukuje marnotrawstwo.',
      },
    ],
  },
  {
    id: 'facility-service',
    icon: 'Building',
    titleDe: 'Facility Service',
    titleEn: 'Facility Service',
    descriptionDe:
      'Zautomatyzowane interwaly konserwacji i koordynacja partnerów dla profesjonalnego zarzadzania budynkami.',
    descriptionEn:
      'Zautomatyzowane interwaly konserwacji i koordynacja partnerów dla profesjonalnego zarzadzania budynkami.',
    slug: 'facility-service',
    useCasesDe: [
      {
        title: 'Zautomatyzowane interwaly konserwacji',
        description:
          'Zdefiniuj interwaly konserwacji dla ogrzewania, wentylacji, wind i innych. Finito Pro automatycznie przypomina i tworzy zlecenia.',
      },
      {
        title: 'Koordynacja partnerów',
        description:
          'Koordynuj zewnetrznych partnerów i podwykonawców przez platforme. Kazdy widzi swoje zadania i terminy w czasie rzeczywistym.',
      },
      {
        title: 'Zarzadzanie budynkami z dossier obiektu',
        description:
          'Prowadz cyfrowe dossier dla kazdej czesci budynku z historia konserwacji, danymi urzadzen i osobami odpowiedzialnymi.',
      },
    ],
    useCasesEn: [
      {
        title: 'Zautomatyzowane interwaly konserwacji',
        description:
          'Zdefiniuj interwaly konserwacji dla ogrzewania, wentylacji, wind i innych. Finito Pro automatycznie przypomina i tworzy zlecenia.',
      },
      {
        title: 'Koordynacja partnerów',
        description:
          'Koordynuj zewnetrznych partnerów i podwykonawców przez platforme. Kazdy widzi swoje zadania i terminy w czasie rzeczywistym.',
      },
      {
        title: 'Zarzadzanie budynkami z dossier obiektu',
        description:
          'Prowadz cyfrowe dossier dla kazdej czesci budynku z historia konserwacji, danymi urzadzen i osobami odpowiedzialnymi.',
      },
    ],
  },
  {
    id: 'reinigung',
    icon: 'Sparkles',
    titleDe: 'Firmy sprzatajace',
    titleEn: 'Firmy sprzatajace',
    descriptionDe:
      'Planowanie tras i dokumentacja jakosci ze zdjeciami dla profesjonalnych firm sprzatajacych.',
    descriptionEn:
      'Planowanie tras i dokumentacja jakosci ze zdjeciami dla profesjonalnych firm sprzatajacych.',
    slug: 'reinigung',
    useCasesDe: [
      {
        title: 'Planowanie tras dla zespolów',
        description:
          'Planuj optymalne trasy dla swoich zespolów sprzatajacych. Zobacz, który zespól jest gdzie przydzielony i minimalizuj czas dojazdu.',
      },
      {
        title: 'Dokumentacja jakosci ze zdjeciami',
        description:
          'Dokumentuj jakosc sprzatania zdjeciami przed i po wykonaniu zlecenia. Doskonale jako dowód dla zleceniodawców.',
      },
      {
        title: 'Listy kontrolne na obiekt',
        description:
          'Twórz indywidualne listy kontrolne sprzatania dla kazdej czesci budynku. Pracownicy odznaczaja wykonane zadania na smartfonie.',
      },
    ],
    useCasesEn: [
      {
        title: 'Planowanie tras dla zespolów',
        description:
          'Planuj optymalne trasy dla swoich zespolów sprzatajacych. Zobacz, który zespól jest gdzie przydzielony i minimalizuj czas dojazdu.',
      },
      {
        title: 'Dokumentacja jakosci ze zdjeciami',
        description:
          'Dokumentuj jakosc sprzatania zdjeciami przed i po wykonaniu zlecenia. Doskonale jako dowód dla zleceniodawców.',
      },
      {
        title: 'Listy kontrolne na obiekt',
        description:
          'Twórz indywidualne listy kontrolne sprzatania dla kazdej czesci budynku. Pracownicy odznaczaja wykonane zadania na smartfonie.',
      },
    ],
  },
  {
    id: 'gartenbau',
    icon: 'TreePine',
    titleDe: 'Ogrodnictwo',
    titleEn: 'Ogrodnictwo',
    descriptionDe:
      'Sezonowe planowanie projektów i dokumentacja roslin dla ogrodnictwa i pielegnacji krajobrazu.',
    descriptionEn:
      'Sezonowe planowanie projektów i dokumentacja roslin dla ogrodnictwa i pielegnacji krajobrazu.',
    slug: 'gartenbau',
    useCasesDe: [
      {
        title: 'Sezonowe planowanie projektów',
        description:
          'Planuj swoje projekty wzdluz pór roku. Automatyczne przypomnienia o pracach sezonowych, takich jak przycinanie, nawozenie czy zimowa obsluga.',
      },
      {
        title: 'Dokumentacja roslin',
        description:
          'Dokumentuj posadzone gatunki, lokalizacje i wskazówki pielegnacyjne dla kazdego ogrodu. Idealne do powtarzajacych sie zlecen pielegnacyjnych.',
      },
      {
        title: 'Plany pielegnacji dla klientów',
        description:
          'Twórz indywidualne plany pielegnacji i udostepniaj je swoim klientom. Ze zdjeciami postepu ogrodu przez sezony.',
      },
    ],
    useCasesEn: [
      {
        title: 'Sezonowe planowanie projektów',
        description:
          'Planuj swoje projekty wzdluz pór roku. Automatyczne przypomnienia o pracach sezonowych, takich jak przycinanie, nawozenie czy zimowa obsluga.',
      },
      {
        title: 'Dokumentacja roslin',
        description:
          'Dokumentuj posadzone gatunki, lokalizacje i wskazówki pielegnacyjne dla kazdego ogrodu. Idealne do powtarzajacych sie zlecen pielegnacyjnych.',
      },
      {
        title: 'Plany pielegnacji dla klientów',
        description:
          'Twórz indywidualne plany pielegnacji i udostepniaj je swoim klientom. Ze zdjeciami postepu ogrodu przez sezony.',
      },
    ],
  },
  {
    id: 'umzug',
    icon: 'Truck',
    titleDe: 'Firmy przeprowadzkowe',
    titleEn: 'Firmy przeprowadzkowe',
    descriptionDe:
      'Codzienne planowanie tras i listy inwentarzowe z dokumentacja fotograficzna dla firm przeprowadzkowych.',
    descriptionEn:
      'Codzienne planowanie tras i listy inwentarzowe z dokumentacja fotograficzna dla firm przeprowadzkowych.',
    slug: 'umzug',
    useCasesDe: [
      {
        title: 'Codzienne planowanie tras',
        description:
          'Planuj codzienne trasy swoich zespolów przeprowadzkowych. Optymalizuj drogi dojazdu i koordynuj miejsca zaladunku i rozladunku efektywnie.',
      },
      {
        title: 'Listy inwentarzowe z dokumentacja fotograficzna',
        description:
          'Twórz szczególowe listy inwentarzowe ze zdjeciami kazdego przedmiotu. Doskonale jako dowód dla ubezpieczen i przeciwko roszczeniom odszkodowawczym.',
      },
      {
        title: 'Protokól szkód',
        description:
          'Dokumentuj stan mebli i przedmiotów przed i po przeprowadzce. Ze znacznikiem czasu i danymi GPS dla maksymalnego bezpieczenstwa.',
      },
    ],
    useCasesEn: [
      {
        title: 'Codzienne planowanie tras',
        description:
          'Planuj codzienne trasy swoich zespolów przeprowadzkowych. Optymalizuj drogi dojazdu i koordynuj miejsca zaladunku i rozladunku efektywnie.',
      },
      {
        title: 'Listy inwentarzowe z dokumentacja fotograficzna',
        description:
          'Twórz szczególowe listy inwentarzowe ze zdjeciami kazdego przedmiotu. Doskonale jako dowód dla ubezpieczen i przeciwko roszczeniom odszkodowawczym.',
      },
      {
        title: 'Protokól szkód',
        description:
          'Dokumentuj stan mebli i przedmiotów przed i po przeprowadzce. Ze znacznikiem czasu i danymi GPS dla maksymalnego bezpieczenstwa.',
      },
    ],
  },
  {
    id: 'haustechnik',
    icon: 'Thermometer',
    titleDe: 'Instalacje budowlane',
    titleEn: 'Instalacje budowlane',
    descriptionDe:
      'Dokumentacja zlecen HVAC i planowanie konserwacji dla techniki grzewczej, wentylacyjnej i klimatyzacyjnej.',
    descriptionEn:
      'Dokumentacja zlecen HVAC i planowanie konserwacji dla techniki grzewczej, wentylacyjnej i klimatyzacyjnej.',
    slug: 'haustechnik',
    useCasesDe: [
      {
        title: 'Dokumentacja zlecen HVAC',
        description:
          'Dokumentuj prace przy instalacjach grzewczych, wentylacyjnych i klimatyzacyjnych ze szczególami technicznymi, zdjeciami i wartosciami pomiarowymi bezposrednio na miejscu.',
      },
      {
        title: 'Planowanie i przypomnienia o konserwacji',
        description:
          'Planuj regularne konserwacje dla wszystkich instalacji. Automatyczne przypomnienia zapewniaja, ze zaden termin nie zostanie pominiety.',
      },
      {
        title: 'Historia instalacji na czesc budynku',
        description:
          'Prowadz kompletna historie kazdej instalacji ze wszystkimi konserwacjami, naprawami i wymienionymi czesciami.',
      },
    ],
    useCasesEn: [
      {
        title: 'Dokumentacja zlecen HVAC',
        description:
          'Dokumentuj prace przy instalacjach grzewczych, wentylacyjnych i klimatyzacyjnych ze szczególami technicznymi, zdjeciami i wartosciami pomiarowymi bezposrednio na miejscu.',
      },
      {
        title: 'Planowanie i przypomnienia o konserwacji',
        description:
          'Planuj regularne konserwacje dla wszystkich instalacji. Automatyczne przypomnienia zapewniaja, ze zaden termin nie zostanie pominiety.',
      },
      {
        title: 'Historia instalacji na czesc budynku',
        description:
          'Prowadz kompletna historie kazdej instalacji ze wszystkimi konserwacjami, naprawami i wymienionymi czesciami.',
      },
    ],
  },
  {
    id: 'architekten',
    icon: 'PenTool',
    titleDe: 'Architekci',
    titleEn: 'Architekci',
    descriptionDe:
      'Centralne dokumenty projektowe i tablica zadan dla faz projektu. Kontroluj wszystkie projekty budowlane.',
    descriptionEn:
      'Centralne dokumenty projektowe i tablica zadan dla faz projektu. Kontroluj wszystkie projekty budowlane.',
    slug: 'architekten',
    useCasesDe: [
      {
        title: 'Centralne dokumenty projektowe',
        description:
          'Zarzadzaj wszystkimi planami, obliczeniami i korespondencja w jednym miejscu. Kazdy czlonek zespolu ma dostep do najnowszej wersji.',
      },
      {
        title: 'Tablica zadan dla faz projektu',
        description:
          'Organizuj projekty w fazy od planowania po odbiór. Przydzielaj zadania i slédz postep w czasie rzeczywistym.',
      },
      {
        title: 'Komunikacja z inwestorem',
        description:
          'Udostepniaj postepy projektu, stany planowania i decyzje przejrzyscie swoim inwestorom przez portal klienta.',
      },
    ],
    useCasesEn: [
      {
        title: 'Centralne dokumenty projektowe',
        description:
          'Zarzadzaj wszystkimi planami, obliczeniami i korespondencja w jednym miejscu. Kazdy czlonek zespolu ma dostep do najnowszej wersji.',
      },
      {
        title: 'Tablica zadan dla faz projektu',
        description:
          'Organizuj projekty w fazy od planowania po odbiór. Przydzielaj zadania i slédz postep w czasie rzeczywistym.',
      },
      {
        title: 'Komunikacja z inwestorem',
        description:
          'Udostepniaj postepy projektu, stany planowania i decyzje przejrzyscie swoim inwestorom przez portal klienta.',
      },
    ],
  },
  {
    id: 'agenturen',
    icon: 'Palette',
    titleDe: 'Agencje',
    titleEn: 'Agencje',
    descriptionDe:
      'Projektowa rejestracja czasu pracy do rozliczen i indywidualne uprawnienia uzytkowników dla Twojego zespolu.',
    descriptionEn:
      'Projektowa rejestracja czasu pracy do rozliczen i indywidualne uprawnienia uzytkowników dla Twojego zespolu.',
    slug: 'agenturen',
    useCasesDe: [
      {
        title: 'Projektowa rejestracja czasu do rozliczen',
        description:
          'Rejestruj czas na projekt i klienta dla przejrzystych rozliczen. Raporty godzinowe moga byc bezposrednio wykorzystane jako podstawa faktur.',
      },
      {
        title: 'Indywidualne uprawnienia uzytkowników',
        description:
          'Okresl dokladnie, kto co moze widziec i edytowac. Od kierowników projektów przez designerów po freelancerów - kazdy ma odpowiednie uprawnienia.',
      },
      {
        title: 'Budzety klientów i projektów',
        description:
          'Zarzadzaj budzetami na klienta i projekt. Automatyczne ostrzezenia o przekroczeniu budzetu chronia przed finansowymi niespodziankami.',
      },
    ],
    useCasesEn: [
      {
        title: 'Projektowa rejestracja czasu do rozliczen',
        description:
          'Rejestruj czas na projekt i klienta dla przejrzystych rozliczen. Raporty godzinowe moga byc bezposrednio wykorzystane jako podstawa faktur.',
      },
      {
        title: 'Indywidualne uprawnienia uzytkowników',
        description:
          'Okresl dokladnie, kto co moze widziec i edytowac. Od kierowników projektów przez designerów po freelancerów - kazdy ma odpowiednie uprawnienia.',
      },
      {
        title: 'Budzety klientów i projektów',
        description:
          'Zarzadzaj budzetami na klienta i projekt. Automatyczne ostrzezenia o przekroczeniu budzetu chronia przed finansowymi niespodziankami.',
      },
    ],
  },
  {
    id: 'einmann-betriebe',
    icon: 'User',
    titleDe: 'Jednoosobowe firmy',
    titleEn: 'Jednoosobowe firmy',
    descriptionDe:
      'Kompletne biuro na smartfonie. Szablony oszczedzaja do 80% czasu administracyjnego dla jednoosobowych przedsiebiorców.',
    descriptionEn:
      'Kompletne biuro na smartfonie. Szablony oszczedzaja do 80% czasu administracyjnego dla jednoosobowych przedsiebiorców.',
    slug: 'einmann-betriebe',
    useCasesDe: [
      {
        title: 'Kompletne biuro na smartfonie',
        description:
          'Oferty, faktury, rejestracja czasu i zarzadzanie klientami - wszystko w jednej aplikacji. Bez potrzeby komputera, zalatwisz wszystko w drodze.',
      },
      {
        title: 'Szablony oszczedzaja 80% czasu administracyjnego',
        description:
          'Korzystaj z gotowych szablonów ofert, faktur i raportów. To, co wczesniej zajmowalo godziny, teraz zrobisz w kilka minut.',
      },
      {
        title: 'Automatyczne przygotowanie ksiegowosci',
        description:
          'Wszystkie przychody i wydatki sa automatycznie rejestrowane. Na koniec roku eksportujesz wszystko dla swojego ksiegowego jednym kliknieciem.',
      },
    ],
    useCasesEn: [
      {
        title: 'Kompletne biuro na smartfonie',
        description:
          'Oferty, faktury, rejestracja czasu i zarzadzanie klientami - wszystko w jednej aplikacji. Bez potrzeby komputera, zalatwisz wszystko w drodze.',
      },
      {
        title: 'Szablony oszczedzaja 80% czasu administracyjnego',
        description:
          'Korzystaj z gotowych szablonów ofert, faktur i raportów. To, co wczesniej zajmowalo godziny, teraz zrobisz w kilka minut.',
      },
      {
        title: 'Automatyczne przygotowanie ksiegowosci',
        description:
          'Wszystkie przychody i wydatki sa automatycznie rejestrowane. Na koniec roku eksportujesz wszystko dla swojego ksiegowego jednym kliknieciem.',
      },
    ],
  },
];
