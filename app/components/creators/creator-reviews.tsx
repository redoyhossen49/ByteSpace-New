import Container from "@/app/components/container";
import type { Review } from "@/app/components/courses/review-pool";
import ReviewCard from "@/app/components/courses/detail/review-card";

type CreatorReviewsProps = {
  reviews: Review[];
};

/* The reviews a creator has written, shown on their own profile. */
export default function CreatorReviews({ reviews }: CreatorReviewsProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-white pb-14">
      <Container>
        <h2 className="text-[22px] font-bold tracking-[-0.02em] text-neutral-900">
          Reviews by this creator
        </h2>

        <ul className="mt-6 flex flex-col gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} linkAuthor={false} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
