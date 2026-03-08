import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "AI automation services for Southern Indiana small businesses — lead capture, workflow automation, and website + AI integration.",
};

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    name: "Lead Capture & Follow-Up Automation",
    tagline: "Stop losing customers to voicemail and slow follow-up.",
    description: "78% of customers go with the first business to respond. If your competitor answers in 5 minutes and you call back in 3 hours, you lose the job — even if you&apos;re better. Lead capture automation makes sure you&apos;re always first.",
    whoFor: "HVAC, plumbing, electrical, contractors, dental, chiropractic — any business that lives and dies by inbound calls.",
    outcomes: [
      "Leads captured 24/7 via website form, chatbot, or missed-call text-back",
      "Automatic follow-up texts or emails sent within minutes",
      "Lead routed to your phone or CRM with all context included",
      "Appointment booked without a phone call",
    ],
    startingAt: "Starts at $997 (Lead Capture Starter)",
    roiExample: "A typical HVAC shop with 50 missed calls/month × $500/call = $25,000/year in lost leads. Recovering 50% pays for this system in the first month.",
    accent: "#0D9488",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
    ),
    name: "Workflow Automation",
    tagline: "Eliminate the manual work that&apos;s eating your day.",
    description: "Scheduling calls, chasing invoices, answering repeat questions, updating spreadsheets — every hour you spend on this is an hour you&apos;re not billing. Workflow automation handles the repetitive back-office work so you can focus on the work only you can do.",
    whoFor: "Service businesses, contractors, shops, and offices spending hours per week on scheduling, invoicing, admin, or data entry.",
    outcomes: [
      "Automated appointment scheduling and reminders",
      "Invoice follow-up sent automatically at 7, 14, and 30 days",
      "Inventory or job status updates pushed to your team",
      "Repeat questions answered by a trained chatbot",
    ],
    startingAt: "Starts at $2,200 (Business Automation System)",
    roiExample: "If automation saves 10 hours/week at $50/hour billed value, that&apos;s $26,000/year recaptured. The system pays for itself in under 2 months.",
    accent: "#D97706",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ),
    name: "Website + AI Integration",
    tagline: "A website that works. Not one that just sits there.",
    description: "Most small business websites are digital brochures — they look okay but generate zero leads. A properly built website with AI integration captures leads, answers common questions, books appointments, and routes inquiries automatically. It&apos;s not just a page, it&apos;s a system.",
    whoFor: "Any Southern Indiana business that either has no website, has one that&apos;s outdated, or has one that isn&apos;t generating calls.",
    outcomes: [
      "Next.js website optimized for local search (90+ PageSpeed score)",
      "AI chatbot trained on your business — answers questions, books calls",
      "Lead forms connected to CRM and follow-up automation",
      "Google Business Profile setup and optimization",
    ],
    startingAt: "Starts at $997 (website-first clients)",
    roiExample: "Ranking in the top 3 local search results for your primary service keyword typically generates 5–10 inbound calls/month that weren&apos;t happening before.",
    accent: "#0D9488",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">
        {/* Header */}
        <section className="px-6 lg:px-8 py-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            AI Automation Services for Indiana Small Businesses
          </h1>
          <p className="text-xl text-[#94A3B8] max-w-3xl">
            Three types of systems — each designed to solve a specific problem that&apos;s costing you revenue. Start with a free audit to find out which one fits.
          </p>
        </section>

        {/* Services */}
        <section className="px-6 lg:px-8 pb-24 max-w-6xl mx-auto space-y-12">
          {services.map((service, i) => (
            <div key={service.name} className="bg-[#0A0A0A] border border-[#1F2937] rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                  >
                    {service.icon}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: service.accent }}>
                    Service {i + 1} of 3
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
                  <p className="text-lg font-medium text-[#F8FAFC] mb-4">{service.tagline}</p>
                  <p className="text-[#94A3B8] mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                  <p className="text-sm text-[#94A3B8]">
                    <span className="text-white font-medium">Who this is for:</span> {service.whoFor}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">What you get</h3>
                    <ul className="space-y-3">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-[#94A3B8]">
                          <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={service.accent} strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black border border-[#1F2937] rounded-2xl p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">ROI example</div>
                    <p className="text-sm text-[#94A3B8]">{service.roiExample}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-xs text-[#94A3B8] mb-1">Pricing</div>
                      <div className="font-medium">{service.startingAt}</div>
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

        {/* Bottom CTA */}
        <section className="px-6 lg:px-8 py-24 text-center border-t border-[#1F2937] bg-[#0A0A0A]">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Not sure which service fits?</h2>
          <p className="text-[#94A3B8] text-xl mb-10 max-w-2xl mx-auto">
            Start with a free business automation audit. We&apos;ll identify exactly what&apos;s costing you leads and recommend the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit">
              <Button size="lg" className="h-12 px-8 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
                Get Your Free Audit →
              </Button>
            </Link>
            <a href="tel:+18126109805">
              <Button size="lg" variant="outline" className="h-12 px-8 border-[#1F2937]">
                Call (812) 610-9805
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1F2937] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
