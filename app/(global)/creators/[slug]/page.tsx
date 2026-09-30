import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CreatorCourses from "@/app/components/creators/creator-courses";
import CreatorHero from "@/app/components/creators/creator-hero";
import CreatorReviews from "@/app/components/creators/creator-reviews";
import { creators, getCreator } from "@/app/components/creators/data";

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);

  if (!creator) return {};

  return {
    title: `${creator.name} | ByteSpace`,
    description: creator.tagline ?? creator.description[0],
  };
}

export default async function CreatorProfilePage({
  params,
}: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);

  if (!creator) notFound();

  return (
    <>
      <CreatorHero creator={creator} />
      <CreatorCourses courses={creator.courses} />
      <CreatorReviews reviews={creator.reviews} />
    </>
  );
}
