import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Old German/English URLs → new Polish URLs (301 redirects for SEO)
const redirectMap: Record<string, string> = {
  // Static pages
  "/funktionen": "/moduly",
  "/preise": "/cennik",
  "/team": "/zespol",
  "/agbs": "/regulamin",
  "/datenschutz": "/prywatnosc",
  "/impressum": "/nota-prawna",
  "/apis": "/api",
  "/kunden": "/klienci",
  "/marktplatz": "/marketplace",
  "/automationen": "/automatyzacje",
  "/app-fuer-dienstleister": "/branze",
  "/helpfull": "/faq",
  "/help": "/faq",
  "/finito-landingpage": "/",
  // Branch overview
  "/branchen": "/branze",
  // Branch pages
  "/branchen/maler": "/branze/malarze",
  "/branchen/gipser": "/branze/tynkarze",
  "/branchen/elektriker": "/branze/elektrycy",
  "/branchen/sanitaer": "/branze/hydraulicy",
  "/branchen/schreiner": "/branze/stolarze",
  "/branchen/dachdecker": "/branze/dekarze",
  "/branchen/bodenleger": "/branze/posadzkarze",
  "/branchen/geruestbauer": "/branze/rusztowania",
  "/branchen/maurer": "/branze/murarze",
  "/branchen/facility-service": "/branze/obsluga-budynkow",
  "/branze/facility-service": "/branze/obsluga-budynkow",
  "/branchen/reinigung": "/branze/sprzatanie",
  "/branchen/gartenbau": "/branze/ogrodnictwo",
  "/branchen/umzug": "/branze/przeprowadzki",
  "/branchen/haustechnik": "/branze/technika-budynkowa",
  "/branchen/architekten": "/branze/architekci",
  "/branchen/agenturen": "/branze/agencje",
  "/branchen/einmann-betriebe": "/branze/jednoosobowe-firmy",
  // Feature pages
  "/features/dashboard": "/funkcje/dashboard",
  "/features/projektmanagement": "/funkcje/zarzadzanie-projektami",
  "/features/rechnungen": "/funkcje/faktury",
  "/features/offerten": "/funkcje/oferty",
  "/features/zeiterfassung": "/funkcje/ewidencja-czasu-pracy",
  "/features/crm": "/funkcje/crm",
  "/features/ferienmanagement": "/funkcje/urlopy",
  "/features/foto-dokumentation": "/funkcje/dokumentacja-zdjec",
  "/features/lagerverwaltung": "/funkcje/magazyn",
  "/features/buchhaltung": "/funkcje/ksiegowosc",
  "/features/mitarbeiter-app": "/funkcje/aplikacja-pracownika",
  "/features/kundenportal": "/funkcje/portal-klienta",
  "/features/service-abos": "/funkcje/umowy-serwisowe",
  // With /de prefix
  "/de/branchen": "/branze",
  "/de/branchen/maler": "/branze/malarze",
  "/de/branchen/gipser": "/branze/tynkarze",
  "/de/branchen/elektriker": "/branze/elektrycy",
  "/de/branchen/sanitaer": "/branze/hydraulicy",
  "/de/branchen/schreiner": "/branze/stolarze",
  "/de/branchen/dachdecker": "/branze/dekarze",
  "/de/branchen/bodenleger": "/branze/posadzkarze",
  "/de/branchen/geruestbauer": "/branze/rusztowania",
  "/de/branchen/maurer": "/branze/murarze",
  "/de/branchen/facility-service": "/branze/obsluga-budynkow",
  "/de/branchen/reinigung": "/branze/sprzatanie",
  "/de/branchen/gartenbau": "/branze/ogrodnictwo",
  "/de/branchen/umzug": "/branze/przeprowadzki",
  "/de/branchen/haustechnik": "/branze/technika-budynkowa",
  "/de/branchen/architekten": "/branze/architekci",
  "/de/branchen/agenturen": "/branze/agencje",
  "/de/branchen/einmann-betriebe": "/branze/jednoosobowe-firmy",
  "/de/features/dashboard": "/funkcje/dashboard",
  "/de/features/projektmanagement": "/funkcje/zarzadzanie-projektami",
  "/de/features/rechnungen": "/funkcje/faktury",
  "/de/features/offerten": "/funkcje/oferty",
  "/de/features/zeiterfassung": "/funkcje/ewidencja-czasu-pracy",
  "/de/features/crm": "/funkcje/crm",
  "/de/features/ferienmanagement": "/funkcje/urlopy",
  "/de/features/foto-dokumentation": "/funkcje/dokumentacja-zdjec",
  "/de/features/lagerverwaltung": "/funkcje/magazyn",
  "/de/features/buchhaltung": "/funkcje/ksiegowosc",
  "/de/features/mitarbeiter-app": "/funkcje/aplikacja-pracownika",
  "/de/features/kundenportal": "/funkcje/portal-klienta",
  "/de/features/service-abos": "/funkcje/umowy-serwisowe",
  "/de/funktionen": "/moduly",
  "/de/preise": "/cennik",
  "/de/team": "/zespol",
  "/de/agbs": "/regulamin",
  "/de/datenschutz": "/prywatnosc",
  "/de/impressum": "/nota-prawna",
  "/de/apis": "/api",
  "/de/kunden": "/klienci",
  "/de/marktplatz": "/marketplace",
  "/de/automationen": "/automatyzacje",
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for old URL redirects
  const redirectTo = redirectMap[pathname];
  if (redirectTo) {
    const url = request.nextUrl.clone();
    url.pathname = redirectTo;
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|images|videos|fonts|.*\\..*).*)"],
};
