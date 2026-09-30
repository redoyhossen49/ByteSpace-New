import Image from "next/image";
import Link from "next/link";
import { PiStarFill, PiStar } from "react-icons/pi";

import type { Review } from "@/app/components/courses/data";

type ReviewCardProps = {
  review: Review;
  /** Set false when the card already sits on the author's own profile. */
  linkAuthor?: boolean;
};

export default function ReviewCard({
  review,
  linkAuthor = true,
}: ReviewCardProps) {
  return (
    <li className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={review.avatar.src}
            alt={review.avatar.alt}
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full object-cover"
          />

          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold text-neutral-900">
              {linkAuthor ? (
                <Link
                  href={`/creators/${review.slug}`}
                  className="transition-opacity hover:opacity-80"
                >
                  {review.name}
                </Link>
              ) : (
                review.name
              )}
            </p>
            <p className="text-[13px] text-neutral-400">{review.role}</p>
          </div>
        </div>

        <p className="shrink-0 text-[13px] text-neutral-400">a year ago</p>
      </div>

      <div className="mt-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) =>
          index < review.rating ? (
            <PiStarFill
              key={index}
              aria-hidden
              size={14}
              className="text-neutral-900"
            />
          ) : (
            <PiStar
              key={index}
              aria-hidden
              size={14}
              className="text-neutral-300"
            />
          ),
        )}
      </div>

      <p className="mt-3 text-[14px] leading-[1.7] text-neutral-500">
        {review.text}
      </p>
    </li>
  );
}
