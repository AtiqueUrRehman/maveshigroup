"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  id?: string;
  /** When set, emits a GA4 `section_view` event with this name when scrolled into view. */
  track?: string;
}

export default function RevealSection({
  children,
  className = "",
  style,
  delay = 0,
  id,
  track,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    // Failsafe: reveal after 2s in case observer never fires (SSR/print)
    const fallback = setTimeout(() => {
      if (el.style.opacity !== "1") {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      id={id}
      data-ga-section={track}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(26px)",
        transition: "opacity 0.7s cubic-bezier(.2,.7,.2,1), transform 0.7s cubic-bezier(.2,.7,.2,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
