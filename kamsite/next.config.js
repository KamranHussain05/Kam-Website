/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const isCI = process.env.CI === 'true' // GitHub Actions sets CI=true
const repoName = 'Kam-Website'

// The deployed site (custom domain) is served from the root. A local production
// build without CI=true keeps the legacy repository base path.
const basePath = isProd && !isCI ? `/${repoName}` : ''

const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  basePath,
  // Exposed so string asset URLs and forwarding pages can include the base path.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
}

module.exports = nextConfig
