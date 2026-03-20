// ── PAGE HEADER ───────────────────────────────────────────
export default function PageHead({ sup, title, italic, desc, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? 28 : 44, borderBottom:"1px solid #e8e8e8", paddingBottom: isMobile ? 18 : 28 }}>
      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.26em", textTransform:"uppercase", color:"#bbb", marginBottom:8 }}>{sup}</div>
      <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 30 : 48, fontWeight:400, color:"#111", marginBottom:10, fontStyle: italic ? "italic" : "normal" }}>{title}</h1>
      {desc && <p style={{ fontFamily:"Georgia,serif", fontSize: isMobile ? 12 : 13, color:"#aaa", lineHeight:1.75, fontWeight:300, maxWidth:520 }}>{desc}</p>}
    </div>
  );
}
