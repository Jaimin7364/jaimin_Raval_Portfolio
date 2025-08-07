// app/article/[id]/[slug]/page.tsx
import { Metadata } from 'next';
import { getArticleBySlug } from '../../../../../data/articles';
import Navbar from '../../../../../components/Navbar';
import ArticleDetail from '../../../../../components/article_detail';

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Not Found | Jaimin Raval',
      description: 'The requested article could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${article.title} | Jaimin Raval`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.jaiminraval.dev/article/${article.id}/${article.slug}`,
      images: [article.imageUrl],
      type: 'article',
      publishedTime: new Date(article.publishDate).toISOString(),
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Main article page
export default async function ArticlePage({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const { id, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl font-bold">404 - Article Not Found</h1>
          <p>Sorry, the article you&apos;re looking for doesn&apos;t exist.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "datePublished": new Date(article.publishDate).toISOString(),
            "image": article.imageUrl,
            "description": article.excerpt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.jaiminraval.dev/article/${id}/${slug}`
            }
          })
        }}
      />
      <ArticleDetail id={id} slug={slug} />
    </>
  );
}