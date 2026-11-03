import { useState } from 'react';
import { Sprout, Trees, Target, Sparkles, Layers, BarChart3, Leaf, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

type SolutionTab = 'plantation' | 'fertilizer' | 'harvest';

interface SolutionData {
  id: SolutionTab;
  tabLabel: string;
  heroImage: string;
  heroImageAlt: string;
  cardImage: string;
  cardTag: string;
  cardTitle: string;
  cardDesc: string;
  targetPage: Page;
  features: {
    icon: typeof Sprout;
    title: string;
    desc: string;
  }[];
}

const SOLUTIONS: Record<SolutionTab, SolutionData> = {
  plantation: {
    id: 'plantation',
    tabLabel: 'Plantation Management',
    heroImage: '/images/field_aerial.png',
    heroImageAlt: 'Plantation Cadastral GIS Field Mapping',
    cardImage: '/images/modules/gis_monitoring.jpg',
    cardTag: 'CADASTRAL GIS · TREE CENSUS · BOUNDARIES',
    cardTitle: 'Subdivision Mapping, Complete Visibility',
    cardDesc:
      'Map division boundaries, roads, stream hydrology, and every single palm or tree to sub-meter cadastral GIS precision for complete estate transparency.',
    targetPage: 'products',
    features: [
      {
        icon: Sprout,
        title: 'Cadastral Boundary Mapping',
        desc: 'Accurate polygon boundaries for divisions, blocks, and estate roads.',
      },
      {
        icon: Trees,
        title: 'Tree-by-Tree Census',
        desc: 'Track tree counts, cultivar clones, planting year, and stand health.',
      },
      {
        icon: BarChart3,
        title: 'Workforce & Supervision',
        desc: 'Assign supervisors, worker attendance, and piece-rate harvest accounting.',
      },
    ],
  },
  fertilizer: {
    id: 'fertilizer',
    tabLabel: 'Fertilizer Manager',
    heroImage: '/images/drone_spraying.png',
    heroImageAlt: 'Precision Drone Spraying and Variable Rate Nutrition',
    cardImage: '/images/drone_survey.png',
    cardTag: 'EFFICIENCY · PRECISION · GROWTH',
    cardTitle: 'Variable-Rate Spraying, Smarter Farming',
    cardDesc:
      'Our intelligent software helps plantation managers save fertilizer costs, generate variable-rate prescription maps, and dispatch autonomous DJI Agras spray drones.',
    targetPage: 'products',
    features: [
      {
        icon: Target,
        title: 'Variable-Rate Nutrition',
        desc: 'Computes exact tree-by-tree N-P-K nutrient dosage zones from multispectral scans.',
      },
      {
        icon: Sparkles,
        title: 'Automated 3D Flight Lines',
        desc: 'Terrain-following spray routes and obstacle buffers ready for drone pilots.',
      },
      {
        icon: BarChart3,
        title: 'Canopy Health Telemetry',
        desc: 'Detects micro-nutrient stress and pest vectors before visual canopy yellowing.',
      },
    ],
  },
  harvest: {
    id: 'harvest',
    tabLabel: 'Harvest & Processing ERP',
    heroImage: '/images/modules/harvest_records.jpg',
    heroImageAlt: 'Plantation Harvest Records and Mill Processing',
    cardImage: '/images/modules/processing_records.jpg',
    cardTag: 'HARVEST · EXTRACTION · DISPATCH',
    cardTitle: 'From Tree Harvest to Processing Mills',
    cardDesc:
      'Connect field nut and crop yields directly to copra drying kilns, virgin oil extraction mills, and wholesale dispatch manifests without manual tally sheets.',
    targetPage: 'solutions',
    features: [
      {
        icon: Layers,
        title: 'Block Yield Verification',
        desc: 'Verify nut and crop counts by subdivision zone and historical harvest batches.',
      },
      {
        icon: Sparkles,
        title: 'Processing Mill Output',
        desc: 'Record kiln drying weights, oil extraction yields, and byproduct manifests.',
      },
      {
        icon: BarChart3,
        title: 'Dispatch & Logistics',
        desc: 'Generate buyer dispatch manifests, transport slips, and wholesale revenue logs.',
      },
    ],
  },
};

export function AgriculturalServices({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();
  const [activeTab, setActiveTab] = useState<SolutionTab>('fertilizer');

  const current = SOLUTIONS[activeTab];

  return (
    <section ref={ref} className="relative bg-white py-20 sm:py-28 overflow-hidden border-b border-forest-950/[0.06]">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* ================= TOP SECTION: COPY & CURVED HERO IMAGE ================= */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-all duration-1000 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left Column: Heading, Subtitle & 3 Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8eae3] px-3.5 py-1 text-[11px] font-semibold text-forest-950/75 self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep" />
              PRECISION AGRI ERP
            </div>

            {/* Main Headline */}
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-forest-950 leading-[1.06]">
              Plant, Spray &amp; Manage <br />
              <span className="shimmer-text">Smarter.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-forest-950/70 leading-relaxed max-w-lg">
              Integrated software engines for modern commercial plantations, variable-rate drone spraying, and cadastral estate management.
            </p>

            {/* 3 Solution Selector Tabs matching screenshot */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['plantation', 'fertilizer', 'harvest'] as SolutionTab[]).map((tabKey) => {
                const item = SOLUTIONS[tabKey];
                const active = activeTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`rounded-2xl p-4 text-left sm:text-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      active
                        ? 'bg-[#6b7b65] text-white shadow-md'
                        : 'bg-[#e8eae3] text-forest-950/80 hover:bg-[#dfe2da]'
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Visual with Large Curved Arc Corner */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden rounded-bl-[140px] sm:rounded-bl-[200px] lg:rounded-bl-[260px] shadow-lg bg-forest-950">
              <img
                src={current.heroImage}
                alt={current.heroImageAlt}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ================= LOWER SECTION: SAGE BENTO CARD ================= */}
        <div
          className={`mt-10 sm:mt-14 rounded-[32px] sm:rounded-[36px] bg-[#edf0e8] border border-forest-950/10 p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-700 delay-150 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Thumbnail (1:1 Aspect Ratio) */}
            <div className="lg:col-span-3">
              <div className="relative aspect-square w-full max-w-[260px] mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-sm bg-forest-950">
                <img
                  src={current.cardImage}
                  alt={current.cardTitle}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-forest-950/10 rounded-2xl pointer-events-none" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-forest-950/70">
                <Leaf className="h-3.5 w-3.5 text-emerald-deep" />
                <span>{current.cardTag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-forest-950 leading-snug">
                {current.cardTitle}
              </h3>

              <p className="text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                {current.cardDesc}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(current.targetPage)}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#6b7b65] hover:bg-forest-950 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 active:scale-[0.98]"
                >
                  <span>Learn More</span>
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Features Column with Circular Icon Badges */}
            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-forest-950/10 lg:pl-8">
              {current.features.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div key={feat.title} className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dfe3d8] text-forest-950 shadow-xs">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest-950 leading-snug">
                        {feat.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-forest-950/65 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
