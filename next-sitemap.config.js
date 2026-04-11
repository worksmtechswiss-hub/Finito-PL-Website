/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.finitopro.pl",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async () => {
    const features = [
      "faktury",
      "crm",
      "zarzadzanie-projektami",
      "ewidencja-czasu-pracy",
      "oferty",
      "dashboard",
      "urlopy",
      "dokumentacja-zdjec",
      "magazyn",
      "ksiegowosc",
      "aplikacja-pracownika",
      "portal-klienta",
      "umowy-serwisowe",
    ];
    const branches = [
      "malarze",
      "tynkarze",
      "elektrycy",
      "hydraulicy",
      "stolarze",
      "dekarze",
      "posadzkarze",
      "rusztowania",
      "murarze",
      "facility-service",
      "sprzatanie",
      "ogrodnictwo",
      "przeprowadzki",
      "technika-budynkowa",
      "architekci",
      "agencje",
      "jednoosobowe-firmy",
    ];

    return [
      ...features.map((f) => ({
        loc: `/funkcje/${f}`,
        priority: 0.9,
        changefreq: "weekly",
      })),
      ...branches.map((b) => ({
        loc: `/branze/${b}`,
        priority: 0.8,
        changefreq: "monthly",
      })),
    ];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
