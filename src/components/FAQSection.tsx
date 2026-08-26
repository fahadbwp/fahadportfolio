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
    <section id="faq" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 font-medium text-base max-w-xl leading-relaxed">
            Direct answers on lead sourcing protocols, data verification, CRM management, and turnarounds.
          </p>
        </div>

        {/* FAQ Accordion List (White Theme) */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen 
                    ? 'bg-white border-stone-300 shadow-md' 
                    : 'bg-stone-50/70 border-stone-200 hover:bg-white hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-stone-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 stroke-[2.5] ${
                      isOpen ? 'rotate-180 text-orange-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-stone-700 leading-relaxed font-sans animate-in fade-in-50 duration-200 border-t border-stone-100 pt-4">
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
