// ── ARTICLE MODAL ─────────────────────────────────────────
export default function ArticleModal({ article, onClose, isMobile }) {
  if (!article) return null;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:900, display:"flex", alignItems: isMobile ? "flex-end" : "center", justifyContent:"center", padding: isMobile ? 0 : 40 }}>
      <div onClick={e => e.stopPropagation()} style={{ background:"#fff", width:"100%", maxWidth:700, maxHeight:"90vh", overflowY:"auto", borderRadius: isMobile ? "14px 14px 0 0" : 2, position:"relative" }}>
        <div style={{ height: isMobile ? 200 : 320, overflow:"hidden", position:"relative" }}>
          <img src={article.thumb} alt={article.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.5))" }} />
          <button onClick={onClose} style={{ position:"absolute", top:14, right:14, background:"rgba(255,255,255,0.92)", border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:13, color:"#333", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        </div>
        <div style={{ padding: isMobile ? "24px 20px 52px" : "40px 52px 52px" }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:"#bbb", marginBottom:12 }}>{article.cats?.[0]?.toUpperCase()} · {article.time} · {(article.views/1000).toFixed(1)}k reads</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 24 : 34, fontWeight:600, lineHeight:1.2, color:"#111", marginBottom:14 }}>{article.title}</h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 15 : 17, color:"#777", lineHeight:1.7, marginBottom:28, fontStyle:"italic", borderBottom:"1px solid #eee", paddingBottom:24 }}>{article.sub}</p>
          {article.body.map((para,i) => <p key={i} style={{ fontFamily:"Georgia,serif", fontSize:14, color:"#333", lineHeight:1.9, marginBottom:18, fontWeight:300 }}>{para}</p>)}
          <div style={{ marginTop:24, background:"#f9f9f9", border:"1px solid #eee", borderRadius:2, padding:"14px 18px" }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.2em", textTransform:"uppercase", color:"#bbb", marginBottom:4 }}>Full article coming soon</div>
            <div style={{ fontFamily:"Georgia,serif", fontSize:12, color:"#aaa", lineHeight:1.6 }}>We're building out The Edit — stories and guides about the culture behind the content.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
