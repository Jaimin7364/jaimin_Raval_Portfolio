// components/ArticleClient.tsx - Client Component
'use client';
import { useState, useEffect } from 'react';
import {
  Clock,
  User,
  Calendar,
  Share2,
  BookOpen,
  ChevronUp,
  Twitter,
  Linkedin,
  Link,
  Heart,
  ArrowLeft
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
  slug: string;
  blogurl: string;
}

interface ArticleClientProps {
  article: Article;
  contentHtml: string;
}

export default function ArticleClient({ article, contentHtml }: ArticleClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      
      setIsScrolled(scrollTop > 100);
      setReadingProgress(scrollPercent);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareArticle = async (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    const shareUrls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShareMenuOpen(false);
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/articles';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Copy Success Notification */}
      {copySuccess && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
          Link copied to clipboard!
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40">
        {/* Share Button */}
        <div className="relative">
          <button
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
            className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Share article"
          >
            <Share2 size={20} />
          </button>
          
          {/* Share Menu */}
          {shareMenuOpen && (
            <div className="absolute bottom-14 right-0 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg p-2 flex flex-col gap-1 min-w-[140px] shadow-xl">
              <button
                onClick={() => shareArticle('twitter')}
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-700 rounded transition-colors duration-200"
              >
                <Twitter size={16} className="text-blue-400" />
                Twitter
              </button>
              <button
                onClick={() => shareArticle('linkedin')}
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-700 rounded transition-colors duration-200"
              >
                <Linkedin size={16} className="text-blue-600" />
                LinkedIn
              </button>
              <button
                onClick={() => shareArticle('copy')}
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-700 rounded transition-colors duration-200"
              >
                <Link size={16} className="text-gray-400" />
                Copy Link
              </button>
            </div>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
            isLiked ? 'bg-red-600/80 border-red-500 text-white' : 'hover:bg-red-600/80 hover:border-red-500'
          }`}
          aria-label={isLiked ? 'Unlike article' : 'Like article'}
        >
          <Heart size={20} className={isLiked ? 'fill-current' : ''} />
        </button>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110 shadow-lg animate-fade-in"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </div>

      <main className="relative z-10">
        {/* Header */}
        <div className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-4xl mx-auto px-6 py-4">
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Articles</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {article.title}
                </span>
              </h1>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>Technical Article</span>
                </div>
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <style jsx global>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.3s ease-out;
              }
              .prose {
                color: #e5e7eb;
              }
              .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                background: linear-gradient(135deg, #60a5fa, #a855f7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-weight: 700;
              }
              .prose h2 {
                font-size: 2rem;
                line-height: 1.2;
              }
              .prose h3 {
                font-size: 1.5rem;
                line-height: 1.3;
              }
              .prose p {
                margin-bottom: 1.5rem;
                line-height: 1.8;
                font-size: 1.125rem;
              }
              .prose blockquote {
                border-left: 4px solid #3b82f6;
                background: rgba(59, 130, 246, 0.1);
                padding: 1.5rem 2rem;
                margin: 2rem 0;
                border-radius: 0.5rem;
                font-style: italic;
                position: relative;
              }
              .prose blockquote::before {
                content: '"';
                font-size: 4rem;
                color: #3b82f6;
                position: absolute;
                top: -10px;
                left: 10px;
                opacity: 0.3;
              }
              .prose code {
                background: rgba(107, 114, 128, 0.4);
                padding: 0.3rem 0.5rem;
                border-radius: 0.375rem;
                font-size: 0.875em;
                color: #fbbf24;
                border: 1px solid rgba(107, 114, 128, 0.3);
              }
              .prose pre {
                background: rgba(17, 24, 39, 0.9);
                border: 1px solid rgba(107, 114, 128, 0.3);
                border-radius: 0.75rem;
                padding: 1.5rem;
                overflow-x: auto;
                margin: 2rem 0;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
              }
              .prose pre code {
                background: none;
                padding: 0;
                color: #e5e7eb;
                border: none;
              }
              .prose a {
                color: #60a5fa;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: all 0.2s;
                font-weight: 500;
              }
              .prose a:hover {
                color: #3b82f6;
                border-bottom-color: #3b82f6;
                text-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
              }
              .prose ul, .prose ol {
                margin: 1.5rem 0;
                padding-left: 2rem;
              }
              .prose li {
                margin: 0.5rem 0;
                line-height: 1.7;
              }
              .prose li::marker {
                color: #60a5fa;
              }
              .prose table {
                margin: 2rem 0;
                border-collapse: collapse;
                width: 100%;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .prose th, .prose td {
                border: 1px solid rgba(107, 114, 128, 0.3);
                padding: 1rem;
                text-align: left;
              }
              .prose th {
                background: rgba(107, 114, 128, 0.2);
                font-weight: 600;
                color: #f3f4f6;
              }
              .prose tr:hover {
                background: rgba(107, 114, 128, 0.1);
              }
              .prose img {
                border-radius: 0.75rem;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                margin: 2rem 0;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/logo.png"
                      alt="Jaimin Raval"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-lg">{article.author}</p>
                  <p className="text-sm text-gray-400">Software Engineer & Technical Writer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <Share2 size={16} />
                  Share Article
                </button>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}