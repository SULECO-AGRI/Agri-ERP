import { Eye, ShieldCheck, AlertTriangle, Users, TrendingDown, TrendingUp, FileCheck2, Cpu, Phone, Globe, ArrowUpRight, Star, Award } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const roiItems = [
  {
    icon: Eye,
    title: 'Real-time visibility',
    desc: 'Across the plantation, from GIS estate blocks to individual harvest logs.',
  },
  {
    icon: ShieldCheck,
    title: 'Better traceability',
    desc: 'Full batch compliance from tree harvest through copra & oil processing.',
  },
  {
    icon: AlertTriangle,
    title: 'Lower production risks',
    desc: 'Mitigate operational hazards with proactive weather & pest alerts.',
  },
  {
    icon: Users,
    title: 'Reduced labor waste',
    desc: 'Cut administrative burden with direct workforce & field-level logging.',
  },
  {
    icon: TrendingDown,
    title: 'Stronger cost control',
    desc: 'Active cost management, input control, and byproduct waste reduction.',
  },
  {
    icon: TrendingUp,
    title: 'Improved productivity',
    desc: 'Optimize seasonal yields and long-term tree productivity cycles.',
  },
  {
    icon: FileCheck2,
    title: 'Faster decision-making',
    desc: 'Audit-ready reporting with filtered views in minutes instead of weeks.',
  },
  {
    icon: Cpu,
    title: 'Smart-farm foundation',
    desc: 'Future-ready foundation for IoT sensor telemetry and AI expansion.',
  },
];

export function ValueAndWhySpatio({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-20" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* ---------------- VALUE DELIVERED / ROI ---------------- */}
        <div>
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
              Value Delivered &amp; ROI
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
              Measurable impact across <span className="shimmer-text">every hectare.</span>
            </h2>
          </div>

          {/* 8-Card ROI Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roiItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group rounded-3xl border border-forest-950/[0.07] bg-cream/50 p-6 transition-all duration-700 hover:border-emerald-accent/40 hover:bg-white hover:shadow-glow-soft hover:-translate-y-1 ${
                    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-accent/10 text-emerald-deep transition-all duration-300 group-hover:bg-emerald-accent/20 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-forest-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- WHY SPATIO / SDS ---------------- */}
        <div className="mt-28 lg:mt-36 pt-16 border-t border-forest-950/[0.07]">
          {/* Centered Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
              Why Spatio / SDS
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
              Geospatial precision built for <span className="shimmer-text">real field operations.</span>
            </h2>

            {/* Rating Stars & Score (Exact Reference Design) */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-base font-bold text-forest-950">5.0</span>
              </div>
              <p className="mt-1 text-xs font-medium text-forest-950/60">From 50+ Reviews</p>
            </div>
          </div>

          {/* 5-Card Exact Reference Layout */}
          <div
            className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-4 sm:gap-5 lg:gap-5 max-w-6xl mx-auto transition-all duration-1000 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Card 1: High-Tech Precision Agri Robotic Image */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <img
                src="/images/smart_agri_robotics.jpg"
                alt="Precision Agricultural Robotics"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-black/10" />
            </div>

            {/* Card 2: Dark Teal Stat Card - 300+ */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] bg-[#0e3b33] p-7 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                300+
              </span>
              <p className="mt-4 text-sm sm:text-base font-medium text-white/85 leading-snug max-w-[140px]">
                Our Esteemed Clients and Partners
              </p>
            </div>

            {/* Card 3: Shorter Bright Lime Green Center Card - Total Projects 2500+ */}
            <div className="group relative h-[210px] sm:h-[230px] rounded-[22px] sm:rounded-[26px] bg-[#6bb526] p-6 flex flex-col items-center justify-center text-center shadow-lg shadow-lime-600/20 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[26px] ring-1 ring-inset ring-white/20" />
              <span className="text-xs sm:text-sm font-semibold text-white/95">
                Total Projects
              </span>
              <span className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                2500+
              </span>
            </div>

            {/* Card 4: Dark Charcoal Stat Card - 12+ */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] bg-[#1a2323] p-7 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                12+
              </span>
              <p className="mt-4 text-sm sm:text-base font-medium text-white/85 leading-snug max-w-[140px]">
                Years of Dedicated Service
              </p>
            </div>

            {/* Card 5: Dark Teal Card with Organic Green Gradient Swoop & Badge */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] bg-[#0e3b33] p-7 flex flex-col justify-between items-start text-left overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              {/* Organic Wavy Green Gradient Aura */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-52 w-52 rounded-full bg-emerald-500/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute top-0 right-0 left-0 h-44 bg-gradient-to-b from-emerald-500/25 via-emerald-700/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />

              {/* Circular Badge Icon */}
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-inner transition-transform duration-300 group-hover:scale-110">
                <Award className="h-5 w-5 text-emerald-accent" />
              </div>

              {/* Punchy Value Statement */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                  Achieve Optimal Efficiency and Boost Productivity
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- COCONUT FARM CALLOUT BANNER ---------------- */}
        <div
          className={`mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white shadow-2xl ring-1 ring-white/10 transition-all duration-1000 delay-300 ${
            shown ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
          <div className="relative p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-emerald-accent/[0.1] blur-3xl" />

            {/* Left Tagline */}
            <div className="relative z-10 max-w-xl">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-emerald-accent">
                  Estate &amp; Plantation Excellence
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl leading-snug">
                  Turn your coconut farm into a{' '}
                  <span className="text-emerald-accent">smart, accessible, efficient</span> operation.
                </h3>
              </div>
            </div>

            {/* Right Contact Pill with Web & Phone */}
            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:shrink-0">
              <div className="flex flex-col gap-2 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/15 backdrop-blur-md">
                <span className="text-xs font-medium text-white/70">Ready to schedule your demo?</span>
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                  <a
                    href="https://www.spatiosds.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-accent hover:text-white transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    www.spatiosds.com
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="tel:0773301274"
                    className="inline-flex items-center gap-1.5 text-white hover:text-emerald-accent transition-colors"
                  >
                    <Phone className="h-4 w-4 text-emerald-accent" />
                    077 330 1274
                  </a>
                </div>
              </div>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('demo')}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-accent px-6 py-4 text-sm font-semibold text-white shadow-glow hover:bg-emerald-deep transition-all active:scale-[0.98]"
                >
                  Schedule Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
