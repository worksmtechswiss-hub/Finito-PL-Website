"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Rocket, Target, ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Innowacja",
    description:
      "Tworzymy nowoczesne rozwiązania, które naprawdę upraszczają codzienną pracę firm usługowych. Żadnych przeładowanych systemów — tylko inteligentne narzędzia.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Prostota",
    description:
      "Oprogramowanie musi być proste. Nasi użytkownicy mogą natychmiast rozpocząć pracę bez szkolenia. Każda funkcja jest tworzona z myślą o łatwości obsługi.",
    color: "accent" as const,
  },
  {
    icon: Users,
    title: "Bliskość klienta",
    description:
      "Słuchamy naszych klientów. Ich opinie trafiają bezpośrednio do procesu rozwoju. Osobiste wsparcie i szybka reakcja to nasza codzienność.",
    color: "primary" as const,
  },
];

const team = [
  { name: "Carlos", image: "/images/carlos 1.svg" },
  { name: "Łukasz", image: "/images/lukas 1.svg" },
  { name: "Kamil", image: "/images/kamil 1.svg" },
  { name: "Nico", image: "/images/Nico.svg" },
  { name: "Izabela", image: "/images/iza 1.svg" },
  { name: "Natalia", image: "/images/natalia 1.svg" },
  { name: "Ivan", image: "/images/ivan 1.svg" },
];

const stats = [
  { value: "200+", label: "firm korzysta z Finito" },
  { value: "13", label: "modułów w jednej cenie" },
  { value: "8", label: "języków interfejsu" },
  { value: "2", label: "lokalizacje serwerów" },
];

export function TeamContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              <span className="gradient-text-animated">O Finito Pro</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Szwajcarska jakość oprogramowania dla polskich firm usługowych
              i rzemieślniczych.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-8">
              Dlaczego <span className="gradient-text">Finito Pro</span>?
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Wierzymy, że małe i średnie firmy stanowią fundament
                gospodarki. Rzemieślnicy, usługodawcy i lokalne firmy
                zasługują na taką samą jakość oprogramowania jak duże
                korporacje — tylko dostosowaną do ich potrzeb i budżetu.
              </p>
              <p>
                Finito Pro powstało z bezpośredniej współpracy z firmami
                usługowymi. Słuchaliśmy, rozumieliśmy i zbudowaliśmy
                rozwiązanie, które naprawdę działa: intuicyjne, przystępne
                cenowo i niezawodne. Ponad 200 firm w Szwajcarii korzysta
                z Finito — teraz startujemy w Polsce.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Nasze wartości
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Trzy zasady, którymi kierujemy się przy każdej decyzji.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all text-center"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    value.color === "primary"
                      ? "bg-primary-50"
                      : "bg-accent-50"
                  )}
                >
                  <value.icon
                    className={cn(
                      "w-7 h-7",
                      value.color === "primary"
                        ? "text-primary-600"
                        : "text-accent-500"
                    )}
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission — animated icons instead of static image */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated floating icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="relative w-full max-w-md h-40 flex items-center justify-center">
              <motion.div
                className="absolute"
                animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-400 rounded-3xl flex items-center justify-center shadow-glow">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -left-8 top-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -right-8 top-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent-600" />
                </div>
              </motion.div>
              <motion.div
                className="absolute left-12 bottom-0"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-500" />
                </div>
              </motion.div>
              <motion.div
                className="absolute right-12 bottom-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-2xl p-8 sm:p-10 border border-primary-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Nasza wizja
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Każda firma usługowa w Polsce ma oprogramowanie, które rośnie
                razem z nią. Chcemy być pierwszym wyborem dla MŚP, które chcą
                zdigitalizować swoje procesy — prosto, bezpiecznie i w
                przystępnej cenie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent-50 to-primary-50/30 rounded-2xl p-8 sm:p-10 border border-accent-100"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Nasza misja
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Tworzymy najbardziej intuicyjne oprogramowanie all-in-one
                dla firm usługowych i rzemieślniczych. Od oferty po fakturę,
                od rejestracji czasu pracy po portal klienta — wszystko w
                jednym rozwiązaniu, które każdy rozumie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Zespół
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Międzynarodowy zespół z jedną wspólną pasją: oprogramowanie,
              które naprawdę pomaga firmom usługowym.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-10 sm:gap-14"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-card group-hover:shadow-card-hover transition-all group-hover:scale-105 ring-3 ring-white">
                    <Image
                      src={member.image}
                      alt={`${member.name} - Finito Pro`}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 text-lg">
                  {member.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats instead of group photo */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-10 sm:p-14 shadow-2xl"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-white mb-2">Finito Pro w liczbach</h3>
              <p className="text-white/40 text-sm">Szwajcarska jakość, polska obsługa</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
              Przekonaj się sam
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Testuj Finito Pro przez 14 dni za darmo i przekonaj się, jak
              prosta może być Twoja codzienna praca.
            </p>
            <motion.a
              href="https://app.finitopro.pl/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Zacznij za darmo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
