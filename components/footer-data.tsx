"use client";

import { usePathname } from "next/navigation";

import { useMounted } from "@/hooks/use-mounted";

const singularize = (data: number, base: string) => {
  return data === 1 ? `${data} ${base}` : `${data} ${base}s`;
};

const fetchData = (path: string) => {
  return Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(
    new Date()
  );
};

export function FooterData() {
  const isMounted = useMounted();
  const pathname = usePathname();
  const data = fetchData(pathname);

  if (!isMounted) return null;

  return <span className="block">{data}</span>;
}
