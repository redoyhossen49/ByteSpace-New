"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PiMagnifyingGlass } from "react-icons/pi";

import Badge from "@/app/components/discover/Badge";
import CourseGrid from "@/app/components/discover/CourseGrid";
import Container from "@/app/components/container";

import CourseToolbar from "./course-toolbar";
import FilterDropdown from "./filter-dropdown";
import Pagination from "./pagination";
import {
  ALL,
  categoryOptions,
  filterCourses,
  sortCourses,
  sortDefault,
} from "./course-filters";
import { courses, PER_PAGE } from "./data";

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

export default function CourseBrowser() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [price, setPrice] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [topic, setTopic] = useState(ALL);
  const [sort, setSort] = useState(sortDefault);
  const [page, setPage] = useState(1);

  /* Any change to the query or the filters sends the reader back to page one,
     so a narrowed result set is never hidden on a stale page. */
  const update =
    <T,>(setter: (value: T) => void) =>
    (value: T) => {
      setter(value);
      setPage(1);
    };

  const results = useMemo(
    () =>
      sortCourses(
        filterCourses(courses, { query, price, level, category, topic }),
        sort,
      ),
    [query, price, level, category, topic, sort],
  );

  const pageCount = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const currentPage = Math.min(page, pageCount);
  const visible = results.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const filtered =
    query.trim() !== "" ||
    price !== ALL ||
    level !== ALL ||
    category !== ALL ||
    topic !== ALL;

  const clearAll = () => {
    setQuery("");
    setPrice(ALL);
    setLevel(ALL);
    setCategory(ALL);
    setTopic(ALL);
    setSort(sortDefault);
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
          <CourseToolbar
            price={price}
            level={level}
            category={category}
            sort={sort}
            onPriceChange={update(setPrice)}
            onLevelChange={update(setLevel)}
            onCategoryChange={update(setCategory)}
            onSortChange={update(setSort)}
            filtered={filtered}
            onClear={clearAll}
          />

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
