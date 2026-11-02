import { Smartphone, Database, Monitor, Link2, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const steps = [
  {
    title: 'Collect',
    desc: 'Capture field, harvest, processing, labor, and environmental data directly at the block level.',
    icon: Smartphone,
    detail: 'Mobile GIS & field logging',
  },
  {
    title: 'Centralize',
    desc: 'Store information in one farm database to eliminate fragmented paper books and siloed spreadsheets.',
    icon: Database,
    detail: 'Unified estate database',
  },
  {
    title: 'Monitor',
    desc: 'View dashboards, tree statistics, and subdivision-level conditions with GIS map overlays.',
    icon: Monitor,
    detail: 'Real-time spatial monitoring',
  },
  {
    title: 'Trace',
    desc: 'Connect field activity to harvest, processing (copra, oil, husk, shell), and sales records.',
    icon: Link2,
    detail: 'End-to-end batch traceability',
  },
  {
    title: 'Analyze',
    desc: 'Use interactive charts, custom filters, and map-based insights to evaluate plantation performance.',
    icon: BarChart3,
    detail: 'Spatial & financial analytics',
  },
  {
    title: 'Improve',
    desc: 'Support faster decisions, better cost control, and future yield and market prediction.',
    icon: TrendingUp,
    detail: 'Data-driven growth & ROI',
  },
];

export function PlatformWorkflow({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32 border-b border-forest-950/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
            One connected loop from <br className="hidden sm:inline" />
            <span className="shimmer-text">field data to smart decisions</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-forest-950/65 max-w-2xl mx-auto">
            Spatio Agri transforms everyday plantation operations into a structured digital pipeline — ensuring every tree, harvest batch, and processing stage is tracked, audited, and optimized.
          </p>
        </div>

        {/* 6-Step Visual Process Timeline */}
        <div className="mt-16 sm:mt-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`group relative flex flex-col rounded-3xl border border-forest-950/[0.07] bg-white p-6 shadow-sm transition-all duration-700 hover:border-emerald-accent/40 hover:shadow-glow-soft hover:-translate-y-1 ${
                    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  {/* Icon Circle */}
                  <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-forest-950/[0.04] text-forest-950 group-hover:bg-forest-950 group-hover:text-emerald-accent transition-all duration-300">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>

                  {/* Text Details */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-forest-950">
                    {step.title}
                  </h3>
                  <span className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-deep">
                    {step.detail}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-forest-950/60 flex-1">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom actionable bridge */}
        {onNavigate && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('demo')}
              className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-forest-900 transition-all active:scale-[0.98]"
            >
              See the interactive tour
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
