import { useState } from 'react';
import { Lock, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

type ProductTab = 'all' | 'fertilizer' | 'plantation';

export function ProductsPage({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState<ProductTab>('all');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const { ref, shown } = useReveal();

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
          <p className="mt-4 text-sm sm:text-base text-forest-950/70 max-w-2xl mx-auto leading-relaxed">
            Engineered specifically for commercial agriculture — precision drone spray nutrition and comprehensive cadastral estate GIS management.
          </p>

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

        {/* ================= PRODUCT 1: FERTILIZER MANAGER ================= */}
        {(activeTab === 'all' || activeTab === 'fertilizer') && (
          <div className="mt-16 sm:mt-24 pt-14 border-t border-forest-950/[0.08]">
            {/* Header info */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
                Product 01 · Drone Spraying &amp; Nutrition
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl leading-tight">
                Fertilizer Manager
              </h2>
            </div>

            {/* Compact Browser Window Showcase (Small & Displays 100% of Image) */}
            <div className="mt-8 max-w-3xl mx-auto overflow-hidden rounded-[20px] sm:rounded-[24px] border border-forest-950/15 bg-forest-950 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5">
              {/* Window Header Chrome Bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-2 sm:py-2.5 bg-[#0b251a] border-b border-white/10 select-none">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>

                {/* Centered Address Bar Pill */}
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3.5 py-1 text-[11px] font-mono text-emerald-accent border border-white/10 max-w-[240px] sm:max-w-sm truncate shadow-inner">
                  <Lock className="h-3 w-3 text-emerald-accent shrink-0" />
                  <span className="truncate">https://agri.spatiosds.com/app/fertilizer-manager</span>
                </div>

                {/* Live App Indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-accent shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  <span className="hidden sm:inline">Live App</span>
                </div>
              </div>

              {/* Complete Uncropped Screenshot Image */}
              <div
                onClick={() => setZoomedImage('/images/products/fertilizer_manager_hires.png')}
                className="relative aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-forest-950 group"
                title="Click to view full size"
              >
                <img
                  src="/images/products/fertilizer_manager_hires.png"
                  alt="Fertilizer Manager - Precision Drone Spraying"
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Inline Key Metrics (Compact max-w-3xl) */}
            <div className="mt-6 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="rounded-2xl border border-forest-950/[0.08] bg-cream/30 p-4 text-center">
                <span className="text-2xl font-extrabold text-forest-950">32%</span>
                <h4 className="mt-1 text-xs font-bold text-forest-950">Input Cost Reduction</h4>
                <p className="text-[11px] text-forest-950/60 mt-0.5">Targeted variable-rate prescription zones</p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-cream/30 p-4 text-center">
                <span className="text-2xl font-extrabold text-forest-950">100%</span>
                <h4 className="mt-1 text-xs font-bold text-forest-950">DJI Agras Integration</h4>
                <p className="text-[11px] text-forest-950/60 mt-0.5">Direct mission flight plan export</p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-cream/30 p-4 text-center">
                <span className="text-2xl font-extrabold text-forest-950">15 min</span>
                <h4 className="mt-1 text-xs font-bold text-forest-950">Prescription Turnaround</h4>
                <p className="text-[11px] text-forest-950/60 mt-0.5">From drone scan to spray mission</p>
              </div>
            </div>

            {/* Core Feature Highlights */}
            <div className="mt-5 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-forest-950/[0.08] bg-white p-5 shadow-sm transition-all hover:border-emerald-deep/40 hover:-translate-y-0.5">
                <span className="font-mono text-xs font-bold text-emerald-deep">01</span>
                <h3 className="mt-1.5 text-sm font-bold text-forest-950">
                  Variable-Rate Nutrition (VRA)
                </h3>
                <p className="mt-1 text-xs text-forest-950/60 leading-relaxed">
                  Computes precise N-P-K nutrient dosage zones based on multispectral vegetation indices (NDVI/NDRE), matching exact tree canopy requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-white p-5 shadow-sm transition-all hover:border-emerald-deep/40 hover:-translate-y-0.5">
                <span className="font-mono text-xs font-bold text-emerald-deep">02</span>
                <h3 className="mt-1.5 text-sm font-bold text-forest-950">
                  Automated 3D Flight Plans
                </h3>
                <p className="mt-1 text-xs text-forest-950/60 leading-relaxed">
                  Generates centimetre-accurate 3D terrain-following flight lines, obstacle buffers, and turnarounds ready for pilot upload.
                </p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-white p-5 shadow-sm transition-all hover:border-emerald-deep/40 hover:-translate-y-0.5">
                <span className="font-mono text-xs font-bold text-emerald-deep">03</span>
                <h3 className="mt-1.5 text-sm font-bold text-forest-950">
                  Canopy Health Telemetry
                </h3>
                <p className="mt-1 text-xs text-forest-950/60 leading-relaxed">
                  Identifies micro-nutrient deficiencies, moisture stress, and early pest activity before visual canopy symptoms appear in the field.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= PRODUCT 2: PLANTATION MANAGEMENT ================= */}
        {(activeTab === 'all' || activeTab === 'plantation') && (
          <div className="mt-20 sm:mt-28 pt-16 border-t border-forest-950/[0.08]">
            {/* Header info */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
                Product 02 · Cadastral GIS &amp; Estate ERP
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl leading-tight">
                Plantation Management
              </h2>
            </div>

            {/* Compact Browser Window Showcase (Small & Displays 100% of Image) */}
            <div className="mt-8 max-w-3xl mx-auto overflow-hidden rounded-[20px] sm:rounded-[24px] border border-forest-950/15 bg-forest-950 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5">
              {/* Window Header Chrome Bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-2 sm:py-2.5 bg-[#0b251a] border-b border-white/10 select-none">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>

                {/* Centered Address Bar Pill */}
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3.5 py-1 text-[11px] font-mono text-emerald-accent border border-white/10 max-w-[240px] sm:max-w-sm truncate shadow-inner">
                  <Lock className="h-3 w-3 text-emerald-accent shrink-0" />
                  <span className="truncate">https://agri.spatiosds.com/app/weddamulla-estate</span>
                </div>

                {/* Live App Indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-accent shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  <span className="hidden sm:inline">Live App</span>
                </div>
              </div>

              {/* Complete Uncropped Screenshot Image */}
              <div
                onClick={() => setZoomedImage('/images/products/plantation_management_hires.png')}
                className="relative aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-forest-950 group"
                title="Click to view full size"
              >
                <img
                  src="/images/products/plantation_management_hires.png"
                  alt="Plantation Management - Weddamulla Estate GIS Dashboard"
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Inline Key Metrics (Compact max-w-3xl) */}
            <div className="mt-6 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="rounded-2xl border border-forest-950/[0.08] bg-cream/30 p-4 text-center">
                <span className="text-2xl font-extrabold text-forest-950">24,500+</span>
                <h4 className="mt-1 text-xs font-bold text-forest-950">Mapped Palms &amp; Trees</h4>
                <p className="text-[11px] text-forest-950/60 mt-0.5">Cadastral tree census &amp; boundaries</p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-cream/30 p-4 text-center">
                <span className="text-2xl font-extrabold text-forest-950">4 Divisions</span>
                <h4 className="mt-1 text-xs font-bold text-forest-950">Weddamulla Estate Grid</h4>
                <p className="text-[11px] text-forest-950/60 mt-0.5">Synchronized field operations</p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-cream/30 p-4 text-center">
                <span className="text-2xl font-extrabold text-forest-950">100%</span>
                <h4 className="mt-1 text-xs font-bold text-forest-950">Field Traceability</h4>
                <p className="text-[11px] text-forest-950/60 mt-0.5">From tree harvest to mill processing</p>
              </div>
            </div>

            {/* Core Feature Highlights */}
            <div className="mt-5 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-forest-950/[0.08] bg-white p-5 shadow-sm transition-all hover:border-emerald-deep/40 hover:-translate-y-0.5">
                <span className="font-mono text-xs font-bold text-emerald-deep">01</span>
                <h3 className="mt-1.5 text-sm font-bold text-forest-950">
                  Cadastral GIS Layers
                </h3>
                <p className="mt-1 text-xs text-forest-950/60 leading-relaxed">
                  Interactive GIS layers for infrastructure, roads, stream hydrology, division perimeters, and agricultural field blocks with geo-coordinate inspection.
                </p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-white p-5 shadow-sm transition-all hover:border-emerald-deep/40 hover:-translate-y-0.5">
                <span className="font-mono text-xs font-bold text-emerald-deep">02</span>
                <h3 className="mt-1.5 text-sm font-bold text-forest-950">
                  Workforce &amp; Supervision
                </h3>
                <p className="mt-1 text-xs text-forest-950/60 leading-relaxed">
                  Assign supervisors, female harvesters, and sundry field crews with direct field-level attendance and piece-rate harvest accounting.
                </p>
              </div>

              <div className="rounded-2xl border border-forest-950/[0.08] bg-white p-5 shadow-sm transition-all hover:border-emerald-deep/40 hover:-translate-y-0.5">
                <span className="font-mono text-xs font-bold text-emerald-deep">03</span>
                <h3 className="mt-1.5 text-sm font-bold text-forest-950">
                  Agronomy &amp; Field Stand
                </h3>
                <p className="mt-1 text-xs text-forest-950/60 leading-relaxed">
                  Detailed block records for planting type, cultivar clones, planting year, stand density, and historical yield batches.
                </p>
              </div>
            </div>
          </div>
        )}
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
