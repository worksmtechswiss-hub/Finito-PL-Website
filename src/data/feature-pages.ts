export interface FeaturePageData {
  slug: string;
  iconName: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problemText: string;
  solutionText: string;
  subFeatures: { title: string; description: string }[];
  targetUsers: { role: string; description: string }[];
  relatedSlugs: string[];
}

export const featurePages: Record<string, FeaturePageData> = {
  dashboard: {
    slug: "dashboard",
    iconName: "LayoutDashboard",
    title: "Dashboard",
    description:
      "Wszystkie kluczowe wskaźniki Twojej firmy na pierwszy rzut oka. Finansowe KPI, aktywne projekty, obciążenie pracowników i raporty roczne - wszystko w czasie rzeczywistym.",
    metaTitle: "Dashboard - przegląd KPI dla MŚP | Finito Pro",
    metaDescription:
      "Zachowaj kontrolę nad firmą rzemieślniczą: obroty, otwarte faktury, przepływy pieniężne i postęp projektów w jednym dashboardzie.",
    keywords: [
      "Dashboard MŚP",
      "Dashboard rzemieślnik",
      "Przegląd KPI",
      "Business Intelligence MŚP",
      "Przegląd finansów",
    ],
    problemText:
      "Wiele firm rzemieślniczych nie ma szybkiego wglądu w swoją sytuację finansową. Otwarte faktury, bieżące projekty i obciążenie pracowników są rozproszone w różnych arkuszach Excel lub nawet na papierze. Ważne decyzje podejmowane są intuicyjnie, a nie na podstawie danych.",
    solutionText:
      "Dzięki Dashboard Finito Pro widzisz na pierwszy rzut oka, jak radzi sobie Twoja firma. Obroty, otwarte faktury, przepływy pieniężne i aktywne projekty są wyświetlane w czasie rzeczywistym. Indywidualne widżety można dowolnie konfigurować, a automatyczne raporty miesięczne i roczne ułatwiają rozmowy z Twoim księgowym.",
    subFeatures: [
      {
        title: "Finansowe KPI w czasie rzeczywistym",
        description:
          "Obroty, otwarte faktury, przepływy pieniężne i marża zysku są na bieżąco obliczane i przejrzyście prezentowane. Porównaj swoje wyniki z rokiem poprzednim i wcześnie rozpoznawaj trendy.",
      },
      {
        title: "Postęp projektów na pierwszy rzut oka",
        description:
          "Wszystkie aktywne projekty ze wskaźnikiem postępu, przypisanymi pracownikami i ostrzeżeniami o terminach. Natychmiast rozpoznaj, które projekty są w harmonogramie, a gdzie są opóźnienia.",
      },
      {
        title: "Automatyczne raporty",
        description:
          "Raporty miesięczne i roczne są automatycznie generowane jako PDF. Idealne do rozmów z księgowym lub do własnego planowania. Indywidualnie konfigurowalne szablony raportów.",
      },
      {
        title: "Indywidualne widżety",
        description:
          "Dostosuj swój dashboard do swoich potrzeb. Wybieraj spośród różnych widżetów, takich jak wykresy obrotów, listy zadań, kalendarze pracowników czy ranking klientów.",
      },
    ],
    targetUsers: [
      {
        role: "Dyrektor zarządzający",
        description:
          "Przegląd sytuacji finansowej całej firmy i podstawa do podejmowania decyzji strategicznych.",
      },
      {
        role: "Kierownik projektu",
        description:
          "Wszystkie bieżące projekty w zasięgu wzroku, planowanie zasobów i zarządzanie terminami w jednym miejscu.",
      },
      {
        role: "Biuro / Administracja",
        description:
          "Szybki dostęp do otwartych faktur, zaległych płatności i przeglądu dnia.",
      },
    ],
    relatedSlugs: ["buchhaltung", "projektmanagement", "zeiterfassung"],
  },

  projektmanagement: {
    slug: "projektmanagement",
    iconName: "FolderKanban",
    title: "Zarządzanie projektami",
    description:
      "Zarządzaj wszystkimi projektami mobilnie. Przydzielaj zadania, twórz dokumentację fotograficzną i koordynuj swój zespół w każdym momencie - od placu budowy po biuro.",
    metaTitle: "Zarządzanie projektami dla rzemieślników | Finito Pro",
    metaDescription:
      "Mobilne zarządzanie projektami dla MŚP: zadania, dokumentacja fotograficzna, koordynacja zespołu i szablony projektów. Specjalnie dla firm rzemieślniczych.",
    keywords: [
      "Zarządzanie projektami rzemieślnicy",
      "Mobilne zarządzanie zadaniami",
      "Zarządzanie placem budowy",
      "Oprogramowanie projektowe MŚP",
      "Koordynacja zespołu",
    ],
    problemText:
      "Zlecenia są przekazywane telefonicznie, zmiany giną, a nikt nie wie dokładnie, jak daleko posunął się projekt. Bez centralnego zarządzania brakuje przeglądu, a błędy wynikające z niedostatecznej komunikacji kosztują czas i pieniądze.",
    solutionText:
      "Finito Pro gromadzi wszystkie Twoje projekty w jednym miejscu. Zadania są przydzielane cyfrowo i potwierdzane przez zespół za pomocą aplikacji. Każdy projekt ma kompletną historię ze zdjęciami, czasami i materiałami. Dzięki temu zawsze wiesz, na jakim etapie jest Twoja firma.",
    subFeatures: [
      {
        title: "Mobilne zarządzanie zadaniami",
        description:
          "Twórz i przydzielaj zadania bezpośrednio na placu budowy. Każdy pracownik widzi swoje zadania na smartfonie i może zaktualizować status jednym dotknięciem. Powiadomienia push zapewniają, że nic nie umknie.",
      },
      {
        title: "Dokumentacja fotograficzna w projekcie",
        description:
          "Fotografuj postęp budowy bezpośrednio w aplikacji. Zdjęcia są automatycznie przypisywane do właściwego projektu i zadania. Dane GPS i znaczniki czasu gwarantują kompletną dokumentację.",
      },
      {
        title: "Koordynacja zespołu w czasie rzeczywistym",
        description:
          "W każdej chwili sprawdź, który pracownik gdzie jest na zadaniu. Zmiany są natychmiast komunikowane wszystkim zainteresowanym. Konflikty w planowaniu są automatycznie wykrywane i sygnalizowane.",
      },
      {
        title: "Szablony projektów i automatyzacja",
        description:
          "Twórz szablony dla powtarzających się zleceń i oszczędzaj cenny czas przy zakładaniu projektów. Listy zadań, listy kontrolne i zapotrzebowanie materiałowe mogą być standaryzowane.",
      },
    ],
    targetUsers: [
      {
        role: "Kierownik projektu / Szef",
        description:
          "Planowanie projektów, rozdzielanie zadań i utrzymywanie przeglądu wszystkich placów budowy.",
      },
      {
        role: "Pracownicy na placu budowy",
        description:
          "Przeglądanie zadań, aktualizowanie statusu i przesyłanie zdjęć bezpośrednio z miejsca pracy.",
      },
      {
        role: "Biuro / Administracja",
        description:
          "Śledzenie kosztów projektu, inicjowanie zamówień materiałów i odpowiadanie na zapytania klientów.",
      },
    ],
    relatedSlugs: ["zeiterfassung", "foto-dokumentation", "mitarbeiter-app"],
  },

  rechnungen: {
    slug: "rechnungen",
    iconName: "Receipt",
    title: "Faktury",
    description:
      "Twórz profesjonalne faktury w kilka sekund. Automatyczne obliczanie VAT, przypomnienia o płatnościach i bezproblemowe uzgadnianie z bankiem.",
    metaTitle: "Tworzenie faktur online - oprogramowanie MŚP | Finito Pro",
    metaDescription:
      "Profesjonalne faktury w kilka sekund. Automatyczny VAT, przypomnienia o płatnościach i uzgadnianie bankowe dla firm rzemieślniczych.",
    keywords: [
      "Faktura online",
      "Tworzenie faktur",
      "Faktura VAT",
      "Faktura rzemieślnik",
      "Oprogramowanie do fakturowania MŚP",
    ],
    problemText:
      "Wystawianie faktur jest dla wielu rzemieślników uciążliwym obowiązkiem. Szablony Excel są podatne na błędy, obliczanie VAT odbywa się ręcznie, a czy klient zapłacił, trzeba sprawdzać w bankowości elektronicznej. Przypomnienia o płatnościach są zapominane lub wysyłane zbyt późno.",
    solutionText:
      "Dzięki Finito Pro tworzysz profesjonalne faktury w mniej niż minutę. VAT jest obliczany automatycznie, przypomnienia o płatnościach wysyłane są automatycznie, a uzgadnianie bankowe natychmiast pokazuje, które faktury zostały opłacone.",
    subFeatures: [
      {
        title: "Profesjonalne faktury PDF",
        description:
          "Twórz profesjonalne faktury kilkoma kliknięciami. Faktura jest generowana automatycznie i można ją bezpośrednio wysłać jako PDF lub wydrukować.",
      },
      {
        title: "Automatyczne obliczanie VAT",
        description:
          "Wybierz stawkę VAT (23%, 8%, 5% lub 0%) dla każdej pozycji, a Finito Pro obliczy wszystko automatycznie. Rozliczenie VAT jest przygotowywane i może być bezpośrednio wyeksportowane.",
      },
      {
        title: "Przypomnienia o płatnościach i windykacja",
        description:
          "Ustal, kiedy i jak często mają być wysyłane przypomnienia. Finito Pro monitoruje wpływy płatności i wysyła przypomnienia automatycznie e-mailem. W razie potrzeby można również wysyłać wezwania do zapłaty pocztą.",
      },
      {
        title: "Uzgadnianie bankowe i płatności częściowe",
        description:
          "Połącz swoje konto bankowe i natychmiast sprawdź, które faktury zostały opłacone. Płatności częściowe i ratalne są automatycznie przypisywane, a saldo resztkowe jest prawidłowo obliczane.",
      },
    ],
    targetUsers: [
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Przegląd otwartych faktur i przepływów pieniężnych. Profesjonalny wizerunek wobec klientów.",
      },
      {
        role: "Biuro / Księgowość",
        description:
          "Efektywne tworzenie faktur, prawidłowe rozliczanie VAT i monitorowanie wpływów płatności.",
      },
      {
        role: "Księgowy",
        description:
          "Czyste eksporty do księgowości, prawidłowe rozliczenia VAT i kompletne dokumenty.",
      },
    ],
    relatedSlugs: ["offerten", "buchhaltung", "kundenportal"],
  },

  offerten: {
    slug: "offerten",
    iconName: "FileText",
    title: "Oferty",
    description:
      "Szybkie oferty cyfrowe z zapisanymi katalogami usług. Jednym kliknięciem od oferty do zlecenia - profesjonalnie i oszczędnie czasowo.",
    metaTitle: "Tworzenie ofert cyfrowych - oprogramowanie MŚP | Finito Pro",
    metaDescription:
      "Profesjonalne oferty w kilka minut: katalogi usług, konwersja jednym kliknięciem na zlecenie i cyfrowa akceptacja klienta.",
    keywords: [
      "Tworzenie ofert",
      "Oferta cyfrowa",
      "Oprogramowanie ofertowe MŚP",
      "Katalog usług",
      "Oferta rzemieślnik",
    ],
    problemText:
      "Oferty są często tworzone w Wordzie lub Excelu - za każdym razem od zera. Usługi i ceny trzeba kompletować z pamięci. Śledzenie otwartych ofert ginie, a potencjalne zlecenia są tracone, ponieważ kontakt następuje zbyt późno.",
    solutionText:
      "Finito Pro przechowuje Twoje katalogi usług i cenniki centralnie. Twórz nową ofertę w kilka minut, po prostu wybierając odpowiednie usługi. Gdy oferta zostanie zaakceptowana, zamieniasz ją jednym kliknięciem w zlecenie - bez ponownego wprowadzania danych.",
    subFeatures: [
      {
        title: "Zapisane katalogi usług",
        description:
          "Zapisz wszystkie swoje usługi, materiały i standardowe ceny w katalogu. Przy tworzeniu oferty po prostu wybierasz i w razie potrzeby dostosujesz ilości lub ceny. Koniec z żmudnym kompletowaniem.",
      },
      {
        title: "Profesjonalny design",
        description:
          "Twoje oferty są tworzone w firmowym designie z logo, kolorami i prawidłowym układem. Opcjonalne i alternatywne pozycje mogą być wykazywane oddzielnie. Klient otrzymuje PDF lub może zatwierdzić ofertę cyfrowo w portalu klienta.",
      },
      {
        title: "Konwersja jednym kliknięciem na zlecenie",
        description:
          "Gdy klient się zgodzi, wystarczy jedno kliknięcie: Finito Pro automatycznie tworzy projekt, zadania i zapotrzebowanie materiałowe z oferty. Bez podwójnego wprowadzania danych, bez błędów przy przenoszeniu.",
      },
      {
        title: "Śledzenie otwartych ofert",
        description:
          "Finito Pro automatycznie przypomina o otwartych ofertach. Na pierwszy rzut oka widzisz, które oferty są jeszcze oczekujące, które wygasły, a które zostały zaakceptowane. Żadne zlecenie już nie zginie.",
      },
    ],
    targetUsers: [
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Szybsze tworzenie profesjonalnych ofert i zwiększenie wskaźnika konwersji zleceń.",
      },
      {
        role: "Kierownik projektu",
        description:
          "Od oferty bezpośrednio do projektu ze wszystkimi zadaniami i zapotrzebowaniem materiałowym.",
      },
      {
        role: "Biuro / Obsługa wewnętrzna",
        description:
          "Śledzenie ofert, odpowiadanie na zapytania klientów i wysyłanie potwierdzeń zleceń.",
      },
    ],
    relatedSlugs: ["rechnungen", "projektmanagement", "crm"],
  },

  zeiterfassung: {
    slug: "zeiterfassung",
    iconName: "Clock",
    title: "Ewidencja czasu pracy",
    description:
      "Ewidencja czasu pracy w oparciu o projekty jednym kliknięciem. Raporty miesięczne, śledzenie nadgodzin i bezpośredni eksport do płac - również w drodze.",
    metaTitle: "Ewidencja czasu pracy dla rzemieślników - mobilna i prosta | Finito Pro",
    metaDescription:
      "Mobilna ewidencja czasu pracy według projektów i zadań. Raporty miesięczne, śledzenie nadgodzin, GPS i eksport do płac.",
    keywords: [
      "Ewidencja czasu pracy MŚP",
      "Mobilna ewidencja czasu",
      "Ewidencja czasu rzemieślnicy",
      "Aplikacja do ewidencji czasu",
      "Ewidencja czasu pracy",
    ],
    problemText:
      "Ewidencja czasu pracy na kartkach jest niedokładna, ginie i na koniec miesiąca powoduje dużo pracy. Często brakuje przypisania do projektów, co utrudnia kalkulację końcową. Nadgodziny nie są prawidłowo rejestrowane i prowadzą do nieporozumień.",
    solutionText:
      "Finito Pro sprawia, że ewidencja czasu pracy jest tak prosta, jak to tylko możliwe. Pracownicy uruchamiają i zatrzymują rejestrację czasu jednym kliknięciem w aplikacji. Każda godzina jest automatycznie przypisywana do właściwego projektu. Na koniec miesiąca Finito Pro automatycznie generuje raporty do działu płac.",
    subFeatures: [
      {
        title: "Rejestracja czasu jednym kliknięciem",
        description:
          "Uruchom i zatrzymaj rejestrację czasu jednym dotknięciem na smartfonie. Wybierz projekt i zadanie, a Finito Pro zajmie się resztą. Przerwy i czas przejazdu mogą być rejestrowane oddzielnie.",
      },
      {
        title: "Automatyczne raporty miesięczne",
        description:
          "Na koniec miesiąca Finito Pro automatycznie generuje raport dla każdego pracownika. Godziny pracy, nadgodziny, dni urlopowe i nieobecności są przejrzyście podsumowane i mogą być eksportowane jako CSV lub PDF.",
      },
      {
        title: "Śledzenie nadgodzin",
        description:
          "Zdefiniuj godziny planowane dla każdego pracownika, a Finito Pro automatycznie oblicza nadgodziny. Saldo jest na bieżąco aktualizowane i dostępne w każdym momencie - zarówno dla pracownika, jak i dla szefa.",
      },
      {
        title: "Rejestracja na placu budowy z GPS",
        description:
          "Na życzenie Finito Pro rejestruje lokalizację przy rozpoczęciu i zakończeniu pracy. Dzięki temu możesz udowodnić, że Twoi pracownicy rzeczywiście byli na właściwym placu budowy.",
      },
    ],
    targetUsers: [
      {
        role: "Pracownicy na placu budowy",
        description:
          "Proste i szybkie rejestrowanie czasu bezpośrednio na miejscu przez aplikację. Koniec z papierową biurokracją.",
      },
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Przegląd czasu pracy całego zespołu i rzetelna kalkulacja końcowa.",
      },
      {
        role: "Biuro / Płace",
        description:
          "Automatyczne raporty miesięczne i eksport do rozliczania wynagrodzeń bez ręcznej pracy.",
      },
    ],
    relatedSlugs: ["projektmanagement", "mitarbeiter-app", "buchhaltung"],
  },

  crm: {
    slug: "crm",
    iconName: "UserCircle",
    title: "CRM i zarządzanie klientami",
    description:
      "Wszystkie dane klientów w jednym miejscu. Historia kontaktów, powtarzające się zlecenia i indywidualny portal klienta - dla długotrwałych relacji z klientami.",
    metaTitle: "CRM dla firm rzemieślniczych - zarządzanie klientami | Finito Pro",
    metaDescription:
      "Centralne zarządzanie klientami dla MŚP: historia kontaktów, projekty, faktury i portal klienta w jednym miejscu. Specjalnie dla firm rzemieślniczych.",
    keywords: [
      "CRM rzemieślnicy",
      "Zarządzanie klientami MŚP",
      "Zarządzanie kontaktami",
      "Historia klientów",
      "Oprogramowanie CRM MŚP",
    ],
    problemText:
      "Dane klientów są rozproszone w różnych folderach, w telefonie i w e-mailach. Kto kiedy co zamówił? Jakie ustalenia zostały poczynione? Bez centralnego zarządzania każde zapytanie klienta kosztuje niepotrzebnie czas, a personalna obsługa cierpi.",
    solutionText:
      "Finito Pro gromadzi wszystkie informacje o kliencie w jednym miejscu: dane kontaktowe, wszystkie projekty, oferty, faktury, zdjęcia i notatki. Dzięki temu przy każdym telefonie natychmiast widzisz, o co chodzi, i oferujesz swoim klientom pierwszorzędną obsługę.",
    subFeatures: [
      {
        title: "Centralne zarządzanie kontaktami",
        description:
          "Wszystkie dane kontaktowe, adresy i osoby kontaktowe w jednym miejscu. Dzięki wydajnemu wyszukiwaniu znajdziesz każdego klienta w kilka sekund. Tagi i kategorie umożliwiają precyzyjną segmentację.",
      },
      {
        title: "Kompletna historia klienta",
        description:
          "Każdy kontakt z klientem jest dokumentowany: projekty, oferty, faktury, zdjęcia i notatki. Na pierwszy rzut oka widzisz całą historię klienta i możesz natychmiast reagować.",
      },
      {
        title: "Powtarzające się zlecenia",
        description:
          "Planuj regularne interwencje u klienta automatycznie. Finito Pro przypomina o nadchodzących konserwacjach i na życzenie automatycznie tworzy projekty. Idealne dla abonamentów serwisowych i umów konserwacyjnych.",
      },
      {
        title: "Portal klienta",
        description:
          "Zapewnij swoim klientom dostęp do własnego portalu. Mogą tam śledzić postęp projektu, zatwierdzać oferty, przeglądać faktury i oglądać zdjęcia - bez instalacji aplikacji.",
      },
    ],
    targetUsers: [
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Pielęgnowanie długotrwałych relacji z klientami i utrzymywanie przeglądu wszystkich klientów.",
      },
      {
        role: "Biuro / Obsługa wewnętrzna",
        description:
          "Natychmiastowy dostęp do wszystkich istotnych informacji przy zapytaniach klientów.",
      },
      {
        role: "Kierownik projektu",
        description:
          "Przeglądanie historii klienta, aby przy nowych projektach bazować na wcześniejszych doświadczeniach.",
      },
    ],
    relatedSlugs: ["kundenportal", "service-abos", "offerten"],
  },

  ferienmanagement: {
    slug: "ferienmanagement",
    iconName: "CalendarDays",
    title: "Zarządzanie urlopami",
    description:
      "Mobilne wnioski urlopowe, przegląd pozostałych dni i obieg zatwierdzania. Dzięki kalendarzowi zespołu unikasz braków kadrowych i planujesz z wyprzedzeniem.",
    metaTitle: "Zarządzanie urlopami dla MŚP - wnioski urlopowe cyfrowo | Finito Pro",
    metaDescription:
      "Cyfrowe zarządzanie urlopami dla MŚP: mobilne wnioski urlopowe, obieg zatwierdzania, pozostałe dni i kalendarz zespołu. Polskie dni wolne w zestawie.",
    keywords: [
      "Zarządzanie urlopami MŚP",
      "Wniosek urlopowy cyfrowy",
      "Planer urlopów online",
      "Zarządzanie nieobecnościami",
      "Planowanie urlopów rzemieślnicy",
    ],
    problemText:
      "Wnioski urlopowe składane e-mailem lub ustnie prowadzą do chaosu. Kto ma jeszcze ile dni? Czy jest wystarczająco pracowników na placu budowy? Bez centralnego planowania regularnie dochodzi do braków kadrowych, a obliczanie pozostałych dni na koniec roku to koszmar.",
    solutionText:
      "Dzięki Finito Pro pracownicy składają wnioski urlopowe bezpośrednio ze smartfona. Przełożony widzi w kalendarzu zespołu od razu, czy jest wystarczająco dużo personelu, i może jednym kliknięciem zatwierdzić lub odrzucić wniosek. Pozostałe dni są obliczane automatycznie.",
    subFeatures: [
      {
        title: "Mobilne wnioski urlopowe",
        description:
          "Pracownicy składają wniosek urlopowy bezpośrednio przez aplikację. Wybierają okres, a wniosek jest natychmiast przekazywany przełożonemu. Bez papierowej biurokracji, bez chaosu e-mailowego.",
      },
      {
        title: "Obieg zatwierdzania",
        description:
          "Przełożeni otrzymują powiadomienie push i mogą jednym kliknięciem zatwierdzić lub odrzucić wniosek. Pracownik jest automatycznie informowany o decyzji.",
      },
      {
        title: "Kalendarz zespołu i ostrzeżenie o brakach",
        description:
          "Kalendarz zespołu pokazuje na pierwszy rzut oka, kto kiedy jest nieobecny. Gdy grożą braki kadrowe, Finito Pro automatycznie ostrzega. Dzięki temu zawsze masz wystarczająco pracowników.",
      },
      {
        title: "Automatyczne obliczanie pozostałych dni",
        description:
          "Przysługujący urlop, wykorzystane dni i pozostałe dni są obliczane automatycznie - również przy niepełnym etacie. Polskie dni ustawowo wolne od pracy są już wstępnie skonfigurowane.",
      },
    ],
    targetUsers: [
      {
        role: "Pracownik",
        description:
          "Prosty wniosek urlopowy przez aplikację i wgląd w własne saldo pozostałych dni w każdym momencie.",
      },
      {
        role: "Przełożony / Szef",
        description:
          "Zatwierdzanie wniosków urlopowych i zapewnienie wystarczającej dostępności personelu.",
      },
      {
        role: "HR / Administracja",
        description:
          "Automatyczne prowadzenie kont urlopowych i tworzenie czytelnych raportów do działu płac.",
      },
    ],
    relatedSlugs: ["mitarbeiter-app", "zeiterfassung", "dashboard"],
  },

  "foto-dokumentation": {
    slug: "foto-dokumentation",
    iconName: "Camera",
    title: "Dokumentacja fotograficzna",
    description:
      "Zdjęcia przed/po z automatycznym przypisaniem do projektu. Znaczniki czasu i dane GPS dla kompletnych dowodów jakości - bezpośrednio ze smartfona.",
    metaTitle: "Dokumentacja fotograficzna dla placów budowy | Finito Pro",
    metaDescription:
      "Cyfrowa dokumentacja fotograficzna dla rzemieślników: zdjęcia przed/po, automatyczne przypisanie do projektu, GPS i znaczniki czasu dla dowodów jakości.",
    keywords: [
      "Dokumentacja fotograficzna plac budowy",
      "Zdjęcia z budowy",
      "Zdjęcia przed po",
      "Dowód jakości",
      "Fotodokumentacja rzemieślnicy",
    ],
    problemText:
      "Zdjęcia z placu budowy lądują na prywatnych smartfonach i później nie można ich odnaleźć. Bez przypisania do projektu są bezwartościowe dla dokumentacji. Przy reklamacjach lub sprawach ubezpieczeniowych brakuje dowodów i zaczyna się żmudne przeszukiwanie grup WhatsApp.",
    solutionText:
      "Dzięki Finito Pro Twoi pracownicy fotografują bezpośrednio w aplikacji. Każde zdjęcie jest automatycznie przypisywane do właściwego projektu, opatrzone znacznikiem czasu i danymi GPS. Dzięki temu masz w każdym momencie kompletny dowód - dla klientów, ubezpieczeń i własnej kontroli jakości.",
    subFeatures: [
      {
        title: "Automatyczne przypisanie do projektu",
        description:
          "Zdjęcia wykonane w aplikacji Finito Pro są automatycznie przypisywane do aktywnego projektu. Koniec z żmudnym sortowaniem lub późniejszym przypisywaniem. Wszystko jest od razu we właściwym miejscu.",
      },
      {
        title: "Porównanie przed/po",
        description:
          "Dokumentuj stan przed i po wykonaniu prac. Finito Pro umożliwia przejrzysty widok przed/po, który możesz bezpośrednio udostępnić klientowi.",
      },
      {
        title: "Znaczniki czasu i dane GPS",
        description:
          "Każde zdjęcie jest automatycznie opatrzone znacznikiem czasu i współrzędnymi GPS. Dzięki temu masz prawnie wiążący dowód, kiedy i gdzie praca została wykonana.",
      },
      {
        title: "Nieograniczona przestrzeń dyskowa",
        description:
          "Zapisuj tyle zdjęć, ile chcesz. Wszystkie obrazy są bezpiecznie przechowywane w chmurze i dostępne w każdym momencie przez aplikację lub przeglądarkę. Archiwizacja przez co najmniej 25 lat.",
      },
    ],
    targetUsers: [
      {
        role: "Pracownicy na placu budowy",
        description:
          "Wykonywanie zdjęć bezpośrednio na miejscu z automatycznym przypisaniem do projektu.",
      },
      {
        role: "Kierownik projektu",
        description:
          "Śledzenie postępu budowy zdalnie i sprawdzanie jakości na podstawie zdjęć.",
      },
      {
        role: "Dyrektor zarządzający",
        description:
          "Dowody jakości dla klientów i ubezpieczeń dostępne w każdym momencie.",
      },
    ],
    relatedSlugs: ["projektmanagement", "mitarbeiter-app", "kundenportal"],
  },

  lagerverwaltung: {
    slug: "lagerverwaltung",
    iconName: "Package",
    title: "Zarządzanie magazynem",
    description:
      "Zarządzanie materiałami i narzędziami z automatycznym odliczaniem dla projektu. Kontroluj stan magazynowy i zamawiaj na czas.",
    metaTitle: "Zarządzanie magazynem dla firm rzemieślniczych | Finito Pro",
    metaDescription:
      "Cyfrowe zarządzanie magazynem dla MŚP: śledzenie materiałów, automatyczne odliczanie projektowe, ostrzeżenia o minimalnym stanie i skaner kodów kreskowych.",
    keywords: [
      "Zarządzanie magazynem MŚP",
      "Śledzenie materiałów",
      "Magazyn rzemieślnika",
      "Zarządzanie zapasami",
      "Zarządzanie inwentarzem MŚP",
    ],
    problemText:
      "Stan magazynowy jest prowadzony na kartkach lub wcale. Materiały brakują wtedy, gdy są potrzebne, a zamówienia następują zbyt późno. Brakuje przypisania materiałów do projektów, co uniemożliwia kalkulację końcową.",
    solutionText:
      "Finito Pro rejestruje każdy materiał cyfrowo. Gdy pracownicy pobierają materiał do projektu, stan jest automatycznie aktualizowany i przypisywany do projektu. Przy niskim zapasie system automatycznie ostrzega, a zamówienie uzupełniające jest o jedno kliknięcie dalej.",
    subFeatures: [
      {
        title: "Cyfrowe zarządzanie materiałami",
        description:
          "Rejestruj wszystkie materiały, narzędzia i artykuły eksploatacyjne w cyfrowym magazynie. Każdy artykuł ma opis, kategorię, dostawcę i aktualny stan.",
      },
      {
        title: "Automatyczne odliczanie projektowe",
        description:
          "Gdy pracownik pobiera materiał do projektu, wystarczy skan w aplikacji. Stan jest automatycznie zmniejszany, a koszty przypisywane do projektu.",
      },
      {
        title: "Ostrzeżenia o minimalnym stanie",
        description:
          "Zdefiniuj minimalny stan dla każdego materiału. Gdy zapas spadnie poniżej, automatycznie otrzymasz ostrzeżenie. Dzięki temu zamawiasz na czas i unikasz przestojów.",
      },
      {
        title: "Skaner kodów kreskowych i dostawcy",
        description:
          "Rejestruj materiały za pomocą skanera kodów kreskowych w kilka sekund. Zapisz dostawców z numerami zamówień do szybkiego zamawiania. Linki do zamówień prowadzą bezpośrednio do właściwego produktu.",
      },
    ],
    targetUsers: [
      {
        role: "Magazynier",
        description:
          "Cyfrowe prowadzenie stanów magazynowych, księgowanie przyjęć i wydań materiałów oraz inicjowanie zamówień.",
      },
      {
        role: "Pracownicy na placu budowy",
        description:
          "Przypisywanie materiałów do projektu za pomocą skanu w aplikacji i zgłaszanie zapotrzebowania na zamówienia.",
      },
      {
        role: "Dyrektor zarządzający",
        description:
          "Śledzenie kosztów materiałowych na projekt i poprawa kalkulacji końcowej.",
      },
    ],
    relatedSlugs: ["projektmanagement", "buchhaltung", "mitarbeiter-app"],
  },

  buchhaltung: {
    slug: "buchhaltung",
    iconName: "Calculator",
    title: "Księgowość",
    description:
      "Przejrzyste zarządzanie przychodami i wydatkami. Zarządzanie kosztami na projekt, rozliczenie VAT i czysty eksport dla Twojego księgowego.",
    metaTitle: "Prosta księgowość dla MŚP | Finito Pro",
    metaDescription:
      "Księgowość MŚP prosto: przychody/wydatki, rozliczenie VAT, koszty projektowe i eksport dla księgowego.",
    keywords: [
      "Księgowość MŚP",
      "Księgowość rzemieślnicy",
      "Rachunek przychodów i wydatków",
      "Rozliczenie VAT MŚP",
      "Eksport dla księgowego",
    ],
    problemText:
      "Księgowość jest dla wielu MŚP koniecznym złem. Dokumenty się piętrzą, rozliczenie VAT jest robione w pośpiechu na koniec kwartału, a księgowy dostaje pudełko pełne paragonów. Przegląd finansów gubi się przy tym wszystkim.",
    solutionText:
      "Finito Pro rejestruje przychody i wydatki na bieżąco i automatycznie. Faktury są bezpośrednio księgowane, dokumenty mogą być rejestrowane zdjęciem. Na koniec kwartału rozliczenie VAT jest już przygotowane, a eksport dla Twojego księgowego jest o jedno kliknięcie dalej.",
    subFeatures: [
      {
        title: "Zarządzanie przychodami i wydatkami",
        description:
          "Wszystkie przychody i wydatki są na bieżąco rejestrowane i kategoryzowane. Faktury tworzone przez Finito Pro są automatycznie księgowane jako przychód. Dokumenty mogą być rejestrowane zdjęciem.",
      },
      {
        title: "Zarządzanie kosztami na projekt",
        description:
          "Na pierwszy rzut oka sprawdź, ile naprawdę kosztował każdy projekt. Materiały, czas pracy i dodatkowe koszty są automatycznie rejestrowane i przypisywane do projektu. Dzięki temu kalkulacja końcowa staje się dziecinnie prosta.",
      },
      {
        title: "Przygotowane rozliczenie VAT",
        description:
          "Finito Pro automatycznie oblicza należny VAT i przygotowuje rozliczenie. Dzięki temu oszczędzasz na koniec kwartału godziny pracy i unikasz kosztownych błędów.",
      },
      {
        title: "Eksport dla księgowego",
        description:
          "Eksportuj wszystkie księgowania, dokumenty i raporty w odpowiednim formacie dla Twojego księgowego. Obsługiwane są formaty CSV, PDF i inne. Wszystkie dane bezpiecznie przechowywane w chmurze.",
      },
    ],
    targetUsers: [
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Przegląd sytuacji finansowej i solidna podstawa do podejmowania decyzji biznesowych.",
      },
      {
        role: "Biuro / Księgowość",
        description:
          "Efektywne rejestrowanie przychodów i wydatków, rozliczanie VAT i zarządzanie dokumentami.",
      },
      {
        role: "Księgowy",
        description:
          "Czyste, ustrukturyzowane dane i dokumenty dla efektywnej współpracy.",
      },
    ],
    relatedSlugs: ["rechnungen", "dashboard", "zeiterfassung"],
  },

  "mitarbeiter-app": {
    slug: "mitarbeiter-app",
    iconName: "Smartphone",
    title: "Aplikacja pracownika",
    description:
      "Przeglądaj zadania, rejestruj czas, przesyłaj zdjęcia i komunikuj się z zespołem - wszystko ze smartfona, również bez zasięgu internetu.",
    metaTitle: "Aplikacja pracownika dla rzemieślników - mobilna aplikacja budowlana | Finito Pro",
    metaDescription:
      "Aplikacja pracownika dla firm rzemieślniczych: zadania, rejestracja czasu, zdjęcia i komunikacja na smartfonie. Również offline.",
    keywords: [
      "Aplikacja pracownika",
      "Aplikacja rzemieślnika",
      "Aplikacja budowlana",
      "Mobilna rejestracja czasu",
      "Aplikacja offline plac budowy",
    ],
    problemText:
      "Pracownicy na placu budowy nie mają dostępu do systemów biurowych. Informacje są wymieniane telefonicznie lub przez WhatsApp, co prowadzi do nieporozumień. Karty czasu pracy są wypełniane wieczorem z pamięci, a zdjęcia lądują na prywatnych telefonach.",
    solutionText:
      "Aplikacja pracownika Finito Pro przynosi wszystko, co ważne, na smartfon Twoich pracowników. Zadania, rejestracja czasu, dokumentacja fotograficzna i komunikacja są dostępne przez jedną aplikację. Tryb offline zapewnia, że wszystko działa również bez zasięgu internetu.",
    subFeatures: [
      {
        title: "Zadania na smartfonie",
        description:
          "Każdy pracownik widzi swoje zadania i plan dnia na smartfonie. Aktualizacje statusu można ustawiać jednym dotknięciem. Powiadomienia push informują o nowych lub zmienionych zadaniach.",
      },
      {
        title: "Rejestracja czasu jednym kliknięciem",
        description:
          "Start, pauza i stop rejestracji czasu bezpośrednio w aplikacji. Czas jest automatycznie przypisywany do aktywnego projektu. Również czas przejazdu i przerwy są prawidłowo rejestrowane.",
      },
      {
        title: "Przesyłanie zdjęć bezpośrednio",
        description:
          "Wykonuj i przesyłaj zdjęcia bezpośrednio z aplikacji. Automatyczne przypisanie do projektu, znaczniki czasu i dane GPS zapewniają kompletną dokumentację. Koniec z szukaniem na prywatnym telefonie.",
      },
      {
        title: "Tryb offline dla placu budowy",
        description:
          "Na placach budowy bez zasięgu aplikacja działa offline. Wszystkie dane są zapisywane lokalnie i automatycznie synchronizowane, gdy tylko połączenie zostanie przywrócone.",
      },
    ],
    targetUsers: [
      {
        role: "Pracownik / Monter",
        description:
          "Zarządzanie zadaniami, czasem i zdjęciami bezpośrednio na placu budowy - szybko i bez komplikacji.",
      },
      {
        role: "Brygadzista / Lider zespołu",
        description:
          "Koordynacja planu dnia, sprawdzanie statusu zespołu i natychmiastowa komunikacja zmian.",
      },
      {
        role: "Dyrektor zarządzający",
        description:
          "Przegląd w czasie rzeczywistym dotyczący zaangażowania i postępu wszystkich pracowników.",
      },
    ],
    relatedSlugs: ["zeiterfassung", "foto-dokumentation", "projektmanagement"],
  },

  kundenportal: {
    slug: "kundenportal",
    iconName: "Users",
    title: "Portal klienta",
    description:
      "Udostępniaj postęp projektu swoim klientom. Transparentna komunikacja, zdjęcia postępu i cyfrowe zatwierdzenia budują zaufanie.",
    metaTitle: "Portal klienta dla firm rzemieślniczych | Finito Pro",
    metaDescription:
      "Cyfrowy portal klienta dla MŚP: udostępnianie postępu projektu, zatwierdzanie ofert i przeglądanie faktur. Bez instalacji aplikacji.",
    keywords: [
      "Portal klienta",
      "Komunikacja z klientem",
      "Udostępnianie postępu projektu",
      "Cyfrowe zatwierdzanie",
      "Satysfakcja klienta rzemiosło",
    ],
    problemText:
      "Klienci ciągle pytają o status swojego projektu. Każdy telefon kosztuje czas i przerywa pracę. Oferty są podpisywane i odsyłane pocztą, faktury giną, a komunikacja jest nieefektywna.",
    solutionText:
      "Dzięki portalowi klienta Finito Pro dajesz swoim klientom dokładnie taki wgląd, jakiego potrzebują. Postęp projektu, zdjęcia, oferty i faktury są dostępne online w każdym momencie. Oferty mogą być zatwierdzone cyfrowo - bez wymiany e-maili.",
    subFeatures: [
      {
        title: "Transparentne udostępnianie postępu projektu",
        description:
          "Twoi klienci widzą aktualny stan swojego projektu w czasie rzeczywistym. Aktualizacje statusu, kamienie milowe i przebieg czasowy są przejrzyście prezentowane. Koniec z pytaniami.",
      },
      {
        title: "Udostępnianie zdjęć i dokumentacji",
        description:
          "Udostępniaj zdjęcia postępu automatycznie swoim klientom. Porównania przed/po i kompletna dokumentacja fotograficzna są dostępne w portalu. Idealny profesjonalny wizerunek.",
      },
      {
        title: "Cyfrowe zatwierdzanie ofert",
        description:
          "Klienci mogą sprawdzić oferty bezpośrednio w portalu i cyfrowo je zatwierdzić lub zażądać zmian. Bez czasu oczekiwania na pocztę, bez zapomnianych podpisów. Cały proces jest przyspieszony.",
      },
      {
        title: "Przeglądanie faktur i dokumentów",
        description:
          "Wszystkie faktury i istotne dokumenty są dostępne w portalu. Klient ma w każdym momencie przegląd otwartych i opłaconych faktur. Bez instalacji aplikacji - wszystko w przeglądarce.",
      },
    ],
    targetUsers: [
      {
        role: "Twoi klienci (prywatni i firmowi)",
        description:
          "Postęp projektu, zdjęcia i faktury dostępne w każdym momencie - transparentnie i wygodnie.",
      },
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Profesjonalny wizerunek i mniej zapytań klientów dzięki transparentności.",
      },
      {
        role: "Biuro / Obsługa wewnętrzna",
        description:
          "Mniej telefonów i e-maili, ponieważ klienci mogą sami się informować.",
      },
    ],
    relatedSlugs: ["crm", "foto-dokumentation", "offerten"],
  },

  "service-abos": {
    slug: "service-abos",
    iconName: "Repeat",
    title: "Umowy serwisowe",
    description:
      "Zarządzanie powtarzającymi się zleceniami z automatycznym tworzeniem projektów. Idealne dla umów konserwacyjnych, abonamentów serwisowych i regularnych interwencji.",
    metaTitle: "Umowy serwisowe i konserwacyjne | Finito Pro",
    metaDescription:
      "Automatyczne zarządzanie powtarzającymi się zleceniami: umowy konserwacyjne, abonamenty serwisowe, automatyczne tworzenie projektów i fakturowanie dla MŚP.",
    keywords: [
      "Abonament serwisowy",
      "Oprogramowanie umów konserwacyjnych",
      "Powtarzające się zlecenia",
      "Automatyczne tworzenie projektów",
      "Umowa serwisowa MŚP",
    ],
    problemText:
      "Powtarzające się zlecenia muszą być za każdym razem ręcznie zakładane. Interwały konserwacyjne są zapominane, a klient jest niezadowolony. Fakturowanie abonamentów serwisowych jest pracochłonne i podatne na błędy, a z czasem traci się przegląd, który klient ma jaki serwis.",
    solutionText:
      "Finito Pro całkowicie automatyzuje powtarzające się zlecenia. Zdefiniuj jednorazowo rytm (tygodniowy, miesięczny, roczny), a Finito Pro automatycznie tworzy projekt, zadania i fakturę. Bez zapominania, bez podwójnej pracy.",
    subFeatures: [
      {
        title: "Automatyczne tworzenie projektów",
        description:
          "Zdefiniuj abonament serwisowy z rytmem, zadaniami i materiałami. Finito Pro w zdefiniowanym czasie automatycznie tworzy nowy projekt ze wszystkimi szczegółami. Twój zespół od razu wie, co robić.",
      },
      {
        title: "Cyfrowe odwzorowanie umów konserwacyjnych",
        description:
          "Odwzoruj umowy konserwacyjne ze wszystkimi warunkami cyfrowo. Zakres usług, interwały i okres obowiązywania umowy są przejrzyście udokumentowane. Przy zmianach umowa jest wersjonowana.",
      },
      {
        title: "Przypomnienia i powiadomienia",
        description:
          "Otrzymuj na czas przypomnienia o nadchodzących interwencjach serwisowych. Twoi klienci również mogą być automatycznie informowani. Żaden termin już nie umknie.",
      },
      {
        title: "Automatyczne fakturowanie",
        description:
          "Po każdej interwencji serwisowej faktura może być automatycznie wystawiona. Ryczałty, stawki godzinowe lub indywidualne ceny - wszystko jest prawidłowo rozliczane i dostarczane klientowi.",
      },
    ],
    targetUsers: [
      {
        role: "Dyrektor zarządzający / Właściciel",
        description:
          "Planowalne, powtarzające się przychody dzięki zautomatyzowanym abonamentom serwisowym i umowom konserwacyjnym.",
      },
      {
        role: "Dyspozytor / Planista",
        description:
          "Automatyczne tworzenie projektów i przydzielanie pracowników do powtarzających się interwencji.",
      },
      {
        role: "Biuro / Księgowość",
        description:
          "Automatyczne wystawianie faktur i czyste przypisywanie przychodów do umów.",
      },
    ],
    relatedSlugs: ["crm", "projektmanagement", "rechnungen"],
  },
};

export const featureSlugs = Object.keys(featurePages);
