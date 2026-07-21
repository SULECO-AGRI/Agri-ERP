import { Activity, MapPin, Droplets, TrendingUp, Sprout, Cpu, Satellite } from 'lucide-react';

function Sparkline() {
  // deterministic dummy area chart
  const pts = [12, 18, 14, 22, 28, 24, 34, 30, 42, 38, 48, 52];
  const max = 56;
  const w = 280;
  const h = 90;
  const step = w / (pts.length - 1);
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (p / max) * h}`).join(' ');
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path d={d} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / max) * h} r={i === pts.length - 1 ? 3 : 0} fill="#10B981" />
      ))}
    </svg>
  );
}

function Bars() {
  const data = [40, 65, 52, 78, 60, 88, 72, 95];
  return (
    <div className="flex h-full items-end gap-1.5">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-forest-800 to-forest-700"
          style={{ height: `${(v / 100) * 100}%` }}
        />
      ))}
    </div>
  );
}

export function DashboardMockup({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark';
  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl p-5 shadow-float ring-1 ${
        dark ? 'bg-forest-950 text-white ring-white/10' : 'bg-white text-forest-950 ring-forest-950/10'
      }`}
    >
      {/* window chrome */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-accent/80" />
        </div>
        <div
          className={`rounded-md px-2.5 py-1 font-mono text-[10px] ${
            dark ? 'bg-white/10 text-white/60' : 'bg-forest-950/[0.04] text-forest-950/50'
          }`}
        >
          app.agricore.io / operations
        </div>
        <div className={`h-5 w-5 rounded-full ${dark ? 'bg-white/10' : 'bg-forest-950/[0.06]'}`} />
      </div>

      <div className="grid grid-cols-12 gap-3">
        {/* left rail */}
        <div className="col-span-2 hidden flex-col gap-2 sm:flex">
          {['Overview', 'Fields', 'Sensors', 'Supply', 'Yield AI'].map((s, i) => (
            <div
              key={s}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                i === 0
                  ? dark ? 'bg-white/10 text-white' : 'bg-forest-950/[0.05] text-forest-950'
                  : dark ? 'text-white/50' : 'text-forest-950/50'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-emerald-accent' : 'bg-current opacity-30'}`} />
              {s}
            </div>
          ))}
        </div>

        {/* main */}
        <div className="col-span-12 sm:col-span-10">
          {/* top stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Droplets, label: 'Soil Moisture', val: '64.2%', sub: '+2.1%', green: true },
              { icon: TrendingUp, label: 'Yield Forecast', val: '12.4t', sub: '+8.3%', green: true },
              { icon: Cpu, label: 'Active Sensors', val: '1,284', sub: 'live', green: false },
            ].map((s) => (
              <div
                key={s.label}
                className={`rounded-xl p-3 ring-1 ${
                  dark ? 'bg-white/[0.04] ring-white/10' : 'bg-forest-950/[0.02] ring-forest-950/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <s.icon className={`h-3.5 w-3.5 ${dark ? 'text-white/60' : 'text-forest-950/50'}`} />
                  <span
                    className={`font-mono text-[9px] ${
                      s.green ? 'text-emerald-accent' : dark ? 'text-white/40' : 'text-forest-950/40'
                    }`}
                  >
                    {s.sub}
                  </span>
                </div>
                <div className="mt-1.5 text-lg font-bold tracking-tight">{s.val}</div>
                <div className={`text-[10px] ${dark ? 'text-white/50' : 'text-forest-950/50'}`}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* chart + map row */}
          <div className="mt-3 grid grid-cols-5 gap-3">
            <div
              className={`col-span-5 rounded-xl p-3 ring-1 sm:col-span-3 ${
                dark ? 'bg-white/[0.04] ring-white/10' : 'bg-forest-950/[0.02] ring-forest-950/5'
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-emerald-accent" />
                  <span className="text-[11px] font-semibold">Yield Trend · 12 mo</span>
                </div>
                <span className={`font-mono text-[9px] ${dark ? 'text-white/40' : 'text-forest-950/40'}`}>tonnes/ha</span>
              </div>
              <div className="h-24">
                <Sparkline />
              </div>
            </div>

            <div
              className={`col-span-5 rounded-xl p-3 ring-1 sm:col-span-2 ${
                dark ? 'bg-white/[0.04] ring-white/10' : 'bg-forest-950/[0.02] ring-forest-950/5'
              }`}
            >
              <div className="mb-2 flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-emerald-accent" />
                <span className="text-[11px] font-semibold">Field Map</span>
              </div>
              <div
                className={`relative h-24 overflow-hidden rounded-lg ${
                  dark ? 'bg-forest-800' : 'bg-forest-950/[0.04]'
                }`}
              >
                <div
                  className={`absolute inset-0 ${dark ? 'bg-grid-dark' : 'bg-grid'} opacity-60`}
                />
                {[
                  { top: '18%', left: '22%', c: '#10B981' },
                  { top: '52%', left: '62%', c: '#059669' },
                  { top: '68%', left: '28%', c: '#10B981' },
                  { top: '32%', left: '70%', c: '#34d399' },
                ].map((m, i) => (
                  <span
                    key={i}
                    className="absolute h-2.5 w-2.5 animate-pulseLine rounded-full ring-2 ring-white/40"
                    style={{ top: m.top, left: m.left, backgroundColor: m.c }}
                  />
                ))}
                <div className="absolute bottom-1.5 left-2 font-mono text-[8px] text-emerald-accent">
                  4 zones · 1,820 ha
                </div>
              </div>
            </div>
          </div>

          {/* bottom row */}
          <div className="mt-3 grid grid-cols-5 gap-3">
            <div
              className={`col-span-5 rounded-xl p-3 ring-1 sm:col-span-2 ${
                dark ? 'bg-white/[0.04] ring-white/10' : 'bg-forest-950/[0.02] ring-forest-950/5'
              }`}
            >
              <div className="mb-2 flex items-center gap-1.5">
                <Sprout className="h-3 w-3 text-emerald-accent" />
                <span className="text-[11px] font-semibold">Crop Mix</span>
              </div>
              <div className="h-20">
                <Bars />
              </div>
            </div>
            <div
              className={`col-span-5 rounded-xl p-3 ring-1 sm:col-span-3 ${
                dark ? 'bg-white/[0.04] ring-white/10' : 'bg-forest-950/[0.02] ring-forest-950/5'
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Satellite className="h-3 w-3 text-emerald-accent" />
                  <span className="text-[11px] font-semibold">Live Telemetry Feed</span>
                </div>
                <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-accent" /> streaming
                </span>
              </div>
              <div className="space-y-1.5">
                {[
                  ['FIELD-A12', 'moisture', '62.1%', 'ok'],
                  ['FIELD-B07', 'temp', '24.8°C', 'ok'],
                  ['FIELD-C03', 'NDVI', '0.78', 'optimal'],
                  ['FIELD-A12', 'EC', '1.42 dS/m', 'ok'],
                ].map((r, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between rounded-md px-2 py-1.5 font-mono text-[9px] ${
                      dark ? 'bg-white/[0.03] text-white/70' : 'bg-forest-950/[0.02] text-forest-950/70'
                    }`}
                  >
                    <span className={dark ? 'text-white' : 'text-forest-950'}>{r[0]}</span>
                    <span className="opacity-60">{r[1]}</span>
                    <span>{r[2]}</span>
                    <span className="rounded-full bg-emerald-accent/15 px-1.5 py-0.5 text-emerald-accent">{r[3]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
