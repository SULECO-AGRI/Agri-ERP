import { useReveal } from '../hooks/useReveal';

export function StatsBanner() {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 pt-8 pb-32 sm:pb-40 bg-white overflow-visible">
      {/* 1. Large Banner Container */}
      <div 
        className={`relative w-full h-[400px] md:h-[500px] rounded-[36px] overflow-hidden shadow-xl select-none transition-all duration-1000 ${
          shown ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
      >
        {/* Background panoramic field closeup */}
        <img 
          src="/images/field_closeup.png" 
          alt="Lush agricultural green fields dewdrops closeup" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103"
          draggable={false}
        />
        
        {/* Cinematic dark/light shadow overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/35" />

        {/* Large semi-transparent background word overlay */}
        <div className="absolute inset-x-0 top-12 flex justify-center pointer-events-none">
          <span className="text-[12vw] font-black uppercase text-white/10 tracking-widest leading-none">
            YIELD
          </span>
        </div>

        {/* Bottom Right Quote */}
        <div className="absolute bottom-10 right-10 max-w-[260px] text-right z-10 hidden sm:block">
          <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase leading-relaxed">
            STRENGTH, DISCIPLINE, AND PRECISION ON THE FIELD LEAD TO CONSISTENT, MEASURABLE RESULTS EVERY SEASON.
          </p>
        </div>
      </div>

      {/* 2. Floating stepped cards (overlays bottom-left of the banner) */}
      <div className="absolute -bottom-10 left-10 md:left-20 flex flex-wrap items-end gap-5 z-20 pr-10">
        
        {/* Card 1: Dark main highlight */}
        <div 
          className={`bg-forest-950 text-white rounded-[32px] p-8 w-[260px] h-[280px] flex flex-col justify-between shadow-2xl ring-1 ring-white/10 hover:-translate-y-1.5 transition-all duration-500 delay-100 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-5xl font-extrabold tracking-tight">№ 1</div>
          <p className="text-sm font-medium leading-relaxed text-white/85">
            Trusted agricultural partner for consistent, high-yield results
          </p>
        </div>

        {/* Card 2: White middle card */}
        <div 
          className={`bg-white text-forest-950 rounded-[32px] p-7 w-[220px] h-[210px] flex flex-col justify-between shadow-xl border border-forest-950/5 hover:-translate-y-1.5 transition-all duration-500 delay-200 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-4xl font-extrabold tracking-tight">№ 2</div>
          <p className="text-xs font-semibold leading-relaxed text-forest-950/75">
            Years of hands-on field experience backed by modern machinery
          </p>
        </div>

        {/* Card 3: White end card */}
        <div 
          className={`bg-white text-forest-950 rounded-[32px] p-6 w-[220px] h-[150px] flex flex-col justify-between shadow-lg border border-forest-950/5 hover:-translate-y-1.5 transition-all duration-500 delay-300 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-3xl font-extrabold tracking-tight">№ 3</div>
          <p className="text-[11px] font-bold leading-relaxed text-forest-950/70">
            Precision-driven operations across every hectare we manage
          </p>
        </div>

      </div>
    </section>
  );
}
