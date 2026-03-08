import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { AnimatedSection } from "@/components/animated-section";
import { PhoneOff, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center max-w-5xl mx-auto">
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
            Your leads get captured, followed up with, and booked — automatically, around the clock.
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
                <h3 className="text-lg font-semibold mb-2">Calls going to voicemail?</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  78% of customers hire the first business that responds. If you&apos;re calling back hours later, the job&apos;s already gone.
                </p>
              </div>
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <Clock className="h-7 w-7 text-[#0ea5e9]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Chasing leads manually?</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Every missed follow-up is a lost job. Automated sequences keep leads warm while you&apos;re out on a call.
                </p>
              </div>
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-7 w-7 text-[#0ea5e9]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Not showing up on Google?</h3>
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
              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Built in Southern Indiana</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Local SEO knowledge, local market context. I know Vincennes, Jasper, Bedford, and Washington — and how to rank there.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tools You Actually Own</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Built on Make, Zapier, HubSpot — tools you control. No GoHighLevel markup, no platform subscriptions from me, no vendor lock-in.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Automated From Day One</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Every project includes automation that runs while you work: lead capture, booking, follow-up sequences, CRM routing.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
                <div className="h-11 w-11 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-5 text-[#0ea5e9]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">You Own the Code</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Full source code ownership. When the project is done, everything is yours — no ongoing fees to me unless you choose a care plan.
                </p>
              </div>

              <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl md:col-span-2 lg:col-span-1">
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

        {/* ── Packages Preview ──────────────────────────────── */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-24 bg-[#111827] border-y border-[#1E293B]">
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
                  <ul className="flex-grow space-y-3 mb-8 text-sm text-[#94A3B8]">
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
                  <ul className="flex-grow space-y-3 mb-8 text-sm text-[#94A3B8]">
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
                  <ul className="flex-grow space-y-3 mb-8 text-sm text-[#94A3B8]">
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
                <Image
                  src="/pryce-headshot.png"
                  alt="Pryce Hedrick — Founder, Pryceless Solutions"
                  width={420}
                  height={420}
                  sizes="(max-width: 1024px) 280px, 420px"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-4">
                  Who you&apos;re working with
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Hi. I&apos;m Pryce.
                </h2>
                <p className="text-lg text-[#CBD5E1] mb-4">
                  CS degree from USI. By day, I manage the IT network for a school district — 500+ devices, multiple buildings, no tolerance for downtime. By night, I build automation systems for Southern Indiana businesses losing revenue because their tech isn&apos;t keeping up.
                </p>
                <p className="text-lg text-[#CBD5E1] mb-8">
                  I built ARI — an AI operating system I use to run my own business — before I sold the concept to anyone. I&apos;m taking on a small number of founding clients right now.
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
