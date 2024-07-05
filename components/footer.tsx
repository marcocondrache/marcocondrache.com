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
            "fixed bottom-5 left-1/2 z-40 w-full max-w-[calc(712px-2rem)] -translate-x-1/2",
            "h-[unset] justify-between px-3 py-1.5 font-normal transition-all"
          )}
        >
          <Inspiration />
          <span>2024</span>
        </DrawerTrigger>
        <DrawerContent>
          <div className="container mx-auto max-w-[712px] px-4 py-10">
            <h1 className="font-serif text-2xl italic">mmc</h1>
          </div>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
