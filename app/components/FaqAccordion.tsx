"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What does the monthly care fee cover?",
    answer: "The monthly care fee (Rs 12,000–15,000) covers full feed, veterinary check-ups, grooming, and housing at our farm. You receive monthly photo and video updates of your goat so you can follow its progress.",
  },
  {
    question: "What happens if the goat gets sick or passes away?",
    answer: "In the rare event of illness, we cover all veterinary costs at no extra charge. If a goat passes away due to illness, we issue a 50% refund of the total amount paid to date. Full terms available in our reservation agreement.",
  },
  {
    question: "Can I visit the farm to see my goat?",
    answer: "Yes — farm visits are welcome by appointment. We'll confirm a time that works with our farm schedule and ensure your goat is ready for you.",
  },
  {
    question: "How is delivery handled before Eid?",
    answer: "We arrange delivery to your doorstep or nearest convenient location for a flat fee of Rs 5,000 or less, depending on your area. Delivery is scheduled in the final week before Eid so your goat arrives fresh and on time.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
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
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent border-0"
            style={{ fontFamily: "var(--font-sans)" }}
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
              maxHeight: open === i ? 260 : 0,
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
