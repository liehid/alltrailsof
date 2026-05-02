// ── ARTICLE PAGE (독립 페이지) ────────────────────────────
import { useSEO } from '../hooks/useSEO';

export default function ArticlePage({ article, onClose, isMobile }) {
  if (!article) return null;

  useSEO({
    title: article.title,
    description: article.sub,
    image: article.thumb,
  });

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* 히어로 이미지 */}
      <div style={{ height: isMobile ? 260 : 500, overflow: "hidden", position: "relative" }}>
        <img
          src={article.thumb}
          alt={article.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.65))" }} />

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
          padding: isMobile ? "24px 20px" : "48px 80px"
        }}>
          {article.cats?.length > 0 && (
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)", marginBottom: 12
            }}>
              {article.cats.join(" · ")} · {(article.views / 1000).toFixed(1)}k reads · {article.time}
            </div>
          )}

          <h1 style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: isMobile ? 26 : 46,
            fontWeight: 600, lineHeight: 1.15, color: "#fff",
            margin: 0, marginBottom: article.sub ? 14 : 0
          }}>
            {article.title}
          </h1>

          {article.sub && (
            <p style={{
              fontFamily: "Georgia,serif",
              fontSize: isMobile ? 13 : 16,
              color: "rgba(255,255,255,0.78)",
              margin: 0, fontWeight: 300, lineHeight: 1.6,
              maxWidth: 600
            }}>
              {article.sub}
            </p>
          )}
        </div>
      </div>

      {/* 본문 */}
      <div style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: isMobile ? "40px 22px 100px" : "64px 40px 120px"
      }}>

        <div style={{ borderTop: "1px solid #eee", marginBottom: 40 }} />

        {Array.isArray(article.body)
          ? article.body.map((para, i) => (
              <p key={i} style={{
                fontFamily: "Georgia,serif",
                fontSize: isMobile ? 15 : 17,
                color: "#333", lineHeight: 1.95,
                fontWeight: 300, marginBottom: 28
              }}>
                {para}
              </p>
            ))
          : (
            <p style={{
              fontFamily: "Georgia,serif",
              fontSize: isMobile ? 15 : 17,
              color: "#333", lineHeight: 1.95, fontWeight: 300
            }}>
              {article.body}
            </p>
          )
        }

        {/* 유튜브 */}
        {article.youtube && (
          <div style={{ marginTop: 48 }}>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#bbb", marginBottom: 14
            }}>
              Related Content
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 2 }}>
              <iframe
                src={`https://www.youtube.com/embed/${article.youtube}`}
                title={article.title}
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        )}

        {/* 구매 링크 */}
        {article.buyLinks?.length > 0 && (
          <div style={{ marginTop: 52 }}>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#bbb", marginBottom: 16
            }}>
              Shop This
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {article.buyLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 20px", border: "1px solid #eee",
                    textDecoration: "none", borderRadius: 2, transition: "border-color 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#C4933F"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#eee"}
                >
                  <span style={{ fontFamily: "Georgia,serif", fontSize: 14, color: "#333" }}>
                    {link.label}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4933F"
                  }}>
                    Buy →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 하단 카테고리 태그 */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #eee", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {article.cats?.map(cat => (
            <span key={cat} style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 9,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#999", padding: "6px 14px", border: "1px solid #e8e8e8",
              borderRadius: 2
            }}>
              {cat}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
