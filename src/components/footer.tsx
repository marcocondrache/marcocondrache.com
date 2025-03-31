import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
// import { links } from "@/lib/links";
import { useStore } from "@nanostores/react";
import { themes, themeStore } from "@/lib/stores/theme";

export function Footer() {
  const theme = useStore(themeStore);

  return (
    <footer className="fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full max-w-[42.5rem] bottom-6 p-1 pl-4 shadow-border bg-white dark:bg-stone-900 rounded-full flex items-center justify-between">
      <a
        className="text-sm text-muted-foreground"
        href={"#"}
        target="_blank"
      >
        {/* {process.env.NEXT_PUBLIC_GIT_HASH} */}
      </a>
      <div className="flex items-center justify-center gap-1">
        <Button variant="ghost" size="icon" className="size-8 rounded-full">
          <ArrowUp className="size-4" />
        </Button>
        {/* <FooterLink href={links.x}>
          <SocialIcons.X className="size-3.5 fill-foreground" />
        </FooterLink>
        <FooterLink href={links.linkedin}>
          <SocialIcons.LinkedIn className="size-3.5 fill-foreground" />
        </FooterLink> */}

        <Button
          onClick={() => themeStore.set(theme === themes.dark ? themes.light : themes.dark)}
          className="size-8 rounded-full text-base"
          variant="ghost"
          size="icon"
        >
          <div className="size-4 rounded-full bg-stone-900 dark:bg-stone-50" />
        </Button>
      </div>
    </footer>
  );
}