import { Monitor, Sprout, Factory, ShoppingCart, UserCheck, Users, CloudSun, FileCheck, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

interface ModuleItem {
  icon: typeof Monitor;
  tag: string;
  title: string;
  desc: string;
}

const systemModules: ModuleItem[] = [
  {
    icon: Monitor,
    tag: 'GIS & Maps',
    title: 'Dashboard & GIS Monitoring',
    desc: 'Live overview of subdivisions, maps, tree statistics, and performance indicators.',
  },
  {
    icon: Sprout,
    tag: 'Harvesting',
    title: 'Harvest Records',
    desc: 'Track harvest quantities by date, subdivision, and crop batch.',
  },
  {
    icon: Factory,
    tag: 'Processing Mill',
    title: 'Processing Records',
    desc: 'Record processed outputs such as copra, coconut oil, husk, and shell.',
  },
  {
    icon: ShoppingCart,
    tag: 'Commercial',
    title: 'Sales Tracking',
    desc: 'Monitor sales records, quantities, and transaction performance.',
  },
  {
    icon: UserCheck,
    tag: 'Management',
    title: 'Farm Managers',
    desc: 'Organize managerial oversight and subdivision responsibility.',
  },
  {
    icon: Users,
    tag: 'Workforce',
    title: 'Farm Employees',
    desc: 'Structure workforce records and field-level accountability.',
  },
  {
    icon: CloudSun,
    tag: 'Intelligence',
    title: 'Weather & Market Intelligence',
    desc: 'Connect weather awareness and market signals for better timing.',
  },
  {
    icon: FileCheck,
    tag: 'Compliance',
    title: 'User Management & Reports',
    desc: 'Role-based access, filtered views, exportable records, and audit-ready reporting.',
  },
];

export function OrbitSection({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-forest-950/[0.06]">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-20" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            What the System Offers
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl leading-[1.08]">
            Complete digital infrastructure for <span className="shimmer-text">modern plantations</span>
          </h2>
        </div>

        {/* 8-Card Capabilities Grid */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {systemModules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={() => onNavigate?.('solutions')}
                className={`group relative flex flex-col justify-between rounded-3xl border border-forest-950/[0.07] bg-white p-7 shadow-sm cursor-pointer transition-all duration-700 hover:border-emerald-accent/40 hover:shadow-glow-soft hover:-translate-y-1 ${
                  shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div>
                  {/* Top row: Icon and Tag */}
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-accent/10 text-emerald-deep transition-all duration-300 group-hover:bg-emerald-accent/20 group-hover:scale-105">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-forest-950/[0.04] px-3 py-1 font-mono text-[10px] font-semibold text-forest-950/60 group-hover:bg-emerald-accent/15 group-hover:text-emerald-deep transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-forest-950 group-hover:text-emerald-deep transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                    {item.desc}
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-emerald-deep group-hover:text-forest-950 transition-colors pt-4 border-t border-forest-950/[0.05]">
                  <span>Explore module</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bridge */}
        {onNavigate && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-forest-900 transition-all active:scale-[0.98]"
            >
              View detailed module specifications
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { OrbitSection as WhatSystemOffers };
