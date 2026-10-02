import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/app/components/container";
import { courses, previewVideoId } from "@/app/components/courses/data";
import CourseHeader from "@/app/components/courses/detail/course-header";
import CourseTabs from "@/app/components/courses/detail/course-tabs";
import CourseVideo from "@/app/components/courses/detail/course-video";
import EnrollmentCard from "@/app/components/courses/detail/enrollment-card";
import GridBackdrop from "@/app/components/grid-backdrop";

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
      {/* The band is sized by the preview video only and stops just beneath it,
          so the taller enrolment card hangs down over the white section instead
          of stretching the purple with it. */}
      <section className="relative isolate overflow-hidden bg-brand-purple text-white">
        <GridBackdrop className="-z-10" offsetY="-5rem" />

        <Container className="pb-8 pt-10 lg:pt-12">
          <CourseHeader course={course} />

          <div className="relative mt-8 grid items-start gap-6 md:grid-cols-[1fr_340px] lg:mt-10 lg:grid-cols-[1fr_440px] lg:gap-10">
            <CourseVideo
              videoId={previewVideoId}
              title={course.headline}
              poster={poster}
            />

            <div className="md:absolute md:right-0 md:top-0 md:w-[340px] lg:w-[440px]">
              <EnrollmentCard course={course} />
            </div>
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
