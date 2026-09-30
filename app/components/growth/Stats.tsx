type StatsProps = {
  items: { value: string; label: string }[];
  className?: string;
};

export default function Stats({ items, className = "" }: StatsProps) {
  return (
    <ul className={`flex flex-wrap items-start gap-x-20 gap-y-6 ${className}`}>
      {items.map((item) => (
        <li key={item.label}>
          <p className="text-[28px] font-bold leading-none tracking-tight text-brand-blue lg:text-[30px]">
            {item.value}
          </p>
          <p className="mt-2.5 text-[13px] text-neutral-900">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
