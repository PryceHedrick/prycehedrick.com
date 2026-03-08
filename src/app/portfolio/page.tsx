import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Real projects built by Pryce Hedrick — client work and personal builds.",
};

const projects = [
  {
    label: "Client Project · Award-Winning",
    name: "Panda International OMS",
    description: "Order management system for a Vincennes restaurant. Replaced a manual, error-prone process with an automated order tracking and fulfillment pipeline.",
    highlights: [
      "Eliminated shipping errors across 2+ years of production use",
      "Won USI's 2024 Outstanding Senior Project Award",
      "Built with Python, Django, and custom warehouse integration",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Automation"],
    labelColor: "text-[#D97706]",
    borderColor: "border-[#D97706]/30",
  },
  {
    label: "Client Project",
    name: "CardGuys.store",
    description: "E-commerce platform that expanded a local Evansville sports card business beyond eBay. Custom storefront with inventory management and order automation.",
    highlights: [
      "Live e-commerce store serving real customers",
      "Expanded sales channels beyond eBay marketplace",
      "Custom inventory sync and automated order notifications",
    ],
    tech: ["Next.js", "React", "Stripe", "Automation"],
    labelColor: "text-[#0D9488]",
    borderColor: "border-[#0D9488]/30",
  },
  {
    label: "Personal Project · Internal Proof",
    name: "ARI (AI Operating System)",
    description: "A personal AI operating system I built to run my own business. 13-plugin architecture that handles scheduling, briefings, market monitoring, and autonomous task execution — running 24/7 on my local machine.",
    highlights: [
      "13-plugin architecture with named agents (ARI, NOVA, CHASE, DEX, RUNE, PULSE)",
      "24 scheduled tasks running daily across 3 time windows",
      "SQLite knowledge base with budget enforcement and governance",
    ],
    tech: ["TypeScript", "Node.js", "SQLite", "Discord API", "Multiple AI APIs"],
    labelColor: "text-[#94A3B8]",
    borderColor: "border-[#1F2937]",
  },
  {
    label: "Personal Project",
    name: "Vault — Pokemon TCG Tracker",
    description: "A portfolio tracker for Pokemon TCG cards. Pulls live price data, tracks collection value over time, and alerts on significant market moves.",
    highlights: [
      "Real-time price data from multiple TCG marketplaces",
      "Collection value tracking and portfolio analytics",
      "Demonstrates Python/Flask + real-time data pipeline",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "APIs"],
    labelColor: "text-[#94A3B8]",
    borderColor: "border-[#1F2937]",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-[#F8FAFC]">
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-[#1F2937]">
        <Link href="/" className="font-semibold text-xl tracking-tight">Pryceless Solutions</Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#94A3B8]">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/portfolio" className="text-white">Portfolio</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </nav>
        <a href="tel:+18126109805" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
          (812) 610-9805
        </a>
      </header>

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Real work. Real results.</h1>
            <p className="text-xl text-[#94A3B8]">
              Client projects and personal builds. No template demos, no fake stats — just honest descriptions of what was built and how it performed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`bg-[#0A0A0A] border ${project.borderColor} rounded-3xl p-8 flex flex-col`}
              >
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${project.labelColor}`}>
                  {project.label}
                </div>
                <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                <p className="text-[#94A3B8] mb-6">{project.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                      <svg className="h-4 w-4 text-[#0D9488] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1F2937] text-[#94A3B8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#94A3B8] mb-6">Ready to build something real for your business?</p>
            <Link href="/free-audit">
              <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white px-8 h-12">
                Get Your Free Business Automation Audit →
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1F2937] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
