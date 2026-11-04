import React, { useState } from 'react';
import { Mail, ChevronDown, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function ContactPage() {
  const { ref, shown } = useReveal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+94',
    phone: '',
    header: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = formData.header.trim() || `Inquiry from ${fullName || 'Website Visitor'}`;
    
    // Construct clean email body with all supplied data
    const bodyLines = [
      fullName ? `Name: ${fullName}` : '',
      formData.email ? `Email: ${formData.email}` : '',
      formData.phone ? `Phone: ${formData.countryCode} ${formData.phone}` : '',
      '',
      'Message:',
      formData.message.trim(),
    ].filter((line, idx, arr) => line !== '' || (arr[idx - 1] !== '' && idx > 0));

    const body = bodyLines.join('\n');
    const mailto = `mailto:info@spatiosds.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setMailtoUrl(mailto);

    // Automatically trigger Outlook / default mail client
    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f0f6f2] pt-32 pb-24 sm:pt-36 sm:pb-32 transition-colors">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-700 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* ================= LEFT COLUMN: INFO ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center py-6 sm:py-10">
            {/* Top Info Area */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-forest-950">
                Contact Us
              </h1>

              <p className="mt-5 text-sm sm:text-base text-forest-950/70 leading-relaxed max-w-lg">
                Email, call, or complete the form to learn how Spatio Agri can solve your plantation management and geospatial challenges.
              </p>

              <div className="mt-8 space-y-3 text-base sm:text-lg font-semibold text-forest-950">
                <div>
                  <a
                    href="mailto:info@spatiosds.com"
                    className="hover:text-emerald-700 transition-colors inline-block"
                  >
                    info@spatiosds.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:0773301274"
                    className="hover:text-emerald-700 transition-colors inline-block"
                  >
                    077 330 1274
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CLEAN FORM CARD ================= */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-white p-7 sm:p-10 shadow-xl border border-forest-950/[0.04]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-forest-950">
                Get in Touch
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-forest-950/50">
                You can reach us anytime
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full rounded-2xl border border-forest-950/15 bg-white px-4 py-3 text-sm text-forest-950 placeholder-forest-950/35 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15 transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full rounded-2xl border border-forest-950/15 bg-white px-4 py-3 text-sm text-forest-950 placeholder-forest-950/35 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center text-forest-950/40">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      className="w-full rounded-2xl border border-forest-950/15 bg-white pl-11 pr-4 py-3 text-sm text-forest-950 placeholder-forest-950/35 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15 transition-all"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div className="flex rounded-2xl border border-forest-950/15 bg-white overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/15 transition-all">
                    <div className="relative flex items-center border-r border-forest-950/15 bg-cream/40 px-3">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="appearance-none bg-transparent pr-5 text-xs font-semibold text-forest-950 focus:outline-none cursor-pointer"
                      >
                        <option value="+94">+94</option>
                        <option value="+62">+62</option>
                        <option value="+60">+60</option>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2 h-3 w-3 text-forest-950/50" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="w-full bg-transparent px-4 py-3 text-sm text-forest-950 placeholder-forest-950/35 focus:outline-none"
                    />
                  </div>

                  {/* Header / Subject Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="header"
                      required
                      value={formData.header}
                      onChange={handleInputChange}
                      placeholder="Header / Subject"
                      className="w-full rounded-2xl border border-forest-950/15 bg-white px-4 py-3 text-sm text-forest-950 placeholder-forest-950/35 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15 transition-all"
                    />
                  </div>

                  {/* Message & Character Counter */}
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      className="w-full rounded-2xl border border-forest-950/15 bg-white p-4 pb-7 text-sm text-forest-950 placeholder-forest-950/35 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15 transition-all resize-none"
                    />
                    <div className="pointer-events-none absolute bottom-2.5 right-3 text-[11px] font-mono text-forest-950/35">
                      {formData.message.length}/500
                    </div>
                  </div>

                  {/* Send Message Button (Light Green theme) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-emerald-500 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Opening Outlook...' : 'Send Message'}</span>
                  </button>

                  {/* Disclaimer */}
                  <p className="text-center text-[11px] text-forest-950/50 pt-1 leading-relaxed">
                    By contacting us, you agree to our{' '}
                    <span className="font-semibold text-forest-950/80">Terms of service</span> and{' '}
                    <span className="font-semibold text-forest-950/80">Privacy Policy</span>
                  </p>
                </form>
              ) : (
                /* Proper Clean Notification Card */
                <div className="py-8 text-center space-y-4 animate-fadeUp">
                  <div className="inline-grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 ring-1 ring-inset ring-emerald-500/25">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-950">Outlook Opened</h3>
                    <p className="mt-2 text-xs sm:text-sm text-forest-950/70 max-w-sm mx-auto leading-relaxed">
                      Your message has been loaded into Outlook with all your supplied details. Please click <span className="font-semibold text-forest-950">Send</span> in Outlook to deliver your email to <span className="font-semibold text-emerald-700">info@spatiosds.com</span>.
                    </p>
                  </div>

                  {/* Message Summary Box */}
                  <div className="rounded-2xl bg-[#f0f6f2] border border-forest-950/[0.06] p-4 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                    <div className="flex justify-between text-forest-950/60">
                      <span>Recipient:</span>
                      <span className="font-semibold text-forest-950">info@spatiosds.com</span>
                    </div>
                    <div className="flex justify-between text-forest-950/60">
                      <span>Subject:</span>
                      <span className="font-semibold text-forest-950 truncate max-w-[200px]">{formData.header || 'Inquiry'}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Reopen in Outlook</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          countryCode: '+94',
                          phone: '',
                          header: '',
                          message: '',
                        });
                      }}
                      className="rounded-full border border-forest-950/20 px-5 py-2.5 text-xs font-semibold text-forest-950 hover:bg-forest-950/5 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
