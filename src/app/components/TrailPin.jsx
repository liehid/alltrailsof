// ── MASONRY TRAIL PIN ─────────────────────────────────────
export default function TrailPin({ trail, rank, isSaved, toggle, expanded, setExpanded, setReading, isMobile }) {
  const isExp = expanded === trail.id;

  // Google Maps URL (좌표 있으면 Google Maps, 없으면 네이버 fallback)
  const mapUrl = (trail.lat && trail.lng)
    ? `https://www.google.com/maps?q=${trail.lat},${trail.lng}&z=17`
    : `https://map.naver.com/v5/search/${encodeURIComponent(trail.mapQuery)}`;

  return (
    <div style={{ borderRadius:4, overflow:"hidden", background:"#fff", boxShadow:"0 1px 8px rgba(0,0,0,0.07)" }}>
      {/* image — 클릭 시 트레일 상세 페이지로 이동 */}
      <div style={{ position:"relative", overflow:"hidden", cursor: setReading ? "pointer" : "default" }}
        onClick={() => setReading && setReading(trail)}>
        <img src={trail.thumb} alt={trail.title} style={{ width:"100%", height: trail.imgH, objectFit:"cover", display:"block", transition:"transform 0.4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform="scale(1.04)"}
          onMouseLeave={e => e.currentTarget.style.transform="scale(1)"} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.45))", pointerEvents:"none" }} />
        {rank != null && <div style={{ position:"absolute", top:10, left:10, background:"#111", color:"#fff", fontFamily:"'Cormorant Garamond',serif", fontSize:10, fontWeight:600, width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{rank}</div>}
        {/* save button overlaid on image */}
        <button onClick={() => toggle(trail)} style={{ position:"absolute", top:10, right:10, padding:"5px 10px", border:`1px solid ${isSaved(trail.id) ? "transparent" : "rgba(255,255,255,0.7)"}`, background: isSaved(trail.id) ? "#111" : "rgba(255,255,255,0.88)", color: isSaved(trail.id) ? "#fff" : "#333", fontSize:8, fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.1em", cursor:"pointer", transition:"all 0.2s", borderRadius:2, whiteSpace:"nowrap" }}>
          {isSaved(trail.id) ? "✦ SAVED" : "+ SAVE"}
        </button>
      </div>
      {/* compact text strip */}
      <div style={{ padding: isMobile ? "10px 12px 12px" : "12px 14px 14px" }}>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:7, letterSpacing:"0.18em", textTransform:"uppercase", color:"#bbb", marginBottom:4 }}>{trail.tag}</div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 13 : 14, fontWeight:600, color:"#111", lineHeight:1.25, marginBottom:6 }}>{trail.title}</h3>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ fontFamily:"Georgia,serif", fontSize:9, color:"#bbb" }}>📍 {trail.location}</div>
          <div style={{ display:"flex", gap:6 }}>
            <button onClick={() => setExpanded(isExp ? null : trail.id)} style={{ fontSize:8, padding:"4px 9px", border:"1px solid #e0e0e0", background:"transparent", color:"#888", cursor:"pointer", fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.1em" }}>{isExp ? "HIDE" : "▶"}</button>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize:8, padding:"4px 9px", border:"1px solid #e0e0e0", color:"#888", textDecoration:"none", fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.1em" }}>MAP</a>
          </div>
        </div>
        {isExp && (
          <div style={{ borderRadius:2, overflow:"hidden", marginTop:10 }}>
            <iframe width="100%" height={155} src={`https://www.youtube.com/embed/${trail.youtube}`} title="clip" frameBorder="0" allowFullScreen style={{ display:"block" }} />
          </div>
        )}
      </div>
    </div>
  );
}
