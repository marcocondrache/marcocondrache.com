import type React from "react";
import * as runtime from "react/jsx-runtime";

export function useMDX(content: string) {
  const fn = new Function(content);

  return fn({ ...runtime }).default;
}

export interface MDXProps {
  content: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function MDXContent({ content, components }: MDXProps) {
  const Component = useMDX(content);

  return <Component components={components} />;
}
