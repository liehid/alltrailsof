import PageHead from "./PageHead";
import { MasonryGrid, MasonryItem } from "./MasonryGrid";
import ArticlePin from "./ArticlePin";
import { POPULAR_ARTICLES } from "../data";

// ── THE EDIT FULL PAGE ────────────────────────────────────
export default function EditPage({ setReading, isMobile }) {
  const mw   = 1200;
  const cols = isMobile ? 2 : 3;
  return (
    <div style={{ maxWidth:mw, margin:"0 auto", padding: isMobile ? "28px 16px 60px" : "52px 60px 80px" }}>
      <PageHead sup="Stories · Guides · Essays" title="The Edit" italic desc="In-depth stories, local guides, and essays about the culture behind the content." isMobile={isMobile} />
      <MasonryGrid cols={cols} gap={isMobile ? 12 : 16}>
        {POPULAR_ARTICLES.map((a,i) => (
          <MasonryItem key={a.id}>
            <ArticlePin article={a} rank={i+1} onClick={() => setReading(a)} isMobile={isMobile} />
          </MasonryItem>
        ))}
      </MasonryGrid>
    </div>
  );
}
