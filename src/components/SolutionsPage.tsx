import { Wheat, Sprout, Beef, Check, ArrowUpRight, MapPin, Layers, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const modules: {
  icon: typeof Wheat;
  title: string;
  subtitle: string;
  tag: string;
  features: string[];
  stat: { value: string; label: string };
}[] = [
  {
    icon: Wheat,
    title: 'Large Scale Crop Farms',
    subtitle: 'Broad-acre operations from 500 to 50,000+ hectares.',
    tag: 'Open Field',
    stat: { value: '50k ha', label: 'per instance' },
    features: [
      'Satellite NDVI & EVI imagery with auto-zoned field maps',
      'Variable-rate prescription maps for seed, fert, and irrigation',
      'Soil moisture & EC probes with sub-minute edge streaming',
      'Automated GDD accumulation and growth-stage modeling',
      'Harvest scheduling tied to yield-AI and contractor availability',
      'Multi-block fleet tracking for tractors, combines, and carts',
      'Per-field P&L with activity-based cost accounting',
      'Commodity hedging surface linked to live futures feeds',
      'Batch traceability from planting lot to elevator ticket',
      'Weather-triggered task automation (frost, heat, rain events)',
      'Boundary AI auto-detects new fields from parcel geometry',
      'Offline-first mobile capture for remote field crews',
    ],
  },
  {
    icon: Sprout,
    title: 'Commercial Greenhouses',
    subtitle: 'Climate-controlled, high-density indoor cultivation.',
    tag: 'CEA',
    stat: { value: '99.2%', label: 'climate accuracy' },
    features: [
      'Sub-zone climate control for humidity, VPD, and CO₂',
      'Lighting schedules tied to DLI targets and energy tariffs',
      'Hydroponic nutrient dosing with auto-EC/pH correction',
      'Vertical rack allocation and crop-rotation planning',
      'Pest & disease scouting with photo evidence trails',
      'Energy & water usage attribution per cultivation zone',
      'Yield prediction by cultivar, rack, and harvest week',
      'Cold-chain handoff tracking from pack-house to retailer',
      'Labor productivity scoring per greenhouse crew',
      'SKU-level batch traceability for retail compliance',
      'Integrated grow-room camera feeds with anomaly alerts',
      'Carbon footprint accounting per kilogram produced',
    ],
  },
  {
    icon: Beef,
    title: 'Livestock Integrations',
    subtitle: 'Cattle, dairy, and mixed-operation herd management.',
    tag: 'Livestock',
    stat: { value: '120k', label: 'animals tracked' },
    features: [
      'Individual animal registry with RFID & ear-tag linkage',
      'Weight gain, BCS, and health event timelines per animal',
      'Pasture rotation and forage budgeting by paddock',
      'Feed inventory & ration formulation with cost tracking',
      'Automated milk yield and quality logging (dairy)',
      'Breeding cycle, gestation, and calving pipeline management',
      'Vaccination and treatment records with withdrawal windows',
      'Mortalities, sales, and transfers with full audit trail',
      'Grazing density alerts tied to NDVI pasture health',
      'Meat & milk batch traceability from farm to processor',
      'Integration with weighing scales and race readers',
      'Herd-level KPIs: ADG, conception rate, mortality %',
    ],
  },
];

export function SolutionsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();
  return (
    <div className="bg-white">
      {/* hero header */}
      <section className="relative overflow-hidden bg-white pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-60" />
        <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-emerald-accent/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">
              Solutions / Modules
            </span>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest text-forest-950 sm:text-6xl">
              Built for every kind of{' '}
              <span className="shimmer-text">commercial operation.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-950/60">
              AgriCore ships preconfigured module packs tuned to your operation type — so deployment is weeks, not
              quarters. Mix and match as your enterprise diversifies.
            </p>
          </div>

          {/* quick stats */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest-950/[0.06] sm:grid-cols-4">
            {[
              { icon: MapPin, v: '15,000+', l: 'Active farms' },
              { icon: Layers, v: '32', l: 'Integrated modules' },
              { icon: Zap, v: '380ms', l: 'Sensor latency' },
              { icon: Wheat, v: '50k ha', l: 'Max single instance' },
            ].map((s) => (
              <div key={s.l} className="bg-white p-5">
                <s.icon className="h-4 w-4 text-emerald-deep" />
                <div className="mt-2 text-2xl font-bold tracking-tight text-forest-950">{s.v}</div>
                <div className="text-sm text-forest-950/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* module catalog */}
      <section ref={ref} className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-8xl space-y-6 px-5 sm:px-8 lg:px-12">
          {modules.map((m, idx) => (
            <div
              key={m.title}
              className={`group relative overflow-hidden rounded-3xl border border-forest-950/[0.07] bg-white transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-accent/[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-150 opacity-100" />
              <div className="grid lg:grid-cols-12">
                {/* left identity */}
                <div className="relative border-b border-forest-950/[0.06] bg-cream p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-950 text-emerald-accent ring-1 ring-inset ring-white/10">
                      <m.icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <span className="rounded-full bg-forest-950/[0.04] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-forest-950/50 ring-1 ring-inset ring-forest-950/5">
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-forest-950">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/55">{m.subtitle}</p>
                  <div className="mt-8 inline-flex items-baseline gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-inset ring-forest-950/5">
                    <span className="text-3xl font-bold tracking-tight text-emerald-deep">{m.stat.value}</span>
                    <span className="text-xs text-forest-950/50">{m.stat.label}</span>
                  </div>
                </div>

                {/* right: capabilities */}
                <div className="p-8 lg:col-span-8">
                  <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {m.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 py-1">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-accent/15 text-emerald-deep ring-1 ring-inset ring-emerald-accent/20">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-forest-950/75">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-forest-950/[0.06] pt-5">
                    <button
                      onClick={() => onNavigate('demo')}
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-forest-950 transition-colors hover:text-emerald-deep"
                    >
                      Explore this module
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
