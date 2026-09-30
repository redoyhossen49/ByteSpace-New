"use client";

import { useEffect, useState } from "react";
import { PiCheck, PiShareNetwork } from "react-icons/pi";

/* Copies the current URL, falling back to nothing else: a plain button keeps
   the hero free of another round trip just to share a link. */
export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-brand-lime px-6 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
    >
      {copied ? (
        <PiCheck aria-hidden size={16} />
      ) : (
        <PiShareNetwork aria-hidden size={16} />
      )}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
