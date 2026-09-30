type CourseCardProps = {
  title: string;
  meta: string[];
  className?: string;
};

export default function CourseCard({
  title,
  meta,
  className = "",
}: CourseCardProps) {
  return (
    <div
      className={`w-full max-w-[260px] rounded-2xl bg-white p-5 shadow-[0_18px_40px_-18px_rgba(12,4,54,0.45)] ${className}`}
    >
      <p className="text-[15px] font-semibold text-neutral-900">{title}</p>
      <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[12px] text-neutral-400">
        {meta.map((item, index) => (
          <span key={item} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden className="text-neutral-300">
                &middot;
              </span>
            )}
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}
