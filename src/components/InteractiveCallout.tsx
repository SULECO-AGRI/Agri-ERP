import { useState } from 'react';
import { Radio, Repeat, Users, ArrowUpRight, Activity, Cpu, TrendingUp, Droplets, Leaf } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type TabKey = 'iot' | 'cycles' | 'labor';

const tabs: {
  key: TabKey;
  label: string;
  icon: typeof Radio;
  desc: string;
  metrics: { label: string; value: string; sub: string; green?: boolean }[];
  rows: [string, string, string, string][];
}[] = [
  {
    key: 'iot',
    label: 'IoT Live Sensors',
    icon: Radio,
    desc: 'Stream soil moisture, EC, ambient temperature, and NDVI from every probe — sub-minute latency, edge-cached, anomaly-flagged.',
    metrics: [
      { label: 'Avg Latency', value: '380ms', sub: 'edge-cached', green: true },
      { label: 'Sensors Online', value: '1,284', sub: '99.7% uptime' },
      { label: 'Data Points / day', value: '8.4M', sub: 'streaming' },
    ],
    rows: [
      ['FIELD-A12', 'Moisture', '62.1%', 'optimal'],
      ['FIELD-B07', 'Temp', '24.8°C', 'ok'],
      ['FIELD-C03', 'NDVI', '0.78', 'optimal'],
      ['FIELD-A12', 'EC', '1.42 dS/m', 'ok'],
    ],
  },
  {
    key: 'cycles',
    label: 'Crop Cycles',
    icon: Repeat,
    desc: 'Track every crop from planting to harvest. Growth-stage modeling, GDD accumulation, and automated task scheduling per field block.',
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
    key: 'labor',
    label: 'Labor Matrix',
    icon: Users,
    desc: 'Allocate crews, equipment, and contractors against field tasks. Real-time attendance, cost accrual, and productivity scoring.',
    metrics: [
      { label: 'Crews Active', value: '23', sub: 'across 4 sites', green: true },
      { label: 'Hours Logged', value: '1,920', sub: 'this week' },
      { label: 'Labor Cost/ha', value: '$48.20', sub: '-6.1% MoM', green: true },
    ],
    rows: [
      ['CREW-N1', 'North Block', '6 workers', 'active'],
      ['CREW-S4', 'South Block', '9 workers', 'active'],
      ['CREW-G2', 'Greenhouse', '4 workers', 'break'],
      ['CREW-E7', 'East Fields', '11 workers', 'active'],
    ],
  },
];

export function InteractiveCallout() {
  const [active, setActive] = useState<TabKey>('iot');
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
            Switch between operational lenses — from sub-second sensor telemetry to crew allocation. This is a live
            snapshot of what your dashboard could look like.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* left: tab switcher */}
          <div className={`lg:col-span-5 transition-all duration-700 ${shown ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
            <div className="space-y-3">
              {tabs.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-emerald-accent/40 bg-white shadow-glow-soft'
                        : 'border-forest-950/[0.07] bg-white/50 hover:border-forest-950/15 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all ${
                        isActive ? 'bg-forest-950 text-emerald-accent' : 'bg-forest-950/[0.05] text-forest-950/60'
                      }`}
                    >
                      <t.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base font-bold tracking-tight ${isActive ? 'text-forest-950' : 'text-forest-950/80'}`}>
                          {t.label}
                        </h3>
                        <ArrowUpRight
                          className={`h-4 w-4 transition-all ${
                            isActive ? 'text-emerald-deep' : 'text-forest-950/30 group-hover:text-forest-950/60'
                          }`}
                        />
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-forest-950/55">{t.desc}</p>
                    </div>
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
                  live · {active === 'iot' ? '380ms' : active === 'cycles' ? 'updated' : 'synced'}
                </div>
              </div>

              {/* metrics */}
              <div className="mt-5 grid grid-cols-3 gap-3">
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
                  {active === 'iot' && <><Droplets className="h-4 w-4" /><Cpu className="h-4 w-4" /><Activity className="h-4 w-4" /></>}
                  {active === 'cycles' && <><Leaf className="h-4 w-4" /><Repeat className="h-4 w-4" /><TrendingUp className="h-4 w-4" /></>}
                  {active === 'labor' && <><Users className="h-4 w-4" /><Activity className="h-4 w-4" /><TrendingUp className="h-4 w-4" /></>}
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
