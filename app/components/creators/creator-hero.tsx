import Image from "next/image";

import Container from "@/app/components/container";
import type { Creator } from "@/app/components/creators/data";

import FollowButton from "./follow-button";

type CreatorHeroProps = {
  creator: Creator;
};

export default function CreatorHero({ creator }: CreatorHeroProps) {
  const stats =
    creator.courses.length > 0
      ? [`${creator.courses.length} Products`, `${creator.followers} Followers`]
      : [
          `${creator.reviews.length} Review${creator.reviews.length === 1 ? "" : "s"}`,
        ];

  return (
    <section className="bg-brand-purple text-white">
      <Container className="py-14 lg:py-20">
        <div className="flex items-center gap-5">
          <Image
            src={creator.avatar.src}
            alt={creator.avatar.alt}
            width={creator.avatar.width}
            height={creator.avatar.height}
            priority
            className="size-20 shrink-0 rounded-2xl object-cover sm:size-24"
          />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h1 className="text-[22px] font-bold tracking-[-0.02em] sm:text-[30px]">
                {creator.name}
              </h1>

              <span className="rounded-full bg-brand-lime px-4 py-1.5 text-[14px] font-semibold text-neutral-900">
                {creator.role}
              </span>
            </div>

            {creator.tagline ? (
              <p className="mt-2 text-[15px] text-white/80 sm:text-[16px]">
                {creator.tagline}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 text-[15px] leading-[1.75] text-white/80 sm:text-[16px]">
          {creator.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-4">
            {stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full bg-white px-5 py-3.5 text-[15px] font-medium text-neutral-800"
              >
                {stat}
              </span>
            ))}
          </div>

          <FollowButton />
        </div>
      </Container>
    </section>
  );
}
