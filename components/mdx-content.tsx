import React from "react";
import * as runtime from "react/jsx-runtime";

import { CraftContainer } from "./layout/craft-container";

export function MDXFragment({ children }: React.PropsWithChildren) {
  let group: React.ReactNode[] = [];

  const items = React.Children.toArray(children);
  const processedChildren: React.ReactNode[] = [];

  function cut(child: React.ReactNode, index: number) {
    processedChildren.push(
      <div className="markdown" key={`group-${index}`}>
        {group}
      </div>
    );

    group = [];
    processedChildren.push(child);
  }

  while (items.length) {
    const index = items.length;
    const child = items.shift();
    if (React.isValidElement(child) && child.type === CraftContainer)
      cut(child, index);
    else group.push(child);
  }

  cut(null, -1);
  return <>{processedChildren}</>;
}

export function useMDX(content: string) {
  const fn = new Function(content);

  return fn({ ...runtime, Fragment: MDXFragment }).default;
}

export interface MDXProps {
  content: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function MDXContent({ content, components }: MDXProps) {
  const Component = useMDX(content);

  return <Component components={components} />;
}
