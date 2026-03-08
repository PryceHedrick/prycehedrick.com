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
        {/* Hero Section */}
        <AnimatedSection>
          <section className="px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-[#1E293B] px-3 py-1 text-sm font-medium text-[#94A3B8] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#0D9488] mr-2"></span>
              Now accepting new clients in Southern Indiana
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance">
              Stop Losing Customers to Missed Calls and Slow Follow-Up.
            </h1>
            <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mb-10 text-balance">
              Custom websites and AI-powered automation for Southern Indiana small businesses. Built to capture leads, book appointments, and follow up automatically — 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/free-audit">
                <Button size="lg" className="text-base h-14 px-8 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white w-full sm:w-auto">
                  Get Your Free Business Automation Audit →
                </Button>
              </Link>
              <a href="tel:+18126109805">
                <Button size="lg" variant="outline" className="text-base h-14 px-8 border-[#1E293B] w-full sm:w-auto">
                  Call (812) 610-9805
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-[#94A3B8]">Free audit — no sales pressure, no obligation. Delivered within 48 hours.</p>
          </section>
        </AnimatedSection>

        {/* Pain Points Strip */}
        <section className="border-y border-[#1E293B] bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#1E293B]">
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <PhoneOff className="h-8 w-8 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Losing calls to voicemail?</h3>
                <p className="text-[#94A3B8]">78% of customers go with the first business to respond. Automation captures leads before your competitors do.</p>
              </div>
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <Clock className="h-8 w-8 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Following up manually?</h3>
                <p className="text-[#94A3B8]">Every missed follow-up is a lost job. Automated sequences keep prospects warm while you&apos;re out on a call.</p>
              </div>
              <div className="pt-8 md:pt-0 px-4">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-8 w-8 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Invisible on Google?</h3>
                <p className="text-[#94A3B8]">A technically optimized site ranks locally. If you&apos;re not showing up, your competitor is getting that call.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Proof Point */}
        <section className="px-6 lg:px-8 py-16 bg-[#0D9488]/5 border-b border-[#0D9488]/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-medium text-[#F8FAFC] text-balance">
              The typical HVAC shop loses <span className="text-[#0D9488] font-bold">$25,000/year</span> to missed calls.
              Our Lead Capture Starter pays for itself in the first month.
            </p>
          </div>
        </section>

        {/* Why Pryceless */}
        <section className="px-6 lg:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Pryceless Solutions?</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">Enterprise-grade systems at small business prices. Built and managed locally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
              <div className="h-12 w-12 rounded-lg bg-[#0D9488]/10 flex items-center justify-center mb-6 text-[#0D9488]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Built in Southern Indiana</h3>
              <p className="text-[#94A3B8]">Local business knowledge, local market SEO. We know Vincennes, Jasper, Bedford, and Washington — and how to rank there.</p>
            </div>

            <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
              <div className="h-12 w-12 rounded-lg bg-[#0D9488]/10 flex items-center justify-center mb-6 text-[#0D9488]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Stack, Local Price</h3>
              <p className="text-[#94A3B8]">The same technology Fortune 500 companies pay $50,000+ for — at a price that makes sense for small business.</p>
            </div>

            <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl">
              <div className="h-12 w-12 rounded-lg bg-[#0D9488]/10 flex items-center justify-center mb-6 text-[#0D9488]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated From Day One</h3>
              <p className="text-[#94A3B8]">Every project includes automation that works while you sleep: lead capture, booking, follow-up sequences, and CRM routing.</p>
            </div>

            <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl md:col-span-2 lg:col-span-1">
              <div className="h-12 w-12 rounded-lg bg-[#0D9488]/10 flex items-center justify-center mb-6 text-[#0D9488]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">You Own Everything</h3>
              <p className="text-[#94A3B8]">Full source code ownership. Built on tools you control — no platform subscriptions, no GoHighLevel markup, no vendor lock-in.</p>
            </div>

            <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-2xl md:col-span-2">
              <div className="h-12 w-12 rounded-lg bg-[#0D9488]/10 flex items-center justify-center mb-6 text-[#0D9488]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fixed Price, No Surprises</h3>
              <p className="text-[#94A3B8]">No retainer lock-ins, no hidden invoices. Fixed-scope projects with clear timelines. Start with a free audit — then we&apos;ll scope your project together.</p>
            </div>
          </div>
        </section>

        {/* Packages Preview */}
        <section className="px-6 lg:px-8 py-24 bg-[#111827] border-y border-[#1E293B]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Transparent Pricing.</h2>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">Enterprise quality shouldn&apos;t require enterprise guesswork.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Lead Capture Starter</h3>
                <p className="text-[#94A3B8] mb-6">1 automation + website. Captures leads while you work.</p>
                <div className="text-4xl font-bold mb-8">$997</div>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#0D9488] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Website or chatbot + lead form</li>
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#0D9488] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Automated lead notification</li>
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#0D9488] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 30-day post-launch support</li>
                </ul>
                <Link href="/free-audit">
                  <Button variant="outline" className="w-full border-[#1E293B]">Start with a Free Audit</Button>
                </Link>
              </div>

              <div className="bg-[#0F172A] border-2 border-[#D97706] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#D97706]/10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D97706] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Business Automation System</h3>
                <p className="text-[#94A3B8] mb-6">Website + 2–3 automations + CRM. Runs your follow-up pipeline.</p>
                <div className="text-4xl font-bold mb-8">$2,200</div>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Website + booking integration</li>
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> CRM integration + email sequence</li>
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 60-day post-launch support</li>
                </ul>
                <Link href="/free-audit">
                  <Button className="w-full bg-[#D97706] hover:bg-[#D97706]/90 text-white">Start with a Free Audit</Button>
                </Link>
              </div>

              <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Full AI Buildout</h3>
                <p className="text-[#94A3B8] mb-6">Custom workflows + full system. The complete revenue machine.</p>
                <div className="text-4xl font-bold mb-8">$4,500</div>
                <ul className="flex-grow space-y-4 mb-8">
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#0D9488] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Custom automation workflows</li>
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#0D9488] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> AI chatbot + full CRM pipeline</li>
                  <li className="flex items-center text-[#94A3B8]"><svg className="h-5 w-5 mr-3 text-[#0D9488] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 90-day post-launch support</li>
                </ul>
                <Link href="/free-audit">
                  <Button variant="outline" className="w-full border-[#1E293B]">Start with a Free Audit</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/pricing" className="text-[#0D9488] hover:text-[#0D9488]/80 font-medium transition-colors">
                View full pricing + monthly care plans &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Meet Pryce */}
        <section className="py-24 px-6 lg:px-8 bg-[#0F172A]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/pryce-headshot.png"
                alt="Pryce Hedrick — Founder, Pryceless Solutions"
                width={420}
                height={420}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-[#0D9488] uppercase tracking-wider mb-4">Who builds this</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Hi. I&apos;m Pryce.</h2>
              <p className="text-lg text-[#94A3B8] mb-4">
                CS grad from USI. Enterprise IT administrator by day (500+ device network). I built ARI — an AI OS that runs my own business — and now I build similar systems for Southern Indiana businesses.
              </p>
              <p className="text-lg text-[#94A3B8] mb-8">
                I&apos;m currently taking on a small number of founding clients. If you want your business running while you sleep, let&apos;s talk.
              </p>
              <Link href="/free-audit">
                <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
                  Get Your Free Audit →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 lg:px-8 py-32 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to stop losing customers to missed calls?</h2>
          <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">Start with a free business automation audit. No pitch, no obligation — just a clear look at what&apos;s costing you leads.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit">
              <Button size="lg" className="text-base h-14 px-8 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
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
      </main>

      <footer className="border-t border-[#1E293B] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
