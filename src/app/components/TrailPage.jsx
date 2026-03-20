import PageHead from "./PageHead";
import { MasonryGrid, MasonryItem } from "./MasonryGrid";
import TrailPin from "./TrailPin";
import { POPULAR_TRAILS } from "../data";

// ── ALL TRAILS FULL PAGE ──────────────────────────────────
export default function TrailPage({ isSaved, toggle, expanded, setExpanded, setReading, isMobile }) {
  const mw   = 1200;
  const cols = isMobile ? 2 : 3;
  return (
    <div style={{ maxWidth:mw, margin:"0 auto", padding: isMobile ? "28px 16px 60px" : "52px 60px 80px" }}>
      <PageHead sup="Filming locations" title="All Trails" desc="Every location appeared in a film, drama or music video. Save the ones that move you." isMobile={isMobile} />
      <MasonryGrid cols={cols} gap={isMobile ? 12 : 16}>
        {POPULAR_TRAILS.map((t,i) => (
          <MasonryItem key={t.id}>
            <TrailPin trail={t} rank={i+1} isSaved={isSaved} toggle={toggle} expanded={expanded} setExpanded={setExpanded} setReading={setReading} isMobile={isMobile} />
          </MasonryItem>
        ))}
      </MasonryGrid>
    </div>
  );
}
