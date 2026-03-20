import { useState, useEffect } from "react";

export default function AnnouncementPopup() {
  const [visible, setVisible] = useState(false);
  const [doNotShowToday, setDoNotShowToday] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem("ato_popup_hidden_until");
    if (hidden && new Date(hidden) > new Date()) return;
    setVisible(true);
  }, []);

  const close = () => {
    if (doNotShowToday) {
      const tomorrow = new Date();
      tomorrow.setHours(23, 59, 59, 999);
      localStorage.setItem("ato_popup_hidden_until", tomorrow.toISOString());
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      onClick={close}
      style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{ background:"#FAF7F2", maxWidth:480, width:"100%", padding:"48px 44px 40px", position:"relative", boxShadow:"0 8px 40px rgba(0,0,0,0.18)" }}>

        {/* 닫기 버튼 */}
        <button onClick={close} style={{ position:"absolute", top:18, right:22, background:"none", border:"none", cursor:"pointer", fontSize:18, color:"#bbb", lineHeight:1 }}>✕</button>

        {/* 상단 장식선 */}
        <div style={{ width:32, height:2, background:"#C4933F", marginBottom:24 }} />

        {/* 제목 */}
        <h2 style={{ fontFamily:"'Playfair Display', 'Cormorant Garamond', serif", fontSize:22, fontWeight:700, color:"#111", lineHeight:1.3, marginBottom:16, letterSpacing:"0.01em" }}>
          All Trails of Korea —<br />Now Open.
        </h2>

        {/* 본문 */}
        <p style={{ fontFamily:"'Lato', Georgia, serif", fontSize:13, color:"#666", lineHeight:1.8, marginBottom:32 }}>
          We're not quite finished, but the doors are open. Explore K-drama, film, and music filming locations across Korea — and stay tuned for more.
        </p>

        {/* 체크박스 */}
        <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", marginBottom:24 }}>
          <input
            type="checkbox"
            checked={doNotShowToday}
            onChange={e => setDoNotShowToday(e.target.checked)}
            style={{ accentColor:"#111", width:13, height:13, cursor:"pointer" }} />
          <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:10, letterSpacing:"0.12em", color:"#999", textTransform:"uppercase" }}>
            Don't show today
          </span>
        </label>

        {/* 버튼 */}
        <button onClick={close} style={{ width:"100%", padding:"13px 0", background:"#111", color:"#fff", border:"none", fontFamily:"'Cormorant Garamond', serif", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background="#C4933F"}
          onMouseLeave={e => e.currentTarget.style.background="#111"}>
          Start Exploring
        </button>

      </div>
    </div>
  );
}
