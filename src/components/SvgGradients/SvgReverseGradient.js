import React from "react";

export default function SvgReverseGradient() {
  return (
    <linearGradient
      id="grad-reverse-background"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" style={{ stopColor: "var(--grad-2)" }} />
      <stop offset="100%" style={{ stopColor: "var(--grad-1)" }} />
    </linearGradient>
  );
}
