import Image from "next/image";
import Link from "next/link";

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
      <section style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-10 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <h1
              className="font-extrabold leading-[1.06] m-0 mb-5"
              style={{ fontSize: "clamp(32px,4vw,58px)", letterSpacing: "-0.025em" }}
            >
              Improving the dairy landscape in Pakistan.
            </h1>
            <p className="text-[17px] leading-[1.65] m-0 mb-8" style={{ color: "#5a5550", maxWidth: 440 }}>
              100% pure and organic Goat milk products — free of preservatives, hormones or any other chemical, fresh from farm to your doorstep.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=923130794980&text=Hi%2C%20I%20saw%20your%20website%20may%20I%20know%20more%20about%20this%20%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] font-semibold text-[15px] text-white no-underline px-7 py-[15px] rounded-[13px] transition-all duration-[250ms]"
              style={{ background: "#1a1916" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order Now
            </a>
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
      <main style={{ maxWidth: 1240 }} className="mx-auto px-7 pt-16 pb-20">
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
              <a
                href="https://api.whatsapp.com/send?phone=923130794980&text=Hi%2C%20I%20saw%20your%20website%20may%20I%20know%20more%20about%20this%20%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] font-semibold text-[14.5px] text-white no-underline px-7 py-[14px] rounded-[12px] transition-all duration-[250ms]"
                style={{ background: "#1a1916" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order Now
              </a>
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
