"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
}

function parseValue(str: string): { num: number; suffix: string } {
  const match = str.match(/^([\d,]+)(\+?.*)/);
  if (!match) return { num: 0, suffix: str };
  return { num: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

function formatNum(n: number): string {
  return n.toLocaleString();
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * num));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div
      ref={ref}
      className="text-center px-4 py-8 lg:px-6 lg:py-0 lg:border-l lg:first:border-l-0"
      style={{ borderColor: "#ece8e2" }}
    >
      <div
        className="font-extrabold leading-none mb-3"
        style={{
          fontSize: "clamp(36px,3.6vw,52px)",
          color: "#C5372C",
          letterSpacing: "-0.02em",
        }}
      >
        {formatNum(display)}
        {suffix}
      </div>
      <div className="text-[15px] font-medium text-[#6b665c]">{label}</div>
    </div>
  );
}
