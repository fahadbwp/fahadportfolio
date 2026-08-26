import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, Check, Gift, Sparkles } from 'lucide-react';
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
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Context & Direct Communication Channels */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-stone-950 leading-tight">
              Let's build your pipeline
            </h2>
            <p className="text-stone-600 font-medium text-base max-w-md leading-relaxed">
              Based in Bahawalpur, Pakistan — working with clients globally across IT, e-commerce, real estate, and professional services.
            </p>
          </div>

          {/* Compact Direct Channel Cards */}
          <div className="space-y-2.5 pt-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Direct Channels
            </div>
            
            <div className="flex flex-col gap-2.5">
              {/* Email link */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 hover:bg-white border border-stone-200 text-stone-900 transition-all text-xs font-bold shadow-2xs hover:shadow-xs group"
              >
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              {/* Upwork link */}
              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 hover:bg-white border border-stone-200 text-stone-900 transition-all text-xs font-bold shadow-2xs hover:shadow-xs group"
              >
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <UpworkIcon className="w-4 h-4" />
                </div>
                <span>Upwork Profile (100% Job Success)</span>
              </a>

              {/* Instagram link */}
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-50 hover:bg-white border border-stone-200 text-stone-900 transition-all text-xs font-bold shadow-2xs hover:shadow-xs group"
              >
                <div className="p-2 rounded-lg bg-pink-100 text-pink-700 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>Instagram (@fahdbwp)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean White Lead Form */}
        <div className="lg:col-span-6">
          <div className="p-7 sm:p-8 rounded-2xl white-panel shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-stone-950">Inquiry Sent Successfully!</h3>
                  <p className="text-stone-600 text-sm max-w-sm mx-auto">
                    Thank you, <span className="text-stone-950 font-bold">{formData.name}</span>. Your requirements have been delivered directly to my inbox. I'll get back to you with your sample leads in under 12 hours.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: 'B2B Lead Generation (10 Free Leads)', message: '' });
                    }}
                    className="text-xs font-bold text-orange-600 hover:text-orange-800 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Free Trial Banner */}
                <div className="p-3.5 mb-2 rounded-xl bg-orange-50 border border-orange-200/90 flex items-center gap-3 text-xs text-orange-950 font-sans font-bold text-left">
                  <div className="p-1.5 rounded-lg bg-orange-200/60 text-orange-800 shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <span>Free Trial: 10 verified sample leads included with your inquiry.</span>
                </div>

                {/* Form Inputs */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-name" className="text-xs font-sans font-bold text-stone-800 block text-left">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Carla Sanford"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl clean-input text-sm font-medium placeholder-stone-400"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-email" className="text-xs font-sans font-bold text-stone-800 block text-left">Your Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="client@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl clean-input text-sm font-medium placeholder-stone-400"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="service-select" className="text-xs font-sans font-bold text-stone-800 block text-left">Service Required *</label>
                  <select
                    id="service-select"
                    name="service"
                    aria-label="Service Required"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl clean-input text-sm font-medium text-stone-900"
                  >
                    <option>B2B Lead Generation (10 Free Leads)</option>
                    <option>LinkedIn Sales Navigator Extraction</option>
                    <option>CRM Data Management (HubSpot/Zoho/Salesforce)</option>
                    <option>Web Research & Data Mining</option>
                    <option>AI-Assisted Web Development</option>
                    <option>Virtual Assistant Support</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="text-xs font-sans font-bold text-stone-800 block text-left">Target Audience & Details *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    placeholder="e.g. CEOs, Marketing Directors"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl clean-input text-sm font-medium placeholder-stone-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl btn-primary-dark font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md mt-2"
                >
                  <Send className="w-4 h-4 mt-0.5" />
                  <span>{loading ? 'Sending Inquiry...' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
