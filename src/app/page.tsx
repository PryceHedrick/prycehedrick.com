import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { AnimatedSection } from "@/components/animated-section";
import { PhoneOff, Clock, MapPin } from "lucide-react";

const comparisonRows = [
  { label: "Monthly cost",     diy: "$20–100",            agencies: "$800–2,500",  pryceless: "$0 from me" },
  { label: "You own the code", diy: "✗",                  agencies: "✗",           pryceless: "✓" },
  { label: "Build time",       diy: "Weeks of your time", agencies: "4–8 weeks",   pryceless: "2–4 weeks" },
  { label: "Platform lock-in", diy: "Yes",                agencies: "Yes",         pryceless: "None" },
  { label: "Local knowledge",  diy: "None",               agencies: "Generic",     pryceless: "Southern Indiana" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center max-w-5xl mx-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,165,233,0.12),transparent)] pointer-events-none"
            aria-hidden="true"
          />
          {/* CSS animation — no JS, no opacity:0 flash */}
          <div className="inline-flex items-center rounded-full border border-[#1E293B] px-3 py-1 text-sm font-medium text-[#94A3B8] mb-8 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-[#0ea5e9] mr-2 flex-shrink-0" aria-hidden="true" />
            Now accepting new clients in Southern Indiana
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance animate-fade-up animate-fade-up-delay-1">
            Missed calls are costing you jobs.
          </h1>
          <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl mb-10 text-balance animate-fade-up animate-fade-up-delay-2">
            Custom websites and AI automation for Southern Indiana small businesses.
            Your leads get captured, followed up with, and booked — automatically, while you&apos;re out on a job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up animate-fade-up-delay-3">
            <Link href="/free-audit">
              <Button size="lg" className="text-base h-14 px-8 bg-[#0ea5e9] hover:bg-[#0284C7] text-white w-full sm:w-auto">
                Get Your Free Business Audit →
              </Button>
            </Link>
            <a href="tel:+18126109805">
              <Button size="lg" variant="outline" className="text-base h-14 px-8 border-[#1E293B] w-full sm:w-auto">
                Call (812) 610-9805
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-[#94A3B8] animate-fade-up animate-fade-up-delay-3">
            Free, no-obligation audit delivered within 48 hours.
          </p>
        </section>

        {/* ── Pain Points ───────────────────────────────────── */}
        <section className="border-y border-[#1E293B] bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#1E293B]">
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <PhoneOff className="h-7 w-7 text-[#0ea5e9]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Missed calls cost you jobs.</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  78% of customers hire the first business that responds. If you&apos;re calling back hours later, the job&apos;s already gone.
                </p>
              </div>
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <Clock className="h-7 w-7 text-[#0ea5e9]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Manual follow-up loses warm leads.</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Every missed follow-up is a lost job. Automated sequences keep leads warm while you&apos;re out on a call.
                </p>
              </div>
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-7 w-7 text-[#0ea5e9]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">If you can&apos;t be found, they call someone else.</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  A technically built site ranks locally. If you&apos;re not in the top results, your competitor is getting that call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI Proof ─────────────────────────────────────── */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-16 bg-[#0ea5e9]/5 border-b border-[#0ea5e9]/20">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-medium text-[#F8FAFC] text-balance">
                A typical HVAC shop loses{" "}
                <span className="text-[#0ea5e9] font-bold">$25,000 a year</span>{" "}
                to missed calls. The Lead Capture Starter pays for itself in the first month.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* ── Why Pryceless ─────────────────────────────────── */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-24 md:py-32 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Pryceless Solutions?</h2>
              <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
                Built locally. Priced honestly. No vendor lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl transition-all duration-200 hover:border-[#334155] hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Built in Southern Indiana</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Local SEO knowledge, local market context. I know Vincennes, Jasper, Bedford, and Washington — and how to rank there.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl transition-all duration-200 hover:border-[#334155] hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tools You Actually Own</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Built on Make, Zapier, HubSpot — tools you control. No GoHighLevel markup, no platform subscriptions from me, no vendor lock-in.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl transition-all duration-200 hover:border-[#334155] hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Automated From Day One</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Every project includes automation that runs while you work: lead capture, booking, follow-up sequences, CRM routing.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl transition-all duration-200 hover:border-[#334155] hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">You Own the Code</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Full source code ownership. When the project is done, everything is yours — no ongoing fees to me unless you choose a care plan.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl md:col-span-2 lg:col-span-1 transition-all duration-200 hover:border-[#334155] hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fixed Price. No Surprises.</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  No retainer lock-ins, no scope creep, no hidden invoices. Start with a free audit — then we scope your project before any money changes hands.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ── How It Works ──────────────────────────────────── */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-24 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How it works.</h2>
              <p className="text-[#CBD5E1] text-lg">
                A clear process. A fixed price. No surprises.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "Free audit",
                  body: "Submit the form. Within 48 hours I'll send you a Loom or PDF identifying 3–5 specific gaps costing you leads. No sales call, no obligation.",
                },
                {
                  num: "02",
                  title: "Fixed scope",
                  body: "We agree on exactly what gets built, what it costs, and when it's done. Half upfront. Half on delivery. No surprises.",
                },
                {
                  num: "03",
                  title: "We build it",
                  body: "You keep running your business. Design, code, automations, and setup are handled. Typical timeline: 2–4 weeks.",
                },
                {
                  num: "04",
                  title: "You own it",
                  body: "Full source code. No monthly fees to me. Care plans are optional — only if you want ongoing support after launch.",
                },
              ].map((step) => (
                <div key={step.num} className="flex flex-col">
                  <div className="text-8xl font-bold text-[#1E293B] leading-none mb-4">{step.num}</div>
                  <div className="text-lg font-semibold mb-2">{step.title}</div>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* ── Comparison Table ──────────────────────────────── */}
        <AnimatedSection>
          <section className="bg-[#111827] border-y border-[#1E293B]">
            <div className="px-6 lg:px-8 py-24 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How we compare.</h2>
                <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto mb-4">
                  Neither DIY nor agencies are the right fit for most local businesses. Here&apos;s why.
                </p>
                <p className="text-[#94A3B8] text-sm max-w-xl mx-auto">
                  DIY tools take more of your time than expected — and you still don&apos;t own a
                  professional system. Agencies charge for platforms you don&apos;t control. There&apos;s
                  a third option most people don&apos;t know exists.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#1E293B]">
                {/* Column headers */}
                <div className="grid grid-cols-3">
                  <div className="bg-[#0F172A] border-r border-[#1E293B] p-8">
                    <div className="text-lg font-semibold mb-1">DIY Tools</div>
                    <div className="text-xs text-[#94A3B8]">Wix, Squarespace, etc.</div>
                  </div>
                  <div className="bg-[#0F172A] border-r border-[#1E293B] p-8">
                    <div className="text-lg font-semibold mb-1">Agencies</div>
                    <div className="text-xs text-[#94A3B8]">Design firms / GHL resellers</div>
                  </div>
                  <div className="bg-[#0ea5e9]/5 p-8">
                    <div className="mb-3">
                      <span className="bg-[#0ea5e9] text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">
                        Recommended
                      </span>
                    </div>
                    <div className="text-lg font-semibold mb-1">Pryceless Solutions</div>
                    <div className="text-xs text-[#0ea5e9]">Southern Indiana</div>
                  </div>
                </div>
                {/* Data rows */}
                {comparisonRows.map((row) => (
                  <div key={row.label} className="border-t border-[#1E293B]">
                    <div className="px-8 pt-3 pb-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">{row.label}</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-[#0F172A] border-r border-[#1E293B] px-8 pb-4 text-sm">
                        <span className={row.diy === "✗" ? "text-[#475569]" : "text-[#CBD5E1]"}>{row.diy}</span>
                      </div>
                      <div className="bg-[#0F172A] border-r border-[#1E293B] px-8 pb-4 text-sm">
                        <span className={row.agencies === "✗" ? "text-[#475569]" : "text-[#CBD5E1]"}>{row.agencies}</span>
                      </div>
                      <div className="bg-[#0ea5e9]/5 px-8 pb-4 text-sm">
                        <span className={row.pryceless === "✓" ? "text-[#0ea5e9] font-bold" : "text-[#CBD5E1]"}>{row.pryceless}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ── Packages Preview ──────────────────────────────── */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-24 bg-[#111827] border-b border-[#1E293B]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Simple, transparent pricing.
                </h2>
                <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
                  Three packages. Fixed scope. No monthly fees unless you want them.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter */}
                <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">Lead Capture Starter</h3>
                  <p className="text-[#94A3B8] text-sm mb-6">Website + lead capture + automated notification.</p>
                  <div className="text-4xl font-bold mb-8">$997</div>
                  <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Website or chatbot + lead form
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Automated lead notification
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      30-day post-launch support
                    </li>
                  </ul>
                  <Link href="/free-audit">
                    <Button variant="outline" className="w-full border-[#1E293B]">
                      Start with a Free Audit
                    </Button>
                  </Link>
                </div>

                {/* Most Popular */}
                <div className="bg-[#0F172A] border-2 border-[#D97706] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#D97706]/10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D97706] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Business Automation System</h3>
                  <p className="text-[#94A3B8] text-sm mb-6">Website + automations + CRM. Runs your follow-up pipeline.</p>
                  <div className="text-4xl font-bold mb-8">$2,200</div>
                  <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Website + appointment booking
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      CRM integration + email sequence
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      60-day post-launch support
                    </li>
                  </ul>
                  <Link href="/free-audit">
                    <Button className="w-full bg-[#D97706] hover:bg-[#B45309] text-white">
                      Start with a Free Audit
                    </Button>
                  </Link>
                </div>

                {/* Full Buildout */}
                <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">Full AI Buildout</h3>
                  <p className="text-[#94A3B8] text-sm mb-6">Custom workflows + full system integration.</p>
                  <div className="text-4xl font-bold mb-8">$4,500</div>
                  <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Custom automation workflows
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      AI chatbot + full CRM pipeline
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      90-day post-launch support
                    </li>
                  </ul>
                  <Link href="/free-audit">
                    <Button variant="outline" className="w-full border-[#1E293B]">
                      Start with a Free Audit
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/pricing"
                  className="text-[#0ea5e9] hover:text-[#0ea5e9]/80 font-medium transition-colors text-sm"
                >
                  View full pricing + monthly care plans →
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ── Meet Pryce ────────────────────────────────────── */}
        <AnimatedSection>
          <section className="py-24 px-6 lg:px-8 bg-[#0F172A]">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative inline-block">
                  <Image
                    src="/pryce-headshot.png"
                    alt="Pryce Hedrick — Founder, Pryceless Solutions"
                    width={420}
                    height={420}
                    sizes="(max-width: 1024px) 280px, 420px"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A0F1E]/85 backdrop-blur-sm border border-[#D97706]/40 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-[#D97706] flex-shrink-0"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                      </svg>
                      <div>
                        <div className="text-xs font-bold text-[#D97706]">USI 2024 Outstanding Senior Project</div>
                        <div className="text-xs text-[#94A3B8]">Computer Science Department</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-4">
                  Who you&apos;re working with
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Hi. I&apos;m Pryce.
                </h2>
                <p className="text-lg text-[#CBD5E1] mb-4">
                  CS degree from USI. I run the IT infrastructure for a school district — 500+ devices, multiple buildings, zero tolerance for downtime. That discipline is what I bring to every client project.
                </p>
                <p className="text-lg text-[#CBD5E1] mb-8">
                  My senior project — a custom order system for a restaurant in Vincennes — won USI&apos;s
                  2024 Outstanding Senior Project Award and has been running in production for two years
                  without a single shipping error. That&apos;s the standard I hold every project to.
                </p>
                <Link href="/free-audit">
                  <Button className="bg-[#0ea5e9] hover:bg-[#0284C7] text-white">
                    Get Your Free Audit →
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ── Final CTA ─────────────────────────────────────── */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-32 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to stop losing jobs to missed calls?
            </h2>
            <p className="text-xl text-[#CBD5E1] mb-10 max-w-2xl mx-auto">
              Start with a free business audit. No pitch, no obligation — just a clear look at what&apos;s costing you leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="text-base h-14 px-8 bg-[#0ea5e9] hover:bg-[#0284C7] text-white">
                  Get Your Free Audit →
                </Button>
              </Link>
              <a href="tel:+18126109805">
                <Button size="lg" variant="outline" className="text-base h-14 px-8 border-[#1E293B]">
                  Call (812) 610-9805
                </Button>
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="border-t border-[#1E293B] py-12 px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-semibold text-[#F8FAFC] mb-2">Pryceless Solutions</div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              AI automation and custom websites for Southern Indiana small businesses.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">Pages</div>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Work" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">Contact</div>
            <div className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              <a href="tel:+18126109805" className="hover:text-white transition-colors">
                (812) 610-9805
              </a>
              <a href="mailto:prycehedrick@gmail.com" className="hover:text-white transition-colors">
                prycehedrick@gmail.com
              </a>
              <span>Loogootee, IN — Southern Indiana</span>
            </div>
            <div className="mt-5">
              <Link
                href="/free-audit"
                className="inline-flex items-center h-9 px-4 rounded-lg text-sm font-semibold bg-[#0ea5e9] text-white hover:bg-[#0284C7] transition-colors"
              >
                Free Audit →
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1E293B] pt-6 text-center text-xs text-[#64748B]">
          © {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.
        </div>
      </footer>
    </div>
  );
}
