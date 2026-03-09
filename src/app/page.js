'use client'

import { useState, useEffect } from "react";

const cards = [
  { id: 1, category: "Movie", emoji: "🎬", title: "Squid Game Alley", location: "Ssangmun-dong, Seoul", description: "Walk through the iconic neighborhood of Seong Ki-hoon. Baekun Market still buzzes with the same locals who watched a global phenomenon unfold on their doorstep.", tag: "Netflix · Global #1", color: "#D45A3C", accent: "#E8896B", youtube: "oqxAJKy0ii4", mapQuery: "서울 도봉구 백운시장" },
  { id: 2, category: "Music", emoji: "🎵", title: "BTS Butter Bridge", location: "Mapo-gu, Seoul", description: "BTS performed 'Butter' on this empty bridge for The Tonight Show. After sunset, Han River lights shimmer below — fans have never stopped coming.", tag: "Billboard · 10 Weeks #1", color: "#C4933F", accent: "#E8BA6B", youtube: "WMweEpGlu_U", mapQuery: "서울 마포구 월드컵대교" },
  { id: 3, category: "Food", emoji: "🍜", title: "Parasite — The Real Streets", location: "Ahyeon-dong, Mapo-gu", description: "Bong Joon-ho filmed in real Seoul back-alleys. Visit the actual 'Daejissal Supermarket' and the staircase from the iconic rainy-night escape.", tag: "Cannes · Palme d'Or", color: "#5A7A3C", accent: "#89B06B", youtube: "isOGD_7hNIY", mapQuery: "서울 마포구 손기정로 32 돼지쌀슈퍼" },
  { id: 4, category: "Place", emoji: "🏯", title: "Jahamun Tunnel Stairs", location: "Buam-dong, Jongno-gu", description: "The dramatic staircase where the Ki-taek family fled through pouring rain. A photo zone marks the exact spot. One of Seoul's most quietly powerful places.", tag: "Parasite · Oscar Winner", color: "#3C5A7A", accent: "#6B89B0", youtube: "isOGD_7hNIY", mapQuery: "서울 종로구 자하문로 219 자하문터널 계단" },
  { id: 5, category: "Beauty", emoji: "✨", title: "Bukchon Hanok Village", location: "Jongno-gu, Seoul", description: "600-year-old tile-roofed alleys — the backdrop for Crash Landing on You. Golden-hour light through the rooftops is still exactly as the cameras captured it.", tag: "Netflix · Crash Landing", color: "#7A3C6B", accent: "#B06B9E", youtube: "kFoHaW0FTSA", mapQuery: "서울 종로구 북촌한옥마을" },
  { id: 6, category: "Music", emoji: "🎵", title: "Spring Day — Iryeong Station", location: "Yangju, Gyeonggi-do", description: "An abandoned station since 2004, immortalised in BTS's 'Spring Day'. Only ARMY pilgrims come now — and the wind, and the light, and the memory of V standing alone.", tag: "BTS · Spring Day", color: "#3C6B7A", accent: "#6BA8B0", youtube: "xEeFrLSkMm8", mapQuery: "경기도 양주 이령역" },
];

const categories = ["All", "Movie", "Music", "Food", "Beauty", "Place"];
const catIcons = { All: "✦", Movie: "🎬", Music: "🎵", Food: "🍜", Beauty: "✨", Place: "🏯" };

export default function App() {
  const [tab, setTab] = useState("explore");
  const [saved, setSaved] = useState([]);
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [notif, setNotif] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered = cat === "All" ? cards : cards.filter(c => c.category === cat);
  const isSaved = (id) => saved.some(t => t.id === id);

  const toggle = (card) => {
    if (isSaved(card.id)) { setSaved(saved.filter(t => t.id !== card.id)); flash("Removed from My Trails"); }
    else { setSaved([...saved, card]); flash("Added to My Trails ✦"); }
  };

  const flash = (msg) => { setNotif(msg); setTimeout(() => setNotif(null), 2200); };

  const props = { tab, setTab, saved, cat, setCat, expanded, setExpanded, notif, filtered, isSaved, toggle };

  return isMobile ? <MobileApp {...props} /> : <DesktopApp {...props} />;
}

function DesktopApp({ tab, setTab, saved, cat, setCat, expanded, setExpanded, notif, filtered, isSaved, toggle }) {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#FAF7F2", color: "#1A1208", minHeight: "100vh", display: "flex" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
        .nav-btn:hover { color: #C4933F !important; background: #F5EDD8 !important; }
        ::-webkit-scrollbar { width: 0; height: 0; }
      `}</style>

      {notif && <div style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", background: "#1A1208", color: "#FAF7F2", padding: "12px 28px", borderRadius: 100, fontSize: 13, fontFamily: "Lato, sans-serif", letterSpacing: "0.06em", zIndex: 999, whiteSpace: "nowrap", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>{notif}</div>}

      <aside style={{ width: 256, minHeight: "100vh", background: "#FAF7F2", borderRight: "1px solid #E8E0D0", padding: "40px 28px", position: "fixed", top: 0, left: 0, display: "flex", flexDirection: "column", zIndex: 100 }}>
        <div style={{ marginBottom: 44 }}>
          <div style={{ fontFamily: "Playfair Display, serif", fontSize: 30, fontWeight: 900, fontStyle: "italic", color: "#1A1208", lineHeight: 1 }}>ATO</div>
          <div style={{ fontFamily: "Lato, sans-serif", fontSize: 9, color: "#B0A48C", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 5 }}>alltrailsof.com</div>
          <div style={{ width: 28, height: 2, background: "#C4933F", marginTop: 14 }} />
        </div>
        <div style={{ fontFamily: "Lato, sans-serif", fontSize: 9, color: "#C0B098", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 10 }}>Menu</div>
        {[["explore", "✦", "Explore"], ["trails", "◈", `My Trails${saved.length > 0 ? ` (${saved.length})` : ""}`]].map(([id, icon, label]) => (
          <button key={id} className="nav-btn" onClick={() => setTab(id)} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 14px", borderRadius: 8, border: "none", background: tab === id ? "#F0E8D8" : "transparent", color: tab === id ? "#C4933F" : "#6B5D45", fontSize: 14, fontFamily: "Lato, sans-serif", fontWeight: tab === id ? 700 : 400, cursor: "pointer", marginBottom: 4, textAlign: "left", transition: "all 0.2s" }}>
            <span>{icon}</span>{label}
          </button>
        ))}
        <div style={{ fontFamily: "Lato, sans-serif", fontSize: 9, color: "#C0B098", letterSpacing: "0.22em", textTransform: "uppercase", margin: "28px 0 10px" }}>Categories</div>
        {categories.map(c => (
          <button key={c} className="nav-btn" onClick={() => { setCat(c); setTab("explore"); }} style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "8px 14px", borderRadius: 8, border: "none", background: cat === c && tab === "explore" ? "#F0E8D8" : "transparent", color: cat === c && tab === "explore" ? "#C4933F" : "#6B5D45", fontSize: 13, fontFamily: "Lato, sans-serif", cursor: "pointer", marginBottom: 2, textAlign: "left", transition: "all 0.2s" }}>
            <span>{catIcons[c]}</span>{c}
          </button>
        ))}
        <div style={{ marginTop: "auto", paddingTop: 24, borderTop: "1px solid #E8E0D0" }}>
          <div style={{ fontFamily: "Lato, sans-serif", fontSize: 10, color: "#C0B098", lineHeight: 1.7 }}>콘텐츠로 시작하는<br />한국 여행</div>
        </div>
      </aside>

      <main style={{ marginLeft: 256, flex: 1 }}>
        {tab === "explore" ? (
          <>
            <div style={{ background: "linear-gradient(135deg, #FEF6E4 0%, #FAF0D2 60%, #F5E8C0 100%)", padding: "68px 56px 52px", borderBottom: "1px solid #EAE0CC", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, #F5D98820 0%, transparent 65%)", pointerEvents: "none" }} />
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#C4933F", marginBottom: 18, fontWeight: 700 }}>Issue No. 01 · Seoul & Beyond</div>
              <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 68, fontWeight: 900, lineHeight: 1.04, margin: "0 0 22px", letterSpacing: "-0.02em", color: "#1A1208", maxWidth: 660 }}>
                Every Frame<br /><em style={{ color: "#C4933F" }}>Tells a Trail.</em>
              </h1>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#6B5D45", lineHeight: 1.8, maxWidth: 500, fontWeight: 300 }}>
                Discover the real places behind your favourite K-Dramas, films and music videos. Save what calls to you — let AI build your perfect Seoul journey.
              </p>
            </div>
            <div style={{ padding: "44px 56px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 700, color: "#1A1208" }}>
                  {cat === "All" ? "All Stories" : cat}
                  <span style={{ fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 300, color: "#B0A48C", marginLeft: 10 }}>{filtered.length} locations</span>
                </h2>
                <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#B0A48C" }}>{saved.length} saved</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
                {filtered.map(card => (
                  <div key={card.id} className="card-hover" style={{ borderRadius: 16, overflow: "hidden", background: "#fff", border: "1px solid #EAE0CC" }}>
                    <div style={{ height: 5, background: `linear-gradient(90deg, ${card.color}, ${card.accent})` }} />
                    <div style={{ padding: 26 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                        <div>
                          <div style={{ fontFamily: "Lato, sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: card.color, marginBottom: 7, fontWeight: 700 }}>{card.category} · {card.tag}</div>
                          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 21, fontWeight: 700, lineHeight: 1.2, color: "#1A1208" }}>{card.title}</h3>
                        </div>
                        <span style={{ fontSize: 26, marginLeft: 10 }}>{card.emoji}</span>
                      </div>
                      <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, color: "#B0A48C", marginBottom: 11, display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ color: card.color }}>📍</span>{card.location}
                      </div>
                      <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#6B5D45", lineHeight: 1.72, margin: "0 0 18px", fontWeight: 300 }}>{card.description}</p>
                      {expanded === card.id && (
                        <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: 18 }}>
                          <iframe width="100%" height="210" src={`https://www.youtube.com/embed/${card.youtube}`} title="clip" frameBorder="0" allowFullScreen style={{ display: "block" }} />
                        </div>
                      )}
                      <div style={{ display: "flex", gap: 8, alignItems: "center", borderTop: "1px solid #F2EAD8", paddingTop: 16 }}>
                        <button onClick={() => setExpanded(expanded === card.id ? null : card.id)} style={{ fontFamily: "Lato, sans-serif", fontSize: 11, padding: "7px 13px", borderRadius: 7, border: "1px solid #E0D4BC", background: "transparent", color: "#6B5D45", cursor: "pointer" }}>
                          {expanded === card.id ? "▲ Hide" : "▶ Watch Clip"}
                        </button>
                        <a href={`https://map.naver.com/v5/search/${encodeURIComponent(card.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Lato, sans-serif", fontSize: 11, padding: "7px 13px", borderRadius: 7, border: "1px solid #E0D4BC", background: "transparent", color: "#6B5D45", textDecoration: "none" }}>
                          🗺 Map
                        </a>
                        <button onClick={() => toggle(card)} style={{ marginLeft: "auto", fontFamily: "Lato, sans-serif", fontSize: 12, padding: "8px 16px", borderRadius: 8, border: `1px solid ${card.color}`, background: isSaved(card.id) ? card.color : "transparent", color: isSaved(card.id) ? "#fff" : card.color, cursor: "pointer", fontWeight: 700, transition: "all 0.2s", whiteSpace: "nowrap" }}>
                          {isSaved(card.id) ? "✦ Saved" : "+ Add to Plan"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div style={{ padding: "56px" }}>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C4933F", marginBottom: 10, fontWeight: 700 }}>Your Collection</div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 900, color: "#1A1208" }}>My Trails</h2>
            </div>
            {saved.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 20px", background: "#fff", borderRadius: 20, border: "1px solid #EAE0CC" }}>
                <div style={{ fontSize: 60, marginBottom: 18 }}>🗺</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 700, marginBottom: 10, color: "#1A1208" }}>No trails saved yet.</h3>
                <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#6B5D45", lineHeight: 1.75, fontWeight: 300 }}>Go to Explore and click <strong>&quot;+ Add to Plan&quot;</strong> to start building your Korean adventure.</p>
              </div>
            ) : (
              <>
                <div style={{ background: "#FEF6E4", border: "1px solid #EAD8A8", borderRadius: 12, padding: "14px 22px", fontSize: 13, color: "#6B5D45", display: "flex", gap: 10, alignItems: "center", marginBottom: 28, fontFamily: "Lato, sans-serif" }}>
                  <span style={{ color: "#C4933F", fontSize: 16 }}>✦</span>
                  AI itinerary generation coming soon — keep collecting spots!
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18, marginBottom: 36 }}>
                  {saved.map((trail, i) => (
                    <div key={trail.id} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", border: "1px solid #EAE0CC", borderLeft: `4px solid ${trail.color}`, display: "flex", gap: 14, alignItems: "center" }}>
                      <div style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 900, color: "#EAE0CC", minWidth: 32 }}>{i + 1}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "Lato, sans-serif", fontSize: 9, color: trail.color, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4, fontWeight: 700 }}>{trail.category}</div>
                        <div style={{ fontFamily: "Playfair Display, serif", fontSize: 16, fontWeight: 700, marginBottom: 4, color: "#1A1208" }}>{trail.title}</div>
                        <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, color: "#B0A48C" }}>📍 {trail.location}</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <a href={`https://map.naver.com/v5/search/${encodeURIComponent(trail.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ padding: "5px 11px", borderRadius: 7, border: `1px solid ${trail.color}55`, color: trail.color, textDecoration: "none", fontSize: 12, fontFamily: "Lato, sans-serif", textAlign: "center" }}>🗺 Map</a>
                        <button onClick={() => toggle(trail)} style={{ padding: "5px 11px", borderRadius: 7, border: "1px solid #E8E0D0", background: "transparent", color: "#B0A48C", fontSize: 11, cursor: "pointer", fontFamily: "Lato, sans-serif" }}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "linear-gradient(135deg, #FEF6E4, #FAF0D2)", border: "1px solid #EAD8A8", borderRadius: 20, padding: "44px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: 700, marginBottom: 10, color: "#1A1208" }}>Ready to plan your trip?</div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#6B5D45", lineHeight: 1.75, marginBottom: 28, fontWeight: 300 }}>Our AI will calculate the optimal route between your {saved.length} saved location{saved.length !== 1 ? "s" : ""}.</div>
                  <button style={{ padding: "15px 48px", borderRadius: 12, background: "linear-gradient(135deg, #C4933F, #D4A855)", border: "none", color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "Lato, sans-serif", cursor: "pointer", letterSpacing: "0.06em" }}>
                    ✦ Generate AI Itinerary
                    <div style={{ fontSize: 9, opacity: 0.75, fontWeight: 300, marginTop: 3, letterSpacing: "0.18em" }}>COMING SOON</div>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function MobileApp({ tab, setTab, saved, cat, setCat, expanded, setExpanded, notif, filtered, isSaved, toggle }) {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#FAF7F2", color: "#1A1208", minHeight: "100vh", maxWidth: 480, margin: "0 auto", paddingBottom: 80 }}>
      {notif && <div style={{ position: "fixed", top: 66, left: "50%", transform: "translateX(-50%)", background: "#1A1208", color: "#FAF7F2", padding: "10px 22px", borderRadius: 100, fontSize: 12, fontFamily: "Lato, sans-serif", letterSpacing: "0.06em", zIndex: 999, whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}>{notif}</div>}

      <header style={{ padding: "13px 18px 10px", borderBottom: "1px solid #EAE0CC", position: "sticky", top: 0, background: "#FAF7F2", zIndex: 100 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: 23, fontWeight: 900, fontStyle: "italic", color: "#1A1208", lineHeight: 1 }}>ATO</div>
            <div style={{ fontFamily: "Lato, sans-serif", fontSize: 8, color: "#B0A48C", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3 }}>alltrailsof.com</div>
          </div>
          <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, color: "#B0A48C" }}>{saved.length} saved</div>
        </div>
      </header>

      <main>
        {tab === "explore" ? (
          <>
            <div style={{ padding: "22px 18px 16px", background: "linear-gradient(135deg,#FEF6E4,#FAF0D2)", borderBottom: "1px solid #EAE0CC" }}>
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 8, color: "#C4933F", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>Issue No. 01 · Seoul & Beyond</div>
              <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 30, fontWeight: 900, lineHeight: 1.1, margin: "0 0 10px", color: "#1A1208" }}>
                Every Frame<br /><em style={{ color: "#C4933F" }}>Tells a Trail.</em>
              </h1>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#6B5D45", lineHeight: 1.68, margin: 0, fontWeight: 300 }}>K-Drama & K-Pop filming locations in Korea. Save favourites, get your AI itinerary.</p>
            </div>
            <div style={{ padding: "11px 0 9px", borderBottom: "1px solid #EAE0CC" }}>
              <div style={{ display: "flex", gap: 7, overflowX: "auto", padding: "0 16px", scrollbarWidth: "none" }}>
                {categories.map(c => (
                  <button key={c} onClick={() => setCat(c)} style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 100, border: `1px solid ${cat === c ? "#C4933F" : "#E0D4BC"}`, background: cat === c ? "#C4933F" : "transparent", color: cat === c ? "#fff" : "#6B5D45", fontSize: 11, fontFamily: "Lato, sans-serif", cursor: "pointer", whiteSpace: "nowrap", fontWeight: cat === c ? 700 : 400 }}>
                    {catIcons[c]} {c}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ padding: "12px 13px 0" }}>
              {filtered.map(card => (
                <div key={card.id} style={{ borderRadius: 14, border: "1px solid #EAE0CC", overflow: "hidden", background: "#fff", marginBottom: 13 }}>
                  <div style={{ height: 4, background: `linear-gradient(90deg,${card.color},${card.accent})` }} />
                  <div style={{ padding: "13px 15px" }}>
                    <div style={{ fontFamily: "Lato, sans-serif", fontSize: 8, color: card.color, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, marginBottom: 5 }}>{card.category} · {card.tag}</div>
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 17, fontWeight: 700, margin: "0 0 4px", color: "#1A1208", lineHeight: 1.2 }}>{card.title}</h3>
                    <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, color: "#B0A48C", marginBottom: 8 }}>
                      <span style={{ color: card.color }}>📍</span> {card.location}
                    </div>
                    <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#6B5D45", lineHeight: 1.65, margin: "0 0 11px", fontWeight: 300 }}>{card.description}</p>
                    {expanded === card.id && (
                      <div style={{ borderRadius: 8, overflow: "hidden", marginBottom: 11 }}>
                        <iframe width="100%" height="165" src={`https://www.youtube.com/embed/${card.youtube}`} title="clip" frameBorder="0" allowFullScreen style={{ display: "block" }} />
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 6, alignItems: "center", borderTop: "1px solid #F2EAD8", paddingTop: 11 }}>
                      <button onClick={() => setExpanded(expanded === card.id ? null : card.id)} style={{ fontSize: 10, padding: "6px 10px", borderRadius: 7, border: "1px solid #E0D4BC", background: "transparent", color: "#6B5D45", cursor: "pointer", fontFamily: "Lato, sans-serif", whiteSpace: "nowrap" }}>
                        {expanded === card.id ? "▲ Hide" : "▶ Watch"}
                      </button>
                      <a href={`https://map.naver.com/v5/search/${encodeURIComponent(card.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, padding: "6px 10px", borderRadius: 7, border: "1px solid #E0D4BC", background: "transparent", color: "#6B5D45", textDecoration: "none", fontFamily: "Lato, sans-serif", whiteSpace: "nowrap" }}>
                        🗺 Map
                      </a>
                      <button onClick={() => toggle(card)} style={{ marginLeft: "auto", fontSize: 11, padding: "6px 12px", borderRadius: 7, border: `1px solid ${card.color}`, background: isSaved(card.id) ? card.color : "transparent", color: isSaved(card.id) ? "#fff" : card.color, cursor: "pointer", fontFamily: "Lato, sans-serif", fontWeight: 700, whiteSpace: "nowrap" }}>
                        {isSaved(card.id) ? "✦ Saved" : "+ Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ padding: "18px 13px" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 900, margin: "0 0 14px", fontStyle: "italic", color: "#1A1208" }}>My Trails</h2>
            {saved.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 16px" }}>
                <div style={{ fontSize: 48, marginBottom: 14 }}>🗺</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 700, marginBottom: 8, color: "#1A1208" }}>No trails yet.</h3>
                <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#6B5D45", lineHeight: 1.7, fontWeight: 300 }}>Tap <strong>&quot;+ Add&quot;</strong> on any card to start building your Korean adventure.</p>
              </div>
            ) : (
              <>
                <div style={{ background: "#FEF6E4", border: "1px solid #EAD8A8", borderRadius: 10, padding: "10px 13px", fontSize: 11, color: "#6B5D45", display: "flex", gap: 7, alignItems: "center", marginBottom: 14, fontFamily: "Lato, sans-serif" }}>
                  <span style={{ color: "#C4933F" }}>✦</span> AI itinerary coming soon — keep adding spots!
                </div>
                {saved.map((trail, i) => (
                  <div key={trail.id} style={{ background: "#fff", borderRadius: 12, padding: "12px 13px", borderLeft: `3px solid ${trail.color}`, marginBottom: 9, border: "1px solid #EAE0CC", display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 900, color: "#EAE0CC", minWidth: 26 }}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "Lato, sans-serif", fontSize: 8, color: trail.color, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: 3 }}>{trail.category}</div>
                      <div style={{ fontFamily: "Playfair Display, serif", fontSize: 14, fontWeight: 700, color: "#1A1208", marginBottom: 2 }}>{trail.title}</div>
                      <div style={{ fontFamily: "Lato, sans-serif", fontSize: 10, color: "#B0A48C" }}>📍 {trail.location}</div>
                    </div>
                    <div style={{ display: "flex", gap: 5 }}>
                      <a href={`https://map.naver.com/v5/search/${encodeURIComponent(trail.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ padding: "5px 9px", borderRadius: 7, border: `1px solid ${trail.color}44`, color: trail.color, textDecoration: "none", fontSize: 13 }}>🗺</a>
                      <button onClick={() => toggle(trail)} style={{ padding: "5px 9px", borderRadius: 7, border: "1px solid #EAE0CC", background: "transparent", color: "#B0A48C", fontSize: 11, cursor: "pointer" }}>✕</button>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 22, background: "linear-gradient(135deg,#FEF6E4,#FAF0D2)", border: "1px solid #EAD8A8", borderRadius: 16, padding: "22px 16px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: 19, fontWeight: 700, marginBottom: 6, color: "#1A1208" }}>Ready to plan?</div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, color: "#6B5D45", lineHeight: 1.65, marginBottom: 14, fontWeight: 300 }}>AI will build the optimal route for your {saved.length} saved spot{saved.length !== 1 ? "s" : ""}.</div>
                  <button style={{ width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg,#C4933F,#D4A855)", border: "none", color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "Lato, sans-serif", cursor: "pointer" }}>
                    ✦ Generate AI Itinerary
                    <div style={{ fontSize: 8, opacity: 0.75, fontWeight: 300, marginTop: 2, letterSpacing: "0.15em" }}>COMING SOON</div>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: "#FAF7F2", borderTop: "1px solid #EAE0CC", display: "flex", zIndex: 200 }}>
        {[["explore", "✦", "Explore"], ["trails", "◈", `My Trails${saved.length > 0 ? ` (${saved.length})` : ""}`]].map(([id, icon, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{ flex: 1, padding: "12px 0 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "transparent", border: "none", color: tab === id ? "#C4933F" : "#B0A48C", fontSize: 10, fontFamily: "Lato, sans-serif", cursor: "pointer", letterSpacing: "0.06em", fontWeight: tab === id ? 700 : 400 }}>
            <span style={{ fontSize: 16 }}>{icon}</span>{label}
          </button>
        ))}
      </nav>
    </div>
  );
}
