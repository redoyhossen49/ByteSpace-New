import { featuredCourses, type Course } from "@/app/components/courses/data";

export const creator = {
  slug: "purepearl-studio",
  name: "PurePearl Studio",
  /** Used as the byline on the cards, the way the catalog stores it. */
  byline: "purepearl studio",
  role: "Creator",
  tagline: "Passionate UI/UX, Web designer",
  avatar: {
    src: "/creator.png",
    width: 200,
    height: 200,
    alt: "PurePearl Studio",
  },
  description: [
    "Welcome to the creative world of PurePearl Studio. Here, you will discover the passion, expertise and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavours. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  followers: 12,
};

/* Everything in the studio's catalog. */
export const creatorCourses: Course[] = featuredCourses;

export const creatorProducts = creatorCourses.length;

/* Keyed by the byline the course cards carry, so a course detail page can show
   the right studio block. */
export const creatorProfiles: Record<string, typeof creator> = {
  [creator.byline]: creator,
};

export function getCreatorProfile(byline: string) {
  return creatorProfiles[byline];
}

export function formatCreatorName(byline: string) {
  return byline
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
