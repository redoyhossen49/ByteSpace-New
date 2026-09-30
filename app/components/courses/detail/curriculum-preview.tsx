import Link from "next/link";

import type { Course, CurriculumItem } from "@/app/components/courses/data";

type CurriculumPreviewProps = {
  course: Course;
};

/* The lesson teaser inside the enrolment card: the first three lessons and how
   many more the course holds. */
export default function CurriculumPreview({ course }: CurriculumPreviewProps) {
  const preview = course.curriculum.slice(0, 3);
  const hidden = Math.max(course.lessonCount - preview.length, 0);

  return (
    <div>
      <h2 className="text-[17px] font-bold text-neutral-900">
        {course.lessonCount} Lessons ({course.totalHours} hours)
      </h2>

      <ul className="mt-4 flex flex-col gap-4">
        {preview.map((lesson: CurriculumItem, index) => (
          <li key={lesson.title} className="flex items-start gap-3">
            <span className="w-6 shrink-0 pt-0.5 text-[14px] font-semibold text-neutral-900">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="min-w-0 flex-1 text-[15px] leading-snug text-neutral-800">
              {lesson.title}
            </span>

            <span className="shrink-0 text-[14px] text-brand-blue">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ul>

      {hidden > 0 ? (
        <Link
          href="#curriculum"
          className="mt-4 inline-block text-[14px] text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline"
        >
          {hidden} more videos
        </Link>
      ) : null}
    </div>
  );
}
