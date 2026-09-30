type LearningProgressCardProps = {
  label?: string;
  value: number;
  className?: string;
};

export default function LearningProgressCard({
  label = "Learning Progress",
  value,
  className = "",
}: LearningProgressCardProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`w-full max-w-[240px] rounded-2xl bg-white p-5 shadow-[0_18px_40px_-18px_rgba(12,4,54,0.45)] ${className}`}
    >
      <p className="text-[13px] text-neutral-500">{label}</p>
      <p className="mt-1 text-[44px] font-bold leading-none tracking-tight text-neutral-900">
        {clamped}%
      </p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-4 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
      >
        <div
          className="h-full rounded-full bg-brand-lime"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
