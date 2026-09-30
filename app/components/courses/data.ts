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

export type Course = {
  title: string;
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
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsLabel: "26+",
  },
  {
    rating: 4.8,
    lessons: "24 Lessons",
    duration: "4 hours 30 mins",
    comments: "128 Comments",
    studentsLabel: "1.2K",
  },
  {
    rating: 4.3,
    lessons: "12 Lessons",
    duration: "1 hour 45 mins",
    comments: "34 Comments",
    studentsLabel: "840",
  },
  {
    rating: 4.6,
    lessons: "31 Lessons",
    duration: "6 hours 10 mins",
    comments: "212 Comments",
    studentsLabel: "3.4K",
  },
  {
    rating: 4.1,
    lessons: "9 Lessons",
    duration: "3 hours 5 mins",
    comments: "76 Comments",
    studentsLabel: "512",
  },
];

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

export const courses: Course[] = seeds.map(
  ([title, category, topic, level, price], index) => {
    const stats = statBlocks[Math.floor(index / PER_PAGE) % statBlocks.length];

    return {
      title,
      href: `/courses/${slugify(title)}`,
      image: images[index % images.length],
      author: authors[index % authors.length],
      category,
      topic,
      level,
      price,
      lessons: stats.lessons,
      duration: stats.duration,
      comments: stats.comments,
      studentsLabel: stats.studentsLabel,
      rating: stats.rating,
      publishedAt: new Date(Date.UTC(2025, 8, 1) - index * 9 * 86400000)
        .toISOString()
        .slice(0, 10),
    };
  },
);

export const featuredCourses = courses.slice(0, PER_PAGE);
