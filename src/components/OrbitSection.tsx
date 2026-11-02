import { useState, useRef, useEffect } from 'react';
import { Monitor, Sprout, Factory, ShoppingCart, Users, CloudSun, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface ModuleItem {
  id: string;
  title: string;
  short: string;
  desc: string;
  metric: string;
  icon: any;
  colorClass: string;
  activeBgClass: string;
  activeRingClass: string;
  activeShadowClass: string;
}

const modules: ModuleItem[] = [
  {
    id: 'gis',
    title: 'Dashboard & GIS Monitoring',
    short: 'GIS & Maps',
    desc: 'Live overview of estate subdivisions, interactive cadastral maps, tree density statistics, and real-time plantation performance indicators.',
    metric: 'Subdivisions: 18 Blocks',
    icon: Monitor,
    colorClass: 'text-blue-500',
    activeBgClass: 'bg-blue-600',
    activeRingClass: 'ring-blue-500/25',
    activeShadowClass: 'shadow-[0_0_25px_rgba(59,130,246,0.45)]',
  },
  {
    id: 'harvest',
    title: 'Harvest Records',
    short: 'Harvest Records',
    desc: 'Track harvest quantities by date, subdivision, and crop batch. Monitor tree yield history, collection cycles, and batch-level forecasts.',
    metric: 'Harvest: 84,200 Nuts',
    icon: Sprout,
    colorClass: 'text-emerald-500',
    activeBgClass: 'bg-emerald-600',
    activeRingClass: 'ring-emerald-500/25',
    activeShadowClass: 'shadow-[0_0_25px_rgba(16,185,129,0.45)]',
  },
  {
    id: 'processing',
    title: 'Processing Records',
    short: 'Processing',
    desc: 'Record processed outputs such as copra drying, virgin and bulk coconut oil extraction, husk sorting, and shell carbonization with input-to-output conversion ratios.',
    metric: 'Copra Output: 4.8t',
    icon: Factory,
    colorClass: 'text-amber-500',
    activeBgClass: 'bg-amber-600',
    activeRingClass: 'ring-amber-500/25',
    activeShadowClass: 'shadow-[0_0_25px_rgba(245,158,11,0.45)]',
  },
  {
    id: 'sales',
    title: 'Sales Tracking',
    short: 'Sales Tracking',
    desc: 'Monitor sales records, buyer dispatch orders, contract fulfillment quantities, and real-time transaction performance from warehouse to buyer.',
    metric: 'Contract: $48,200',
    icon: ShoppingCart,
    colorClass: 'text-cyan-500',
    activeBgClass: 'bg-cyan-600',
    activeRingClass: 'ring-cyan-500/25',
    activeShadowClass: 'shadow-[0_0_25px_rgba(6,182,212,0.45)]',
  },
  {
    id: 'workforce',
    title: 'Farm Managers & Employees',
    short: 'Workforce',
    desc: 'Organize managerial oversight and subdivision responsibility, while structuring workforce field records, piece-rate labor, and field-level accountability.',
    metric: 'Active Crews: 14 Teams',
    icon: Users,
    colorClass: 'text-green-500',
    activeBgClass: 'bg-green-600',
    activeRingClass: 'ring-green-500/25',
    activeShadowClass: 'shadow-[0_0_25px_rgba(34,197,94,0.45)]',
  },
  {
    id: 'weather',
    title: 'Weather & Market Intelligence',
    short: 'Weather & Market',
    desc: 'Connect hyper-local weather forecasts and live commodity market price signals for optimal harvest timing, drying schedules, and sales execution.',
    metric: 'Signals: Rain Delay Alert',
    icon: CloudSun,
    colorClass: 'text-purple-500',
    activeBgClass: 'bg-purple-600',
    activeRingClass: 'ring-purple-500/25',
    activeShadowClass: 'shadow-[0_0_25px_rgba(168,85,247,0.45)]',
  },
];

export function OrbitSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { ref, shown } = useReveal();
  
  // Interactive 3D Card Tilt via CSS variables directly (high performance, no re-renders)
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);

    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 380) {
        setScale(0.68);
      } else if (w < 480) {
        setScale(0.78);
      } else if (w < 640) {
        setScale(0.85);
      } else if (w < 1024) {
        setScale(0.9);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', listener);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    container.style.setProperty('--mouse-x', `${x}`);
    container.style.setProperty('--mouse-y', `${y}`);
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.setProperty('--mouse-x', '0');
    container.style.setProperty('--mouse-y', '0');
  };

  const activeModule = modules[activeIndex];

  // Mathematical positioning for 6 nodes
  const radius = 185; // px
  const angleStep = (2 * Math.PI) / 6;
  const startAngle = -Math.PI / 2; // start at top

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32 border-t border-forest-950/[0.06]">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img 
          src="/images/orbit_bg.png" 
          alt="Agricultural background texture" 
          className="w-full h-full object-cover opacity-[0.09]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-20 z-0" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.02] blur-3xl z-0" />

      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Orbital Interactive Circle Showcase */}
          <div 
            className={`lg:col-span-6 flex items-center justify-center transition-all duration-1000 ${
              shown ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-visible select-none"
              style={{
                transform: `perspective(1000px) rotateY(calc(var(--mouse-x, 0) * 16deg)) rotateX(calc(var(--mouse-y, 0) * -16deg)) scale(${scale})`,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform',
              }}
            >
              {/* Rotating Orbit Dotted Ring */}
              <svg className="absolute w-[372px] h-[372px] pointer-events-none animate-[spin_100s_linear_infinite]" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="none"
                  stroke="rgba(16, 185, 129, 0.22)"
                  strokeWidth="1"
                  strokeDasharray="6 5"
                />
              </svg>

              {/* Glowing active indicator dot rotating around the orbit ring */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  width: '372px',
                  height: '372px',
                  transform: `rotate(${activeIndex * 60}deg)`,
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-emerald-accent shadow-[0_0_15px_#10b981] animate-pulse" />
              </div>

              {/* Central Spatio Agri Node */}
              <div className="relative z-10 flex flex-col items-center justify-center h-28 w-28 rounded-3xl bg-forest-950 text-white ring-4 ring-emerald-accent/20 shadow-[0_0_40px_-5px_rgba(16,185,129,0.45)] p-3 text-center">
                <span className="text-emerald-accent font-mono text-[9px] uppercase tracking-widest font-bold">SPATIO</span>
                <span className="text-white font-bold text-base tracking-tight leading-tight">AGRI</span>
                <span className="text-white/40 text-[8px] font-mono mt-0.5">ESTATE GIS</span>
                <span className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
              </div>

              {/* Orbital Nodes Mapping */}
              {modules.map((m, index) => {
                const angle = startAngle + index * angleStep;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = index === activeIndex;
                const ActiveIcon = m.icon;

                return (
                  <div
                    key={m.id}
                    className="absolute flex flex-col items-center gap-2.5"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: 'calc(50% - 40px)',
                      top: 'calc(50% - 40px)',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <button
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`group/btn relative grid h-20 w-20 place-items-center rounded-full transition-all duration-300 shadow-sm hover:scale-110 active:scale-95 ${
                        isActive
                          ? `${m.activeBgClass} text-white ring-4 ${m.activeRingClass} scale-110 ${m.activeShadowClass} z-20`
                          : `bg-white ${m.colorClass} hover:border-forest-950/20 border border-forest-950/10 z-10`
                      }`}
                      aria-label={m.title}
                      style={{
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      <ActiveIcon className="h-8 w-8 transition-transform duration-300 group-hover/btn:scale-110" strokeWidth={2} />
                      <span className={`absolute -inset-1.5 rounded-full border border-dashed border-emerald-accent/40 scale-75 opacity-0 transition-all duration-300 ${isActive ? 'scale-100 opacity-100 animate-[spin_8s_linear_infinite]' : ''}`} />
                    </button>
                    
                    {/* Node label */}
                    <span 
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold shadow-sm border transition-all duration-300 select-none ${
                        isActive 
                          ? 'bg-forest-950 text-white scale-105 border-forest-950 shadow-[0_4px_12px_rgba(11,37,38,0.15)]' 
                          : 'bg-white text-forest-950/60 hover:text-forest-950 border-forest-950/5'
                      }`}
                    >
                      {m.short}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Copy & Interactive Details Card */}
          <div 
            className={`lg:col-span-6 transition-all duration-1000 delay-150 ${
              shown ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
                Unified Ecosystem
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.05]">
                Your One-Stop Solution For <span className="shimmer-text">Plantation Management</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-forest-950/65">
                Spatio Agri unifies all aspects of coconut plantations and commercial growing into a single operating matrix. By linking GIS subdivision mapping, harvest logs, and copra/oil processing with sales records, Spatio Agri streamlines data across medium to large-scale estates.
              </p>

              {/* Dynamic Module Detail Card */}
              <div 
                key={activeIndex} 
                className="mt-8 animate-fadeUp overflow-hidden rounded-3xl bg-forest-950 p-6 text-white shadow-float border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-emerald-accent ring-1 ring-white/10">
                      <activeModule.icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white">{activeModule.title}</h3>
                      <span className="text-[10px] font-mono text-emerald-accent/80 tracking-wide uppercase">Core Module</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] text-emerald-accent ring-1 ring-inset ring-white/10">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-accent" />
                    {activeModule.metric}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {activeModule.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] text-white/40">Enterprise Ready · Hot Sync</span>
                  <button className="group/btn text-xs font-semibold text-white flex items-center gap-1 hover:text-emerald-accent transition-colors">
                    Explore capabilities
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
