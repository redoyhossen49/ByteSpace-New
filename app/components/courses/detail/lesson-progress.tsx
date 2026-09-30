type LessonProgressProps = {
  value: number;
};

/* The "Lesson Progress Tracking" card under the lessons tab. */
export default function LessonProgress({ value }: LessonProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
      <p className="text-[13px] text-neutral-500">Learning Progress</p>
      <p className="mt-1 text-[26px] font-bold leading-none tracking-tight text-neutral-900">
        {clamped}%
      </p>

      <div
        role="progressbar"
        aria-label="Learning Progress"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
      >
        <div
          className="h-full rounded-full bg-brand-lime"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
