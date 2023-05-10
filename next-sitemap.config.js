/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://marccortese.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/404", "/artist/*", "/works/*"],
};