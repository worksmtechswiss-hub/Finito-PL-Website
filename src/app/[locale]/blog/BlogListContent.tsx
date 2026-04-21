"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { staggerContainer, staggerItem } from "@/lib/animations";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-6">
              <Tag className="w-4 h-4" />
              Wiedza i porady
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              Blog Finito Pro
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Praktyczne porady, poradniki i aktualności dla firm usługowych i
              rzemieślniczych.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={staggerItem}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-full rounded-2xl border border-neutral-200 bg-white hover:border-[#8b5cf6]/30 hover:shadow-lg hover:shadow-[#8b5cf6]/5 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-[#8b5cf6]/10 via-[#8b5cf6]/5 to-[#5eead4]/10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#5eead4] flex items-center justify-center">
                        <Tag className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Category + Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-[#8b5cf6] bg-[#8b5cf6]/10 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-neutral-400">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-[#8b5cf6] transition-colors leading-snug">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium text-[#8b5cf6] group-hover:gap-2 transition-all">
                          Czytaj
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">
              Gotowy na zmianę w Twojej firmie?
            </h2>
            <p className="text-neutral-500 mb-8">
              Testuj Finito Pro za darmo przez 14 dni. Bez karty kredytowej.
            </p>
            <a
              href="https://app.finitopro.pl/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-[#8b5cf6]/25 transition-all"
            >
              Rozpocznij za darmo
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
