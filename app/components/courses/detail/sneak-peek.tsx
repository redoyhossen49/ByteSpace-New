import Image from "next/image";

/* The four stills under the course description, in the order the design lists
   them. Each keeps its own intrinsic size and is cropped to the shared ratio. */
const stills = [
  {
    src: "/sneak-peak-1.jpg",
    width: 480,
    height: 320,
    alt: "Sketching a wireframe layout by hand",
  },
  {
    src: "/sneak-peak-2.jpg",
    width: 480,
    height: 270,
    alt: "Working through a design in code and Figma",
  },
  {
    src: "/sneak-peak-3.jpg",
    width: 384,
    height: 480,
    alt: "Reviewing a design system on screen",
  },
  {
    src: "/sneak-peak-4.jpg",
    width: 480,
    height: 309,
    alt: "Previewing the finished work on mobile",
  },
];

export default function SneakPeek() {
  return (
    <section className="mt-12">
      <h2 className="text-[19px] font-bold text-neutral-900">Sneak Peek</h2>

      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stills.map((still) => (
          <li
            key={still.src}
            className="overflow-hidden rounded-xl bg-brand-chip"
          >
            <Image
              src={still.src}
              alt={still.alt}
              width={still.width}
              height={still.height}
              className="aspect-[16/10] w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
