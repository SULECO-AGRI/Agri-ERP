import { Check, ArrowUpRight, Sparkles, Building2, Phone, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

const tiers = [
  {
    name: 'Estate Growth',
    tagline: 'For single commercial plantations digitizing subdivision maps & harvest logs.',
    price: '$890',
    period: '/mo',
    cta: 'Start with Estate Growth',
    highlighted: false,
    features: [
      'Up to 500 hectares / acres tracked',
      'GIS subdivision mapping (up to 15 blocks)',
      'Harvest quantity & batch records',
      'Basic copra & processing logs',
      'Workforce & piece-rate labor records',
      '5 user seats + mobile field login',
      'Email & phone support (8×5)',
      'Monthly audit-ready data exports',
    ],
    excluded: ['Drone orthomosaic overlays', 'Multi-mill oil extraction tracking', 'Custom API integration'],
  },
  {
    name: 'Pro Plantation',
    tagline: 'The complete GIS & processing platform for medium-to-large agribusiness estates.',
    price: '$2,400',
    period: '/mo',
    cta: 'Schedule Plantation Demo',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Up to 10,000 hectares · multi-subdivision',
      'Precision GIS mapping + tree density counts',
      'Full harvest tracking & yield forecasting',
      'Copra, coconut oil, husk & shell processing logs',
      'Sales contract tracking & dispatch manifests',
      'Farm manager oversight & employee accountability',
      'Weather station telemetry & market price alerts',
      'Unlimited user seats + role-based permissions',
      'Priority hotline support (24×7) + dedicated coordinator',
      'Open API + ERP data warehouse sync',
      '99.99% uptime SLA',
    ],
    excluded: [],
  },
  {
    name: 'Enterprise Agribusiness',
    tagline: 'Custom spatial architecture for vertically integrated global plantation groups.',
    price: 'Custom',
    period: '',
    cta: 'Talk to SDS Coordinators',
    highlighted: false,
    features: [
      'Unlimited hectares, estates & mills',
      'Dedicated SDS geospatial engineering cluster',
      'Custom spatial analytics & drone photogrammetry',
      'Private cloud / on-premise deployment option',
      'White-label management dashboards',
      'Custom ERP, commodity futures & weighbridge integrations',
      'Dedicated geospatial solutions architect',
      '15-minute SLA on-call emergency support',
      'Annual cadastral & security compliance audits',
      'Custom data sovereignty & regional cloud residency',
      'Executive board performance reviews',
      'Custom enterprise MSA',
    ],
    excluded: [],
  },
];

export function PricingPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-accent/[0.08] blur-3xl" />
        <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">
              Spatio Agri · Transparent Plans
            </span>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest text-forest-950 sm:text-6xl">
              Pricing that scales with{' '}
              <span className="shimmer-text">your acreage &amp; mills.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-forest-950/60">
              Clear plantation pricing. No hidden fees for trees or harvest batches. Switch or scale tiers anytime.
            </p>
          </div>
        </div>
      </section>

      {/* tiers grid */}
      <section ref={ref} className="relative pb-24 pt-14 sm:pt-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-3xl p-7 transition-all duration-700 ${
                  t.highlighted
                    ? 'bg-forest-950 text-white shadow-glow ring-1 ring-emerald-accent/40 lg:-translate-y-4'
                    : 'border border-forest-950/[0.07] bg-white text-forest-950 hover:border-forest-950/15'
                } ${shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {t.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-accent px-3.5 py-1.5 text-xs font-bold text-white shadow-glow-soft ring-1 ring-white/20">
                      <Sparkles className="h-3.5 w-3.5" />
                      {t.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-bold tracking-tight ${t.highlighted ? 'text-white' : 'text-forest-950'}`}>
                    {t.name}
                  </h3>
                  {t.name === 'Enterprise Agribusiness' && (
                    <Building2 className={`h-5 w-5 ${t.highlighted ? 'text-emerald-accent' : 'text-forest-950/40'}`} />
                  )}
                </div>
                <p className={`mt-2 min-h-[40px] text-sm leading-relaxed ${t.highlighted ? 'text-white/60' : 'text-forest-950/55'}`}>
                  {t.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold tracking-tightest ${t.highlighted ? 'text-white' : 'text-forest-950'}`}>
                    {t.price}
                  </span>
                  <span className={`text-sm ${t.highlighted ? 'text-white/50' : 'text-forest-950/50'}`}>{t.period}</span>
                </div>
                <p className={`mt-1 font-mono text-[11px] ${t.highlighted ? 'text-white/40' : 'text-forest-950/40'}`}>
                  {t.highlighted ? 'billed annually' : t.price === 'Custom' ? 'tailored enterprise contract' : 'billed annually'}
                </p>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                    t.highlighted
                      ? 'bg-emerald-accent text-white shadow-glow-soft hover:bg-emerald-deep hover:shadow-glow'
                      : 'bg-forest-950 text-white hover:bg-forest-900'
                  }`}
                >
                  {t.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <div className={`mt-7 border-t pt-6 ${t.highlighted ? 'border-white/10' : 'border-forest-950/[0.06]'}`}>
                  <span className={`font-mono text-[10px] uppercase tracking-widest ${t.highlighted ? 'text-white/40' : 'text-forest-950/40'}`}>
                    What's included
                  </span>
                  <ul className="mt-4 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            t.highlighted ? 'bg-emerald-accent/20 text-emerald-accent ring-1 ring-inset ring-emerald-accent/30' : 'bg-emerald-accent/15 text-emerald-deep ring-1 ring-inset ring-emerald-accent/20'
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={`text-sm leading-relaxed ${t.highlighted ? 'text-white/75' : 'text-forest-950/75'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                    {t.excluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 opacity-40">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${t.highlighted ? 'bg-white/5 text-white/30' : 'bg-forest-950/[0.04] text-forest-950/30'}`}>
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={`text-sm leading-relaxed line-through ${t.highlighted ? 'text-white/40' : 'text-forest-950/40'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* feature matrix */}
          <div className={`mt-16 overflow-hidden rounded-3xl border border-forest-950/[0.07] transition-all duration-700 ${shown ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="border-b border-forest-950/[0.06] bg-cream px-6 py-4">
              <h3 className="text-sm font-bold tracking-tight text-forest-950">Full capability comparison</h3>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-forest-950/[0.06] text-left">
                    <th className="px-6 py-4 font-semibold text-forest-950/50">Capability</th>
                    <th className="px-6 py-4 text-center font-semibold text-forest-950/70">Estate Growth</th>
                    <th className="bg-forest-950/[0.03] px-6 py-4 text-center font-semibold text-emerald-deep">Pro Plantation</th>
                    <th className="px-6 py-4 text-center font-semibold text-forest-950/70">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-950/[0.05]">
                  {[
                    ['Acreage / Hectare coverage', 'Up to 500 ha', 'Up to 10,000 ha', 'Unlimited'],
                    ['GIS subdivision mapping', '15 blocks', 'Unlimited blocks', 'Unlimited + drone orthos'],
                    ['Harvest records & batch logging', 'Standard', 'Advanced + yield AI', 'Custom models'],
                    ['Processing (Copra, Oil, Husk, Shell)', 'Basic copra', 'Full multi-mill', 'Full + custom IoT scales'],
                    ['Sales tracking & dispatch manifests', 'Basic', 'Full buyer integration', 'Full + EDI / API'],
                    ['Workforce oversight & piece-rate', 'Basic logs', 'Included', 'Included + biometric/RFID'],
                    ['Weather & market price feeds', 'Daily index', 'Live telemetry', 'Custom station sync'],
                    ['User access & audit-ready reports', '5 seats', 'Unlimited RBAC', 'Unlimited + custom audits'],
                    ['Support coverage', '8×5', '24×7 Hotline', '24×7 + 15-min SLA'],
                    ['Deployment options', 'Cloud SaaS', 'Cloud SaaS', 'SaaS / Private / On-prem'],
                  ].map((row, ri) => (
                    <tr key={ri} className="transition-colors hover:bg-cream/60">
                      <td className="px-6 py-3.5 font-medium text-forest-950/80">{row[0]}</td>
                      <td className="px-6 py-3.5 text-center text-forest-950/60">{row[1]}</td>
                      <td className="bg-forest-950/[0.03] px-6 py-3.5 text-center font-semibold text-emerald-deep">{row[2]}</td>
                      <td className="px-6 py-3.5 text-center text-forest-950/60">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick hotline note */}
          <div className="mt-12 text-center text-xs text-forest-950/60 flex items-center justify-center gap-4">
            <span>Questions on custom estate sizing?</span>
            <a href="tel:0773301274" className="inline-flex items-center gap-1 font-bold text-forest-950 hover:text-emerald-deep">
              <Phone className="h-3.5 w-3.5 text-emerald-deep" /> Call: 077 330 1274
            </a>
            <span>·</span>
            <a href="https://www.spatiosds.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-emerald-deep hover:underline">
              <Globe className="h-3.5 w-3.5" /> www.spatiosds.com
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
