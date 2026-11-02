import { useMemo } from 'react';
import { ArrowUpRight, Phone, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

function AccentMarker() {
  return (
    <div className="inline-flex flex-col gap-0.5 shrink-0 mr-2.5">
      <div className="h-2 w-2.5 rounded-[1px] bg-[#00d2ff]" />
      <div className="h-2 w-2.5 rounded-[1px] bg-[#2563eb]" />
    </div>
  );
}

function TopographicMesh() {
  const { horizontals, verticals } = useMemo(() => {
    const W = 1200;
    const numRows = 16;
    const stepX = 35;
    const grid: [number, number][][] = [];

    for (let r = 0; r < numRows; r++) {
      const rowPoints: [number, number][] = [];
      const baseY = 40 + r * 15;
      for (let x = 0; x <= W; x += stepX) {
        const normCenter = (x - 620) / 360;
        const mainRidge = Math.exp(-normCenter * normCenter) * 65;
        const subRidge1 = Math.exp(-Math.pow((x - 260) / 200, 2)) * 35;
        const subRidge2 = Math.exp(-Math.pow((x - 960) / 220, 2)) * 30;
        const ripple = Math.sin(x * 0.025 + r * 0.4) * 6;
        const depth = 0.35 + (r / numRows) * 0.65;
        const y = baseY - (mainRidge + subRidge1 + subRidge2 + ripple) * depth;
        rowPoints.push([x, y]);
      }
      grid.push(rowPoints);
    }

    const hPaths = grid.map((row) =>
      row.reduce(
        (acc, pt, idx) => (idx === 0 ? `M ${pt[0]} ${pt[1].toFixed(1)}` : `${acc} L ${pt[0]} ${pt[1].toFixed(1)}`),
        ''
      )
    );

    const vPaths: string[] = [];
    const numCols = grid[0].length;
    for (let c = 0; c < numCols; c += 2) {
      let vD = '';
      for (let r = 0; r < numRows; r++) {
        const pt = grid[r][c];
        vD += r === 0 ? `M ${pt[0]} ${pt[1].toFixed(1)}` : ` L ${pt[0]} ${pt[1].toFixed(1)}`;
      }
      vPaths.push(vD);
    }

    return { horizontals: hPaths, verticals: vPaths };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]">
      <svg
        viewBox="0 0 1200 300"
        className="w-full h-full min-w-[950px] opacity-[0.32] text-blue-500"
        preserveAspectRatio="none"
      >
        {horizontals.map((d, i) => (
          <path
            key={`h-${i}`}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? '0.9' : '0.55'}
            strokeOpacity={0.5 + (i / horizontals.length) * 0.5}
          />
        ))}
        {verticals.map((d, i) => (
          <path
            key={`v-${i}`}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.45"
            strokeOpacity="0.35"
          />
        ))}
      </svg>
    </div>
  );
}

export function AboutPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref } = useReveal();

  return (
    <div className="bg-white min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="relative overflow-hidden bg-white pt-32 pb-10 sm:pt-40 sm:pb-16 border-b border-forest-950/[0.05]">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-60" />
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
              About Spatio &amp; SDS
            </span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tightest text-forest-950 sm:text-5xl lg:text-6xl">
              Precision geospatial intelligence for <span className="shimmer-text">modern plantations.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: WHO ARE WE ================= */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-forest-950/[0.06]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Header with dual-square accent */}
          <div className="flex items-center">
            <AccentMarker />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-forest-950 uppercase font-sans">
              WHO ARE WE
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-forest-950/75 font-normal">
            SULECO established in 2009, is a pioneering independent business entity at the intersection of cutting-edge technology and innovative solutions. As the leading provider of geospatial, surveying, UAV, IoT, precision agricultural, and laboratory equipment solutions; we empower diverse industries to thrive.
          </p>

          {/* 2 Stat Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md">
            <div className="rounded-xl bg-[#f4f7fc] p-6 text-left border border-[#e2eaf5]/60 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2563eb]">
                800+
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-forest-950/80">
                Success Projects
              </div>
            </div>

            <div className="rounded-xl bg-[#f4f7fc] p-6 text-left border border-[#e2eaf5]/60 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2563eb]">
                1,000+
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-forest-950/80">
                Happy Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR VISION & MISSION ================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-b border-forest-950/[0.06]">
        {/* Topographic 3D Wireframe Wave Background */}
        <TopographicMesh />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-center sm:justify-start">
            <AccentMarker />
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-forest-950 uppercase font-sans">
              OUR VISION &amp; MISSION
            </h2>
          </div>

          {/* 2-Column Side-by-Side: Mission (Left) & Vision (Right) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left: Mission */}
            <div className="space-y-3">
              <div className="flex items-center">
                <AccentMarker />
                <h3 className="text-lg font-bold text-[#2563eb]">Mission</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-forest-950/70">
                Fostering a future where data reigns supreme, propelling interconnected ecosystems that elevate efficiency, productivity, and excellence in the domains of surveying, engineering, agricultural, and geospatial science in Sri Lanka and beyond.
              </p>
            </div>

            {/* Right: Vision */}
            <div className="space-y-3">
              <div className="flex items-center">
                <AccentMarker />
                <h3 className="text-lg font-bold text-[#2563eb]">Vision</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-forest-950/70">
                Our vision at SULECO is to be a leading provider of soft technical solutions, contributing to the sustainable growth and innovation of our stakeholders. We aim to harness cutting-edge technology to shape a future where precise data empowers businesses, industries, and communities locally and around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CONTACT & CTA ================= */}
      <section ref={ref} className="relative py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-3xl bg-[#0f172a] border border-slate-800/80 p-8 sm:p-10 text-white shadow-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Want to see Spatio Agri on your plantation?
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                  Book a walkthrough with an SDS &amp; SULECO geospatial coordinator.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-200">
                  <a href="tel:0773301274" className="inline-flex items-center gap-1.5 hover:text-[#00d2ff] transition-colors">
                    <Phone className="h-3.5 w-3.5 text-[#00d2ff]" /> 077 330 1274
                  </a>
                  <a href="https://www.spatiosds.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#00d2ff] transition-colors">
                    <Globe className="h-3.5 w-3.5 text-[#00d2ff]" /> www.spatiosds.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => onNavigate('demo')}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#1d4ed8] transition-all active:scale-[0.98]"
              >
                Schedule Plantation Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
