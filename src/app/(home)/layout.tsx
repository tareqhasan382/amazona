import Footer from "@/components/ui/shared/footer";
import Header from "@/components/ui/shared/header";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
