"use client";

import { usePathname } from "next/navigation";

import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";
import Menubar from "@/app/components/menubar";

type SiteShellProps = {
  children: React.ReactNode;
};

/* The home hero lives here rather than in page.tsx because it has to share one
   100svh band with the menubar: rendering both inside a single fixed-height
   column is what guarantees the pair fills exactly one screen, with no scroll
   between them. Every other route renders only the menubar above its content. */
export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-full flex-1 flex-col">
      {isHome ? (
        <div className="flex h-[100svh] flex-col overflow-hidden">
          <Menubar />
          <Hero />
        </div>
      ) : (
        <Menubar />
      )}

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}