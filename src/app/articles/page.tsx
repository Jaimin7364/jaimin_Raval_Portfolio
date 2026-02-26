// src/app/articles/page.tsx

import Articles from "../../../components/Articles";
import Navbar from "../../../components/Navbar";
import { getAllArticles, getCategories } from "../../../data/articles";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Explore in-depth articles by Jaimin Raval covering web development, AI tools, cloud computing, programming best practices, and emerging technologies in software engineering.',
   alternates: {
    canonical: 'https://www.jaiminraval.dev/articles',
  },
  openGraph: {
    title: 'Articles | Jaimin Raval - Tech Insights & Tutorials',
    description: 'Explore in-depth articles covering web development, AI tools, cloud computing, and programming best practices.',
    url: 'https://www.jaiminraval.dev/articles',
    siteName: 'Jaimin Raval Portfolio',
    images: ['/assets/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Jaimin Raval - Tech Insights & Tutorials',
    description: 'Explore in-depth articles covering web development, AI tools, and programming best practices.',
    creator: '@JaiminRaval100',
    images: ['/assets/logo.png'],
  },
};

export default function ArticlesPage() {
    const articles = getAllArticles();
    const categories = getCategories();
    
    return (
        <>
        < Navbar />
        <Articles articles={articles} categories={categories} />
        </>
    );
}