"use client";

import { useEffect, useState } from "react";

type GlitchTextProps = {
  text: string;
  color?: string;
};

export function GlitchText({ text, color = "#fff" }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        position: "relative",
        color,
        display: "inline-block",
        animation: glitch ? "glitch 0.15s steps(2) forwards" : "none",
      }}
    >
      {text}
    </span>
  );
}
