import { useState } from 'react';
import {
  Monitor,
  Sprout,
  Factory,
  ShoppingCart,
  Users,
  CloudSun,
  ArrowUpRight,
  Activity,
  Layers,
  FileSpreadsheet,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type TabKey = 'gis' | 'harvest' | 'processing' | 'sales' | 'workforce' | 'intelligence';

const tabs: {
  key: TabKey;
  label: string;
  icon: LucideIcon;
  desc: string;
  live: string;
  footerIcons: LucideIcon[];
  metrics: { label: string; value: string; sub: string; green?: boolean }[];
  rows: [string, string, string, string][];
}[] = [
  {
    key: 'gis',
    label: 'Dashboard & GIS',
    icon: Monitor,
    desc: 'Live overview of subdivisions, cadastral GIS maps, tree statistics, and performance indicators across the estate.',
    live: 'synced',
    footerIcons: [Monitor, Layers, Activity],
    metrics: [
      { label: 'Active Subdivisions', value: '18 Blocks', sub: 'under GIS map', green: true },
      { label: 'Mapped Palms', value: '24,580', sub: 'tree inventory' },
      { label: 'Canopy Health Index', value: '0.82 NDVI', sub: 'optimal condition', green: true },
    ],
    rows: [
      ['BLOCK-N01', 'North Ridge Plantation', '4,200 palms', 'healthy'],
      ['BLOCK-N02', 'River Bend Subdivision', '3,850 palms', 'healthy'],
      ['BLOCK-S04', 'Valley Block Estate', '5,100 palms', 'high yield'],
      ['BLOCK-E07', 'East Slope Plot', '2,900 palms', 'pruned'],
    ],
  },
  {
    key: 'harvest',
    label: 'Harvest Records',
    icon: Sprout,
    desc: 'Track harvest quantities by date, subdivision, and crop batch with historical yield comparisons.',
    live: 'updated',
    footerIcons: [Sprout, Activity, FileSpreadsheet],
    metrics: [
      { label: 'Harvest This Cycle', value: '84,200', sub: 'total nuts', green: true },
      { label: 'Avg Tree Yield', value: '74 nuts/yr', sub: '+12% vs prior' },
      { label: 'Quality Grading', value: 'Grade A 92%', sub: 'export class', green: true },
    ],
    rows: [
      ['HRV-2041', 'Block N01 · Batch 14', '18,400 nuts', 'logged'],
      ['HRV-2042', 'Block S04 · Batch 14', '22,600 nuts', 'logged'],
      ['HRV-2043', 'Block E07 · Batch 15', '14,200 nuts', 'grading'],
      ['HRV-2044', 'Block N02 · Batch 15', '16,800 nuts', 'scheduled'],
    ],
  },
  {
    key: 'processing',
    label: 'Processing Records',
    icon: Factory,
    desc: 'Record processed outputs such as copra drying, virgin and industrial coconut oil, husk fiber, and shell carbon.',
    live: 'live mill',
    footerIcons: [Factory, Activity, Layers],
    metrics: [
      { label: 'Copra Output', value: '14.2 tons', sub: 'kiln dried', green: true },
      { label: 'Oil Extraction', value: '4,850 L', sub: 'cold pressed' },
      { label: 'Byproduct Utilization', value: '98.4%', sub: 'husk & shell recycled', green: true },
    ],
    rows: [
      ['PROC-881', 'Copra Kiln #1 Output', '4.2t dry', 'completed'],
      ['PROC-882', 'Virgin Oil Press Unit', '1,250 L', 'bottled'],
      ['PROC-883', 'Husk Defibering Mill', '8.4t coir', 'baled'],
      ['PROC-884', 'Shell Charcoal Unit', '2.1t carbon', 'processed'],
    ],
  },
  {
    key: 'sales',
    label: 'Sales Tracking',
    icon: ShoppingCart,
    desc: 'Monitor sales records, customer orders, buyer contract quantities, and transaction performance.',
    live: 'synced',
    footerIcons: [ShoppingCart, Activity, FileSpreadsheet],
    metrics: [
      { label: 'Active Contracts', value: '$148.2K', sub: 'this quarter', green: true },
      { label: 'Shipped Copra', value: '28.0 tons', sub: 'fulfilled' },
      { label: 'Average Price', value: '$342/ton', sub: 'market aligned', green: true },
    ],
    rows: [
      ['SLS-1092', 'Wholesale Copra Export', '14.0t', 'paid'],
      ['SLS-1093', 'Virgin Coconut Oil Bulk', '3,000 L', 'dispatched'],
      ['SLS-1094', 'Coir Fiber Bale Order', '24 bales', 'delivered'],
      ['SLS-1095', 'Coconut Shell Carbon', '5.0t', 'contracted'],
    ],
  },
  {
    key: 'workforce',
    label: 'Farm Workforce',
    icon: Users,
    desc: 'Structure workforce records, farm manager subdivision assignments, piece-rate labor, and field accountability.',
    live: 'synced',
    footerIcons: [Users, Activity, Monitor],
    metrics: [
      { label: 'Field Crews', value: '14 Teams', sub: 'deployed today', green: true },
      { label: 'Harvesters / Climbers', value: '32 Staff', sub: 'piece-rate tracked' },
      { label: 'Subdivision Oversight', value: '100%', sub: 'managers assigned', green: true },
    ],
    rows: [
      ['MGR-01', 'Subdivision N Lead', 'Blocks N01-N04', 'on duty'],
      ['CREW-A', 'Harvester Team Alpha', 'Harvest & Pile', 'active'],
      ['CREW-B', 'Husk Shuckers Unit', 'Processing Mill', 'active'],
      ['CREW-C', 'Maintenance & Spraying', 'Block S04', 'scheduled'],
    ],
  },
  {
    key: 'intelligence',
    label: 'Weather & Market',
    icon: CloudSun,
    desc: 'Connect weather forecasts, micro-climate rain gauges, and market commodity prices for better operational timing.',
    live: 'updated',
    footerIcons: [CloudSun, Activity, Monitor],
    metrics: [
      { label: 'Copra Market Spot', value: '$342/t', sub: '+4.2% this week', green: true },
      { label: 'Soil Moisture Level', value: '64.8%', sub: 'optimal hydration' },
      { label: 'Rain Warning', value: '18mm (Wed)', sub: 'plan kiln schedules', green: true },
    ],
    rows: [
      ['WTH-01', 'Estate Weather Station', '28.4°C · 72% RH', 'optimal'],
      ['WTH-02', 'Subdivision Rain Gauge', '14mm / 48h', 'logged'],
      ['MKT-01', 'Coconut National Auction', '$342/t copra', 'bullish'],
      ['MKT-02', 'Global Coconut Oil Index', '$1,820/t FOB', 'stable'],
    ],
  },
];

export function InteractiveCallout() {
  const [active, setActive] = useState<TabKey>('gis');
  const { ref, shown } = useReveal();
  const tab = tabs.find((t) => t.key === active)!;

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-50" />
      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${shown ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">
            Live Plantation Telemetry
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl">
            See your estate in real time.
          </h2>
          <p className="mt-4 text-lg text-forest-950/60">
            Six synchronized operational views — GIS subdivision maps, harvest batches, mill processing, sales contracts, labor oversight, and market intelligence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* left: tab switcher */}
          <div className={`lg:col-span-5 transition-all duration-700 ${shown ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-3">
              {tabs.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-emerald-accent/40 bg-white shadow-glow-soft'
                        : 'border-forest-950/[0.07] bg-white/50 hover:border-forest-950/15 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all ${
                        isActive ? 'bg-forest-950 text-emerald-accent' : 'bg-forest-950/[0.05] text-forest-950/60'
                      }`}
                    >
                      <t.icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`truncate text-sm font-bold tracking-tight ${isActive ? 'text-forest-950' : 'text-forest-950/75'}`}>
                        {t.label}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`h-4 w-4 shrink-0 transition-all ${
                        isActive ? 'text-emerald-deep' : 'text-forest-950/25 group-hover:text-forest-950/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* right: dynamic data card */}
          <div className={`lg:col-span-7 transition-all duration-700 ${shown ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>
            <div key={active} className="animate-fadeUp overflow-hidden rounded-3xl bg-forest-950 p-6 text-white shadow-float ring-1 ring-white/10">
              {/* header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <tab.icon className="h-4 w-4 text-emerald-accent" />
                  <span className="text-sm font-semibold">{tab.label}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] text-emerald-accent ring-1 ring-inset ring-white/10">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-accent" />
                  live · {tab.live}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/60">{tab.desc}</p>

              {/* metrics */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tab.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-white/[0.04] p-4 ring-1 ring-inset ring-white/10">
                    <div className={`font-mono text-[10px] uppercase tracking-wide ${m.green ? 'text-emerald-accent' : 'text-white/40'}`}>
                      {m.sub}
                    </div>
                    <div className="mt-1 text-2xl font-bold tracking-tight">{m.value}</div>
                    <div className="text-xs text-white/50">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* data table */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-white/40">Recent subdivision logs</span>
                  <span className="font-mono text-[10px] text-white/30">{tab.rows.length} entries</span>
                </div>
                <div className="divide-y divide-white/5 rounded-2xl bg-white/[0.02] ring-1 ring-inset ring-white/10">
                  {tab.rows.map((r, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 font-mono text-xs">
                      <span className="font-semibold text-white">{r[0]}</span>
                      <span className="text-white/50">{r[1]}</span>
                      <span className="text-white/80">{r[2]}</span>
                      <span className="rounded-full bg-emerald-accent/15 px-2 py-0.5 text-[10px] font-medium text-emerald-accent">
                        {r[3]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* mini footer icons */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-4 text-white/40">
                  {tab.footerIcons.map((Icon, i) => (
                    <Icon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-white/30">exportable · GIS-linked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
