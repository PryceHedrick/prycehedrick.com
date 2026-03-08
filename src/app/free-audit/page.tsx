"use client";

import { Nav } from "@/components/nav";

import { useState, useCallback } from "react";

// Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_AUDIT = "https://formspree.io/f/REPLACE_ME_AUDIT";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FreeAudit() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    biggestProblem: "",
  });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    // Fire GA4 event
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.gtag) w.gtag("event", "audit_request_submit", { business_type: formData.businessType });
    }
    try {
      await fetch(FORMSPREE_AUDIT, {
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
    <div className="flex flex-col min-h-screen bg-black text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-24 max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-24">
              <div className="h-16 w-16 rounded-full bg-[#0D9488]/20 flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h1 className="text-4xl font-bold mb-6">You&apos;re on the list.</h1>
              <p className="text-xl text-[#94A3B8] mb-4 max-w-2xl mx-auto">
                Pryce will review your business and send your audit within <strong className="text-white">48 hours</strong>.
              </p>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                You&apos;ll receive a Loom video or PDF with 3–5 specific gaps in your current setup. This is yours to keep — no obligation, and no one will call you unexpectedly.
              </p>
              <div className="mt-12">
                <Link href="/">
                  <Button variant="outline" className="border-[#1F2937]">Back to Homepage</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: What you get */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Get a Free Business Automation Audit
                </h1>
                <p className="text-xl text-[#94A3B8] mb-10">
                  We&apos;ll look at your current setup and identify exactly what&apos;s costing you leads — delivered as a Loom video or PDF within 48 hours.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#0D9488]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">3–5 specific gaps identified</h3>
                      <p className="text-[#94A3B8] text-sm">Not generic advice — actual problems costing you revenue, specific to your business.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#0D9488]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Delivered within 48 hours</h3>
                      <p className="text-[#94A3B8] text-sm">A Loom screen-recording walkthrough or written PDF — whichever is clearest for your situation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#0D9488]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Yours to keep, no obligation</h3>
                      <p className="text-[#94A3B8] text-sm">No sales call, no follow-up pressure. If you want to work together after, great. If not, the audit is still useful.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A0A0A] border border-[#1F2937] rounded-2xl p-6">
                  <p className="text-sm text-[#94A3B8]">
                    <span className="text-white font-medium">Who this is for:</span> Southern Indiana small businesses — HVAC, plumbing, electrical, contractors, dental, chiro, retail — who are losing leads to competitors because their website or follow-up process isn&apos;t working.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-[#0A0A0A] border border-[#1F2937] rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-6">Request Your Free Audit</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="name">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-[#1F2937] rounded-xl px-4 py-3 text-white placeholder:text-[#374151] focus:outline-none focus:border-[#0D9488] transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-[#1F2937] rounded-xl px-4 py-3 text-white placeholder:text-[#374151] focus:outline-none focus:border-[#0D9488] transition-colors"
                      placeholder="jane@smithhvac.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="businessType">
                      What type of business do you run?
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-black border border-[#1F2937] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0D9488] transition-colors appearance-none"
                    >
                      <option value="" disabled>Select your industry</option>
                      <option value="hvac">HVAC / Heating & Cooling</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="contractor">General Contractor / Remodeling</option>
                      <option value="dental">Dental / Medical</option>
                      <option value="chiro">Chiropractic / Physical Therapy</option>
                      <option value="retail">Retail / E-Commerce</option>
                      <option value="restaurant">Restaurant / Food Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2" htmlFor="biggestProblem">
                      What&apos;s your biggest time waster right now?
                    </label>
                    <textarea
                      id="biggestProblem"
                      name="biggestProblem"
                      rows={4}
                      value={formData.biggestProblem}
                      onChange={handleChange}
                      className="w-full bg-black border border-[#1F2937] rounded-xl px-4 py-3 text-white placeholder:text-[#374151] focus:outline-none focus:border-[#0D9488] transition-colors resize-none"
                      placeholder="e.g. Following up with leads manually, scheduling appointments by phone, answering the same questions over and over..."
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-medium">
                    Request My Free Audit →
                  </Button>

                  <p className="text-xs text-center text-[#94A3B8]">
                    No spam. No sales calls. Just a clear audit of what&apos;s costing you leads — delivered in 48 hours.
                  </p>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-[#1F2937] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
