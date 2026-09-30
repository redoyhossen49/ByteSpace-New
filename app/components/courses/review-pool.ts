export type Review = {
  /** Slug of the creator profile this review belongs to. */
  slug: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: { src: string; width: number; height: number; alt: string };
};

const avatars = [
  {
    src: "/creator.png",
    width: 200,
    height: 200,
    alt: "Studio portrait",
  },
  { src: "/james.png", width: 200, height: 200, alt: "Learner portrait" },
  { src: "/alex.png", width: 200, height: 200, alt: "Learner portrait" },
  { src: "/sarah.png", width: 200, height: 200, alt: "Learner portrait" },
];

/* Sixteen written reviews, weighted the way the ratings summary in the design
   is weighted: six five star, four four star, three three star, two two star
   and a single one star review. */
export const reviewPool: Review[] = [
  {
    name: "PurePearl Studio",
    slug: "purepearl-studio",
    role: "UI/UX Designer",
    rating: 5,
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    avatar: avatars[0],
  },
  {
    name: "Albert Flores",
    slug: "albert-flores",
    role: "UI/UX Designer",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
    avatar: avatars[1],
  },
  {
    name: "Cody Fisher",
    slug: "cody-fisher",
    role: "UI/UX Designer",
    rating: 5,
    text: "The project showcases and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.",
    avatar: avatars[2],
  },
  {
    name: "Brooklyn Simmons",
    slug: "brooklyn-simmons",
    role: "UI/UX Designer",
    rating: 5,
    text: "Lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape perfectly.",
    avatar: avatars[3],
  },
  {
    name: "Marina Abshire",
    slug: "marina-abshire",
    role: "Brand Designer",
    rating: 5,
    text: "Clear structure, no filler. I finished the course with a portfolio piece I am genuinely proud of and a workflow I use every day.",
    avatar: avatars[0],
  },
  {
    name: "Darlene Robertson",
    slug: "darlene-robertson",
    role: "Motion Designer",
    rating: 5,
    text: "The interactive media module alone was worth it. Everything else made the whole thing feel complete rather than a collection of clips.",
    avatar: avatars[1],
  },
  {
    name: "Ronald Braun",
    slug: "ronald-braun",
    role: "Product Designer",
    rating: 4,
    text: "Very strong fundamentals section. I would have liked a little more on accessibility, but the critique sessions more than made up for it.",
    avatar: avatars[2],
  },
  {
    name: "Yolanda Ferry",
    slug: "yolanda-ferry",
    role: "Illustrator",
    rating: 4,
    text: "Loved the module structure and the templates. A few of the later lessons assume more experience than the course claims to require.",
    avatar: avatars[3],
  },
  {
    name: "Amelia Vasquez",
    slug: "amelia-vasquez",
    role: "Front End Developer",
    rating: 4,
    text: "Useful for bridging design and development. The export workflow module alone saved me hours on a real client project.",
    avatar: avatars[0],
  },
  {
    name: "Justen Becker",
    slug: "justen-becker",
    role: "Graphic Designer",
    rating: 4,
    text: "Great pace and good pacing of the exercises. I took notes throughout and still went back twice to the project showcase module.",
    avatar: avatars[1],
  },
  {
    name: "Ethelyn Wilder",
    slug: "ethelyn-wilder",
    role: "Art Director",
    rating: 3,
    text: "Solid foundation, though the later modules move quickly. I had to slow down and work through the exercises twice to get the full benefit.",
    avatar: avatars[2],
  },
  {
    name: "Katrina Hane",
    slug: "katrina-hane",
    role: "Content Designer",
    rating: 3,
    text: "The design principles section is genuinely good. The platform optimisation part felt a little dated compared to everything else.",
    avatar: avatars[3],
  },
  {
    name: "Deion Bauch",
    slug: "deion-bauch",
    role: "Junior Designer",
    rating: 3,
    text: "Helpful if you are new to digital assets. I already knew most of the basics, so the first few modules were slow going for me.",
    avatar: avatars[0],
  },
  {
    name: "Salma Little",
    slug: "salma-little",
    role: "Freelancer",
    rating: 2,
    text: "The examples are good but there is very little about pricing or working with clients, which is what I actually came for.",
    avatar: avatars[1],
  },
  {
    name: "Ola Ritchie",
    slug: "ola-ritchie",
    role: "Photographer",
    rating: 2,
    text: "This is a design course rather than a photography course. Useful overlap if you work across both, but not what the title suggests.",
    avatar: avatars[2],
  },
  {
    name: "Tracey Dooley",
    slug: "tracey-dooley",
    role: "Student",
    rating: 1,
    text: "The quizzes were harder than the lessons prepared me for, and the download links in module three did not work for me.",
    avatar: avatars[3],
  },
];

/* Aggregate star counts behind the summary bars. The average is computed from
   these rather than stored, so the number and the bars can never disagree. */
export const ratingBreakdown = [
  { stars: 5, count: 200 },
  { stars: 4, count: 100 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
];

export function averageRating() {
  const total = ratingBreakdown.reduce((sum, row) => sum + row.count, 0);
  const weighted = ratingBreakdown.reduce(
    (sum, row) => sum + row.stars * row.count,
    0,
  );

  return weighted / total;
}

export const moduleTitles = [
  "Introduction to Digital Assets",
  "Design Principles for Impact",
  "User-Centric Design Strategies",
  "Interactive Media and Engagement",
  "Project Showcases and Critique",
  "Optimizing Digital Assets for Various Platforms",
  "Portfolio Review and Next Steps",
];

export const moduleDescriptions = [
  'Lay the groundwork with lessons like "Understanding Digital Elements" and "Navigating Design Software Tools." Dive into the essentials of digital asset creation.',
  'Master the principles that drive impactful designs with lessons such as "Color Theory in Digital Design" and "Typography Essentials." Elevate your visual communication skills.',
  'Understand "Design Thinking in Digital Creation" and delve into "User Experience (UX) Essentials." Craft digital assets with a focus on user-centric design.',
  'Engage your audience with lessons like "Creating Interactive Presentations" and "Integrating Multimedia Elements." Master the art of creating immersive digital experiences.',
  'Perfect your presentation skills with "Effective Presentation Techniques" and embrace collaboration with "Peer Critique and Collaboration." Showcase your work with confidence.',
  'Adapt your digital creations for "Mobile Platforms" and optimize for "Social Media." Ensure widespread accessibility and engagement across diverse digital landscapes.',
  "Bring the modules together in a capstone project, walk through the critique checklist, and plan what to build next.",
];

export const moduleCopy = moduleTitles.map((title, index) => ({
  title: `Module ${index + 1}: ${title}`,
  description: moduleDescriptions[index],
}));
