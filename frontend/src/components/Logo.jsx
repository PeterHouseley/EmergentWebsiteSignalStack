import React from "react";

/**
 * Signal Stack mark — 6 cyan blocks in a 1-2-3 stepped stack.
 * Use `animated` for the splash sequence.
 */
export const SignalMark = ({ size = 40, animated = false, className = "" }) => {
  const blocks = [
    // x, y, animation delay (ms) — order: col1 → col2 → col3 ascending
    { x: 0, y: 42, d: 0 },
    { x: 18, y: 42, d: 90 },
    { x: 18, y: 24, d: 180 },
    { x: 36, y: 42, d: 270 },
    { x: 36, y: 24, d: 360 },
    { x: 36, y: 6, d: 460 },
  ];
  return (
    <svg
      viewBox="0 0 50 56"
      width={size}
      height={(size * 56) / 50}
      className={className}
      aria-label="Signal Stack"
      role="img"
    >
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={14}
          height={14}
          rx={1.5}
          fill="#00A7E1"
          className={animated ? "ss-bar" : ""}
          style={animated ? { animationDelay: `${b.d}ms` } : undefined}
        />
      ))}
    </svg>
  );
};

export const Wordmark = ({ size = "lg", showTag = true, mono = false }) => {
  const tier = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl md:text-4xl",
    "2xl": "text-5xl md:text-6xl",
  }[size];

  return (
    <div className="flex items-center gap-3">
      <SignalMark size={size === "2xl" ? 56 : size === "xl" ? 40 : 30} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-sans font-semibold tracking-tight ${tier} ${
            mono ? "text-white" : "text-navy"
          }`}
        >
          Signal Stack
        </span>
        {showTag && (
          <span
            className={`font-mono uppercase tracking-widerx mt-1.5 ${
              size === "2xl"
                ? "text-[11px]"
                : size === "xl"
                ? "text-[10px]"
                : "text-[9px]"
            } ${mono ? "text-cyan" : "text-mute"}`}
          >
            AI Marketing Ops
          </span>
        )}
      </div>
    </div>
  );
};
