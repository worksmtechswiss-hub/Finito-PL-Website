import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { branches } from "@/data/branches";
import { features } from "@/data/features";
import { BranchPageContent } from "./BranchPageContent";

const branchBySlug = (slug: string) => branches.find((b) => b.slug === slug);

// Map of relevant feature slugs per branch
const relevantFeaturesMap: Record<string, string[]> = {
  malarze: ["oferty", "zarzadzanie-projektami", "faktury", "dokumentacja-zdjec", "portal-klienta"],
  tynkarze: ["dokumentacja-zdjec", "magazyn", "zarzadzanie-projektami", "faktury"],
  elektrycy: ["magazyn", "ewidencja-czasu-pracy", "zarzadzanie-projektami", "faktury"],
  hydraulicy: ["ewidencja-czasu-pracy", "zarzadzanie-projektami", "faktury", "aplikacja-pracownika"],
  stolarze: ["oferty", "dashboard", "zarzadzanie-projektami", "magazyn"],
  dekarze: ["ewidencja-czasu-pracy", "zarzadzanie-projektami", "aplikacja-pracownika", "dokumentacja-zdjec"],
  posadzkarze: ["oferty", "magazyn", "zarzadzanie-projektami", "faktury"],
  rusztowania: ["magazyn", "faktury", "zarzadzanie-projektami", "ewidencja-czasu-pracy"],
  murarze: ["zarzadzanie-projektami", "dokumentacja-zdjec", "dashboard", "ewidencja-czasu-pracy"],
  "obsluga-budynkow": ["umowy-serwisowe", "zarzadzanie-projektami", "ewidencja-czasu-pracy", "aplikacja-pracownika"],
  sprzatanie: ["ewidencja-czasu-pracy", "zarzadzanie-projektami", "dokumentacja-zdjec", "umowy-serwisowe"],
  ogrodnictwo: ["zarzadzanie-projektami", "ewidencja-czasu-pracy", "dokumentacja-zdjec", "umowy-serwisowe"],
  przeprowadzki: ["zarzadzanie-projektami", "dokumentacja-zdjec", "ewidencja-czasu-pracy", "magazyn"],
  "technika-budynkowa": ["umowy-serwisowe", "zarzadzanie-projektami", "ewidencja-czasu-pracy", "magazyn"],
  architekci: ["zarzadzanie-projektami", "dashboard", "ewidencja-czasu-pracy", "portal-klienta"],
  agencje: ["ewidencja-czasu-pracy", "faktury", "zarzadzanie-projektami", "crm"],
  "jednoosobowe-firmy": ["oferty", "faktury", "ewidencja-czasu-pracy", "aplikacja-pracownika"],
};

const defaultWorkflow = [
  { step: "Tworzenie oferty", desc: "Profesjonalna oferta w kilka minut dzieki zapisanym katalogom uslug." },
  { step: "Realizacja projektu", desc: "Koordynacja zespolu, dokumentacja fotograficzna, rejestracja czasu - wszystko mobilnie." },
  { step: "Dokumentacja jakosci", desc: "Rejestrowanie postepu za pomoca zdjec i notatek oraz udostepnianie klientom." },
  { step: "Wyslanie faktury", desc: "Generowanie faktury jednym kliknieciem i bezposrednia wysylka." },
];

const workflowMap: Record<string, { step: string; desc: string }[]> = {
  malarze: [
    { step: "Oferta z katalogu uslug", desc: "Wybor gotowych pozycji i dostosowanie do zlecenia." },
    { step: "Rozpoczecie zlecenia i planowanie zespolu", desc: "Przeksztalcenie oferty i przypisanie zespolu." },
    { step: "Dokumentacja na miejscu", desc: "Dokumentowanie postepow zdjeciami i przesylanie." },
    { step: "Wystawienie faktury", desc: "Automatyczne generowanie faktury i wysylka z kodem standard." },
  ],
  tynkarze: [
    { step: "Pomiar powierzchni", desc: "Rejestracja pomieszczen i powierzchni bezposrednio na miejscu na smartfonie." },
    { step: "Tworzenie fotoraportu", desc: "Dokumentowanie kazdego etapu pracy zdjeciami i notatkami." },
    { step: "Ksiegowanie materialu", desc: "Zuzyty material jest automatycznie odejmowany ze stanu magazynowego." },
    { step: "Generowanie faktury", desc: "Tworzenie faktury bezposrednio z zarejestrowanych danych projektowych." },
  ],
  elektrycy: [
    { step: "Przesylanie schematow", desc: "Przesylanie schematow elektrycznych - zespol ma dostep mobilny." },
    { step: "Rejestracja czasu i raport", desc: "Rejestracja czasu pracy i materialu bezposrednio na placu budowy." },
    { step: "Sprawdzanie stanu magazynu", desc: "Sprawdzanie kabli i czesci specjalnych z linkiem do dostawcy." },
    { step: "Podpis cyfrowy", desc: "Klient podpisuje cyfrowo, faktura jest wystawiana." },
  ],
  hydraulicy: [
    { step: "Planowanie zlecenia", desc: "Planowanie zlecen w kalendarzu i przypisywanie pracownikow." },
    { step: "Rozpoczecie rejestracji czasu", desc: "Pracownicy rozpoczynaja rejestracje czasu po przybyciu." },
    { step: "Tworzenie raportu prac", desc: "Tworzenie raportu na miejscu z materialem, czasem i zdjeciami." },
    { step: "Podpis klienta", desc: "Po podpisaniu faktura jest generowana automatycznie." },
  ],
  stolarze: [
    { step: "Zlecenie z wymiarami", desc: "Dokumentowanie indywidualnych wymiarow i preferencji materialowych." },
    { step: "Planowanie warsztatu", desc: "Przegladanie aktualnego obciazenia i planowanie czasu produkcji." },
    { step: "Rejestrowanie postepu", desc: "Dokumentowanie postepu produkcji zdjeciami i statusem." },
    { step: "Dostawa i faktura", desc: "Dokumentowanie montazu i wystawienie faktury koncowej." },
  ],
  dekarze: [
    { step: "Rozdzielanie zespolow", desc: "Wykorzystanie kalendarza do optymalnego planowania pracownikow." },
    { step: "Dokumentacja bezpieczenstwa", desc: "Rejestrowanie warunkow pogodowych i srodkow bezpieczenstwa." },
    { step: "Rejestrowanie postepu budowy", desc: "Dokumentowanie postepu ze znacznikiem czasu i GPS." },
    { step: "Archiwizacja 25+ lat", desc: "Wszystkie dane zaszyfrowane i przechowywane dlugoterminowo." },
  ],
  posadzkarze: [
    { step: "Pomiar pomieszczen", desc: "Pomiar powierzchni i automatyczne obliczanie zapotrzebowania na material." },
    { step: "Dokumentowanie wzoru", desc: "Rejestrowanie wzoru ukladania zdjeciami i notatkami." },
    { step: "Zamawianie materialu", desc: "Zamawianie materialu z naddatkiem na odpady, sledzenie resztek." },
    { step: "Odbior i faktura", desc: "Dokumentowanie odbioru i wystawienie faktury." },
  ],
  rusztowania: [
    { step: "Przypisywanie elementow", desc: "Sledzenie kazdego elementu od dostawy do zwrotu." },
    { step: "Przeprowadzanie inspekcji", desc: "Dokumentowanie regularnych inspekcji za pomoca list kontrolnych." },
    { step: "Obliczanie czasu najmu", desc: "Czas najmu jest automatycznie rejestrowany dla kazdego placu budowy." },
    { step: "Rozliczenie najmu", desc: "Automatyczne generowanie faktur na podstawie czasu najmu." },
  ],
  murarze: [
    { step: "Tworzenie placow budowy", desc: "Zarzadzanie wieloma placami budowy rownolegle z filtrami statusu." },
    { step: "Prowadzenie dziennika budowy", desc: "Codzienna rejestracja pogody, obecnosci i postepu." },
    { step: "Obliczanie materialu", desc: "Obliczanie ilosci na podstawie postepu budowy." },
    { step: "Zamkniecie projektu", desc: "Zamykanie projektow z pelna dokumentacja." },
  ],
  "obsluga-budynkow": [
    { step: "Definiowanie interwalow konserwacji", desc: "Ustalanie interwalow dla ogrzewania, wentylacji, wind." },
    { step: "Automatyczne zlecenia", desc: "Zlecenia sa tworzone automatycznie w wyznaczonym terminie." },
    { step: "Koordynacja partnerow", desc: "Partnerzy zewnetrzni widza zadania w czasie rzeczywistym." },
    { step: "Prowadzenie dokumentacji obiektu", desc: "Archiwizacja konserwacji i danych urzadzen dla kazdej czesci budynku." },
  ],
  sprzatanie: [
    { step: "Planowanie tras", desc: "Optymalizacja tras i przypisywanie obiektow do zespolow." },
    { step: "Realizacja list kontrolnych", desc: "Pracownicy odhaczaja zadania na smartfonie." },
    { step: "Dokumentacja jakosci", desc: "Zdjecia przed/po jako dowod dla zleceniodawcy." },
    { step: "Potwierdzenie wykonania", desc: "Automatyczne generowanie potwierdzen wykonania i faktur." },
  ],
  ogrodnictwo: [
    { step: "Planowanie prac sezonowych", desc: "Planowanie przycinania, nawozenia i zimowego utrzymania." },
    { step: "Dokumentowanie roslin", desc: "Rejestracja gatunkow, lokalizacji i wskazowek pielegnacji dla kazdego ogrodu." },
    { step: "Przydzielanie zespolu", desc: "Przypisywanie pracownikow i mobilna rejestracja czasu pracy." },
    { step: "Udostepnianie planu pielegnacji", desc: "Udostepnianie zdjec postepu przez portal klienta." },
  ],
  przeprowadzki: [
    { step: "Rejestracja inwentarza", desc: "Tworzenie szczegolowych list inwentaryzacyjnych ze zdjeciami." },
    { step: "Optymalizacja tras dziennych", desc: "Planowanie miejsc zaladunku i rozladunku dla maksymalnej wydajnosci." },
    { step: "Dokumentowanie stanu", desc: "Rejestrowanie stanu wszystkich przedmiotow ze znacznikiem czasu." },
    { step: "Protokol i faktura", desc: "Tworzenie protokolu szkod i faktury koncowej." },
  ],
  "technika-budynkowa": [
    { step: "Dokumentowanie instalacji", desc: "Rejestracja danych technicznych i pomiarow na miejscu." },
    { step: "Tworzenie planu konserwacji", desc: "Definiowanie interwalow konserwacji dla kazdej instalacji." },
    { step: "Protokolowanie wizyt serwisowych", desc: "Dokumentowanie kazdej wizyty zdjeciami i pomiarami." },
    { step: "Prowadzenie historii", desc: "Kompletna archiwizacja konserwacji i napraw." },
  ],
  architekci: [
    { step: "Centralizacja dokumentow", desc: "Plany i obliczenia w jednym miejscu, zawsze aktualne." },
    { step: "Organizacja tablicy", desc: "Zarzadzanie fazami projektu od planowania do odbioru." },
    { step: "Koordynacja zespolu", desc: "Przypisywanie zadan i sledzenie postepu." },
    { step: "Informowanie inwestorow", desc: "Udostepnianie postepow przez portal klienta." },
  ],
  agencje: [
    { step: "Tworzenie projektu i budzetu", desc: "Definiowanie projektow z budzetami klientow i ramami czasowymi." },
    { step: "Rejestracja czasu", desc: "Zespol rejestruje czas z przypisaniem do projektu." },
    { step: "Zarzadzanie uprawnieniami", desc: "Definiowanie indywidualnych praw dostepu dla kazdej roli." },
    { step: "Tworzenie rozliczenia", desc: "Rozliczenia na podstawie zarejestrowanego czasu." },
  ],
  "jednoosobowe-firmy": [
    { step: "Oferta z szablonu", desc: "Korzystanie z szablonow - minuty zamiast godzin." },
    { step: "Zarzadzanie w drodze", desc: "Wszystko ze smartfona, bez potrzeby komputera." },
    { step: "Rejestracja czasu i zdjec", desc: "Dokumentowanie pracy w czasie rzeczywistym." },
    { step: "Wyslanie faktury", desc: "Wystawienie faktury i bezposrednia wysylka." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Unique SEO metadata per branch                                     */
/* ------------------------------------------------------------------ */
const seoMetaMap: Record<string, { title: string; description: string; keywords: string[] }> = {
  malarze: {
    title: "Oprogramowanie dla malarzy Szwajcaria - oferty, rejestracja czasu i faktury | Finito Pro",
    description: "Najlepsze oprogramowanie dla malarzy w Szwajcarii. Oferty w 3 minuty, cyfrowe fotoraporty, faktury i rejestracja czasu. 14 dni bezplatnego testu.",
    keywords: ["oprogramowanie dla malarzy", "oprogramowanie malarskie Szwajcaria", "cyfryzacja firmy malarskiej", "oferty malarze", "rejestracja czasu malarze", "faktura malarze"],
  },
  tynkarze: {
    title: "Oprogramowanie dla tynkarzy Szwajcaria - fotoraporty i zarzadzanie magazynem | Finito Pro",
    description: "Oprogramowanie dla tynkarzy: cyfrowe fotoraporty, automatyczne zarzadzanie magazynem i faktury. Obliczanie powierzchni i pomiary bezposrednio na miejscu.",
    keywords: ["oprogramowanie dla tynkarzy", "oprogramowanie tynkarskie Szwajcaria", "oprogramowanie dla firm tynkarskich", "fotoraport tynkarze", "zarzadzanie magazynem tynkarze"],
  },
  elektrycy: {
    title: "Oprogramowanie dla elektrykow Szwajcaria - schematy mobilnie i zarzadzanie magazynem | Finito Pro",
    description: "Oprogramowanie dla elektrykow: schematy elektryczne na smartfonie, zarzadzanie magazynem z linkami do dostawcow i cyfrowe raporty prac.",
    keywords: ["oprogramowanie dla elektrykow", "oprogramowanie elektryczne Szwajcaria", "oprogramowanie elektroinstalacyjne", "zarzadzanie magazynem elektrycy", "cyfrowy raport prac"],
  },
  hydraulicy: {
    title: "Oprogramowanie dla hydraulikow Szwajcaria - rejestracja czasu i raporty prac | Finito Pro",
    description: "Oprogramowanie dla instalatorow sanitarnych: mobilna rejestracja czasu, cyfrowe raporty prac z podpisem klienta i automatyczne faktury.",
    keywords: ["oprogramowanie dla hydraulikow", "oprogramowanie sanitarne Szwajcaria", "oprogramowanie dla instalatorow", "rejestracja czasu hydraulicy", "raport prac hydraulicy"],
  },
  stolarze: {
    title: "Oprogramowanie dla stolarzy Szwajcaria - oferty i planowanie warsztatu | Finito Pro",
    description: "Oprogramowanie dla stolarni: szczegolowe oferty na zamowienia indywidualne, obciazenie warsztatu w panelu i dokumentowanie postepu projektu.",
    keywords: ["oprogramowanie dla stolarzy", "oprogramowanie stolarskie Szwajcaria", "oprogramowanie dla stolarni", "planowanie warsztatu oprogramowanie", "oferty stolarze"],
  },
  dekarze: {
    title: "Oprogramowanie dla dekarzy Szwajcaria - planowanie zespolu i archiwizacja | Finito Pro",
    description: "Oprogramowanie dla dekarzy: planowanie pracownikow z kalendarzem, cyfrowe archiwum projektow na ponad 25 lat i dokumentacja bezpieczenstwa.",
    keywords: ["oprogramowanie dla dekarzy", "oprogramowanie dekarskie Szwajcaria", "oprogramowanie dla firm dekarskich", "planowanie zespolu dekarze", "archiwum projektow"],
  },
  posadzkarze: {
    title: "Oprogramowanie dla posadzkarzy Szwajcaria - obliczanie materialu i dokumentacja | Finito Pro",
    description: "Oprogramowanie dla posadzkarzy: automatyczne obliczanie metrow kwadratowych, sledzenie resztek materialu i dokumentacja wzoru ukladania.",
    keywords: ["oprogramowanie dla posadzkarzy", "oprogramowanie posadzkarskie Szwajcaria", "oprogramowanie parkieciarskie", "oprogramowanie do plytkarstwa", "obliczanie materialu posadzkarze"],
  },
  rusztowania: {
    title: "Oprogramowanie dla firm rusztowaniowych Szwajcaria - sledzenie elementow i rozliczenie najmu | Finito Pro",
    description: "Oprogramowanie dla firm rusztowaniowych: sledzenie elementow rusztowan od dostawy do zwrotu, automatyczne rozliczenie najmu i inspekcje bezpieczenstwa.",
    keywords: ["oprogramowanie rusztowaniowe", "oprogramowanie dla firm rusztowaniowych Szwajcaria", "sledzenie rusztowan", "rozliczenie najmu rusztowan", "inspekcja bezpieczenstwa"],
  },
  murarze: {
    title: "Oprogramowanie dla murarzy Szwajcaria - dziennik budowy i zarzadzanie projektami | Finito Pro",
    description: "Oprogramowanie dla murarzy: automatyczny dziennik budowy, przeglad wielu projektow i obliczanie materialu na podstawie postepu budowy.",
    keywords: ["oprogramowanie dla murarzy", "oprogramowanie murarskie Szwajcaria", "oprogramowanie dla firm budowlanych", "cyfrowy dziennik budowy", "zarzadzanie projektami budowlanymi"],
  },
  "obsluga-budynkow": {
    title: "Oprogramowanie Facility Management Szwajcaria - konserwacja i koordynacja | Finito Pro",
    description: "Program do obsługi technicznej budynków: zautomatyzowane interwaly konserwacji, koordynacja partnerow i cyfrowe dokumentacje obiektow dla kazdej czesci budynku.",
    keywords: ["oprogramowanie obsługa techniczna budynków", "oprogramowanie zarządzanie budynkami", "planowanie konserwacji oprogramowanie", "zarzadzanie budynkami oprogramowanie"],
  },
  sprzatanie: {
    title: "Oprogramowanie dla firm sprzatajacych Szwajcaria - planowanie tras i dokumentacja jakosci | Finito Pro",
    description: "Oprogramowanie dla firm sprzatajacych: planowanie tras, dokumentacja jakosci ze zdjeciami i automatyczne potwierdzenia wykonania.",
    keywords: ["oprogramowanie dla firm sprzatajacych", "oprogramowanie sprzatajace Szwajcaria", "planowanie tras sprzatanie", "dokumentacja jakosci sprzatanie"],
  },
  ogrodnictwo: {
    title: "Oprogramowanie ogrodnicze Szwajcaria - planowanie sezonowe i dokumentacja | Finito Pro",
    description: "Oprogramowanie ogrodnicze: sezonowe planowanie projektow, dokumentacja roslin i plany pielegnacji dla klientow. Rejestracja czasu w zestawie.",
    keywords: ["oprogramowanie ogrodnicze", "oprogramowanie ogrodnicze Szwajcaria", "oprogramowanie do pielegnacji krajobrazu", "planowanie sezonowe ogrodnictwo", "dokumentacja roslin"],
  },
  przeprowadzki: {
    title: "Oprogramowanie dla firm przeprowadzkowych Szwajcaria - listy inwentaryzacyjne i planowanie tras | Finito Pro",
    description: "Oprogramowanie dla firm przeprowadzkowych: szczegolowe listy inwentaryzacyjne ze zdjeciami, planowanie tras i protokol szkod ze znacznikiem czasu.",
    keywords: ["oprogramowanie przeprowadzkowe", "oprogramowanie dla firm przeprowadzkowych Szwajcaria", "lista inwentaryzacyjna przeprowadzki", "planowanie tras przeprowadzki", "protokol szkod"],
  },
  "technika-budynkowa": {
    title: "Oprogramowanie dla instalacji budowlanych Szwajcaria - planowanie konserwacji i HVAC | Finito Pro",
    description: "Oprogramowanie dla instalacji budowlanych: dokumentacja HVAC, automatyczne planowanie konserwacji i kompletna historia instalacji dla kazdej czesci budynku.",
    keywords: ["oprogramowanie instalacje budowlane", "oprogramowanie instalacje budowlane Szwajcaria", "oprogramowanie HVAC", "planowanie konserwacji ogrzewanie", "dokumentacja instalacji"],
  },
  architekci: {
    title: "Oprogramowanie dla architektow Szwajcaria - dokumenty projektowe i tablica zadan | Finito Pro",
    description: "Oprogramowanie dla architektow: centralne dokumenty projektowe, tablica zadan dla faz budowy i przejrzysta komunikacja z inwestorami przez portal klienta.",
    keywords: ["oprogramowanie dla architektow", "oprogramowanie architektoniczne Szwajcaria", "oprogramowanie dla biur architektonicznych", "zarzadzanie projektami architekci", "tablica zadan fazy budowy"],
  },
  agencje: {
    title: "Oprogramowanie dla agencji Szwajcaria - rejestracja czasu i zarzadzanie budzetem | Finito Pro",
    description: "Oprogramowanie dla agencji: rejestracja czasu oparta na projektach, indywidualne uprawnienia uzytkownikow i budzety klientow z automatycznymi ostrzezeniami.",
    keywords: ["oprogramowanie dla agencji", "oprogramowanie agencyjne Szwajcaria", "rejestracja czasu agencja", "zarzadzanie projektami agencja", "oprogramowanie budzetowe agencja"],
  },
  "jednoosobowe-firmy": {
    title: "Oprogramowanie dla jednoosobowych firm Szwajcaria - biuro na smartfonie | Finito Pro",
    description: "Oprogramowanie dla samozatrudnionych i jednoosobowych firm: oferty, faktury, rejestracja czasu - wszystko w jednej aplikacji na smartfonie.",
    keywords: ["oprogramowanie dla jednoosobowych firm", "oprogramowanie dla samozatrudnionych Szwajcaria", "oprogramowanie dla przedsiebiorcow", "aplikacja dla rzemieslnikow", "biuro na smartfonie"],
  },
};

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const branch = branchBySlug(slug);
  if (!branch) return {};

  const seo = seoMetaMap[slug];
  const title = seo?.title || `Oprogramowanie ${branch.titleDe} Szwajcaria | Finito Pro`;
  const description = seo?.description || branch.descriptionDe;
  const keywords = seo?.keywords || [
    `oprogramowanie ${branch.titleDe}`,
    `oprogramowanie ${branch.titleDe} Szwajcaria`,
    "oprogramowanie dla MSP",
    "oprogramowanie rzemieslnicze Szwajcaria",
    `rejestracja czasu ${branch.titleDe}`,
    `faktury ${branch.titleDe}`,
  ];

  return generatePageMetadata({
    title,
    description,
    path: `/branze/${slug}`,
    locale,
    keywords,
  });
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const branch = branchBySlug(slug);
  if (!branch) notFound();

  const featureSlugs = relevantFeaturesMap[slug] || ["zarzadzanie-projektami", "faktury", "ewidencja-czasu-pracy"];
  const relevantFeatures = featureSlugs
    .map((fs) => features.find((f) => f.slug === fs))
    .filter(Boolean) as typeof features;
  const workflow = workflowMap[slug] || defaultWorkflow;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Strona glowna", path: "/" },
              { name: "Branze", path: "/branze" },
              { name: branch.titleDe, path: `/branze/${slug}` },
            ])
          ),
        }}
      />
      <BranchPageContent
        branch={branch}
        relevantFeatures={relevantFeatures}
        workflow={workflow}
      />
    </>
  );
}
