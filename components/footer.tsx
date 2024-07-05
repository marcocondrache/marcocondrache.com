import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Inspiration } from "./inspiration";

export function Footer() {
  return (
    <footer>
      <Drawer>
        <DrawerTrigger
          className={cn(
            buttonVariants({ variant: "outline" }),
            "fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[calc(712px-2rem)] w-full",
            "justify-between font-normal px-3 py-1.5 h-[unset] transition-all"
          )}
        >
          <Inspiration />
          <span>2024</span>
        </DrawerTrigger>
        <DrawerContent>
          <div className="container max-w-[712px] mx-auto py-10 px-4">
            <h1 className="text-2xl font-serif italic">mmc</h1>
          </div>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
