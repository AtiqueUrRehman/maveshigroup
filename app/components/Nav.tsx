"use client";

import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  faint?: boolean;
}

interface NavProps {
  brand: "maveshi" | "alpha";
  ctaLabel: string;
  ctaHref: string;
  links: NavLink[];
}

export default function Nav({ brand, ctaLabel, ctaHref, links }: NavProps) {
  const wordmark =
    brand === "maveshi"
      ? { top: "MAVESHI", bottom: "FARMS" }
      : { top: "ALPHA", bottom: "FARMS" };
  const brandColor = brand === "alpha" ? "#2A5C35" : "#C5372C";
  const brandShadow = brand === "alpha"
    ? "0 8px 20px rgba(42,92,53,0.22)"
    : "0 8px 20px rgba(197,55,44,0.22)";

  return (
    <nav
      style={{ maxWidth: 1240, fontFamily: "var(--font-sans)" }}
      className="mx-auto px-7 py-[22px] flex items-center justify-between gap-6"
    >
      {/* Logo + wordmark */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        {brand === "maveshi" && (
          <Image
            src="/assets/maveshi-logo.png"
            alt="Maveshi Farms"
            width={624}
            height={697}
            style={{ height: "42px", width: "auto", display: "block" }}
          />
        )}
        <div className="leading-none">
          <div
            className="font-extrabold tracking-[0.02em] text-[#1a1916]"
            style={{ fontSize: brand === "alpha" ? 20 : 15 }}
          >
            {wordmark.top}
          </div>
          <div
            className="font-semibold tracking-[0.42em] text-[#8a857d]"
            style={{ fontSize: brand === "alpha" ? 13 : 11 }}
          >
            {wordmark.bottom}
          </div>
        </div>
      </Link>

      {/* Center links */}
      <div className="hidden lg:flex items-center gap-[34px]">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="no-underline text-[14.5px] font-medium transition-colors duration-200"
            style={{ color: link.faint ? "#8a857d" : "#3a372f" }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={ctaHref}
        className="inline-flex items-center gap-2 font-semibold text-[13px] lg:text-[14px] text-white px-[14px] py-[11px] lg:px-[22px] lg:py-[13px] rounded-xl no-underline transition-all duration-250 ease-out"
        style={{
          background: brandColor,
          boxShadow: brandShadow,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = brand === "alpha" ? "#1e4227" : "#A82C22";
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = brand === "alpha"
            ? "0 12px 26px rgba(42,92,53,0.3)"
            : "0 12px 26px rgba(197,55,44,0.3)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = brandColor;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = brandShadow;
        }}
      >
        {ctaLabel} <span className="text-base">→</span>
      </Link>
    </nav>
  );
}
