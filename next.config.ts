import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/clases-marzo", destination: "/cursomarzo", permanent: true }];
  },
};

export default nextConfig;
