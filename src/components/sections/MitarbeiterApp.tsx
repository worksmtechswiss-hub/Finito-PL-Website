"use client";

import { Link } from "@/i18n/navigation";
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

              {/* Phone Frame with Animated UI */}
              <motion.div
                className="relative w-[280px] sm:w-[300px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-[2.5rem] p-3 shadow-2xl border border-white/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-800 rounded-b-2xl z-10" />
                  <div className="bg-neutral-900 rounded-[2rem] overflow-hidden">
                    {/* Animated Phone UI */}
                    <div className="w-full aspect-[9/19] bg-gradient-to-b from-[#7c3aed] to-[#5b21b6] relative p-4 pt-10">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-6 px-1">
                        <span className="text-[10px] text-white/60 font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white/40 rounded-sm" />
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                        </div>
                      </div>

                      {/* App Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <p className="text-white/60 text-[11px] mb-0.5">Dzień dobry</p>
                        <p className="text-white font-semibold text-base mb-4">Marco</p>
                      </motion.div>

                      {/* Quick Actions */}
                      <motion.div
                        className="grid grid-cols-2 gap-2 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <motion.div
                          className="bg-white/15 backdrop-blur-sm rounded-xl p-3"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                        >
                          <div className="w-7 h-7 bg-green-400/20 rounded-lg flex items-center justify-center mb-2">
                            <Clock className="w-3.5 h-3.5 text-green-300" />
                          </div>
                          <p className="text-[10px] text-white/70">Rejestruj czas</p>
                          <p className="text-white font-semibold text-xs">Start</p>
                        </motion.div>
                        <motion.div
                          className="bg-white/15 backdrop-blur-sm rounded-xl p-3"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        >
                          <div className="w-7 h-7 bg-blue-400/20 rounded-lg flex items-center justify-center mb-2">
                            <Camera className="w-3.5 h-3.5 text-blue-300" />
                          </div>
                          <p className="text-[10px] text-white/70">Zdjęcie</p>
                          <p className="text-white font-semibold text-xs">Zrób</p>
                        </motion.div>
                      </motion.div>

                      {/* Task List */}
                      <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-3 space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">Dzisiejsze zadania</p>
                        {[
                          { text: "Malowanie mieszkania 3.5 pokoje", done: true },
                          { text: "Odbiór materiałów", done: false },
                          { text: "Wgraj zdjęcia", done: false },
                        ].map((task, i) => (
                          <motion.div
                            key={task.text}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.9 + i * 0.15 }}
                          >
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${task.done ? "bg-green-400 border-green-400" : "border-white/30"}`}>
                              {task.done && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className={`text-[11px] ${task.done ? "text-white/40 line-through" : "text-white/80"}`}>
                              {task.text}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Navigation Button */}
                      <motion.div
                        className="mt-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        animate={{ scale: [1, 1.01, 1] }}
                      >
                        <div className="w-7 h-7 bg-red-400/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-3.5 h-3.5 text-red-300" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] text-white/50">Następne zlecenie</p>
                          <p className="text-white text-[11px] font-medium">Bahnhofstrasse 42, Zürich</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-neutral-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900">Czas zarejestrowany</p>
                    <p className="text-[10px] text-neutral-400">Projekt 3.5 pokoje</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute -left-4 bottom-1/3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-neutral-100"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900">3 zdjęcia</p>
                    <p className="text-[10px] text-neutral-400">przesłane</p>
                  </div>
                </div>
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
              href="/features/mitarbeiter-app"
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
