/** @type {import('next').NextConfig} */
const nextConfig = {
  // Added configurations for static export and GitHub Pages
  output: 'export',
  basePath: '/site',
  assetPrefix: '/site/',
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig; 