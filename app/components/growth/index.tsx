import Image from "next/image";

import { defaultAvatars } from "@/app/components/avatar-stack/data";
import HappyStudentsCard from "@/app/components/cards/HappyStudentsCard";
import LearningProgressCard from "@/app/components/cards/LearningProgressCard";
import CourseCard from "@/app/components/discover/course-card";
import FeatureList from "./FeatureList";
import Stats from "./Stats";
import TotalRevenueCard from "./TotalRevenueCard";
import YearToDateCard from "./YearToDateCard";

const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const featureCourse = {
  title: "Learn Figma from Basic",
  href: "/courses/learn-figma-from-basic",
  image: {
    src: "/course1.jpg",
    width: 698,
    height: 465,
    alt: "Designer sketching wireframes at a desk",
  },
  author: "purepearl studio",
  rating: 4.5,
  level: "Beginner",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  studentsLabel: "26+",
  price: "$25",
  avatars: defaultAvatars,
};

const manSpring = { src: "/man-spring.png", width: 216, height: 216 };
const womenSpring = { src: "/women-spring.png", width: 216, height: 216 };

export default function Growth() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-mist">
      <Image
        src="/growth-bg.png"
        alt=""
        width={1440}
        height={1460}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-center"
      />

      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1">
            <h2 className="text-[30px] font-bold leading-[1.25] tracking-[-0.02em] text-neutral-900 sm:text-[36px] lg:text-[44px]">
              <span className="block">Your Path to Professional</span>
              <span className="block">Growth Starts Here!</span>
            </h2>

            <p className="mt-12 max-w-[560px] text-[15px] leading-[1.9] text-neutral-800 sm:text-[16px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <Stats items={growthStats} className="mt-10" />
          </div>

          <div className="relative order-2">
            <div className="relative mx-auto w-full max-w-[620px] lg:aspect-[605/430]">
              <div className="relative z-20 lg:absolute lg:inset-x-0 lg:top-[7%] lg:flex lg:justify-center">
                <Image
                  src="/human-hero.png"
                  alt="A smiling student wearing headphones and holding a laptop"
                  width={722}
                  height={515}
                  className="mx-auto w-[78%] max-w-none sm:w-[86%] lg:w-[88%]"
                />
              </div>

              <Image
                src={manSpring.src}
                alt=""
                width={manSpring.width}
                height={manSpring.height}
                aria-hidden
                className="pointer-events-none absolute top-[16%] left-[64%] z-20 hidden w-[42%] lg:block"
              />

              <div className="relative z-10 mt-6 lg:absolute lg:top-0 lg:left-0 lg:mt-0 lg:w-[56%]">
                <CourseCard
                  title={featureCourse.title}
                  href={featureCourse.href}
                  image={featureCourse.image}
                  author={featureCourse.author}
                  rating={featureCourse.rating}
                  level={featureCourse.level}
                  lessons={featureCourse.lessons}
                  duration={featureCourse.duration}
                  comments={featureCourse.comments}
                  studentsLabel={featureCourse.studentsLabel}
                  price={featureCourse.price}
                  avatars={featureCourse.avatars}
                />
              </div>

              <div className="relative z-30 mt-6 flex justify-center lg:absolute lg:top-[36%] lg:right-0 lg:mt-0 lg:block lg:w-[47%]">
                <LearningProgressCard
                  value={55}
                  className="mx-auto w-full lg:mx-0 lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[620px] lg:aspect-[605/470]">
              <div className="relative z-20 lg:absolute lg:inset-x-0 lg:top-0 lg:flex lg:justify-center">
                <Image
                  src="/women.png"
                  alt="A smiling creator wearing headphones and holding a tablet"
                  width={500}
                  height={500}
                  className="mx-auto w-[70%] max-w-none sm:w-[78%] lg:w-[76%]"
                />
              </div>

              <Image
                src={womenSpring.src}
                alt=""
                width={womenSpring.width}
                height={womenSpring.height}
                aria-hidden
                className="pointer-events-none absolute top-[20%] left-[56%] z-20 hidden w-[36%] lg:block"
              />

              <div className="relative z-10 mt-6 lg:absolute lg:inset-0 lg:mt-0 lg:block">
                <TotalRevenueCard
                  period="July 2025"
                  amount="$120.29"
                  value={55}
                  className="mx-auto lg:absolute lg:top-[2%] lg:left-0 lg:mx-0 lg:w-[31%]"
                />

                <YearToDateCard
                  period="2025"
                  amount="$1,200.38"
                  badge="+20%"
                  className="mx-auto lg:absolute lg:top-[30%] lg:left-0 lg:mx-0 lg:w-[28%]"
                />

                <HappyStudentsCard
                  rating={4.5}
                  reviewCount={240}
                  avatars={defaultAvatars}
                  className="mx-auto lg:absolute lg:right-0 lg:bottom-0 lg:mx-0 lg:w-[44%]"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[30px] font-bold leading-[1.25] tracking-[-0.02em] text-neutral-900 sm:text-[36px] lg:text-[44px]">
              <span className="block">Create &amp; Manage</span>
              <span className="block">Courses Easily.</span>
            </h2>

            <p className="mt-10 max-w-[470px] text-[15px] leading-[1.9] text-neutral-800 sm:text-[16px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <FeatureList items={creatorFeatures} className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
