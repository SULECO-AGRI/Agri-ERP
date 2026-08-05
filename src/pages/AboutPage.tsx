import { Users, Globe2, Target, Award, ArrowUpRight, Leaf } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

export function AboutPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();
  const stats = [
    { icon: Users, v: '320+', l: 'Team across 14 countries' },
    { icon: Globe2, v: '15,000+', l: 'Farms on the platform' },
    { icon: Leaf, v: '8.2M ha', l: 'Land under management' },
    { icon: Award, v: '2x', l: 'Agritech of the Year' },
  ];
  const values = [
    { title: 'Land first', desc: 'We optimize for the soil, the crop, and the people who tend them — not vanity metrics.' },
    { title: 'Data with integrity', desc: 'Every number we surface is traceable, auditable, and reproducible. No black boxes.' },
    { title: 'Scale without friction', desc: 'A 500-hectare farm and a 50,000-hectare enterprise run on the same core. No re-platforming.' },
    { title: 'Farmer-owned roadmap', desc: 'Half our product team are former agronomists. Features start in the field, not the boardroom.' },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-60" />
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-emerald-accent/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">About Us</span>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest text-forest-950 sm:text-6xl">
              We build the software that{' '}
              <span className="shimmer-text">feeds the future.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-950/60">
              SpatioAgri was founded in 2019 by a team of agronomists and distributed-systems engineers who believed
              commercial agriculture deserved the same operational tooling as modern logistics and finance. Today we
              power farms across six continents — from family-owned greenhouses to vertically integrated
              multinationals.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-forest-950/[0.06] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="bg-white p-6">
                <s.icon className="h-5 w-5 text-emerald-deep" />
                <div className="mt-3 text-3xl font-bold tracking-tight text-forest-950">{s.v}</div>
                <div className="mt-1 text-sm text-forest-950/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* mission + values */}
      <section ref={ref} className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className={`lg:col-span-5 transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <Target className="h-7 w-7 text-emerald-deep" />
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-forest-950/65">
                To give every commercial grower the same operational intelligence as the world's most advanced
                technology companies — so they can grow more, waste less, and stay profitable in an unpredictable
                climate.
              </p>
              <p className="mt-4 text-base leading-relaxed text-forest-950/55">
                We measure success not in ARR, but in hectares optimized, inputs saved, and yields improved. When our
                customers grow, the world eats better.
              </p>
            </div>

            <div className={`lg:col-span-7 transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '120ms' }}>
              <div className="grid gap-px overflow-hidden rounded-3xl bg-forest-950/[0.06] sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title} className="bg-white p-7">
                    <h3 className="text-lg font-bold tracking-tight text-forest-950">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-950/55">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA band */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-forest-950 p-8 text-white sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Want to see SpatioAgri on your farm?</h3>
                <p className="mt-2 max-w-lg text-white/60">
                  Book a 30-minute walkthrough with a solutions agronomist. We'll map your operation live.
                </p>
              </div>
              <button
                onClick={() => onNavigate('demo')}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow-soft transition-all hover:bg-emerald-deep hover:shadow-glow active:scale-[0.98]"
              >
                Request Enterprise Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
