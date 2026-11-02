import { useState } from 'react';
import { Lock, X, ExternalLink, Maximize2, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

type ProductTab = 'all' | 'fertilizer' | 'plantation';

interface ProductItem {
  id: 'fertilizer' | 'plantation';
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  displayUrl: string;
  image: string;
  stats: { value: string; label: string; sub: string }[];
  features: { title: string; desc: string }[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'fertilizer',
    number: '01',
    category: 'Aerial Spray & Nutrition',
    title: 'Fertilizer Manager',
    tagline: 'Prescription mapping & autonomous drone flight dispatch',
    description: 'Variable-rate fertilizer spray, cost effective.',
    liveUrl: 'https://spatio-agri-ferilizer-manager-kjrj.vercel.app/',
    displayUrl: 'https://spatio-agri-ferilizer-manager-kjrj.vercel.app/',
    image: '/images/products/fertilizer_manager_hires.png',
    stats: [
      { value: '32%', label: 'Input Cost Cut', sub: 'Variable-rate prescription zones' },
      { value: '100%', label: 'DJI Agras Sync', sub: 'Direct flight plan export' },
      { value: '15 min', label: 'Turnaround', sub: 'From scan to spray mission' },
    ],
    features: [
      {
        title: 'Variable-Rate Spraying',
        desc: 'Apply fertilizer only where needed to save costs.',
      },
      {
        title: 'Automated Drone Flight',
        desc: 'Ready-to-fly spray routes for agricultural drones.',
      },
      {
        title: 'Crop Health Detection',
        desc: 'Spot plant health and nutrient needs early.',
      },
    ],
  },
  {
    id: 'plantation',
    number: '02',
    category: 'Cadastral GIS & Estate ERP',
    title: 'Plantation Management',
    tagline: 'Cadastral farm mapping, tree census & field accounting',
    description: 'Manage every activity of a plantation.',
    liveUrl: 'https://plantation-management.vercel.app/',
    displayUrl: 'https://plantation-management.vercel.app/',
    image: '/images/products/plantation_management_hires.png',
    stats: [
      { value: '24,500+', label: 'Mapped Palms & Trees', sub: 'Cadastral tree census under GIS' },
      { value: '4 Divisions', label: 'Estate Subdivision Grid', sub: 'Synchronized field operations' },
      { value: '100%', label: 'Field Traceability', sub: 'From tree harvest to mill delivery' },
    ],
    features: [
      {
        title: 'Interactive Estate Map',
        desc: 'Clear digital map of all blocks, divisions, and roads.',
      },
      {
        title: 'Tree Census & Tracking',
        desc: 'Count and monitor every tree across your plantation.',
      },
      {
        title: 'Labor & Harvest Logs',
        desc: 'Simple daily worker attendance and crop harvest records.',
      },
    ],
  },
];

export function ProductsPage({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState<ProductTab>('all');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const { ref, shown } = useReveal();

  const visibleProducts = PRODUCTS.filter((p) => activeTab === 'all' || activeTab === p.id);

  return (
    <div ref={ref} className="bg-white min-h-screen pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ================= HERO HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            Spatio Agri Software Suite
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
            Two specialized engines. <br className="hidden sm:inline" />
            <span className="shimmer-text">One unified platform.</span>
          </h1>

          {/* Minimal Tab Filter */}
          <div className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-forest-950/10 bg-cream/60 p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-forest-950 text-white shadow-sm'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab('fertilizer')}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                activeTab === 'fertilizer'
                  ? 'bg-forest-950 text-white shadow-sm'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              Fertilizer Manager
            </button>
            <button
              onClick={() => setActiveTab('plantation')}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                activeTab === 'plantation'
                  ? 'bg-forest-950 text-white shadow-sm'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              Plantation Management
            </button>
          </div>
        </div>

        {/* ================= PRODUCTS SHOWCASE GRID ================= */}
        <div
          className={`mt-14 sm:mt-18 transition-all duration-700 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          } ${
            visibleProducts.length === 1
              ? 'max-w-2xl mx-auto'
              : 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch'
          }`}
        >
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-[28px] border border-forest-950/[0.08] bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(11,37,26,0.1)] hover:-translate-y-1"
            >
              <div>
                {/* Title & Description */}
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-forest-950">
                  {product.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  {product.description}
                </p>

                {/* Compact macOS Browser Showcase Frame */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-forest-950/15 bg-forest-950 shadow-md transition-all duration-300 group-hover:shadow-xl">
                  {/* Chrome Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-[#0b251a] border-b border-white/10 select-none">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                      <div className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                      <div className="h-2 w-2 rounded-full bg-[#27c93f]" />
                    </div>
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-0.5 text-[10px] font-mono text-emerald-accent border border-white/10 max-w-[190px] sm:max-w-xs truncate shadow-inner hover:bg-white/[0.15] hover:border-emerald-accent/40 transition-colors"
                      title="Open live demo in new tab"
                    >
                      <Lock className="h-2.5 w-2.5 text-emerald-accent shrink-0" />
                      <span className="truncate">{product.displayUrl}</span>
                    </a>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-white/40">
                      <span className="hidden sm:inline">1080p</span>
                    </div>
                  </div>

                  {/* Complete 16:9 Uncropped Screenshot */}
                  <div
                    onClick={() => setZoomedImage(product.image)}
                    className="relative aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-forest-950 group/img"
                    title="Click to view full size"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                    />
                    {/* Hover Zoom Hint Overlay */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-forest-950/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover/img:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-950/90 px-3.5 py-1.5 text-[11px] font-medium text-white shadow-lg border border-white/20">
                        <Maximize2 className="h-3 w-3 text-emerald-accent" />
                        Click to expand
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Row */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {product.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-forest-950/[0.06] bg-cream/40 p-2.5 text-center"
                    >
                      <div className="text-base sm:text-lg font-extrabold text-forest-950 leading-tight">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[10px] font-bold text-forest-950/80 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Feature Highlights */}
                <div className="mt-5 space-y-2 border-t border-forest-950/[0.06] pt-5">
                  {product.features.map((feat) => (
                    <div key={feat.title} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-deep mt-0.5" />
                      <p className="leading-relaxed text-forest-950/70">
                        <strong className="font-semibold text-forest-950">{feat.title}</strong> — {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-7 border-t border-forest-950/[0.06] pt-5">
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-950 px-4 py-3 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-deep hover:shadow-md active:scale-[0.98]"
                >
                  Open Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/85 p-4 sm:p-8 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-6xl w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-forest-950">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close zoomed view"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={zoomedImage}
              alt="Full resolution product view"
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
