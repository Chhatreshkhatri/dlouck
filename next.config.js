/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  // assetPrefix: isProd ? '/dlouck/' : '', //only for github pages url not for custom domain
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig;