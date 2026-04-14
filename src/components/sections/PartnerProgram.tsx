"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Users,
  DollarSign,
  CheckCircle,
  FileText,
  Monitor,
  Clock,
  MessageSquare,
  LayoutDashboard,
  Star,
  Building2,
  Briefcase,
  Calculator as CalcIcon,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── HERO ──────────────────────────────────────────── */
export function PartnerHero() {
  const t = useTranslations("partner");
  return (
    <section className="relative hero-gradient overflow-hidden pt-40 pb-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/15 border border-primary-500/25 text-primary-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
            </span>
            {t("badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="gradient-text">{t("heroHighlight1")}</span>{" "}
            {t("heroText1")}
            <br />
            {t("heroText2")}{" "}
            <span className="gradient-text">{t("heroHighlight2")}</span>.
          </h1>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            {t("heroSub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              >
                {t("heroCta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.a
              href="#model"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              whileHover={{ y: -2 }}
            >
              {t("heroSecondary")}
            </motion.a>
          </div>
          <p className="mt-8 text-sm text-white/30">
            {t("heroTrust")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── JAK TO DZIAŁA ─────────────────────────────────── */
export function PartnerHowItWorks() {
  const t = useTranslations("partner");
  const steps = [
    { icon: Users, color: "from-primary-500 to-accent-400" },
    { icon: DollarSign, color: "from-primary-600 to-primary-400" },
    { icon: CheckCircle, color: "from-primary-700 to-primary-500" },
  ];

  return (
    <section className="relative py-24 hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
            {t("howLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("howTitle")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">{t("howSub")}</p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500 to-primary-500/20" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-5 shadow-glow relative z-10`}
              >
                <step.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t(`step${i + 1}Title`)}
              </h3>
              <p className="text-sm text-white/50 max-w-xs mx-auto">
                {t(`step${i + 1}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-14">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
          >
            {t("howCta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── MODEL PROWIZJI ────────────────────────────────── */
export function PartnerCommission() {
  const t = useTranslations("partner");
  return (
    <section id="model" className="relative py-24 hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
            {t("commLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("commTitle")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">{t("commSub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            {...fadeUp}
            className="rounded-2xl p-10 text-center border-2 border-primary-500/30 bg-primary-500/10"
          >
            <p className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
              {t("year1Label")}
            </p>
            <p className="text-7xl font-extrabold gradient-text leading-none">50%</p>
            <p className="text-white/50 mt-3">{t("year1Desc")}</p>
            <p className="text-xs text-white/30 mt-3">{t("year1Detail")}</p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="rounded-2xl p-10 text-center border-2 border-white/10 bg-white/[0.03]"
          >
            <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">
              {t("year2Label")}
            </p>
            <p className="text-7xl font-extrabold text-white/70 leading-none">5%</p>
            <p className="text-white/50 mt-3">{t("year2Desc")}</p>
            <p className="text-xs text-white/30 mt-3">{t("year2Detail")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── PORÓWNANIE RYNKOWE ────────────────────────────── */
export function PartnerComparison() {
  const t = useTranslations("partner");
  const rows = [
    { label: t("cmpPrice"), fp: "100 PLN", c: "265+ PLN", e: "200–500 PLN", s: "150–400 PLN" },
    { label: t("cmpDeploy"), fp: t("cmpFewDays"), c: "2–8 tyg.", e: "1–4 tyg.", s: "1–3 tyg.", fpGreen: true },
    { label: t("cmpCloud"), fp: "TAK", c: "Hybrid", e: "Hybrid", s: "Desktop", fpGreen: true, sRed: true },
    { label: t("cmpMobile"), fp: "TAK", c: t("cmpLimited"), e: t("cmpLimited"), s: "NIE", fpGreen: true, sRed: true },
    { label: t("cmpPortal"), fp: t("cmpBuiltIn"), c: "—", e: "—", s: "—", fpGreen: true },
    { label: t("cmpHosting"), fp: "Szwajcaria 🇨🇭", c: "Polska", e: "Polska", s: "Polska" },
    { label: "UX", fp: "9/10", c: "5/10", e: "6/10", s: "4/10" },
    { label: t("cmpPartner"), fp: "50% + 5%", c: "~20%", e: t("cmpIndiv"), s: t("cmpIndiv") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary-600 uppercase mb-3">
            {t("cmpLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {t("cmpTitle")}
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">{t("cmpSub")}</p>
        </motion.div>

        <motion.div {...fadeUp} className="overflow-x-auto rounded-2xl border border-neutral-200">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-surface-dark text-white">
                <th className="p-3 text-left text-xs uppercase tracking-wider font-semibold" />
                <th className="p-3 text-center text-xs uppercase tracking-wider font-semibold text-primary-300">Finito Pro</th>
                <th className="p-3 text-center text-xs uppercase tracking-wider font-semibold">Comarch</th>
                <th className="p-3 text-center text-xs uppercase tracking-wider font-semibold">Enova365</th>
                <th className="p-3 text-center text-xs uppercase tracking-wider font-semibold">Symfonia</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-t border-neutral-100 ${i % 2 === 0 ? "" : "bg-neutral-50"}`}>
                  <td className="p-3 font-semibold text-neutral-800">{r.label}</td>
                  <td className="p-3 text-center font-bold text-primary-600">{r.fp}</td>
                  <td className="p-3 text-center text-neutral-500">{r.c}</td>
                  <td className="p-3 text-center text-neutral-500">{r.e}</td>
                  <td className="p-3 text-center text-neutral-500">{r.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <p className="text-xs text-neutral-400 mt-3 text-center">{t("cmpSource")}</p>

        <motion.div {...fadeUp} className="text-center mt-10">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
          >
            {t("cmpCta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── RYNEK POLSKI ──────────────────────────────────── */
export function PartnerMarket() {
  const t = useTranslations("partner");
  const cards = [
    { title: t("mkt1Title"), items: [t("mkt1a"), t("mkt1b"), t("mkt1c"), t("mkt1d")] },
    { title: t("mkt2Title"), items: [t("mkt2a"), t("mkt2b"), t("mkt2c"), t("mkt2d")] },
    { title: t("mkt3Title"), items: [t("mkt3a"), t("mkt3b"), t("mkt3c"), t("mkt3d")] },
    { title: t("mkt4Title"), items: [t("mkt4a"), t("mkt4b"), t("mkt4c"), t("mkt4d")] },
  ];

  return (
    <section className="relative py-24 hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
            {t("mktLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("mktTitle")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">{t("mktSub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-7 hover:border-primary-500/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-primary-300 mb-4">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CO OTRZYMUJESZ ────────────────────────────────── */
export function PartnerBenefits() {
  const t = useTranslations("partner");
  const items = [
    { icon: FileText, title: t("ben1Title"), desc: t("ben1Desc") },
    { icon: Monitor, title: t("ben2Title"), desc: t("ben2Desc") },
    { icon: Clock, title: t("ben3Title"), desc: t("ben3Desc") },
    { icon: MessageSquare, title: t("ben4Title"), desc: t("ben4Desc") },
    { icon: LayoutDashboard, title: t("ben5Title"), desc: t("ben5Desc") },
    { icon: Star, title: t("ben6Title"), desc: t("ben6Desc") },
  ];

  return (
    <section className="relative py-24 hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
            {t("benLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("benTitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:border-primary-500/30 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── KALKULATOR ────────────────────────────────────── */
export function PartnerCalculator() {
  const t = useTranslations("partner");
  const [clients, setClients] = useState(10);
  const [users, setUsers] = useState(5);
  const profitPerUser = 50;
  const year1 = Math.round(clients * users * profitPerUser * 0.5 * 12);
  const year2 = Math.round(clients * users * profitPerUser * 0.05 * 12);

  return (
    <section className="relative py-24 hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
            {t("calcLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("calcTitle")}
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl bg-white/[0.04] border border-white/10 p-8 sm:p-10">
          <div className="mb-7">
            <label className="flex justify-between text-sm text-white/60 mb-2">
              {t("calcClients")} <span className="text-primary-400 font-bold text-lg">{clients}</span>
            </label>
            <input
              type="range" min={1} max={100} value={clients}
              onChange={(e) => setClients(+e.target.value)}
              className="w-full accent-primary-500"
            />
          </div>
          <div className="mb-7">
            <label className="flex justify-between text-sm text-white/60 mb-2">
              {t("calcUsers")} <span className="text-primary-400 font-bold text-lg">{users}</span>
            </label>
            <input
              type="range" min={1} max={50} value={users}
              onChange={(e) => setUsers(+e.target.value)}
              className="w-full accent-primary-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-7 border-t border-white/10">
            <div className="rounded-xl bg-white/[0.05] p-5 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold gradient-text">
                {year1.toLocaleString("pl-PL")} PLN
              </p>
              <p className="text-xs text-white/40 mt-1">{t("calcYear1")}</p>
            </div>
            <div className="rounded-xl bg-white/[0.05] p-5 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white/70">
                {year2.toLocaleString("pl-PL")} PLN
              </p>
              <p className="text-xs text-white/40 mt-1">{t("calcYear2")}</p>
            </div>
          </div>
          <p className="text-xs text-white/25 text-center mt-4">{t("calcNote")}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────── */
export function PartnerFAQ() {
  const t = useTranslations("partner");
  const items = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary-600 uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">{t("faqTitle")}</h2>
        </motion.div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...fadeUp}
      className={`border rounded-xl overflow-hidden transition-colors ${open ? "border-primary-300" : "border-neutral-200 hover:border-primary-200"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left bg-neutral-50 hover:bg-primary-50/50 transition-colors"
      >
        <span className="font-semibold text-sm text-neutral-800">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── HOMEPAGE SECTION (mała sekcja do wstawienia na stronę główną) ── */
export function PartnerBanner() {
  const t = useTranslations("partner");
  return (
    <section className="relative py-24 hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase mb-3">
            {t("bannerLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("bannerTitle")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">{t("bannerSub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: DollarSign, title: t("banner1Title"), desc: t("banner1Desc"), tag: t("banner1Tag") },
            { icon: CheckCircle, title: t("banner2Title"), desc: t("banner2Desc"), tag: t("banner2Tag") },
            { icon: Star, title: t("banner3Title"), desc: t("banner3Desc"), tag: t("banner3Tag") },
          ].map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-7 text-center hover:border-primary-500/30 hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <card.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/50 mb-3">{card.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold">
                {card.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-12">
          <Link
            href="/partner"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
          >
            {t("bannerCta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
