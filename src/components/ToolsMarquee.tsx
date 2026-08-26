import React from 'react';

const MARQUEE_ITEMS = [
  { name: 'LinkedIn Sales Navigator', tag: 'Prospecting' },
  { name: 'Apollo.io', tag: 'B2B Database' },
  { name: 'Hunter.io', tag: 'Domain Search' },
  { name: 'NeverBounce', tag: 'SMTP Verify' },
  { name: 'ZeroBounce', tag: 'Deliverability' },
  { name: 'HubSpot CRM', tag: 'Pipeline' },
  { name: 'Salesforce', tag: 'Enterprise CRM' },
  { name: 'Zoho CRM', tag: 'Data Sync' },
  { name: 'Google Sheets & Excel', tag: 'Automation' },
  { name: 'Airtable', tag: 'Relational DB' },
  { name: 'Make / Integromat', tag: 'Workflow Auto' },
  { name: 'Zapier', tag: 'Webhooks' },
  { name: 'React & Netlify', tag: 'Web Development' },
  { name: 'Debounce.io', tag: 'Validation' }
];

export const ToolsMarquee: React.FC = () => {
  return (
    <div className="py-8 bg-stone-900 text-white overflow-hidden border-y border-stone-800 relative select-none">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-stone-800/80 border border-stone-700/60 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-stone-100">{item.name}</span>
            <span className="text-[10px] font-mono text-orange-400 bg-orange-500/15 px-2 py-0.5 rounded-md border border-orange-500/30">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
