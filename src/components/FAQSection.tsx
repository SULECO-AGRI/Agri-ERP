import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does AgriCore integrate with existing tractor and machinery telemetry?",
    answer: "AgriCore links directly with major machinery APIs (including John Deere Operations Center, Climate FieldView, and ISO-compliant terminals) to capture fuel consumption, operator workflows, and machinery hours without requiring auxiliary hardware."
  },
  {
    question: "Can the crop management module work completely offline in remote field blocks?",
    answer: "Yes. The AgriCore mobile application is built offline-first. Field crews can log scouting observations, fuel slips, and soil moisture audits in zero-connectivity areas. Once a network connection is detected, all logs synthesize automatically to the central ERP ledger."
  },
  {
    question: "How accurate are the satellite NDVI zoning maps and how often do they refresh?",
    answer: "Satellite imagery is synthesized from Sentinel-2 and Landsat-8 streams, providing 10-meter spatial resolution. Cloud-masked crop vigor index maps refresh every 3 to 5 days, depending on regional satellite pass schedules and cloud cover."
  },
  {
    question: "Does AgriCore support custom ledger rules for multi-entity or tenant farm structures?",
    answer: "Absolutely. AgriCore is designed for complex commercial operations. You can configure custom share-rent contracts, multi-tenant division rules, and cost-share allocations so that field expenses automatically split between owners and operators in real time."
  },
  {
    question: "What hardware integrations are required for silo and grain cart telemetry?",
    answer: "Silo bin capacity checks integrate directly with bin laser distance scanners or load cells. Harvest cart weight logs interface with standard indicators (such as Scale-Tec or Libra Cart) via Bluetooth or mobile hotspots, syncing cart tickets directly to silos."
  },
  {
    question: "How long does a standard enterprise ERP deployment take?",
    answer: "Due to preconfigured operational templates tailored to specific farming types (e.g. CEA greenhouses, open fields, orchards), a typical AgriCore integration is completed in 3 to 6 weeks. This includes importing historical ledger accounts and connecting active field telemetry."
  }
];

export function FAQSection() {
  const { ref, shown } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32 border-t border-forest-950/[0.06]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid grid-fade opacity-30 pointer-events-none" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-emerald-accent/[0.03] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div 
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-deep">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tightest text-forest-950 sm:text-4xl">
            Frequently Asked <span className="shimmer-text">Questions</span>
          </h2>
          <p className="mt-4 text-sm text-forest-950/60 leading-relaxed">
            Quick, detailed answers regarding AgriCore ERP telemetry integrations, offline field syncing, and billing rules.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div 
          className={`mt-16 space-y-4 transition-all duration-1000 delay-150 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-3xl border border-forest-950/5 bg-white transition-all duration-300 shadow-sm ${
                  isOpen ? 'ring-2 ring-emerald-deep/10 shadow-md' : 'hover:border-forest-950/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors ${
                      isOpen ? 'bg-forest-950 text-emerald-accent' : 'bg-forest-950/[0.03] text-forest-950/40'
                    }`}>
                      <HelpCircle className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-sm font-bold text-forest-950 pr-4">{faq.question}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-forest-950/40 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-forest-950' : ''
                  }`} />
                </button>

                {/* Animated accordion panel */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[32rem] border-t border-forest-950/5' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm leading-relaxed text-forest-950/70 bg-cream/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
