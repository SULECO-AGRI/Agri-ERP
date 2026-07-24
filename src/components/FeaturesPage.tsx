import { useState } from 'react';
import { 
  Coins, TrendingUp, Settings, Truck, Sprout, Package, 
  Check, ArrowRight, Activity, ShieldCheck, Database, Cpu 
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface FeatureItem {
  title: string;
  desc: string;
}

interface ModuleDetails {
  id: string;
  title: string;
  short: string;
  metric: string;
  icon: any;
  overview: string;
  colorClass: string;
  accentBg: string;
  subFeatures: FeatureItem[];
  flowSteps: { label: string; icon: any; desc: string }[];
}

const detailedModules: ModuleDetails[] = [
  {
    id: 'financial',
    title: 'Financial Management',
    short: 'Financial',
    metric: 'Capital Accrual: $1.2M',
    icon: Coins,
    colorClass: 'text-blue-500',
    accentBg: 'bg-blue-500/5 border-blue-500/10',
    overview: 'Activity-based cost accounting per field block, crop batch, and employee. Track farm expenses, live cashflows, and balance sheets in real time with integrated ledger structures.',
    subFeatures: [
      { title: 'Sub-Block Ledgering', desc: 'Break down operational ledger costs to individual hectare units and block boundaries.' },
      { title: 'Fleet Hour Attribution', desc: 'Sync machinery operation hours, fuel usage, and depreciation logs directly to field profit statements.' },
      { title: 'Live Ledger Synthesis', desc: 'Reconcile purchases, ledger allocations, and employee labor payments automatically at the edge.' },
      { title: 'Crop Hedging Dashboard', desc: 'Monitor commodity futures pricing and hedge positions synced with active harvest estimates.' },
      { title: 'Input Cost Amortization', desc: 'Amortize fertilizer, soil preparation, and seed expenses across growth cycles for accurate P&L tracking.' },
      { title: 'Contract-Linked Billings', desc: 'Link wholesale agreements and field scales receipts to automate customer ledger entries.' },
    ],
    flowSteps: [
      { label: 'Field Inputs Log', icon: Database, desc: 'Telemetry tracks seed, fuel, and labor usage at the field.' },
      { label: 'Cost Allocation', icon: Cpu, desc: 'AgriCore ledger maps expense entries directly to block coordinates.' },
      { label: 'Profit Statement', icon: Activity, desc: 'Live dashboards show real-time profit and loss metrics.' },
    ]
  },
  {
    id: 'sales',
    title: 'Sales & Contract',
    short: 'Sales',
    metric: 'Active Contracts: 42',
    icon: TrendingUp,
    colorClass: 'text-emerald-500',
    accentBg: 'bg-emerald-500/5 border-emerald-500/10',
    overview: 'Manage crop trade contracts, wholesale purchase agreements, futures pricing, and live market hedging. Fully synchronized with your harvest projections.',
    subFeatures: [
      { title: 'Fulfillment Forecasts', desc: 'Auto-calculate contract supply capabilities against active satellite NDVI growth forecasts.' },
      { title: 'Futures Hedging API', desc: 'Lock in pricing tiers with automated trading triggers tied to international commodity markets.' },
      { title: 'Silo Weight Integration', desc: 'Instantly execute contracts when grain scale tickets are registered at the silo elevatory nodes.' },
      { title: 'Custom Billing Matrices', desc: 'Generate multi-tier wholesale contracts, volume discounts, and freight-deduction schedules.' },
      { title: 'Multi-Currency Trading', desc: 'Trade commodities across global currencies with live hedging spreads.' },
      { title: 'Regulatory Audit Trails', desc: 'Maintain complete transaction logs for organic verification and trade compliance audits.' },
    ],
    flowSteps: [
      { label: 'Fulfillment Check', icon: Database, desc: 'AI verifies harvest yields against contract volume.' },
      { label: 'Market Hedging', icon: Cpu, desc: 'Automated futures trigger locks in wholesale pricing.' },
      { label: 'Billing Dispatch', icon: ShieldCheck, desc: 'Ledger registers weight scale tickets and sends invoices.' },
    ]
  },
  {
    id: 'operations',
    title: 'Operations Management',
    short: 'Operations',
    metric: 'Active Operators: 8',
    icon: Settings,
    colorClass: 'text-amber-500',
    accentBg: 'bg-amber-500/5 border-amber-500/10',
    overview: 'Schedule work orders, track machinery hours, fuel consumption, and operational workflow steps. Integrates weather forecast data to automate spray alerts.',
    subFeatures: [
      { title: 'Weather Spray Logic', desc: 'Auto-verify regional wind speeds, temperature spikes, and rain alerts before dispatching chemical orders.' },
      { title: 'Fleet Telemetry Linkage', desc: 'Track machinery speed, GPS routes, and active operational hours across tractors and harvesters.' },
      { title: 'Work Order Flow', desc: 'Coordinate crew assignments and variable-rate maps directly to in-cab operator consoles.' },
      { title: 'Automated Spray Reports', desc: 'Log fertilizer formulations, EPA-compliant weather metrics, and applicator IDs on dispatch.' },
      { title: 'Preventative Maintenance', desc: 'Schedule machinery servicing alerts based on live engine hours and telemetry status.' },
      { title: 'Offline Field Records', desc: 'Enable crews to log task completions, photos, and soil updates in remote areas with offline sync.' },
    ],
    flowSteps: [
      { label: 'Weather Analysis', icon: Database, desc: 'Sensors monitor wind and temperature limits for spraying.' },
      { label: 'Order Dispatch', icon: Cpu, desc: 'Digital work order and map parameters sent to machine cabin.' },
      { label: 'Compliance Audit', icon: ShieldCheck, desc: 'AgriCore locks completion logs for regulatory records.' },
    ]
  },
  {
    id: 'shipping',
    title: 'Shipping & Planning',
    short: 'Shipping & Planning',
    metric: 'Logistics Sync: 380ms',
    icon: Truck,
    colorClass: 'text-cyan-500',
    accentBg: 'bg-cyan-500/5 border-cyan-500/10',
    overview: 'Streamline logistics from harvest cart to silo elevators. Coordinates truck dispatch, route optimization, scale ticket records, and cold-chain temperature logs.',
    subFeatures: [
      { title: 'Optimal Dispatch Routing', desc: 'Optimize truck dispatch cycles based on active harvester positions and silo waiting queues.' },
      { title: 'Grain Cart Integration', desc: 'Capture field grain weights at loadout to prevent scale ticketing discrepancies.' },
      { title: 'Cold-Chain VPD Trackers', desc: 'Monitor reefer compartment temperature, moisture, and VPD continuously from farm to warehouse.' },
      { title: 'Silo Gate Telemetry', desc: 'Log elevator tickets, moisture grades, and grain storage bin coordinates on delivery.' },
      { title: 'Freight Log Optimization', desc: 'Automate freight cost calculations, fuel surcharges, and contractor payments.' },
      { title: 'Digital Scale Tickets', desc: 'Generate paperless digital scale receipts instantly shared with sales ledgers.' },
    ],
    flowSteps: [
      { label: 'Field Cart Scan', icon: Database, desc: 'Weight scales register load values at harvest site.' },
      { label: 'Route Monitoring', icon: Cpu, desc: 'GPS tracks cold-chain transport compartment temperatures.' },
      { label: 'Silo Storage Sync', icon: ShieldCheck, desc: 'Elevators scan grades and route grain to optimal silos.' },
    ]
  },
  {
    id: 'crop',
    title: 'Crop Management',
    short: 'Crop',
    metric: 'NDVI Index: 0.78',
    icon: Sprout,
    colorClass: 'text-green-500',
    accentBg: 'bg-green-500/5 border-green-500/10',
    overview: 'Track growth progress, growing degree days (GDD), soil moisture inputs, fertilizer recipes, and field boundaries mapped via automated satellite zoning.',
    subFeatures: [
      { title: 'NDVI Growth Metrics', desc: 'Receive weekly satellite scans mapping field crop vigor indexes to detect anomalies.' },
      { title: 'GDD Accumulation Logic', desc: 'Model growth stages and project harvest schedules using heat unit calculations.' },
      { title: 'Soil Sensor Telemetry', desc: 'Sync soil water levels and EC probes to optimize micro-irrigation schedules.' },
      { title: 'Fertilizer Recipes Editor', desc: 'Design nutrient mixtures matched to specific soil deficiency profiles.' },
      { title: 'Boundary Parcel Zoning', desc: 'Auto-zone field sub-boundaries from parcel geometry maps for localized tracking.' },
      { title: 'Crop Stress Warning', desc: 'Get automated warnings when leaf temperature or soil moisture deviates from baseline thresholds.' },
    ],
    flowSteps: [
      { label: 'NDVI Scanning', icon: Database, desc: 'Satellites scan fields to verify crop vigor indices.' },
      { label: 'Probe Analysis', icon: Cpu, desc: 'Sensors feed soil EC and water data to growth models.' },
      { label: 'Nutrient Dosing', icon: ShieldCheck, desc: 'Micro-irrigation pumps dosage based on recipe models.' },
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    short: 'Inventory',
    metric: 'Silo Level: 94.2%',
    icon: Package,
    colorClass: 'text-purple-500',
    accentBg: 'bg-purple-500/5 border-purple-500/10',
    overview: 'Automated bin telemetry monitors grain volume and moisture inside silos. Manage seed lots, chemicals, fertilizer stocks, and purchase triggers.',
    subFeatures: [
      { title: 'Laser Silo Volume Checks', desc: 'Monitor bin stock volumes in real-time with laser telemetry sensors.' },
      { title: 'Seed Lot Registry', desc: 'Track seed seed batches, germination rates, and treatment logs from planting forward.' },
      { title: 'Chemical Inventory Control', desc: 'Manage restricted chemicals with regulatory logs and restricted access controls.' },
      { title: 'Reorder Trigger Logic', desc: 'Configure automatic purchase orders when fertilizer or seed falls below baseline safety stock levels.' },
      { title: 'Moisture Telemetry Sync', desc: 'Track grain temperature and moisture inside silos to prevent spoil logs.' },
      { title: 'Multi-Location Warehousing', desc: 'Manage stocks across multiple operations yards, barns, and storage silos.' },
    ],
    flowSteps: [
      { label: 'Laser Bin Scan', icon: Database, desc: 'Moisture and laser level sensors inspect bin capacity.' },
      { label: 'Stock Reorder', icon: Cpu, desc: 'Safety levels trigger automated supplier purchase orders.' },
      { label: 'Batch Handoff', icon: ShieldCheck, desc: 'RFID scans register batch transfers to regional barns.' },
    ]
  },
];

export function FeaturesPage() {
  const { ref, shown } = useReveal();
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeModule = detailedModules[activeTab];

  return (
    <div className="min-h-screen bg-cream pt-28 pb-24 sm:pb-32 overflow-hidden">
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-30" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-emerald-accent/[0.04] blur-3xl" />

      <div ref={ref} className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div 
          className={`max-w-3xl transition-all duration-1000 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            Enterprise Core Modules
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl md:text-6xl leading-[1.05]">
            Explore <span className="shimmer-text">functional capabilities</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-forest-950/65 max-w-2xl">
            AgriCore unifies all aspects of commercial farming operations. Select a functionality below to analyze its sub-features, metrics, and operations flow.
          </p>
        </div>

        {/* 1. Interactive Modules Tab Explorer */}
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Interactive Tab Buttons */}
          <div className="lg:col-span-4 space-y-2.5">
            {detailedModules.map((m, index) => {
              const isActive = index === activeTab;
              const TabIcon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-forest-950 text-white border-forest-950 shadow-md translate-x-1.5'
                      : 'bg-white hover:bg-forest-950/[0.01] hover:border-forest-950/10 text-forest-950 border-forest-950/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                      isActive ? 'bg-white/10 text-emerald-accent' : 'bg-forest-950/[0.03] text-forest-950/60'
                    }`}>
                      <TabIcon className="h-5.5 w-5.5" />
                    </div>
                    <span className="text-sm font-bold">{m.short}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono tracking-wide ${isActive ? 'text-emerald-accent/90' : 'text-forest-950/40'}`}>
                      {m.metric.split(':')[0]}
                    </span>
                    <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? 'translate-x-0.5' : 'opacity-30'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Explorer View Card */}
          <div className="lg:col-span-8 mt-8 lg:mt-0">
            <div 
              key={activeTab} 
              className="bg-white border border-forest-950/5 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8 animate-fadeUp"
            >
              {/* Header inside detail card */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forest-950/5 pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-950 text-emerald-accent shadow-sm">
                    <activeModule.icon className="h-6.5 w-6.5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-forest-950 leading-tight">{activeModule.title}</h2>
                    <span className="text-[10px] font-mono text-emerald-deep font-bold tracking-wider uppercase">Active Module Status</span>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-deep/[0.06] border border-emerald-deep/10 px-3.5 py-1.5 font-mono text-xs text-emerald-deep font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-deep" />
                  {activeModule.metric}
                </div>
              </div>

              {/* Description Overview */}
              <div>
                <h3 className="text-xs font-bold text-forest-950/40 uppercase tracking-wide">Module Overview</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-950/70">
                  {activeModule.overview}
                </p>
              </div>

              {/* Sub-features Checklist */}
              <div>
                <h3 className="text-xs font-bold text-forest-950/40 uppercase tracking-wide mb-4">Core Sub-Modules & Capabilities</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {activeModule.subFeatures.map((sf, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-cream border border-forest-950/[0.02]">
                      <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-deep/10 text-emerald-deep">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-forest-950 leading-tight">{sf.title}</h4>
                        <p className="text-[10.5px] leading-normal text-forest-950/50 mt-1">{sf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operations flow pipeline */}
              <div className="border-t border-forest-950/5 pt-6">
                <h3 className="text-xs font-bold text-forest-950/40 uppercase tracking-wide mb-4">Operational Data Pipeline</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {activeModule.flowSteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={idx} className="relative flex flex-col items-center text-center p-4 rounded-2xl border border-forest-950/[0.04] bg-cream/40">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-forest-950 text-white mb-3">
                          <StepIcon className="h-5.5 w-5.5" />
                        </div>
                        <h4 className="text-xs font-bold text-forest-950">{step.label}</h4>
                        <p className="text-[10px] leading-normal text-forest-950/50 mt-1 max-w-[150px]">{step.desc}</p>
                        {idx < 2 && (
                          <div className="hidden sm:block absolute top-9 -right-3.5 z-10 text-forest-950/20">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 2. Full Overview Grid list below */}
        <div className="mt-24 sm:mt-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
              Full Module Matrix
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-forest-950">
              Complete Functional Overview
            </h2>
            <p className="mt-3 text-sm text-forest-950/60 leading-relaxed">
              Scan all operational modules side-by-side to understand the full scope of AgriCore.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {detailedModules.map((m) => (
              <div 
                key={m.id} 
                className="bg-white border border-forest-950/5 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-forest-950 text-emerald-accent">
                      <m.icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-forest-950">{m.title}</h3>
                      <span className="font-mono text-[9px] text-emerald-deep font-bold tracking-wide uppercase">{m.metric.split(':')[0]}</span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-forest-950/65">
                    {m.overview}
                  </p>
                </div>

                <div className="mt-6 border-t border-forest-950/5 pt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-forest-950/40">Sync Status: Active</span>
                  <span className="text-[10px] font-bold text-emerald-deep flex items-center gap-1">
                    {m.metric.split(':')[1]?.trim() || m.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
