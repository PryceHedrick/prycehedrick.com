import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Pryce Hedrick — CS grad, IT administrator, and builder of AI-powered business systems in Southern Indiana.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-24 max-w-5xl mx-auto">
          {/* Intro — two column with portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Hi. I&apos;m Pryce.
              </h1>
              <p className="text-xl md:text-2xl text-[#94A3B8] mb-6 text-balance">
                By day, I manage the enterprise IT network for a school district — 500+ devices, multiple campuses, no margin for downtime.
              </p>
              <p className="text-xl text-[#94A3B8] text-balance">
                By night, I build automation systems for small businesses that are losing leads, wasting time on manual work, and getting outcompeted by businesses with better tech.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/pryce-headshot.png"
                alt="Pryce Hedrick — Founder, Pryceless Solutions"
                width={480}
                height={480}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
              <div className="text-[#0D9488] text-sm font-semibold uppercase tracking-wider mb-2">Education</div>
              <div className="font-bold text-lg mb-1">CS Degree</div>
              <div className="text-[#94A3B8] text-sm">University of Southern Indiana, 2024</div>
            </div>
            <div className="bg-[#111827] border border-[#D97706]/30 rounded-2xl p-6">
              <div className="text-[#D97706] text-sm font-semibold uppercase tracking-wider mb-2">Award</div>
              <div className="font-bold text-lg mb-1">Outstanding Senior Project</div>
              <div className="text-[#94A3B8] text-sm">USI Computer Science, 2024</div>
            </div>
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
              <div className="text-[#0D9488] text-sm font-semibold uppercase tracking-wider mb-2">Day Job</div>
              <div className="font-bold text-lg mb-1">Enterprise IT Administrator</div>
              <div className="text-[#94A3B8] text-sm">500+ devices, multi-campus network</div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6 text-lg text-[#94A3B8] mb-16">
            <p>
              Running a school district&apos;s IT infrastructure taught me something most developers never learn: real systems can&apos;t fail. When a network goes down, 500 students lose their school day. When a server breaks, teachers can&apos;t teach. That pressure forces a different kind of discipline — build it right, document it completely, and automate everything that can be automated.
            </p>
            <p>
              My senior capstone — an order management system for Panda International restaurant — won USI&apos;s 2024 Outstanding Senior Project Award. It replaced a manual, error-prone process and has been running in production for over two years without shipping errors.
            </p>
            <p>
              I built ARI — an AI operating system that runs my own business — to prove the concept before selling it to anyone else. It handles 24 scheduled tasks daily, manages multiple AI agents, monitors markets, sends briefings, and runs autonomously. It&apos;s the same type of system I build for clients, just personalized for how I work.
            </p>
            <p className="text-white font-medium">
              Now I build similar systems for Southern Indiana small businesses — HVAC shops, contractors, dental offices, retailers — who are losing customers because their tech is five years behind.
            </p>
          </div>

          {/* What I actually do */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">What I actually deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Websites that capture leads 24/7, not just sit there",
                "Automated follow-up sequences that replace manual calling",
                "Booking systems that fill your calendar while you&apos;re on a job",
                "CRM integrations that route leads to the right person automatically",
                "Code you own — no platform lock-in, no monthly markup",
                "Systems built on Make, N8N, Zapier — tools your team can understand",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#94A3B8]">
                  <svg className="h-5 w-5 text-[#0D9488] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>

          {/* Scarcity + CTA */}
          <div className="text-center">
            <p className="text-[#94A3B8] mb-4">Currently taking on a small number of new clients in Southern Indiana.</p>
            <p className="text-sm text-[#94A3B8] mb-8">Start with a free audit. No pitch, no pressure — just a clear look at what&apos;s costing you leads.</p>
            <Link href="/free-audit">
              <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white px-8 h-12 text-base">
                Work with me →
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1E293B] py-12 px-6 lg:px-8 text-center text-[#94A3B8] text-sm">
        <p>&copy; {new Date().getFullYear()} Pryceless Solutions. Built in Southern Indiana.</p>
      </footer>
    </div>
  );
}
