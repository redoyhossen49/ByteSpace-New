import Link from "next/link";

import type { Course } from "@/app/components/courses/data";

import CourseMetaPills from "./course-meta-pills";
import ShareButton from "./share-button";

type CourseHeaderProps = {
  course: Course;
};

/* Title block of the detail page: heading, promise, byline, the meta pills and
   the share control on the right. */
export default function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-6">
      <div className="min-w-0">
        <h1 className="max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[34px]">
          {course.headline}
        </h1>

        <p className="mt-3 max-w-[640px] text-[15px] text-white/80 sm:text-[16px]">
          {course.subtitle}
        </p>

        <p className="mt-4 text-[14px] text-white/70">
          by{" "}
          <Link
            href="/creators"
            className="font-medium text-[#7ea2ff] transition-opacity hover:opacity-80"
          >
            {course.author}
          </Link>
        </p>

        <div className="mt-5">
          <CourseMetaPills course={course} />
        </div>
      </div>

      <ShareButton />
    </div>
  );
}
