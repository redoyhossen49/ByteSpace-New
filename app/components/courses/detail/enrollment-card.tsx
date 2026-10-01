import type { Course } from "@/app/components/courses/data";

import CourseIncludes from "./course-includes";
import CreatorSummary from "./creator-summary";
import CurriculumPreview from "./curriculum-preview";

type EnrollmentCardProps = {
  course: Course;
};

/* The white card beside the preview: what the course covers, the price and the
   enrolment call to action. From md up it is pulled out of the flow by the page,
   so it hangs past the purple band over the white section; nothing above it may
   clip it. */
export default function EnrollmentCard({ course }: EnrollmentCardProps) {
  return (
    <aside className="relative z-20 rounded-2xl bg-white p-6 text-neutral-800 shadow-[0_24px_60px_-30px_rgba(12,4,54,0.45)] lg:p-7">
      <CurriculumPreview course={course} />

      <p className="mt-6 text-[14px] leading-relaxed text-neutral-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="mt-4 text-[24px] font-bold text-brand-purple">
        ${course.price}
        <span className="text-[13px] font-normal text-neutral-400">
          /lifetime
        </span>
      </p>

      <button
        type="button"
        className="mt-4 h-12 w-full rounded-full bg-brand-lime text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
      >
        Enroll Now
      </button>

      <div className="mt-7">
        <CourseIncludes />
      </div>

      <hr className="mt-7 border-neutral-200" />

      <div className="mt-6">
        <CreatorSummary course={course} />
      </div>
    </aside>
  );
}
