import { defaultAvatars } from "@/app/components/avatar-stack/data";
import Container from "@/app/components/container";
import Image from "next/image";
import { PiMagnifyingGlass } from "react-icons/pi";

import CourseCard from "@/app/components/cards/CourseCard";
import HappyStudentsCard from "@/app/components/cards/HappyStudentsCard";
import LearningProgressCard from "@/app/components/cards/LearningProgressCard";
import GridBackdrop from "@/app/components/grid-backdrop";

const headline = ["Get Access to Hundreds", "Courses Available"];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-brand-purple text-white">
      <GridBackdrop className="-z-20" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[14vh] -z-10"
        style={{
          backgroundImage: "url(/3d_ornament.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Container className="relative z-10 flex flex-1 flex-col">
        <div className="pt-12 text-center sm:pt-20 lg:pt-24">
          <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[52px] lg:text-[80px] lg:leading-[1.04]">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-white/80 sm:mt-12 sm:text-[17px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <form
            action="/courses"
            method="get"
            className="mx-auto mt-8 flex max-w-[610px] flex-col gap-3 sm:mt-16 sm:flex-row sm:items-center sm:gap-5"
          >
            <div className="relative flex-1">
              <PiMagnifyingGlass
                aria-hidden
                size={20}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="h-14 w-full rounded-full bg-white pl-12 pr-5 text-[15px] text-neutral-900 outline-none placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-brand-lime"
              />
            </div>

            <button
              type="submit"
              className="h-14 shrink-0 rounded-full bg-brand-lime px-8 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>

        <div className="relative mt-10 flex-1 sm:mt-12">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center xl:top-0 xl:bottom-auto">
            <Image
              src="/Ellipse.png"
              alt=""
              width={1149}
              height={442}
              aria-hidden
              className="w-[880px] max-w-none xl:h-[540px] xl:w-[1180px]"
            />
          </div>

          <Image
            src="/human-hero.png"
            alt="A smiling student wearing headphones and holding a laptop"
            width={722}
            height={515}
            priority
            className="relative z-10 mx-auto w-[400px] max-w-[82%] object-contain xl:absolute xl:left-1/2 xl:top-[-40px] xl:mx-0 xl:w-[760px] xl:max-w-none xl:-translate-x-1/2"
          />

          <div className="relative z-20 mx-5 mt-8 grid gap-4 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 xl:absolute xl:inset-0 xl:mx-0 xl:mt-0 xl:block">
            <CourseCard
              title="UI/UX Design"
              meta={["200 Courses", "1000+ Students"]}
              className="mx-auto xl:absolute xl:left-[26.8%] xl:top-[90px] xl:mx-0"
            />

            <LearningProgressCard
              value={55}
              className="mx-auto xl:absolute xl:right-[24.7%] xl:top-[96px] xl:mx-0"
            />

            <HappyStudentsCard
              rating={4.5}
              reviewCount={240}
              avatars={defaultAvatars}
              className="mx-auto xl:absolute xl:left-[21.5%] xl:top-[295px] xl:mx-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
