import Image from "next/image";

import Container from "@/app/components/container";

import { creator, creatorProducts } from "./data";
import FollowButton from "./follow-button";

export default function CreatorHero() {
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

            <p className="mt-2 text-[15px] text-white/80 sm:text-[16px]">
              {creator.tagline}
            </p>
          </div>
        </div>

        {/* The mock runs this copy the full width of the column, as one
            continuous block - the paragraphs sit on the same leading. */}
        <div className="mt-8 text-[15px] leading-[1.75] text-white/80 sm:text-[16px]">
          {creator.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-4">
            <span className="rounded-full bg-white px-5 py-3.5 text-[15px] font-medium text-neutral-800">
              <span className="font-bold text-brand-purple">
                {creatorProducts}
              </span>{" "}
              Products
            </span>

            <span className="rounded-full bg-white px-5 py-3.5 text-[15px] font-medium text-neutral-800">
              <span className="font-bold text-brand-purple">
                {creator.followers}
              </span>{" "}
              Followers
            </span>
          </div>

          <FollowButton />
        </div>
      </Container>
    </section>
  );
}
