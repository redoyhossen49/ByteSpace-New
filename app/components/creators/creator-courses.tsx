"use client";

import { useMemo, useState } from "react";

import CourseGrid from "@/app/components/discover/CourseGrid";
import Container from "@/app/components/container";
import CourseToolbar from "@/app/components/courses/course-toolbar";
import {
  ALL,
  filterCourses,
  sortCourses,
  sortDefault,
} from "@/app/components/courses/course-filters";

import { creatorCourses } from "./data";

export default function CreatorCourses() {
  const [price, setPrice] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [sort, setSort] = useState(sortDefault);

  const filtered = price !== ALL || level !== ALL || category !== ALL;

  const clearAll = () => {
    setPrice(ALL);
    setLevel(ALL);
    setCategory(ALL);
    setSort(sortDefault);
  };

  const results = useMemo(
    () =>
      sortCourses(
        filterCourses(creatorCourses, {
          query: "",
          price,
          level,
          category,
          topic: ALL,
        }),
        sort,
      ),
    [price, level, category, sort],
  );

  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <CourseToolbar
          price={price}
          level={level}
          category={category}
          sort={sort}
          onPriceChange={setPrice}
          onLevelChange={setLevel}
          onCategoryChange={setCategory}
          onSortChange={setSort}
          filtered={filtered}
          onClear={clearAll}
        />

        {results.length > 0 ? (
          <CourseGrid
            courses={results}
            className="mt-14 lg:mt-16"
            priorityFirst
          />
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-neutral-300 py-20 text-center">
            <p className="text-[19px] font-bold text-neutral-900">
              No courses match those filters
            </p>
            <p className="mt-2 text-[15px] text-neutral-500">
              Clear the filters to see the whole catalog again.
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
      </Container>
    </section>
  );
}
