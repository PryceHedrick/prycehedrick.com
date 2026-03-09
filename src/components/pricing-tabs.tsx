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
    a: "I work through a revision process until you're satisfied. Every project includes a 90+ PageSpeed score guarantee on the website side. If it doesn't hit that mark, I fix it.",
  },
  {
    q: "How is this different from GoHighLevel?",
    a: "GoHighLevel resellers charge $800–$2,500/month for a platform you don't own. I build on tools you control — Make, Zapier, N8N, HubSpot — and you own the code outright. No monthly platform fees from me. No vendor lock-in.",
  },
  {
    q: "How do I get started?",
    a: "The best first step is a free business audit. I look at your current setup, identify 3–5 specific gaps, and send you a Loom video or PDF within 48 hours. No sales call, no obligation.",
  },
];

export function PricingTabs() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* ── Pricing Cards ───────────────────────────────── */}
      <div className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-1">Starter</h3>
            <p className="text-xs text-[#94A3B8] italic mb-3">Good if: Your site isn&apos;t capturing leads — or you don&apos;t have one.</p>
            <p className="text-[#CBD5E1] text-sm mb-6">
              Website + lead capture + automated notification. Captures leads while you work.
            </p>
            <div className="text-5xl font-bold mb-8">$997</div>
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
              <Button
                variant="outline"
                className="w-full border-[#1E293B]"
                onClick={() => fireEvent("pricing_cta_click", { package: "starter" })}
              >
                Start with a Free Audit
              </Button>
            </Link>
          </div>

          {/* Growth */}
          <div className="bg-[#0A0F1E] border-2 border-[#D97706] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#D97706]/10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D97706] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-1">Growth</h3>
            <p className="text-xs text-[#94A3B8] italic mb-3">Good if: You&apos;re getting leads but losing them in follow-up.</p>
            <p className="text-[#CBD5E1] text-sm mb-6">
              Website + 2–3 automations + CRM. Runs your entire follow-up pipeline.
            </p>
            <div className="text-5xl font-bold mb-8">$2,200</div>
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
              <Button
                className="w-full bg-[#D97706] hover:bg-[#B45309] text-white"
                onClick={() => fireEvent("pricing_cta_click", { package: "growth" })}
              >
                Start with a Free Audit
              </Button>
            </Link>
          </div>

          {/* System */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-1">System</h3>
            <p className="text-xs text-[#94A3B8] italic mb-3">Good if: You need custom workflows, not a packaged solution.</p>
            <p className="text-[#CBD5E1] text-sm mb-6">
              Custom workflows + full system integration. Everything automated.
            </p>
            <div className="text-5xl font-bold mb-8">$4,500</div>
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
              <Button
                variant="outline"
                className="w-full border-[#1E293B]"
                onClick={() => fireEvent("pricing_cta_click", { package: "system" })}
              >
                Start with a Free Audit
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#CBD5E1]">
          50% upfront · 50% on delivery · No hidden fees
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
