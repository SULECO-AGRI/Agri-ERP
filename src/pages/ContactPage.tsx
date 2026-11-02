import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, MessageSquare, Building2, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function ContactPage() {
  const { ref, shown } = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'demo',
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
        topic: 'demo',
        message: '',
      });
    }, 1000);
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
            Connect with Spatio Agri
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tightest text-forest-950 sm:text-5xl md:text-6xl leading-[1.05]">
            Turn your plantation into a <span className="shimmer-text">smart operation</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-forest-950/65 max-w-2xl">
            Have questions about integrating Spatio Agri GIS mapping, harvest tracking, or mill processing records into your coconut farm? Reach out directly to our geospatial deployment coordinators.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Column 1: Direct Channels & Coordination Info */}
          <div 
            className={`lg:col-span-5 space-y-8 transition-all duration-1000 delay-100 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            {/* Direct Contacts Block */}
            <div className="rounded-3xl border border-forest-950/5 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-forest-950 mb-6">Contact Channels</h2>
              
              <div className="space-y-6">
                {/* Phone Channel */}
                <a 
                  href="tel:0773301274" 
                  className="group flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-forest-950/[0.02] transition-colors"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep group-hover:bg-emerald-deep group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">Direct Hotline</h3>
                    <p className="text-xs text-forest-950/50 mt-0.5">Mon - Sat · 8 AM - 6 PM</p>
                    <span className="text-base font-bold text-emerald-deep group-hover:underline mt-1 block">
                      077 330 1274
                    </span>
                  </div>
                </a>

                {/* Web Portal */}
                <a 
                  href="https://www.spatiosds.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-forest-950/[0.02] transition-colors"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep group-hover:bg-emerald-deep group-hover:text-white transition-all">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">Official Web Portal</h3>
                    <p className="text-xs text-forest-950/50 mt-0.5">Spatio Data Solutions (SDS)</p>
                    <span className="text-sm font-semibold text-emerald-deep group-hover:underline mt-1 block">
                      www.spatiosds.com
                    </span>
                  </div>
                </a>

                {/* Email Channel */}
                <a 
                  href="mailto:contact@spatiosds.com" 
                  className="group flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-forest-950/[0.02] transition-colors"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep group-hover:bg-emerald-deep group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">Email Communication</h3>
                    <p className="text-xs text-forest-950/50 mt-0.5">Direct inquiry to agronomy coordinators</p>
                    <span className="text-sm font-semibold text-emerald-deep group-hover:underline mt-1 block">
                      contact@spatiosds.com
                    </span>
                  </div>
                </a>

                {/* Geospatial Services Channel */}
                <div className="flex items-start gap-4 p-2 -m-2">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-950/[0.03] text-emerald-deep">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">SDS Geospatial Center</h3>
                    <p className="text-sm text-forest-950/70 mt-1 leading-relaxed">
                      Spatio Data Solutions · Precision Plantation Division
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
                  <p className="text-xs text-forest-950/50 mt-0.5">Estate GIS &amp; telemetry monitoring</p>
                  <p className="text-sm text-forest-950/70 mt-3 leading-relaxed">
                    Our geospatial specialists support plantation deployments with on-site GPS boundary verification and custom copra/oil processing workflow mapping.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Sleek Glassmorphic Form Card */}
          <div 
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="rounded-3xl border border-forest-950/5 bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-forest-950">Request Plantation Walkthrough</h2>
                    <p className="text-sm text-forest-950/50 mt-1">Provide your farm specifications and our coordinators will reach out.</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-forest-950/10 bg-cream/30 px-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                        placeholder="Estate Manager Name"
                      />
                    </div>

                    {/* Work Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-forest-950/10 bg-cream/30 px-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                        placeholder="manager@estate.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Plantation / Company input */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Estate / Farm Name
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
                          placeholder="e.g. Mahaweli Coconut Estate"
                        />
                      </div>
                    </div>

                    {/* Topic Select */}
                    <div className="space-y-1.5">
                      <label htmlFor="topic" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                        Primary Requirement
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-forest-950/10 bg-cream/30 px-4 py-3 text-sm text-forest-950 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all"
                      >
                        <option value="demo">Coconut Farm Modernization Demo</option>
                        <option value="gis">GIS Subdivision & Cadastral Mapping</option>
                        <option value="processing">Harvest & Copra/Oil Processing Records</option>
                        <option value="sales">Sales Tracking & Market Intelligence</option>
                      </select>
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-forest-950/60 uppercase tracking-wide">
                      Operation Details (Hectares / Trees / Mills)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 flex items-center pointer-events-none text-forest-950/30">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-forest-950/10 bg-cream/30 pl-10 pr-4 py-3 text-sm text-forest-950 placeholder-forest-950/30 focus:border-emerald-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-deep/10 transition-all resize-none"
                        placeholder="Tell us about your plantation size, number of subdivisions or trees, and whether you run on-site copra kilns or oil extraction mills..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-950 py-4 text-sm font-semibold text-white shadow-md hover:bg-forest-900 transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting request...' : 'Schedule Plantation Demo'}
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
                    <h2 className="text-2xl font-bold text-forest-950">Walkthrough Request Received</h2>
                    <p className="text-sm leading-relaxed text-forest-950/60 max-w-md mx-auto">
                      Our SDS plantation technology coordinators have received your inquiry. You can also reach us immediately at <strong className="text-forest-950">077 330 1274</strong>.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full border border-forest-950 px-6 py-2.5 text-xs font-semibold text-forest-950 hover:bg-forest-950 hover:text-white transition-colors duration-300 active:scale-[0.98]"
                  >
                    Submit Another Request
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
