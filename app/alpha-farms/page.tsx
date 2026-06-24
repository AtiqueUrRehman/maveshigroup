import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import RevealSection from "../components/RevealSection";
import HeroParallax from "../components/HeroParallax";
import FaqAccordion from "../components/FaqAccordion";
import PricingTimeline from "../components/PricingTimeline";

const steps = [
  {
    num: "01",
    title: "Pick from our catalog",
    description: "Browse our herd via short video clips. Choose the goat you connect with — size, breed, and look. Nothing seems interesting? Let us know your preference and we'll arrange. Want to arrange yourself? Sure!",
  },
  {
    num: "02",
    title: "We raise & care",
    description: "Your reserved goat stays at our farm, fed a healthy diet and monitored by our team daily.",
  },
  {
    num: "03",
    title: "Monthly updates",
    description: "Receive photo and video updates every month so you watch your goat grow in real time.",
  },
  {
    num: "04",
    title: "Delivered before Eid",
    description: "We arrange doorstep delivery in the final week before Eid — fresh, healthy, on time.",
  },
];


export default function AlphaFarms() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FBFAF8", color: "#1a1916", minHeight: "100vh" }}>
      <Nav
        brand="alpha"
        links={[
          { label: "How It Works", href: "#how" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
          { label: "← Maveshi Farms Story", href: "/", faint: true },
        ]}
      />

      {/* HERO */}
      <header style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-[18px] pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_1.1fr] gap-12 items-center">
          <div>
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[22px]" style={{ color: "#2A5C35" }}>
              ALPHA FARMS · QURBANI
            </div>
            <h1
              className="font-extrabold leading-[1.04] m-0 mb-[26px]"
              style={{ fontSize: "clamp(32px,4.4vw,62px)", letterSpacing: "-0.025em" }}
            >
              Reserve your goat. We raise it. We deliver it for <span style={{ color: "#2A5C35" }}>Eid.</span>
            </h1>
            <p className="text-[18px] leading-[1.6] m-0 mb-[34px]" style={{ color: "#6b665c", maxWidth: 430 }}>
              Choose your Qurbani goat, we handle everything — feed, care, medication, monthly updates, and Eid delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/923130794980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-[11px] font-semibold text-[15.5px] text-white no-underline px-[30px] py-[17px] rounded-[14px] transition-all duration-[250ms]"
                style={{ background: "#2A5C35", boxShadow: "0 12px 28px rgba(42,92,53,0.28)" }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="#how"
                className="inline-flex items-center justify-center gap-[11px] font-semibold text-[15.5px] no-underline px-[30px] py-[17px] rounded-[14px] transition-all duration-[250ms]"
                style={{
                  background: "transparent",
                  border: "2px solid #ddd7ce",
                  color: "#1a1916",
                }}
              >
                See how it works
              </Link>
            </div>
          </div>

          <HeroParallax>
            <div
              className="relative overflow-hidden h-[300px] lg:h-[560px] rounded-[20px] lg:rounded-[24px]"
              style={{ boxShadow: "0 30px 70px rgba(30,25,18,0.16)" }}
            >
              <Image
                src="/assets/card-alpha.jpg"
                alt="A healthy Qurbani goat at Alpha Farms"
                fill
                sizes="(max-width: 768px) calc(100vw - 56px), (max-width: 1240px) 55vw, 680px"
                className="object-cover"
                priority
              />
            </div>
          </HeroParallax>
        </div>
      </header>

      <main style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-9 pb-16 flex flex-col gap-[26px]">

        {/* HOW IT WORKS */}
        <RevealSection
          id="how"
          className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]"
          style={{ background: "#F4F2EE", borderRadius: 28 }}
        >
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[18px]" style={{ color: "#2A5C35" }}>
            HOW IT WORKS
          </div>
          <h2
            className="font-extrabold leading-[1.12] m-0 mb-3"
            style={{ fontSize: "clamp(28px,2.8vw,38px)", letterSpacing: "-0.025em" }}
          >
            Four steps to Eid
          </h2>
          <p className="text-[17px] leading-[1.6] m-0 mb-[40px]" style={{ color: "#6b665c" }}>
            Simple, transparent, and handled end-to-end by our team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {steps.map((step, i) => (
              <RevealSection
                key={step.num}
                delay={i * 90}
                className="rounded-[20px] p-[30px_26px] transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #ddd7ce",
                  boxShadow: "0 2px 10px rgba(30,25,18,0.05)",
                }}
              >
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-bold text-[15px] mb-5"
                  style={{ background: "#FBF1EF", color: "#2A5C35" }}
                >
                  {step.num}
                </div>
                <h3 className="text-[18px] font-bold m-0 mb-2 leading-[1.2]" style={{ letterSpacing: "-0.01em" }}>
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.55] m-0" style={{ color: "#7a756b" }}>
                  {step.description}
                </p>
              </RevealSection>
            ))}
          </div>
        </RevealSection>

        {/* PRICING */}
        <RevealSection
          id="pricing"
          className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]"
          style={{ background: "#F4F2EE", borderRadius: 28 }}
        >
          <PricingTimeline
            goatPrice={75000}
            months={8}
            beforeImage="/assets/goat-before.png"
            afterImage="/assets/goat-after.png"
          />
        </RevealSection>

        {/* FAQ */}
        <RevealSection
          id="faq"
          className="p-8 lg:pt-[54px] lg:px-[56px] lg:pb-[60px]"
          style={{ background: "#F4F2EE", borderRadius: 28 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-12">
            <div>
              <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[18px]" style={{ color: "#2A5C35" }}>
                COMMON QUESTIONS
              </div>
              <h2
                className="font-extrabold leading-[1.12] m-0 mb-4"
                style={{ fontSize: "clamp(28px,2.8vw,38px)", letterSpacing: "-0.025em" }}
              >
                Good to know
              </h2>
              <p className="text-[16px] leading-[1.6] m-0" style={{ color: "#6b665c" }}>
                Everything you&apos;d want to ask before reserving — answered.
              </p>
            </div>

            <FaqAccordion />
          </div>
        </RevealSection>

        {/* CTA BAND */}
        <RevealSection
          className="text-center rounded-[28px] px-6 py-10 sm:px-12 sm:py-12 lg:px-[56px] lg:py-[60px]"
          style={{ background: "#2A5C35" }}
        >
          <h2
            className="font-extrabold leading-[1.12] m-0 mb-4 text-white"
            style={{ fontSize: "clamp(28px,2.8vw,38px)", letterSpacing: "-0.025em" }}
          >
            Ready to reserve your Qurbani goat?
          </h2>
          <p className="text-[17px] leading-[1.6] m-0 mb-8" style={{ color: "rgba(255,255,255,0.82)" }}>
            Browse available goats by video and lock in your reservation before spots fill up.
          </p>
          <a
            href="https://wa.me/923130794980"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 no-underline font-semibold text-[15.5px] px-8 py-[17px] rounded-[999px] transition-all duration-[250ms]"
            style={{ background: "#FFFFFF", color: "#2A5C35" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </RevealSection>
      </main>

      <Footer
        brand="alpha"
        tagline="Qurbani aap ki, zimedari hamari."
        copyright="© 2026 Alpha Farms · A Maveshi Farms company"
      />
    </div>
  );
}
