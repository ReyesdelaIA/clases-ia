import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/clases-marzo", destination: "/cursomarzo", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://reyesia.com https://www.reyesia.com",
          },
        ],
      },
      {
        source: "/embed/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://reyesia.com https://www.reyesia.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
