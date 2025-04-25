/** @type {import('next').NextConfig} */
const nextConfig = {
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