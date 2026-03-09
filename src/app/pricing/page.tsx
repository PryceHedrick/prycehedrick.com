import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PricingTabs } from "@/components/pricing-tabs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent AI automation pricing for Southern Indiana small businesses. Starter from $997, Growth $2,200, System $4,500. Monthly care plans from $249/mo. No retainer lock-ins.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pryceless Solutions — AI Automation Packages",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Offer",
          name: "Starter",
          description: "Website + lead capture + automated notification. Captures leads while you work.",
          price: "997",
          priceCurrency: "USD",
          url: "https://prycehedrick.com/pricing",
          seller: { "@type": "Organization", name: "Pryceless Solutions" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Offer",
          name: "Growth",
          description: "Website + 2–3 automations + CRM. Runs your full lead pipeline.",
          price: "2200",
          priceCurrency: "USD",
          url: "https://prycehedrick.com/pricing",
          seller: { "@type": "Organization", name: "Pryceless Solutions" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Offer",
          name: "System",
          description: "Custom automation workflows + full CRM pipeline + AI chatbot.",
          price: "4500",
          priceCurrency: "USD",
          url: "https://prycehedrick.com/pricing",
          seller: { "@type": "Organization", name: "Pryceless Solutions" },
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <Nav />

      <main className="flex-grow">
        {/* ── Header ───────────────────────────────────── */}
        <section className="px-6 lg:px-8 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-[#CBD5E1] mb-3">
            Start with a free audit. Then I scope your project with you.
          </p>
          <p className="text-sm text-[#0ea5e9] mb-12 font-medium">
            50% upfront · 50% on delivery · No hidden fees
          </p>
        </section>

        {/* ── Interactive Cards + FAQ ────────────────────── */}
        <PricingTabs />

        {/* ── Monthly Care Plans ────────────────────────── */}
        <section className="px-6 lg:px-8 pb-16 max-w-7xl mx-auto border-t border-[#1E293B] pt-16">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">
              Optional After Launch
            </p>
            <h2 className="text-3xl font-bold mb-4">Monthly Care Plans</h2>
            <p className="text-[#CBD5E1] max-w-xl mx-auto">
              Your site is yours after delivery. Care plans are for businesses that want
              ongoing updates, priority support, and someone who picks up when something breaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Care */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Essential Care</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">Monitoring + minor fixes + 48h response. Your system stays healthy.</p>
              <div className="text-5xl font-bold mb-8">
                $249<span className="text-xl text-[#94A3B8] font-normal">/mo</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Hosting & SSL management",
                  "24/7 uptime monitoring",
                  "Monthly security scans",
                  "1 hour content updates/mo",
                  "Response within 48 hours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-[#1E293B]">Ask About Care Plans</Button>
              </Link>
            </div>

            {/* Smart Growth */}
            <div className="bg-[#0A0F1E] border-2 border-[#0ea5e9] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#0ea5e9]/10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0ea5e9] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Growth</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">Essential + monthly content + A/B tweaks + priority support.</p>
              <div className="text-5xl font-bold mb-8">
                $499<span className="text-xl text-[#94A3B8] font-normal">/mo</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Everything in Essential Care",
                  "Monthly content updates",
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
              <Link href="/contact">
                <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284C7] text-white">Ask About Care Plans</Button>
              </Link>
            </div>

            {/* Total Partner */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Total Partner</h3>
              <p className="text-[#CBD5E1] text-sm mb-6">Weekly syncs + automation expansion + first call, always.</p>
              <div className="text-5xl font-bold mb-8">
                $999<span className="text-xl text-[#94A3B8] font-normal">/mo</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8 text-sm text-[#CBD5E1]">
                {[
                  "Everything in Smart Growth",
                  "Weekly strategy + growth call",
                  "Unlimited content changes",
                  "Automation expansion each month",
                  "Direct line — first call priority",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-[#1E293B]">Ask About Care Plans</Button>
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-[#94A3B8] mt-8">
            Care plans are month-to-month. Cancel any time with 30 days notice. Discussed after your project is complete.
          </p>
        </section>

        {/* ── Founding Partner ──────────────────────────── */}
        <section className="px-6 lg:px-8 py-16 bg-[#0ea5e9]/5 border-y border-[#0ea5e9]/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Founding Partner Rate</h2>
            <p className="text-[#CBD5E1] mb-5 leading-relaxed">
              I&apos;m taking on my first cohort of Southern Indiana clients at rates that won&apos;t exist
              once this fills. No discount on the project — you pay the standard rate and get the
              work done right. What Founding Partners get instead:
            </p>
            <ul className="space-y-2 mb-6 text-[#CBD5E1]">
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#0ea5e9] font-bold mt-0.5">·</span>
                <span><strong className="text-white">Starter contract</strong> → 30 days Essential Care free ($249 value)</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#0ea5e9] font-bold mt-0.5">·</span>
                <span><strong className="text-white">Growth contract</strong> → 60 days Smart Growth free ($998 value)</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#0ea5e9] font-bold mt-0.5">·</span>
                <span><strong className="text-white">System contract</strong> → 90 days Total Partner free ($2,997 value)</span>
              </li>
            </ul>
            <p className="text-sm text-[#CBD5E1] mb-4">
              After the free period, the care plan continues at the standard monthly rate unless you cancel.
              No obligation. No lock-in. Cancel before the trial ends and owe nothing.
            </p>
            <p className="text-sm text-[#94A3B8] mb-8">
              What I ask in return: one honest Google review, one short video testimonial, and two referrals when the time is right.
            </p>
            <Link href="/free-audit">
              <Button className="bg-[#0ea5e9] hover:bg-[#0284C7] text-white px-8">
                Apply as a Founding Partner →
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1E293B] py-12 px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-semibold text-[#F8FAFC] mb-2">Pryceless Solutions</div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">AI automation and custom websites for Southern Indiana small businesses.</p>
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
                <a key={href} href={href} className="text-sm text-[#94A3B8] hover:text-white transition-colors">{label}</a>
              ))}
            </nav>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">Contact</div>
            <div className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              <a href="tel:+18126109805" className="hover:text-white transition-colors">(812) 610-9805</a>
              <a href="mailto:prycehedrick@gmail.com" className="hover:text-white transition-colors">prycehedrick@gmail.com</a>
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
