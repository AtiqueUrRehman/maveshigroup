import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  brand: "maveshi" | "alpha";
  tagline: string;
  copyright: string;
}

export default function Footer({ brand, tagline, copyright }: FooterProps) {
  const wordmark =
    brand === "maveshi"
      ? { top: "MAVESHI", bottom: "FARMS" }
      : { top: "ALPHA", bottom: "FARMS" };

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "#ece8e2",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div
        style={{ maxWidth: 1240 }}
        className="mx-auto px-7 py-8 flex items-center justify-between gap-6"
      >
        <Link href="/" className="flex items-center gap-3 no-underline">
          {brand === "maveshi" && (
            <Image
              src="/assets/maveshi-logo.png"
              alt="Maveshi Farms"
              width={624}
              height={697}
              style={{ height: "32px", width: "auto", display: "block" }}
            />
          )}
          <div className="leading-none">
            <div
              className="font-extrabold tracking-[0.02em] text-[#1a1916]"
              style={{ fontSize: brand === "alpha" ? 17 : 13 }}
            >
              {wordmark.top}
            </div>
            <div
              className="font-semibold tracking-[0.38em] text-[#8a857d]"
              style={{ fontSize: brand === "alpha" ? 11 : 10 }}
            >
              {wordmark.bottom}
            </div>
          </div>
        </Link>

        <p className="text-[13px] text-[#8a857d] m-0">{tagline}</p>

        <p className="text-[13px] text-[#a8a298] m-0">{copyright}</p>
      </div>
    </footer>
  );
}
