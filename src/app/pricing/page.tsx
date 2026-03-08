"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need to sign a long-term contract?",
      a: "No. Monthly care plans are month-to-month — cancel any time. One-time projects use a simple agreement covering scope, timeline, and payment terms. No sneaky lock-ins."
    },
    {
      q: "What does 'automation' actually mean for my business?",
      a: "It means your website captures leads 24/7, sends automatic follow-up texts or emails, routes inquiries to your phone or CRM, and books appointments — all without you lifting a finger. You get notified when a lead is hot and ready to talk."
    },
    {
      q: "What if I'm not happy with the result?",
      a: "We work through a revision process until you're satisfied. Every project includes a 90+ PageSpeed guarantee. If it doesn't perform technically, we fix it."
    },
    {
      q: "How is this different from GoHighLevel or other agencies?",
      a: "GoHighLevel resellers charge $800–$2,500/mo for a white-labeled platform with markup. We build on tools you control — Make, Zapier, N8N, HubSpot — and you own the code outright. No monthly platform fees from us. No vendor lock-in."
    },
    {
      q: "How do I get started?",
      a: "The best first step is a free business automation audit. We look at your current setup, identify 3-5 specific gaps, and send you a Loom video or PDF within 48 hours. No sales pressure."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-[#F8FAFC]">
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-[#1F2937]">
        <Link href="/" className="font-semibold text-xl tracking-tight">Pryceless Solutions</Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#94A3B8]">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/pricing" className="text-white">Pricing</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </nav>
        <a href="tel:+18126109805" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
          (812) 610-9805
        </a>
      </header>

      <main className="flex-grow">
        {/* Header */}
        <section className="px-6 lg:px-8 py-24 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-[#94A3B8] mb-4">
            Start with a free audit. Then we scope your project together.
          </p>
          <p className="text-sm text-[#0D9488] mb-12">
            50% upfront · 50% on delivery · No hidden fees
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-[#0A0A0A] p-1 rounded-xl border border-[#1F2937] mb-16">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-8 py-3 rounded-lg text-sm font-medium transition-colors ${
                !isMonthly ? "bg-[#0D9488] text-white" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              One-Time Projects
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-8 py-3 rounded-lg text-sm font-medium transition-colors ${
                isMonthly ? "bg-[#0D9488] text-white" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Monthly Care Plans
            </button>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
          {!isMonthly ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lead Capture Starter */}
              <div className="bg-[#0A0A0A] border border-[#1F2937] rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Lead Capture Starter</h3>
                <p className="text-[#94A3B8] mb-6">1 automation + website. Captures leads while you work.</p>
                <div className="text-5xl font-bold mb-2">$997</div>
                <p className="text-sm text-[#94A3B8] mb-8">or $600 as a Founding Partner</p>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Website or chatbot + lead capture form</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Automated lead notification to your phone</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Google Business Profile setup</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 90+ PageSpeed guarantee</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 30 days post-launch support</li>
                </ul>
                <Link href="/free-audit">
                  <Button variant="outline" className="w-full border-[#1F2937]">Start with a Free Audit</Button>
                </Link>
              </div>

              {/* Business Automation System */}
              <div className="bg-black border-2 border-[#D97706] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#D97706]/10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D97706] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Business Automation System</h3>
                <p className="text-[#94A3B8] mb-6">Website + 2–3 automations + CRM. Your full lead pipeline.</p>
                <div className="text-5xl font-bold mb-2">$2,200</div>
                <p className="text-sm text-[#94A3B8] mb-8">or $1,320 as a Founding Partner</p>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#D97706] mr-3 mt-0.5">✔</span> Website + appointment booking</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#D97706] mr-3 mt-0.5">✔</span> CRM integration (HubSpot or similar)</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#D97706] mr-3 mt-0.5">✔</span> 3-step email/text follow-up sequence</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#D97706] mr-3 mt-0.5">✔</span> 90+ PageSpeed guarantee</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#D97706] mr-3 mt-0.5">✔</span> 60 days post-launch support</li>
                </ul>
                <Link href="/free-audit">
                  <Button className="w-full bg-[#D97706] hover:bg-[#D97706]/90 text-white">Start with a Free Audit</Button>
                </Link>
              </div>

              {/* Full AI Buildout */}
              <div className="bg-[#0A0A0A] border border-[#1F2937] rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Full AI Buildout</h3>
                <p className="text-[#94A3B8] mb-6">Custom workflows + full system. The complete revenue machine.</p>
                <div className="text-5xl font-bold mb-2">$4,500</div>
                <p className="text-sm text-[#94A3B8] mb-8">or $2,700 as a Founding Partner</p>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Custom automation workflows (Make/N8N)</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> AI chatbot + full CRM pipeline</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Notion SOPs + team handoff docs</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Full source code ownership</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 90 days post-launch support</li>
                </ul>
                <Link href="/free-audit">
                  <Button variant="outline" className="w-full border-[#1F2937]">Start with a Free Audit</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Essential Care */}
              <div className="bg-[#0A0A0A] border border-[#1F2937] rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Essential Care</h3>
                <p className="text-[#94A3B8] mb-6">Monitoring + monthly ROI report. Your system stays healthy.</p>
                <div className="text-5xl font-bold mb-8">$499<span className="text-xl text-[#94A3B8] font-normal">/mo</span></div>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Hosting & SSL management</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 24/7 uptime monitoring</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Monthly security scans</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Monthly ROI performance report</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 1 hour content updates/mo</li>
                </ul>
                <Link href="/free-audit">
                  <Button variant="outline" className="w-full border-[#1F2937]">Get Started</Button>
                </Link>
              </div>

              {/* Smart Growth */}
              <div className="bg-black border-2 border-[#0D9488] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#0D9488]/10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0D9488] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Smart Growth</h3>
                <p className="text-[#94A3B8] mb-6">Essential + 1 new automation/mo + monthly report.</p>
                <div className="text-5xl font-bold mb-8">$999<span className="text-xl text-[#94A3B8] font-normal">/mo</span></div>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Everything in Essential Care</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 1 new automation built per month</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> SEO keyword tracking + GBP updates</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Weekly security scans</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> 3 hours content updates/mo</li>
                </ul>
                <Link href="/free-audit">
                  <Button className="w-full bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">Get Started</Button>
                </Link>
              </div>

              {/* Total Partner */}
              <div className="bg-[#0A0A0A] border border-[#1F2937] rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Total Partner</h3>
                <p className="text-[#94A3B8] mb-6">Full management + monthly strategy call + unlimited changes.</p>
                <div className="text-5xl font-bold mb-8">$1,500<span className="text-xl text-[#94A3B8] font-normal">/mo</span></div>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Everything in Smart Growth</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Monthly strategy + growth call</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Unlimited content changes</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Daily security scans</li>
                  <li className="flex items-start text-[#94A3B8]"><span className="text-[#0D9488] mr-3 mt-0.5">✔</span> Weekly GBP updates</li>
                </ul>
                <Link href="/free-audit">
                  <Button variant="outline" className="w-full border-[#1F2937]">Get Started</Button>
                </Link>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-[#94A3B8]">
            <p>Care plans are discussed after your project is complete. Not sure what you need? Start with the free audit.</p>
          </div>
        </section>

        {/* Founding Partner Note */}
        <section className="px-6 lg:px-8 py-16 bg-[#0D9488]/5 border-y border-[#0D9488]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Founding Partner Program</h2>
            <p className="text-[#94A3B8] mb-6">
              The first 3 clients receive <span className="text-white font-semibold">40% off</span> standard pricing in exchange for a detailed written case study, permission to use your results in marketing, and a short recorded video testimonial or written quote with photo.
            </p>
            <p className="text-sm text-[#94A3B8]">
              Founding pricing locks for 12 months, then auto-renews at standard rate.
            </p>
            <div className="mt-8">
              <Link href="/free-audit">
                <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white px-8">
                  Apply as a Founding Partner →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 lg:px-8 py-24 border-t border-[#1F2937] bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#1F2937] rounded-xl bg-black overflow-hidden transition-all">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center font-medium"
                  >
                    {faq.q}
                    <span className="text-[#0D9488] ml-4 flex-shrink-0">{openFaqIndex === index ? '−' : '+'}</span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4 text-[#94A3B8]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1F2937] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
