import Image from "next/image";
import Link from "next/link";
import { PiChartBar, PiStarFill } from "react-icons/pi";

import AvatarStack, { type Avatar } from "@/app/components/avatar-stack";
import MetaPill from "./MetaPill";

type CourseCardProps = {
  title: string;
  href: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  author: string;
  authorHref?: string;
  rating: number;
  level: string;
  lessons: string;
  duration: string;
  comments: string;
  studentsLabel: string;
  price: string;
  priceSuffix?: string;
  avatars: Avatar[];
  /** Preload the image - the first card of a listing sits in the viewport
      and becomes the Largest Contentful Paint element. */
  priority?: boolean;
  className?: string;
};

export default function CourseCard({
  title,
  href,
  image,
  author,
  authorHref = "#",
  rating,
  level,
  lessons,
  duration,
  comments,
  studentsLabel,
  price,
  priceSuffix = "/lifetime",
  avatars,
  priority = false,
  className = "",
}: CourseCardProps) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(12,4,54,0.35)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className="aspect-[355/208] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1.5">
          <MetaPill>{lessons}</MetaPill>
          <MetaPill>{duration}</MetaPill>
          <MetaPill>{comments}</MetaPill>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="truncate text-[19px] font-bold text-neutral-900">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>

        <span className="flex shrink-0 items-center gap-1 text-[15px] text-neutral-400">
          {rating.toFixed(1)}
          <PiStarFill aria-hidden size={14} />
        </span>
      </div>

      <p className="mt-1 text-left text-[12px] text-neutral-400">
        by{" "}
        <Link href={authorHref} className="text-[#3b5bdb] hover:underline">
          {author}
        </Link>
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-chip px-3 py-2 text-[12px] text-neutral-600">
          <PiChartBar aria-hidden size={13} />
          {level}
        </span>

        <AvatarStack
          avatars={avatars}
          overflowLabel={studentsLabel}
          size={30}
        />
      </div>

      <p className="mt-4 text-left text-[20px] font-bold text-brand-purple">
        {price}
        <span className="text-[12px] font-normal text-neutral-400">
          {priceSuffix}
        </span>
      </p>
    </article>
  );
}
