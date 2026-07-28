import { Check, X, Minus } from 'lucide-react';
import { useTranslations } from "next-intl";


const Icon = ({ value }: { value: boolean | 'partial' }) => {
  if (value === true) return <Check size={18} strokeWidth={2} className="text-green-400 mx-auto" />;
  if (value === false) return <X size={18} strokeWidth={2} className="text-red-400/60 mx-auto" />;
  return <Minus size={18} strokeWidth={2} className="text-yellow-400/60 mx-auto" />;
};

export default function ComparisonTable() {
  const t = useTranslations ('ComparisonTable');
  return (
  <section className="md:pt-24 md:pb-24 pt-16 pb-16 px-6 md:px-12 bg-[#0a0a0a]">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center md:mb-16 mb-10">
        <p className="text-xs tracking-[4px] text-neutral-500 md:mb-4 mb-3">{t('comparison_eyebrow')}</p>
        <h2 className="text-4xl md:text-4xl font-bold text-white leading-tight mb-4">
          {t('comparison_title')} <span className="text-purple-400">{t('comparison_title_span')}</span>
        </h2>
        <p className="text-neutral-400 text-sm max-w-md mx-auto">
          {t('comparison_title_2')}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto md:rounded-xl rounded-0 border border-white/10">
        <table className="w-full text-sm">

          {/* Header row */}
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-5 px-6 text-neutral-400 font-normal w-[40%]">{t('comparison_span')}</th>
              <th className="py-5 px-6 text-center w-[20%]">
                <div className="inline-flex flex-col items-center gap-1">
                  <span className="text-white font-semibold">{t('comparison_title_span')}</span>
                  <span className="text-[10px] hidden md:inline-flex tracking-[2px] uppercase text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">{t('comparison_span_2')}</span>
                </div>
              </th>
              <th className="py-5 px-6 text-center text-neutral-400 font-normal w-[20%]">Wix / Squarespace</th>
              <th className="py-5 px-6 text-center text-neutral-400 font-normal w-[20%]">{t('comparison_span_3')}</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02] bg-white/[0.01]">
              <td className="py-4 px-6 text-neutral-300">{t('custom_design')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
              <td className="py-4 px-6 text-neutral-300">{t('affordable_price')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02] bg-white/[0.01]">
              <td className="py-4 px-6 text-neutral-300">{t('fast_delivery')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
              <td className="py-4 px-6 text-neutral-300">{t('unique_code')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02] bg-white/[0.01]">
              <td className="py-4 px-6 text-neutral-300">{t('direct_contact')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
              <td className="py-4 px-6 text-neutral-300">{t('seo_optimized')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={'partial'} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02] bg-white/[0.01]">
              <td className="py-4 px-6 text-neutral-300">{t('scalable')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
              <td className="py-4 px-6 text-neutral-300">{t('no_fees')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02] bg-white/[0.01]">
              <td className="py-4 px-6 text-neutral-300">{t('code_ownership')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={false} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
              <td className="py-4 px-6 text-neutral-300">{t('performance')}</td>
              <td className="py-4 px-6 text-center bg-purple-400/[0.03]"><Icon value={true} /></td>
              <td className="py-4 px-6 text-center"><Icon value={'partial'} /></td>
              <td className="py-4 px-6 text-center"><Icon value={true} /></td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6 text-xs text-neutral-500">
        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> {t('included')}</span>
        <span className="flex items-center gap-2"><X size={14} className="text-red-400/60" /> {t('not_included')}</span>
        <span className="flex items-center gap-2"><Minus size={14} className="text-yellow-400/60" /> {t('partial')}</span>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#book-a-call"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-xs tracking-[2px] uppercase px-8 py-4 rounded-lg transition-colors"
        >
          {t('cta')}
        </a>
      </div>

    </div>
  </section>
);
};