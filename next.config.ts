import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "cdnc.heyzine.com" }],
  },
  allowedDevOrigins: ["172.19.81.144"],
  // Vercel CI/CD connected
};

export default nextConfig;
