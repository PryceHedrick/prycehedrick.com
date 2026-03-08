"use client";

import { useState } from "react";

export type FaqItem = {
  category: string;
  q: string;
  a: string;
};

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((f) => f.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#0ea5e9] text-white"
                : "bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-2.5">
        {filtered.map((faq, index) => (
          <div
            key={faq.q}
            className="border border-[#1E293B] rounded-xl bg-[#111827] overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 font-medium text-sm"
              aria-expanded={openIndex === index}
            >
              <span>{faq.q}</span>
              <span className="text-[#0ea5e9] flex-shrink-0 mt-0.5 text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-sm text-[#CBD5E1] leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
