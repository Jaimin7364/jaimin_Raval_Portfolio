// components/ArticleDetail.tsx - Server Component (no 'use client')
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { articles } from '../data/articles';
import ArticleClient from './ArticleClient';

// This component receives simple strings as props
interface ArticleDetailProps {
  id: string;
  slug: string;
}

// This is an async Server Component, so it can read files
export default async function ArticleDetail({ id, slug }: ArticleDetailProps) {
  // Find the article using the props
  const article = articles.find((a) => a.id === id && a.slug === slug);

  // If no article is found, render the 404 page
  if (!article || !article.blogurl) {
    notFound();
  }

  // Define the path to the markdown file in your /public folder
  const filePath = path.join(process.cwd(), 'public', article.blogurl);
  let contentHtml = '';

  // Read and process the markdown file
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    const processedContent = await remark().use(html).process(content);
    contentHtml = processedContent.toString();
  } catch (error) {
    console.error('Error reading or processing markdown file:', error);
    // If the file is missing or there's an error, show a 404
    notFound();
  }

  // Clean the article object to remove any functions or non-serializable data
  const cleanArticle = {
    id: article.id,
    title: article.title,
    author: article.author,
    publishDate: article.publishDate,
    readTime: article.readTime,
    imageUrl: article.imageUrl,
    slug: article.slug,
    blogurl: article.blogurl
  };

  // Pass the cleaned article and processed content to the client component
  return <ArticleClient article={cleanArticle} contentHtml={contentHtml} />;
}