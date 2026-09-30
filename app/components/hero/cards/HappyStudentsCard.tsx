import { PiStarFill } from "react-icons/pi";

import AvatarStack, { type Avatar } from "@/app/components/avatar-stack";

type HappyStudentsCardProps = {
  title?: string;
  rating: number;
  reviewCount: number;
  overflowLabel?: string;
  avatars: Avatar[];
  className?: string;
};

export default function HappyStudentsCard({
  title = "Happy Students",
  rating,
  reviewCount,
  overflowLabel = "2K+",
  avatars,
  className = "",
}: HappyStudentsCardProps) {
  return (
    <div
      className={`w-full max-w-[280px] rounded-2xl bg-white p-5 shadow-[0_18px_40px_-18px_rgba(12,4,54,0.45)] ${className}`}
    >
      <p className="text-[15px] font-semibold text-neutral-900">{title}</p>
      <p className="mt-1.5 flex items-center gap-1 text-[12px] text-neutral-400">
        {rating.toFixed(1)} ({reviewCount})
        <PiStarFill className="text-brand-lime" size={12} aria-hidden />
      </p>

      <AvatarStack
        avatars={avatars}
        overflowLabel={overflowLabel}
        className="mt-3"
      />
    </div>
  );
}
