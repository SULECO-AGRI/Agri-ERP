import { useState } from 'react';
import { MapPin, Repeat, Users, ArrowUpRight, Check, Calendar, Building2, Phone, Globe } from 'lucide-react';
import { DashboardMockup } from '../components/DashboardMockup';
import { useReveal } from '../hooks/useReveal';

type StepKey = 'fields' | 'cycles' | 'labor';

const steps: { key: StepKey; n: number; label: string; icon: typeof MapPin; blurb: string }[] = [
  { key: 'fields', n: 1, label: 'Map estate subdivisions', icon: MapPin, blurb: 'Draw cadastral subdivision boundaries and map individual tree density with GIS overlays.' },
  { key: 'cycles', n: 2, label: 'Track harvest & processing', icon: Repeat, blurb: 'Record nut collections by block and link to copra drying kilns and oil press mills.' },
  { key: 'labor', n: 3, label: 'Allocate crews & piece-rate', icon: Users, blurb: 'Assign farm managers, harvesters, and mill workers with piece-rate accountability.' },
];

export function DemoPage() {
  const [step, setStep] = useState<StepKey>('fields');
  const [form, setForm] = useState({ name: '', org: '', email: '', size: '' });
  const [submitted, setSubmitted] = useState(false);
  const { ref, shown } = useReveal();
  const active = steps.find((s) => s.key === step)!;

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-60" />
        <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">Interactive Demo</span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tightest text-forest-950 sm:text-5xl">
              Take a guided tour of Spatio Agri.
            </h1>
            <p className="mt-4 text-lg text-forest-950/60">
              Walk through the core operational loops your plantation runs every day — from GIS subdivision maps to copra processing. Then request a live walkthrough tailored to your farm.
            </p>
          </div>
        </div>
      </section>

      {/* guided tour */}
      <section ref={ref} className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className={`transition-all duration-700 ${shown ? 'opacity-100' : 'opacity-0'}`}>
            {/* step rail */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
              {steps.map((s, i) => {
                const isActive = s.key === step;
                const done = steps.findIndex((x) => x.key === step) > i;
                return (
                  <button
                    key={s.key}
                    onClick={() => setStep(s.key)}
                    className={`group flex min-w-0 flex-1 items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? 'border-emerald-accent/40 bg-white shadow-glow-soft'
                        : 'border-forest-950/[0.07] bg-white/60 hover:border-forest-950/15'
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold ${
                        isActive ? 'bg-forest-950 text-emerald-accent' : done ? 'bg-emerald-accent/15 text-emerald-deep' : 'bg-forest-950/[0.05] text-forest-950/50'
                      }`}
                    >
                      {done ? <Check className="h-4 w-4" strokeWidth={3} /> : s.n}
                    </span>
                    <div className="min-w-0">
                      <div className={`truncate text-sm font-bold tracking-tight ${isActive ? 'text-forest-950' : 'text-forest-950/70'}`}>
                        {s.label}
                      </div>
                      <div className="hidden truncate text-xs text-forest-950/45 sm:block">{s.blurb}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* explainer */}
            <div className={`lg:col-span-5 transition-all duration-700 ${shown ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
              <div key={step} className="animate-fadeUp rounded-3xl border border-forest-950/[0.07] bg-cream p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-950 text-emerald-accent">
                    <active.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-deep">Step {active.n} of 3</div>
                    <h3 className="text-xl font-bold tracking-tight text-forest-950">{active.label}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-forest-950/65">{active.blurb}</p>

                <div className="mt-6 space-y-2">
                  {[
                    'Subdivision-level GIS polygons with cadastral precision',
                    'Direct linkage between harvest bunches and copra/oil batches',
                    'Audit-ready exportable reports for management & stakeholders',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2.5">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-accent/15 text-emerald-deep ring-1 ring-inset ring-emerald-accent/20">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-forest-950/70">{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-forest-950/[0.06] pt-5">
                  <button
                    onClick={() => setStep(steps[Math.max(0, active.n - 2)].key)}
                    disabled={active.n === 1}
                    className="rounded-full px-4 py-2 text-sm font-medium text-forest-950/50 transition-colors hover:text-forest-950 disabled:opacity-30"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setStep(steps[Math.min(2, active.n)].key)}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-forest-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-900 active:scale-[0.98]"
                  >
                    {active.n === 3 ? 'Finish tour' : 'Next step'}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* live preview */}
            <div className={`lg:col-span-7 transition-all duration-700 ${shown ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>
              <div className="relative animate-floaty">
                <DashboardMockup variant="dark" />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-forest-950/[0.03] px-5 py-3 ring-1 ring-inset ring-forest-950/5">
                <span className="font-mono text-xs text-forest-950/50">Preview updates with plantation telemetry</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-deep">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-accent" /> live estate mock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* request form */}
      <section className="relative bg-cream py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-50" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">Request a live walkthrough</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tightest text-forest-950 sm:text-4xl">
              See Spatio Agri mapped to your plantation.
            </h2>
            <p className="mt-3 text-forest-950/60">
              An SDS geospatial coordinator will build a live demo using your estate's acreage, tree density, and processing setup.
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 overflow-hidden rounded-3xl border border-emerald-accent/30 bg-white p-10 text-center shadow-glow-soft">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-accent/15 text-emerald-deep ring-1 ring-inset ring-emerald-accent/30">
                <Check className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-forest-950">Request received.</h3>
              <p className="mt-2 text-forest-950/60">
                Thanks, {form.name || 'there'}. Our SDS plantation team will reach out within one business day or call us directly at 077 330 1274.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', org: '', email: '', size: '' }); }}
                className="mt-6 text-sm font-semibold text-emerald-deep hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-10 overflow-hidden rounded-3xl border border-forest-950/[0.07] bg-white p-7 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" icon={Users}>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Estate Manager" className="input" />
                </Field>
                <Field label="Organization / Estate" icon={Building2}>
                  <input required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} placeholder="e.g. Mahaweli Coconut Farm" className="input" />
                </Field>
                <Field label="Work email" icon={Calendar}>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="manager@estate.com" className="input" />
                </Field>
                <Field label="Operation size (hectares / acres)" icon={MapPin}>
                  <input required value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} placeholder="e.g. 500 acres · 18,000 palms" className="input" />
                </Field>
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow-soft transition-all hover:bg-emerald-deep hover:shadow-glow active:scale-[0.98]"
              >
                Schedule Plantation Walkthrough
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-center text-xs text-forest-950/60">
                <a href="tel:0773301274" className="inline-flex items-center gap-1.5 font-semibold text-forest-950 hover:text-emerald-deep">
                  <Phone className="h-3.5 w-3.5 text-emerald-deep" /> Call: 077 330 1274
                </a>
                <span className="text-forest-950/20">·</span>
                <a href="https://www.spatiosds.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-emerald-deep hover:underline">
                  <Globe className="h-3.5 w-3.5" /> www.spatiosds.com
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: typeof Users; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest-950/50">
        <Icon className="h-3.5 w-3.5 text-emerald-deep" />
        {label}
      </span>
      {children}
    </label>
  );
}
