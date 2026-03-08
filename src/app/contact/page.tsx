"use client";

import { Nav } from "@/components/nav";

import { useState, useCallback } from "react";

// Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_CONTACT = "https://formspree.io/f/REPLACE_ME_CONTACT";

function fireEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.gtag) w.gtag("event", name, params);
  }
}
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    fireEvent("contact_form_submit", { service: formData.service });
    try {
      await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Fail silently — success state shows either way
    }
    setSubmitted(true);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Let&apos;s talk.</h1>
              <p className="text-xl text-[#94A3B8] mb-12">
                Fill out the form or call directly. I respond within 24 hours — usually same day.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 text-[#0D9488]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+18126109805" className="text-[#94A3B8] hover:text-white transition-colors">
                      (812) 610-9805
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 text-[#0D9488]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:pryce@pryceless.com" className="text-[#94A3B8] hover:text-white transition-colors">
                      pryce@pryceless.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 text-[#0D9488]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Schedule a call</div>
                    <a
                      href="https://calendly.com/prycehedrick"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => fireEvent("calendly_open", { location: "contact" })}
                      className="text-[#94A3B8] hover:text-white transition-colors"
                    >
                      Book a 20-min intro call →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 text-[#0D9488]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Service area</div>
                    <p className="text-[#94A3B8] text-sm">Southern Indiana — Vincennes, Washington, Jasper, Bedford, Loogootee, Evansville, Bloomington</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-[#0D9488]/20 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Got it — I&apos;ll be in touch.</h2>
                  <p className="text-[#94A3B8]">Expect a reply within 24 hours, usually same day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold mb-6">Send a message</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0D9488] transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="phone">Phone (optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0D9488] transition-colors"
                        placeholder="(812) 555-0100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0D9488] transition-colors"
                      placeholder="jane@smithhvac.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="service">What are you interested in?</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0D9488] transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="lead-capture">Lead Capture Starter ($997)</option>
                      <option value="automation-system">Business Automation System ($2,200)</option>
                      <option value="full-buildout">Full AI Buildout ($4,500)</option>
                      <option value="website-only">Website Only</option>
                      <option value="custom">Custom / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="budget">Budget range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0D9488] transition-colors appearance-none"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under-1k">Under $1,000 (quick win / chatbot)</option>
                      <option value="1k-2.5k">$1,000 – $2,500 (Lead Capture Starter)</option>
                      <option value="2.5k-5k">$2,500 – $5,000 (Business Automation System)</option>
                      <option value="5k-plus">$5,000+ (Full AI Buildout / Custom)</option>
                      <option value="not-sure">Not sure — let&apos;s talk</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="message">What&apos;s going on? (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0D9488] transition-colors resize-none"
                      placeholder="Tell me what you&apos;re trying to solve..."
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-medium">
                    Send Message →
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1E293B] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
