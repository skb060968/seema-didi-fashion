/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/seema-didi-fashion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/seema-didi-fashion/' : '',
}

module.exports = nextConfig