// next-sitemap.config.js
const { getAllArticles } = require('./data/articles.js');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jaiminraval.dev',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://www.jaiminraval.dev/sitemap-0.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'monthly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/article/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/articles' || path === '/projects') {
      priority = 0.9;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    try {
      const articles = getAllArticles();
      console.log(`Found ${articles.length} articles for sitemap`);
      
      const dynamicPaths = articles.map(article => ({
        loc: `/article/${article.id}/${article.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date(article.publishDate).toISOString(),
      }));
      
      return dynamicPaths;
    } catch (error) {
      console.error('Error generating article paths:', error);
      return [];
    }
  },
};