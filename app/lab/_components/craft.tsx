import { Craft as CraftType } from "@/content";

import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";

export interface CraftProps extends React.ComponentProps<"article"> {
  craft: CraftType;
}

export function Craft({ craft, className, children, ...props }: CraftProps) {
  return (
    <article className={cn("space-y-6", className)} {...props}>
      <div className="flex flex-col space-y-0.5">
        <h3 className="text-lg">{craft.title}</h3>
        <p className="truncate text-sm text-stone-500">{craft.summary}</p>
      </div>
      {children}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          {craft.tags.map((tag) => (
            <div
              key={tag + craft.slug}
              className="h-fit rounded-md bg-stone-200/30 px-2 py-[2px] text-xs leading-5 text-black/60 dark:bg-stone-800 dark:text-stone-300"
            >
              {tag}
            </div>
          ))}
        </div>
        <ExternalLink href={craft.link.url}>{craft.link.text}</ExternalLink>
      </div>
    </article>
  );
}
