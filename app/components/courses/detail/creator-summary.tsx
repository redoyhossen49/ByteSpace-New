import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/app/components/courses/data";
import {
  creator,
  formatCreatorName,
  getCreatorByByline,
} from "@/app/components/creators/data";

type CreatorSummaryProps = {
  course: Course;
};

/* The studio block at the foot of the enrolment card. */
export default function CreatorSummary({ course }: CreatorSummaryProps) {
  const profile = getCreatorByByline(course.author);
  const name = profile?.name ?? formatCreatorName(course.author);
  const avatar = profile?.avatar ?? creator.avatar;

  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="text-[15px] font-bold text-neutral-900">{name}</p>
          <p className="text-[14px] text-neutral-500">Professional Creator</p>
        </div>
      </div>

      <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <Link
        href="/creators"
        className="mt-4 inline-flex h-10 items-center rounded-full border border-neutral-300 px-5 text-[14px] font-medium text-neutral-800 transition-colors hover:border-neutral-500"
      >
        See Full Profile
      </Link>
    </div>
  );
}
