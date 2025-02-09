import type { NextConfig } from "next";
import { execSync } from "node:child_process";

const getGitHash = () =>
  execSync('git log --pretty=format:"%h" -n1').toString().trim();

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
  env: {
    NEXT_PUBLIC_GIT_HASH: getGitHash(),
  },
};

export default nextConfig;
