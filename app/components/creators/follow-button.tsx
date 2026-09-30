"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";

export default function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={following}
      onClick={() => setFollowing((current) => !current)}
      className={
        following
          ? "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-brand-lime px-8 text-[15px] font-semibold text-brand-lime transition-colors hover:bg-white/10 sm:w-auto"
          : "h-12 w-full rounded-full bg-brand-lime px-8 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90 sm:w-auto"
      }
    >
      {following ? (
        <>
          <PiCheck aria-hidden size={16} />
          Following
        </>
      ) : (
        "Follow"
      )}
    </button>
  );
}
