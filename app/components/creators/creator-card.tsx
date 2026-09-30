import Image from "next/image";
import Link from "next/link";

import type { Creator } from "@/app/components/creators/data";

type CreatorCardProps = {
  creator: Creator;
};

function plural(count: number, noun: string) {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-[0_18px_40px_-22px_rgba(12,4,54,0.35)]">
      <Link href={`/creators/${creator.slug}`} className="flex flex-col">
        <Image
          src={creator.avatar.src}
          alt={creator.avatar.alt}
          width={64}
          height={64}
          className="size-16 rounded-2xl object-cover"
        />

        <h2 className="mt-4 text-[18px] font-bold text-neutral-900 group-hover:underline">
          {creator.name}
        </h2>
        <p className="mt-1 text-[13px] text-neutral-400">{creator.role}</p>

        <p className="mt-3 line-clamp-2 text-[14px] leading-[1.7] text-neutral-500">
          {creator.tagline ?? creator.description[0]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="rounded-full bg-brand-chip px-3.5 py-2 text-[13px] text-neutral-700">
            {plural(creator.courses.length, "course")}
          </span>
          <span className="rounded-full bg-brand-chip px-3.5 py-2 text-[13px] text-neutral-700">
            {plural(creator.reviews.length, "review")}
          </span>
        </div>
      </Link>
    </article>
  );
}
