import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation services for Southern Indiana small businesses — lead capture, workflow automation, and website + AI integration. See what fits.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    category: "Lead Generation",
    name: "Lead Capture & Follow-Up",
    tagline: "Stop losing customers to voicemail and slow response.",
    description:
      "78% of customers hire the first business that responds. If your competitor answers in five minutes and you call back in three hours, you lose the job — even if you do better work. Lead capture automation makes sure you always respond first.",
    whoFor:
      "HVAC, plumbing, electrical, contractors, dental, chiropractic — any business that lives on inbound calls.",
    outcomes: [
      "Leads captured 24/7 via form, chatbot, or missed-call text-back",
      "Automatic follow-up texts or emails sent within minutes of contact",
      "Lead routed to your phone or CRM with full context attached",
      "Appointments booked without a phone call",
    ],
    startingAt: "Starts at $997",
    roiExample:
      "50 missed calls a month × $500 per job = $25,000/year in lost work. Recovering half pays for this system in the first month.",
    accent: "#0ea5e9",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
    ),
    category: "Operations",
    name: "Workflow Automation",
    tagline: "Eliminate the manual work that eats your day.",
    description:
      "Scheduling calls, chasing invoices, answering the same questions, updating spreadsheets — every hour spent on that is an hour you're not billing. Workflow automation handles the repetitive back-office work so you can focus on what only you can do.",
    whoFor:
      "Service businesses, contractors, offices, and shops spending hours a week on scheduling, invoicing, admin, or data entry.",
    outcomes: [
      "Automated appointment scheduling and reminders",
      "Invoice follow-up sent automatically at 7, 14, and 30 days",
      "Job status updates pushed to your team automatically",
      "Repeat questions handled by a trained chatbot",
    ],
    startingAt: "Starts at $2,200",
    roiExample:
      "10 hours saved per week × $50 billed value = $26,000 recovered per year. The system pays for itself in under two months.",
    accent: "#D97706",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ),
    category: "Digital Infrastructure",
    name: "Website + AI Integration",
    tagline: "A website that works — not one that just sits there.",
    description:
      "Most small business websites are digital brochures. They look okay but don't generate anything. A properly built site with AI integration captures leads, answers questions, books appointments, and routes inquiries — automatically. It's not just a page, it's a system.",
    whoFor:
      "Any Southern Indiana business without a website, with an outdated one, or with one that isn't generating calls.",
    outcomes: [
      "Fast, mobile-optimized site built for local search (90+ PageSpeed score)",
      "AI chatbot trained on your business — answers questions, books calls",
      "Lead forms connected to your CRM and follow-up automation",
      "Google Business Profile setup and optimization",
    ],
    startingAt: "Starts at $997",
    roiExample:
      "Ranking in the top three local results for your main service keyword typically generates 5–10 new inbound calls per month that weren't happening before.",
    accent: "#0ea5e9",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">
        {/* ── Header ───────────────────────────────────────── */}
        <section className="px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Three ways I can help.
          </h1>
          <p className="text-xl text-[#CBD5E1] max-w-3xl">
            Each service solves a specific problem that's costing you revenue. Start with a free audit and I'll tell you which one fits.
          </p>
          <p className="text-sm text-[#94A3B8] mt-3 max-w-xl leading-relaxed">
            Lead Capture and Website + AI both start at $997 — they&apos;re different entry points. Lead Capture focuses on the automation layer; Website + AI focuses on the web presence. The Business Automation System combines both at $2,200.
          </p>
        </section>

        {/* ── Services ─────────────────────────────────────── */}
        <section className="px-6 lg:px-8 pb-24 max-w-6xl mx-auto space-y-10">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  {/* Category label */}
                  <div
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-4 px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                  >
                    {service.icon}
                    {service.category}
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
                  <p className="text-lg font-medium text-[#F8FAFC] mb-4">{service.tagline}</p>
                  <p className="text-[#CBD5E1] mb-6 leading-relaxed">{service.description}</p>
                  <p className="text-sm text-[#CBD5E1]">
                    <span className="text-white font-medium">Who this fits:</span>{" "}
                    {service.whoFor}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">
                      What you get
                    </h3>
                    <ul className="space-y-3">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                          <svg
                            className="h-4 w-4 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={service.accent}
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                      ROI example
                    </div>
                    <p className="text-sm text-[#CBD5E1]">{service.roiExample}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-xs text-[#94A3B8] mb-1">Starting price</div>
                      <div className="font-semibold">{service.startingAt}</div>
                    </div>
                    <Link href="/free-audit">
                      <Button
                        className="text-white"
                        style={{ backgroundColor: service.accent }}
                      >
                        Get Free Audit →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Bottom CTA ───────────────────────────────────── */}
        <section className="px-6 lg:px-8 py-24 text-center border-t border-[#1E293B] bg-[#111827]">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Not sure which service fits?
          </h2>
          <p className="text-[#CBD5E1] text-xl mb-10 max-w-2xl mx-auto">
            Start with a free business audit. I&apos;ll identify what&apos;s costing you leads and recommend the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit">
              <Button size="lg" className="h-12 px-8 bg-[#0ea5e9] hover:bg-[#0284C7] text-white">
                Get Your Free Audit →
              </Button>
            </Link>
            <a href="tel:+18126109805">
              <Button size="lg" variant="outline" className="h-12 px-8 border-[#1E293B]">
                Call (812) 610-9805
              </Button>
            </a>
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
