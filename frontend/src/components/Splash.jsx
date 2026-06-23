import React, { useEffect, useState } from "react";
import { SignalMark } from "./Logo";

const Splash = ({ onDone }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.classList.add("noscroll");
    const t1 = setTimeout(() => setLeaving(true), 1900);
    const t2 = setTimeout(() => {
      document.body.classList.remove("noscroll");
      onDone();
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.classList.remove("noscroll");
    };
  }, [onDone]);

  return (
    <div
      data-testid="splash-screen"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* faint grid backdrop */}
      <div className="absolute inset-0 grid-backdrop opacity-60" />
      {/* radial cyan wash */}
      <div className="absolute inset-0 spotlight" />

      <div className="relative flex flex-col items-center gap-7">
        <SignalMark size={84} animated />
        <div className="flex flex-col items-center">
          <span
            className="ss-word font-sans font-semibold tracking-tight text-navy text-4xl md:text-5xl"
            style={{ animationDelay: "560ms" }}
          >
            Signal Stack
          </span>
          <span
            className="ss-tagline mt-3 font-mono uppercase tracking-widerx text-[11px] text-cyan"
            style={{ animationDelay: "1050ms" }}
          >
            AI Marketing Ops · United Kingdom
          </span>
        </div>

        {/* sweep loader bar */}
        <div className="ss-tagline mt-5 h-px w-44 overflow-hidden bg-line" style={{ animationDelay: "1200ms" }}>
          <div
            className="h-full w-1/3 bg-cyan"
            style={{ animation: "tickerScroll 1.2s linear infinite" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;
