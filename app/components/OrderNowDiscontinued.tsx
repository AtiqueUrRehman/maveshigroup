"use client";

import { useEffect, useState } from "react";

/**
 * "Order Now" button that opens a small popup explaining milk is paused,
 * instead of linking out. Styling is passed in so it matches the page CTA.
 */
export default function OrderNowDiscontinued({
  className,
  style,
  label = "Order Now",
}: {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(26,25,22,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFFFF",
              borderRadius: 18,
              maxWidth: 380,
              width: "100%",
              padding: "30px 28px",
              textAlign: "center",
              boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
            }}
          >
            <p className="m-0 text-[16px] leading-[1.6]" style={{ color: "#1a1916" }}>
              We have discontinued milk for now, will resume soon inshaAllah.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center font-semibold text-[14px] text-white px-6 py-[11px] rounded-[10px]"
              style={{ background: "#1a1916", border: 0, cursor: "pointer", fontFamily: "inherit" }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
