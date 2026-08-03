import { Coins, Sprout, Truck, Package, FlaskConical, Settings, Check, ArrowUpRight, Layers, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const modules: {
  icon: typeof Coins;
  title: string;
  subtitle: string;
  tag: string;
  features: string[];
  stat: { value: string; label: string };
}[] = [
  {
    icon: Coins,
    title: 'Financial Management',
    subtitle: 'Track farm expenses, cashflow, and budgets with per-field cost accounting.',
    tag: 'Finance',
    stat: { value: '$1.2M', label: 'capital tracked' },
    features: [
      'Activity-based cost accounting per field, crop batch, and employee',
      'Live cashflow and balance sheet visibility',
      'Budget vs. actual tracking with variance alerts',
      'Ledger entries for purchases, payroll, and equipment leases',
      'Automated market-rate cost estimations',
      'Board-ready financial projections from operational data',
      'Multi-site consolidation for enterprise reporting',
      'Exportable statements for audits and stakeholders',
    ],
  },
  {
    icon: Sprout,
    title: 'Crop Management',
    subtitle: 'Plan, monitor, and manage every crop from planting to harvest.',
    tag: 'Crop',
    stat: { value: '47', label: 'active cycles' },
    features: [
      'Growth-stage modeling and GDD accumulation per field block',
      'Automated task scheduling tied to the crop calendar',
      'Field boundary mapping via automated satellite zoning',
      'NDVI-based vegetation health monitoring',
      'Soil moisture and fertilizer input tracking',
      'Harvest ETA forecasting by batch',
      'Crop rotation and seasonal planning',
      'Yield prediction linked to crop health data',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping',
    subtitle: 'Coordinate dispatch, routes, and cold-chain logistics from field to buyer.',
    tag: 'Shipping',
    stat: { value: '96.4%', label: 'on-time rate' },
    features: [
      'Truck dispatch and route optimization',
      'Scale ticket records and load tracking',
      'Cold-chain temperature logs in transit',
      'Live shipment status — in transit, delivered, delayed',
      'Logistics sync with harvest and silo schedules',
      'Multi-site to buyer and port routing',
      'Delivery performance and transit-time analytics',
      'Exportable manifests for compliance',
    ],
  },
  {
    icon: Package,
    title: 'Inventory',
    subtitle: 'Real-time stock tracking for seed, fertilizer, chemicals, and equipment.',
    tag: 'Inventory',
    stat: { value: '1,842', label: 'tracked SKUs' },
    features: [
      'Real-time stock levels across silos and stores',
      'Low-stock alerts and automated reorder triggers',
      'Supplier integration for purchase orders',
      'Seed, chemical, and equipment lot tracking',
      'Silo and bin telemetry for grain volume and moisture',
      'Purchase-to-usage traceability',
      'Cost tracking per input category',
      'Stock-linked application from field operations',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Fertilizer',
    subtitle: 'Plan, apply, and track nutrient inputs — synced to soil health and inventory.',
    tag: 'Fertilizer',
    stat: { value: 'N-P-K', label: 'nutrient planning' },
    features: [
      'Nutrient (N-P-K) plans generated from soil health and crop stage',
      'Application scheduling tied to field, plot, and crop calendar',
      'Dosage and coverage tracking — quantity, location, and personnel',
      'Stock-linked application — auto-deduct from inventory on use',
      'Low-stock and reorder alerts synced with supplier catalogs',
      'Cost-per-hectare tracking by fertilizer type and blend',
      'Compliance logging for input use and safety data sheets',
      'AI/ML-adjusted recommendations as conditions change',
    ],
  },
  {
    icon: Settings,
    title: 'Operations',
    subtitle: 'Schedule tasks, deploy crews, and track machinery across every field block.',
    tag: 'Operations',
    stat: { value: '34', label: 'active work orders' },
    features: [
      'Work order scheduling and crew deployment',
      'Machinery hours and fuel consumption tracking',
      'Pesticide and spray application logging',
      'Weather-triggered task automation',
      'Labor attendance and productivity scoring',
      'Task completion tracking by field and crew',
      'Equipment maintenance and usage logs',
      'Regulatory compliance logs for labor and safety',
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
              Every operation.{' '}
              <span className="shimmer-text">One connected platform.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-950/60">
              Finance, crops, shipping, inventory, fertilizer, and field operations — six modules running on one
              shared picture, so nothing gets left to memory.
            </p>
          </div>

          {/* quick stats */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest-950/[0.06] sm:grid-cols-4">
            {[
              { icon: Layers, v: '6', l: 'core modules' },
              { icon: Package, v: '1,842', l: 'SKUs tracked' },
              { icon: Truck, v: '96.4%', l: 'on-time shipping' },
              { icon: MapPin, v: '15,000+', l: 'active farms' },
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
