import { links } from '@/lib/links';
import { themeStore, themes } from '@/lib/stores/theme';
import { cn } from '@/lib/utils';
import { useStore } from '@nanostores/react';
import { ArrowUp } from 'lucide-react';
import { SocialIcons } from './icons';
import { Button, buttonVariants } from './ui/button';

export function Footer() {
  const theme = useStore(themeStore);

  return (
    <footer className="-translate-x-1/2 fixed bottom-6 left-1/2 flex w-[calc(100%-2rem)] max-w-[42.5rem] items-center justify-between rounded-full bg-white p-1 pl-4 shadow-border md:w-full dark:bg-stone-900">
      <a
        href={'/'}
        className="text-muted-foreground text-sm"
        target="_blank"
        rel="noreferrer"
      >
        {/* {process.env.NEXT_PUBLIC_GIT_HASH} */}
      </a>
      <div className="flex items-center justify-center gap-1">
        <Button variant="ghost" size="icon" className="size-8 rounded-full">
          <ArrowUp className="size-4" />
        </Button>

        <a
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 rounded-full'
          )}
          href={links.x}
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcons.X className="size-3.5 fill-foreground" />
        </a>

        <a
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-8 rounded-full'
          )}
          href={links.x}
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcons.Linkedin className="size-3.5 fill-foreground" />
        </a>

        <Button
          onClick={() =>
            themeStore.set(theme === themes.dark ? themes.light : themes.dark)
          }
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
