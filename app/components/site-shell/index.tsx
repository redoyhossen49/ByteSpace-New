import Footer from "@/app/components/footer";
import Menubar from "@/app/components/menubar";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Menubar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
