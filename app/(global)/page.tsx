import BrandMarquee from "@/app/components/brand-marquee";
import Categories from "@/app/components/categories";
import CreatorCta from "@/app/components/creator-cta";
import Discover from "@/app/components/discover";
import Hero from "@/app/components/hero";
import Testimonials from "@/app/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Discover />
      <Categories />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
