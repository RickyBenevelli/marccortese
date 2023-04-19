/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
