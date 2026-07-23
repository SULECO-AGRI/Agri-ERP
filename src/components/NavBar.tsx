import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV, type Page } from '../nav';

export function NavBar({
  page,
  onNavigate,
}: {
  page: Page;
  onNavigate: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p: Page) => {
    onNavigate(p);
    setOpen(false);
  };

  const isDarkHeader = page === 'home' && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'glass hairline-b shadow-[0_8px_30px_-20px_rgba(11,37,26,0.25)]' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={() => go('home')} className="shrink-0 transition-opacity hover:opacity-80">
            <Logo onDark={isDarkHeader} />
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = page === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => go(item.page)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isDarkHeader
                      ? active ? 'text-white' : 'text-white/60 hover:text-white'
                      : active ? 'text-forest-950' : 'text-forest-950/60 hover:text-forest-950'
                  }`}
                >
                  {active && (
                    <span className={`absolute inset-0 rounded-full ${
                      isDarkHeader ? 'bg-white/10 ring-1 ring-inset ring-white/10' : 'bg-forest-950/[0.06] ring-1 ring-inset ring-forest-950/10'
                    }`} />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button className={`text-sm font-medium transition-colors ${
              isDarkHeader ? 'text-white/70 hover:text-white' : 'text-forest-950/70 hover:text-forest-950'
            }`}>
              Sign In
            </button>
            <button
              onClick={() => go('demo')}
              className={`group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all active:scale-[0.98] ${
                isDarkHeader
                  ? 'bg-white text-forest-950 hover:bg-cream hover:shadow-md'
                  : 'bg-forest-950 text-white hover:bg-forest-900 hover:shadow-md'
              }`}
            >
              Request Enterprise Demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`grid h-10 w-10 place-items-center rounded-xl lg:hidden transition-colors ${
              isDarkHeader && !open ? 'text-white' : 'text-forest-950'
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="glass hairline-t lg:hidden">
            <div className="mx-auto max-w-8xl space-y-1 px-5 py-4 sm:px-8">
              {NAV.map((item) => (
                <button
                  key={item.page}
                  onClick={() => go(item.page)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    page === item.page
                      ? 'bg-forest-950/[0.06] text-forest-950'
                      : 'text-forest-950/70 hover:bg-forest-950/[0.04]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <button className="flex-1 rounded-full border border-forest-950/10 px-5 py-2.5 text-sm font-semibold text-forest-950">
                  Sign In
                </button>
                <button
                  onClick={() => go('demo')}
                  className="flex-1 rounded-full bg-forest-950 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
