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
      'Dla małych zespołów, które chcą zrobić pierwszy krok w kierunku cyfryzacji.',
    descriptionEn:
      'Dla małych zespołów, które chcą zrobić pierwszy krok w kierunku cyfryzacji.',
    featuresDe: [
      'Rejestracja czasu pracy na projekt',
      'Dokumentacja fotograficzna z przypisaniem do projektu',
      'Prosty dashboard z przeglądem',
      'Aplikacja mobilna dla pracowników',
      'Do 2 użytkowników',
      'Serwery w Szwajcarii',
      'Wsparcie e-mailowe',
    ],
    featuresEn: [
      'Rejestracja czasu pracy na projekt',
      'Dokumentacja fotograficzna z przypisaniem do projektu',
      'Prosty dashboard z przeglądem',
      'Aplikacja mobilna dla pracowników',
      'Do 2 użytkowników',
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
    priceDe: '100 zł / miesiąc za użytkownika',
    priceEn: '100 zł / miesiąc za użytkownika',
    descriptionDe:
      'Wszystkie funkcje dla rozwijających się firm rzemieślniczych i MŚP. Najpopularniejszy pakiet.',
    descriptionEn:
      'Wszystkie funkcje dla rozwijających się firm rzemieślniczych i MŚP. Najpopularniejszy pakiet.',
    featuresDe: [
      'Wszystko z pakietu Starter',
      'Faktury QR zgodne ze standardem szwajcarskim',
      'Oferty z katalogami usług',
      'Zarządzanie projektami z tablicą zadań',
      'CRM i zarządzanie klientami',
      'Zarządzanie magazynem materiałów i narzędzi',
      'Księgowość z rozliczeniem VAT',
      'Zarządzanie urlopami z procesem zatwierdzania',
      'Portal klienta do śledzenia postępu projektów',
      'Abonamenty serwisowe i umowy konserwacyjne',
      'Rozszerzony dashboard z KPI',
      'Nieograniczona liczba użytkowników',
      'Priorytetowe wsparcie przez czat i e-mail',
    ],
    featuresEn: [
      'Wszystko z pakietu Starter',
      'Faktury QR zgodne ze standardem szwajcarskim',
      'Oferty z katalogami usług',
      'Zarządzanie projektami z tablicą zadań',
      'CRM i zarządzanie klientami',
      'Zarządzanie magazynem materiałów i narzędzi',
      'Księgowość z rozliczeniem VAT',
      'Zarządzanie urlopami z procesem zatwierdzania',
      'Portal klienta do śledzenia postępu projektów',
      'Abonamenty serwisowe i umowy konserwacyjne',
      'Rozszerzony dashboard z KPI',
      'Nieograniczona liczba użytkowników',
      'Priorytetowe wsparcie przez czat i e-mail',
    ],
    highlighted: true,
    ctaDe: 'Testuj 14 dni za darmo',
    ctaEn: 'Testuj 14 dni za darmo',
  },
  {
    id: 'grossfirmen',
    nameDe: 'Duże firmy',
    nameEn: 'Duże firmy',
    priceDe: 'Indywidualnie',
    priceEn: 'Indywidualnie',
    descriptionDe:
      'Rozwiązania szyte na miarę dla większych firm o indywidualnych wymaganiach.',
    descriptionEn:
      'Rozwiązania szyte na miarę dla większych firm o indywidualnych wymaganiach.',
    featuresDe: [
      'Wszystko z pakietu MŚP',
      'Indywidualne funkcje według potrzeb',
      'Osobisty onboarding i szkolenie zespołu',
      'Dedykowana osoba kontaktowa',
      'Dostęp do API do integracji',
      'Rozszerzone uprawnienia użytkowników i role',
      'Indywidualne raporty i eksporty',
      'SLA z gwarantowanym czasem reakcji',
      'Migracja danych z istniejących systemów',
      'Indywidualne szkolenia na miejscu lub zdalnie',
    ],
    featuresEn: [
      'Wszystko z pakietu MŚP',
      'Indywidualne funkcje według potrzeb',
      'Osobisty onboarding i szkolenie zespołu',
      'Dedykowana osoba kontaktowa',
      'Dostęp do API do integracji',
      'Rozszerzone uprawnienia użytkowników i role',
      'Indywidualne raporty i eksporty',
      'SLA z gwarantowanym czasem reakcji',
      'Migracja danych z istniejących systemów',
      'Indywidualne szkolenia na miejscu lub zdalnie',
    ],
    highlighted: false,
    ctaDe: 'Skontaktuj się',
    ctaEn: 'Skontaktuj się',
  },
];
