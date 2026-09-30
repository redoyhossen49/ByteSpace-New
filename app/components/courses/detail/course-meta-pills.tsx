import type { Course } from "@/app/components/courses/data";
import { PiChartBar, PiStarFill, PiUsers } from "react-icons/pi";

type CourseMetaPillsProps = {
  course: Course;
};

/* The three white pills under the byline: level, rating and enrolment count. */
export default function CourseMetaPills({ course }: CourseMetaPillsProps) {
  const pills = [
    {
      key: "level",
      icon: <PiChartBar aria-hidden size={14} />,
      content: course.level,
    },
    {
      key: "rating",
      icon: <PiStarFill aria-hidden size={14} className="text-brand-blue" />,
      content: (
        <>
          <span className="font-semibold text-neutral-900">
            {course.rating.toFixed(1)}
          </span>{" "}
          <span className="text-neutral-600">({course.reviews} reviews)</span>
        </>
      ),
    },
    {
      key: "students",
      icon: <PiUsers aria-hidden size={14} className="text-brand-blue" />,
      content: (
        <>
          <span className="font-semibold text-neutral-900">
            {course.students}
          </span>{" "}
          <span className="text-neutral-600">Students</span>
        </>
      ),
    },
  ];

  return (
    <ul className="flex flex-wrap gap-3">
      {pills.map((pill) => (
        <li
          key={pill.key}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[15px] text-neutral-700"
        >
          {pill.icon}
          {pill.content}
        </li>
      ))}
    </ul>
  );
}
