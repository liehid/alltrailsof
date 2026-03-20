import PageHead from "./PageHead";
import { MasonryGrid, MasonryItem } from "./MasonryGrid";
import ArticlePin from "./ArticlePin";
import TrailPin from "./TrailPin";

// ── CATEGORY PAGE ─────────────────────────────────────────
export default function CatPage({ catId, catLabel, catArticles, catTrails, setReading, isSaved, toggle, expanded, setExpanded, isMobile }) {
  const mw   = 1200;
  const cols = isMobile ? 2 : 3;
  // interleave articles + trails for a mixed masonry wall
  const mixed = [];
  const maxLen = Math.max(catArticles.length, catTrails.length);
  for (let i = 0; i < maxLen; i++) {
    if (catArticles[i]) mixed.push({ kind:"article", data: catArticles[i] });
    if (catTrails[i])   mixed.push({ kind:"trail",   data: catTrails[i] });
  }
  return (
    <div style={{ maxWidth:mw, margin:"0 auto", padding: isMobile ? "28px 16px 60px" : "52px 60px 80px" }}>
      <PageHead sup="Category" title={catLabel} desc={`Stories, guides, and filming locations — everything ATO has on ${catLabel?.toLowerCase()}.`} isMobile={isMobile} />
      {mixed.length === 0 && (
        <div style={{ textAlign:"center", padding:"80px 0", color:"#ccc", fontFamily:"'Cormorant Garamond',serif", fontSize:18 }}>Content coming soon.</div>
      )}
      {mixed.length > 0 && (
        <MasonryGrid cols={cols} gap={isMobile ? 12 : 16}>
          {mixed.map((item,i) =>
            item.kind === "article" ? (
              <MasonryItem key={`a-${item.data.id}`}>
                <ArticlePin article={item.data} rank={null} onClick={() => setReading(item.data)} isMobile={isMobile} />
              </MasonryItem>
            ) : (
              <MasonryItem key={`t-${item.data.id}`}>
                <TrailPin trail={item.data} rank={null} isSaved={isSaved} toggle={toggle} expanded={expanded} setExpanded={setExpanded} setReading={setReading} isMobile={isMobile} />
              </MasonryItem>
            )
          )}
        </MasonryGrid>
      )}
    </div>
  );
}
