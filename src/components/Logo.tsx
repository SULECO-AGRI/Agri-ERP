import { Sprout } from 'lucide-react';

export function Logo({ className = '', onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-forest-950 shadow-sm">
        <Sprout className="h-5 w-5 text-emerald-accent" strokeWidth={2.5} />
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
      </div>
      <span
        className={`text-[19px] font-bold tracking-tightest ${onDark ? 'text-white' : 'text-forest-950'}`}
      >
        SpatioAgri
      </span>
    </div>
  );
}
