// next-sitemap.config.js
const { getAllArticles } = require('./data/articles.js');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jaiminraval.dev',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const articles = getAllArticles();
    const dynamicPaths = articles.map(article => ({
      loc: `/article/${article.id}/${article.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
    }));
    
    return dynamicPaths;
  },
};