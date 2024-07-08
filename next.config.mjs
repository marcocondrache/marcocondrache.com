import withBundleAnalyzer from "@next/bundle-analyzer";
import withToolbar from "@vercel/toolbar/plugins/next";
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins(
  [
    withToolbar(),
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    }),
  ],
  nextConfig
);
