import Footer from "@/app/components/footer";
import Menubar from "@/app/components/menubar";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Menubar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
