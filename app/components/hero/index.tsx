import Image from "next/image";

import Container from "@/app/components/container";
import GridBackdrop from "@/app/components/grid-backdrop";
import { PiMagnifyingGlass } from "react-icons/pi";

const headline = ["Get Access to Hundreds", "Courses Available"];

/* Three layers, back to front:
     GridBackdrop  the 120px grid, shared with the menubar above it (offsetY
                   pulls the tile origin back up by the menubar's 5rem so the
                   two read as one continuous field instead of a seam);
     3d-ornament   the scattered 3D shapes, full bleed and safe to crop -
                   every one of them bleeds off an edge by design;
     human-with-card.svg
                   the lime ring, the student and the three stat cards as one
                   plate. It is 1149x515 and bottom anchored at 80% of the
                   width, capped at its native size, which is the proportion
                   the design mock uses.

   Nothing here scales off `cover`, so the plate cannot be cropped and the
   stat cards can never ride up into the copy. The section is `flex-1` inside
   the 100svh band SiteShell builds with the menubar. */
export default function Hero() {
  return (
    <section className="relative isolate  flex flex-1 flex-col  overflow-hidden bg-brand-purple  text-white  pt-2">
      <GridBackdrop className="-z-20" offsetY="-5rem" />

      <div>
         <Image
          src="/Frame1.png"
          alt=""
          width={150}
          height={150}
          unoptimized
          className="absolute top-8 hidden lg:block"
        />
        <Image
          src="/Frame2.png"
          alt=""
          width={200}
          height={200}
          unoptimized
          className=" absolute left-44 top-30 hidden lg:block"
        />
         <Image
          src="/Cone1.png"
          alt=""
          width={200}
          height={200}
          unoptimized
          className=" absolute left-1/6 bottom-0 hidden lg:block"
        />
        <Image
          src="/Cone3.png"
          alt=""
          width={150}
          height={150}
          unoptimized
          className=" absolute right-0 top-10 hidden lg:block"/>

          <Image
          src="/Frame3.png"
          alt=""
          width={200}
          height={200}
          unoptimized
          className=" absolute right-44 top-80 hidden lg:block"/>

          <Image
          src="/Cone2.png"
          alt=""
          width={100}
          height={100}
          unoptimized
          className=" absolute right-70 top-50 hidden lg:block"/>

      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 flex justify-center "
      >
        <Image
          src="/human-with-card.svg"
          alt=""
          width={1200}
          height={480}
          unoptimized
          className="w-[55%] max-w-[1149px] hidden lg:block"
        />
        

      </div>

      <Container className="flex  flex-col mt-10 ">
        <div className="text-center">
          <h1 className="text-[clamp(30px,7vh,64px)] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[clamp(30px,6.4vh,70px)] sm:leading-[1.08]">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto  mt-2 max-w-[880px] text-[clamp(13px,1.8vh,17px)] leading-relaxed text-white/80">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <form
            action="/courses"
            method="get"
            className="mx-auto my-4 flex max-w-[500px] flex-col  sm:flex-row sm:items-center gap-3  "
          >
            <div className="relative flex-1">
              <PiMagnifyingGlass
                aria-hidden
                size={20}
                className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="h-[clamp(44px,6.6vh,56px)] w-[80%] rounded-full bg-white pl-12 pr-5 text-[15px] text-neutral-900 outline-none placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-brand-lime"
              />
            </div>

            <button
              type="submit"
              className="h-[clamp(44px,6.6vh,56px)] shrink-0 rounded-full bg-brand-lime px-8 text-[15px] font-semibold lg:mr-8 text-neutral-900 transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}