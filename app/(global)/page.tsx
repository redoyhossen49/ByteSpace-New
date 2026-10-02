import BrandMarquee from "@/app/components/brand-marquee";
import Categories from "@/app/components/categories";
import CreatorCta from "@/app/components/creator-cta";
import Discover from "@/app/components/discover";
import Growth from "@/app/components/growth";
import Testimonials from "@/app/components/testimonials";

/* Hero is rendered by SiteShell, which pairs it with the menubar in a single
   100svh band. */
export default function Home() {
  return (
    <>
      <BrandMarquee />
      <Discover />
      <Categories />
      <Growth />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
