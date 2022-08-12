/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: [
      "avatars.githubusercontent.com"
    ]
  }
}

module.exports = nextConfig
