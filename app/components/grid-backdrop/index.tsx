type GridBackdropProps = {
  className?: string;
};

/* grid-bg.png is a 1440x957 plate holding a 120px grid: 2px white lines at
   alpha 31/255, laid out at x = 0,120,240... and y = 118,238,358..., so it
   repeats seamlessly at 120px in both axes. Tiling it keeps the cell size
   fixed at every viewport instead of stretching with the section. */
export default function GridBackdrop({ className = "" }: GridBackdropProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: "url(/grid-bg.png)",
        backgroundSize: "120px 120px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
