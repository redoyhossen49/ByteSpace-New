"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  variant?: "chip" | "link";
  className?: string;
};

export default function Badge({
  children,
  active = false,
  onClick,
  href,
  variant = "chip",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full text-base leading-none transition-colors";

  if (variant === "link") {
    const linkClass = `${base} shrink-0 px-1 font-medium text-brand-purple hover:underline ${className}`;

    return href ? (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    ) : (
      <button type="button" onClick={onClick} className={linkClass}>
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`${base} shrink-0 px-4 py-3.5 ${
        active
          ? "bg-brand-lime font-semibold text-neutral-900"
          : "bg-brand-chip text-neutral-800 hover:bg-neutral-200"
      } ${className}`}
    >
      {children}
    </button>
  );
}
