"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Site-wide analytics. Mounted once in the root layout, it captures:
 *  - link_click / button_click for every <a> and <button> (text, url, page)
 *  - section_view for every [data-ga-section] element, once per page view
 *
 * WhatsApp links are skipped here because they already emit the richer
 * `whatsapp_click` conversion event via <WhatsAppLink>.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();

  // Delegated click tracking — one listener covers every clickable element.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const el = target?.closest("a, button, [role='button']") as HTMLElement | null;
      if (!el) return;

      const href = el.getAttribute("href") || undefined;
      // Skip WhatsApp CTAs — they emit whatsapp_click already.
      if (href && /wa\.me|api\.whatsapp\.com/.test(href)) return;

      const isLink = el.tagName.toLowerCase() === "a";
      const text = (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);

      sendGAEvent("event", isLink ? "link_click" : "button_click", {
        link_text: text || undefined,
        link_url: href,
        page: pathname,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  // Section-view tracking — fire once when each labelled section is seen.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-ga-section]")
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          sendGAEvent("event", "section_view", {
            section: el.dataset.gaSection,
            page: pathname,
          });
          observer.unobserve(el); // once per page view
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
