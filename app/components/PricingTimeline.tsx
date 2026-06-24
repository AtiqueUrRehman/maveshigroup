"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  beforeImage?: string;
  afterImage?: string;
  goatPrice?: number;
  months?: number;
}

const DURATION = 3200;
const LINE_TOP = 215;
const CONTAINER_H = 310;
const LIGHT_CARE = 11000;
const HEAVY_CARE = 14000;
const HEAVY_MONTHS = 2; // last N months cost HEAVY_CARE

export default function PricingTimeline({
  beforeImage,
  afterImage,
  goatPrice: defaultGoatPrice = 75000,
  months: defaultMonths = 8,
}: Props) {
  const [customPrice, setCustomPrice] = useState(defaultGoatPrice);
  const [customMonths, setCustomMonths] = useState(defaultMonths);

  const lightMonths = customMonths - HEAVY_MONTHS;
  const total = customPrice + lightMonths * LIGHT_CARE + HEAVY_MONTHS * HEAVY_CARE;

  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | undefined>(undefined);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  const play = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = undefined;
    setProgress(0);
    setPlaying(true);
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const t = Math.min((now - startRef.current) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else setPlaying(false);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const replay = useCallback(() => { triggered.current = false; play(); }, [play]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          play();
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [play]);

  useEffect(() => {
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const totalNodes = customMonths + 2;
  const nodePos = (i: number) => i / (totalNodes - 1);
  const isActive = (i: number) => progress >= nodePos(i) - 0.005;
  const animatedTotal = Math.round(progress * total);
  const eidProgress = Math.max(0, (progress - 0.82) / 0.18);

  // first node index where HEAVY_CARE applies (2 nodes before EID)
  const thresholdNode = totalNodes - 1 - HEAVY_MONTHS; // e.g. months=8 → node 7
  const chipAmount = (i: number) => i >= thresholdNode ? HEAVY_CARE : LIGHT_CARE;
  const markerActive = progress >= nodePos(thresholdNode) - 0.04;

  return (
    <div ref={sectionRef}>

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 mb-4">

        {/* Title — second on mobile, first on desktop */}
        <div className="order-2 sm:order-1">
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#2A5C35" }}>
            HOW IT ADDS UP
          </div>
          <h2 className="font-bold m-0" style={{ fontSize: "clamp(18px,1.8vw,24px)", letterSpacing: "-0.015em", color: "#1a1916" }}>
            Buy once, care monthly, collect on Eid.
          </h2>
        </div>

        {/* Total + Replay — first on mobile, second on desktop */}
        <div className="order-1 sm:order-2">

          {/* Mobile: label+number left, replay right */}
          <div className="flex items-center justify-between sm:hidden">
            <div>
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase mb-1" style={{ color: "#9a948a" }}>
                TOTAL BY EID
              </div>
              <div className="font-extrabold leading-none" style={{ fontSize: "clamp(28px,3vw,44px)", color: "#2A5C35", letterSpacing: "-0.02em" }}>
                Rs {animatedTotal.toLocaleString()}
              </div>
            </div>
            <button
              onClick={replay}
              disabled={playing}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-[7px] rounded-full transition-colors shrink-0"
              style={{
                border: "1.5px solid #ddd7ce",
                color: playing ? "#c8c2b8" : "#6b665c",
                background: "#F4F2EE",
                cursor: playing ? "not-allowed" : "pointer",
                fontFamily: "inherit",
              }}
            >
              <span style={{ display: "inline-block", transition: "transform 0.4s ease", transform: playing ? "rotate(-180deg)" : "rotate(0deg)" }}>↺</span>
              {" "}Replay
            </button>
          </div>

          {/* Desktop: stacked, right-aligned */}
          <div className="hidden sm:flex flex-col items-end gap-1.5">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: "#9a948a" }}>
              TOTAL BY EID
            </div>
            <div className="flex items-center gap-3">
              <div className="font-extrabold leading-none" style={{ fontSize: "clamp(30px,3vw,44px)", color: "#2A5C35", letterSpacing: "-0.02em" }}>
                Rs {animatedTotal.toLocaleString()}
              </div>
              <button
                onClick={replay}
                disabled={playing}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-[7px] rounded-full transition-colors shrink-0"
                style={{
                  border: "1.5px solid #ddd7ce",
                  color: playing ? "#c8c2b8" : "#6b665c",
                  background: "#FFFFFF",
                  cursor: playing ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ display: "inline-block", transition: "transform 0.4s ease", transform: playing ? "rotate(-180deg)" : "rotate(0deg)" }}>↺</span>
                {" "}Replay
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Combined card: calculator + timeline ── */}
      <div className="rounded-[18px] mb-4" style={{ background: "#FFFFFF", border: "1px solid #e8e3db", boxShadow: "0 4px 18px rgba(30,25,18,0.07)" }}>

        {/* Calculator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 pt-5 pb-4 sm:px-6 sm:pt-5 sm:pb-4">

          {/* Base price */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-[8px]" style={{ color: "#9a948a" }}>
              Goat Price
            </div>
            <div className="flex items-center gap-1.5 rounded-[10px] px-3 py-[9px]" style={{ background: "#F4F2EE" }}>
              <span className="text-[13px] font-semibold shrink-0" style={{ color: "#9a948a" }}>Rs</span>
              <input
                type="number"
                value={customPrice}
                onChange={(e) => setCustomPrice(parseInt(e.target.value) || 0)}
                onBlur={replay}
                className="flex-1 bg-transparent text-[14px] font-semibold outline-none min-w-0"
                style={{ color: "#1a1916", fontFamily: "inherit" }}
              />
            </div>
          </div>

          {/* Months */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-[8px]" style={{ color: "#9a948a" }}>
              Months of Care
            </div>
            <div className="rounded-[10px] px-3 py-[9px]" style={{ background: "#F4F2EE" }}>
              <select
                value={customMonths}
                onChange={(e) => { setCustomMonths(parseInt(e.target.value)); replay(); }}
                className="w-full bg-transparent text-[14px] font-semibold outline-none"
                style={{ color: "#1a1916", fontFamily: "inherit", cursor: "pointer" }}
              >
                {[5, 6, 7, 8, 9, 10, 11].map((m) => (
                  <option key={m} value={m}>{m} months</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mx-5 sm:mx-6" style={{ height: 1, background: "#ece8e2" }} />

        {/* Timeline */}
        <div className="px-5 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
        <div>
        <div style={{ position: "relative", height: CONTAINER_H }}>

          {/* Track */}
          <div style={{ position: "absolute", left: 0, right: 0, top: LINE_TOP, height: 2, background: "#e2ddd5", borderRadius: 2 }} />

          {/* Progress fill */}
          <div style={{ position: "absolute", left: 0, top: LINE_TOP, height: 2, background: "#2A5C35", borderRadius: 2, width: `${progress * 100}%` }} />

          {/* BEFORE goat — bottom-anchored so feet always sit on the line */}
          <div style={{ position: "absolute", left: 0, bottom: CONTAINER_H - LINE_TOP, filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.18))" }}>
            {beforeImage ? (
              <div className="relative w-[68px] sm:w-[105px] h-[112px] sm:h-[200px]">
                <Image src={beforeImage} alt="Day 1 goat" fill className="object-contain object-bottom" sizes="(max-width:640px) 68px, 105px" />
              </div>
            ) : (
              <div className="w-[68px] sm:w-[105px] h-[112px] sm:h-[200px] flex items-end justify-center pb-2 text-[11px] font-medium" style={{ color: "#a8a298" }}>Before</div>
            )}
          </div>

          {/* AFTER goat — bottom-anchored, scales in at end */}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: CONTAINER_H - LINE_TOP,
              opacity: eidProgress,
              transform: `scale(${0.84 + 0.16 * eidProgress})`,
              transformOrigin: "bottom right",
              filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.2))",
            }}
          >
            {afterImage ? (
              <div className="relative w-[130px] sm:w-[200px] h-[180px] sm:h-[210px]">
                <Image src={afterImage} alt="Eid goat" fill className="object-contain object-bottom" sizes="(max-width:640px) 130px, 200px" />
              </div>
            ) : (
              <div className="w-[130px] sm:w-[200px] h-[180px] sm:h-[210px] flex items-end justify-center pb-2 text-[11px] font-medium" style={{ color: "#a8a298" }}>After</div>
            )}
          </div>

          {/* Weight threshold marker — desktop only (would overlap goat on mobile) */}
          <div
            className="hidden sm:block"
            style={{
              position: "absolute",
              left: `${nodePos(thresholdNode) * 100}%`,
              top: LINE_TOP,
              transform: "translateX(-50%)",
              zIndex: 4,
              opacity: markerActive ? 1 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          >
            {/* Tick line going up */}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 3, width: 1.5, height: 36, background: "#2A5C35", opacity: 0.5 }} />
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: 42,
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                background: "#F4F2EE",
                color: "#9a948a",
                fontSize: 11,
                fontWeight: 500,
                padding: "4px 9px",
                borderRadius: 999,
                textAlign: "center",
                lineHeight: 1.5,
                border: "1px solid #ddd7ce",
              }}
            >
              weight &gt; 70 kg
              <span style={{ display: "block", fontSize: 10, opacity: 0.8, marginTop: 1 }}>
                Rs {HEAVY_CARE.toLocaleString()} / mo
              </span>
            </div>
          </div>

          {/* Nodes */}
          {Array.from({ length: totalNodes }).map((_, i) => {
            const pos = nodePos(i);
            const active = isActive(i);
            const isReserve = i === 0;
            const isEid = i === totalNodes - 1;
            const isMonthly = !isReserve && !isEid;
            const amount = chipAmount(i);

            return (
              <div key={i} style={{ position: "absolute", left: `${pos * 100}%`, top: LINE_TOP, transform: "translate(-50%, -50%)", zIndex: 2 }}>
                <div style={{ width: isReserve || isEid ? 14 : 10, height: isReserve || isEid ? 14 : 10, borderRadius: "50%", background: active ? "#2A5C35" : "#ddd7ce", transition: "background 0.2s ease" }} />
                {isMonthly && (
                  <div
                    className={i % 2 === 0 ? "hidden sm:block" : "block"}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: active ? (amount === HEAVY_CARE ? "#E8F2EC" : "#EEF5F0") : "#F4F2EE",
                      color: active ? "#2A5C35" : "#c0b8ae",
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "4px 8px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      transition: "background 0.25s ease, color 0.25s ease",
                    }}
                  >
                    +Rs {amount.toLocaleString()}
                  </div>
                )}
              </div>
            );
          })}

          {/* RESERVE label — below chip row so it never overlaps */}
          <div style={{ position: "absolute", top: LINE_TOP + 44, left: 0, whiteSpace: "nowrap" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#1a1916" }}>RESERVE</div>
            <div style={{ fontSize: 12, color: "#6b665c", marginTop: 2 }}>Pay Rs {customPrice.toLocaleString()} once</div>
          </div>

          {/* EID label — below chip row so it never overlaps */}
          <div style={{ position: "absolute", top: LINE_TOP + 44, right: 0, textAlign: "right", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#1a1916" }}>EID · DELIVERED</div>
            <div style={{ fontSize: 12, color: "#6b665c", marginTop: 2 }}>Healthy, at your door</div>
          </div>

        </div>
      </div>

      {/* ── Formula footer ── */}
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-8 pt-6" style={{ borderTop: "1px solid #ece8e2" }}>
        <span className="text-[14px]" style={{ color: "#1a1916" }}>
          <strong>Rs {customPrice.toLocaleString()}</strong> goat
        </span>
        <span className="font-light text-[18px]" style={{ color: "#ddd7ce" }}>+</span>
        <span className="text-[14px]" style={{ color: "#1a1916" }}>
          <strong>{lightMonths} × Rs {LIGHT_CARE.toLocaleString()}</strong>
        </span>
        <span className="font-light text-[18px]" style={{ color: "#ddd7ce" }}>+</span>
        <span className="text-[14px]" style={{ color: "#1a1916" }}>
          <strong>{HEAVY_MONTHS} × Rs {HEAVY_CARE.toLocaleString()}</strong>
          <span className="text-[12px] font-normal ml-1" style={{ color: "#9a948a" }}>(≥ 70 kg)</span>
        </span>
        <span className="text-[18px]" style={{ color: "#2A5C35" }}>→</span>
        <span className="text-[14px] font-semibold" style={{ color: "#2A5C35" }}>
          Rs {total.toLocaleString()} total
        </span>
      </div>
      </div> {/* close timeline inner */}
      </div> {/* close combined card */}

      {/* ── Detail cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        <div className="rounded-[16px] p-5 sm:p-6" style={{ background: "#FFFFFF", border: "1px solid #e8e3db" }}>
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "#9a948a" }}>
            GOAT PRICE
          </div>
          <div className="font-extrabold leading-tight mb-3" style={{ fontSize: "clamp(20px,2vw,26px)", color: "#2A5C35" }}>
            From Rs 55,000
          </div>
          <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#6b665c" }}>
            One-time, set when you reserve. Varies by breed, weight and age — shown on each goat.
          </p>
        </div>

        <div className="rounded-[16px] p-5 sm:p-6" style={{ background: "#FFFFFF", border: "1px solid #e8e3db" }}>
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "#9a948a" }}>
            MONTHLY CARE
          </div>
          <div className="font-extrabold leading-tight mb-3" style={{ fontSize: "clamp(20px,2vw,26px)", color: "#2A5C35" }}>
            Rs 11,000–14,000 / mo
          </div>
          <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#6b665c" }}>
            Per goat, billed monthly until Eid. Covers feed, water, shelter, vaccinations and vet care.
          </p>
        </div>

        <div className="rounded-[16px] p-5 sm:p-6" style={{ background: "#FFFFFF", border: "1px solid #e8e3db" }}>
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "#9a948a" }}>
            DELIVERY
          </div>
          <div className="font-extrabold leading-tight mb-3" style={{ fontSize: "clamp(20px,2vw,26px)", color: "#2A5C35" }}>
            Rs 5,000 or less
          </div>
          <p className="text-[13px] leading-[1.6] m-0" style={{ color: "#6b665c" }}>
            Major cities delivered 3–5 days before Eid. Other cities at actual transport cost.
          </p>
        </div>

      </div>

    </div>
  );
}
