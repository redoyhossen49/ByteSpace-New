import Link from "next/link";
import type { IconType } from "react-icons";

type CategoryCardProps = {
  label: string;
  href: string;
  icon: IconType;
};

export default function CategoryCard({
  label,
  href,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-200 bg-white px-3 transition-colors hover:border-neutral-300 hover:shadow-[0_18px_40px_-26px_rgba(12,4,54,0.4)]"
    >
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-lime transition-transform duration-300 group-hover:scale-105">
        <Icon aria-hidden size={28} className="text-neutral-900" />
      </span>

      <span className="text-center text-[17px] leading-tight font-medium text-neutral-900">
        {label}
      </span>
    </Link>
  );
}
