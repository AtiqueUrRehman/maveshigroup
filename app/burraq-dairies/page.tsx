import Image from "next/image";
import Link from "next/link";
import OrderNowDiscontinued from "../components/OrderNowDiscontinued";

const specs = [
  { label: "Type", value: "Goat Milk" },
  { label: "Pasteurization", value: "Both raw and pasteurized available upon request" },
  { label: "Shelf Life", value: "1 week" },
  { label: "Delivery", value: "Home delivery in Rawalpindi and Islamabad" },
  { label: "Delivery Charges", value: "None" },
  { label: "Allergen", value: "Contains lactose" },
];

export default function BurraqDairies() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FFFFFF", color: "#1a1916", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ maxWidth: 1240 }} className="mx-auto px-7 py-5 flex items-center justify-between gap-6 border-b border-[#ece8e2]">
        <Link href="/" className="no-underline">
          <Image
            src="/assets/burraq/logo.png"
            alt="Burraq Dairies"
            width={400}
            height={140}
            style={{ height: "38px", width: "auto", display: "block" }}
          />
        </Link>
        <Link
          href="/"
          className="no-underline text-[13.5px] font-medium"
          style={{ color: "#8a857d" }}
        >
          ← Maveshi Farms Story
        </Link>
      </nav>

      {/* HERO */}
      <section data-ga-section="burraq_hero" style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-10 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <h1
              className="font-extrabold leading-[1.06] m-0 mb-5"
              style={{ fontSize: "clamp(32px,4vw,58px)", letterSpacing: "-0.025em" }}
            >
              Improving the dairy landscape in Pakistan.
            </h1>
            <p className="text-[17px] leading-[1.65] m-0" style={{ color: "#5a5550", maxWidth: 440 }}>
              100% pure and organic Goat milk products — free of preservatives, hormones or any other chemical, fresh from farm to your doorstep.
            </p>
          </div>

          <div
            className="relative overflow-hidden h-[280px] lg:h-[480px] rounded-[20px]"
            style={{ boxShadow: "0 24px 60px rgba(30,25,18,0.12)" }}
          >
            <Image
              src="/assets/burraq/hero.jpg"
              alt="Burraq Dairies goat herd"
              fill
              sizes="(max-width: 1024px) calc(100vw - 56px), 600px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <main data-ga-section="burraq_catalogue" style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-16 pb-20">
        <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-[18px]" style={{ color: "#8a857d" }}>
          CATALOGUE
        </div>
        <h2
          className="font-extrabold leading-[1.1] m-0 mb-12"
          style={{ fontSize: "clamp(26px,2.6vw,36px)", letterSpacing: "-0.02em" }}
        >
          Our Products
        </h2>

        {/* Product Card */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-0 rounded-[24px] overflow-hidden"
          style={{ border: "1px solid #e2ddd5", boxShadow: "0 4px 20px rgba(30,25,18,0.06)" }}
        >
          {/* Image */}
          <div
            className="flex items-center justify-center p-10 lg:p-14"
            style={{ background: "#F7F6F4" }}
          >
            <Image
              src="/assets/burraq/milk_bottle.png"
              alt="Pure Goat Milk 1 litre bottle"
              width={400}
              height={520}
              className="object-contain"
              style={{ maxHeight: 360, width: "auto" }}
            />
          </div>

          {/* Details */}
          <div className="p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                  style={{ background: "#1a1916", color: "#ffffff" }}
                >
                  1500+ liters sold
                </span>
              </div>
              <h3
                className="font-extrabold m-0 mb-4 leading-[1.1]"
                style={{ fontSize: "clamp(22px,2vw,30px)", letterSpacing: "-0.02em" }}
              >
                Pure Goat Milk (1 lit bottle)
              </h3>
              <p className="text-[15.5px] leading-[1.65] m-0 mb-8" style={{ color: "#5a5550" }}>
                Fresh, pure, organic goat milk. No preservatives, no hormones, no chemicals. Fresh from farm to your doorstep.
              </p>

              {/* Specs */}
              <div className="flex flex-col gap-[10px] mb-8">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-3 text-[14px]">
                    <span className="font-semibold min-w-[140px] flex-shrink-0" style={{ color: "#1a1916" }}>
                      {spec.label}
                    </span>
                    <span style={{ color: "#6b665c" }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-5 pt-6" style={{ borderTop: "1px solid #e2ddd5" }}>
              <div>
                <div className="text-[12px] font-semibold tracking-[0.12em] uppercase mb-1" style={{ color: "#8a857d" }}>
                  Price per liter
                </div>
                <div
                  className="font-extrabold"
                  style={{ fontSize: "clamp(28px,2.4vw,36px)", letterSpacing: "-0.02em" }}
                >
                  Rs 1,050
                </div>
                <div className="text-[13px] mt-1" style={{ color: "#8a857d" }}>No delivery charges</div>
              </div>
              <OrderNowDiscontinued
                className="inline-flex items-center justify-center font-semibold text-[14.5px] text-white px-7 py-[14px] rounded-[12px] transition-all duration-[250ms]"
                style={{ background: "#1a1916", border: 0, cursor: "pointer", fontFamily: "inherit" }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#ece8e2]">
        <div style={{ maxWidth: 1240 }} className="mx-auto px-7 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/assets/burraq/logo.png"
            alt="Burraq Dairies"
            width={400}
            height={140}
            style={{ height: "28px", width: "auto", display: "block" }}
          />
          <p className="text-[13px] m-0" style={{ color: "#8a857d" }}>
            Fresh from farm to your doorstep.
          </p>
          <p className="text-[13px] m-0" style={{ color: "#a8a298" }}>
            © 2026 Burraq Dairies · A{" "}
            <Link href="/" className="no-underline" style={{ color: "#8a857d" }}>
              Maveshi Farms
            </Link>{" "}
            company
          </p>
        </div>
      </footer>

    </div>
  );
}
