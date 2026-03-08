import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PricingTabs } from "@/components/pricing-tabs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent AI automation pricing for Southern Indiana small businesses. Lead Capture Starter from $997, Founding Partner discount (40% off), no retainer lock-ins.",
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
          name: "Lead Capture Starter",
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
          name: "Business Automation System",
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
          name: "Full AI Buildout",
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
            Start with a free audit. Then we scope your project together.
          </p>
          <p className="text-sm text-[#0ea5e9] mb-12 font-medium">
            50% upfront · 50% on delivery · No hidden fees
          </p>
        </section>

        {/* ── Interactive Tabs + Cards + FAQ ────────────── */}
        <PricingTabs />

        {/* ── Founding Partner ──────────────────────────── */}
        <section className="px-6 lg:px-8 py-16 bg-[#0ea5e9]/5 border-y border-[#0ea5e9]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Founding Partner Program</h2>
            <p className="text-[#CBD5E1] mb-5 leading-relaxed">
              The first 3 clients get{" "}
              <span className="text-white font-semibold">40% off</span>{" "}
              standard pricing in exchange for a detailed written case study, permission to use your results in marketing, and a short video or written testimonial.
            </p>
            <p className="text-sm text-[#CBD5E1] mb-8">
              Founding pricing locks for 12 months, then auto-renews at standard rate.
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
