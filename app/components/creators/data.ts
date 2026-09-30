import { courses, type Course } from "@/app/components/courses/data";
import { reviewPool, type Review } from "@/app/components/courses/review-pool";

export type Creator = {
  slug: string;
  name: string;
  /** Shown under the name: "Professional Creator" for the studios, the
      discipline for the learners who left reviews. */
  role: string;
  avatar: { src: string; width: number; height: number; alt: string };
  tagline?: string;
  description: string[];
  followers: number;
  courses: Course[];
  reviews: Review[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* The studios behind the catalog. PurePearl keeps the copy from the profile
   design; the rest follow the same shape. */
const studios = [
  {
    byline: "purepearl studio",
    name: "PurePearl Studio",
    avatar: {
      src: "/creator.png",
      width: 200,
      height: 200,
      alt: "PurePearl Studio",
    },
    tagline: "Passionate UI/UX, Web designer",
    followers: 12,
    description: [
      "Welcome to the creative world of PurePearl Studio. Here, you will discover the passion, expertise and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavours. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
  },
  {
    byline: "northlight lab",
    name: "Northlight Lab",
    avatar: {
      src: "/women.png",
      width: 500,
      height: 500,
      alt: "Northlight Lab",
    },
    tagline: "Product design studio for busy teams",
    followers: 348,
    description: [
      "Northlight Lab is a small product studio that ships interface work for teams who move fast. We teach the process we actually use, from the first sketch to the final handoff.",
      "Every course is built around a real brief, so you finish each module with something you can show a client rather than a folder of exercises.",
    ],
  },
  {
    byline: "pixel foundry",
    name: "Pixel Foundry",
    avatar: {
      src: "/sarah.png",
      width: 200,
      height: 200,
      alt: "Pixel Foundry",
    },
    tagline: "Illustration, motion and visual identity",
    followers: 521,
    description: [
      "Pixel Foundry has spent a decade drawing, animating and building visual identities for studios and independent brands. Our courses cover the craft and the business behind it.",
      "Expect practical briefs, printable references and honest notes on pricing, revisions and the parts of the job nobody mentions in a portfolio.",
    ],
  },
  {
    byline: "atlas academy",
    name: "Atlas Academy",
    avatar: {
      src: "/human-hero.png",
      width: 722,
      height: 515,
      alt: "Atlas Academy",
    },
    tagline: "Data, analytics and the tools around them",
    followers: 764,
    description: [
      "Atlas Academy teaches the analytical side of digital work: dashboards, spreadsheets, measurement and the judgement it takes to read them properly.",
      "The lessons start from a blank screen and finish on a dashboard somebody else will rely on, with datasets you are free to keep.",
    ],
  },
  {
    byline: "studio meraki",
    name: "Studio Meraki",
    avatar: {
      src: "/james.png",
      width: 200,
      height: 200,
      alt: "Studio Meraki",
    },
    tagline: "Independent creator working in public",
    followers: 196,
    description: [
      "Studio Meraki documents an independent practice: choosing clients, pricing projects, protecting your time and shipping work that holds up.",
      "The courses are deliberately small and specific, each one built from a real commission and annotated afterwards with what we would change.",
    ],
  },
];

const studioProfiles: Creator[] = studios.map((studio) => ({
  slug: slugify(studio.name),
  name: studio.name,
  role: "Professional Creator",
  avatar: studio.avatar,
  tagline: studio.tagline,
  description: studio.description,
  followers: studio.followers,
  courses: courses.filter((course) => course.author === studio.byline),
  reviews: reviewPool.filter(
    (review) => slugify(review.name) === slugify(studio.name),
  ),
}));

/* Everyone who has written a review also has a profile, so a name in the
   reviews list always resolves to a real page. */
const learnerProfiles: Creator[] = reviewPool
  .filter(
    (review) =>
      !studioProfiles.some((studio) => studio.slug === slugify(review.name)),
  )
  .map((review) => ({
    slug: slugify(review.name),
    name: review.name,
    role: review.role,
    avatar: review.avatar,
    description: [
      `${review.name} is a ${review.role.toLowerCase()} who completed this course and has since shared ${review.rating} star feedback with the community.`,
    ],
    followers: 0,
    courses: [],
    reviews: [review],
  }));

export const creators: Creator[] = [...studioProfiles, ...learnerProfiles];

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}

export function getCreatorByByline(byline: string) {
  return studioProfiles.find((studio) => studio.slug === slugify(byline));
}

export function formatCreatorName(byline: string) {
  return byline
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/* The single profile the earlier design was drawn for. */
export const creator = studioProfiles[0];

export const creatorCourses = creator.courses;
export const creatorProducts = creatorCourses.length;
