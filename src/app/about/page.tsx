import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pryce Hedrick builds AI automation systems for Southern Indiana small businesses. CS grad, USI 2024 Outstanding Senior Project Award, enterprise IT administrator.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pryce Hedrick",
    jobTitle: "AI Automation Engineer & Web Developer",
    url: "https://prycehedrick.com/about",
    image: "https://prycehedrick.com/pryce-headshot.png",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Southern Indiana",
    },
    award: "USI 2024 Outstanding Senior Project Award",
    description:
      "CS degree from USI. Enterprise IT administrator. AI automation builder for Southern Indiana small businesses.",
    worksFor: {
      "@type": "Organization",
      name: "Pryceless Solutions",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Nav />

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-20 max-w-5xl mx-auto">

          {/* ── Intro ─────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Hi. I&apos;m Pryce.
              </h1>
              <p className="text-xl text-[#CBD5E1] mb-5 text-balance leading-relaxed">
                I run the IT infrastructure for a school district — 500+ devices, multiple campuses, zero margin for downtime. That pressure teaches you to build systems that don&apos;t fail.
              </p>
              <p className="text-xl text-[#CBD5E1] text-balance leading-relaxed">
                Pryceless Solutions is where I apply that discipline to Southern Indiana businesses — HVAC shops, contractors, dental offices — who are losing customers because their tech is five years behind.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative inline-block">
                <Image
                  src="/pryce-headshot.png"
                  alt="Pryce Hedrick — Founder, Pryceless Solutions"
                  width={480}
                  height={480}
                  sizes="(max-width: 1024px) 320px, 480px"
                  className="rounded-2xl shadow-2xl"
                  priority
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
          </div>

          {/* ── Credentials ───────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
              <div className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-wider mb-2">
                Education
              </div>
              <div className="font-bold text-lg mb-1">CS Degree</div>
              <div className="text-[#94A3B8] text-sm">University of Southern Indiana, 2024</div>
            </div>
            <div className="bg-[#111827] border border-[#D97706]/40 rounded-2xl p-6">
              <div className="text-[#D97706] text-xs font-semibold uppercase tracking-wider mb-2">
                Award
              </div>
              <div className="font-bold text-lg mb-1">Outstanding Senior Project</div>
              <div className="text-[#94A3B8] text-sm">USI Computer Science, 2024</div>
            </div>
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
              <div className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-wider mb-2">
                Day Job
              </div>
              <div className="font-bold text-lg mb-1">Enterprise IT Administrator</div>
              <div className="text-[#94A3B8] text-sm">500+ devices, multi-campus network</div>
            </div>
          </div>

          {/* ── Story ─────────────────────────────────────── */}
          <div className="space-y-6 text-lg text-[#CBD5E1] mb-16 max-w-3xl leading-relaxed">
            <p>
              Running a school district&apos;s IT infrastructure taught me something most developers never learn: real systems can&apos;t fail. When a network goes down, 500 students lose their school day. When a server breaks, teachers can&apos;t teach. That pressure forces a different kind of discipline — build it right, document it completely, and automate everything that can be automated.
            </p>
            <p>
              My senior capstone — an order management system for Panda International restaurant in Vincennes — won USI&apos;s 2024 Outstanding Senior Project Award. It replaced a manual, error-prone process and has been running in production for over two years without a shipping error.
            </p>
            <p>
              I built ARI — an AI operating system I use to run my own business — before I sold the concept to anyone else. It handles scheduled tasks, manages AI agents, monitors markets, sends briefings, and runs autonomously on my local machine. Same type of system I build for clients, just built for how I work.
            </p>
            <p className="text-white font-medium">
              Now I build similar systems for Southern Indiana small businesses — HVAC shops, contractors, dental offices, retailers — who are losing customers because their tech is five years behind.
            </p>
          </div>

          {/* ── What I deliver ────────────────────────────── */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">What I actually build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Websites that capture leads around the clock, not just sit there",
                "Automated follow-up sequences that replace manual calling",
                "Booking systems that fill your calendar while you're on a job",
                "CRM integrations that route leads to the right person automatically",
                "Code you own — no platform lock-in, no monthly markup from me",
                "Systems built on Make, N8N, Zapier — tools your team can understand",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#CBD5E1] text-sm">
                  <svg
                    className="h-4 w-4 text-[#0ea5e9] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────── */}
          <div className="text-center">
            <p className="text-[#94A3B8] mb-3">
              Currently taking on a small number of new clients in Southern Indiana.
            </p>
            <p className="text-sm text-[#CBD5E1] mb-8">
              Start with a free audit. No pitch, no pressure — a clear look at what&apos;s costing you leads.
            </p>
            <Link href="/free-audit">
              <Button className="bg-[#0ea5e9] hover:bg-[#0284C7] text-white px-8 h-12 text-base">
                Start with a free audit →
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
