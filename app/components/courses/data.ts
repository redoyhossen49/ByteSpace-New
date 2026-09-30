import {
  averageRating,
  moduleCopy,
  ratingBreakdown,
  reviewPool,
} from "./review-pool";

export const categories = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
] as const;
export type Category = (typeof categories)[number];

export const topics = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;
export type Topic = (typeof topics)[number];

export const levels = ["Beginner", "Intermediate", "Advanced"] as const;
export type Level = (typeof levels)[number];

export type CurriculumItem = {
  title: string;
  duration: string;
};

export type Module = {
  title: string;
  description: string;
};

export type Review = {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: { src: string; width: number; height: number; alt: string };
};

export type Course = {
  title: string;
  /** Longer form used as the detail page heading. */
  headline: string;
  subtitle: string;
  slug: string;
  href: string;
  image: { src: string; width: number; height: number; alt: string };
  author: string;
  rating: number;
  level: Level;
  lessons: string;
  duration: string;
  comments: string;
  studentsLabel: string;
  price: number;
  category: Category;
  topic: Topic;
  publishedAt: string;
  description: string[];
  keyPoints: string[];
  modules: Module[];
  reviewList: Review[];
  ratingBreakdown: { stars: number; count: number }[];
  averageRating: number;
  progress: number;
  curriculum: CurriculumItem[];
  lessonCount: number;
  totalHours: number;
  reviews: number;
  students: number;
};

export const PER_PAGE = 6;

const images = [
  {
    src: "/course1.jpg",
    width: 698,
    height: 465,
    alt: "Designer sketching wireframes at a desk",
  },
  {
    src: "/course2.jpg",
    width: 682,
    height: 454,
    alt: "A spread of digital icon designs",
  },
  {
    src: "/course3.png",
    width: 682,
    height: 454,
    alt: "Analytics dashboard with charts",
  },
  {
    src: "/course4.jpg",
    width: 682,
    height: 454,
    alt: "A tidy workspace with a monitor",
  },
  {
    src: "/course5.jpg",
    width: 682,
    height: 454,
    alt: "A rising line graph on a chart",
  },
  {
    src: "/course6.jpg",
    width: 682,
    height: 454,
    alt: "Team workshop with sticky notes on a wall",
  },
];

/* Course stats come in blocks of six so every page of the grid reads like the
   design: the first page carries the same numbers the mock cards show. */
const statBlocks = [
  {
    rating: 4.5,
    lessonCount: 17,
    duration: "2 hours 16 mins",
    totalHours: 24,
    comments: "59 Comments",
    studentsLabel: "26+",
    reviews: 172,
    students: 199,
    progress: 55,
  },
  {
    rating: 4.8,
    lessonCount: 24,
    duration: "4 hours 30 mins",
    totalHours: 31,
    comments: "128 Comments",
    studentsLabel: "1.2K",
    reviews: 268,
    students: 412,
    progress: 30,
  },
  {
    rating: 4.3,
    lessonCount: 12,
    duration: "1 hour 45 mins",
    totalHours: 18,
    comments: "34 Comments",
    studentsLabel: "840",
    reviews: 96,
    students: 143,
    progress: 78,
  },
  {
    rating: 4.6,
    lessonCount: 31,
    duration: "6 hours 10 mins",
    totalHours: 27,
    comments: "212 Comments",
    studentsLabel: "3.4K",
    reviews: 341,
    students: 528,
    progress: 42,
  },
  {
    rating: 4.1,
    lessonCount: 9,
    duration: "3 hours 5 mins",
    totalHours: 15,
    comments: "76 Comments",
    studentsLabel: "512",
    reviews: 84,
    students: 207,
    progress: 18,
  },
];

/* Curriculum and copy are cycled so every course opens on a full-looking detail
   page; the lesson titles below are the ones the design shows. */
const curriculumTitles = [
  "Introduction to Digital Assets",
  "Design Principles for Impacts",
  "Advanced Techniques in Digital Creation",
  "Setting Up Your Creative Workspace",
  "Typography and Colour for Digital Products",
  "Building Your First Concept",
  "Iterating with Real Feedback",
  "Exporting and Delivering Assets",
];

const curriculumDurations = [
  "12 mins",
  "21 mins",
  "16 mins",
  "18 mins",
  "24 mins",
  "14 mins",
  "20 mins",
  "11 mins",
];

/* The course the design was drawn for keeps its own heading and subtitle. */
const keyPointPool = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcases and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Course Project: Building Your Portfolio",
  "Workflow Automation and Shortcuts",
  "Working with Clients and Feedback",
];

/* The course the design was drawn for keeps its own heading and subtitle. */
const detailOverrides: Record<
  string,
  { headline: string; subtitle: string; keyPoints: string[] }
> = {
  "build-digital-asset": {
    headline: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    keyPoints: keyPointPool.slice(0, 8),
  },
};

const authors = [
  "purepearl studio",
  "northlight lab",
  "pixel foundry",
  "atlas academy",
  "studio meraki",
];

/* [title, category, topic, level, price] - the last six entries mirror the
   cards on the first page of the design. */
const seeds: [string, Category, Topic, Level, number][] = [
  ["Learn Figma from Basic", "Design", "UI/UX Design", "Beginner", 25],
  ["Build Digital Asset", "Design", "Drawing & Painting", "Intermediate", 25],
  ["the Power of Big Data", "IT & Software", "Data Science", "Advanced", 35],
  [
    "Balancing Productivity and Focus",
    "Business",
    "Productivity",
    "Intermediate",
    19,
  ],
  [
    "Mastering Money Management",
    "Business",
    "Creative Marketing",
    "Beginner",
    29,
  ],
  [
    "From Idea to Startup Success",
    "Business",
    "Freelance & Entrepreneurship",
    "Intermediate",
    45,
  ],
  [
    "Illustration for Beginners",
    "Design",
    "Drawing & Painting",
    "Beginner",
    19,
  ],
  [
    "Digital Illustration Lab",
    "Design",
    "Digital Illustration",
    "Advanced",
    39,
  ],
  ["Graphic Design Essentials", "Design", "Graphic Design", "Beginner", 25],
  ["Brand Identity Workshop", "Design", "Graphic Design", "Intermediate", 49],
  ["Motion Graphics with After Effects", "Design", "Animation", "Advanced", 59],
  ["2D Animation Fundamentals", "Design", "Animation", "Beginner", 29],
  ["Music Production Starter", "Design", "Music", "Beginner", 35],
  ["Mixing and Mastering Tracks", "Design", "Music", "Advanced", 59],
  ["Filmmaking on a Budget", "Photography", "Film & Video", "Intermediate", 45],
  ["Cinematic Editing", "Photography", "Film & Video", "Advanced", 55],
  ["Portrait Photography Basics", "Photography", "Photography", "Beginner", 25],
  [
    "Street Photography Masterclass",
    "Photography",
    "Photography",
    "Advanced",
    39,
  ],
  ["Social Media Strategy", "Marketing", "Social Media", "Beginner", 19],
  [
    "Instagram Growth Playbook",
    "Marketing",
    "Social Media",
    "Intermediate",
    29,
  ],
  ["Content Marketing Engine", "Marketing", "Marketing", "Intermediate", 35],
  ["Email Marketing that Converts", "Marketing", "Marketing", "Beginner", 25],
  [
    "Freelance Rate Card",
    "Business",
    "Freelance & Entrepreneurship",
    "Beginner",
    15,
  ],
  [
    "Client Contracts Done Right",
    "Business",
    "Freelance & Entrepreneurship",
    "Advanced",
    39,
  ],
  ["Frontend Fundamentals", "Development", "Web Development", "Beginner", 29],
  [
    "React from First principles",
    "Development",
    "Web Development",
    "Intermediate",
    49,
  ],
  ["Ship a SaaS in 30 Days", "Development", "Web Development", "Advanced", 59],
  ["SQL for Analysts", "IT & Software", "Data Science", "Beginner", 25],
  ["Cooking the Indian Kitchen", "Design", "Cooking", "Intermediate", 19],
  ["Baking Bread at Home", "Design", "Cooking", "Beginner", 15],
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildDescription(title: string, topic: string) {
  return [
    `Embark on an enlightening exploration into the world of ${topic.toLowerCase()} with our comprehensive course, "${title}". This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of ${topic.toLowerCase()}.`,
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of this discipline. Understand the fundamental elements that constitute compelling work and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances that drive impactful creations. Uncover the secrets behind effective visual communication, exploring colour, typography and layout strategies that elevate your work to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ];
}

export const courses: Course[] = seeds.map(
  ([title, category, topic, level, price], index) => {
    const stats = statBlocks[Math.floor(index / PER_PAGE) % statBlocks.length];

    const slug = slugify(title);
    const override = detailOverrides[slug];
    const curriculumBlock = Math.floor(index / PER_PAGE);
    const curriculum = Array.from({ length: 6 }, (_, lesson) => ({
      title:
        curriculumTitles[(curriculumBlock + lesson) % curriculumTitles.length],
      duration:
        curriculumDurations[
          (curriculumBlock + lesson) % curriculumDurations.length
        ],
    }));

    return {
      title,
      headline: override?.headline ?? title,
      subtitle:
        override?.subtitle ??
        `Unlock the power of ${topic} with expert guidance`,
      slug,
      href: `/courses/${slug}`,
      image: images[index % images.length],
      /* The first page of the catalog is the studio's own work, which is what
         the design shows on both the listing and the detail page. */
      author:
        index < PER_PAGE ? "purepearl studio" : authors[index % authors.length],
      category,
      topic,
      level,
      price,
      lessons: `${stats.lessonCount} Lessons`,
      duration: stats.duration,
      comments: stats.comments,
      studentsLabel: stats.studentsLabel,
      rating: stats.rating,
      publishedAt: new Date(Date.UTC(2025, 8, 1) - index * 9 * 86400000)
        .toISOString()
        .slice(0, 10),
      description: buildDescription(title, topic),
      keyPoints: override?.keyPoints ?? keyPointPool,
      modules: moduleCopy,
      reviewList: reviewPool,
      ratingBreakdown,
      averageRating: averageRating(),
      progress: stats.progress,
      curriculum,
      lessonCount: stats.lessonCount,
      totalHours: stats.totalHours,
      reviews: stats.reviews,
      students: stats.students,
    };
  },
);

export const featuredCourses = courses.slice(0, PER_PAGE);

/* The single preview video every course page embeds for now. */
export const previewVideoId = "6Nx9ZM_8Vwo";
