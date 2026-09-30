import Image from "next/image";
import Link from "next/link";

const heading = ["Unlock Your Potential as a", "Creator with ByteSpace"];

export default function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-purple text-white">
      <Image
        src="/unlock-potential.png"
        alt=""
        width={1440}
        height={488}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-center"
      />

      <div className="mx-auto flex min-h-[440px] w-full max-w-[1240px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:min-h-[488px] lg:py-24">
        <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[44px]">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mt-12 max-w-[1000px] text-[15px] leading-[1.9] text-white/80 sm:text-[17px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/creators"
          className="mt-10 inline-flex h-11 items-center justify-center rounded-full bg-brand-lime px-8 text-[16px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
