import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real projects by Pryce Hedrick — client builds and personal systems. Honest descriptions, real results.",
  alternates: { canonical: "/portfolio" },
};

type Stat = { value: string; label: string };

const projects = [
  {
    type: "client",
    badge: "Client · Award-Winning",
    badgeColor: "text-[#D97706]",
    ringColor: "ring-[#D97706]/30",
    name: "Panda International Order Management System",
    location: "Vincennes, IN",
    summary:
      "The restaurant was running orders through sticky notes and verbal handoffs. I built a custom order management and fulfillment system to replace the entire process.",
    outcome:
      "Zero shipping errors across 2+ years of continuous production use.",
    award: "USI 2024 Outstanding Senior Project Award",
    highlights: [
      "Replaced a manual, error-prone fulfillment workflow",
      "Live and running in production for over two years",
      "Won USI Computer Science department's top project award",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Automation"],
    screenshot: "/images/portfolio/panda-oms/screenshot.png",
    liveUrl: null as string | null,
    stats: [
      { value: "0", label: "Shipping errors since launch" },
      { value: "2+", label: "Years in production" },
      { value: "20+", label: "Hours saved weekly" },
    ] as Stat[],
  },
  {
    type: "client",
    badge: "Client · Live Store",
    badgeColor: "text-[#0ea5e9]",
    ringColor: "ring-[#0ea5e9]/30",
    name: "CardGuys.store",
    location: "Evansville, IN",
    summary:
      "A local sports card business was selling exclusively through eBay. I built a custom e-commerce storefront to expand their sales channel and automate order management.",
    outcome: "Live store serving real customers, expanded beyond eBay.",
    award: null as string | null,
    highlights: [
      "Custom storefront with inventory management",
      "Automated order notifications and fulfillment tracking",
      "Live and serving customers today",
    ],
    tech: ["Next.js", "React", "Stripe", "Automation"],
    screenshot: "/images/portfolio/cardguys/screenshot.png",
    liveUrl: "https://cardguys.store",
    stats: [
      { value: "Live", label: "Store active today" },
      { value: "New", label: "Revenue channel opened" },
      { value: "3+", label: "Payment options" },
    ] as Stat[],
  },
  {
    type: "personal",
    badge: "Personal · Internal Proof",
    badgeColor: "text-[#94A3B8]",
    ringColor: "ring-[#1E293B]",
    name: "ARI — AI Operating System",
    location: "Built for myself",
    summary:
      "Before selling the concept, I built it. ARI is a personal AI operating system I use to run my own business — scheduling, briefings, market monitoring, autonomous task execution.",
    outcome:
      "24 scheduled tasks running daily, 13 plugins, 6 named agents. Has been running continuously for months.",
    award: null as string | null,
    highlights: [
      "13-plugin architecture — scheduler, briefings, market alerts, agent coordination",
      "6 named agents handling different task domains",
      "SQLite knowledge base with budget enforcement and governance",
    ],
    tech: ["TypeScript", "Node.js", "SQLite", "Discord API", "Multiple AI APIs"],
    screenshot: "/images/portfolio/ari/screenshot.png",
    liveUrl: null as string | null,
    stats: null as Stat[] | null,
  },
  {
    type: "personal",
    badge: "Personal · Side Project",
    badgeColor: "text-[#94A3B8]",
    ringColor: "ring-[#1E293B]",
    name: "Vault — Pokémon TCG Tracker",
    location: "Built for fun",
    summary:
      "A portfolio tracker for Pokémon TCG cards. Pulls live price data from multiple marketplaces, tracks collection value over time, and flags significant moves.",
    outcome: "Demonstrates real-time data pipeline and API integration patterns.",
    award: null as string | null,
    highlights: [
      "Real-time price data from multiple TCG marketplaces",
      "Collection value tracking and portfolio analytics",
      "Live data pipeline with alert logic",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "APIs"],
    screenshot: "/images/portfolio/vault/screenshot.png",
    liveUrl: null as string | null,
    stats: null as Stat[] | null,
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">

        {/* ── Header ───────────────────────────────────────── */}
        <section className="px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Real work. Real results.
            </h1>
            <p className="text-xl text-[#CBD5E1]">
              Two client projects, two personal builds. No template demos, no invented metrics — just honest accounts of what was built and how it performed.
            </p>
          </div>
        </section>

        {/* ── Client Work ──────────────────────────────────── */}
        <section className="px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-6 flex items-center gap-3">
            <span>Client Projects</span>
            <span className="flex-1 h-px bg-[#1E293B]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((p) => p.type === "client")
              .map((project) => (
                <div
                  key={project.name}
                  className={`bg-[#111827] rounded-3xl overflow-hidden flex flex-col ring-1 ${project.ringColor}`}
                >
                  {/* Screenshot */}
                  <div className="relative bg-[#0A0F1E] border-b border-[#1E293B]">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} — screenshot`}
                      width={800}
                      height={500}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-64 object-cover object-top"
                    />
                    {/* Badge overlay */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#0A0F1E]/90 backdrop-blur-sm ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Location */}
                    <div className="text-xs text-[#94A3B8] mb-2 flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {project.location}
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl font-bold mb-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#0ea5e9] transition-colors"
                        >
                          {project.name} ↗
                        </a>
                      ) : (
                        project.name
                      )}
                    </h2>

                    <p className="text-[#CBD5E1] mb-5 leading-relaxed">{project.summary}</p>

                    {/* Outcome callout */}
                    <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl px-5 py-4 mb-5">
                      <div className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider mb-1">
                        Result
                      </div>
                      <p className="text-sm text-[#F8FAFC] font-medium">{project.outcome}</p>
                    </div>

                    {/* Stat bars */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-3 text-center">
                            <div className="text-2xl font-bold text-[#F8FAFC]">{stat.value}</div>
                            <div className="text-xs text-[#94A3B8] mt-0.5 leading-tight">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Award */}
                    {project.award && (
                      <div className="flex items-center gap-2 mb-5 text-sm text-[#D97706]">
                        <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                        <span className="font-medium">{project.award}</span>
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]">
                          <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#1E293B] text-[#94A3B8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ── Personal Builds ───────────────────────────────── */}
        <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-6 flex items-center gap-3">
            <span>Personal Builds</span>
            <span className="flex-1 h-px bg-[#1E293B]" />
          </div>
          <p className="text-sm text-[#CBD5E1] mb-8 max-w-2xl">
            Built for myself first. These are the systems I use to run Pryceless Solutions before offering them to clients.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.type === "personal")
              .map((project) => (
                <div
                  key={project.name}
                  className="bg-[#111827] border border-[#1E293B] rounded-3xl overflow-hidden flex flex-col"
                >
                  {/* Screenshot */}
                  <div className="relative bg-[#0A0F1E] border-b border-[#1E293B]">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} — screenshot`}
                      width={800}
                      height={500}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-56 object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#0A0F1E]/90 backdrop-blur-sm text-[#94A3B8]">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-3">{project.name}</h2>
                    <p className="text-[#CBD5E1] text-sm mb-5 leading-relaxed">{project.summary}</p>

                    <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl px-4 py-3.5 mb-5">
                      <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">
                        Status
                      </div>
                      <p className="text-sm text-[#F8FAFC]">{project.outcome}</p>
                    </div>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]">
                          <svg className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#1E293B] text-[#94A3B8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="px-6 lg:px-8 py-20 border-t border-[#1E293B] bg-[#111827] text-center">
          <p className="text-[#CBD5E1] mb-6 text-lg">
            Seen enough? Start with a free audit and let&apos;s scope your project.
          </p>
          <Link href="/free-audit">
            <Button className="bg-[#0ea5e9] hover:bg-[#0284C7] text-white px-8 h-12">
              Get Your Free Business Audit →
            </Button>
          </Link>
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
