import { Target, ArrowUpRight, CheckCircle2, Phone, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

export function AboutPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();
  
  const values = [
    { 
      title: 'Built on GIS, remote sensing, and smart agriculture expertise', 
      desc: 'We combine remote sensing satellite data, drone photogrammetry, and smart agronomic telemetry into practical plantation workflows.' 
    },
    { 
      title: 'Precision plantation mapping and spatial analytics capability', 
      desc: 'Every block, tree boundary, and water channel is mapped to sub-meter cadastral GIS precision for exact tree-by-tree tracking.' 
    },
    { 
      title: 'Modular and scalable architecture for future-ready deployment', 
      desc: 'Adopt harvest logging and GIS today, then expand into copra/oil processing mills, workforce accounting, and IoT sensors on your schedule.' 
    },
    { 
      title: 'Delivered by a geospatial technology team focused on real operational outcomes', 
      desc: 'Our deployment team works directly in the field with estate managers, supervisors, and agronomists to ensure tangible cost reduction and yield improvements.' 
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-8 sm:pt-40 sm:pb-12">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-60" />
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-emerald-accent/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-deep">
              About Spatio / SDS
            </span>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest text-forest-950 sm:text-6xl">
              Precision geospatial intelligence for <span className="shimmer-text">modern plantations.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* mission + values */}
      <section ref={ref} className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className={`lg:col-span-5 transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <Target className="h-7 w-7 text-emerald-deep" />
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-forest-950/65">
                To turn commercial estates and agricultural plantations into smart, accessible, and highly efficient operations by bridging the gap between spatial science and everyday farm management.
              </p>
              <p className="mt-4 text-base leading-relaxed text-forest-950/55">
                We measure our success by the labor waste eliminated, tree yield improved, and processing efficiency unlocked across every subdivision.
              </p>

              <div className="mt-8 rounded-2xl bg-cream p-5 border border-forest-950/10 space-y-2">
                <span className="font-mono text-xs font-bold text-forest-950 uppercase tracking-wider block">Direct Contact Channels</span>
                <div className="flex flex-col gap-1.5 text-sm">
                  <a href="tel:0773301274" className="inline-flex items-center gap-2 font-bold text-forest-950 hover:text-emerald-deep">
                    <Phone className="h-4 w-4 text-emerald-deep" /> 077 330 1274
                  </a>
                  <a href="https://www.spatiosds.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-deep hover:underline">
                    <Globe className="h-4 w-4" /> www.spatiosds.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '120ms' }}>
              <div className="grid gap-4">
                {values.map((v) => (
                  <div key={v.title} className="rounded-3xl border border-forest-950/[0.07] bg-white p-6 shadow-sm hover:border-emerald-accent/40 transition-colors">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-accent/15 text-emerald-deep">
                        <CheckCircle2 className="h-4 w-4 text-emerald-deep" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-tight text-forest-950">{v.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-forest-950/60">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA band */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-forest-950 p-8 text-white sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Want to see Spatio Agri on your plantation?</h3>
                <p className="mt-2 max-w-lg text-white/60">
                  Book a walkthrough with an SDS geospatial coordinator. We'll map your plantation live.
                </p>
              </div>
              <button
                onClick={() => onNavigate('demo')}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow-soft transition-all hover:bg-emerald-deep hover:shadow-glow active:scale-[0.98]"
              >
                Schedule Plantation Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
