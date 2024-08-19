import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

import { getPostsIndex } from "@/lib/posts";

export const runtime = "edge";

export const GET = async (
  _req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) => {
  const posts = getPostsIndex();
  const post = posts[slug];

  if (!post) return new Response("Not found", { status: 404 });

  const fontRegular = await fetch(
    new URL("../../../../fonts/switzer-og-regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontBold = await fetch(
    new URL("../../../../fonts/switzer-og-bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col bg-stone-50 p-10">
        <header tw="flex flex-row justify-between items-center">
          <div tw="h-6 w-6 bg-orange-500" />
          <span tw="text-stone-600 text-2xl">marcocondrache.com</span>
        </header>
        <main
          tw="flex grow flex-col justify-center items-center"
          style={{ gap: 20 }}
        >
          <span tw="text-6xl text-center" style={{ textWrap: "balance" }}>
            {post.title}
          </span>
          <span tw="text-stone-600 text-3xl">
            {new Intl.DateTimeFormat(undefined, { dateStyle: "full" }).format(
              new Date(post.date)
            )}
          </span>
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Switzer",
          data: fontRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Switzer",
          data: fontBold,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
};
