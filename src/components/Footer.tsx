import { Logo } from './Logo';
import { type Page } from '../nav';

interface FooterLink {
  label: string;
  page?: Page;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const columns: FooterColumn[] = [
    {
      title: 'About',
      links: [
        { label: 'Company Overview', page: 'about' },
        { label: 'Platform Solutions', page: 'solutions' },
        { label: 'Why Spatio Agri', page: 'about' },
        { label: 'Partners & Network', page: 'about' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Products & Platforms', page: 'products' },
        { label: 'Request Demo', page: 'demo' },
        { label: 'GIS & Field Specs', page: 'solutions' },
        { label: 'Estate Case Studies', page: 'about' },
      ],
    },
    {
      title: 'Support & Contact',
      links: [
        { label: 'Contact Us', page: 'contact' },
        { label: 'Technical Support', page: 'contact' },
        { label: 'SDS Web Portal', href: 'https://www.spatiosds.com' },
        { label: 'Hotline: 077 330 1274', href: 'tel:0773301274' },
      ],
    },
  ];

  return (
    <footer className="border-t border-forest-950/[0.08] bg-white text-forest-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12">
        {/* Main 4-column Minimalist Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand / Logo */}
          <div className="flex flex-col items-start">
            <button
              onClick={() => onNavigate('home')}
              className="transition-opacity hover:opacity-80 text-left"
              aria-label="Spatio Agri Home"
            >
              <Logo />
            </button>
            <p className="mt-4 max-w-xs text-xs text-forest-950/60 leading-relaxed">
              Unified digital operating platform for commercial agricultural plantations and smart estates.
            </p>
          </div>

          {/* Columns 2, 3, 4: Categorized Navigation Links */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-base font-bold text-forest-950 tracking-tight">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 sm:space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-sm text-forest-950/70 transition-colors duration-200 hover:text-emerald-deep"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => link.page && onNavigate(link.page)}
                        className="text-sm text-forest-950/70 transition-colors duration-200 hover:text-emerald-deep text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-14 sm:mt-18 pt-6 border-t border-forest-950/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-950/50">
          <p>© {new Date().getFullYear()} Spatio Agri · Spatio Data Solutions (SDS). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-forest-950 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-forest-950 transition-colors"
            >
              Terms of Service
            </button>
            <span className="flex items-center gap-1.5 text-forest-950/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep animate-pulse" />
              All systems live
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
