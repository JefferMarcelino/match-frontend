/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com', 'img.shields.io'],
},
}

module.exports = nextConfig
