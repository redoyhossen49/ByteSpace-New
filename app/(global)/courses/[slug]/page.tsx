import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/app/components/container";
import { courses, previewVideoId } from "@/app/components/courses/data";
import CourseHeader from "@/app/components/courses/detail/course-header";
import CourseTabs from "@/app/components/courses/detail/course-tabs";
import CourseVideo from "@/app/components/courses/detail/course-video";
import EnrollmentCard from "@/app/components/courses/detail/enrollment-card";

const poster = {
  src: "/video-thumnail.jpg",
  width: 1440,
  height: 960,
  alt: "Instructor presenting the course",
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) return {};

  return {
    title: `${course.headline} | ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({
  params,
}: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) notFound();

  return (
    <>
      {/* The band stays open at the bottom so the enrolment card, which is taller
          than the band, can hang over the white section below it. */}
      <section className="bg-brand-purple text-white">
        <Container className="pb-20 pt-10 lg:pb-24 lg:pt-12">
          <CourseHeader course={course} />

          <div className="mt-8 grid items-start gap-6 md:grid-cols-[1fr_340px] lg:mt-10 lg:grid-cols-[1fr_440px] lg:gap-10">
            <CourseVideo
              videoId={previewVideoId}
              title={course.headline}
              poster={poster}
            />

            <EnrollmentCard course={course} />
          </div>
        </Container>
      </section>

      <section className="relative z-10 bg-white">
        <Container className="py-12 lg:py-14">
          <div className="grid gap-6 md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_440px] lg:gap-10">
            <CourseTabs course={course} />
            <div aria-hidden className="hidden md:block" />
          </div>
        </Container>
      </section>
    </>
  );
}
