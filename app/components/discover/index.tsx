"use client";

import { useState } from "react";

import Badge from "./Badge";
import CourseGrid from "./CourseGrid";

const heading = ["Discover Your Passion,", "Build Your Skills"];

const categories = [
  "Featured",
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
];

export default function Discover() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="bg-white py-20 text-center lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
        <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-[40px] lg:text-[48px]">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-8 max-w-[980px] text-[15px] leading-[1.7] text-neutral-400 sm:text-[17px]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div className="mx-auto mt-12 flex max-w-[1160px] flex-wrap items-center justify-center gap-x-5 gap-y-5">
          {categories.map((category) => (
            <Badge
              key={category}
              active={category === active}
              onClick={() => setActive(category)}
            >
              {category}
            </Badge>
          ))}

          <Badge variant="link" href="/courses">
            + More
          </Badge>
        </div>

        <CourseGrid />
      </div>
    </section>
  );
}
