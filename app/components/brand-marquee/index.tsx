import Image from "next/image";

const brands = [
  { src: "/brand1.png", width: 168, height: 41, alt: "Brand one" },
  { src: "/brand2.png", width: 170, height: 41, alt: "Brand two" },
  { src: "/brand3.png", width: 170, height: 41, alt: "Brand three" },
  { src: "/brand4.png", width: 169, height: 42, alt: "Brand four" },
  { src: "/brand5.png", width: 167, height: 41, alt: "Brand five" },
];

const copies = 6;

export default function BrandMarquee() {
  return (
    <section
      aria-label="Brands"
      className="relative w-full overflow-hidden bg-[#F5F5F6] py-12 sm:py-16 lg:py-20"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {Array.from({ length: copies }, (_, copy) => (
          <div
            key={copy}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center gap-[clamp(40px,7vw,112px)] pr-[clamp(40px,7vw,112px)]"
          >
            {brands.map((brand) => (
              <Image
                key={brand.src}
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="h-auto w-[clamp(112px,13vw,168px)]"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
