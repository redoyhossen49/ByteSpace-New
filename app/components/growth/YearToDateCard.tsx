type YearToDateCardProps = {
  label?: string;
  period: string;
  amount: string;
  badge: string;
  className?: string;
};

export default function YearToDateCard({
  label = "Year to Date",
  period,
  amount,
  badge,
  className = "",
}: YearToDateCardProps) {
  return (
    <div
      className={`w-full max-w-[170px] rounded-2xl bg-brand-violet px-5 py-4 text-white shadow-[0_24px_60px_-28px_rgba(30,16,80,0.6)] ${className}`}
    >
      <p className="text-[11px] leading-none text-white/80">{label}</p>
      <p className="mt-1.5 text-[10px] leading-none text-white/50">{period}</p>
      <p className="mt-2.5 text-[21px] font-bold leading-none">{amount}</p>

      <span className="mt-3.5 inline-flex items-center rounded-full bg-brand-lime px-2 py-1 text-[10px] font-bold leading-none text-neutral-900">
        {badge}
      </span>
    </div>
  );
}
