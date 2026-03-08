import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www canonical redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.prycehedrick.com" }],
        destination: "https://prycehedrick.com/:path*",
        permanent: true,
      },
      // Old blog posts → home (301 preserves link equity, no dead ends)
      {
        source: "/blog/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      // /services and /about used to be #anchors on the live site — no redirect needed
      // /free-audit is new — no old URL to redirect from
    ];
  },
};

export default nextConfig;
