import BrandMarquee from "@/app/components/brand-marquee";
import Categories from "@/app/components/categories";
import Discover from "@/app/components/discover";
import Hero from "@/app/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Discover />
      <Categories />
    </>
  );
}
