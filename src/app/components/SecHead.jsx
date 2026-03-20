// ── SECTION HEADER ────────────────────────────────────────
export default function SecHead({ sup, title, italic, onSeeAll, isMobile }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom: isMobile ? 16 : 22 }}>
      <div>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.26em", textTransform:"uppercase", color:"#bbb", marginBottom:5 }}>{sup}</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 20 : 24, fontWeight:400, color:"#111", fontStyle: italic ? "italic" : "normal" }}>{title}</h2>
      </div>
      {onSeeAll && (
        <button className="see-all" onClick={onSeeAll}
          onMouseEnter={e => { e.currentTarget.style.background="#111"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#111"; }}
          onMouseLeave={e => { e.currentTarget.style.background="none"; e.currentTarget.style.color="#888"; e.currentTarget.style.borderColor="#e0e0e0"; }}>
          See All →
        </button>
      )}
    </div>
  );
}
