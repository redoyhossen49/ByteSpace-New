import type { Metadata } from "next";

import CreatorCourses from "@/app/components/creators/creator-courses";
import CreatorHero from "@/app/components/creators/creator-hero";
import { creator } from "@/app/components/creators/data";

export const metadata: Metadata = {
  title: `${creator.name} | ByteSpace`,
  description: `${creator.tagline}. Browse every course published by ${creator.name} on ByteSpace.`,
};

export default function CreatorsPage() {
  return (
    <>
      <CreatorHero />
      <CreatorCourses />
    </>
  );
}
