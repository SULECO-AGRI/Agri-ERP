import { Monitor, Sprout, Factory, ShoppingCart, UserCheck, Users, CloudSun, FileCheck, Check, ArrowUpRight, Layers, MapPin, Trees, Shield } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const modules = [
  {
    icon: Monitor,
    title: 'Dashboard & GIS Monitoring',
    subtitle: 'Live overview of subdivisions, maps, tree statistics, and performance indicators.',
    tag: 'GIS & Maps',
    stat: { value: '18 Blocks', label: 'cadastral subdivisions' },
    features: [
      'Cadastral subdivision polygon boundaries & interactive maps',
      'Individual palm and tree density statistics by block',
      'NDVI satellite vegetation & canopy health monitoring',
      'Subdivision performance KPIs and yield heatmaps',
      'Elevation, drainage, and terrain contour overlays',
      'Drone orthomosaic imagery upload and layer alignment',
    ],
  },
  {
    icon: Sprout,
    title: 'Harvest Records',
    subtitle: 'Track harvest quantities by date, subdivision, and crop batch.',
    tag: 'Harvest',
    stat: { value: '84,200', label: 'nuts logged this cycle' },
    features: [
      'Daily and cyclical harvest logging per subdivision block',
      'Nut count, fresh weight, and quality grading by batch',
      'Tree productivity tracking and aging cycle history',
      'Seasonal yield comparison against historical baselines',
      'Harvester allocation and piece-rate collection records',
      'Batch grading and rejection rate analytics',
    ],
  },
  {
    icon: Factory,
    title: 'Processing Records',
    subtitle: 'Record processed outputs such as copra, coconut oil, husk, and shell.',
    tag: 'Processing',
    stat: { value: '98.4%', label: 'byproduct utilization' },
    features: [
      'Copra kiln drying intake, moisture reduction & dry weight outputs',
      'Virgin and commercial coconut oil extraction yields',
      'Coir fiber and husk defibering batch tracking',
      'Coconut shell carbonization and charcoal output logs',
      'Input-to-output conversion efficiency ratio metrics',
      'Processing facility maintenance and kiln run schedules',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Sales Tracking',
    subtitle: 'Monitor sales records, quantities, and transaction performance.',
    tag: 'Sales',
    stat: { value: '$148.2K', label: 'quarterly contracts' },
    features: [
      'Wholesale buyer contract management & fulfillment tracking',
      'Copra, coconut oil, fiber, and shell dispatch manifests',
      'Transaction history, invoicing, and accounts receivable sync',
      'Market price alignment and price variance alerts',
      'Delivery schedules and weighbridge scale ticket records',
      'Customer order status and dispatch confirmations',
    ],
  },
  {
    icon: UserCheck,
    title: 'Farm Managers',
    subtitle: 'Organize managerial oversight and subdivision responsibility.',
    tag: 'Management',
    stat: { value: '100%', label: 'subdivision coverage' },
    features: [
      'Block-level supervisor and estate manager assignments',
      'Daily operational task approval and workflow tracking',
      'Subdivision budget allocation and input authorization',
      'Managerial KPI tracking across hectares and yield milestones',
      'Exception alerts for harvest delays or equipment issues',
      'Cross-subdivision performance benchmarking',
    ],
  },
  {
    icon: Users,
    title: 'Farm Employees',
    subtitle: 'Structure workforce records and field-level accountability.',
    tag: 'Workforce',
    stat: { value: '14 Crews', label: 'active in field' },
    features: [
      'Tree climber, harvester, and laborer registry & attendance',
      'Field-level task completion verification and daily logs',
      'Piece-rate compensation calculation linked to harvest counts',
      'Training, equipment handling, and safety compliance records',
      'Mobile field check-in with offline capability',
      'Work crew allocation by subdivision and task urgency',
    ],
  },
  {
    icon: CloudSun,
    title: 'Weather & Market Intelligence',
    subtitle: 'Connect weather awareness and market signals for better timing.',
    tag: 'Intelligence',
    stat: { value: '$342/t', label: 'copra spot index' },
    features: [
      'Micro-climate estate weather station telemetry & rain gauges',
      '10-day rainfall forecasting to optimize harvest & drying cycles',
      'Coconut national auction and global FOB market price feeds',
      'Copra and oil spot price variance trackers',
      'Drought stress and humidity index monitoring',
      'Optimal fertilization and spraying window recommendations',
    ],
  },
  {
    icon: FileCheck,
    title: 'User Management & Reports',
    subtitle: 'Role-based access, filtered views, exportable records, and audit-ready reporting.',
    tag: 'Audit & Reports',
    stat: { value: 'Audit-Ready', label: 'exportable records' },
    features: [
      'Role-based access control (Admin, Estate Manager, Agronomist, Auditor)',
      'Filtered subdivision views tailored to user responsibilities',
      'Instant PDF and Excel exportable records for boards & banks',
      'Complete audit trail of all data entries and modifications',
      'Multi-estate consolidation for large agribusiness corporations',
      'Compliance logging for organic certifications & standards',
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
              Spatio Agri · Plantation Modules
            </span>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest text-forest-950 sm:text-6xl">
              Eight dedicated modules.{' '}
              <span className="shimmer-text">One connected plantation.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-950/60">
              From GIS subdivision mapping to harvest counts, copra processing, and market sales — Spatio Agri replaces paper ledgers with an integrated operational operating system.
            </p>
          </div>

          {/* quick stats */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest-950/[0.06] sm:grid-cols-4">
            {[
              { icon: Layers, v: '8', l: 'core modules' },
              { icon: Trees, v: '24,500+', l: 'mapped palms' },
              { icon: MapPin, v: '18 Blocks', l: 'cadastral subdivisions' },
              { icon: Shield, v: '100%', l: 'traceable yield' },
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
              style={{ transitionDelay: `${idx * 80}ms` }}
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
                <div className="p-8 lg:col-span-8 flex flex-col justify-between">
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
                  <div className="mt-8 flex items-center gap-2 border-t border-forest-950/[0.06] pt-5">
                    <button
                      onClick={() => onNavigate('demo')}
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-forest-950 transition-colors hover:text-emerald-deep"
                    >
                      Schedule a walkthrough for this module
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
