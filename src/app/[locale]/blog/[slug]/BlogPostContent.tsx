"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { blogPosts } from "@/data/blog-posts";

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const months = [
    "", "Stycze\u0144", "Luty", "Marzec", "Kwiecie\u0144", "Maj", "Czerwiec",
    "Lipiec", "Sierpie\u0144", "Wrzesie\u0144", "Pa\u017adziernik", "Listopad", "Grudzie\u0144",
  ];
  return `${months[parseInt(month)]} ${year}`;
}

function renderContent(blocks: string[]) {
  return blocks.map((block, i) => {
    // H2 heading
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl font-semibold text-neutral-900 mt-10 mb-4"
        >
          {block.slice(3)}
        </h2>
      );
    }

    // Bold paragraph (starts with **)
    if (block.startsWith("**")) {
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-neutral-600 leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-neutral-800 font-semibold">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    }

    // Regular paragraph with inline bold
    if (block.includes("**")) {
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-neutral-600 leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-neutral-800 font-semibold">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    }

    // Regular paragraph
    return (
      <p key={i} className="text-neutral-600 leading-relaxed mb-4">
        {block}
      </p>
    );
  });
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie artykuły
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-white bg-white/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/50">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/50">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-neutral-200"
          >
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-500 text-xs rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Wypróbuj Finito Pro za darmo
          </h2>
          <p className="text-white/60 mb-8">
            Zarządzanie projektami, faktury, CRM i rejestracja czasu pracy — wszystko w jednej aplikacji.
          </p>
          <a
            href="https://app.finitopro.pl/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8b5cf6] font-semibold rounded-2xl hover:shadow-lg transition-all"
          >
            Testuj 14 dni za darmo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8 text-center">
              Przeczytaj również
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="rounded-2xl border border-neutral-200 bg-white hover:border-[#8b5cf6]/30 hover:shadow-lg hover:shadow-[#8b5cf6]/5 transition-all p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#8b5cf6] bg-[#8b5cf6]/10 px-2.5 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-400">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-[#8b5cf6] transition-colors mb-2 leading-snug">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
