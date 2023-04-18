/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
