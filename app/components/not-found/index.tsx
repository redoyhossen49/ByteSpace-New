import Link from "next/link";

import Container from "@/app/components/container";
import GridBackdrop from "@/app/components/grid-backdrop";

const heading = ["The page you are looking", "for doesn't exist"];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-purple text-white">
      <GridBackdrop className="-z-10" />

      <Container className="flex flex-col items-center pt-24 pb-24 text-center lg:pt-28 lg:pb-28">
        <p
          aria-hidden
          className="bg-linear-to-b from-brand-lime to-[#2c7a54] bg-clip-text text-[clamp(6rem,30vw,28rem)] leading-[0.78] font-bold text-transparent select-none"
        >
          404
        </p>

        <h1 className="-mt-6 text-[28px] leading-[1.12] font-bold tracking-[-0.02em] text-white sm:-mt-8 sm:text-[40px] lg:-mt-10 lg:text-[60px]">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-[520px] text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-brand-lime px-8 text-[16px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
