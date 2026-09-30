import type { Course } from "@/app/components/courses/data";

import KeyPoints from "./key-points";
import LessonModules from "./lesson-modules";
import LessonProgress from "./lesson-progress";
import { ReviewsPanel } from "./reviews-panel";
import SneakPeek from "./sneak-peek";

/* The three panels the tabs swap between. */

export { courseTabs } from "./tabs";
export type { CourseTab } from "./tabs";

export function AboutPanel({ course }: { course: Course }) {
  return (
    <div>
      <h2 className="text-[19px] font-bold text-neutral-900">Description</h2>

      <div className="mt-5 flex flex-col gap-5 text-[15px] leading-[1.8] text-neutral-500">
        {course.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <SneakPeek />

      <KeyPoints points={course.keyPoints} />
    </div>
  );
}

export function LessonsPanel({ course }: { course: Course }) {
  return (
    <div>
      <h2 className="text-[19px] font-bold text-neutral-900">
        Explore the Modules
      </h2>

      <p className="mt-3 max-w-[760px] text-[15px] leading-[1.8] text-neutral-500">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>

      <LessonModules modules={course.modules} />

      <section className="mt-10">
        <h2 className="text-[17px] font-bold text-neutral-900">
          Lesson Content
        </h2>

        <p className="mt-3 max-w-[760px] text-[15px] leading-[1.8] text-neutral-500">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[17px] font-bold text-neutral-900">
          Lesson Progress Tracking
        </h2>

        <p className="mt-3 max-w-[760px] text-[15px] leading-[1.8] text-neutral-500">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding through your learning journey.
        </p>

        <LessonProgress value={course.progress} />
      </section>
    </div>
  );
}

export { ReviewsPanel };
