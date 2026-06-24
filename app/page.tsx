import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RevealSection from "./components/RevealSection";
import StatCounter from "./components/StatCounter";
import HeroParallax from "./components/HeroParallax";

const ecosystemCards = [
  {
    index: "01",
    title: "Maveshi Farms",
    description: "The parent operation — ethical goat breeding, milk production, and livestock management built on software-first thinking.",
    href: "#",
    img: "/assets/card-maveshi.jpg",
    imgAlt: "Maveshi Farms",
    imgPosition: "50% 40%",
  },
  {
    index: "02",
    title: "Alpha Farms",
    description: "Reserve your Qurbani goat by video. We raise it, care for it, and deliver it before Eid.",
    href: "/alpha-farms",
    img: "/assets/card-alpha.jpg",
    imgAlt: "Alpha Farms — Qurbani goat reservation",
    imgPosition: "50% 50%",
  },
  {
    index: "03",
    title: "Burraq Dairies",
    description: "Fresh, traceable milk delivered directly from our herd to your home.",
    href: "/burraq-dairies",
    img: "/assets/card-burraq.jpg",
    imgAlt: "Burraq Dairies",
    imgPosition: "60% 45%",
  },
];

const timelineSteps = [
  { num: "01", label: "Software Engineer" },
  { num: "02", label: "Researching Livestock" },
  { num: "03", label: "First Goats" },
  { num: "04", label: "Breeding Program" },
  { num: "05", label: "Milk Customers" },
  { num: "06", label: "Growing Ecosystem" },
];

const stats = [
  { value: "500+", label: "Animals Raised" },
  { value: "6,000+", label: "Liters of Goat Milk Delivered" },
  { value: "200+", label: "Happy Families" },
  { value: "6+", label: "Years of Breeding Excellence" },
];

const businessChips = [
  { initial: "M", name: "Maveshi Farms", href: "#" },
  { initial: "A", name: "Alpha Farms", href: "/alpha-farms" },
  { initial: "B", name: "Burraq Dairies", href: "/burraq-dairies" },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FBFAF8", color: "#1a1916", minHeight: "100vh" }}>
      <Nav
        brand="maveshi"
        ctaLabel="Explore Our Ecosystem"
        ctaHref="#ecosystem"
        links={[
          { label: "Our Story", href: "#" },
          { label: "Our Ecosystem", href: "#ecosystem" },
          { label: "Impact", href: "#impact" },
          { label: "Contact", href: "#" },
        ]}
      />

      {/* HERO — Variant A */}
      <header style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-[18px] pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_1.1fr] gap-12 items-center">
          <div>
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[22px]" style={{ color: "#C5372C" }}>
              THE JOURNEY
            </div>
            <h1
              className="font-extrabold leading-[1.02] m-0 mb-[26px]"
              style={{ fontSize: "clamp(34px,4.6vw,66px)", letterSpacing: "-0.025em" }}
            >
              Never Thought I&apos;d End Up in Livestock.
            </h1>
            <p className="text-[18px] leading-[1.6] m-0 mb-[34px]" style={{ color: "#6b665c", maxWidth: 380 }}>
              A computer scientist&apos;s journey to build a smarter, healthier future for goat farming — one goat at a time.
            </p>
            <Link
              href="#ecosystem"
              className="inline-flex items-center gap-[11px] font-semibold text-[15.5px] text-white no-underline px-[30px] py-[17px] rounded-[14px] transition-all duration-[250ms]"
              style={{ background: "#C5372C", boxShadow: "0 12px 28px rgba(197,55,44,0.26)" }}
            >
              Explore the Journey <span className="text-[17px]">→</span>
            </Link>
          </div>

          <HeroParallax>
            <div
              className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[380px] lg:h-[560px] rounded-[20px] lg:rounded-[24px]"
              style={{ boxShadow: "0 30px 70px rgba(30,25,18,0.16)" }}
            >
              <Image
                src="/assets/hero.jpg"
                alt="Founder with goats at Maveshi Farms"
                fill
                sizes="(max-width: 768px) calc(100vw - 56px), (max-width: 1240px) 55vw, 680px"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                priority
              />
            </div>
          </HeroParallax>
        </div>
      </header>

      <main style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-9 pb-16 flex flex-col gap-[26px]">

        {/* ORIGIN STORY */}
        <RevealSection
          className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]"
          style={{ background: "#F4F2EE", borderRadius: 28 }}
        >
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[18px]" style={{ color: "#C5372C" }}>
            IT STARTED WITH A QUESTION.
          </div>
          <h2
            className="font-bold leading-[1.18] m-0 mb-[22px]"
            style={{ fontSize: "clamp(26px,2.6vw,34px)", letterSpacing: "-0.02em", maxWidth: 640 }}
          >
            Why is the Goat Farming industry in Pakistan still stuck in the past?
          </h2>
          <p
            className="m-0 leading-[1.7]"
            style={{ fontSize: "clamp(16px,1.4vw,18px)", color: "#6b665c", maxWidth: 680 }}
          >
            The deeper I looked, the clearer it became — sustainable growth in this industry required data-driven, structured approaches that could augment existing practices: not just to build a viable business, but to contribute meaningfully to the sector itself.
          </p>
        </RevealSection>

        {/* ECOSYSTEM */}
        <RevealSection
          id="ecosystem"
          className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]"
          style={{ background: "#F4F2EE", borderRadius: 28 }}
        >
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[18px]" style={{ color: "#C5372C" }}>
            THE ECOSYSTEM WE BUILT
          </div>
          <h2
            className="font-extrabold leading-[1.12] m-0 mb-[36px]"
            style={{ fontSize: "clamp(28px,2.8vw,38px)", letterSpacing: "-0.025em" }}
          >
            Three businesses. One vision.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {ecosystemCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="no-underline block rounded-[20px] overflow-hidden transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #ddd7ce",
                  boxShadow: "0 2px 10px rgba(30,25,18,0.05)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative overflow-hidden h-[260px] sm:h-auto sm:min-h-[220px]">
                    <Image
                      src={card.img}
                      alt={card.imgAlt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: card.imgPosition }}
                      sizes="(max-width: 640px) calc(100vw - 56px), 220px"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <div className="text-[12px] font-bold tracking-[0.14em]" style={{ color: "#C5372C" }}>
                      {card.index}
                    </div>
                    <h3 className="text-[18px] font-bold m-0 leading-[1.2]" style={{ letterSpacing: "-0.01em", color: "#1a1916" }}>
                      {card.title}
                    </h3>
                    <p className="text-[14px] leading-[1.55] m-0 mt-1" style={{ color: "#7a756b" }}>
                      {card.description}
                    </p>
                    <div className="mt-auto pt-3">
                      <div
                        className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[16px]"
                        style={{ border: "1.5px solid #ddd7ce", color: "#6b665c" }}
                      >
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </RevealSection>

        {/* FOUNDER QUOTE */}
        <RevealSection className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]" style={{ background: "#F4F2EE", borderRadius: 28 }}>
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr_0.55fr] gap-8 items-center">
            <div>
              <div
                className="font-extrabold leading-none mb-4"
                style={{ fontSize: 72, color: "#C5372C", lineHeight: 0.8, fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </div>
              <blockquote
                className="m-0 font-bold leading-[1.32]"
                style={{ fontSize: "clamp(22px,2.2vw,28px)", letterSpacing: "-0.015em" }}
              >
                They said a Computer Science major had no business raising goats. I thought: that&apos;s exactly the problem.
              </blockquote>
            </div>

            <div
              className="mx-auto relative overflow-hidden flex-shrink-0"
              style={{ width: 230, height: 310, borderRadius: 20 }}
            >
              <Image
                src="/assets/founder.jpg"
                alt="Atique, Founder of Maveshi Farms"
                fill
                className="object-cover"
                style={{ objectPosition: "60% 20%" }}
                sizes="230px"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="font-semibold"
                style={{ fontFamily: "var(--font-accent)", fontSize: 40, lineHeight: 1.1 }}
              >
                Atique
              </div>
              <div style={{ width: 56, height: 1, background: "#ddd7ce" }} />
              <div>
                <div className="text-[14px] font-semibold">Founder</div>
                <div className="text-[13px] font-medium" style={{ color: "#8a857d" }}>Maveshi Farms</div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* IMPACT STATS */}
        <RevealSection
          id="impact"
          className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]"
          style={{ background: "#F4F2EE", borderRadius: 28 }}
        >
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[18px] text-center" style={{ color: "#C5372C" }}>
            THE IMPACT
          </div>
          <h2
            className="font-extrabold leading-[1.12] m-0 mb-[48px] text-center"
            style={{ fontSize: "clamp(28px,2.8vw,38px)", letterSpacing: "-0.025em" }}
          >
            Numbers that matter
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </RevealSection>

        {/* BUSINESSES CTA */}
        <RevealSection className="text-center py-[56px]">
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#C5372C" }}>
            FOLLOW THE JOURNEY
          </div>
          <h2
            className="font-extrabold m-0 mb-3"
            style={{ fontSize: "clamp(28px,2.8vw,38px)", letterSpacing: "-0.025em" }}
          >
            Explore Our Businesses
          </h2>
          <p className="text-[17px] m-0 mb-10" style={{ color: "#6b665c" }}>
            Different purpose. One vision.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {businessChips.map((chip) => (
              <Link
                key={chip.name}
                href={chip.href}
                className="inline-flex items-center gap-3 no-underline font-semibold text-[15px] px-6 py-4 rounded-[16px] transition-all duration-[250ms]"
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #ddd7ce",
                  minWidth: 230,
                  color: "#1a1916",
                  boxShadow: "0 2px 10px rgba(30,25,18,0.05)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[13px] font-extrabold flex-shrink-0"
                  style={{ background: "#C5372C" }}
                >
                  {chip.initial}
                </span>
                {chip.name}
                <span className="ml-auto" style={{ color: "#C5372C" }}>→</span>
              </Link>
            ))}
          </div>
        </RevealSection>
      </main>

      <Footer
        brand="maveshi"
        tagline="From code to care, from livestock to legacy."
        copyright="© 2026 Maveshi Farms"
      />
    </div>
  );
}
