import { defaultAvatars } from "@/app/components/avatar-stack/data";
import Image from "next/image";
import { PiMagnifyingGlass } from "react-icons/pi";

import CourseCard from "./cards/CourseCard";
import HappyStudentsCard from "./cards/HappyStudentsCard";
import LearningProgressCard from "./cards/LearningProgressCard";

const headline = ["Get Access to Hundreds", "Courses Available"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-purple text-white">
      <Image
        src="/3d_ornament.png"
        alt=""
        width={1440}
        height={804}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-center"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 pt-14 text-center sm:px-8 sm:pt-20 lg:pt-24">
        <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[52px] lg:text-[72px]">
          {headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="/courses"
          method="get"
          className="mx-auto mt-9 flex max-w-[560px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
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

      <div className="relative mx-auto mt-12 w-full max-w-[1440px] xl:mt-0 xl:h-[300px]">
        <div className="pointer-events-none flex justify-center xl:absolute xl:inset-0 xl:block">
          <Image
            src="/Ellipse.png"
            alt=""
            width={1149}
            height={442}
            aria-hidden
            className="w-[880px] max-w-none xl:w-[1280px]"
          />
        </div>

        <Image
          src="/human-hero.png"
          alt="A smiling student wearing headphones and holding a laptop"
          width={722}
          height={515}
          priority
          className="relative z-10 mx-auto -mt-[14%] w-[400px] max-w-[82%] object-contain xl:absolute xl:left-[53%] xl:top-[-14px] xl:mx-0 xl:w-[440px] xl:max-w-none xl:-translate-x-1/2"
        />

        <div className="relative z-20 mx-5 mt-8 grid gap-4 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 xl:absolute xl:inset-0 xl:mx-0 xl:mt-0 xl:block">
          <CourseCard
            title="UI/UX Design"
            meta={["200 Courses", "1000+ Students"]}
            className="mx-auto xl:absolute xl:left-[22.5%] xl:top-[70px] xl:mx-0"
          />

          <LearningProgressCard
            value={55}
            className="mx-auto xl:absolute xl:right-[25.5%] xl:top-[80px] xl:mx-0"
          />

          <HappyStudentsCard
            rating={4.5}
            reviewCount={240}
            avatars={defaultAvatars}
            className="mx-auto xl:absolute xl:left-[22.5%] xl:top-[172px] xl:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
