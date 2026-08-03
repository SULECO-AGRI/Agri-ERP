import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, MessageSquare, Building2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function ContactPage() {
  const { ref, shown } = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'sales',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        topic: 'sales',
        message: '',
      });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-cream pt-28 pb-24 sm:pb-32 overflow-hidden">
      {/* Background Aesthetics */}
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
            Connect with us
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl md:text-6xl leading-[1.05]">
            Let's build <span className="shimmer-text">precision</span> together
          </h1>
          <p className="mt-5 text-base leading-relaxed text-forest-950/65 max-w-2xl">
            Have questions about integrating AgriCore into your commercial growing operation? Reach out to our team of agricultural technology coordinators.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Column 1: Office Locations & Contact HQ Info */}
          <div 
            className={`lg:col-span-5 space-y-8 transition-all duration-1000 delay-100 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            {/* Direct Contacts Block */}
            <div className="rounded-3xl border border-forest-950/5 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-forest-950 mb-6">Contact Channels</h2>
              
              <div className="space-y-6">
                {/* Email Channel */}
                <a 
                  href="mailto:contact@agricore-erp.com" 
                  className="group flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-forest-950/[0.02] transition-colors"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep group-hover:bg-emerald-deep group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">Email Communication</h3>
                    <p className="text-xs text-forest-950/50 mt-0.5">Response within 4 business hours</p>
                    <span className="text-sm font-semibold text-emerald-deep group-hover:underline mt-1.5 block">
                      contact@agricore-erp.com
                    </span>
                  </div>
                </a>

                {/* Phone Channel */}
                <a 
                  href="tel:+18005552474" 
                  className="group flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-forest-950/[0.02] transition-colors"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep group-hover:bg-emerald-deep group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">Toll-Free Support</h3>
                    <p className="text-xs text-forest-950/50 mt-0.5">Mon - Fri · 8 AM - 6 PM EST</p>
                    <span className="text-sm font-semibold text-emerald-deep group-hover:underline mt-1.5 block">
                      +1 (800) 555-AGRI
                    </span>
                  </div>
                </a>

                {/* HQ Address Channel */}
                <div className="flex items-start gap-4 p-2 -m-2">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">HQ Operations Office</h3>
                    <p className="text-sm text-forest-950/70 mt-1.5 leading-relaxed">
                      120 Precision Parkway, Suite 400<br />
                      Research Triangle Park, NC 27709
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Sync Info */}
            <div className="rounded-3xl border border-forest-950/5 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-forest-950">Active Sync Windows</h3>
                  <p className="text-xs text-forest-950/50 mt-0.5">Continuous system monitoring uptime</p>
                  <p className="text-sm text-forest-950/70 mt-3 leading-relaxed">
                    Our platform support engineers monitor AgriCore operations 24/7/365. Integration coordinators are available for live setup syncs from Monday to Friday.
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Visual Coordinates Map concept */}
            <div className="relative rounded-3xl border border-forest-950/5 bg-forest-950 p-6 text-white overflow-hidden min-h-[160px] flex flex-col justify-between shadow-md">
              <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-accent animate-ping" />
                <span className="font-mono text-[9px] text-emerald-accent font-bold uppercase tracking-wider">
                  Live Operations Node
                </span>
              </div>
              
              <div className="relative z-10">
                <span className="font-mono text-xl font-bold tracking-tight text-white block">RTP Node Coordinate</span>
                <span className="font-mono text-xs text-white/50 block mt-1">35.9132° N · 78.7811° W</span>
              </div>

              <div className="absolute right-4 bottom-4 h-24 w-24 rounded-full bg-emerald-accent/[0.05] border border-white/5 blur-sm pointer-events-none" />
            </div>

          </div>

          {/* Column 2: Sleek Glassmorphic Form Card */}
          <div 
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="rounded-3xl border border-forest-950/5 bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Form Content Toggle */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-forest-950">Send a Message</h2>
                    <p className="text-sm text-forest-950/50 mt-1">Fill out the coordinates below to coordinate a sync.</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-forest-950/10 bg-cream/30 px-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>

                    {/* Work Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Work Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-forest-950/10 bg-cream/30 px-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Company input */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Company / Farm Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-forest-950/30">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-forest-950/10 bg-cream/30 pl-10 pr-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                          placeholder="Apex Farms LLC"
                        />
                      </div>
                    </div>

                    {/* Topic Select */}
                    <div className="space-y-1.5">
                      <label htmlFor="topic" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Topic of Inquiry
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-forest-950/10 bg-cream/30 px-4 py-3 text-sm text-forest-950 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                      >
                        <option value="sales">Sales & License Pricing</option>
                        <option value="integration">ERP Hardware Integrations</option>
                        <option value="demo">Custom Pilot Demonstration</option>
                        <option value="support">Active Platform Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                      Message Details
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 flex items-center pointer-events-none text-forest-950/30">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-forest-950/10 bg-cream/30 pl-10 pr-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all resize-none"
                        placeholder="Tell us about your operations size, crops, and what systems you currently run..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-950 py-4 text-sm font-semibold text-white shadow-md hover:bg-forest-900 transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Synchronizing message...' : 'Coordinate Sync'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              ) : (
                /* Success Feedback State */
                <div className="py-12 text-center space-y-6 animate-fadeUp">
                  <div className="inline-grid h-16 w-16 place-items-center rounded-full bg-emerald-accent/15 text-emerald-deep">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-forest-950">Message Sent Successfully</h2>
                    <p className="text-sm leading-relaxed text-forest-950/60 max-w-md mx-auto">
                      Our system integration coordinators have received your operational specifications and will reach out to you within the next 4 business hours.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full border border-forest-950 px-6 py-2.5 text-xs font-semibold text-forest-950 hover:bg-forest-950 hover:text-white transition-colors duration-300 active:scale-[0.98]"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
