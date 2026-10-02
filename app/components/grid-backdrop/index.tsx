type GridBackdropProps = {
  className?: string;
  /** Multiplied against the tile's own alpha of 31/255. */
  opacity?: number;
  /** Shifts the tile origin, so sections stacked under one another share a
      single continuous grid instead of each restarting at its own top edge. */
  offsetY?: string;
};

/* grid-bg.png is a 1440x957 plate holding a 120px grid: 2px white lines at
   alpha 31/255. It cannot be used as the repeating tile directly, for two
   reasons the numbers make plain:
     - its height of 957 is not a multiple of the 120px cell, so tiling it at
       natural size drifts the horizontal lines out of phase tile after tile;
     - holding the cell at a fixed 120px means scaling the 1440px-wide plate
       down 12x, which turns its 2px lines into 0.17px and anti-aliases them
       to near nothing (measured alpha 3/255 instead of 15/255 - an invisible
       grid).
   grid-tile.png is the plate's own top-left 120x120 cell cut out verbatim, so
   it repeats 1:1 with no resampling: the same 2px lines, the same alpha, a
   perfect seam, and a fixed cell size at every viewport. */
export default function GridBackdrop({
  className = "",
  opacity = 0.6,
  offsetY = "0px",
}: GridBackdropProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: "url(/grid-tile.png)",
        backgroundSize: "120px 120px",
        backgroundRepeat: "repeat",
        backgroundPosition: `0 ${offsetY}`,
        opacity,
      }}
    />
  );
}