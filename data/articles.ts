import { Article } from '../components/ArticleCard';

export const articles: Article[] = [
  {
    id: '1',
    title: 'GPT-5 Is Coming in July 2025 - And Everything Will Change',
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
    imageUrl: 'data:image/jpeg;base64,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',
    slug: 'mastering-aws-bedrock',
    blogurl: '/articles/aws-bedrock-service.md'
  },
  // {
  //   id: '2',
  //   title: 'Building Scalable APIs with Node.js and Express',
  //   excerpt: 'A comprehensive guide to building robust, scalable APIs using Node.js and Express. Cover authentication, error handling, database integration, and deployment best practices.',
  //   author: 'Michael Chen',
  //   publishDate: 'July 12, 2025',
  //   readTime: '12 min read',
  //   category: 'Backend',
  //   imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
  //   slug: 'scalable-apis-nodejs-express',
  //   blogurl:'#'
  // },
  // {
  //   id: '3',
  //   title: 'CSS Grid vs Flexbox: When to Use What',
  //   excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method. Practical examples and real-world use cases included.',
  //   author: 'Emily Rodriguez',
  //   publishDate: 'July 10, 2025',
  //   readTime: '6 min read',
  //   category: 'CSS',
  //   imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  //   slug: 'css-grid-vs-flexbox',
  //   blogurl:'#'
  // },
  // {
  //   id: '4',
  //   title: 'TypeScript Tips and Tricks for Better Code',
  //   excerpt: 'Advanced TypeScript techniques to write more maintainable and type-safe code. Learn about utility types, conditional types, and advanced patterns.',
  //   author: 'David Kim',
  //   publishDate: 'July 8, 2025',
  //   readTime: '10 min read',
  //   category: 'TypeScript',
  //   imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
  //   slug: 'typescript-tips-tricks',
  //   blogurl:'#'
  // },
  // {
  //   id: '5',
  //   title: 'Modern JavaScript: ES2024 Features You Should Know',
  //   excerpt: 'Discover the latest ECMAScript 2024 features that will improve your JavaScript development workflow. From new array methods to enhanced async capabilities.',
  //   author: 'Alex Thompson',
  //   publishDate: 'July 5, 2025',
  //   readTime: '7 min read',
  //   category: 'JavaScript',
  //   imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80',
  //   slug: 'modern-javascript-es2024',
  //   blogurl:'#'
  // },
  // {
  //   id: '6',
  //   title: 'State Management in React: Redux vs Context API vs Zustand',
  //   excerpt: 'A detailed comparison of popular state management solutions in React. Learn when to use each approach and see practical implementation examples.',
  //   author: 'Lisa Wang',
  //   publishDate: 'July 3, 2025',
  //   readTime: '15 min read',
  //   category: 'React',
  //   imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  //   slug: 'react-state-management-comparison',
  //   blogurl:'#'
  // },
  // {
  //   id: '7',
  //   title: 'Web Performance Optimization: Core Web Vitals Guide',
  //   excerpt: 'Master Core Web Vitals and learn practical techniques to optimize your website\'s performance. Improve loading times, interactivity, and visual stability.',
  //   author: 'James Miller',
  //   publishDate: 'June 30, 2025',
  //   readTime: '11 min read',
  //   category: 'Performance',
  //   imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  //   slug: 'web-performance-core-vitals',
  //   blogurl:'#'
  // },
  // {
  //   id: '8',
  //   title: 'Docker for Frontend Developers: A Practical Introduction',
  //   excerpt: 'Learn how to containerize your frontend applications with Docker. From basic concepts to deployment strategies for React, Vue, and Angular apps.',
  //   author: 'Maria Garcia',
  //   publishDate: 'June 28, 2025',
  //   readTime: '9 min read',
  //   category: 'DevOps',
  //   imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
  //   slug: 'docker-frontend-developers',
  //   blogurl:'#'
  // },
  // {
  //   id: '9',
  //   title: 'Accessibility in Web Development: Beyond the Basics',
  //   excerpt: 'Go beyond basic accessibility requirements and create truly inclusive web experiences. Learn about ARIA, semantic HTML, and testing strategies.',
  //   author: 'Robert Lee',
  //   publishDate: 'June 25, 2025',
  //   readTime: '13 min read',
  //   category: 'Accessibility',
  //   imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
  //   slug: 'web-accessibility-beyond-basics',
  //   blogurl:'#'
  // }
];

export const categories = [
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

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'All') {
    return articles;
  }
  return articles.filter(article => article.category === category);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};