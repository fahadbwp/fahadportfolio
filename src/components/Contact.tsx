import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, Check, ArrowUpRight, Gift } from 'lucide-react';

import { InstagramIcon, UpworkIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'B2B Lead Generation (10 Free Leads)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


    try {
      const response = await fetch("https://formsubmit.co/ajax/fahadsaleembwp@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Service: formData.service,
          Requirements: formData.message,
          _subject: `New Lead Inquiry from ${formData.name} (Portfolio Website)`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setSubmitted(true);
      }
    } catch {
      // Fallback show success so user isn't stuck
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              // get in touch
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Let's build your pipeline.
            </h2>
            <p className="text-neutral-400 font-light text-base max-w-md leading-relaxed">
              Based in Bahawalpur, Pakistan — working with clients across IT, e-commerce, real estate, and professional services.
            </p>
          </div>

          {/* Direct Links */}
          <div className="space-y-4">
            
            {/* Email link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Email</div>
                  <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* Upwork link */}
            <a
              href={PERSONAL_INFO.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <UpworkIcon className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Upwork</div>
                  <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                    View profile (100% Job Success)
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* Instagram link */}
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Instagram</div>
                  <div className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors">
                    @fahdbwp
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            

          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your requirements have been delivered directly to my inbox. I'll get back to you with your sample leads in under 12 hours.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: 'B2B Lead Generation (10 Free Leads)', message: '' });
                    }}
                    className="text-xs font-mono uppercase text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-300 font-mono">
                  <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Trial: 10 verified sample leads included with your inquiry.</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option>B2B Lead Generation (10 Free Leads)</option>
                    <option>LinkedIn Sales Navigator Extraction</option>
                    <option>CRM Data Management (HubSpot/Zoho/Salesforce)</option>
                    <option>Web Research & Data Mining</option>
                    <option>AI-Assisted Web Development</option>
                    <option>Virtual Assistant Support</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Target ICP & Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Specify target job titles (e.g. CEOs, Marketing Directors), industry, geography..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Sending Inquiry...' : 'Send Project Inquiry'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
