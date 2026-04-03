import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Play,
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  Users,
} from "lucide-react";

const featureCards = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FolderKanban, label: "Projekte" },
  { icon: Receipt, label: "QR-Rechnungen" },
  { icon: FileText, label: "Offerten" },
  { icon: Clock, label: "Zeiterfassung" },
  { icon: Users, label: "Kundenportal" },
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a78bfa]" />
            </span>
            <span className="text-sm text-white/70 shimmer-badge">
              {t("badge")}
            </span>
          </div>

          {/* Title - visible immediately, no JS needed */}
          <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6 [animation-delay:100ms]">
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              {t("title").split(" ").slice(0, 2).join(" ")}
            </span>{" "}
            {t("title").split(" ").slice(2).join(" ")}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed [animation-delay:200ms]">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 [animation-delay:300ms]">
            <a
              href="https://app.finitopro.ch/register"
              className="group relative inline-flex items-center gap-2 px-10 py-5 text-white font-semibold rounded-2xl text-lg overflow-hidden animate-float"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-[length:200%_100%] animate-shimmer" />
              <span className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-glow-pulse" />
              <span className="relative z-10 flex items-center gap-2">
                Kostenlos starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl text-base hover:bg-white/5 transition-all">
              <Play className="w-4 h-4" />
              {t("ctaSecondary")}
            </button>
          </div>

          {/* Trust */}
          <p className="animate-fade-up text-sm text-white/40 [animation-delay:400ms]">
            {t("trust")}
          </p>

          {/* All-in-One Feature Overview */}
          <div className="animate-fade-up mt-16 relative [animation-delay:500ms]">
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#8b5cf6]/20 to-[#a78bfa]/20 rounded-3xl blur-3xl" />

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                  Alles in einer App
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {featureCards.map((feature, index) => (
                    <div
                      key={feature.label}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-up"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent" />
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#a78bfa]" />
                      </div>
                      <span className="relative text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
