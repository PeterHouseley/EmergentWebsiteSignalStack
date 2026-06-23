import React, { useEffect, useState } from "react";
import { SignalMark } from "./Logo";

const Splash = ({ onDone }) => {
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  // Splash timeline (in ms)
  //   0   – 1600  : 6 bars rise one by one (with staggered delays inside SignalMark)
  //   1700 – 2700 : wordmark slides in
  //   2400 – 3300 : tagline + sweep bar fade in
  //   3300 – 4400 : full hold (entire mark sits, sweep bar continues animating)
  //   4400 – 5000 : fade out
  const LEAVE_AT = 4400;
  const DONE_AT = 5000;

  useEffect(() => {
    document.body.classList.add("noscroll");

    // progress ticker for the bottom bar (0 → 100 over LEAVE_AT)
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / LEAVE_AT) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setLeaving(true), LEAVE_AT);
    const t2 = setTimeout(() => {
      document.body.classList.remove("noscroll");
      onDone();
    }, DONE_AT);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf);
      document.body.classList.remove("noscroll");
    };
  }, [onDone]);

  return (
    <div
      data-testid="splash-screen"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-[600ms] ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* faint grid backdrop */}
      <div className="absolute inset-0 grid-backdrop opacity-60" />
      {/* radial cyan wash */}
      <div className="absolute inset-0 spotlight" />

      {/* top file label */}
      <div
        className="ss-tagline absolute top-6 left-6 md:top-8 md:left-10 font-mono uppercase tracking-widerx text-[10px] md:text-[11px] text-mute"
        style={{ animationDelay: "200ms" }}
      >
        Signal Stack · Loading brief
      </div>
      <div
        className="ss-tagline absolute top-6 right-6 md:top-8 md:right-10 flex items-center gap-2 font-mono uppercase tracking-widerx text-[10px] md:text-[11px] text-cyan-deep"
        style={{ animationDelay: "200ms" }}
      >
        <span className="chip-dot" />
        Live
      </div>

      <div className="relative flex flex-col items-center gap-8">
        <SignalMark size={108} animated />

        <div className="flex flex-col items-center">
          <span
            className="ss-word font-sans font-semibold tracking-tight text-navy text-4xl md:text-6xl"
            style={{ animationDelay: "1700ms", animationDuration: "900ms" }}
          >
            Signal Stack
          </span>
          <span
            className="ss-tagline mt-4 font-mono uppercase tracking-widerx text-[11px] md:text-[12px] text-cyan-deep"
            style={{ animationDelay: "2400ms", animationDuration: "900ms" }}
          >
            AI Marketing Ops · United Kingdom
          </span>
        </div>

        {/* progress + sweep loader */}
        <div
          className="ss-tagline mt-2 w-56 md:w-72"
          style={{ animationDelay: "2700ms", animationDuration: "900ms" }}
        >
          <div className="h-px w-full bg-line relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-cyan transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widerx text-mute">
            <span>Decoding signal</span>
            <span className="tabular-nums text-navy">
              {String(Math.floor(progress)).padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>

      {/* bottom file footer */}
      <div
        className="ss-tagline absolute bottom-6 left-6 md:bottom-8 md:left-10 font-mono uppercase tracking-widerx text-[10px] md:text-[11px] text-mute"
        style={{ animationDelay: "2900ms" }}
      >
        File · SS-001 / Initialising
      </div>
      <div
        className="ss-tagline absolute bottom-6 right-6 md:bottom-8 md:right-10 font-mono uppercase tracking-widerx text-[10px] md:text-[11px] text-mute"
        style={{ animationDelay: "2900ms" }}
      >
        © 2026 Signal Stack
      </div>
    </div>
  );
};

export default Splash;
