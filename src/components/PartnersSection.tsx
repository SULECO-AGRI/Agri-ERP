import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Building2, GraduationCap, Cpu, Layers } from 'lucide-react';

export interface Partner {
  name: string;
  category: 'tech' | 'academic' | 'gov';
  categoryLabel: string;
  logo: string;
  subLogoText?: string;
  description: string;
}

export const partners: Partner[] = [
  // Technology & Hardware Suppliers
  {
    name: 'DJI Agriculture',
    category: 'tech',
    categoryLabel: 'Aerial & Spraying Drones',
    logo: '/images/partners/x3.jpg',
    subLogoText: 'Agriculture',
    description: 'Precision agricultural spraying, multi-spectral imaging & crop telemetry.',
  },
  {
    name: 'DJI Enterprise',
    category: 'tech',
    categoryLabel: 'Industrial UAV & LiDAR',
    logo: '/images/partners/x3.jpg',
    subLogoText: 'Enterprise',
    description: 'Thermal imaging, LiDAR mapping, and large-scale estate aerial surveillance.',
  },
  {
    name: 'Stonex',
    category: 'tech',
    categoryLabel: 'GNSS & Precision Positioning',
    logo: '/images/partners/x6.jpg',
    description: 'High-precision RTK GNSS receivers, machine guidance, and survey field units.',
  },
  {
    name: 'Hexagon',
    category: 'tech',
    categoryLabel: 'Geospatial & Reality Capture',
    logo: '/images/partners/x7.jpg',
    description: 'Global leader in reality capture, sensor technology, and geospatial systems.',
  },
  {
    name: 'Leica Geosystems',
    category: 'tech',
    categoryLabel: 'High-Precision Surveying',
    logo: '/images/partners/x1.jpg',
    description: 'Total stations, 3D laser scanners, and optical measurement infrastructure.',
  },
  {
    name: 'Topcon Positioning',
    category: 'tech',
    categoryLabel: 'Machine Control & GIS',
    logo: '/images/partners/x2.jpg',
    description: 'Smart infrastructure, machine automation, and spatial positioning technology.',
  },
  {
    name: 'Carlson Software',
    category: 'tech',
    categoryLabel: 'Agronomy & Field CAD',
    logo: '/images/partners/x8.jpg',
    description: 'Cadastral surveying software, GIS data modeling, and terrain mapping suites.',
  },
  {
    name: 'CONTROLS Group',
    category: 'tech',
    categoryLabel: 'Material & Soil Testing',
    logo: '/images/partners/x4.jpg',
    description: 'Soil, aggregate, and environmental testing instrumentation for agricultural estates.',
  },

  // Academic Collaborations (Universities)
  {
    name: 'University of Peradeniya',
    category: 'academic',
    categoryLabel: 'Faculty of Agriculture',
    logo: '/images/partners/10-3.webp',
    description: 'Agronomic research partnership, soil fertility studies, and palm health analysis.',
  },
  {
    name: 'University of Moratuwa',
    category: 'academic',
    categoryLabel: 'Faculty of Engineering',
    logo: '/images/partners/02-5.webp',
    description: 'Remote sensing innovation, geospatial algorithm validation, and IoT telemetry.',
  },
  {
    name: 'UCSC Colombo',
    category: 'academic',
    categoryLabel: 'School of Computing',
    logo: '/images/partners/09-3.webp',
    description: 'Advanced data models, predictive yield analytics, and machine learning pipelines.',
  },
  {
    name: 'Sabaragamuwa University',
    category: 'academic',
    categoryLabel: 'Faculty of Geomatics',
    logo: '/images/partners/08-4.webp',
    description: 'Cadastral mapping, surveying education, and drone photogrammetry projects.',
  },
  {
    name: 'KDU Defence University',
    category: 'academic',
    categoryLabel: 'Engineering & Spatial Sciences',
    logo: '/images/partners/05-3.webp',
    description: 'Geospatial sciences collaboration, technical training, and remote telemetry.',
  },
  {
    name: 'University of Ruhuna',
    category: 'academic',
    categoryLabel: 'Faculty of Agriculture',
    logo: '/images/partners/06-3.webp',
    description: 'Southern plantation trials, coconut crop modeling, and soil moisture research.',
  },
  {
    name: 'University of Jaffna',
    category: 'academic',
    categoryLabel: 'Agricultural Science',
    logo: '/images/partners/04-3.webp',
    description: 'Dry zone agriculture research, drought resistance monitoring, and palm density.',
  },
  {
    name: 'University of Vavuniya',
    category: 'academic',
    categoryLabel: 'Applied Sciences',
    logo: '/images/partners/01-6.webp',
    description: 'Regional agronomy data sharing, soil condition baselines, and student fellowships.',
  },

  // Government & Agricultural Institutions
  {
    name: 'Ministry of Agriculture',
    category: 'gov',
    categoryLabel: 'Department of Agriculture',
    logo: '/images/partners/07-2.webp',
    description: 'National agricultural modernization, pest advisories, and harvest standardisation.',
  },
  {
    name: 'Survey Department of Sri Lanka',
    category: 'gov',
    categoryLabel: 'National Cadastral Authority',
    logo: '/images/partners/01-4.webp',
    description: 'National cadastral boundary compliance, geodetic control networks, and GIS mapping.',
  },
  {
    name: 'Civil Aviation Authority',
    category: 'gov',
    categoryLabel: 'UAV Regulatory Partner',
    logo: '/images/partners/04-2.webp',
    description: 'Commercial agricultural drone flight operations and airspace compliance.',
  },
  {
    name: 'Access Engineering',
    category: 'gov',
    categoryLabel: 'Infrastructure & Irrigation',
    logo: '/images/partners/09-2.webp',
    description: 'Commercial infrastructure, drainage networks, and large-scale earthworks.',
  },
];

type CategoryFilter = 'all' | 'tech' | 'academic' | 'gov';

export function PartnersSection() {
  const { ref, shown } = useReveal();
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredPartners = filter === 'all' 
    ? partners 
    : partners.filter((p) => p.category === filter);

  // Duplicated list for infinite ticker
  const tickerLogos = [...partners, ...partners];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream py-24 sm:py-32 border-b border-forest-950/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            Valued Partners &amp; Ecosystem
          </span>
          <h2
            className={`mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08] transition-all duration-700 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Powered by leading global brands, <br className="hidden sm:inline" />
            <span className="shimmer-text">universities &amp; national ministries.</span>
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed text-forest-950/65 transition-all duration-700 delay-100 ${
              shown ? 'opacity-100' : 'opacity-0'
            }`}
          >
            In partnership with Suleco Ltd's extensive network across Sri Lanka and internationally.
          </p>
        </div>

        {/* Dynamic Infinite Marquee Ribbon */}
        <div
          className={`mt-12 overflow-hidden marquee-mask relative w-full transition-all duration-1000 delay-150 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="animate-marquee flex items-center gap-10 py-3">
            {tickerLogos.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center gap-3 shrink-0 rounded-2xl bg-white/70 px-5 py-2.5 border border-forest-950/[0.06] shadow-sm select-none"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 max-w-[90px] object-contain"
                  loading="lazy"
                />
                <span className="text-xs font-bold text-forest-950/80 tracking-tight whitespace-nowrap">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-forest-950 text-white shadow-sm scale-105'
                : 'bg-white text-forest-950/70 border border-forest-950/10 hover:border-forest-950/25 hover:text-forest-950'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            All Partners ({partners.length})
          </button>

          <button
            onClick={() => setFilter('tech')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
              filter === 'tech'
                ? 'bg-forest-950 text-white shadow-sm scale-105'
                : 'bg-white text-forest-950/70 border border-forest-950/10 hover:border-forest-950/25 hover:text-forest-950'
            }`}
          >
            <Cpu className="h-3.5 w-3.5" />
            Technology &amp; Equipment (8)
          </button>

          <button
            onClick={() => setFilter('academic')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
              filter === 'academic'
                ? 'bg-forest-950 text-white shadow-sm scale-105'
                : 'bg-white text-forest-950/70 border border-forest-950/10 hover:border-forest-950/25 hover:text-forest-950'
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Academic Collaborations (8)
          </button>

          <button
            onClick={() => setFilter('gov')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
              filter === 'gov'
                ? 'bg-forest-950 text-white shadow-sm scale-105'
                : 'bg-white text-forest-950/70 border border-forest-950/10 hover:border-forest-950/25 hover:text-forest-950'
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            Ministries &amp; Institutions (4)
          </button>
        </div>

        {/* Real Logos Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPartners.map((p, idx) => (
            <div
              key={p.name}
              className={`group relative flex flex-col justify-between rounded-3xl border border-forest-950/[0.08] bg-white p-6 shadow-sm cursor-pointer transition-all duration-500 hover:border-emerald-accent/40 hover:shadow-glow-soft hover:-translate-y-1 ${
                shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(idx % 8) * 50}ms` }}
            >
              <div>
                {/* Logo Canvas */}
                <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-cream/50 p-3 ring-1 ring-forest-950/[0.04] transition-all duration-300 group-hover:bg-cream">
                  <div className="flex items-center gap-2">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-12 max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {p.subLogoText && (
                      <span className="font-bold tracking-tight text-forest-950 text-xs uppercase px-1.5 py-0.5 rounded bg-forest-950/5">
                        {p.subLogoText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Partner Name & Category Tag */}
                <div className="mt-4">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-deep">
                    {p.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold text-forest-950 group-hover:text-emerald-deep transition-colors mt-0.5">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-forest-950/60 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-forest-950/[0.05] flex items-center justify-between text-[11px] font-medium text-forest-950/40">
                <span>Verified Partner</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
              </div>
            </div>
          ))}
        </div>

        {/* Source attribution link to Suleco Ltd */}
        <div className="mt-12 text-center">
          <a
            href="https://sulecoltd.com/partners/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-deep hover:text-forest-950 transition-colors"
          >
            Learn more about Suleco Ltd's partners &amp; global alliances →
          </a>
        </div>
      </div>
    </section>
  );
}

// Re-export as TrustBar for backwards compatibility
export { PartnersSection as TrustBar };
