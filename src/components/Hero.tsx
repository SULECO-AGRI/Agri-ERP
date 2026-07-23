import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Play, Sparkles, Check, X, Activity, TrendingUp, Brain, Navigation } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';
import heroVideo from '../Video/generate_a_video_related_this.mp4';
import heroBgVideo from '../Video/Hero_background.mp4';

export function Hero({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', motionListener);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideo(false);
  };

  return (
    <>
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-forest-950 pt-32 pb-24 sm:pt-40 sm:pb-32 flex items-center justify-center">
      {/* 1. Video background & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          src={heroBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
          style={{
            transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * 0.12}px) scale(1.03)`,
          }}
        />
        {/* Cinematic dark gradients and glass overlay overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/45 to-forest-950/95" />
        <div className="absolute inset-0 bg-emerald-accent/[0.04] mix-blend-color" />
        <div className="absolute inset-0 bg-grid-dark grid-fade opacity-25" />
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-emerald-accent/[0.12] blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-emerald-accent/[0.08] blur-3xl" />


      {/* 3. Central typography & call-to-actions */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">

        <h1 className="animate-fadeUp mt-6 text-5xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl xl:text-7xl" style={{ animationDelay: '60ms' }}>
          The Operating System for{' '}
          <span className="shimmer-text-dark">Modern Agriculture.</span>
        </h1>

        <p className="animate-fadeUp mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/70" style={{ animationDelay: '120ms' }}>
          Empowering commercial farms with real-time IoT telemetry, automated supply chains, and AI-driven
          yield forecasting. Built to scale from local fields to global enterprises.
        </p>

        <div className="animate-fadeUp mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center" style={{ animationDelay: '180ms' }}>
          <button
            onClick={() => onNavigate('pricing')}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-accent px-7 py-3.5 text-base font-semibold text-white shadow-glow hover:bg-emerald-deep hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get Started Today
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className="group inline-flex items-center gap-2.5 rounded-full px-5 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] duration-300"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-inset ring-white/25 transition-all group-hover:bg-emerald-accent/20 group-hover:ring-emerald-accent/35">
              <Play className="h-3.5 w-3.5 fill-current text-white" />
            </span>
            Watch 2-Minute Overview
          </button>
        </div>
      </div>
    </section>

    {/* Video Modal */}
    {showVideo && (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={closeVideo}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      >
        <div
          className="relative w-full max-w-4xl mx-4"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleIn 0.3s ease-out' }}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            className="absolute -top-12 right-0 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/20 hover:text-white"
          >
            <X className="h-4 w-4" />
            Close
          </button>

          {/* Video container */}
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
            <video
              ref={videoRef}
              src={heroVideo}
              controls
              autoPlay
              className="w-full"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
    )}
    </>
  );
}

/* ── Device Showcase — uses the actual device mockup image ── */
export function DeviceShowcase() {
  const { ref, shown } = useReveal();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white via-cream to-white py-16 sm:py-24"
    >
      {/* subtle bg glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[40rem] w-[60rem] rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div
        className={`relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 transition-all duration-1000 ${
          shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Device mockup container */}
        <div className="relative mx-auto" style={{ maxWidth: '900px' }}>
          {/* The device frame image sits on top */}
          <img
            src="/images/device-mockup.png"
            alt="AgriCore dashboard on laptop and phone"
            className="relative z-10 w-full pointer-events-none select-none"
            draggable={false}
          />

          {/* Laptop screen content — positioned behind the image, inside the laptop screen area */}
          <div
            className="absolute z-0 overflow-hidden"
            style={{
              top: '5.5%',
              left: '11.5%',
              width: '60%',
              height: '72%',
            }}
          >
            <DashboardMockup variant="light" />
          </div>

          {/* Phone screen content — positioned inside the phone screen area */}
          <div
            className="absolute z-0 overflow-hidden"
            style={{
              top: '38%',
              right: '7.5%',
              width: '16.5%',
              height: '52%',
            }}
          >
            {/* mini mobile dashboard */}
            <div className="h-full w-full bg-white p-1.5 space-y-1">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
                <span className="text-[6px] font-bold text-forest-950">AgriCore</span>
              </div>
              <div className="grid grid-cols-2 gap-0.5">
                {[
                  { label: 'Moisture', val: '64.2%' },
                  { label: 'Yield', val: '12.4t' },
                  { label: 'Sensors', val: '1,284' },
                  { label: 'NDVI', val: '0.78' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded bg-forest-950/[0.03] p-0.5 ring-1 ring-forest-950/5"
                  >
                    <div className="text-[4px] text-forest-950/50">{s.label}</div>
                    <div className="text-[6px] font-bold text-forest-950">{s.val}</div>
                  </div>
                ))}
              </div>
              <div className="h-6 rounded bg-forest-950/[0.03] ring-1 ring-forest-950/5 flex items-end px-0.5 pb-0.5 gap-[1px]">
                {[35, 50, 42, 65, 55, 78, 62, 85].map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-emerald-accent/60 to-emerald-accent/30"
                    style={{ height: `${(v / 100) * 100}%` }}
                  />
                ))}
              </div>
              {['FIELD-A12', 'FIELD-B07'].map((f) => (
                <div
                  key={f}
                  className="flex items-center justify-between rounded bg-forest-950/[0.02] px-0.5 py-0.5"
                >
                  <span className="text-[4px] font-medium text-forest-950">{f}</span>
                  <span className="rounded-full bg-emerald-accent/15 px-0.5 text-[3px] text-emerald-accent">
                    ok
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const { ref, shown } = useReveal();
  const logos = ['Cargill', 'Bayer', 'John Deere', 'Olam', 'Syngenta'];
  return (
    <section ref={ref} className="relative border-y border-forest-950/[0.06] bg-cream">
      <div className="mx-auto max-w-8xl px-5 py-10 sm:px-8 lg:px-12">
        <p className={`text-center text-sm font-medium text-forest-950/55 transition-all duration-700 ${shown ? 'opacity-100' : 'opacity-0'}`}>
          Trusted by over 15,000+ commercial growers and agronomists globally.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {logos.map((l, i) => (
            <span
              key={l}
              className={`text-xl font-bold tracking-tight text-forest-950/35 grayscale transition-all duration-700 hover:text-forest-950/60 sm:text-2xl ${shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
              style={{ transitionDelay: `${i * 80}ms`, fontFamily: 'Inter' }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

