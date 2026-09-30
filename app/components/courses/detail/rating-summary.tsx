import { PiStarFill, PiStar } from "react-icons/pi";

type RatingSummaryProps = {
  average: number;
  breakdown: { stars: number; count: number }[];
};

/* The ratings box at the top of the reviews tab: the average beside a bar per
   star, each bar scaled against the busiest row. */
export default function RatingSummary({
  average,
  breakdown,
}: RatingSummaryProps) {
  const busiest = Math.max(...breakdown.map((row) => row.count));

  return (
    <div className="mt-6 flex flex-wrap gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:flex-nowrap sm:gap-8">
      <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-brand-lime px-6 py-4">
        <p className="text-[11px] text-neutral-700">Rating</p>
        <p className="text-[30px] font-bold leading-none text-neutral-900">
          {average.toFixed(1)}
        </p>
      </div>

      <ul className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        {breakdown.map((row) => (
          <li key={row.stars} className="flex items-center gap-3">
            <span className="relative h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-neutral-200">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-brand-lime"
                style={{ width: `${(row.count / busiest) * 100}%` }}
              />
            </span>

            <span className="flex shrink-0 items-center gap-0.5">
              {Array.from({ length: row.stars }, (_, index) => (
                <PiStarFill
                  key={index}
                  aria-hidden
                  size={13}
                  className="text-neutral-900"
                />
              ))}
              {Array.from({ length: 5 - row.stars }, (_, index) => (
                <PiStar
                  key={`empty-${index}`}
                  aria-hidden
                  size={13}
                  className="text-neutral-300"
                />
              ))}
            </span>

            <span className="w-8 shrink-0 text-right text-[13px] text-neutral-500">
              {row.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
