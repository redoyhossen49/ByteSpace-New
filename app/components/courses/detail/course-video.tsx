"use client";

import Image from "next/image";
import { useState } from "react";

type CourseVideoProps = {
  /** YouTube video id, without the watch/embed prefix. */
  videoId: string;
  title: string;
  poster: { src: string; width: number; height: number; alt: string };
};

/* Shows a still until the reader presses play, then swaps the embed in so the
   video plays inside the same box instead of opening a new tab. */
export default function CourseVideo({
  videoId,
  title,
  poster,
}: CourseVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-neutral-100">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={poster.src}
            alt={poster.alt}
            width={poster.width}
            height={poster.height}
            priority
            className="size-full object-cover"
          />

          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play the preview of ${title}`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/play-btn.png"
              alt=""
              width={104}
              height={104}
              aria-hidden
              className="w-[64px] transition-transform duration-200 hover:scale-110 lg:w-[76px]"
            />
          </button>
        </>
      )}
    </div>
  );
}
