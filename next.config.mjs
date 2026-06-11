/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio/',
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
