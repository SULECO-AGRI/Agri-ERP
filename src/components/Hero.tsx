import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Play, X } from "lucide-react";
import type { Page } from "../nav";
import { useReveal } from "../hooks/useReveal";
import heroVideo from "../assets/videos/generate_a_video_related_this.mp4";
import heroBgVideo from "../assets/videos/Hero_background.mp4";

export function Hero({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented or video element not ready:", err);
      });
    }
  }, [showVideo]);

  // Handle escape key to close video
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };
    if (showVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showVideo]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", motionListener);
      window.removeEventListener("scroll", handleScroll);
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
            className="absolute inset-0 h-full w-full object-cover object-center scale-[1.15]"
            style={{
              transform: prefersReducedMotion
                ? "none"
                : `translateY(${Math.min(scrollY * 0.12, 40)}px) scale(1.15)`,
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
          <h1
            className="animate-fadeUp mt-6 text-5xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl xl:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            One Map, Every Operation.{" "}
            <span className="shimmer-text-dark">Nothing Left to Memory.</span>
          </h1>

          <div
            className="animate-fadeUp mt-10 sm:mt-12 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center"
            style={{ animationDelay: "120ms" }}
          >
            <button
              onClick={() => onNavigate("demo")}
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-accent px-7 py-3.5 text-base font-semibold text-white shadow-glow hover:bg-emerald-deep hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Schedule Plantation Demo
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
      {showVideo &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeVideo}
            style={{ animation: "fadeIn 0.3s ease-out" }}
          >
            <div
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "scaleIn 0.3s ease-out" }}
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
                  style={{ maxHeight: "80vh" }}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export { TrustBar, PartnersSection } from "./PartnersSection";
