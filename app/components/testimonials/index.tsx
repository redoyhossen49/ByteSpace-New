import Image from "next/image";

import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const heading = ["Discover What Our", "Community Is Saying"];

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: {
      src: "/sarah.png",
      width: 200,
      height: 200,
      alt: "Sarah M.",
    },
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: {
      src: "/james.png",
      width: 200,
      height: 200,
      alt: "James L.",
    },
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: {
      src: "/alex.png",
      width: 200,
      height: 200,
      alt: "Alex B.",
    },
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-mist">
      <Image
        src="/testimonial-bg.png"
        alt=""
        width={1507}
        height={820}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-center"
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-16">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-[40px] lg:text-[48px]">
            {heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="max-w-[600px] text-[15px] leading-[1.95] text-neutral-500 sm:text-[17px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on our
            platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
