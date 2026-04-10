import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Cache Strategy:
// - All static assets (images, videos) are cached for 1 year (31536000 seconds)
// - This minimizes bandwidth usage on Vercel
// - Cache headers are set in vercel.json
