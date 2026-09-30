"use client";

import { PiChartBar, PiFunnel, PiPuzzlePiece } from "react-icons/pi";

import FilterDropdown from "./filter-dropdown";
import {
  categoryOptions,
  levelOptions,
  priceOptions,
  sortOptions,
} from "./course-filters";

type CourseToolbarProps = {
  price: string;
  level: string;
  category: string;
  sort: string;
  onPriceChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  /** True while any filter narrows the list, which reveals the reset link. */
  filtered?: boolean;
  onClear?: () => void;
};

/* The filter row above a course grid: price, level and category on the left,
   sorting on the right. Shared by the catalog and the creator profile. */
export default function CourseToolbar({
  price,
  level,
  category,
  sort,
  onPriceChange,
  onLevelChange,
  onCategoryChange,
  onSortChange,
  filtered = false,
  onClear,
}: CourseToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 lg:gap-4">
      <FilterDropdown
        label="Filter"
        ariaLabel="Filter by price"
        value={price}
        options={priceOptions}
        onChange={onPriceChange}
        icon={<PiFunnel aria-hidden size={17} />}
      />

      <FilterDropdown
        label="Level"
        ariaLabel="Filter by level"
        value={level}
        options={levelOptions}
        onChange={onLevelChange}
        icon={<PiChartBar aria-hidden size={17} />}
      />

      <FilterDropdown
        label="Category"
        ariaLabel="Filter by category"
        value={category}
        options={categoryOptions}
        onChange={onCategoryChange}
        icon={<PiPuzzlePiece aria-hidden size={17} />}
      />

      {filtered && onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="px-1 text-[15px] font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline"
        >
          Clear filters
        </button>
      ) : null}

      <FilterDropdown
        label="Most relevant"
        ariaLabel="Sort courses"
        value={sort}
        options={sortOptions}
        onChange={onSortChange}
        align="right"
        className="ml-auto"
      />
    </div>
  );
}
