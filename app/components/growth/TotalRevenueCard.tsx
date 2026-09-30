type TotalRevenueCardProps = {
  label?: string;
  period: string;
  amount: string;
  value: number;
  className?: string;
};

export default function TotalRevenueCard({
  label = "Total Revenue",
  period,
  amount,
  value,
  className = "",
}: TotalRevenueCardProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`w-full max-w-[215px] rounded-2xl bg-brand-violet px-5 py-4 text-white shadow-[0_24px_60px_-28px_rgba(30,16,80,0.6)] ${className}`}
    >
      <p className="text-[11px] leading-none text-white/80">{label}</p>
      <p className="mt-1.5 text-[10px] leading-none text-white/50">{period}</p>
      <p className="mt-2.5 text-[21px] font-bold leading-none">{amount}</p>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-white/25"
      >
        <div
          className="h-full rounded-full bg-brand-lime"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
