"use client";
import { useRef } from "react";

export default function Carousel({ children, itemW, gap = 16 }) {
  const ref = useRef(null);
  const go  = d => ref.current?.scrollBy({ left: d * (itemW + gap) * 2, behavior:"smooth" });
  return (
    <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
      <div ref={ref} className="scroll-row" style={{ flex:1, gap }}>
        {children}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:6, paddingTop:4 }}>
        <button className="arr" onClick={() => go(-1)}>←</button>
        <button className="arr" onClick={() => go(1)}>→</button>
      </div>
    </div>
  );
}
