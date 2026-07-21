import { Satellite, Truck, BarChart3, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    icon: Satellite,
    title: 'Precision Agronomy',
    desc: 'Satellite NDVI imagery and in-soil IoT moisture probes monitor every hectare in real time. Detect stress zones, schedule irrigation, and apply inputs with centimeter-level accuracy.',
    tag: 'IoT + Satellite',
    stat: '1,284 sensors',
  },
  {
    icon: Truck,
    title: 'Farm Supply Chain',
    desc: 'Seed-to-shelf traceability with live inventory levels across silos, cold storage, and dispatch. Automated purchase orders keep your working capital lean and your shelves stocked.',
    tag: 'Traceability',
    stat: '99.2% accuracy',
  },
  {
    icon: BarChart3,
    title: 'Financial & Yield Forecast',
    desc: 'Activity-based cost accounting per field, crop, and batch. Automated market-rate estimations and AI yield models turn operational data into board-ready financial projections.',
    tag: 'AI Forecasting',
    stat: '+12.4% yield',
  },
];

export function Pillars() {
  const { ref, shown } = useReveal();
  return (
    <section id="features" ref={ref} className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">
            Core Pillars
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl">
            Three systems. One unified platform.
          </h2>
          <p className="mt-4 text-lg text-forest-950/60">
            Every commercial farm runs on the same three loops — observe the land, move the goods, and forecast the
            money. AgriCore unifies them into a single source of truth.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-forest-950/[0.07] bg-white p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-float hover:border-emerald-accent/30 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-accent/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-950 text-emerald-accent ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:scale-105">
                    <p.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="rounded-full bg-forest-950/[0.04] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-forest-950/50 ring-1 ring-inset ring-forest-950/5">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-forest-950">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-forest-950/60">{p.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-forest-950/[0.06] pt-5">
                  <span className="font-mono text-sm font-semibold text-emerald-deep">{p.stat}</span>
                  <ArrowUpRight className="h-4 w-4 text-forest-950/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-deep" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
