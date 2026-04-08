export interface PricingTier {
  id: string;
  nameDe: string;
  nameEn: string;
  priceDe: string;
  priceEn: string;
  descriptionDe: string;
  descriptionEn: string;
  featuresDe: string[];
  featuresEn: string[];
  highlighted: boolean;
  ctaDe: string;
  ctaEn: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    nameDe: 'Starter',
    nameEn: 'Starter',
    priceDe: 'Za darmo',
    priceEn: 'Za darmo',
    descriptionDe:
      'Dla malych zespolów, które chca zrobic pierwszy krok w kierunku cyfryzacji.',
    descriptionEn:
      'Dla malych zespolów, które chca zrobic pierwszy krok w kierunku cyfryzacji.',
    featuresDe: [
      'Rejestracja czasu pracy na projekt',
      'Dokumentacja fotograficzna z przypisaniem do projektu',
      'Prosty dashboard z przegladem',
      'Aplikacja mobilna dla pracowników',
      'Do 2 uzytkowników',
      'Serwery w Szwajcarii',
      'Wsparcie e-mailowe',
    ],
    featuresEn: [
      'Rejestracja czasu pracy na projekt',
      'Dokumentacja fotograficzna z przypisaniem do projektu',
      'Prosty dashboard z przegladem',
      'Aplikacja mobilna dla pracowników',
      'Do 2 uzytkowników',
      'Serwery w Szwajcarii',
      'Wsparcie e-mailowe',
    ],
    highlighted: false,
    ctaDe: 'Rozpocznij za darmo',
    ctaEn: 'Rozpocznij za darmo',
  },
  {
    id: 'kmu',
    nameDe: 'MŚP',
    nameEn: 'MŚP',
    priceDe: '100 zł / miesiac za uzytkownika',
    priceEn: '100 zł / miesiac za uzytkownika',
    descriptionDe:
      'Wszystkie funkcje dla rozwijajacych sie firm rzemieślniczych i MŚP. Najpopularniejszy pakiet.',
    descriptionEn:
      'Wszystkie funkcje dla rozwijajacych sie firm rzemieślniczych i MŚP. Najpopularniejszy pakiet.',
    featuresDe: [
      'Wszystko z pakietu Starter',
      'Faktury QR zgodne ze standardem szwajcarskim',
      'Oferty z katalogami uslug',
      'Zarzadzanie projektami z tablica zadan',
      'CRM i zarzadzanie klientami',
      'Zarzadzanie magazynem materialów i narzedzi',
      'Ksiegowosc z rozliczeniem VAT',
      'Zarzadzanie urlopami z procesem zatwierdzania',
      'Portal klienta do sledzenia postepu projektów',
      'Abonamenty serwisowe i umowy konserwacyjne',
      'Rozszerzony dashboard z KPI',
      'Nieograniczona liczba uzytkowników',
      'Priorytetowe wsparcie przez czat i e-mail',
    ],
    featuresEn: [
      'Wszystko z pakietu Starter',
      'Faktury QR zgodne ze standardem szwajcarskim',
      'Oferty z katalogami uslug',
      'Zarzadzanie projektami z tablica zadan',
      'CRM i zarzadzanie klientami',
      'Zarzadzanie magazynem materialów i narzedzi',
      'Ksiegowosc z rozliczeniem VAT',
      'Zarzadzanie urlopami z procesem zatwierdzania',
      'Portal klienta do sledzenia postepu projektów',
      'Abonamenty serwisowe i umowy konserwacyjne',
      'Rozszerzony dashboard z KPI',
      'Nieograniczona liczba uzytkowników',
      'Priorytetowe wsparcie przez czat i e-mail',
    ],
    highlighted: true,
    ctaDe: 'Testuj 30 dni za darmo',
    ctaEn: 'Testuj 30 dni za darmo',
  },
  {
    id: 'grossfirmen',
    nameDe: 'Duze firmy',
    nameEn: 'Duze firmy',
    priceDe: 'Indywidualnie',
    priceEn: 'Indywidualnie',
    descriptionDe:
      'Rozwiazania szyte na miare dla wiekszych firm o indywidualnych wymaganiach.',
    descriptionEn:
      'Rozwiazania szyte na miare dla wiekszych firm o indywidualnych wymaganiach.',
    featuresDe: [
      'Wszystko z pakietu MŚP',
      'Indywidualne funkcje wedlug potrzeb',
      'Osobisty onboarding i szkolenie zespolu',
      'Dedykowana osoba kontaktowa',
      'Dostep do API do integracji',
      'Rozszerzone uprawnienia uzytkowników i role',
      'Indywidualne raporty i eksporty',
      'SLA z gwarantowanym czasem reakcji',
      'Migracja danych z istniejacych systemów',
      'Indywidualne szkolenia na miejscu lub zdalnie',
    ],
    featuresEn: [
      'Wszystko z pakietu MŚP',
      'Indywidualne funkcje wedlug potrzeb',
      'Osobisty onboarding i szkolenie zespolu',
      'Dedykowana osoba kontaktowa',
      'Dostep do API do integracji',
      'Rozszerzone uprawnienia uzytkowników i role',
      'Indywidualne raporty i eksporty',
      'SLA z gwarantowanym czasem reakcji',
      'Migracja danych z istniejacych systemów',
      'Indywidualne szkolenia na miejscu lub zdalnie',
    ],
    highlighted: false,
    ctaDe: 'Skontaktuj sie',
    ctaEn: 'Skontaktuj sie',
  },
];
