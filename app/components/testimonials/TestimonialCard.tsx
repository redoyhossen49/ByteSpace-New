import Image from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

type TestimonialCardProps = Testimonial & {
  className?: string;
};

export default function TestimonialCard({
  name,
  role,
  quote,
  avatar,
  className = "",
}: TestimonialCardProps) {
  return (
    <figure
      className={`flex h-full flex-col rounded-[20px] border border-white/60 bg-white/45 p-6 backdrop-blur-md ${className}`}
    >
      <Image
        src={avatar.src}
        alt={avatar.alt}
        width={avatar.width}
        height={avatar.height}
        className="size-[92px] rounded-full object-cover"
      />

      <figcaption className="mt-7">
        <p className="text-[20px] font-bold tracking-[-0.01em] text-neutral-900">
          {name}
        </p>
        <p className="mt-2.5 text-[16px] text-brand-blue">{role}</p>
      </figcaption>

      <blockquote className="mt-9 text-[16px] leading-[1.9] text-neutral-600">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
}
