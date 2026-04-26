// ── TRAIL DETAIL PAGE (독립 페이지) ─────────────────────────
export default function TrailDetailPage({ trail, onClose, isMobile }) {
  if (!trail) return null;

  const mapUrl = (trail.lat && trail.lng)
    ? `https://www.google.com/maps?q=${trail.lat},${trail.lng}&z=17`
    : `https://map.naver.com/v5/search/${encodeURIComponent(trail.mapQuery)}`;

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* 히어로 이미지 */}
      <div style={{ height: isMobile ? 260 : 480, overflow: "hidden", position: "relative" }}>
        <img
          src={trail.thumb}
          alt={trail.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55))" }} />

        {/* 뒤로가기 버튼 */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, left: 18,
            background: "rgba(255,255,255,0.92)", border: "none",
            borderRadius: 2, padding: "8px 16px", cursor: "pointer",
            fontFamily: "'Cormorant Garamond',serif", fontSize: 10,
            letterSpacing: "0.18em", textTransform: "uppercase", color: "#111",
            display: "flex", alignItems: "center", gap: 6
          }}>
          ← Back
        </button>

        {/* 히어로 텍스트 */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: isMobile ? "24px 20px" : "40px 80px"
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)", marginBottom: 10
          }}>
            {trail.tag} · {(trail.views / 1000).toFixed(1)}k visits
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: isMobile ? 28 : 48,
            fontWeight: 600, lineHeight: 1.15, color: "#fff", margin: 0
          }}>
            {trail.title}
          </h1>
          <div style={{
            fontFamily: "Georgia,serif", fontSize: 12,
            color: "rgba(255,255,255,0.75)", marginTop: 10,
            display: "flex", alignItems: "center", gap: 6
          }}>
            📍 {trail.location}
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div style={{
        maxWidth: 780,
        margin: "0 auto",
        padding: isMobile ? "36px 20px 80px" : "60px 40px 100px"
      }}>

        {/* 구분선 */}
        <div style={{ borderTop: "1px solid #eee", marginBottom: 36 }} />

        {/* 설명 */}
        <p style={{
          fontFamily: "Georgia,serif", fontSize: isMobile ? 15 : 17,
          color: "#333", lineHeight: 1.95, marginBottom: 40, fontWeight: 300
        }}>
          {trail.desc}
        </p>

        {/* 지도 버튼 */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", padding: "13px 30px",
            background: "#111", color: "#fff",
            fontFamily: "'Cormorant Garamond',serif", fontSize: 10,
            letterSpacing: "0.22em", textTransform: "uppercase",
            textDecoration: "none", marginBottom: 48,
            transition: "background 0.2s"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#C4933F"}
          onMouseLeave={e => e.currentTarget.style.background = "#111"}
        >
          Open in Maps →
        </a>

        {/* 유튜브 영상 */}
        {trail.youtube && (
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#bbb", marginBottom: 14
            }}>
              Related Content
            </div>
            <div style={{
              position: "relative", paddingBottom: "56.25%",
              height: 0, overflow: "hidden", borderRadius: 2
            }}>
              <iframe
                src={`https://www.youtube.com/embed/${trail.youtube}`}
                title={trail.title}
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
