// ── MASONRY GRID ──────────────────────────────────────────
// Pure CSS column-based masonry (like Pinterest)
export function MasonryGrid({ children, cols = 3, gap = 16 }) {
  return (
    <div style={{
      columnCount: cols,
      columnGap: gap,
    }}>
      {children}
    </div>
  );
}

// Wrapper so each item breaks correctly
export function MasonryItem({ children }) {
  return (
    <div style={{ breakInside: "avoid", marginBottom: 16 }}>
      {children}
    </div>
  );
}
