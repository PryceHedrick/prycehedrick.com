"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fireEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.gtag) w.gtag("event", name, params);
  }
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handlePhoneClick = useCallback(() => {
    fireEvent("phone_click", { location: "nav" });
  }, []);

  return (
    <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-[#1E293B] relative z-50 bg-[#0F172A]">
      <Link href="/" className="font-semibold text-lg tracking-tight text-[#F8FAFC]">
        Pryceless Solutions
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-[#94A3B8]">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-white transition-colors ${pathname === href ? "text-white" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop: phone + audit CTA */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:+18126109805"
          onClick={handlePhoneClick}
          className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
        >
          (812) 610-9805
        </a>
        <Link
          href="/free-audit"
          className="inline-flex items-center h-9 px-4 rounded-lg text-sm font-semibold bg-[#0ea5e9] text-white hover:bg-[#0284C7] transition-colors"
          onClick={() => fireEvent("nav_audit_click")}
        >
          Free Audit →
        </Link>
      </div>

      {/* Mobile: phone + hamburger */}
      <div className="flex md:hidden items-center gap-4">
        <a
          href="tel:+18126109805"
          onClick={handlePhoneClick}
          className="text-sm font-medium text-[#0ea5e9]"
        >
          (812) 610-9805
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#94A3B8] hover:text-white p-1"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-[#0F172A] border-b border-[#1E293B] md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2.5 border-b border-[#1E293B] last:border-0 transition-colors ${
                  pathname === href ? "text-white" : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`text-base font-medium py-2.5 border-b border-[#1E293B] transition-colors ${
                pathname === "/contact" ? "text-white" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Contact
            </Link>
            <div className="pt-4 pb-2">
              <Link
                href="/free-audit"
                onClick={() => {
                  setOpen(false);
                  fireEvent("nav_audit_click", { location: "mobile" });
                }}
                className="flex items-center justify-center w-full h-11 rounded-lg bg-[#0ea5e9] text-white font-semibold text-sm"
              >
                Get a Free Audit →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
