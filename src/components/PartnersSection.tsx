import { useReveal } from '../hooks/useReveal';

export interface Partner {
  name: string;
  categoryBadge: 'Technology & Equipment' | 'Academic Collaboration' | 'Ministry & Institute';
  badgeColor: string;
  logo: string;
  subLogoText?: string;
}

// 1. Technology & Equipment Partners
const techPartners: Partner[] = [
  {
    name: 'DJI Agriculture',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x3.jpg',
    subLogoText: 'Agriculture',
  },
  {
    name: 'DJI Enterprise',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x3.jpg',
    subLogoText: 'Enterprise',
  },
  {
    name: 'Stonex',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x6.jpg',
  },
  {
    name: 'Hexagon',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x7.jpg',
  },
  {
    name: 'Leica Geosystems',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x1.jpg',
  },
  {
    name: 'Topcon Positioning',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x2.jpg',
  },
  {
    name: 'Carlson Software',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x8.jpg',
  },
  {
    name: 'CONTROLS Group',
    categoryBadge: 'Technology & Equipment',
    badgeColor: 'text-blue-600',
    logo: '/images/partners/x4.jpg',
  },
];

// 2. Ministries & National Institutes
const govPartners: Partner[] = [
  {
    name: 'Ministry of Agriculture',
    categoryBadge: 'Ministry & Institute',
    badgeColor: 'text-emerald-700',
    logo: '/images/partners/07-2.webp',
  },
  {
    name: 'Survey Department of Sri Lanka',
    categoryBadge: 'Ministry & Institute',
    badgeColor: 'text-emerald-700',
    logo: '/images/partners/01-4.webp',
  },
  {
    name: 'Civil Aviation Authority',
    categoryBadge: 'Ministry & Institute',
    badgeColor: 'text-emerald-700',
    logo: '/images/partners/04-2.webp',
  },
  {
    name: 'Access Engineering',
    categoryBadge: 'Ministry & Institute',
    badgeColor: 'text-emerald-700',
    logo: '/images/partners/09-2.webp',
  },
];

// 3. Academic Collaborations (Universities)
const academicPartners: Partner[] = [
  {
    name: 'University of Peradeniya',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/10-3.webp',
  },
  {
    name: 'University of Moratuwa',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/02-5.webp',
  },
  {
    name: 'UCSC Colombo',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/09-3.webp',
  },
  {
    name: 'Sabaragamuwa University',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/08-4.webp',
  },
  {
    name: 'KDU Defence University',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/05-3.webp',
  },
  {
    name: 'University of Ruhuna',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/06-3.webp',
  },
  {
    name: 'University of Jaffna',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/04-3.webp',
  },
  {
    name: 'University of Vavuniya',
    categoryBadge: 'Academic Collaboration',
    badgeColor: 'text-purple-700',
    logo: '/images/partners/01-6.webp',
  },
];

// Row 1: Technology & Equipment + Ministries & Institutes
const row1 = [...techPartners, ...govPartners];
const row1Ticker = [...row1, ...row1];

// Row 2: Academic Collaborations (Universities)
const row2Ticker = [...academicPartners, ...academicPartners];

export function PartnersSection() {
  const { ref, shown } = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-forest-950/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            Valued Partners &amp; Ecosystem
          </span>
          <h2
            className={`mt-3 text-3xl font-bold tracking-tightest text-forest-950 sm:text-4xl leading-[1.1] transition-all duration-700 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Powered by leading global brands, <br className="hidden sm:inline" />
            <span className="shimmer-text">universities &amp; national ministries.</span>
          </h2>
        </div>

        {/* Marquee Track 1: Technology & Equipment + Ministries & Institutes */}
        <div className="mt-12 overflow-hidden marquee-mask relative w-full">
          <div className="animate-marquee flex items-center py-2">
            {row1Ticker.map((p, i) => (
              <div
                key={`r1-${p.name}-${i}`}
                className="group flex items-center gap-3.5 shrink-0 rounded-2xl bg-white px-5 py-3 border border-forest-950/[0.08] shadow-sm hover:border-emerald-accent/40 hover:shadow-md transition-all select-none cursor-pointer"
              >
                <div className="flex h-9 w-16 items-center justify-center shrink-0">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-forest-950 tracking-tight whitespace-nowrap group-hover:text-emerald-deep transition-colors">
                      {p.name}
                    </span>
                    {p.subLogoText && (
                      <span className="rounded bg-forest-950/5 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase text-forest-950">
                        {p.subLogoText}
                      </span>
                    )}
                  </div>
                  <span
                    className={`mt-0.5 inline-block self-start text-[9px] font-semibold tracking-wider uppercase whitespace-nowrap ${p.badgeColor}`}
                  >
                    {p.categoryBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Track 2: Academic Collaborations (Universities) */}
        <div className="mt-4 overflow-hidden marquee-mask relative w-full">
          <div className="animate-marquee-reverse flex items-center py-2">
            {row2Ticker.map((p, i) => (
              <div
                key={`r2-${p.name}-${i}`}
                className="group flex items-center gap-3.5 shrink-0 rounded-2xl bg-white px-5 py-3 border border-forest-950/[0.08] shadow-sm hover:border-emerald-accent/40 hover:shadow-md transition-all select-none cursor-pointer"
              >
                <div className="flex h-9 w-12 items-center justify-center shrink-0">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-forest-950 tracking-tight whitespace-nowrap group-hover:text-emerald-deep transition-colors">
                    {p.name}
                  </span>
                  <span
                    className={`mt-0.5 inline-block self-start text-[9px] font-semibold tracking-wider uppercase whitespace-nowrap ${p.badgeColor}`}
                  >
                    {p.categoryBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Re-export as TrustBar for backwards compatibility
export { PartnersSection as TrustBar };
