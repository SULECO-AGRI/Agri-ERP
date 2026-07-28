import { useReveal } from "../hooks/useReveal";

export function StatsBanner() {
  const { ref, shown } = useReveal();

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 pt-8 pb-16 bg-white overflow-hidden"
    >
      {/* 1. Large Banner Container */}
      <div
        className={`relative w-full flex flex-col md:block md:h-[540px] rounded-[36px] overflow-hidden bg-forest-950 shadow-xl select-none transition-all duration-1000 ${
          shown ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        {/* Panoramic image: header on mobile, absolute background on desktop */}
        <div className="relative h-[240px] sm:h-[300px] md:absolute md:inset-0 md:h-full w-full overflow-hidden">
          <img
            src="/images/orbit.png"
            alt="Lush agricultural green fields aerial view"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103"
            draggable={false}
          />
          {/* Cinematic dark/light shadow overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/35" />

          {/* Mobile Top Left Heading */}
          <div className="absolute top-6 left-6 max-w-[280px] text-left z-10 sm:hidden">
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-white">
              Platform
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-[1.1] tracking-tightest text-white">
              Three Pillars. One Platform.
            </h2>
          </div>
        </div>

        {/* Desktop Top Left Heading */}
        <div className="absolute top-8 left-8 max-w-[340px] text-left z-10 hidden sm:block">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-accent">
            Platform
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-[1.1] tracking-tightest text-white md:text-4xl">
            Three Pillars. One Platform.
          </h2>
        </div>

        {/* 2. Floating stepped cards: stack below image on mobile, absolute overlay on desktop */}
        <div className="relative p-6 bg-forest-950 md:bg-transparent md:absolute md:bottom-8 md:right-8 md:right-12 md:p-0 flex flex-col sm:flex-row md:flex-wrap items-stretch sm:items-end justify-center sm:justify-end gap-5 z-20 md:max-w-4xl">
          {/* Card 1: Dark main highlight */}
          <div className="bg-forest-950/95 backdrop-blur-sm text-white rounded-[28px] p-6 w-full sm:w-[230px] h-[230px] flex flex-col justify-between shadow-xl ring-1 ring-white/10 hover:-translate-y-1 transition-transform duration-300 shrink-0">
            <div className="text-4xl font-bold tracking-tight whitespace-nowrap">
              N
              <span className="text-[0.6em] align-super underline decoration-[2px] underline-offset-2">
                o
              </span>{" "}
              1
            </div>
            <p className="text-sm font-bold leading-snug text-white/90">
              Field Operations Management
            </p>
          </div>

          {/* Card 2: White middle card */}
          <div className="bg-white/95 backdrop-blur-sm text-forest-950 rounded-[28px] p-5 w-full sm:w-[200px] h-[180px] flex flex-col justify-between shadow-lg border border-forest-950/5 hover:-translate-y-1 transition-transform duration-300 shrink-0">
            <div className="text-3xl font-bold tracking-tight whitespace-nowrap">
              N
              <span className="text-[0.6em] align-super underline decoration-[2px] underline-offset-2">
                o
              </span>{" "}
              2
            </div>
            <p className="text-[13px] font-bold leading-snug text-forest-950/90">
              Crop Lifecycle Management
            </p>
          </div>

          {/* Card 3: White end card */}
          <div className="bg-white/95 backdrop-blur-sm text-forest-950 rounded-[28px] p-5 w-full sm:w-[200px] h-[140px] flex flex-col justify-between shadow-md border border-forest-950/5 hover:-translate-y-1 transition-transform duration-300 shrink-0">
            <div className="text-2xl font-bold tracking-tight whitespace-nowrap">
              N
              <span className="text-[0.6em] align-super underline decoration-[1.5px] underline-offset-2">
                o
              </span>{" "}
              3
            </div>
            <p className="text-xs font-bold leading-snug text-forest-950/90">
              Inventory (Farm Inputs &amp; Tools)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
