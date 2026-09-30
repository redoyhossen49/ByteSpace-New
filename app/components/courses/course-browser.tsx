"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  PiChartBar,
  PiFunnel,
  PiMagnifyingGlass,
  PiPuzzlePiece,
} from "react-icons/pi";

import Badge from "@/app/components/discover/Badge";
import CourseGrid from "@/app/components/discover/CourseGrid";
import Container from "@/app/components/container";

import FilterDropdown from "./filter-dropdown";
import Pagination from "./pagination";
import { categories, courses, levels, PER_PAGE } from "./data";

const ALL = "all";

/* The quick topics above the grid, in the order the design lists them. */
const quickTopics = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

const priceOptions = [
  { value: ALL, label: "All prices" },
  { value: "under-30", label: "Under $30" },
  { value: "30-plus", label: "$30 & over" },
];

const levelOptions = [
  { value: ALL, label: "All levels" },
  ...levels.map((level) => ({ value: level, label: level })),
];

const categoryOptions = [
  { value: ALL, label: "All categories" },
  ...categories.map((category) => ({ value: category, label: category })),
];

const sortOptions = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "newest", label: "Newest first" },
];

function matchesPrice(price: number, filter: string) {
  if (filter === "under-30") return price < 30;
  if (filter === "30-plus") return price >= 30;
  return true;
}

function sortCourses(list: typeof courses, sort: string) {
  const sorted = [...list];

  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  if (sort === "newest")
    sorted.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return sorted;
}

export default function CourseBrowser() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [price, setPrice] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [topic, setTopic] = useState(ALL);
  const [sort, setSort] = useState("relevant");
  const [page, setPage] = useState(1);

  /* Any change to the query or the filters sends the reader back to page one,
     so a narrowed result set is never hidden on a stale page. */
  const update =
    <T,>(setter: (value: T) => void) =>
    (value: T) => {
      setter(value);
      setPage(1);
    };

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    const filtered = courses.filter((course) => {
      if (needle) {
        const haystack =
          `${course.title} ${course.author} ${course.topic} ${course.category}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      if (price !== ALL && !matchesPrice(course.price, price)) return false;
      if (level !== ALL && course.level !== level) return false;
      if (category !== ALL && course.category !== category) return false;
      if (topic !== ALL && course.topic !== topic) return false;
      return true;
    });

    return sortCourses(filtered, sort);
  }, [query, price, level, category, topic, sort]);

  const pageCount = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const currentPage = Math.min(page, pageCount);
  const visible = results.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );
  const clearAll = () => {
    setQuery("");
    setPrice(ALL);
    setLevel(ALL);
    setCategory(ALL);
    setTopic(ALL);
    setSort("relevant");
    setPage(1);
  };

  return (
    <>
      <section className="bg-brand-purple py-14 text-white lg:py-20">
        <Container className="flex flex-col items-center">
          <h1 className="text-center text-[30px] font-bold tracking-[-0.02em] sm:text-[38px]">
            Find Your Next Course
          </h1>

          <div className="mt-8 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <PiMagnifyingGlass
                aria-hidden
                size={20}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => update(setQuery)(event.target.value)}
                placeholder="Search"
                aria-label="Search courses"
                className="h-14 w-full rounded-full bg-white pl-12 pr-5 text-[15px] text-neutral-900 outline-none placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-brand-lime"
              />
            </div>

            <FilterDropdown
              label="Courses"
              ariaLabel="Filter by category"
              value={category}
              options={categoryOptions}
              onChange={update(setCategory)}
              variant="lime"
              className="shrink-0"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <FilterDropdown
              label="Filter"
              ariaLabel="Filter by price"
              value={price}
              options={priceOptions}
              onChange={update(setPrice)}
              icon={<PiFunnel aria-hidden size={17} />}
            />

            <FilterDropdown
              label="Level"
              ariaLabel="Filter by level"
              value={level}
              options={levelOptions}
              onChange={update(setLevel)}
              icon={<PiChartBar aria-hidden size={17} />}
            />

            <FilterDropdown
              label="Category"
              ariaLabel="Filter by category"
              value={category}
              options={categoryOptions}
              onChange={update(setCategory)}
              icon={<PiPuzzlePiece aria-hidden size={17} />}
            />

            <FilterDropdown
              label="Most relevant"
              ariaLabel="Sort courses"
              value={sort}
              options={sortOptions}
              onChange={update(setSort)}
              align="right"
              className="ml-auto"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:gap-4">
            <Badge active={topic === ALL} onClick={() => update(setTopic)(ALL)}>
              Featured
            </Badge>

            {quickTopics.map((option) => (
              <Badge
                key={option}
                active={topic === option}
                onClick={() => update(setTopic)(option)}
              >
                {option}
              </Badge>
            ))}
          </div>

          {visible.length > 0 ? (
            <CourseGrid
              courses={visible}
              className="mt-14 lg:mt-16"
              priorityFirst
              key={currentPage}
            />
          ) : (
            <div className="mt-16 rounded-2xl border border-dashed border-neutral-300 py-20 text-center">
              <p className="text-[19px] font-bold text-neutral-900">
                No courses match those filters
              </p>
              <p className="mt-2 text-[15px] text-neutral-500">
                Try a different search term or clear the filters to see the full
                catalog.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 h-12 rounded-full bg-brand-lime px-8 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
              >
                Clear filters
              </button>
            </div>
          )}

          <Pagination
            page={currentPage}
            pageCount={pageCount}
            onChange={setPage}
          />
        </Container>
      </section>
    </>
  );
}
