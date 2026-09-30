import {
  PiBroadcast,
  PiBuildings,
  PiCamera,
  PiCode,
  PiLaptop,
  PiPenNib,
} from "react-icons/pi";

import CategoryCard from "./CategoryCard";

const categories = [
  { label: "Design", href: "/categories/design", icon: PiPenNib },
  { label: "Development", href: "/categories/development", icon: PiCode },
  { label: "IT & Software", href: "/categories/it-software", icon: PiLaptop },
  { label: "Business", href: "/categories/business", icon: PiBuildings },
  { label: "Marketing", href: "/categories/marketing", icon: PiBroadcast },
  { label: "Photography", href: "/categories/photography", icon: PiCamera },
];

export default function Categories() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <h2 className="text-center text-[30px] font-bold tracking-[-0.02em] text-neutral-900 sm:text-[36px] lg:text-[40px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="mx-auto mt-6 max-w-[980px] text-center text-[15px] leading-[1.7] text-neutral-400 sm:text-[17px]">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&rsquo;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <CategoryCard
              key={category.href}
              label={category.label}
              href={category.href}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
