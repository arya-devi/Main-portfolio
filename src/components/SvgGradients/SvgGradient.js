import React from "react";

export default function SvgGradient() {
  return (
    <linearGradient id="grad-background" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "var(--grad-1)" }} />
      <stop offset="100%" style={{ stopColor: "var(--grad-2)" }} />
    </linearGradient>
  );
}
