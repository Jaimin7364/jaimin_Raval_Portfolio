// import { Article } from '../components/ArticleCard';

// export const articles: Article[] = [
//   {
//     id: '1',
//     title: 'GPT-5 Is Coming in July 2025 - And Everything Will Change',
//     excerpt: 'Discover how GPT-5 will revolutionize the way we work, create, and connect in a hybrid world. From smarter workflows to deeper personalization, everything is about to change.',
//     author: 'Jaimin Raval',
//     publishDate: 'July 26, 2025',
//     readTime: '15 min read',
//     category: 'Artificial Intelligence',
//     imageUrl: 'https://tech.news.am/static/news/b/2025/07/5843.jpg',
//     slug: 'gpt5-coming-july-2025',
//     blogurl: '/articles/mastering-react-state.md',
//   },
//   {
//     id: '2',
//     title: 'Mastering AWS Bedrock: The Future of Generative AI Infrastructure',
//     excerpt: 'Dive into AWS Bedrock — a serverless, fully-managed service that brings powerful foundation models from top AI providers directly to your applications without needing ML infrastructure management.',
//     author: 'Jaimin Raval',
//     publishDate: 'August 6, 2025',
//     readTime: '15 min read',
//     category: 'Cloud Computing',
//     imageUrl: 'https://i.ytimg.com/vi/P_ecIGu3xn0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcVWJs5a-Yl93vQJeOb9LWdc2d1g',
//     slug: 'mastering-aws-bedrock',
//     blogurl: '/articles/aws-bedrock-service.md'
//   },
 
// ];

// export const categories = [
//   'All',
//   'React',
//   'JavaScript',
//   'TypeScript',
//   'CSS',
//   'Backend',
//   'Performance',
//   'DevOps',
//   'Accessibility',
//   'Artificial Intelligence',

//   'Cloud Computing'
// ];

// export const getArticlesByCategory = (category: string): Article[] => {
//   if (category === 'All') {
//     return articles;
//   }
//   return articles.filter(article => article.category === category);
// };

// export const getArticleBySlug = (slug: string): Article | undefined => {
//   return articles.find(article => article.slug === slug);
// };

// data/articles.js
const articles = [
  {
    id: '1',
    title: 'GPT-5 Is Coming in July 2025 - And Everything Will Change',
    excerpt: 'Discover how GPT-5 will revolutionize the way we work, create, and connect in a hybrid world. From smarter workflows to deeper personalization, everything is about to change.',
    author: 'Jaimin Raval',
    publishDate: 'July 26, 2025',
    readTime: '15 min read',
    category: 'Artificial Intelligence',
    imageUrl: 'https://tech.news.am/static/news/b/2025/07/5843.jpg',
    slug: 'gpt5-coming-july-2025',
    blogurl: '/articles/mastering-react-state.md',
  },
  {
    id: '2',
    title: 'Mastering AWS Bedrock: The Future of Generative AI Infrastructure',
    excerpt: 'Dive into AWS Bedrock — a serverless, fully-managed service that brings powerful foundation models from top AI providers directly to your applications without needing ML infrastructure management.',
    author: 'Jaimin Raval',
    publishDate: 'August 6, 2025',
    readTime: '15 min read',
    category: 'Cloud Computing',
    imageUrl: 'https://i.ytimg.com/vi/P_ecIGu3xn0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcVWJs5a-Yl93vQJeOb9LWdc2d1g',
    slug: 'mastering-aws-bedrock',
    blogurl: '/articles/aws-bedrock-service.md'
  },
];

const categories = [
  'All',
  'React',
  'JavaScript',
  'TypeScript',
  'CSS',
  'Backend',
  'Performance',
  'DevOps',
  'Accessibility',
  'Artificial Intelligence',
  'Cloud Computing'
];

const getArticlesByCategory = (category) => {
  if (category === 'All') {
    return articles;
  }
  return articles.filter(article => article.category === category);
};

const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug);
};

module.exports = {
  articles,
  categories,
  getArticlesByCategory,
  getArticleBySlug
};