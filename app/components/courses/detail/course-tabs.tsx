"use client";

import { useState } from "react";

import type { Course } from "@/app/components/courses/data";

import {
  AboutPanel,
  courseTabs,
  LessonsPanel,
  ReviewsPanel,
  type CourseTab,
} from "./panels";

const panels: Record<
  CourseTab,
  (props: { course: Course }) => React.ReactNode
> = {
  About: AboutPanel,
  Lessons: LessonsPanel,
  Reviews: ReviewsPanel,
};

type CourseTabsProps = {
  course: Course;
};

/* Swaps the panel below the video; the tab itself carries the pressed state. */
export default function CourseTabs({ course }: CourseTabsProps) {
  const [active, setActive] = useState<CourseTab>("About");
  const Panel = panels[active];

  return (
    <div>
      <div role="tablist" aria-label="Course sections" className="flex gap-3">
        {courseTabs.map((tab) => {
          const current = tab === active;

          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={current}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2.5 text-[15px] transition-colors ${
                current
                  ? "bg-brand-lime font-semibold text-neutral-900"
                  : "bg-brand-chip text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-8">
        <Panel course={course} />
      </div>
    </div>
  );
}
