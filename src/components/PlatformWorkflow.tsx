import { Smartphone, Database, Monitor, Link2, BarChart3, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const steps = [
  {
    title: 'Collect',
    icon: Smartphone,
    detail: 'Mobile GIS & Field Logging',
  },
  {
    title: 'Centralize',
    icon: Database,
    detail: 'Unified Estate Database',
  },
  {
    title: 'Monitor',
    icon: Monitor,
    detail: 'Real-Time Spatial Monitoring',
  },
  {
    title: 'Trace',
    icon: Link2,
    detail: 'End-to-End Batch Traceability',
  },
  {
    title: 'Analyze',
    icon: BarChart3,
    detail: 'Spatial & Financial Analytics',
  },
  {
    title: 'Improve',
    icon: TrendingUp,
    detail: 'Data-Driven Growth & ROI',
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
        </div>

        {/* 6-Step Visual Process Timeline */}
        <div className="mt-16 sm:mt-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`group relative flex flex-col rounded-3xl border border-forest-950/[0.07] bg-white p-6 shadow-sm cursor-pointer transition-all duration-700 hover:border-emerald-accent/40 hover:shadow-glow-soft hover:-translate-y-1 ${
                    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  {/* Icon Circle */}
                  <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-emerald-accent/10 text-emerald-deep group-hover:bg-emerald-accent/20 group-hover:scale-105 transition-all duration-300">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>

                  {/* Text Details */}
                  <h3 className="mt-4 text-lg font-bold tracking-tight text-forest-950 group-hover:text-emerald-deep transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-forest-950/60">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
