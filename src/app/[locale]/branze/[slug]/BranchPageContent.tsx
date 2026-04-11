"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  Paintbrush, Hammer, Zap, Droplets, Ruler, Home, Grid3x3,
  Building2, Blocks, Building, Sparkles, TreePine, Truck,
  Thermometer, PenTool, Palette, User, ArrowRight, Check,
  FileText, Users, FolderKanban, Clock, Send, LayoutDashboard,
  Palmtree, Camera, Warehouse, Calculator, Smartphone, Globe,
  RefreshCw, TrendingUp, Quote, ChevronRight, CheckCircle, MapPin,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { Branch } from "@/data/branches";
import type { Feature } from "@/data/features";

const branchIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Paintbrush, Hammer, Zap, Droplets, Ruler, Home, Grid3x3,
  Building2, Blocks, Building, Sparkles, TreePine, Truck,
  Thermometer, PenTool, Palette, User,
};

const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Users, FolderKanban, Clock, Send, LayoutDashboard,
  Palmtree, Camera, Warehouse, Calculator, Smartphone, Globe,
  RefreshCw,
};

/* ------------------------------------------------------------------ */
/*  "Warum Finito" benefits per branch                                 */
/* ------------------------------------------------------------------ */
const whyFinitoMap: Record<string, string[]> = {
  malarze: [
    "Oferty w 3 zamiast 30 minut dzięki zapisanym katalogom usług",
    "Zarządzanie kolorami i zamawianie materiałów bezpośrednio z projektu",
    "Zdjęcia przed/po automatycznie przypisane do projektu",
    "Faktury QR tworzone i wysyłane jednym kliknięciem",
    "Portal klienta dla przejrzystego postępu projektów",
    "Rejestracja czasu bezpośrednio na placu budowy przez smartfon",
  ],
  tynkarze: [
    "Cyfrowe fotoraporty jako dowód jakości dla ubezpieczeń",
    "Zarządzanie magazynem z automatycznym odejmowaniem materiału na projekt",
    "Pomiary i obliczanie powierzchni bezpośrednio na miejscu",
    "Faktury QR generowane automatycznie z danych projektowych",
    "Tryb offline dla placów budowy bez zasięgu",
    "Automatyczna dokumentacja wszystkich etapów pracy",
  ],
  elektrycy: [
    "Schematy elektryczne i dokumenty techniczne zawsze dostępne mobilnie",
    "Zarządzanie magazynem z bezpośrednim linkiem do dostawców",
    "Cyfrowe raporty prac z podpisem klienta na miejscu",
    "Rejestracja czasu i materiałów w jednej aplikacji",
    "Faktury QR generowane bezpośrednio z zarejestrowanych danych",
    "Wszystkie normy i certyfikaty zarchiwizowane dla każdego projektu",
  ],
  hydraulicy: [
    "Mobilna rejestracja czasu z rozdzieleniem czasu jazdy i pracy",
    "Cyfrowe raporty prac z natychmiastowym podpisem klienta",
    "Zarządzanie częściami zamiennymi dla pojazdu serwisowego",
    "Automatyczne faktury QR po zakończeniu zlecenia",
    "Planowanie zleceń z kalendarzem i przypisaniem zespołu",
    "Kompletna dokumentacja dla roszczeń gwarancyjnych",
  ],
  stolarze: [
    "Dokumentowanie indywidualnych zamówień ze wszystkimi szczegółami",
    "Obciążenie warsztatu i planowanie produkcji w panelu",
    "Szczegółowe oferty na sztuki jednostkowe i serie",
    "Udostępnianie zdjęć postępu klientom przez portal",
    "Kalkulacja materiałów i czasu na zlecenie",
    "Faktury QR po montażu i odbiorze",
  ],
  dekarze: [
    "Planowanie pracowników z kalendarzem i przypisaniem zespołu",
    "Cyfrowe archiwum projektów na ponad 25 lat",
    "Dokumentacja pogody i bezpieczeństwa na każdy dzień pracy",
    "Rejestracja czasu z lokalizacją GPS na placu budowy",
    "Zdjęcia ze znacznikiem czasu jako dowód jakości",
    "Faktury QR i automatyczne przypomnienia o płatności",
  ],
  posadzkarze: [
    "Automatyczne obliczanie metrów kwadratowych z naddatkiem na odpady",
    "Śledzenie resztek materiału dla mniejszych zleceń naprawczych",
    "Dokumentowanie wzoru układania zdjęciami i notatkami",
    "Zamawianie materiału bezpośrednio z projektu",
    "Dokumentacja przed/po dla klienta",
    "Faktury QR wysyłane natychmiast po odbiorze",
  ],
  rusztowania: [
    "Śledzenie każdego elementu rusztowania od dostawy do zwrotu",
    "Automatyczne rozliczenie najmu na podstawie czasu postoju",
    "Dokumentowanie inspekcji bezpieczeństwa za pomocą list kontrolnych",
    "Przegląd wielu placów budowy z filtrami statusu",
    "Podgląd stanu magazynowego w czasie rzeczywistym",
    "Automatyczne faktury QR za najem i serwis",
  ],
  murarze: [
    "Automatyczny dziennik budowy z pogodą i obecnością",
    "Zarządzanie wieloma placami budowy równolegle z filtrowaniem",
    "Zamawianie materiału i betonu na podstawie postępu",
    "Dokumentacja fotograficzna z automatycznym przypisaniem do projektu",
    "Rejestracja czasu na plac budowy i pracownika",
    "Prawnie bezpieczna dokumentacja dla wszystkich projektów",
  ],
  "obsluga-budynkow": [
    "Zautomatyzowane interwały konserwacji dla wszystkich instalacji",
    "Koordynacja partnerów i podwykonawców przez platformę",
    "Cyfrowa dokumentacja obiektu dla każdej części budynku",
    "Abonamenty serwisowe z automatycznym fakturowaniem",
    "Kompletna historia konserwacji dla każdej instalacji",
    "Automatyczne faktury QR i potwierdzenia wykonania",
  ],
  sprzatanie: [
    "Planowanie tras dla optymalnego rozdzielenia zespołów",
    "Dokumentacja jakości ze zdjęciami przed/po",
    "Indywidualne listy kontrolne dla każdego obiektu i części budynku",
    "Rejestracja czasu na obiekt i pracownika",
    "Automatyczne potwierdzenia wykonania dla zleceniodawców",
    "Abonamenty serwisowe na powtarzające się zlecenia sprzątania",
  ],
  ogrodnictwo: [
    "Sezonowe planowanie projektów z automatycznymi przypomnieniami",
    "Dokumentacja roślin z gatunkami i wskazówkami pielęgnacji",
    "Udostępnianie planów pielęgnacji klientom przez portal",
    "Rejestracja czasu bezpośrednio w ogrodzie przez smartfon",
    "Dokumentacja fotograficzna postępu ogrodowego",
    "Abonamenty serwisowe na regularne zlecenia pielęgnacyjne",
  ],
  przeprowadzki: [
    "Szczegółowe listy inwentaryzacyjne z dokumentacją fotograficzną",
    "Codzienne planowanie tras dla maksymalnej wydajności",
    "Protokół szkód ze znacznikiem czasu i danymi GPS",
    "Dokumentowany stan przed/po wszystkich przedmiotów",
    "Rejestracja czasu na przeprowadzkę i pracownika",
    "Faktury QR bezpośrednio po zakończeniu zlecenia",
  ],
  "technika-budynkowa": [
    "Dokumentacja HVAC z danymi technicznymi i pomiarami",
    "Planowanie konserwacji z automatycznymi przypomnieniami",
    "Kompletna historia instalacji dla każdej części budynku",
    "Protokoły wizyt serwisowych ze zdjęciami i pomiarami",
    "Zarządzanie częściami zamiennymi i ponowne zamawianie",
    "Abonamenty serwisowe na regularne umowy konserwacyjne",
  ],
  architekci: [
    "Wszystkie dokumenty projektowe centralnie i zawsze aktualne",
    "Tablica zadań dla faz projektu od planowania do odbioru",
    "Przejrzysta komunikacja z inwestorami przez portal",
    "Rejestracja czasu na projekt dla precyzyjnego rozliczenia",
    "Automatyczne wersjonowanie wszystkich dokumentów",
    "Panel z przeglądem projektów i filtrami statusu",
  ],
  agencje: [
    "Rejestracja czasu oparta na projektach dla przejrzystego rozliczenia",
    "Indywidualne uprawnienia użytkowników dla roli i projektu",
    "Budżety klientów z automatyczną funkcją ostrzegania",
    "Raporty godzinowe jako podstawa fakturowania",
    "CRM do zarządzania klientami i kontaktami",
    "Faktury QR oparte na zarejestrowanym czasie",
  ],
  "jednoosobowe-firmy": [
    "Kompletne biuro na smartfonie — bez potrzeby komputera",
    "Szablony oszczędzają do 80% czasu administracyjnego",
    "Automatyczne przygotowanie księgowości dla biura rachunkowego",
    "Oferty, faktury i raporty w jednej aplikacji",
    "Faktury QR tworzone i wysyłane jednym kliknięciem",
    "Rejestracja czasu i dokumentacja projektów w drodze",
  ],
};

/* ------------------------------------------------------------------ */
/*  Time/money savings per branch                                      */
/* ------------------------------------------------------------------ */
interface BranchSaving {
  task: string;
  vorher: string;
  nachher: string;
  ersparnis: string;
}

const savingsMap: Record<string, BranchSaving[]> = {
  malarze: [
    { task: "Tworzenie oferty", vorher: "30 min", nachher: "3 min", ersparnis: "27 min na ofertę" },
    { task: "Wysyłanie faktury", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
    { task: "Raport miesięczny", vorher: "2 godz.", nachher: "0 min", ersparnis: "24 godz./rok" },
  ],
  tynkarze: [
    { task: "Tworzenie fotoraportu", vorher: "45 min", nachher: "5 min", ersparnis: "40 min na raport" },
    { task: "Domawianie materiału", vorher: "30 min", nachher: "2 min", ersparnis: "28 min na zamówienie" },
    { task: "Obliczanie powierzchni", vorher: "20 min", nachher: "2 min", ersparnis: "18 min na pomiar" },
  ],
  elektrycy: [
    { task: "Tworzenie raportu prac", vorher: "30 min", nachher: "5 min", ersparnis: "25 min na raport" },
    { task: "Sprawdzanie stanu magazynu", vorher: "15 min", nachher: "1 min", ersparnis: "14 min na sprawdzenie" },
    { task: "Faktura z kodem QR", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
  ],
  hydraulicy: [
    { task: "Raport prac z podpisem", vorher: "25 min", nachher: "3 min", ersparnis: "22 min na wizytę" },
    { task: "Raport czasu na koniec miesiąca", vorher: "2 godz.", nachher: "0 min", ersparnis: "24 godz./rok" },
    { task: "Wystawienie faktury", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
  ],
  stolarze: [
    { task: "Szczegółowa oferta", vorher: "45 min", nachher: "10 min", ersparnis: "35 min na ofertę" },
    { task: "Dokumentowanie postępu zlecenia", vorher: "15 min", nachher: "2 min", ersparnis: "13 min na wpis" },
    { task: "Faktura końcowa", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
  ],
  dekarze: [
    { task: "Planowanie zespołu na tydzień", vorher: "1 godz.", nachher: "15 min", ersparnis: "45 min na tydzień" },
    { task: "Dokumentacja bezpieczeństwa", vorher: "20 min/dzień", nachher: "3 min/dzień", ersparnis: "17 min na dzień" },
    { task: "Wystawienie faktury QR", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
  ],
  posadzkarze: [
    { task: "Obliczanie materiału", vorher: "30 min", nachher: "2 min", ersparnis: "28 min na projekt" },
    { task: "Dokumentacja układania", vorher: "15 min", nachher: "0 min", ersparnis: "15 min na projekt" },
    { task: "Protokół odbioru + faktura", vorher: "25 min", nachher: "3 min", ersparnis: "22 min na odbiór" },
  ],
  rusztowania: [
    { task: "Rozliczenie najmu", vorher: "30 min", nachher: "1 min", ersparnis: "29 min na rozliczenie" },
    { task: "Kontrola inwentaryzacyjna", vorher: "2 godz.", nachher: "15 min", ersparnis: "105 min na kontrolę" },
    { task: "Inspekcja bezpieczeństwa", vorher: "20 min", nachher: "5 min", ersparnis: "15 min na inspekcję" },
  ],
  murarze: [
    { task: "Prowadzenie dziennika budowy", vorher: "20 min/dzień", nachher: "3 min/dzień", ersparnis: "17 min na dzień" },
    { task: "Zamawianie materiału", vorher: "30 min", nachher: "5 min", ersparnis: "25 min na zamówienie" },
    { task: "Dokumentacja zamknięcia projektu", vorher: "1 godz.", nachher: "10 min", ersparnis: "50 min na projekt" },
  ],
  "obsluga-budynkow": [
    { task: "Tworzenie zlecenia konserwacji", vorher: "15 min", nachher: "0 min", ersparnis: "100% automatycznie" },
    { task: "Komunikacja z partnerami", vorher: "20 min", nachher: "2 min", ersparnis: "18 min na zlecenie" },
    { task: "Aktualizacja dokumentacji obiektu", vorher: "10 min", nachher: "0 min", ersparnis: "automatycznie" },
  ],
  sprzatanie: [
    { task: "Planowanie tras", vorher: "30 min", nachher: "5 min", ersparnis: "25 min na tydzień" },
    { task: "Dokumentacja jakości", vorher: "15 min", nachher: "2 min", ersparnis: "13 min na obiekt" },
    { task: "Potwierdzenie wykonania + faktura", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
  ],
  ogrodnictwo: [
    { task: "Planowanie sezonowe", vorher: "2 godz.", nachher: "20 min", ersparnis: "100 min na sezon" },
    { task: "Dokumentacja roślin", vorher: "15 min", nachher: "2 min", ersparnis: "13 min na ogród" },
    { task: "Raport dla klienta", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na raport" },
  ],
  przeprowadzki: [
    { task: "Tworzenie listy inwentaryzacyjnej", vorher: "45 min", nachher: "10 min", ersparnis: "35 min na przeprowadzkę" },
    { task: "Protokół szkód", vorher: "20 min", nachher: "5 min", ersparnis: "15 min na przeprowadzkę" },
    { task: "Faktura końcowa", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
  ],
  "technika-budynkowa": [
    { task: "Protokół wizyty serwisowej", vorher: "25 min", nachher: "5 min", ersparnis: "20 min na wizytę" },
    { task: "Planowanie konserwacji", vorher: "30 min", nachher: "0 min", ersparnis: "100% automatycznie" },
    { task: "Prowadzenie historii instalacji", vorher: "10 min", nachher: "0 min", ersparnis: "automatycznie" },
  ],
  architekci: [
    { task: "Kompletowanie dokumentów", vorher: "30 min", nachher: "2 min", ersparnis: "28 min na projekt" },
    { task: "Aktualizacja dla inwestora", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na aktualizację" },
    { task: "Tworzenie przeglądu projektu", vorher: "15 min", nachher: "0 min", ersparnis: "Panel w czasie rzeczywistym" },
  ],
  agencje: [
    { task: "Tworzenie raportu godzinowego", vorher: "30 min", nachher: "1 min", ersparnis: "29 min na raport" },
    { task: "Faktura na podstawie czasu", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
    { task: "Kontrola budżetu", vorher: "15 min", nachher: "0 min", ersparnis: "Automatyczne ostrzeżenia" },
  ],
  "jednoosobowe-firmy": [
    { task: "Oferta z szablonu", vorher: "30 min", nachher: "3 min", ersparnis: "27 min na ofertę" },
    { task: "Wystawienie faktury QR", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakturę" },
    { task: "Przygotowanie zamknięcia rocznego", vorher: "8 godz.", nachher: "30 min", ersparnis: "7,5 godz. rocznie" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Testimonial quotes per branch                                      */
/* ------------------------------------------------------------------ */
const testimonialMap: Record<string, { quote: string; author: string; role: string }> = {
  malarze: { quote: "Od kiedy korzystamy z Finito, tworzymy oferty w 3 zamiast 30 minut.", author: "M. Keller", role: "Mistrz malarski, 8 pracowników" },
  tynkarze: { quote: "Automatyczna dokumentacja fotograficzna oszczędza nam co tydzień godziny pracy biurowej.", author: "R. Baumann", role: "Mistrz tynkarski, 5 pracowników" },
  elektrycy: { quote: "Wreszcie mam wszystkie schematy na smartfonie i nie muszę nosić segregatorów.", author: "S. Mueller", role: "Elektroinstalator, 12 pracowników" },
  hydraulicy: { quote: "Cyfrowe raporty prac z podpisem klienta oszczędzają nam ogromnie dużo czasu.", author: "P. Brunner", role: "Instalator sanitarny, 6 pracowników" },
  stolarze: { quote: "Panel pokazuje mi natychmiast, które zlecenia są w warsztacie i kiedy będzie dostawa.", author: "T. Meier", role: "Mistrz stolarski, 4 pracowników" },
  dekarze: { quote: "Kompletna archiwizacja na ponad 25 lat daje nam bezpieczeństwo w przypadkach gwarancyjnych.", author: "H. Weber", role: "Mistrz dekarski, 10 pracowników" },
  posadzkarze: { quote: "Automatyczne obliczanie materiału z naddatkiem na odpady jest genialnie proste.", author: "L. Fischer", role: "Mistrz posadzkarski, 3 pracowników" },
  rusztowania: { quote: "Teraz zawsze wiemy, które elementy gdzie stoją — rozliczenie najmu działa automatycznie.", author: "D. Schmid", role: "Firma rusztowaniowa, 15 pracowników" },
  murarze: { quote: "Automatyczny dziennik budowy oszczędza mi każdego wieczoru 20 minut pisania.", author: "A. Huber", role: "Przedsiębiorca budowlany, 8 pracowników" },
  "obsluga-budynkow": { quote: "Żaden termin konserwacji nie jest już zapominany — automatyzacja jest doskonała.", author: "C. Roth", role: "Facility Manager, 20 pracowników" },
  sprzatanie: { quote: "Nasze zespoły dokładnie wiedzą, co robić — listy kontrolne i zdjęcia robią różnicę.", author: "N. Steiner", role: "Firma sprzątająca, 25 pracowników" },
  ogrodnictwo: { quote: "Sezonowe planowanie z automatycznymi przypomnieniami zrewolucjonizowało naszą organizację.", author: "F. Gerber", role: "Przedsiębiorca ogrodniczy, 7 pracowników" },
  przeprowadzki: { quote: "Listy inwentaryzacyjne ze zdjęciami chronią nas przed nieuzasadnionymi roszczeniami.", author: "K. Schneider", role: "Przedsiębiorca przeprowadzkowy, 10 pracowników" },
  "technika-budynkowa": { quote: "Planowanie konserwacji działa automatycznie — nie przegapiamy już żadnego terminu.", author: "J. Wyss", role: "Instalacje budowlane, 6 pracowników" },
  architekci: { quote: "Wszystkie dokumenty projektowe w jednym miejscu i zawsze aktualne — to oszczędza ogromnie czasu na szukanie.", author: "B. Lang", role: "Biuro architektoniczne, 4 pracowników" },
  agencje: { quote: "Rejestracja czasu oparta na projektach sprawia, że nasze rozliczenia są przejrzyste i uczciwe.", author: "E. Zuercher", role: "Właściciel agencji, 8 pracowników" },
  "jednoosobowe-firmy": { quote: "Finito to moje kompletne biuro — wszystko robię ze smartfona.", author: "I. Marti", role: "Samozatrudniony rzemieślnik" },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
interface BranchPageContentProps {
  branch: Branch;
  relevantFeatures: Feature[];
  workflow: { step: string; desc: string }[];
}

export function BranchPageContent({
  branch,
  relevantFeatures,
  workflow,
}: BranchPageContentProps) {
  const BranchIcon = branchIconMap[branch.icon] || Building;
  const whyBenefits = whyFinitoMap[branch.slug] || whyFinitoMap["maler"];
  const savings = savingsMap[branch.slug] || savingsMap["maler"];
  const testimonial = testimonialMap[branch.slug] || testimonialMap["maler"];

  return (
    <>
      {/* Hero Section - Dark with branch image */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <Image
          src={`/images/branches/${branch.slug}-hero.png`}
          alt={branch.titleDe}
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full border border-white/10 mb-6">
              <BranchIcon className="w-4 h-4" />
              Rozwiązanie branżowe
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Program dla{" "}
              <span className="gradient-text-animated">{branch.genitiveDe}</span>
              {" "}&mdash; zarządzanie firmą w jednym miejscu
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
              {branch.descriptionDe}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                14 dni bezpłatnego testu
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Zamów demo
              </Link>
            </div>
          </motion.div>

          {/* Savings facts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto"
          >
            {savings.map((saving, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-left"
              >
                <div className="text-xs text-white/40 mb-1">{saving.task}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-white/50 line-through">{saving.vorher}</span>
                  <ArrowRight className="w-3 h-3 text-white/30" />
                  <span className="text-sm font-semibold text-white">{saving.nachher}</span>
                </div>
                <div className="text-xs font-semibold text-green-300 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {saving.ersparnis}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Jak {branch.titleDe} korzystają z Finito Pro
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Praktyczne przypadki użycia, które natychmiast uproszczą Pański dzień pracy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {branch.useCasesDe.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-8 rounded-2xl bg-surface-light-secondary border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute -top-3 left-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-400 text-white text-sm font-bold rounded-lg shadow-glow-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 mt-2">
                  {useCase.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Warum Finito fuer [Branche]? Section                          */}
      {/* ============================================================ */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                Dlaczego Finito dla {branch.genitiveDe}?
              </h2>
              <p className="text-lg text-neutral-500 mb-8">
                Cyfryzacja {branch.genitiveDe} z Finito Pro — kompleksowe oprogramowanie
                dla szwajcarskich MŚP i firm rzemieślniczych.
              </p>
              <ul className="space-y-4">
                {whyBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/automatyzacje"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Zobacz wszystkie automatyzacje
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/moduly"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Odkryj wszystkie funkcje
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 w-full lg:w-[380px]"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-600/10 to-accent-400/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-card-hover">
                  <Quote className="w-8 h-8 text-primary-200 mb-4" />
                  <p className="text-neutral-700 leading-relaxed mb-6 italic">
                    &laquo;{testimonial.quote}&raquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">
                Zawsze pod ręką — także mobilnie
              </h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Dzięki aplikacji mobilnej Finito Pro Twoje zespoły mają wszystkie ważne informacje bezpośrednio na smartfonie — także offline na placu budowy.
              </p>
              <ul className="space-y-3">
                {["Zarządzanie zadaniami i projektami w drodze", "Rejestracja czasu bezpośrednio na miejscu", "Dokumentowanie i przypisywanie zdjęć", "Tryb offline dla placów budowy bez zasięgu"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-[360px] mx-auto">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary-600/15 to-accent-400/15 rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={`/images/branches/${branch.slug}-mobile.png`}
                    alt={`${branch.titleDe} — Finito Pro mobilnie`}
                    width={720}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relevant Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Rejestracja czasu, faktury QR i więcej dla {branch.genitiveDe}
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Te funkcje Finito Pro są szczególnie wartościowe dla Pańskiej firmy.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {relevantFeatures.map((feature) => {
              const FeatureIcon = featureIconMap[feature.icon] || FileText;
              return (
                <motion.div key={feature.id} variants={staggerItem}>
                  <Link
                    href={`/funktionen/${feature.slug}`}
                    className="group block p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                      <FeatureIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {feature.titleDe}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {feature.descriptionDe}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Workflow Example */}
      {workflow.length > 0 && (
        <section className="py-24 bg-surface-light-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                Typowy przebieg pracy dla {branch.genitiveDe}
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Tak wygląda typowy przebieg pracy z Finito Pro dla {branch.genitiveDe}.
              </p>
            </motion.div>

            <div className="space-y-0">
              {workflow.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Timeline line */}
                  {i < workflow.length - 1 && (
                    <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-primary-300 to-primary-100" />
                  )}
                  {/* Step number */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 flex items-center justify-center shadow-glow-sm">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {item.step}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* NEW: Internal links / Entdecken Sie mehr                      */}
      {/* ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
              Odkryj więcej
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/automatyzacje"
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Zap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    Automatyzacje
                  </p>
                  <p className="text-xs text-neutral-400">
                    Wszystkie oszczędności czasu w szczegółach
                  </p>
                </div>
              </Link>
              <Link
                href="/moduly"
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <FolderKanban className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    Wszystkie funkcje
                  </p>
                  <p className="text-xs text-neutral-400">
                    Odkryj ponad 13 funkcji
                  </p>
                </div>
              </Link>
              <Link
                href="/cennik"
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Calculator className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    Cennik
                  </p>
                  <p className="text-xs text-neutral-400">
                    Przejrzyste plany cenowe
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Chcesz przetestować Finito w swojej firmie?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Zacznij teraz z Finito Pro — 14 dni bezpłatnie, bez karty kredytowej.
              Przekonaj się sam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Testuj bezpłatnie
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/branze"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Zobacz wszystkie branże
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
