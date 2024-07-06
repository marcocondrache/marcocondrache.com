import { AnimatePresence } from "framer-motion";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container mx-auto max-w-[712px] px-4 py-10">
        <Navigation />

        {children}
      </main>

      <Footer />
    </>
  );
}
