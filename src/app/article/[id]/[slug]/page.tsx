// app/article/[id]/[slug]/page.tsx
import { Metadata } from 'next';
import { getArticleBySlug, getAllArticles } from '../../../../../data/articles';
import Navbar from '../../../../../components/Navbar';
import ArticleDetail from '../../../../../components/article_detail';

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles();
  
  return articles.map((article) => ({
    id: article.id.toString(),
    slug: article.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Not Found',
      description: 'The requested article could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.jaiminraval.in/article/${article.id}/${article.slug}`,
    },
    keywords: [article.category, 'web development', 'programming', 'technology', article.author],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.jaiminraval.in/article/${article.id}/${article.slug}`,
      images: [article.imageUrl],
      type: 'article',
      publishedTime: new Date(article.publishDate).toISOString(),
      authors: [article.author],
      siteName: 'Jaimin Raval Portfolio',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
      creator: '@JaiminRaval100',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "author": {
              "@type": "Person",
              "name": article.author,
              "url": "https://www.jaiminraval.in"
            },
            "datePublished": new Date(article.publishDate).toISOString(),
            "dateModified": new Date(article.publishDate).toISOString(),
            "image": article.imageUrl,
            "description": article.excerpt,
            "publisher": {
              "@type": "Person",
              "name": "Jaimin Raval",
              "url": "https://www.jaiminraval.in"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.jaiminraval.in/article/${id}/${slug}`
            },
            "articleSection": article.category,
            "keywords": article.category,
            "inLanguage": "en-US"
          })
        }}
      />
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.jaiminraval.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": "https://www.jaiminraval.in/articles"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": `https://www.jaiminraval.in/article/${id}/${slug}`
              }
            ]
          })
        }}
      />
      <ArticleDetail id={id} slug={slug} />
    </>
  );
}