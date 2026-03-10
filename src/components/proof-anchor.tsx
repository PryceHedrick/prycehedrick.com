import Link from "next/link";

const stats = [
  { value: "800+", label: "Students served", sub: "K-12 IT fleet — Loogootee, IN" },
  { value: "3", label: "Projects shipped", sub: "Panda OMS · Vault · Pryceless Sites" },
  { value: "48h", label: "Audit turnaround", sub: "Free, no sales call, delivered as a document" },
];

export function ProofAnchor() {
  return (
    <section className="py-20 bg-[#0d1829] border-y border-[#1E293B]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0ea5e9] text-center mb-3">
          Real Projects. Verified Results.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC] mb-16">
          Built here. Still running.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#111827] border border-[#1E293B] p-8 text-center
                         shadow-[0_0_40px_rgba(14,165,233,0.04)]"
            >
              <div className="text-5xl font-black text-[#0ea5e9] mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-[#F8FAFC] mb-1">{stat.label}</div>
              <div className="text-xs text-[#94A3B8]">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Case study pull — honest, no fabricated quote */}
        <div className="rounded-2xl bg-[#111827] border border-[#D97706]/30 p-8">
          <div className="flex items-start gap-4">
            <svg
              className="h-5 w-5 text-[#D97706] flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-[#F8FAFC] mb-1">
                Panda International OMS — USI Senior Capstone
              </p>
              <p className="text-sm text-[#CBD5E1]">
                Built for a real client as a USI CS483 senior capstone. C#, ASP.NET Core, SQL Server,
                multi-carrier shipping API integration. Real stakeholder, real requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="text-sm text-[#0ea5e9] hover:text-[#0ea5e9]/80 font-medium transition-colors"
          >
            See the work →
          </Link>
        </div>
      </div>
    </section>
  );
}
