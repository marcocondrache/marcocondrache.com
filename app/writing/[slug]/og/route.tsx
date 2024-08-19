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
      <div tw="h-full w-full flex flex-col justify-between bg-stone-50 p-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div tw="flex flex-row justify-between items-center">
          <div tw="h-5 w-5 bg-orange-500" />
          <span tw="text-stone-600" style={{ fontSize: 20 }}>
            marcocondrache.com
          </span>
        </div>
        <div tw="flex flex-col" style={{ gap: 20 }}>
          <span
            style={{
              fontSize: 60,
              textWrap: "balance",
              maxWidth: "70%",
            }}
          >
            {post.title}
          </span>
          <span tw="text-stone-600" style={{ fontSize: 20 }}>
            {new Intl.DateTimeFormat(undefined, { dateStyle: "full" }).format(
              new Date(post.date)
            )}
          </span>
        </div>
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
