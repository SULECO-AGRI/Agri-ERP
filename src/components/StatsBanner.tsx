import { useReveal } from '../hooks/useReveal';

export function StatsBanner() {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 pt-8 pb-16 bg-white overflow-hidden">
      {/* 1. Large Banner Container */}
      <div 
        className={`relative w-full h-[460px] md:h-[540px] rounded-[36px] overflow-hidden shadow-xl select-none transition-all duration-1000 ${
          shown ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
      >
        {/* Background panoramic field aerial view */}
        <img 
          src="/images/orbit.png" 
          alt="Lush agricultural green fields aerial view" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103"
          draggable={false}
        />
        
        {/* Cinematic dark/light shadow overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/35" />

        {/* Bottom Left Quote */}
        <div className="absolute bottom-8 left-8 max-w-[260px] text-left z-10 hidden sm:block">
          <p className="text-xs font-medium leading-relaxed text-white/80">
            Strength, discipline, and precision on the field lead to consistent, measurable results every season.
          </p>
        </div>

        {/* 2. Floating stepped cards (positioned completely INSIDE the banner container on the right) */}
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-wrap items-end justify-end gap-5 z-20 pl-10">
          
          {/* Card 1: Dark main highlight */}
          <div 
            className="bg-forest-950/95 backdrop-blur-sm text-white rounded-[28px] p-6 w-[230px] h-[230px] flex flex-col justify-between shadow-xl ring-1 ring-white/10 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-4xl font-bold tracking-tight">
              N<span className="text-[0.6em] align-super underline decoration-[2px] underline-offset-2">o</span> 1
            </div>
            <p className="text-xs font-medium leading-relaxed text-white/85">
              Trusted agricultural partner for consistent, high-yield results
            </p>
          </div>

          {/* Card 2: White middle card */}
          <div 
            className="bg-white/95 backdrop-blur-sm text-forest-950 rounded-[28px] p-5 w-[200px] h-[180px] flex flex-col justify-between shadow-lg border border-forest-950/5 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-3xl font-bold tracking-tight">
              N<span className="text-[0.6em] align-super underline decoration-[2px] underline-offset-2">o</span> 2
            </div>
            <p className="text-[11px] font-semibold leading-relaxed text-forest-950/75">
              Years of hands-on field experience backed by modern machinery
            </p>
          </div>

          {/* Card 3: White end card */}
          <div 
            className="bg-white/95 backdrop-blur-sm text-forest-950 rounded-[28px] p-5 w-[200px] h-[140px] flex flex-col justify-between shadow-md border border-forest-950/5 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-2xl font-bold tracking-tight">
              N<span className="text-[0.6em] align-super underline decoration-[1.5px] underline-offset-2">o</span> 3
            </div>
            <p className="text-[10px] font-bold leading-relaxed text-forest-950/70">
              Precision-driven operations across every hectare we manage
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
