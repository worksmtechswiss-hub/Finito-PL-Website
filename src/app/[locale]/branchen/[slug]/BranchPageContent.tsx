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
  maler: [
    "Oferty w 3 zamiast 30 minut dzieki zapisanym katalogom uslug",
    "Zarzadzanie kolorami i zamawianie materialow bezposrednio z projektu",
    "Zdjecia przed/po automatycznie przypisane do projektu",
    "Faktury QR tworzone i wysylane jednym kliknieciem",
    "Portal klienta dla przejrzystego postepu projektow",
    "Rejestracja czasu bezposrednio na placu budowy przez smartfon",
  ],
  gipser: [
    "Cyfrowe fotoraporty jako dowod jakosci dla ubezpieczen",
    "Zarzadzanie magazynem z automatycznym odejmowaniem materialu na projekt",
    "Pomiary i obliczanie powierzchni bezposrednio na miejscu",
    "Faktury QR generowane automatycznie z danych projektowych",
    "Tryb offline dla placow budowy bez zasiegu",
    "Automatyczna dokumentacja wszystkich etapow pracy",
  ],
  elektriker: [
    "Schematy elektryczne i dokumenty techniczne zawsze dostepne mobilnie",
    "Zarzadzanie magazynem z bezposrednim linkiem do dostawcow",
    "Cyfrowe raporty prac z podpisem klienta na miejscu",
    "Rejestracja czasu i materialow w jednej aplikacji",
    "Faktury QR generowane bezposrednio z zarejestrowanych danych",
    "Wszystkie normy i certyfikaty zarchiwizowane dla kazdego projektu",
  ],
  "sanitär": [
    "Mobilna rejestracja czasu z rozdzieleniem czasu jazdy i pracy",
    "Cyfrowe raporty prac z natychmiastowym podpisem klienta",
    "Zarzadzanie czesciami zamiennymi dla pojazdu serwisowego",
    "Automatyczne faktury QR po zakonczeniu zlecenia",
    "Planowanie zlecen z kalendarzem i przypisaniem zespolu",
    "Kompletna dokumentacja dla roszczen gwarancyjnych",
  ],
  schreiner: [
    "Dokumentowanie indywidualnych zamowien ze wszystkimi szczegolami",
    "Obciazenie warsztatu i planowanie produkcji w panelu",
    "Szczegolowe oferty na sztuki jednostkowe i serie",
    "Udostepnianie zdjec postepu klientom przez portal",
    "Kalkulacja materialow i czasu na zlecenie",
    "Faktury QR po montazu i odbiorze",
  ],
  dachdecker: [
    "Planowanie pracownikow z kalendarzem i przypisaniem zespolu",
    "Cyfrowe archiwum projektow na ponad 25 lat",
    "Dokumentacja pogody i bezpieczenstwa na kazdy dzien pracy",
    "Rejestracja czasu z lokalizacja GPS na placu budowy",
    "Zdjecia ze znacznikiem czasu jako dowod jakosci",
    "Faktury QR i automatyczne przypomnienia o platnosci",
  ],
  bodenleger: [
    "Automatyczne obliczanie metrow kwadratowych z naddatkiem na odpady",
    "Sledzenie resztek materialu dla mniejszych zlecen naprawczych",
    "Dokumentowanie wzoru ukladania zdjeciami i notatkami",
    "Zamawianie materialu bezposrednio z projektu",
    "Dokumentacja przed/po dla klienta",
    "Faktury QR wysylane natychmiast po odbiorze",
  ],
  "gerüstbauer": [
    "Sledzenie kazdego elementu rusztowania od dostawy do zwrotu",
    "Automatyczne rozliczenie najmu na podstawie czasu postoju",
    "Dokumentowanie inspekcji bezpieczenstwa za pomoca list kontrolnych",
    "Przeglad wielu placow budowy z filtrami statusu",
    "Podglad stanu magazynowego w czasie rzeczywistym",
    "Automatyczne faktury QR za najem i serwis",
  ],
  maurer: [
    "Automatyczny dziennik budowy z pogoda i obecnoscia",
    "Zarzadzanie wieloma placami budowy rownolegle z filtrowaniem",
    "Zamawianie materialu i betonu na podstawie postepu",
    "Dokumentacja fotograficzna z automatycznym przypisaniem do projektu",
    "Rejestracja czasu na plac budowy i pracownika",
    "Prawnie bezpieczna dokumentacja dla wszystkich projektow",
  ],
  "facility-service": [
    "Zautomatyzowane interwaly konserwacji dla wszystkich instalacji",
    "Koordynacja partnerow i podwykonawcow przez platforme",
    "Cyfrowa dokumentacja obiektu dla kazdej czesci budynku",
    "Abonamenty serwisowe z automatycznym fakturowaniem",
    "Kompletna historia konserwacji dla kazdej instalacji",
    "Automatyczne faktury QR i potwierdzenia wykonania",
  ],
  reinigung: [
    "Planowanie tras dla optymalnego rozdzielenia zespolow",
    "Dokumentacja jakosci ze zdjeciami przed/po",
    "Indywidualne listy kontrolne dla kazdego obiektu i czesci budynku",
    "Rejestracja czasu na obiekt i pracownika",
    "Automatyczne potwierdzenia wykonania dla zleceniodawcow",
    "Abonamenty serwisowe na powtarzajace sie zlecenia sprzatania",
  ],
  gartenbau: [
    "Sezonowe planowanie projektow z automatycznymi przypomnieniami",
    "Dokumentacja roslin z gatunkami i wskazowkami pielegnacji",
    "Udostepnianie planow pielegnacji klientom przez portal",
    "Rejestracja czasu bezposrednio w ogrodzie przez smartfon",
    "Dokumentacja fotograficzna postepu ogrodowego",
    "Abonamenty serwisowe na regularne zlecenia pielegnacyjne",
  ],
  umzug: [
    "Szczegolowe listy inwentaryzacyjne z dokumentacja fotograficzna",
    "Codzienne planowanie tras dla maksymalnej wydajnosci",
    "Protokol szkod ze znacznikiem czasu i danymi GPS",
    "Dokumentowany stan przed/po wszystkich przedmiotow",
    "Rejestracja czasu na przeprowadzke i pracownika",
    "Faktury QR bezposrednio po zakonczeniu zlecenia",
  ],
  haustechnik: [
    "Dokumentacja HVAC z danymi technicznymi i pomiarami",
    "Planowanie konserwacji z automatycznymi przypomnieniami",
    "Kompletna historia instalacji dla kazdej czesci budynku",
    "Protokoly wizyt serwisowych ze zdjeciami i pomiarami",
    "Zarzadzanie czesciami zamiennymi i ponowne zamawianie",
    "Abonamenty serwisowe na regularne umowy konserwacyjne",
  ],
  architekten: [
    "Wszystkie dokumenty projektowe centralnie i zawsze aktualne",
    "Tablica zadan dla faz projektu od planowania do odbioru",
    "Przejrzysta komunikacja z inwestorami przez portal",
    "Rejestracja czasu na projekt dla precyzyjnego rozliczenia",
    "Automatyczne wersjonowanie wszystkich dokumentow",
    "Panel z przegledem projektow i filtrami statusu",
  ],
  agenturen: [
    "Rejestracja czasu oparta na projektach dla przejrzystego rozliczenia",
    "Indywidualne uprawnienia uzytkownikow dla roli i projektu",
    "Budzety klientow z automatyczna funkcja ostrzegania",
    "Raporty godzinowe jako podstawa fakturowania",
    "CRM do zarzadzania klientami i kontaktami",
    "Faktury QR oparte na zarejestrowanym czasie",
  ],
  "einmann-betriebe": [
    "Kompletne biuro na smartfonie - bez potrzeby komputera",
    "Szablony oszczedzaja do 80% czasu administracyjnego",
    "Automatyczne przygotowanie ksiegowosci dla biura rachunkowego",
    "Oferty, faktury i raporty w jednej aplikacji",
    "Faktury QR tworzone i wysylane jednym kliknieciem",
    "Rejestracja czasu i dokumentacja projektow w drodze",
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
  maler: [
    { task: "Tworzenie oferty", vorher: "30 min", nachher: "3 min", ersparnis: "27 min na oferte" },
    { task: "Wysylanie faktury", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
    { task: "Raport miesieczny", vorher: "2 godz.", nachher: "0 min", ersparnis: "24 godz./rok" },
  ],
  gipser: [
    { task: "Tworzenie fotoraportu", vorher: "45 min", nachher: "5 min", ersparnis: "40 min na raport" },
    { task: "Domawianie materialu", vorher: "30 min", nachher: "2 min", ersparnis: "28 min na zamowienie" },
    { task: "Obliczanie powierzchni", vorher: "20 min", nachher: "2 min", ersparnis: "18 min na pomiar" },
  ],
  elektriker: [
    { task: "Tworzenie raportu prac", vorher: "30 min", nachher: "5 min", ersparnis: "25 min na raport" },
    { task: "Sprawdzanie stanu magazynu", vorher: "15 min", nachher: "1 min", ersparnis: "14 min na sprawdzenie" },
    { task: "Faktura z kodem QR", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
  ],
  "sanitär": [
    { task: "Raport prac z podpisem", vorher: "25 min", nachher: "3 min", ersparnis: "22 min na wizyte" },
    { task: "Raport czasu na koniec miesiaca", vorher: "2 godz.", nachher: "0 min", ersparnis: "24 godz./rok" },
    { task: "Wystawienie faktury", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
  ],
  schreiner: [
    { task: "Szczegolowa oferta", vorher: "45 min", nachher: "10 min", ersparnis: "35 min na oferte" },
    { task: "Dokumentowanie postepu zlecenia", vorher: "15 min", nachher: "2 min", ersparnis: "13 min na wpis" },
    { task: "Faktura koncowa", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
  ],
  dachdecker: [
    { task: "Planowanie zespolu na tydzien", vorher: "1 godz.", nachher: "15 min", ersparnis: "45 min na tydzien" },
    { task: "Dokumentacja bezpieczenstwa", vorher: "20 min/dzien", nachher: "3 min/dzien", ersparnis: "17 min na dzien" },
    { task: "Wystawienie faktury QR", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
  ],
  bodenleger: [
    { task: "Obliczanie materialu", vorher: "30 min", nachher: "2 min", ersparnis: "28 min na projekt" },
    { task: "Dokumentacja ukladania", vorher: "15 min", nachher: "0 min", ersparnis: "15 min na projekt" },
    { task: "Protokol odbioru + faktura", vorher: "25 min", nachher: "3 min", ersparnis: "22 min na odbior" },
  ],
  "gerüstbauer": [
    { task: "Rozliczenie najmu", vorher: "30 min", nachher: "1 min", ersparnis: "29 min na rozliczenie" },
    { task: "Kontrola inwentaryzacyjna", vorher: "2 godz.", nachher: "15 min", ersparnis: "105 min na kontrole" },
    { task: "Inspekcja bezpieczenstwa", vorher: "20 min", nachher: "5 min", ersparnis: "15 min na inspekcje" },
  ],
  maurer: [
    { task: "Prowadzenie dziennika budowy", vorher: "20 min/dzien", nachher: "3 min/dzien", ersparnis: "17 min na dzien" },
    { task: "Zamawianie materialu", vorher: "30 min", nachher: "5 min", ersparnis: "25 min na zamowienie" },
    { task: "Dokumentacja zamkniecia projektu", vorher: "1 godz.", nachher: "10 min", ersparnis: "50 min na projekt" },
  ],
  "facility-service": [
    { task: "Tworzenie zlecenia konserwacji", vorher: "15 min", nachher: "0 min", ersparnis: "100% automatycznie" },
    { task: "Komunikacja z partnerami", vorher: "20 min", nachher: "2 min", ersparnis: "18 min na zlecenie" },
    { task: "Aktualizacja dokumentacji obiektu", vorher: "10 min", nachher: "0 min", ersparnis: "Automatycznie" },
  ],
  reinigung: [
    { task: "Planowanie tras", vorher: "30 min", nachher: "5 min", ersparnis: "25 min na tydzien" },
    { task: "Dokumentacja jakosci", vorher: "15 min", nachher: "2 min", ersparnis: "13 min na obiekt" },
    { task: "Potwierdzenie wykonania + faktura", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
  ],
  gartenbau: [
    { task: "Planowanie sezonowe", vorher: "2 godz.", nachher: "20 min", ersparnis: "100 min na sezon" },
    { task: "Dokumentacja roslin", vorher: "15 min", nachher: "2 min", ersparnis: "13 min na ogrod" },
    { task: "Raport dla klienta", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na raport" },
  ],
  umzug: [
    { task: "Tworzenie listy inwentaryzacyjnej", vorher: "45 min", nachher: "10 min", ersparnis: "35 min na przeprowadzke" },
    { task: "Protokol szkod", vorher: "20 min", nachher: "5 min", ersparnis: "15 min na przeprowadzke" },
    { task: "Faktura koncowa", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
  ],
  haustechnik: [
    { task: "Protokol wizyty serwisowej", vorher: "25 min", nachher: "5 min", ersparnis: "20 min na wizyte" },
    { task: "Planowanie konserwacji", vorher: "30 min", nachher: "0 min", ersparnis: "100% automatycznie" },
    { task: "Prowadzenie historii instalacji", vorher: "10 min", nachher: "0 min", ersparnis: "Automatycznie" },
  ],
  architekten: [
    { task: "Kompletowanie dokumentow", vorher: "30 min", nachher: "2 min", ersparnis: "28 min na projekt" },
    { task: "Aktualizacja dla inwestora", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na aktualizacje" },
    { task: "Tworzenie przegladu projektu", vorher: "15 min", nachher: "0 min", ersparnis: "Panel w czasie rzeczywistym" },
  ],
  agenturen: [
    { task: "Tworzenie raportu godzinowego", vorher: "30 min", nachher: "1 min", ersparnis: "29 min na raport" },
    { task: "Faktura na podstawie czasu", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
    { task: "Kontrola budzetu", vorher: "15 min", nachher: "0 min", ersparnis: "Automatyczne ostrzezenia" },
  ],
  "einmann-betriebe": [
    { task: "Oferta z szablonu", vorher: "30 min", nachher: "3 min", ersparnis: "27 min na oferte" },
    { task: "Wystawienie faktury QR", vorher: "20 min", nachher: "1 min", ersparnis: "19 min na fakture" },
    { task: "Przygotowanie zamkniecia rocznego", vorher: "8 godz.", nachher: "30 min", ersparnis: "7,5 godz. rocznie" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Testimonial quotes per branch                                      */
/* ------------------------------------------------------------------ */
const testimonialMap: Record<string, { quote: string; author: string; role: string }> = {
  maler: { quote: "Od kiedy korzystamy z Finito, tworzymy oferty w 3 zamiast 30 minut.", author: "M. Keller", role: "Mistrz malarski, 8 pracownikow" },
  gipser: { quote: "Automatyczna dokumentacja fotograficzna oszczedza nam co tydzien godziny pracy biurowej.", author: "R. Baumann", role: "Mistrz tynkarski, 5 pracownikow" },
  elektriker: { quote: "Wreszcie mam wszystkie schematy na smartfonie i nie musze nosic segregatorow.", author: "S. Mueller", role: "Elektroinstalator, 12 pracownikow" },
  "sanitär": { quote: "Cyfrowe raporty prac z podpisem klienta oszczedzaja nam ogromnie duzo czasu.", author: "P. Brunner", role: "Instalator sanitarny, 6 pracownikow" },
  schreiner: { quote: "Panel pokazuje mi natychmiast, ktore zlecenia sa w warsztacie i kiedy bedzie dostawa.", author: "T. Meier", role: "Mistrz stolarski, 4 pracownikow" },
  dachdecker: { quote: "Kompletna archiwizacja na ponad 25 lat daje nam bezpieczenstwo w przypadkach gwarancyjnych.", author: "H. Weber", role: "Mistrz dekarski, 10 pracownikow" },
  bodenleger: { quote: "Automatyczne obliczanie materialu z naddatkiem na odpady jest genialnie proste.", author: "L. Fischer", role: "Mistrz posadzkarski, 3 pracownikow" },
  "gerüstbauer": { quote: "Teraz zawsze wiemy, ktore elementy gdzie stoja - rozliczenie najmu dziala automatycznie.", author: "D. Schmid", role: "Firma rusztowaniowa, 15 pracownikow" },
  maurer: { quote: "Automatyczny dziennik budowy oszczedza mi kazdego wieczoru 20 minut pisania.", author: "A. Huber", role: "Przedsiebiorca budowlany, 8 pracownikow" },
  "facility-service": { quote: "Zaden termin konserwacji nie jest juz zapominany - automatyzacja jest doskonala.", author: "C. Roth", role: "Facility Manager, 20 pracownikow" },
  reinigung: { quote: "Nasze zespoly dokladnie wiedza, co robic - listy kontrolne i zdjecia robia roznice.", author: "N. Steiner", role: "Firma sprzatajaca, 25 pracownikow" },
  gartenbau: { quote: "Sezonowe planowanie z automatycznymi przypomnieniami zrewolucjonizowalo nasza organizacje.", author: "F. Gerber", role: "Przedsiebiorca ogrodniczy, 7 pracownikow" },
  umzug: { quote: "Listy inwentaryzacyjne ze zdjeciami chronia nas przed nieuzasadnionymi roszczeniami.", author: "K. Schneider", role: "Przedsiebiorca przeprowadzkowy, 10 pracownikow" },
  haustechnik: { quote: "Planowanie konserwacji dziala automatycznie - nie przegapiamy juz zadnego terminu.", author: "J. Wyss", role: "Instalacje budowlane, 6 pracownikow" },
  architekten: { quote: "Wszystkie dokumenty projektowe w jednym miejscu i zawsze aktualne - to oszczedza ogromnie czasu na szukanie.", author: "B. Lang", role: "Biuro architektoniczne, 4 pracownikow" },
  agenturen: { quote: "Rejestracja czasu oparta na projektach sprawia, ze nasze rozliczenia sa przejrzyste i uczciwe.", author: "E. Zuercher", role: "Wlasciciel agencji, 8 pracownikow" },
  "einmann-betriebe": { quote: "Finito to moje kompletne biuro - wszystko robie ze smartfona.", author: "I. Marti", role: "Samozatrudniony rzemieslnik" },
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
      {/* Hero Section - Dark */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full border border-white/10 mb-6">
              <BranchIcon className="w-4 h-4" />
              Rozwiazanie branzowe
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Oprogramowanie dla{" "}
              <span className="gradient-text-animated">{branch.titleDe}</span>
              {" "}w Szwajcarii
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
                30 dni bezplatnego testu
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Zamow demo
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
              Jak {branch.titleDe} korzystaja z Finito Pro
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Praktyczne przypadki uzycia, ktore natychmiast uproszcza Panski dzien pracy.
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
                Dlaczego Finito dla {branch.titleDe}?
              </h2>
              <p className="text-lg text-neutral-500 mb-8">
                Cyfryzacja {branch.titleDe} z Finito Pro - kompleksowe oprogramowanie
                dla szwajcarskich MSP i firm rzemieslniczych.
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
                  href="/automationen"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Zobacz wszystkie automatyzacje
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/funktionen"
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
                Zawsze pod reka - takze mobilnie
              </h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Dzieki aplikacji mobilnej Finito Pro Twoje zespoly maja wszystkie wazne informacje bezposrednio na smartfonie - takze offline na placu budowy.
              </p>
              <ul className="space-y-3">
                {["Zarzadzanie zadaniami i projektami w drodze", "Rejestracja czasu bezposrednio na miejscu", "Dokumentowanie i przypisywanie zdjec", "Tryb offline dla placow budowy bez zasiegu"].map((item) => (
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
              <div className="relative w-[260px] mx-auto">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary-600/15 to-accent-400/15 rounded-full blur-3xl" />
                <div className="relative rounded-[2.5rem] border-[6px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-800 rounded-b-2xl z-10" />
                  <Image
                    src="/images/Finito-Mob.png"
                    alt="Finito Pro Mobile App"
                    width={520}
                    height={1040}
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
              Rejestracja czasu, faktury QR i wiecej dla {branch.titleDe}
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Te funkcje Finito Pro sa szczegolnie wartosciowe dla Panskiej firmy.
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
                Typowy przebieg pracy dla {branch.titleDe}
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Tak wyglada typowy przebieg pracy z Finito Pro dla {branch.titleDe}.
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
              Odkryj wiecej
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/automationen"
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
                    Wszystkie oszczednosci czasu w szczegolach
                  </p>
                </div>
              </Link>
              <Link
                href="/funktionen"
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
                href="/preise"
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
              Gotowy na cyfryzacje swojej firmy {branch.titleDe}?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Zacznij teraz z Finito Pro - 30 dni bezplatnie, bez karty kredytowej.
              Przekonaj sie sam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.pl/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Testuj bezplatnie
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/branchen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Zobacz wszystkie branze
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
