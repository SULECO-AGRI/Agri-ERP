import { useReveal } from '../hooks/useReveal';
import type { Page } from '../nav';

interface SolutionItem {
  title: string;
  desc: string;
  image: string;
}

const CORE_SOLUTIONS: SolutionItem[] = [
  {
    title: 'Employee Management',
    desc: 'Keep track of all your workers, supervisors, and field teams in one place.',
    image: '/images/modules/farm_workforce.jpg',
  },
  {
    title: 'Daily Attendance',
    desc: 'Mark daily attendance quickly from the field and see who is at work.',
    image: '/images/modules/farm_managers.jpg',
  },
  {
    title: 'Task Management',
    desc: 'Assign daily jobs to your teams and track what has been completed.',
    image: '/images/drone_spraying.png',
  },
  {
    title: 'Harvest Management',
    desc: 'Record daily crop collections, weights, and counts right from the field.',
    image: '/images/modules/harvest_records.jpg',
  },
  {
    title: 'Inventory Management',
    desc: 'Know what fertilizers, tools, and materials you have in stock at any time.',
    image: '/images/modules/sales_logistics.jpg',
  },
  {
    title: 'Salary & Payroll',
    desc: 'Calculate daily wages and harvest pay easily without manual paperwork.',
    image: '/images/modules/reports_compliance.jpg',
  },
];

export function SolutionsPage({ onNavigate: _onNavigate }: { onNavigate: (p: Page) => void }) {
  const { ref, shown } = useReveal();

  return (
    <div className="bg-white min-h-screen pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ================= HERO HEADER ================= */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-forest-950 leading-[1.06]">
            What We <span className="shimmer-text">Offer.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-950/65 max-w-2xl leading-relaxed">
            Every field operation on your fingertips.
          </p>
        </div>

        {/* ================= SOLUTIONS GRID ================= */}
        <div
          ref={ref}
          className={`mt-10 sm:mt-14 transition-all duration-700 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Hero Feature: Track Entire Field */}
          <div className="rounded-3xl border border-forest-950/[0.08] bg-[#f8faf7] p-6 sm:p-8 lg:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-forest-950 leading-tight">
                  Track the entire field on your fingertips
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-forest-950/70 leading-relaxed max-w-lg">
                  See everything happening across your estate, right from your phone.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-sm bg-forest-950">
                  <img
                    src="/images/modules/gis_monitoring.jpg"
                    alt="Track the entire field on your fingertips"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-forest-950/10 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 6 Core Solutions in a 3-column Grid */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SOLUTIONS.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-forest-950/[0.08] bg-white p-5 sm:p-6 hover:border-forest-950/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-forest-950/5 mb-5 shadow-xs">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-forest-950/10 rounded-2xl pointer-events-none" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-forest-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
