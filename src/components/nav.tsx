"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
    <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-[#1E293B] relative z-50">
      <Link href="/" className="font-semibold text-xl tracking-tight text-[#F8FAFC]">
        Pryceless Solutions
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-[#94A3B8]">
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

      {/* Desktop phone */}
      <a
        href="tel:+18126109805"
        onClick={handlePhoneClick}
        className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        (812) 610-9805
      </a>

      {/* Mobile: phone + hamburger */}
      <div className="flex md:hidden items-center gap-4">
        <a
          href="tel:+18126109805"
          onClick={handlePhoneClick}
          className="text-sm font-medium text-[#0D9488]"
        >
          (812) 610-9805
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#94A3B8] hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-[#0F172A] border-b border-[#1E293B] md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-1 transition-colors ${
                  pathname === href ? "text-white" : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
