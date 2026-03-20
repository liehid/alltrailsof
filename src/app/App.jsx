import { useState, useEffect } from "react";
import Header from "./components/Header";
import ArticleModal from "./components/ArticleModal";
import AnnouncementPopup from "./components/AnnouncementPopup";
import TrailsDrawer from "./components/TrailsDrawer";
import HomePage from "./components/HomePage";
import EditPage from "./components/EditPage";
import TrailPage from "./components/TrailPage";
import CatPage from "./components/CatPage";
import { NAV_CATS } from "./data";
import { POPULAR_ARTICLES, POPULAR_TRAILS } from "./data";
import "./styles.css";

// ── APP ───────────────────────────────────────────────
export default function App() {
  const [page,          setPage]         = useState("home");
  const [reading,       setReading]      = useState(null);
  const [showMyTrails,  setShowMyTrails] = useState(false);
  const [saved,         setSaved]        = useState([]);
  const [expanded,      setExpanded]     = useState(null);
  const [isMobile,      setIsMobile]     = useState(false);
  const [notif,         setNotif]        = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isSaved = id => saved.some(t => t.id === id);
  const toggle  = item => {
    if (isSaved(item.id)) { setSaved(s => s.filter(t => t.id !== item.id)); flash("Removed from My Trails"); }
    else { setSaved(s => [...s, item]); flash("Saved to My Trails ✦"); }
  };
  const flash = msg => { setNotif(msg); setTimeout(() => setNotif(null), 2000); };
  const nav   = id => { setPage(id); window.scrollTo({ top:0, behavior:"smooth" }); };

  const catId       = page.startsWith("cat:") ? page.slice(4) : null;
  const catLabel    = catId ? NAV_CATS.find(n => n.id === catId)?.label : null;
  const catArticles = catId ? POPULAR_ARTICLES.filter(a => a.cats.includes(catId)) : [];
  const catTrails   = catId ? POPULAR_TRAILS.filter(t => t.cats.includes(catId))   : [];
  const activeCatNav = catId || (["edit","trail"].includes(page) ? page : null);

  const shared = { isSaved, toggle, expanded, setExpanded, setReading, isMobile, nav };

  return (
    <div style={{ minHeight:"100vh", background:"#fff" }}>
      <AnnouncementPopup />
      {notif && <div style={{ position:"fixed", top:20, left:"50%", transform:"translateX(-50%)", background:"#111", color:"#fff", padding:"10px 22px", fontSize:9, fontFamily:"'Cormorant Garamond',serif", letterSpacing:"0.16em", zIndex:999, whiteSpace:"nowrap" }}>{notif}</div>}
      {reading      && <ArticleModal article={reading} onClose={() => setReading(null)} isMobile={isMobile} />}
      {showMyTrails && <TrailsDrawer saved={saved} toggle={toggle} onClose={() => setShowMyTrails(false)} isMobile={isMobile} />}

      <Header activeCatNav={activeCatNav} nav={nav} saved={saved} setShowMyTrails={setShowMyTrails} isMobile={isMobile} />

      {page === "home"  && <HomePage {...shared} />}
      {page === "edit"  && <EditPage {...shared} />}
      {page === "trail" && <TrailPage {...shared} />}
      {catId && <CatPage catId={catId} catLabel={catLabel} catArticles={catArticles} catTrails={catTrails} {...shared} />}

      {!isMobile && (
        <footer style={{ borderTop:"1px solid #e8e8e8", padding:"32px 60px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:600, letterSpacing:"0.2em", color:"#111" }}>ATO</div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, letterSpacing:"0.2em", color:"#ccc", textTransform:"uppercase" }}>콘텐츠로 시작하는 한국 여행</div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:8, color:"#ccc" }}>© 2025 alltrailsof.com</div>
        </footer>
      )}

      {isMobile && (
        <nav style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:"#fff", borderTop:"1px solid #e8e8e8", display:"flex", zIndex:300 }}>
          {[["home","◉","Home"],["edit","✎","The Edit"],["trail","✦","All Trails"],["mytrails","◈","My Trails"]].map(([id,icon,label]) => (
            <button key={id}
              onClick={() => id === "mytrails" ? setShowMyTrails(true) : nav(id)}
              style={{ flex:1, padding:"10px 0 8px", display:"flex", flexDirection:"column", alignItems:"center", gap:3, background:"transparent", border:"none", color: activeCatNav === id || (id==="home" && page==="home") ? "#111" : "#ccc", fontSize:7, fontFamily:"'Cormorant Garamond',serif", cursor:"pointer", letterSpacing:"0.1em" }}>
              <span style={{ fontSize:13 }}>{icon}</span>
              {id==="mytrails" && saved.length > 0 ? `${label} (${saved.length})` : label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
