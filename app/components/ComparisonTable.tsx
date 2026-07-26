import { Check, X, Minus } from 'lucide-react';

interface Feature {
  label: string;
  mitrev: boolean | 'partial';
  templates: boolean | 'partial';
  agency: boolean | 'partial';
}

const features: Feature[] = [
  { label: 'Custom design', mitrev: true, templates: false, agency: true },
  { label: 'Affordable price', mitrev: true, templates: true, agency: false },
  { label: 'Fast delivery (7-14 days)', mitrev: true, templates: true, agency: false },
  { label: 'Unique hand-written code', mitrev: true, templates: false, agency: true },
  { label: 'Direct personal contact', mitrev: true, templates: false, agency: false },
  { label: 'SEO optimized', mitrev: true, templates: 'partial', agency: true },
  { label: 'Scalable & flexible', mitrev: true, templates: false, agency: true },
  { label: 'No monthly fees', mitrev: true, templates: false, agency: true },
  { label: 'Full code ownership', mitrev: true, templates: false, agency: true },
  { label: 'Performance optimized', mitrev: true, templates: 'partial', agency: true },
];

const Icon = ({ value }: { value: boolean | 'partial' }) => {
  if (value === true) return <Check size={18} strokeWidth={2} className="text-green-400 mx-auto" />;
  if (value === false) return <X size={18} strokeWidth={2} className="text-red-400/60 mx-auto" />;
  return <Minus size={18} strokeWidth={2} className="text-yellow-400/60 mx-auto" />;
};

export default function ComparisonTable() {
  return (
    <section className="md:pt-24 md:pb-24 pt-16 pb-16 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center md:mb-16 mb-10">
          <p className="text-xs tracking-[4px] text-neutral-500 md:mb-4 mb-3">Why choose us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Why <span className="text-purple-400">Mitrev Design</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            See how we compare to template builders and large agencies
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto md:rounded-xl rounded-0 border border-white/10">
          <table className="w-full text-sm">

            {/* Header row */}
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-5 px-6 text-neutral-400 font-normal w-[40%]">Feature</th>
                <th className="py-5 px-6 text-center w-[20%]">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-white font-semibold">Mitrev Design</span>
                    <span className="text-[10px] hidden md:inline-flex tracking-[2px] uppercase text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">You are here</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-center text-neutral-400 font-normal w-[20%]">
                  Wix / Squarespace
                </th>
                <th className="py-5 px-6 text-center text-neutral-400 font-normal w-[20%]">
                  Big Agency
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${
                    i % 2 === 0 ? 'bg-white/[0.01]' : ''
                  }`}
                >
                  <td className="py-4 px-6 text-neutral-300">{feature.label}</td>
                  <td className="py-4 px-6 text-center bg-purple-400/[0.03]">
                    <Icon value={feature.mitrev} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Icon value={feature.templates} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Icon value={feature.agency} />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-6 text-xs text-neutral-500">
          <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Included</span>
          <span className="flex items-center gap-2"><X size={14} className="text-red-400/60" /> Not included</span>
          <span className="flex items-center gap-2"><Minus size={14} className="text-yellow-400/60" /> Partial</span>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#book-a-call"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-xs tracking-[2px] uppercase px-8 py-4 rounded-lg transition-colors"
          >
            Get a free estimate
          </a>
        </div>

      </div>
    </section>
  );
}