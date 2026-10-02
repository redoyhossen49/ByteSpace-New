import type { Metadata } from "next";

import Container from "@/app/components/container";
import CreatorCard from "@/app/components/creators/creator-card";
import { creators } from "@/app/components/creators/data";
import GridBackdrop from "@/app/components/grid-backdrop";

export const metadata: Metadata = {
  title: "Creators | ByteSpace",
  description:
    "Meet the studios and creators behind the ByteSpace course catalog.",
};

export default function CreatorsPage() {
  const studios = creators.filter((creator) => creator.courses.length > 0);
  const community = creators.filter((creator) => creator.courses.length === 0);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-purple text-white">
        <GridBackdrop className="-z-10" offsetY="-5rem" />

        <Container className="py-14 text-center lg:py-20">
          <h1 className="text-[30px] font-bold tracking-[-0.02em] sm:text-[38px]">
            Meet Our Creators
          </h1>

          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.7] text-white/80 sm:text-[16px]">
            Every course on ByteSpace is taught by someone who does the work
            daily. Browse the studios behind the catalog and the learners who
            have shared their feedback on it.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <h2 className="text-[22px] font-bold tracking-[-0.02em] text-neutral-900">
            Studios
          </h2>
          <p className="mt-2 text-[15px] text-neutral-500">
            {studios.length} creators publishing courses on ByteSpace.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {studios.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </div>

          <h2 className="mt-20 text-[22px] font-bold tracking-[-0.02em] text-neutral-900">
            From the community
          </h2>
          <p className="mt-2 text-[15px] text-neutral-500">
            Learners who have reviewed a course on ByteSpace.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {community.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
