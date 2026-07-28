import { useState } from 'react';
import {
  Settings,
  Repeat,
  Package,
  Coins,
  TrendingUp,
  Truck,
  ArrowUpRight,
  Activity,
  Users,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type TabKey = 'financial' | 'sales' | 'operations' | 'shipping' | 'cycles' | 'inventory';

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
    key: 'financial',
    label: 'Financial',
    icon: Coins,
    desc: 'Activity-based cost accounting per field, crop batch, and employee — live cashflow and balance sheet visibility.',
    live: 'synced',
    footerIcons: [Coins, Activity, TrendingUp],
    metrics: [
      { label: 'Capital Accrual', value: '$1.2M', sub: 'this quarter', green: true },
      { label: 'Monthly Spend', value: '$186K', sub: 'on budget' },
      { label: 'Budget Variance', value: '-3.2%', sub: 'under plan', green: true },
    ],
    rows: [
      ['LEDGER-4471', 'Fertilizer Purchase', '$12,400', 'posted'],
      ['LEDGER-4472', 'Fuel & Machinery', '$8,150', 'posted'],
      ['LEDGER-4473', 'Payroll', '$42,900', 'pending'],
      ['LEDGER-4474', 'Equipment Lease', '$6,300', 'posted'],
    ],
  },
  {
    key: 'sales',
    label: 'Sales & Contracts',
    icon: TrendingUp,
    desc: 'Manage crop trade contracts, wholesale agreements, and futures pricing — synced with live harvest projections.',
    live: 'updated',
    footerIcons: [TrendingUp, Activity, Coins],
    metrics: [
      { label: 'Active Contracts', value: '42', sub: 'this season', green: true },
      { label: 'Contracted Volume', value: '3,240t', sub: 'booked' },
      { label: 'Avg Price', value: '$312/t', sub: 'market-synced' },
    ],
    rows: [
      ['CNT-1082', 'Wheat Forward', '480t', 'signed'],
      ['CNT-1083', 'Maize Spot', '620t', 'pending'],
      ['CNT-1084', 'Soybean Forward', '310t', 'signed'],
      ['CNT-1085', 'Barley Contract', '150t', 'signed'],
    ],
  },
  {
    key: 'operations',
    label: 'Field Operations',
    icon: Settings,
    desc: 'Schedule tasks, deploy crews, and track machinery and pesticide application across every field block — in one live plan.',
    live: 'synced',
    footerIcons: [Settings, Users, Activity],
    metrics: [
      { label: 'Work Orders', value: '34', sub: 'in progress', green: true },
      { label: 'Crews Deployed', value: '23', sub: 'across 4 sites' },
      { label: 'Tasks Completed', value: '128', sub: 'this week' },
    ],
    rows: [
      ['FIELD-A12', 'Spraying', 'Crew N1', 'active'],
      ['FIELD-B07', 'Irrigation', 'Crew S4', 'active'],
      ['FIELD-C03', 'Harvesting', 'Crew G2', 'scheduled'],
      ['FIELD-E7', 'Fertilizing', 'Crew E7', 'active'],
    ],
  },
  {
    key: 'shipping',
    label: 'Shipping',
    icon: Truck,
    desc: 'Coordinate dispatch, route optimization, and cold-chain logs from harvest cart to silo elevators and beyond.',
    live: '380ms',
    footerIcons: [Truck, Activity, TrendingUp],
    metrics: [
      { label: 'Loads In Transit', value: '18', sub: 'live tracking', green: true },
      { label: 'On-Time Rate', value: '96.4%', sub: 'last 30 days' },
      { label: 'Avg Transit', value: '6.2h', sub: 'dock to dock' },
    ],
    rows: [
      ['SHIP-2291', 'Grain Truck', 'North → Silo B', 'in transit'],
      ['SHIP-2292', 'Reefer Unit', 'Pack House → Port', 'in transit'],
      ['SHIP-2293', 'Flatbed', 'Field C → Yard', 'delivered'],
      ['SHIP-2294', 'Grain Truck', 'South → Silo A', 'delivered'],
    ],
  },
  {
    key: 'cycles',
    label: 'Crop Lifecycle',
    icon: Repeat,
    desc: 'Track every crop from planting to harvest. Growth-stage modeling, GDD accumulation, and automated task scheduling per field block.',
    live: 'updated',
    footerIcons: [Leaf, Repeat, TrendingUp],
    metrics: [
      { label: 'Active Cycles', value: '47', sub: 'across 6 crops', green: true },
      { label: 'Avg GDD', value: '1,842', sub: 'on schedule' },
      { label: 'Harvest ETA', value: '14d', sub: 'next batch' },
    ],
    rows: [
      ['CYCLE-2041', 'Wheat · Grain', 'Maturity', 'ready'],
      ['CYCLE-2038', 'Maize · Silage', 'Flowering', 'on-track'],
      ['CYCLE-2052', 'Soybean', 'V6 stage', 'on-track'],
      ['CYCLE-2060', 'Barley', 'Tillering', 'monitor'],
    ],
  },
  {
    key: 'inventory',
    label: 'Inventory',
    icon: Package,
    desc: 'Real-time stock levels for seed, fertilizer, and equipment — with low-stock alerts and supplier orders synced automatically.',
    live: 'synced',
    footerIcons: [Package, Activity, TrendingUp],
    metrics: [
      { label: 'Stock Items', value: '1,842', sub: 'tracked SKUs', green: true },
      { label: 'Low-Stock Alerts', value: '6', sub: 'this week' },
      { label: 'Supplier Orders', value: '12', sub: 'in transit' },
    ],
    rows: [
      ['SEED-WHT4', 'Wheat Seed', '2.4t', 'in stock'],
      ['FERT-N32', 'Nitrogen Fert.', '480kg', 'low stock'],
      ['CHEM-PST1', 'Pesticide', '96L', 'in stock'],
      ['TOOL-IRR2', 'Irrigation Kit', '18 units', 'in stock'],
    ],
  },
];

export function InteractiveCallout() {
  const [active, setActive] = useState<TabKey>('operations');
  const { ref, shown } = useReveal();
  const tab = tabs.find((t) => t.key === active)!;

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-50" />
      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${shown ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">
            Live Operations
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl">
            See your farm, in real time.
          </h2>
          <p className="mt-4 text-lg text-forest-950/60">
            Six live dashboards — financial, sales, field operations, shipping, crop lifecycle, and inventory. This is
            a snapshot of what your control center could look like.
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
                  <span className="font-mono text-[10px] uppercase tracking-wide text-white/40">Recent records</span>
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
                <span className="font-mono text-[10px] text-white/30">exportable · API-ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
