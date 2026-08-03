import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

export function AgriculturalServices({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative bg-cream py-24 sm:py-32 border-b border-forest-950/[0.06]">
      {/* Background grid details */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-30" />

      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        
        {/* Large Header spanning top width matching Hero style */}
        <h2 
          className={`text-4xl font-bold tracking-tightest leading-[1.05] text-forest-950 sm:text-5xl md:text-6xl lg:text-[70px] transition-all duration-1000 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Professional Agricultural <span className="text-forest-950/30">Services</span> <br />
          Built on Precision <span className="text-forest-950/30">and Experience</span>
        </h2>

        {/* 3-Column Layout Block */}
        <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-stretch">
          
          {/* Column 1: Left Copy & CTAs */}
          <div 
            className={`md:col-span-3 flex flex-col justify-between min-h-[300px] md:min-h-[460px] transition-all duration-1000 delay-100 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            {/* Top pill outline button */}
            <button
              onClick={() => onNavigate('about')}
              className="self-start rounded-full border border-forest-950 px-5 py-2 text-xs font-semibold text-forest-950 hover:bg-forest-950 hover:text-white transition-all duration-300 active:scale-[0.98]"
            >
              About us
            </button>

            {/* Bottom text block & Request button */}
            <div>
              <p className="text-[15px] font-medium leading-relaxed text-forest-950/75 max-w-[280px]">
                We use modern equipment and proven processes to deliver consistent, reliable performance across every hectare.
              </p>
              <button className="mt-6 self-start rounded-full bg-forest-950 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-forest-900 transition-all duration-300 active:scale-[0.98]">
                Request a service
              </button>
            </div>
          </div>

          {/* Column 2: Large Central Portrait Image */}
          <div 
            className={`md:col-span-6 transition-all duration-1000 delay-200 ${
              shown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full h-[360px] md:h-[500px] rounded-[36px] overflow-hidden shadow-float select-none pointer-events-none group">
              <img 
                src="/images/drone_survey.png" 
                alt="Agricultural survey drone mapping field" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 rounded-[36px] ring-1 ring-inset ring-forest-950/10 pointer-events-none" />
            </div>
          </div>

          {/* Column 3: Right Text Tag & Lower Landscape Image */}
          <div 
            className={`md:col-span-3 flex flex-col justify-between min-h-[300px] md:min-h-[460px] transition-all duration-1000 delay-300 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            {/* Top aligned text, standard right-aligned tag */}
            <p className="text-xs font-medium leading-relaxed text-forest-950/65 text-right max-w-[240px] self-end pt-2">
              Our strength in the field drives productivity, stability, and reliable yields season after season.
            </p>

            {/* Bottom aligned landscape image */}
            <div className="relative w-full h-[180px] md:h-[220px] rounded-[24px] overflow-hidden shadow-float select-none pointer-events-none group self-end">
              <img 
                src="/images/drone_spraying.png" 
                alt="Crop spraying drone spraying green fields" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-forest-950/10 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
