import SiteShell from "@/app/components/site-shell";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
