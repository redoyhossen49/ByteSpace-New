import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import BrandLogo from "@/app/components/brand-logo";
import Container from "@/app/components/container";

type AuthShowcaseProps = {
  heading: string;
  description: string;
  children: ReactNode;
};

export default function AuthShowcase({
  heading,
  description,
  children,
}: AuthShowcaseProps) {
  return (
    <div className="flex min-h-svh w-full flex-col bg-brand-purple text-white">
      {/* Logo-only bar: the auth pages sit outside the global shell, so the
          brand mark is rendered here on the same purple as the page. */}
      <header className="w-full">
        <Container className="flex h-20 items-center">
          <Link href="/" aria-label="ByteSpace home" className="shrink-0">
            <BrandLogo
              tone="light"
              priority
              className="w-[150px] lg:w-[171px]"
            />
          </Link>
        </Container>
      </header>

      <section className="flex w-full flex-1 flex-col justify-center overflow-hidden py-16 lg:py-0">
        {/* Stacked on small screens the form comes before the artwork, so the
            fields stay near the top of the page; from lg the two columns sit
            side by side, with the form spanning both rows of the left column. */}
        <Container className="grid items-start gap-14 lg:grid-cols-[1fr_45%] lg:gap-x-12 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="text-[26px] font-bold tracking-[-0.02em]">
              {heading}
            </h1>

            <p className="mt-5 max-w-[600px] text-[16px] leading-[1.6] text-white/80">
              {description}
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            {children}
          </div>

          <Image
            src="/signup-img.png"
            alt="ByteSpace course cards with student reviews"
            width={552}
            height={586}
            priority
            className="w-full max-w-[660px] lg:col-start-1 lg:row-start-2"
          />
        </Container>
      </section>
    </div>
  );
}
