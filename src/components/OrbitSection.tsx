import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

interface ModuleCard {
  title: string;
  image: string;
}

const modulesGroup1: ModuleCard[] = [
  {
    title: 'Dashboard & GIS Monitoring',
    image: '/images/modules/gis_monitoring.jpg',
  },
  {
    title: 'Harvest Records',
    image: '/images/modules/harvest_records.jpg',
  },
  {
    title: 'Processing Records',
    image: '/images/modules/processing_records.jpg',
  },
  {
    title: 'Sales Tracking',
    image: '/images/modules/sales_logistics.jpg',
  },
];

const modulesGroup2: ModuleCard[] = [
  {
    title: 'Farm Managers',
    image: '/images/modules/farm_managers.jpg',
  },
  {
    title: 'Farm Employees',
    image: '/images/modules/farm_workforce.jpg',
  },
  {
    title: 'Weather & Market Intelligence',
    image: '/images/modules/weather_market.jpg',
  },
  {
    title: 'User Management & Reports',
    image: '/images/modules/reports_compliance.jpg',
  },
];

export function OrbitSection({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate('solutions');
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-forest-950/[0.06]">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-20" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            What the System Offers
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
            Complete digital infrastructure for <span className="shimmer-text">modern plantations</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-950/70 max-w-2xl mx-auto">
            Explore the core modules powering precision plantation agriculture, from cadastral GIS mapping to harvest records and market intelligence.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div
          className={`mt-14 sm:mt-18 transition-all duration-1000 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Bento Group 1 (Modules 1 - 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 1: Dashboard & GIS Monitoring (Wide Showcase) */}
            <div
              onClick={handleCardClick}
              className="group relative h-[320px] sm:h-[380px] lg:h-[460px] lg:col-span-5 rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={modulesGroup1[0].image}
                alt={modulesGroup1[0].title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {modulesGroup1[0].title}
                </h3>
              </div>
            </div>

            {/* Stacked Center: Harvest Records & Processing Records */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-3 lg:h-[460px]">
              {/* Card 2: Harvest Records */}
              <div
                onClick={handleCardClick}
                className="group relative h-[220px] sm:h-[240px] lg:h-auto lg:flex-1 rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={modulesGroup1[1].image}
                  alt={modulesGroup1[1].title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {modulesGroup1[1].title}
                  </h3>
                </div>
              </div>

              {/* Card 3: Processing Records */}
              <div
                onClick={handleCardClick}
                className="group relative h-[220px] sm:h-[240px] lg:h-auto lg:flex-1 rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={modulesGroup1[2].image}
                  alt={modulesGroup1[2].title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {modulesGroup1[2].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4: Sales Tracking (Tall Portrait) */}
            <div
              onClick={handleCardClick}
              className="group relative h-[320px] sm:h-[380px] lg:h-[460px] lg:col-span-4 rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={modulesGroup1[3].image}
                alt={modulesGroup1[3].title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {modulesGroup1[3].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Bento Group 2 (Modules 5 - 8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mt-5 sm:mt-6">
            {/* Card 5: Farm Managers (Tall Portrait) */}
            <div
              onClick={handleCardClick}
              className="group relative h-[320px] sm:h-[380px] lg:h-[460px] lg:col-span-4 rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={modulesGroup2[0].image}
                alt={modulesGroup2[0].title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {modulesGroup2[0].title}
                </h3>
              </div>
            </div>

            {/* Stacked Center: Farm Employees & Weather & Market Intelligence */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-3 lg:h-[460px]">
              {/* Card 6: Farm Employees */}
              <div
                onClick={handleCardClick}
                className="group relative h-[220px] sm:h-[240px] lg:h-auto lg:flex-1 rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={modulesGroup2[1].image}
                  alt={modulesGroup2[1].title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {modulesGroup2[1].title}
                  </h3>
                </div>
              </div>

              {/* Card 7: Weather & Market Intelligence */}
              <div
                onClick={handleCardClick}
                className="group relative h-[220px] sm:h-[240px] lg:h-auto lg:flex-1 rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={modulesGroup2[2].image}
                  alt={modulesGroup2[2].title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {modulesGroup2[2].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 8: User Management & Reports (Wide Showcase) */}
            <div
              onClick={handleCardClick}
              className="group relative h-[320px] sm:h-[380px] lg:h-[460px] lg:col-span-5 rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={modulesGroup2[3].image}
                alt={modulesGroup2[3].title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent transition-colors duration-500 group-hover:from-forest-950/95" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-inset ring-white/15 transition-colors duration-500 group-hover:ring-emerald-400/50" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {modulesGroup2[3].title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA bridge */}
        {onNavigate && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-forest-900 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              View detailed module specifications
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { OrbitSection as WhatSystemOffers };
