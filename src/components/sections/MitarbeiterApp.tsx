"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Clock, Camera, MapPin, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const appFeatures = [
  {
    icon: Clock,
    title: "Rejestracja czasu",
    desc: "Start/Stop jednym kliknięciem - automatyczne przypisanie do właściwego projektu.",
  },
  {
    icon: Camera,
    title: "Dokumentacja fotograficzna",
    desc: "Zdjęcia robione bezpośrednio, automatycznie przesyłane do projektu.",
  },
  {
    icon: CheckCircle,
    title: "Zadania",
    desc: "Wszystkie przypisane zadania w jednym miejscu - wiesz co robić.",
  },
  {
    icon: MapPin,
    title: "Nawigacja",
    desc: "Wpisz adres budowy i od razu nawiguj.",
  },
  {
    icon: MessageCircle,
    title: "Komunikacja",
    desc: "Czat zespołowy i aktualizacje projektów w czasie rzeczywistym.",
  },
  {
    icon: Smartphone,
    title: "Raporty robocze",
    desc: "Tworzenie cyfrowych raportów - bezpośrednio na smartfonie.",
  },
];

export function MitarbeiterApp() {
  return (
    <section className="py-24 bg-surface-light-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/15 to-accent-400/10 rounded-full blur-3xl" />

              {/* Realistic Phone Mockup Image */}
              <motion.div
                className="relative w-[380px] sm:w-[500px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/phone.png"
                  alt="Aplikacja Finito Pro na iPhone"
                  width={800}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-6">
              <Smartphone className="w-4 h-4" />
              Aplikacja dla pracowników
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Twój zespół zawsze <span className="gradient-text">połączony</span>
            </h2>

            <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
              Aplikacja Finito działa na każdym smartfonie. Twoi pracownicy mają wszystko,
              czego potrzebują, bezpośrednio w kieszeni - od rejestracji czasu po nawigację.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {appFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 bg-primary-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <feature.icon className="w-4.5 h-4.5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-sm mb-0.5">{feature.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link
              href="/funkcje/aplikacja-pracownika"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all group"
            >
              Więcej o aplikacji dla pracowników
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
