"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fireEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.gtag) w.gtag("event", name, params);
  }
}

const faqs = [
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. Monthly care plans are month-to-month — cancel any time with 30 days notice. One-time projects use a simple agreement covering scope, timeline, and payment terms. No lock-ins.",
  },
  {
    q: "What does 'automation' actually mean for my business?",
    a: "It means your website captures leads 24/7, sends automatic follow-up texts or emails, routes inquiries to your phone or CRM, and books appointments — all without you doing anything. You get notified when a lead is ready to talk.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We work through a revision process until you're satisfied. Every project includes a 90+ PageSpeed score guarantee on the website side. If it doesn't hit that mark, I fix it.",
  },
  {
    q: "How is this different from GoHighLevel?",
    a: "GoHighLevel resellers charge $800–$2,500/month for a platform you don't own. We build on tools you control — Make, Zapier, N8N, HubSpot — and you own the code outright. No monthly platform fees from me. No vendor lock-in.",
  },
  {
    q: "How do I get started?",
    a: "The best first step is a free business audit. I look at your current setup, identify 3–5 specific gaps, and send you a Loom video or PDF within 48 hours. No sales call, no obligation.",
  },
];

export function PricingTabs() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* ── Toggle ──────────────────────────────────────── */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-[#111827] p-1 rounded-xl border border-[#1E293B]">
          <button
            onClick={() => {
              setIsMonthly(false);
              fireEvent("pricing_toggle", { view: "one-time" });
            }}
            className={`px-8 py-3 rounded-lg text-sm font-medium transition-colors ${
              !isMonthly ? "bg-[#0ea5e9] text-white" : "text-[#94A3B8] hover:text-white"
            }`}
          >
            One-Time Projects
          </button>
          <button
            onClick={() => {
              setIsMonthly(true);
              fireEvent("pricing_toggle", { view: "monthly" });
            }}
            className={`px-8 py-3 rounded-lg text-sm font-medium transition-colors ${
              isMonthly ? "bg-[#0ea5e9] text-white" : "text-[#94A3B8] hover:text-white"
            }`}
          >
            Monthly Care Plans
          </button>
        </div>
      </div>

      {/* ── Pricing Cards ───────────────────────────────── */}
      <div className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        {!isMonthly ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lead Capture Starter */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Lead Capture Starter</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">
                Website + lead capture + automated notification. Captures leads while you work.
              </p>
              <div className="text-5xl font-bold mb-1">$997</div>
              <p className="text-sm text-[#94A3B8] mb-8">or $600 as a Founding Partner</p>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Website or chatbot + lead form",
                  "Automated lead notification to your phone",
                  "Google Business Profile setup",
                  "90+ PageSpeed score guarantee",
                  "30 days post-launch support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/free-audit">
                <Button variant="outline" className="w-full border-[#1E293B]">
                  Start with a Free Audit
                </Button>
              </Link>
            </div>

            {/* Business Automation System */}
            <div className="bg-[#0A0F1E] border-2 border-[#D97706] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#D97706]/10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D97706] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Business Automation System</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">
                Website + 2–3 automations + CRM. Runs your entire follow-up pipeline.
              </p>
              <div className="text-5xl font-bold mb-1">$2,200</div>
              <p className="text-sm text-[#94A3B8] mb-8">or $1,320 as a Founding Partner</p>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Website + appointment booking",
                  "CRM integration (HubSpot or similar)",
                  "3-step email/text follow-up sequence",
                  "90+ PageSpeed score guarantee",
                  "60 days post-launch support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#D97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/free-audit">
                <Button className="w-full bg-[#D97706] hover:bg-[#B45309] text-white">
                  Start with a Free Audit
                </Button>
              </Link>
            </div>

            {/* Full AI Buildout */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Full AI Buildout</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">
                Custom workflows + full system integration. Everything automated.
              </p>
              <div className="text-5xl font-bold mb-1">$4,500</div>
              <p className="text-sm text-[#94A3B8] mb-8">or $2,700 as a Founding Partner</p>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Custom automation workflows (Make/N8N)",
                  "AI chatbot + full CRM pipeline",
                  "Notion SOPs + team handoff docs",
                  "Full source code ownership",
                  "90 days post-launch support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/free-audit">
                <Button variant="outline" className="w-full border-[#1E293B]">
                  Start with a Free Audit
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Care */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Essential Care</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">Monitoring + monthly ROI report. Your system stays healthy.</p>
              <div className="text-5xl font-bold mb-8">
                $499<span className="text-xl text-[#94A3B8] font-normal">/mo</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Hosting & SSL management",
                  "24/7 uptime monitoring",
                  "Monthly security scans",
                  "Monthly ROI performance report",
                  "1 hour content updates/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/free-audit">
                <Button variant="outline" className="w-full border-[#1E293B]">Get Started</Button>
              </Link>
            </div>

            {/* Smart Growth */}
            <div className="bg-[#0A0F1E] border-2 border-[#0ea5e9] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#0ea5e9]/10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0ea5e9] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Growth</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">Essential + 1 new automation/mo + monthly report.</p>
              <div className="text-5xl font-bold mb-8">
                $999<span className="text-xl text-[#94A3B8] font-normal">/mo</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Everything in Essential Care",
                  "1 new automation built per month",
                  "SEO keyword tracking + GBP updates",
                  "Weekly security scans",
                  "3 hours content updates/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/free-audit">
                <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284C7] text-white">Get Started</Button>
              </Link>
            </div>

            {/* Total Partner */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Total Partner</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">Full management + monthly strategy call + unlimited changes.</p>
              <div className="text-5xl font-bold mb-8">
                $1,500<span className="text-xl text-[#94A3B8] font-normal">/mo</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Everything in Smart Growth",
                  "Monthly strategy + growth call",
                  "Unlimited content changes",
                  "Daily security scans",
                  "Weekly GBP updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/free-audit">
                <Button variant="outline" className="w-full border-[#1E293B]">Get Started</Button>
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-[#CBD5E1]">
          Care plans are discussed after your project is complete. Not sure what you need? Start with the free audit.
        </div>
      </div>

      {/* ── FAQ Accordion ───────────────────────────────── */}
      <div className="px-6 lg:px-8 pb-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#1E293B] rounded-xl bg-[#0A0F1E] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-sm"
                aria-expanded={openFaqIndex === index}
              >
                <span>{faq.q}</span>
                <span className="text-[#0ea5e9] ml-4 flex-shrink-0 text-lg">
                  {openFaqIndex === index ? "−" : "+"}
                </span>
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-4 text-sm text-[#CBD5E1] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
