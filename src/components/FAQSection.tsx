import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How do you collect and verify B2B & Shopify E-Commerce leads?",
    answer: "I extract decision-makers (CEOs, Founders, CMOs) using LinkedIn Sales Navigator with Boolean search filters. Every contact is multi-pass verified through Apollo.io, Hunter.io, and NeverBounce to guarantee zero bounce rates and 100% accuracy before delivery."
  },
  {
    question: "What industries and company sizes do you specialize in?",
    answer: "I specialize in E-Commerce & Shopify Brands, Healthcare & Nursing Facilities, Real Estate, B2B SaaS, and Professional Services across USA, UK, Canada, and global markets."
  },
  {
    question: "How do you handle CRM data cleaning and deduplication?",
    answer: "I perform deep audit, deduplication, standardized phone/email formatting, and custom property mapping across HubSpot, Salesforce, Zoho CRM, and Excel/Google Sheets to maintain 99.9% database hygiene."
  },
  {
    question: "Do you offer web application and dashboard development?",
    answer: "Yes. Using modern AI-assisted development tools, React, and Netlify, I build and deploy responsive web applications, restaurant ordering systems, and operational dashboards end to end."
  },
  {
    question: "What is your typical turnaround time and trial offer?",
    answer: "Sample batches (including 10 free verified leads) are delivered within 12 to 24 hours. Full-scale pipelines of 1,000 to 5,000+ records are structured, verified, and shipped within 3 to 5 business days."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
      <div className="max-w-3xl mx-auto space-y-12">
        
        <div className="text-center space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// frequently asked questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Everything you need to know.
          </h2>
          <p className="text-neutral-400 font-light text-sm">
            Direct answers on lead sourcing protocols, data verification, CRM management, and turnarounds.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? 'bg-neutral-900/60 border-neutral-700' : 'bg-neutral-950 border-neutral-900 hover:border-neutral-800'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed font-sans animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
