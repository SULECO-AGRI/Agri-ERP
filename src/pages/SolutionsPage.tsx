import { useState } from 'react';
import {
  Smartphone,
  Users,
  Clock,
  CheckSquare,
  Sprout,
  Package,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

type CategoryFilter = 'all' | 'workforce' | 'operations' | 'finance';

export function SolutionsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const { ref, shown } = useReveal();

  return (
    <div className="bg-white min-h-screen pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ================= HERO HEADER ================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-forest-950/[0.04] px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest text-emerald-deep border border-forest-950/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep" />
            Agri ERP Solutions
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-forest-950 leading-[1.06]">
            Every field operation. <br />
            <span className="shimmer-text">On your fingertips.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-forest-950/65 leading-relaxed max-w-2xl">
            A unified mobile and cloud operating system for commercial plantations. Manage attendance, tasks, harvests, inventory, and payroll in real time.
          </p>

          {/* Minimal Filter Switcher */}
          <div className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-forest-950/10 bg-cream/50 p-1.5 shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setFilter('workforce')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === 'workforce'
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              Workforce &amp; Attendance
            </button>
            <button
              onClick={() => setFilter('operations')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === 'operations'
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              Tasks &amp; Harvest
            </button>
            <button
              onClick={() => setFilter('finance')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === 'finance'
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'text-forest-950/70 hover:text-forest-950'
              }`}
            >
              Inventory &amp; Salary
            </button>
          </div>
        </div>

        {/* ================= BENTO GRID SOLUTIONS ================= */}
        <div
          ref={ref}
          className={`mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 transition-all duration-700 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* ================= 1. HERO TILE: TRACK FIELD ON FINGERTIPS (Large 8 cols) ================= */}
          {(filter === 'all' || filter === 'operations') && (
            <div className="lg:col-span-8 rounded-3xl border border-forest-950/[0.08] bg-white p-7 sm:p-9 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                    <Smartphone className="h-4 w-4" />
                    <span>01 · Real-Time Field Control</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                    Live Sync
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-forest-950">
                  Track the entire field on your fingertips
                </h2>
                <p className="mt-2 text-sm text-forest-950/70 leading-relaxed max-w-xl">
                  Supervisors log tree counts, block health, and crew status directly from mobile devices in the field — with instant offline storage and automatic cloud synchronization.
                </p>
              </div>

              {/* Minimalist Micro-UI Widget */}
              <div className="mt-6 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs font-semibold text-forest-950 pb-3 border-b border-forest-950/[0.06]">
                  <span>Estate Field Radar · Division 03</span>
                  <span className="font-mono text-emerald-deep font-bold">GPS: 6.9271° N, 79.8612° E</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white p-2.5 border border-forest-950/[0.05]">
                    <div className="text-lg font-bold text-forest-950">18/18</div>
                    <div className="text-[10px] text-forest-950/50 mt-0.5">Blocks Active</div>
                  </div>
                  <div className="rounded-xl bg-white p-2.5 border border-forest-950/[0.05]">
                    <div className="text-lg font-bold text-emerald-deep">100%</div>
                    <div className="text-[10px] text-forest-950/50 mt-0.5">Cadastral Sync</div>
                  </div>
                  <div className="rounded-xl bg-white p-2.5 border border-forest-950/[0.05]">
                    <div className="text-lg font-bold text-forest-950">0.2s</div>
                    <div className="text-[10px] text-forest-950/50 mt-0.5">Offline Latency</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 2. ATTENDANCE (4 cols) ================= */}
          {(filter === 'all' || filter === 'workforce') && (
            <div className="lg:col-span-4 rounded-3xl border border-forest-950/[0.08] bg-white p-7 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                  <Clock className="h-4 w-4" />
                  <span>02 · Attendance</span>
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-forest-950">
                  Daily Attendance
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Fast muster roll call, geofenced mobile check-ins, and shift records.
                </p>
              </div>

              {/* Minimalist Micro-UI Widget */}
              <div className="mt-6 space-y-2 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-forest-950">Muster Roll Status</span>
                  <span className="text-[11px] font-bold text-emerald-deep">98% Present</span>
                </div>
                <div className="h-2 w-full bg-forest-950/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[98%]" />
                </div>
                <div className="flex justify-between text-[11px] text-forest-950/50 pt-1">
                  <span>48 Checked In</span>
                  <span>1 On Leave</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= 3. EMPLOYEE MANAGEMENT (4 cols) ================= */}
          {(filter === 'all' || filter === 'workforce') && (
            <div className="lg:col-span-4 rounded-3xl border border-forest-950/[0.08] bg-white p-7 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                  <Users className="h-4 w-4" />
                  <span>03 · Employees</span>
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-forest-950">
                  Employee Management
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Worker directories, supervisor hierarchy, and division crew allocations.
                </p>
              </div>

              {/* Minimalist Crew List */}
              <div className="mt-6 space-y-2 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-3">
                <div className="flex items-center justify-between text-xs py-1 border-b border-forest-950/[0.05]">
                  <span className="font-medium text-forest-950">Division Supervisors</span>
                  <span className="font-mono text-[11px] text-forest-950/50">4 Active</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-forest-950/[0.05]">
                  <span className="font-medium text-forest-950">Harvest Climbers</span>
                  <span className="font-mono text-[11px] text-forest-950/50">18 Active</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="font-medium text-forest-950">Field Laborers</span>
                  <span className="font-mono text-[11px] text-forest-950/50">26 Active</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= 4. TASK MANAGEMENT (4 cols) ================= */}
          {(filter === 'all' || filter === 'operations') && (
            <div className="lg:col-span-4 rounded-3xl border border-forest-950/[0.08] bg-white p-7 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                  <CheckSquare className="h-4 w-4" />
                  <span>04 · Tasks</span>
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-forest-950">
                  Task Management
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Assign, schedule, and verify field work orders across every block.
                </p>
              </div>

              {/* Task Checklist Widget */}
              <div className="mt-6 space-y-2 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-3.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="grid h-4 w-4 place-items-center rounded bg-emerald-500 text-white">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-forest-950/80 font-medium">Drone VRA Spraying</span>
                  <span className="ml-auto text-[10px] text-emerald-deep font-bold">Done</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded border border-forest-950/20" />
                  <span className="text-forest-950/80 font-medium">Weeding Block 04</span>
                  <span className="ml-auto text-[10px] text-amber-600 font-bold">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded border border-forest-950/20" />
                  <span className="text-forest-950/80 font-medium">Pruning Stand 12</span>
                  <span className="ml-auto text-[10px] text-forest-950/40">Queued</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= 5. HARVEST MANAGEMENT (4 cols) ================= */}
          {(filter === 'all' || filter === 'operations') && (
            <div className="lg:col-span-4 rounded-3xl border border-forest-950/[0.08] bg-white p-7 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                  <Sprout className="h-4 w-4" />
                  <span>05 · Harvest</span>
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-forest-950">
                  Harvest Management
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Log yields, tree batches, quality grading, and block productivity.
                </p>
              </div>

              {/* Minimalist Harvest Metric */}
              <div className="mt-6 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-forest-950 tracking-tight">
                  84,200 <span className="text-xs font-semibold text-forest-950/50">units</span>
                </div>
                <div className="text-[11px] text-forest-950/60 mt-1">Logged this cycle · 100% Traceable</div>
              </div>
            </div>
          )}

          {/* ================= 6. INVENTORY MANAGEMENT (6 cols) ================= */}
          {(filter === 'all' || filter === 'finance') && (
            <div className="lg:col-span-6 rounded-3xl border border-forest-950/[0.08] bg-white p-7 sm:p-8 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                  <Package className="h-4 w-4" />
                  <span>06 · Inventory</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-forest-950">
                  Inventory Management
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Central field store ledger for fertilizers, tools, agrochemicals, and wholesale dispatch manifests.
                </p>
              </div>

              {/* Minimalist Inventory Rows */}
              <div className="mt-6 space-y-2 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-4 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-forest-950/[0.06]">
                  <span className="font-semibold text-forest-950">Fertilizer N-P-K (50kg)</span>
                  <span className="font-mono font-bold text-forest-950">340 Bags (Adequate)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-forest-950/[0.06]">
                  <span className="font-semibold text-forest-950">Drone Battery Packs</span>
                  <span className="font-mono font-bold text-emerald-deep">12 Units (Ready)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-forest-950">Wholesale Dispatch Manifests</span>
                  <span className="font-mono font-bold text-forest-950">28 Shipments</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= 7. SALARY & PAYROLL (6 cols) ================= */}
          {(filter === 'all' || filter === 'finance') && (
            <div className="lg:col-span-6 rounded-3xl border border-forest-950/[0.08] bg-white p-7 sm:p-8 shadow-xs hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-deep">
                  <Wallet className="h-4 w-4" />
                  <span>07 · Salary &amp; Payroll</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-forest-950">
                  Salary &amp; Piece-Rate Payroll
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Automate daily wages and piece-rate harvest pay directly linked to logged counts.
                </p>
              </div>

              {/* Minimalist Formula Calculation */}
              <div className="mt-6 rounded-2xl bg-[#f8faf7] border border-forest-950/[0.06] p-4 text-xs font-mono">
                <div className="flex items-center justify-between text-forest-950/60 pb-1.5 border-b border-forest-950/[0.06]">
                  <span>Daily Wage + Piece-Rate Multiplier</span>
                  <span>Automated</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-forest-950 font-bold">
                  <span>Audit-Ready Export</span>
                  <span className="text-emerald-deep">PDF &amp; Excel Instant</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-forest-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-accent uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Enterprise Grade
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to manage your plantation with precision?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/60 max-w-lg">
                Book a live walkthrough to see how our modules connect seamlessly on your estate.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-accent px-6 py-3.5 text-xs font-semibold text-white shadow-glow-soft hover:bg-emerald-deep hover:shadow-glow transition-all active:scale-[0.98]"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
