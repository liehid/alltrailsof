// ── MASONRY ARTICLE PIN ───────────────────────────────────
export default function ArticlePin({ article, rank, onClick, isMobile }) {
  return (
    <div className="ch pin" onClick={onClick} style={{ position:"relative", borderRadius:4, overflow:"hidden", boxShadow:"0 1px 8px rgba(0,0,0,0.10)", cursor:"pointer" }}>
      {/* image — full card, variable height */}
      <img src={article.thumb} alt={article.title}
        style={{ width:"100%", height: article.imgH, objectFit:"cover", display:"block", transition:"transform 0.4s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform="scale(1.04)"}
        onMouseLeave={e => e.currentTarget.style.transform="scale(1)"} />
      {/* strong gradient so text reads clearly */}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.72) 100%)", pointerEvents:"none" }} />
      {/* rank badge — top left */}
      {rank != null && (
        <div style={{ position:"absolute", top:10, left:10, background:"rgba(255,255,255,0.18)", backdropFilter:"blur(4px)", border:"1px solid rgba(255,255,255,0.3)", color:"#fff", fontFamily:"'Cormorant Garamond',serif", fontSize:10, fontWeight:600, width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{rank}</div>
      )}
      {/* category tag — top right */}
      <div style={{ position:"absolute", top:10, right:10, background:"rgba(255,255,255,0.15)", backdropFilter:"blur(4px)", border:"1px solid rgba(255,255,255,0.25)", fontFamily:"'Cormorant Garamond',serif", fontSize:7, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.9)", padding:"3px 8px", borderRadius:2 }}>
        {article.cats?.[0]?.toUpperCase()}
      </div>
      {/* category · time · title — bottom overlay */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding: isMobile ? "16px 12px 14px" : "20px 16px 16px" }}>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.65)", marginBottom:5 }}>{article.cats?.[0]?.toUpperCase()} · {article.time}</div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 14 : 16, fontWeight:600, color:"#fff", lineHeight:1.3, textShadow:"0 1px 4px rgba(0,0,0,0.3)" }}>{article.title}</h3>
      </div>
    </div>
  );
}
