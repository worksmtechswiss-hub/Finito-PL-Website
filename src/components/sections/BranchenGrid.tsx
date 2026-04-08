"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Paintbrush,
  BrickWall,
  Zap,
  Wrench,
  HardHat,
  TreePine,
  Building2,
  Truck,
  ArrowRight,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const branches = [
  { icon: Paintbrush, slug: "maler", labelDe: "Malarze", labelEn: "Painters", descDe: "Oferty z zapisanymi katalogami usług, udostępnianie projektów klientom" },
  { icon: BrickWall, slug: "gipser", labelDe: "Tynkarze", labelEn: "Plasterers", descDe: "Cyfrowe raporty fotograficzne, zarządzanie magazynem ze śledzeniem artykułów" },
  { icon: Zap, slug: "elektriker", labelDe: "Elektrycy", labelEn: "Electricians", descDe: "Schematy elektryczne mobilnie na budowie, zarządzanie magazynem z linkami do dostawców" },
  { icon: Wrench, slug: "sanitaer", labelDe: "Hydraulicy", labelEn: "Plumbers", descDe: "Mobilna rejestracja czasu bezpośrednio na miejscu, cyfrowe raporty robocze" },
  { icon: HardHat, slug: "dachdecker", labelDe: "Dekarze", labelEn: "Roofers", descDe: "Planowanie pracowników z kalendarzem, cyfrowe archiwum projektów (25+ lat)" },
  { icon: TreePine, slug: "gartenbau", labelDe: "Ogrodnictwo", labelEn: "Landscaping", descDe: "Sezonowe planowanie projektów, dokumentacja roślin na kolejne lata" },
  { icon: Building2, slug: "facility-service", labelDe: "Facility Service", labelEn: "Facility Service", descDe: "Zautomatyzowane interwały konserwacji, koordynacja partnerów w dużych projektach" },
  { icon: Truck, slug: "umzug", labelDe: "Przeprowadzki", labelEn: "Moving", descDe: "Planowanie dnia z optymalizacją tras, listy inwentaryzacyjne z dokumentacją fotograficzną" },
];

export function BranchenGrid() {
  const t = useTranslations("branches");
  const tc = useTranslations("common");

  return (
    <section className="py-24 bg-surface-light-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {branches.map((branch) => (
            <motion.div key={branch.slug} variants={staggerItem}>
              <Link
                href={`/branchen/${branch.slug}`}
                className="group block p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <branch.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {branch.labelDe}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {branch.descDe}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
