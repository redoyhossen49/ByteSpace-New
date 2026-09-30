import type { Course } from "@/app/components/courses/data";
import { featuredCourses } from "@/app/components/courses/data";
import { defaultAvatars } from "@/app/components/avatar-stack/data";
import CourseCard from "./course-card";

type CourseGridProps = {
  courses?: Course[];
  className?: string;
  /** Preload the first card so the first row is not discovered late. */
  priorityFirst?: boolean;
};

export default function CourseGrid({
  courses = featuredCourses,
  className = "",
  priorityFirst = false,
}: CourseGridProps) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 ${className}`}
    >
      {courses.map((course, index) => (
        <CourseCard
          key={course.href}
          title={course.title}
          href={course.href}
          image={course.image}
          author={course.author}
          authorHref={`/creators/${course.authorSlug}`}
          rating={course.rating}
          level={course.level}
          lessons={course.lessons}
          duration={course.duration}
          comments={course.comments}
          studentsLabel={course.studentsLabel}
          price={`$${course.price}`}
          avatars={defaultAvatars}
          priority={priorityFirst && index === 0}
        />
      ))}
    </div>
  );
}
