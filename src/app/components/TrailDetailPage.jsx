// ── TRAIL DETAIL PAGE (모달 형식) ─────────────────────────
export default function TrailDetailPage({ trail, onClose, isMobile }) {
  if (!trail) return null;

  const mapUrl = (trail.lat && trail.lng)
    ? `https://www.google.com/maps?q=${trail.lat},${trail.lng}&z=17`
    : `https://map.naver.com/v5/search/${encodeURIComponent(trail.mapQuery)}`;

  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:900, display:"flex", alignItems: isMobile ? "flex-end" : "center", justifyContent:"center", padding: isMobile ? 0 : 40 }}>
      <div onClick={e => e.stopPropagation()} style={{ background:"#fff", width:"100%", maxWidth:700, maxHeight:"90vh", overflowY:"auto", borderRadius: isMobile ? "14px 14px 0 0" : 2, position:"relative" }}>

        {/* 히어로 이미지 */}
        <div style={{ height: isMobile ? 200 : 320, overflow:"hidden", position:"relative" }}>
          <img src={trail.thumb} alt={trail.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.5))" }} />
          <button onClick={onClose} style={{ position:"absolute", top:14, right:14, background:"rgba(255,255,255,0.92)", border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:13, color:"#333", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        </div>

        {/* 본문 */}
        <div style={{ padding: isMobile ? "24px 20px 52px" : "40px 52px 52px" }}>

          {/* 태그 + 조회수 */}
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:"#bbb", marginBottom:12 }}>
            {trail.tag} · {(trail.views/1000).toFixed(1)}k visits
          </div>

          {/* 제목 */}
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 24 : 34, fontWeight:600, lineHeight:1.2, color:"#111", marginBottom:10 }}>
            {trail.title}
          </h2>

          {/* 위치 */}
          <div style={{ fontFamily:"Georgia,serif", fontSize:12, color:"#bbb", marginBottom:24, display:"flex", alignItems:"center", gap:6 }}>
            📍 {trail.location}
          </div>

          {/* 구분선 */}
          <div style={{ borderTop:"1px solid #eee", marginBottom:24 }} />

          {/* 설명 */}
          <p style={{ fontFamily:"Georgia,serif", fontSize:14, color:"#333", lineHeight:1.9, marginBottom:28, fontWeight:300 }}>
            {trail.desc}
          </p>

          {/* 지도 버튼 */}
          <a href={mapUrl} target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-block", padding:"11px 24px", background:"#111", color:"#fff", fontFamily:"'Cormorant Garamond',serif", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", textDecoration:"none", marginBottom:32, transition:"background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background="#C4933F"}
            onMouseLeave={e => e.currentTarget.style.background="#111"}>
            Open in Maps →
          </a>

          {/* 유튜브 영상 */}
          {trail.youtube && (
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:"#bbb", marginBottom:12 }}>
                Related Content
              </div>
              <div style={{ position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", borderRadius:2 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${trail.youtube}`}
                  title={trail.title}
                  frameBorder="0"
                  allowFullScreen
                  style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
