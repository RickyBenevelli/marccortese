/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://marccortese.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/404", "*artists/*", "*/works/*", "!/works"],
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