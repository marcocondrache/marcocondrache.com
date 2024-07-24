import withBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    reactCompiler: true,
  },
};

export default withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    }),
  ],
  nextConfig
);
