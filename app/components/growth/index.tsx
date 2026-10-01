import Image from "next/image";

import Container from "@/app/components/container";
import FeatureList from "./FeatureList";
import Stats from "./Stats";

const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

/* professional-growth.png (703x697) and manage-course.png (587x719) are
   pre-composed plates: the student cutout, the green spring and every stat
   card already sit at their final offsets on a transparent field, so each row
   is just copy beside one plate. */
export default function Growth() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-mist">
      <Image
        src="/growth-bg.png"
        alt=""
        width={1507}
        height={1528}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-center"
      />

      <Container className="py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[30px] font-bold leading-[1.25] tracking-[-0.02em] text-neutral-900 sm:text-[36px] lg:text-[44px]">
              <span className="block">Your Path to Professional</span>
              <span className="block">Growth Starts Here!</span>
            </h2>

            <p className="mt-8 max-w-[560px] text-[15px] leading-[1.9] text-neutral-800 sm:text-[16px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <Stats items={growthStats} className="mt-10" />
          </div>

          <Image
            src="/professional-growth.png"
            alt="A student holding a laptop beside a course card and a learning progress card"
            width={703}
            height={697}
            className="mx-auto w-full max-w-[560px]"
          />
        </div>

        <div className="mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Image
            src="/manage-course.png"
            alt="A course creator holding a tablet beside revenue and student cards"
            width={587}
            height={719}
            className="order-1 mx-auto w-full max-w-[480px] lg:order-none"
          />

          <div>
            <h2 className="text-[30px] font-bold leading-[1.25] tracking-[-0.02em] text-neutral-900 sm:text-[36px] lg:text-[44px]">
              <span className="block">Create &amp; Manage</span>
              <span className="block">Courses Easily.</span>
            </h2>

            <p className="mt-8 max-w-[470px] text-[15px] leading-[1.9] text-neutral-800 sm:text-[16px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <FeatureList items={creatorFeatures} className="mt-8" />
          </div>
        </div>
      </Container>
    </section>
  );
}