import BrandMarquee from "@/app/components/brand-marquee";
import Hero from "@/app/components/hero";
import Menubar from "@/app/components/menubar";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Menubar />
      <Hero />
      <BrandMarquee />
    </div>
  );
}
