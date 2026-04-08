"use client";

import { motion } from "framer-motion";

export function ImpressumContent() {
  return (
    <>
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
              <span className="gradient-text-animated">Informacje prawne</span>
            </h1>
            <p className="text-lg text-white/60">
              Dane zgodnie z prawem szwajcarskim.
            </p>
          </motion.div>
        </div>

      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Adres kontaktowy</h2>
              <div className="text-neutral-600 leading-relaxed text-sm">
                <p className="font-medium">Octolabs Sp. z o.o.</p>
                <p>Ho�a 29, 00-521 Warszawa, Polska</p>
                <p className="mt-2">KRS: 0001185907 | NIP: 7011270907 | REGON: 542315362</p>
                <p className="mt-2">Osoba kontaktowa: Kamil Gonera</p>
                <p className="mt-2">E-mail: hello@finitopro.ch</p>
                <p>Strona internetowa: www.finitopro.pl</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Osoby uprawnione do reprezentacji</h2>
              <p className="text-neutral-600 text-sm">
                Kamil Gonera
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Wyłączenie odpowiedzialności</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Autor nie udziela żadnych gwarancji co do merytorycznej poprawności,
                dokładności, aktualności, wiarygodności i kompletności zamieszczonych
                informacji. Roszczenia z tytułu odpowiedzialności wobec autora za szkody
                materialne lub niematerialne wynikające z dostępu do opublikowanych
                informacji, ich wykorzystania bądź niewykorzystania, z nadużycia połączenia
                lub z zakłóceń technicznych są wyłączone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Odpowiedzialność za linki</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Odesłania i linki do stron internetowych osób trzecich wykraczają poza
                zakres naszej odpowiedzialności. Wszelka odpowiedzialność za takie strony
                internetowe zostaje odrzucona. Dostęp do takich stron internetowych i
                korzystanie z nich odbywa się na własne ryzyko użytkownika.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Prawa autorskie</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Prawa autorskie oraz wszelkie inne prawa do treści, obrazów, zdjęć i
                innych plików zamieszczonych na niniejszej stronie internetowej należą
                wyłącznie do Finito Pro lub wyraźnie wskazanych właścicieli praw. Na
                reprodukcję jakichkolwiek elementów wymagana jest uprzednia pisemna zgoda
                właściciela praw autorskich.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
