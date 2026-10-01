import Container from "@/app/components/container";
import { PiMagnifyingGlass } from "react-icons/pi";

const headline = ["Get Access to Hundreds", "Courses Available"];

/* herobg.svg is a 1440x1024 plate that already carries the grid, the lime
   ring, the student cutout and the floating stat cards, so the section only
   needs it painted as a backdrop behind the copy and the search field.
   The plate is painted with `contain`, never `cover`: the section is usually a
   wider shape than 1440/1024, and covering would crop the plate's bottom edge
   and cut off the Happy Students card. The purple section colour sits behind
   it, so the letterboxed margins read as one continuous field. */
export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-purple bg-cover bg-bottom bg-no-repeat text-white"
      style={{ backgroundImage: "url(/herobg.svg)" }}
    >
      <Container className="flex min-h-[calc(100svh-5rem)] flex-col">
        <div className="pt-12 text-center sm:pt-20 lg:pt-24 flex flex-col gap-12">
          <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[52px] lg:text-[80px] lg:leading-[1.04]">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto max-w-[880px] text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <form
            action="/courses"
            method="get"
            className="mx-auto flex max-w-[610px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
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
      </Container>
    </section>
  );
}