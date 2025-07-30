/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive complètement le cache en dev
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },
  // Force le rechargement des modules
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  }
}

module.exports = nextConfig