import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [{ hostname: "images.unsplash.com", pathname: "/**" }],
    },
};

export default nextConfig;
