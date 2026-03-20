// ── MY TRAILS DRAWER ──────────────────────────────────────
export default function TrailsDrawer({ saved, toggle, onClose, isMobile }) {
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.3)", zIndex:800, display:"flex", justifyContent:"flex-end" }}>
      <div onClick={e => e.stopPropagation()} style={{ background:"#fff", width: isMobile ? "100%" : 400, height:"100%", overflowY:"auto", padding:"40px 28px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:32 }}>
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.26em", textTransform:"uppercase", color:"#bbb", marginBottom:6 }}>Your Collection</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:600, color:"#111" }}>My Trails</h2>
          </div>
          <button onClick={onClose} style={{ background:"none", border:"1px solid #eee", width:32, height:32, borderRadius:"50%", cursor:"pointer", fontSize:12, color:"#aaa" }}>✕</button>
        </div>
        {saved.length === 0 ? (
          <div style={{ textAlign:"center", paddingTop:72 }}>
            <div style={{ fontSize:40, marginBottom:14 }}>🗺</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:"#bbb", lineHeight:1.7 }}>No trails saved yet.</p>
          </div>
        ) : (
          <>
            <p style={{ fontFamily:"Georgia,serif", fontSize:11, color:"#bbb", lineHeight:1.6, marginBottom:20, padding:"10px 14px", background:"#fafafa", border:"1px solid #eee" }}>✦ AI itinerary coming soon.</p>
            {saved.map((t,i) => (
              <div key={t.id} style={{ borderBottom:"1px solid #f0f0f0", padding:"14px 0", display:"flex", gap:12, alignItems:"flex-start" }}>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:600, color:"#e0e0e0", minWidth:22 }}>{i+1}</span>
                <img src={t.thumb} alt={t.title} style={{ width:56, height:40, objectFit:"cover", borderRadius:2, flexShrink:0 }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:7, letterSpacing:"0.14em", textTransform:"uppercase", color:"#bbb", marginBottom:2 }}>{t.cats?.[0]}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:14, fontWeight:600, color:"#111", lineHeight:1.25 }}>{t.title}</div>
                  <div style={{ fontFamily:"Georgia,serif", fontSize:10, color:"#ccc", marginTop:2 }}>📍 {t.location}</div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
                  <a href={`https://map.naver.com/v5/search/${encodeURIComponent(t.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize:9, padding:"4px 8px", border:"1px solid #ddd", color:"#666", textDecoration:"none", fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.08em" }}>MAP</a>
                  <button onClick={() => toggle(t)} style={{ fontSize:9, padding:"4px 8px", border:"1px solid #eee", background:"transparent", color:"#ccc", cursor:"pointer", fontFamily:"'Cormorant Garamond',serif" }}>REMOVE</button>
                </div>
              </div>
            ))}
            <div style={{ marginTop:28, padding:"22px 18px", background:"#f9f9f9", textAlign:"center" }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontWeight:600, marginBottom:8, color:"#111" }}>Ready to plan?</div>
              <div style={{ fontFamily:"Georgia,serif", fontSize:11, color:"#aaa", lineHeight:1.65, marginBottom:16 }}>AI will build the optimal route for your {saved.length} saved location{saved.length !== 1 ? "s" : ""}.</div>
              <button style={{ width:"100%", padding:"11px", background:"#111", border:"none", color:"#fff", fontSize:10, fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.15em", cursor:"pointer" }}>GENERATE AI ITINERARY · COMING SOON</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
