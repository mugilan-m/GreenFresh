import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns: [
     { protocol: 'https', hostname: 'cdn.dummyjson.com' },
     { protocol: 'https', hostname: 'static.thenounproject.com' },
     { protocol: 'https', hostname: 'freshcart77.myshopify.com' },
     {protocol:'https',hostname:'static1.squarespace.com'},
     {protocol:'https',hostname:'school-store.in'},
     {protocol:'https',hostname:'lh3.googleusercontent.com'}
   ],
  },
  env:{
    GOOGLE_CLIENT_ID : '51998319763-r60ceta9ljdrkpbgpims023kkmihd5su.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET :'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'
  }
};

export default nextConfig;
