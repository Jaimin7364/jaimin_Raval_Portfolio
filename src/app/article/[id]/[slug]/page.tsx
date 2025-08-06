// src/app/article/[id]/[slug]/page.tsx
import ArticleDetail from '../../../../../components/article_detail';
import Navbar from '../../../../../components/Navbar';

// Define the props interface for the page
interface ArticlePageProps {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}

// The metadata function - now properly awaiting params
export async function generateMetadata({ params }: ArticlePageProps) {
  // Await the params before accessing its properties
  const { slug } = await params;
  
  return {
    title: `${decodeURIComponent(slug).replace(/-/g, ' ')} | Jaimin Raval`,
    description: `Read the article: ${slug.replace(/-/g, ' ')} by Jaimin Raval.`,
  };
}

// This is the main page component for the route
export default async function ArticlePage({ params }: ArticlePageProps) {
  // Await the params before destructuring
  const { id, slug } = await params;

  return (
    <>
      <Navbar />
      <ArticleDetail id={id} slug={slug} />
    </>
  );
}