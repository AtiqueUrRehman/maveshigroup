"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Which business this CTA belongs to. */
  business: "alpha" | "burraq";
  /** Where on the page this CTA sits, e.g. "hero" or "cta_band". */
  location: string;
  children: ReactNode;
};

/**
 * A WhatsApp CTA link that fires a GA4 `whatsapp_click` event on click.
 * Renders a normal <a> — pass className/style just like the original link.
 */
export default function WhatsAppLink({
  business,
  location,
  children,
  onClick,
  ...props
}: Props) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        sendGAEvent("event", "whatsapp_click", { business, location });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
