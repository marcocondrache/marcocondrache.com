import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container relative max-w-6xl py-10">
        <div className="grid grid-flow-row grid-cols-1 gap-y-8 md:grid-cols-[1fr_42.5rem_1fr]">
          <Navigation className="pb-4 pt-10 md:col-start-2" />

          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
