import { defaultAvatars } from "@/app/components/avatar-stack/data";
import CourseCard from "./course-card";

const courses = [
  {
    title: "Learn Figma from Basic",
    href: "/courses/learn-figma-from-basic",
    image: {
      src: "/course1.jpg",
      width: 698,
      height: 465,
      alt: "Designer sketching wireframes at a desk",
    },
  },
  {
    title: "Build Digital Asset",
    href: "/courses/build-digital-asset",
    image: {
      src: "/course2.jpg",
      width: 682,
      height: 454,
      alt: "A spread of digital icon designs",
    },
  },
  {
    title: "the Power of Big Data",
    href: "/courses/the-power-of-big-data",
    image: {
      src: "/course3.png",
      width: 682,
      height: 454,
      alt: "Analytics dashboard with charts",
    },
  },
  {
    title: "Balancing Productivity and Focus",
    href: "/courses/balancing-productivity-and-focus",
    image: {
      src: "/course4.jpg",
      width: 682,
      height: 454,
      alt: "A tidy workspace with a monitor",
    },
  },
  {
    title: "Mastering Money Management",
    href: "/courses/mastering-money-management",
    image: {
      src: "/course5.jpg",
      width: 682,
      height: 454,
      alt: "A rising line graph on a chart",
    },
  },
  {
    title: "From Idea to Startup Success",
    href: "/courses/from-idea-to-startup-success",
    image: {
      src: "/course6.jpg",
      width: 682,
      height: 454,
      alt: "Team workshop with sticky notes on a wall",
    },
  },
];

export default function CourseGrid() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
      {courses.map((course) => (
        <CourseCard
          key={course.href}
          title={course.title}
          href={course.href}
          image={course.image}
          author="purepearl studio"
          rating={4.5}
          level="Beginner"
          lessons="17 Lessons"
          duration="2 hours 16 mins"
          comments="59 Comments"
          studentsLabel="26+"
          price="$25"
          avatars={defaultAvatars}
        />
      ))}
    </div>
  );
}
