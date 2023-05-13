/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://marccortese.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/works/*', '/it/works/*', '/artists/[0-9]*', '/it/artists/*'],
  alternateUrls: [
    {
      href: `${siteUrl}/it`,
      hreflang: "it",
    },
    {
      href: `${siteUrl}`,
      hreflang: "en",
    },
  ]
};