import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

export type StudentAvatar = {
  name: string;
  src?: string;
};

type HappyStudentsCardProps = {
  title?: string;
  rating: number;
  reviewCount: number;
  overflowLabel?: string;
  avatars: StudentAvatar[];
  className?: string;
};

const avatarPalette = [
  "bg-brand-purple text-white",
  "bg-brand-lime text-neutral-900",
  "bg-neutral-900 text-white",
  "bg-white text-neutral-900",
  "bg-brand-purple-deep text-white",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

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

      <div className="mt-3 flex items-center">
        {avatars.map((avatar, index) => (
          <span
            key={avatar.name}
            title={avatar.name}
            style={{ marginLeft: index === 0 ? 0 : -10 }}
            className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white text-[10px] font-semibold"
          >
            {avatar.src ? (
              <Image
                src={avatar.src}
                alt={avatar.name}
                width={32}
                height={32}
                className="size-full object-cover"
              />
            ) : (
              <span
                className={`flex size-full items-center justify-center ${
                  avatarPalette[index % avatarPalette.length]
                }`}
              >
                {initials(avatar.name)}
              </span>
            )}
          </span>
        ))}

        <span className="-ml-[10px] flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-brand-lime text-[10px] font-bold text-neutral-900">
          {overflowLabel}
        </span>
      </div>
    </div>
  );
}
