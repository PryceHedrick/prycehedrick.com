"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_CONTACT = "https://formspree.io/f/REPLACE_ME_CONTACT";

function fireEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.gtag) w.gtag("event", name, params);
  }
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitError(false);
      fireEvent("contact_form_submit", { service: formData.service });
      try {
        const res = await fetch(FORMSPREE_CONTACT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("submission failed");
        setSubmitted(true);
      } catch {
        setSubmitError(true);
      }
    },
    [formData]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="h-16 w-16 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Got it — I&apos;ll be in touch.</h2>
        <p className="text-[#CBD5E1]">Expect a reply within 24 hours, usually same day.</p>
      </div>
    );
  }

  return (
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
            className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0ea5e9] transition-colors"
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
            className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0ea5e9] transition-colors"
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
          className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0ea5e9] transition-colors"
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
          className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition-colors appearance-none"
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
          className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition-colors appearance-none"
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
          className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#0ea5e9] transition-colors resize-none"
          placeholder="Tell me what you&apos;re trying to solve..."
        />
      </div>

      {submitError && (
        <div className="rounded-xl bg-red-900/30 border border-red-700/50 px-4 py-3 text-sm text-red-300">
          There was a problem submitting your message. Please email{" "}
          <a href="mailto:prycehedrick@gmail.com" className="underline hover:text-white">
            prycehedrick@gmail.com
          </a>{" "}
          or call{" "}
          <a href="tel:+18126109805" className="underline hover:text-white">
            (812) 610-9805
          </a>{" "}
          directly.
        </div>
      )}

      <Button type="submit" className="w-full h-12 bg-[#0ea5e9] hover:bg-[#0284C7] text-white font-medium">
        Send Message →
      </Button>
    </form>
  );
}
