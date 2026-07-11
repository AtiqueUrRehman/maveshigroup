"use client";

import { useState } from "react";
import type { FaqItem } from "../alpha-farms/content";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => (
        <div
          key={i}
          className="rounded-[16px] overflow-hidden"
          style={{
            background: "#FFFFFF",
            border: "1px solid #e2ddd5",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start cursor-pointer bg-transparent border-0"
            style={{ fontFamily: "inherit" }}
          >
            <span className="font-semibold text-[15px] leading-[1.35]" style={{ color: "#1a1916" }}>
              {faq.question}
            </span>
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-[18px] font-bold flex-shrink-0 transition-all duration-250"
              style={{
                background: open === i ? "#2A5C35" : "#EEF5F0",
                color: open === i ? "#fff" : "#2A5C35",
                border: "none",
              }}
            >
              {open === i ? "−" : "+"}
            </span>
          </button>

          <div
            style={{
              maxHeight: open === i ? 600 : 0,
              opacity: open === i ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(.2,.7,.2,1), opacity 0.4s cubic-bezier(.2,.7,.2,1)",
            }}
          >
            <p className="px-6 pb-5 m-0 text-[14.5px] leading-[1.65]" style={{ color: "#6b665c" }}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
