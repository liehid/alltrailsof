import SecHead from "./SecHead";
import Carousel from "./Carousel";
import { FEATURED, HERO_GRID, POPULAR_ARTICLES, POPULAR_TRAILS } from "../data";

// ── HOME PAGE ─────────────────────────────────────────────
export default function HomePage({ nav, setReading, isSaved, toggle, expanded, setExpanded, isMobile }) {
  const mw  = 1200;
  const px  = isMobile ? "16px" : "60px";
  const AW  = isMobile ? 180 : 220;
  const TW  = isMobile ? 220 : 260;

  return (
    <div>
      {/* Hero */}
      <div style={{ maxWidth:mw, margin:"0 auto", padding: isMobile ? "24px 16px 28px" : "56px 60px 52px", borderBottom:"1px solid #e8e8e8" }}>
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "7fr 5fr", gap: isMobile ? 20 : 44, alignItems:"start" }}>
          <div className="ch" onClick={() => setReading(FEATURED)}>
            <div style={{ position:"relative", overflow:"hidden", borderRadius:4, marginBottom:16, boxShadow:"0 2px 16px rgba(0,0,0,0.1)" }}>
              <img src={FEATURED.thumb} alt={FEATURED.title} style={{ width:"100%", height: isMobile ? 210 : 400, objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 45%,rgba(0,0,0,0.6))" }} />
              <div style={{ position:"absolute", bottom:20, left:22, right:22 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:6 }}>{FEATURED.cats?.[0]?.toUpperCase()} · {FEATURED.time}</div>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 19 : 26, fontWeight:600, color:"#fff", lineHeight:1.2 }}>{FEATURED.title}</h2>
              </div>
            </div>
            <p style={{ fontFamily:"Georgia,serif", fontSize: isMobile ? 11 : 12, color:"#999", lineHeight:1.7, fontWeight:300 }}>{FEATURED.sub}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: isMobile ? 10 : 12 }}>
            {HERO_GRID.map(a => (
              <div key={a.id} className="ch" onClick={() => setReading(a)}>
                <div style={{ position:"relative", overflow:"hidden", borderRadius:4, marginBottom:8, boxShadow:"0 1px 8px rgba(0,0,0,0.07)" }}>
                  <img src={a.thumb} alt={a.title} style={{ width:"100%", height: isMobile ? 100 : 148, objectFit:"cover" }} />
                  <div style={{ position:"absolute", top:6, left:7, background:"rgba(255,255,255,0.92)", fontFamily:"'Cormorant Garamond',serif", fontSize:7, letterSpacing:"0.14em", textTransform:"uppercase", color:"#333", padding:"2px 6px", borderRadius:2 }}>{a.cats?.[0]?.toUpperCase()}</div>
                </div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isMobile ? 11 : 12, fontWeight:600, color:"#111", lineHeight:1.3 }}>{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Edit carousel */}
      <div style={{ maxWidth:mw, margin:"0 auto", padding: isMobile ? "28px 16px 24px" : "48px 60px 40px", borderBottom:"1px solid #e8e8e8" }}>
        <SecHead sup="Most read" title="The Edit" italic onSeeAll={() => nav("edit")} isMobile={isMobile} />
        <Carousel itemW={AW}>
          {POPULAR_ARTICLES.map((a,i) => (
            <div key={a.id} className="snap ch" style={{ width:AW, position:"relative", borderRadius:4, overflow:"hidden", boxShadow:"0 1px 8px rgba(0,0,0,0.10)", flexShrink:0 }} onClick={() => setReading(a)}>
              <img src={a.thumb} alt={a.title} style={{ width:"100%", height: isMobile ? 170 : 200, objectFit:"cover", display:"block", transition:"transform 0.4s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform="scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform="scale(1)"} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.72) 100%)", pointerEvents:"none" }} />
              <div style={{ position:"absolute", top:8, left:8, background:"rgba(255,255,255,0.15)", backdropFilter:"blur(4px)", border:"1px solid rgba(255,255,255,0.25)", color:"#fff", fontFamily:"'Cormorant Garamond',serif", fontSize:9, fontWeight:600, width:20, height:20, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{i+1}</div>
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"14px 12px 12px" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:7, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.65)", marginBottom:4 }}>{a.cats?.[0]?.toUpperCase()} · {a.time}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13, fontWeight:600, color:"#fff", lineHeight:1.3, textShadow:"0 1px 4px rgba(0,0,0,0.3)" }}>{a.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* All Trails carousel */}
      <div style={{ maxWidth:mw, margin:"0 auto", padding: isMobile ? "28px 16px 52px" : "48px 60px 72px" }}>
        <SecHead sup="Most visited" title="All Trails" onSeeAll={() => nav("trail")} isMobile={isMobile} />
        <Carousel itemW={TW}>
          {POPULAR_TRAILS.map((t,i) => (
            <div key={t.id} className="snap" style={{ width:TW }}>
              <div style={{ position:"relative", borderRadius:4, overflow:"hidden", marginBottom:10, boxShadow:"0 1px 8px rgba(0,0,0,0.07)", cursor:"pointer" }}
                onClick={() => setReading(t)}>
                <img src={t.thumb} alt={t.title} style={{ width:"100%", height: isMobile ? 130 : 155, objectFit:"cover" }} />
                <div style={{ position:"absolute", top:7, left:7, background:"#111", color:"#fff", fontFamily:"'Cormorant Garamond',serif", fontSize:9, fontWeight:600, width:20, height:20, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{i+1}</div>
                <button onClick={() => toggle(t)} style={{ position:"absolute", top:8, right:8, padding:"4px 8px", border:"1px solid rgba(255,255,255,0.7)", background: isSaved(t.id) ? "#111" : "rgba(255,255,255,0.88)", color: isSaved(t.id) ? "#fff" : "#333", fontSize:7, fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.1em", cursor:"pointer", borderRadius:2, whiteSpace:"nowrap" }}>
                  {isSaved(t.id) ? "✦" : "+ SAVE"}
                </button>
              </div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:7, letterSpacing:"0.16em", textTransform:"uppercase", color:"#bbb", marginBottom:4 }}>{t.tag}</div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13, fontWeight:600, color:"#111", lineHeight:1.25, marginBottom:3 }}>{t.title}</h3>
              <div style={{ fontFamily:"Georgia,serif", fontSize:9, color:"#bbb" }}>📍 {t.location}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
