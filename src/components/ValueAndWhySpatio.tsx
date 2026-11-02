import { Eye, ShieldCheck, AlertTriangle, Users, TrendingDown, TrendingUp, FileCheck2, Cpu, Satellite, Map, Layers, Compass, Phone, Globe, ArrowUpRight } from 'lucide-react';
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

const whySpatioPillars = [
  {
    icon: Satellite,
    title: 'Built on GIS, remote sensing, and smart agriculture expertise',
    detail: 'Decades of combined agronomic science and satellite GIS engineering embedded into every screen.',
  },
  {
    icon: Map,
    title: 'Precision plantation mapping and spatial analytics capability',
    detail: 'Accurate cadastral subdivision mapping, tree canopy counting, and micro-climate spatial intelligence.',
  },
  {
    icon: Layers,
    title: 'Modular and scalable architecture for future-ready deployment',
    detail: 'Start with harvest logs today and scale into processing mills, financial ledgers, and sensor telemetry tomorrow.',
  },
  {
    icon: Compass,
    title: 'Delivered by a geospatial technology team focused on real operational outcomes',
    detail: 'Hands-on deployment engineers who understand the practical realities of plantation management in the field.',
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
          </div>

          {/* 4 Pillars Balanced Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whySpatioPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`group relative flex flex-col justify-between rounded-3xl border border-forest-950/[0.07] bg-white p-7 shadow-sm transition-all duration-700 hover:border-emerald-accent/40 hover:shadow-glow-soft hover:-translate-y-1 ${
                    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-accent/10 text-emerald-deep transition-all duration-300 group-hover:bg-emerald-accent/20 group-hover:scale-105">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-forest-950 leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-forest-950/60 leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </div>
              );
            })}
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
