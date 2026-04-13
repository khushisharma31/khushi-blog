import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enables React's <ViewTransition> component during route nav —
    // drives the "zoom into the quilt" morph from writing card to post.
    viewTransition: true,
  },
};

export default nextConfig;
