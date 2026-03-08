import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { FaqList, type FaqItem } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Honest answers about AI automation pricing, process, and tools for Southern Indiana small businesses.",
  alternates: { canonical: "/faq" },
};

const faqs: FaqItem[] = [
  {
    category: "Automation",
    q: "What is AI automation and how does it actually help my business?",
    a: "AI automation connects your website, phone, email, and calendar into a system that works without you. When a lead fills out your form at 10pm, the system immediately texts them, adds them to your CRM, and books a call — all before you even see the notification. You wake up to a booked appointment instead of a cold lead.",
  },
  {
    category: "Automation",
    q: "How much time does automation actually save?",
    a: "Depends on your current process. Businesses that do manual follow-up, phone scheduling, and quote generation by hand typically recover 5–15 hours per week. At a conservative $50/hour billed value, that's $13,000–$39,000/year recovered — before counting the additional leads closed because follow-up is now instant instead of next-day.",
  },
  {
    category: "Automation",
    q: "What tools do you use? Will I have to pay for them ongoing?",
    a: "I use Make (formerly Integromat), N8N, or Zapier for automation — whichever fits your budget and complexity. HubSpot free tier handles CRM for most clients. Typical ongoing tool costs: $0–$50/month depending on volume. You own these accounts and pay them directly — there's no Pryceless markup on third-party tools.",
  },
  {
    category: "Automation",
    q: "What makes this different from GoHighLevel?",
    a: "GoHighLevel resellers white-label GHL and charge $800–$2,500/month for platform access with markup. You're paying for a subscription to someone else's software, which you lose if you stop paying. With Pryceless, your automations run on tools you control (Make, N8N, HubSpot), the code is yours, and there are no platform fees from me. When we're done, you own everything outright.",
  },
  {
    category: "Automation",
    q: "Can my existing website be connected to automations, or do I need a new one?",
    a: "We can connect automations to most existing websites via form embeds, Zapier webhooks, or direct API integration. If your current site is on Wix, Squarespace, or WordPress, we can usually wire in lead capture and follow-up without rebuilding. A new site is only necessary if your current one has technical problems that limit performance.",
  },
  {
    category: "Pricing",
    q: "Can I afford AI automation as a small business?",
    a: "The Lead Capture Starter is $997 — or $600 as a Founding Partner. If you currently lose even 2 jobs per month to slow follow-up at $500/job, that's $12,000/year. The system pays for itself in the first month. We can also do 50/50 split payments: half upfront, half on delivery.",
  },
  {
    category: "Pricing",
    q: "What's the Founding Partner program?",
    a: "The first 3 clients get 40% off standard pricing in exchange for a detailed written case study, permission to use your results in marketing, and a short video or written testimonial. Founding pricing: $997→$600, $2,200→$1,320, $4,500→$2,700. The discount locks for 12 months.",
  },
  {
    category: "Pricing",
    q: "Do you charge monthly fees?",
    a: "Monthly care plans are optional, not required. After your project is complete, we'll talk about whether ongoing monitoring, SEO updates, or additional automations make sense for your business. Plans start at $499/month. If you don't need ongoing support, there's no obligation.",
  },
  {
    category: "Pricing",
    q: "What's included in post-launch support?",
    a: "30, 60, or 90 days depending on the package — included in the project price. During that window: bug fixes, minor changes, performance tuning, and answering your team's questions about the automation system. After the window, any changes go through a care plan or hourly billing.",
  },
  {
    category: "Process",
    q: "How does the free audit work?",
    a: "Request a free audit — there's a link in the nav. Within 48 hours, I'll review your current website, Google presence, and any existing lead capture setup, then send you a Loom screen-recording or PDF identifying 3–5 specific gaps costing you revenue. No sales call. No obligation. The audit is yours to keep and act on — with or without me.",
  },
  {
    category: "Process",
    q: "How long does a project take?",
    a: "Lead Capture Starter: 1–2 weeks. Business Automation System: 2–4 weeks. Full AI Buildout: 4–6 weeks. Timeline depends on how fast you can review drafts and provide feedback. Scope is fixed at the start — no scope creep, no surprise delays.",
  },
  {
    category: "Process",
    q: "Do I need to sign a long-term contract?",
    a: "No. One-time projects use a simple agreement covering scope, timeline, and payment. Monthly care plans are month-to-month — cancel any time with 30 days notice. No lock-ins.",
  },
  {
    category: "Process",
    q: "What if I'm not happy with the result?",
    a: "We work through a revision process until you're satisfied. Every project includes a 90+ PageSpeed score guarantee on the website side. If the technical performance doesn't hit that mark, I fix it at no additional cost.",
  },
  {
    category: "Technical",
    q: "What technology stack do you use?",
    a: "Websites: Next.js + React + Tailwind CSS, deployed on Vercel (90+ PageSpeed guaranteed). Automations: Make, N8N, or Zapier. CRM: HubSpot (free tier covers most small businesses). AI integrations: OpenAI or Anthropic depending on use case. You own all of it — no proprietary tools.",
  },
  {
    category: "Technical",
    q: "Will my website rank on Google?",
    a: "Yes — technical SEO is built into every project. 90+ PageSpeed, proper schema markup, sitemap, robots.txt, Google Business Profile setup. Local ranking also depends on review volume and citation consistency, which we'll address in the audit. Results typically show in 60–90 days for local searches.",
  },
  {
    category: "Technical",
    q: "Who do you serve? Do you work outside Southern Indiana?",
    a: "Primary focus is Southern Indiana — Vincennes, Washington, Jasper, Bedford, Loogootee, Evansville, Bloomington. HVAC, plumbing, electrical, contractors, dental, chiro, retail, and restaurants are the best fit. Remote work is possible for the right project — reach out and we'll figure it out.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Nav />

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#CBD5E1] mb-12">
            Honest answers about AI automation, pricing, process, and what working together actually looks like.
          </p>

          <FaqList faqs={faqs} />

          <div className="mt-16 text-center">
            <p className="text-[#CBD5E1] mb-6">Still have questions? The fastest way to get answers is the free audit.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button className="bg-[#0ea5e9] hover:bg-[#0284C7] text-white px-8 h-12">
                  Get Your Free Audit →
                </Button>
              </Link>
              <a href="tel:+18126109805">
                <Button variant="outline" className="border-[#1E293B] px-8 h-12">
                  Call (812) 610-9805
                </Button>
              </a>
            </div>
          </div>
        </section>
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
