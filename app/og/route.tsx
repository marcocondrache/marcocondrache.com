import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title");

  /*const font = fetch(new URL("../../fonts/switzer.ttf", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );*/

  return new ImageResponse(<div></div>, {
    width: 1200,
    height: 630,
    /*fonts: [
      {
        name: "Switzer",
        data: await font,
        style: "normal",
        weight: 400,
      },
    ],*/
  });
};
