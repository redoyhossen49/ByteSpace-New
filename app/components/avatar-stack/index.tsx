import Image from "next/image";
import type { CSSProperties } from "react";

export type Avatar = {
  name: string;
  src?: string;
};

type AvatarStackProps = {
  avatars: Avatar[];
  overflowLabel?: string;
  size?: number;
  className?: string;
};

const palette = [
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

export default function AvatarStack({
  avatars,
  overflowLabel,
  size = 32,
  className = "",
}: AvatarStackProps) {
  if (avatars.length === 0 && !overflowLabel) {
    return null;
  }

  const ring = Math.max(2, Math.round(size / 16));
  const overlap = Math.round(size * 0.3125);

  const circle: CSSProperties = {
    width: size,
    height: size,
    borderWidth: ring,
    fontSize: Math.round(size * 0.3125),
  };

  return (
    <div className={`flex items-center ${className}`}>
      {avatars.map((avatar, index) => (
        <span
          key={avatar.name}
          title={avatar.name}
          style={{ ...circle, marginLeft: index === 0 ? 0 : -overlap }}
          className="flex shrink-0 items-center justify-center overflow-hidden rounded-full border-white font-semibold"
        >
          {avatar.src ? (
            <Image
              src={avatar.src}
              alt={avatar.name}
              width={size}
              height={size}
              className="size-full object-cover"
            />
          ) : (
            <span
              className={`flex size-full items-center justify-center ${
                palette[index % palette.length]
              }`}
            >
              {initials(avatar.name)}
            </span>
          )}
        </span>
      ))}

      {overflowLabel ? (
        <span
          style={{ ...circle, marginLeft: -overlap }}
          className="flex shrink-0 items-center justify-center rounded-full border-white bg-brand-lime font-bold text-neutral-900"
        >
          {overflowLabel}
        </span>
      ) : null}
    </div>
  );
}
