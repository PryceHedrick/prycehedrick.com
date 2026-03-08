import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { AuditForm } from "@/components/audit-form";

export const metadata: Metadata = {
  title: "Free Business Audit",
  description:
    "Get a free AI automation audit for your Southern Indiana small business. 3–5 specific gaps identified, delivered as Loom video or PDF within 48 hours.",
  alternates: { canonical: "/free-audit" },
};

export default function FreeAudit() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Nav />

      <main className="flex-grow">
        <section className="px-6 lg:px-8 py-24 max-w-4xl mx-auto">
          <AuditForm />
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
