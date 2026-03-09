'use client'

import { useState } from "react";

const cards = [
  { id: 1, category: "Movie", emoji: "🎬", title: "Squid Game Alley", location: "Ssangmun-dong, Seoul", description: "Walk through the iconic staircase where Player 456 changed everything. This forgotten alley became the world's most recognized set.", tag: "Netflix Original", color: "#E63946", accent: "#FF6B6B", youtube: "dQw4w9WgXcQ", mapQuery: "쌍문동 오징어게임 골목" },
  { id: 2, category: "Music", emoji: "🎵", title: "BTS Butter Rooftop", location: "Mapo-gu, Seoul", description: "The sun-soaked rooftop from BTS's 'Butter' MV. Golden hour here hits different — just like the track.", tag: "Billboard #1", color: "#F4A261", accent: "#FFD166", youtube: "WMweEpGlu_U", mapQuery: "마포구 BTS 버터 촬영지" },
  { id: 3, category: "Food", emoji: "🍜", title: "Parasite Ram-don Spot", location: "Jongno-gu, Seoul", description: "Re-create the infamous Ram-don scene from Bong Joon-ho's Oscar winner. The restaurant still serves the same midnight bowl.", tag: "Academy Award", color: "#2A9D8F", accent: "#4ECDC4", youtube: "isOGD_7hNIY", mapQuery: "종로구 기생충 짜파구리 식당" },
  { id: 4, category: "Place", emoji: "🏯", title: "My Mister Train Station", location: "Cheongnyangni, Seoul", description: "The melancholy platform from IU's breakout drama. Early morning fog still drifts over the tracks exactly as filmed.", tag: "tvN Drama", color: "#457B9D", accent: "#74B3CE", youtube: "5v3pHLxz3cg", mapQuery: "청량리역 나의 아저씨" },
  { id: 5, category: "Beauty", emoji: "✨", title: "Crash Landing Hanok", location: "Bukchon, Seoul", description: "The hanok alley where Hyun Bin and Son Ye-jin's story unfolded. Every stone wall has a thousand-year story to tell.", tag: "Netflix Global Top", color: "#6D597A", accent: "#B5838D", youtube: "kFoHaW0FTSA", mapQuery: "북촌 사랑의 불시착 촬영지" },
  { id: 6, category: "Movie", emoji: "🎬", title: "Train to Busan Platform", location: "Seoul Station", description: "Board at the same platform where the outbreak began. The tension from Korea's greatest horror film still lingers here.", tag: "Cannes 2016", color: "#C1121F", accent: "#E63946", youtube: "pyWuHv2-Abk", mapQuery: "서울역 부산행 촬영지" },
];

const categories = ["All","Movie","Music","Food","Beauty","Place"];
const catIcons = { All:"✦", Movie:"🎬", Music:"🎵", Food:"🍜", Beauty:"✨", Place:"🏯" };

export default function App() {
  const [tab, setTab] = useState("explore");
  const [saved, setSaved] = useState([]);
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [notif, setNotif] = useState(null);

  const filtered = cat === "All" ? cards : cards.filter(c => c.category === cat);
  const isSaved = (id) => saved.some(t => t.id === id);

  const toggle = (card) => {
    if (isSaved(card.id)) { setSaved(saved.filter(t => t.id !== card.id)); flash("Removed from My Trails"); }
    else { setSaved([...saved, card]); flash("Added to My Trails ✦"); }
  };

  const flash = (msg) => { setNotif(msg); setTimeout(() => setNotif(null), 2000); };

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: "#0D0D0D", color: "#F0EDE6", minHeight: "100vh", maxWidth: 480, margin: "0 auto", position: "relative", paddingBottom: 80 }}>

      {notif && <div style={{ position: "fixed", top: 72, left: "50%", transform: "translateX(-50%)", background: "#F0EDE6", color: "#0D0D0D", padding: "10px 22px", borderRadius: 100, fontSize: 13, fontWeight: 700, zIndex: 999, whiteSpace: "nowrap", boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}>{notif}</div>}

      <header style={{ padding: "16px 20px 10px", borderBottom: "1px solid #1E1E1E", position: "sticky", top: 0, background: "#0D0D0D", zIndex: 100 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "0.15em", fontStyle: "italic" }}>ATO</div>
            <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.12em", marginTop: 2 }}>alltrailsof.com</div>
          </div>
          <div style={{ fontSize: 11, color: "#666", fontFamily: "monospace" }}>{saved.length} trail{saved.length !== 1 ? "s" : ""} saved</div>
        </div>
        <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.18em", marginTop: 5 }}>콘텐츠로 시작하는 한국 여행</div>
      </header>

      <main>
        {tab === "explore" ? (
          <>
            <div style={{ padding: "32px 24px 20px", borderBottom: "1px solid #1A1A1A" }}>
              <h1 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.1, margin: 0, letterSpacing: "-0.02em" }}>
                Every Frame<br /><span style={{ color: "#E63946", fontStyle: "italic" }}>Tells a Trail.</span>
              </h1>
              <p style={{ fontSize: 13, color: "#777", marginTop: 12, lineHeight: 1.7 }}>Discover K-Drama & K-Pop filming locations.<br />Save favorites. Let AI build your itinerary.</p>
            </div>

            <div style={{ padding: "14px 0 10px", borderBottom: "1px solid #1A1A1A" }}>
              <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "0 18px", scrollbarWidth: "none" }}>
                {categories.map(c => (
                  <button key={c} onClick={() => setCat(c)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 100, border: `1px solid ${cat === c ? "#F0EDE6" : "#2A2A2A"}`, background: cat === c ? "#F0EDE6" : "transparent", color: cat === c ? "#0D0D0D" : "#777", fontSize: 12, fontFamily: "Georgia,serif", cursor: "pointer", whiteSpace: "nowrap", fontWeight: cat === c ? 700 : 400 }}>
                    {catIcons[c]} {c}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ padding: 16 }}>
              {filtered.map(card => (
                <div key={card.id} style={{ borderRadius: 16, border: `1px solid ${card.color}44`, overflow: "hidden", background: "#141414", marginBottom: 16 }}>
                  <div style={{ padding: "14px 16px", background: `linear-gradient(135deg,${card.color},${card.accent})`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 22 }}>{card.emoji}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{card.tag}</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(0,0,0,0.3)", color: "#fff", padding: "3px 10px", borderRadius: 100, letterSpacing: "0.12em", textTransform: "uppercase" }}>{card.category}</span>
                  </div>
                  <div style={{ padding: 16 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 900, margin: "0 0 5px", letterSpacing: "-0.01em" }}>{card.title}</h3>
                    <div style={{ fontSize: 12, color: "#777", display: "flex", gap: 4, alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: card.color }}>📍</span>{card.location}
                    </div>
                    <p style={{ fontSize: 13, color: "#999", lineHeight: 1.65, margin: "0 0 14px" }}>{card.description}</p>
                    {expanded === card.id && (
                      <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: 14 }}>
                        <iframe width="100%" height="175" src={`https://www.youtube.com/embed/${card.youtube}`} title="clip" frameBorder="0" allowFullScreen style={{ display: "block" }} />
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button onClick={() => setExpanded(expanded === card.id ? null : card.id)} style={{ fontSize: 11, padding: "7px 12px", borderRadius: 8, border: "1px solid #2A2A2A", background: "transparent", color: "#777", cursor: "pointer", fontFamily: "Georgia,serif", whiteSpace: "nowrap" }}>
                        {expanded === card.id ? "▲ Hide" : "▶ Watch"}
                      </button>
                      <a href={`https://map.naver.com/v5/search/${encodeURIComponent(card.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, padding: "7px 12px", borderRadius: 8, border: "1px solid #2A2A2A", background: "transparent", color: "#777", textDecoration: "none", whiteSpace: "nowrap" }}>
                        🗺 Map
                      </a>
                      <button onClick={() => toggle(card)} style={{ marginLeft: "auto", fontSize: 12, padding: "8px 14px", borderRadius: 8, border: `1px solid ${card.color}`, background: isSaved(card.id) ? `linear-gradient(135deg,${card.color},${card.accent})` : "transparent", color: isSaved(card.id) ? "#fff" : card.color, cursor: "pointer", fontFamily: "Georgia,serif", fontWeight: 700, whiteSpace: "nowrap" }}>
                        {isSaved(card.id) ? "✦ Saved" : "+ Add to Plan"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ padding: "24px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <h2 style={{ fontSize: 28, fontWeight: 900, margin: 0, fontStyle: "italic" }}>My Trails</h2>
              <span style={{ fontSize: 12, color: "#666", fontFamily: "monospace" }}>{saved.length} location{saved.length !== 1 ? "s" : ""}</span>
            </div>
            {saved.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>🗺</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 10 }}>No trails yet.</h3>
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>Go to Explore and tap <strong>&quot;+ Add to Plan&quot;</strong> on any card to start building your Korean adventure.</p>
              </div>
            ) : (
              <>
                <div style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 10, padding: "12px 16px", fontSize: 12, color: "#777", display: "flex", gap: 8, alignItems: "center", marginBottom: 20 }}>
                  <span style={{ color: "#E63946", fontSize: 16 }}>✦</span> AI itinerary generation coming soon — keep collecting spots!
                </div>
                {saved.map((trail, i) => (
                  <div key={trail.id} style={{ display: "flex", alignItems: "center", gap: 12, background: "#141414", borderRadius: 12, padding: 14, borderLeft: `3px solid ${trail.color}`, marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontFamily: "monospace", color: "#444", minWidth: 18 }}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 3 }}>{trail.title}</div>
                      <div style={{ fontSize: 11, color: "#666", marginBottom: 5 }}><span style={{ color: trail.color }}>📍</span> {trail.location}</div>
                      <div style={{ display: "inline-block", fontSize: 10, color: "#555", background: "#1E1E1E", padding: "2px 8px", borderRadius: 100 }}>{trail.emoji} {trail.category}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <a href={`https://map.naver.com/v5/search/${encodeURIComponent(trail.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ padding: "7px 10px", borderRadius: 8, border: `1px solid ${trail.color}44`, color: trail.color, textDecoration: "none", fontSize: 14 }}>🗺</a>
                      <button onClick={() => toggle(trail)} style={{ padding: "7px 10px", borderRadius: 8, border: "1px solid #2A2A2A", background: "transparent", color: "#555", fontSize: 12, cursor: "pointer" }}>✕</button>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 28, background: "linear-gradient(135deg,#1A1A1A,#111)", border: "1px solid #2A2A2A", borderRadius: 16, padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>Ready to plan your trip?</div>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 18 }}>AI will calculate the optimal route based on distance & travel time between your {saved.length} saved location{saved.length !== 1 ? "s" : ""}.</div>
                  <button style={{ width: "100%", padding: 16, borderRadius: 12, background: "linear-gradient(135deg,#E63946,#C1121F)", border: "none", color: "#fff", fontSize: 15, fontWeight: 900, fontFamily: "Georgia,serif", fontStyle: "italic", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    ✦ Generate AI Itinerary
                    <span style={{ fontSize: 10, opacity: 0.7, fontStyle: "normal", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, fontFamily: "monospace" }}>Coming Soon</span>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: "#0D0D0D", borderTop: "1px solid #1E1E1E", display: "flex", zIndex: 200 }}>
        {[["explore","✦","Explore"],["trails","🗂",`My Trails${saved.length > 0 ? ` (${saved.length})` : ""}`]].map(([id,icon,label]) => (
          <button key={id} onClick={() => setTab(id)} style={{ flex: 1, padding: "13px 0 11px", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "transparent", border: "none", color: tab === id ? "#F0EDE6" : "#444", fontSize: 11, fontFamily: "Georgia,serif", cursor: "pointer", letterSpacing: "0.08em" }}>
            <span style={{ fontSize: 18 }}>{icon}</span>{label}
          </button>
        ))}
      </nav>
    </div>
  );
}
