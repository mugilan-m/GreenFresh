import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns: [
     { protocol: 'https', hostname: 'cdn.dummyjson.com' },
     { protocol: 'https', hostname: 'static.thenounproject.com' },
     { protocol: 'https', hostname: 'freshcart77.myshopify.com' },
     {protocol:'https',hostname:'static1.squarespace.com'}
   ],
  },
};

export default nextConfig;
