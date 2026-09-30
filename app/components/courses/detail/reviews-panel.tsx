import { useState } from "react";
import { PiStarFill } from "react-icons/pi";

import type { Course } from "@/app/components/courses/data";

import RatingSummary from "./rating-summary";
import ReviewCard from "./review-card";

/* Reviews tab: the ratings summary, a filter row that narrows the list by star
   rating, and one card per written review. */
export function ReviewsPanel({ course }: { course: Course }) {
  const [filter, setFilter] = useState<number | null>(null);

  const visible = filter
    ? course.reviewList.filter((review) => review.rating === filter)
    : course.reviewList;

  const counts = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: course.reviewList.filter((review) => review.rating === stars).length,
  }));

  return (
    <div>
      <h2 className="text-[19px] font-bold text-neutral-900">
        What Learners Are Saying
      </h2>

      <p className="mt-3 max-w-[760px] text-[15px] leading-[1.8] text-neutral-500">
        Discover what our learners have to say about their experience with
        &quot;{course.headline}.&quot; Read reviews and ratings from individuals
        who have embarked on the transformative journey of mastering digital
        asset creation.
      </p>

      <RatingSummary
        average={course.averageRating}
        breakdown={course.ratingBreakdown}
      />

      <h3 className="mt-10 text-[17px] font-bold text-neutral-900">
        Individual Reviews:
      </h3>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
          className={`rounded-full px-4 py-2 text-[14px] transition-colors ${
            filter === null
              ? "bg-brand-lime font-semibold text-neutral-900"
              : "bg-brand-chip text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          All ratings
        </button>

        {counts.map(({ stars, count }) => {
          const active = filter === stars;

          return (
            <button
              key={stars}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(active ? null : stars)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] transition-colors ${
                active
                  ? "bg-brand-lime font-semibold text-neutral-900"
                  : "bg-brand-chip text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              <PiStarFill aria-hidden size={12} />
              {count}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-4">
          {visible.map((review) => (
            <ReviewCard
              key={`${review.name}-${review.rating}`}
              review={review}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-[15px] text-neutral-400">
          No written reviews with that rating yet.
        </p>
      )}
    </div>
  );
}
