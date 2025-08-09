"use client";

import { useRef, useState, useEffect } from "react";

export default function ResponsiveText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    function updateFontSize() {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      // Beispiel: Schriftgröße ist 10% der Containerbreite, min 12px max 48px
      const newSize = Math.min(Math.max(width * 0.07, 18), 50);
      setFontSize(newSize);
    }
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ fontSize: fontSize }}
      className="font-bold text-center flex-1 justify-center"
    >
      {text}
    </div>
  );
}
