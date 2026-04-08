"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Rocket, Target, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Innowacja",
    description:
      "Tworzymy nowoczesne rozwiązania, które naprawdę upraszczają codzienną pracę MŚP. Żadnych przeładowanych systemów - tylko inteligentne narzędzia.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Prostota",
    description:
      "Oprogramowanie musi być proste. Nasi użytkownicy powinni móc natychmiast rozpocząć pracę bez szkolenia. Każda funkcja jest tworzona z myślą o łatwości obsługi.",
    color: "accent" as const,
  },
  {
    icon: Users,
    title: "Bliskość klienta",
    description:
      "Słuchamy naszych klientów. Ich opinie trafiają bezpośrednio do procesu rozwoju. Osobiste wsparcie jest dla nas oczywistością.",
    color: "primary" as const,
  },
];

const team = [
  { name: "Carlos", role: "Co-Founder", image: "/images/645bd42b3c5cd436717c7ced_carlos2-1.png" },
  { name: "Lukas", role: "Co-Founder", image: "/images/645bd42b0b745647b9a26cea_lukas2-p-500-1.png" },
  { name: "Kamil", role: "Development", image: "/images/MicrosoftTeams-image-171.png" },
  { name: "Nico", role: "Development", image: "/images/MicrosoftTeams-image-172.png" },
  { name: "Izabela", role: "Design", image: "/images/MicrosoftTeams-image-173.png" },
  { name: "Natalia", role: "Operations", image: "/images/team-2.png" },
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
              <span className="gradient-text-animated">Historia Finito</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Nasze oprogramowanie dla usługodawców - stworzone w Szwajcarii, dla
              szwajcarskich MŚP.
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
                Wierzymy, że małe i średnie przedsiębiorstwa stanowią
                fundament naszego społeczeństwa. Rzemieślnicy, usługodawcy
                i lokalne firmy zasługują na taką samą jakość oprogramowania
                jak duże korporacje - tylko dostosowaną do ich
                potrzeb.
              </p>
              <p>
                Finito Pro powstało z bezpośredniej współpracy z
                firmami rzemieślniczymi w Szwajcarii. Słuchaliśmy, rozumieliśmy
                i zbudowaliśmy rozwiązanie, które naprawdę działa: intuicyjne,
                przystępne cenowo i Swiss Made.
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

      {/* Vision & Mission */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Atmospheric background image */}
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/images/4459292-Kopie.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/images/Vision.png"
                alt="Wizja Finito Pro - oprogramowanie dla szwajcarskich MŚP"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
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
                Każda firma rzemieślnicza w Szwajcarii ma oprogramowanie, które
                rośnie razem z nią. Chcemy być pierwszym wyborem dla MŚP, które
                chcą zdigitalizować swoje procesy - prosto, bezpiecznie i uczciwie.
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
                Tworzymy najbardziej intuicyjne oprogramowanie all-in-one dla szwajcarskich
                MŚP. Od oferty po fakturę, od rejestracji czasu pracy po
                portal klienta - wszystko w jednym rozwiązaniu, które każdy rozumie.
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
              Nasz zespół z jedną wspólną pasją: oprogramowanie, które naprawdę
              pomaga MŚP.
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
                      alt={`${member.name} - ${member.role} w Finito Pro`}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-white border border-neutral-100 rounded-full shadow-sm">
                    <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                      {member.role}
                    </span>
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

      {/* Team Group Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card-hover"
          >
            <Image
              src="/images/team-2.png"
              alt="Zespół Finito Pro - razem dla szwajcarskich MŚP"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">Nasz zespół</p>
              <p className="text-white/70 text-sm">Razem dla szwajcarskich MŚP</p>
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
