import { Logo } from './Logo';
import { type Page } from '../nav';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const cols: { title: string; links: { label: string; page?: Page }[] }[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', page: 'home' },
        { label: 'Solutions', page: 'solutions' },
        { label: 'Pricing', page: 'pricing' },
        { label: 'Interactive Demo', page: 'demo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', page: 'about' },
        { label: 'Careers' },
        { label: 'Press' },
        { label: 'Contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation' },
        { label: 'API Reference' },
        { label: 'Agronomy Guides' },
        { label: 'Status' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              The operating system for modern agriculture. Real-time telemetry, automated supply chains, and
              AI-driven yield forecasting — built to scale from local fields to global enterprises.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-white/60 ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => l.page && onNavigate(l.page)}
                      className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l.label}
                      {l.page && (
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} SpatioAgri Systems, Inc. · All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-xs text-white/40">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Security</a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-accent" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
