import { Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

export function ValueAndWhySpatio({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-20" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* ---------------- WHY SPATIO / SDS ---------------- */}
        <div>
          {/* Centered Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
              Why Spatio / SDS
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
              Geospatial precision built for <span className="shimmer-text">real field operations.</span>
            </h2>

            {/* Rating Stars & Score (Exact Reference Design) */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-base font-bold text-forest-950">5.0</span>
              </div>
              <p className="mt-1 text-xs font-medium text-forest-950/60">From 50+ Reviews</p>
            </div>
          </div>

          {/* 5-Card Exact Reference Layout */}
          <div
            className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-4 sm:gap-5 lg:gap-5 max-w-6xl mx-auto transition-all duration-1000 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Card 1: High-Tech Precision Plantation Robotics Image */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <img
                src="/images/plantation_tech_robotics.jpg"
                alt="Precision Plantation Agricultural Robotics"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-black/10" />
            </div>

            {/* Card 2: Dark Teal Stat Card - 300+ */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] bg-[#0e3b33] p-7 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                300+
              </span>
              <p className="mt-4 text-sm sm:text-base font-medium text-white/85 leading-snug max-w-[140px]">
                Our Esteemed Clients and Partners
              </p>
            </div>

            {/* Card 3: Shorter Bright Lime Green Center Card - Total Projects 2500+ */}
            <div className="group relative h-[210px] sm:h-[230px] rounded-[22px] sm:rounded-[26px] bg-[#6bb526] p-6 flex flex-col items-center justify-center text-center shadow-lg shadow-lime-600/20 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[26px] ring-1 ring-inset ring-white/20" />
              <span className="text-xs sm:text-sm font-semibold text-white/95">
                Total Projects
              </span>
              <span className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                2500+
              </span>
            </div>

            {/* Card 4: Dark Charcoal Stat Card - 12+ */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] bg-[#1a2323] p-7 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                12+
              </span>
              <p className="mt-4 text-sm sm:text-base font-medium text-white/85 leading-snug max-w-[140px]">
                Years of Dedicated Service
              </p>
            </div>

            {/* Card 5: Dark Teal Card with Organic Green Gradient Swoop */}
            <div className="group relative h-[320px] sm:h-[350px] lg:h-[360px] rounded-[24px] sm:rounded-[28px] bg-[#0e3b33] p-7 flex flex-col justify-end items-start text-left overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              {/* Organic Wavy Green Gradient Aura */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-52 w-52 rounded-full bg-emerald-500/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute top-0 right-0 left-0 h-44 bg-gradient-to-b from-emerald-500/25 via-emerald-700/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />

              {/* Punchy Value Statement */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                  Achieve Optimal Efficiency and Boost Productivity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
