/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'Kam-Website' // Your GitHub repository name

const nextConfig = {
  output: 'export', // Ensures static export
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  // Set basePath only for production builds on GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  // Optional: Set assetPrefix if basePath doesn't cover all assets (usually not needed with basePath)
  // assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true, // Optional: Consistent URL structure
}

module.exports = nextConfig 