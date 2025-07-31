'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, BookOpen, ExternalLink, Mail } from 'lucide-react';
import ArticleCard, { Article } from './ArticleCard';
import { articles, categories, getArticlesByCategory } from '../data/articles';

const Articles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter articles based on category and search term
  const filteredArticles = useMemo(() => {
    let filtered = getArticlesByCategory(selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  const handleArticleClick = (article: Article) => {
    console.log('Article clicked:', article.slug);
    // Navigate to article detail page
    // window.location.href = `/articles/${article.slug}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center mb-6">
                <BookOpen size={48} className="mr-3 text-blue-400" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Articles
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore our collection of in-depth articles covering the latest in web development, 
                programming best practices, and emerging technologies.
              </p>
              
              {/* Search and Filter Section */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category Buttons */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600 hover:border-blue-500/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {articles.length}
                  </div>
                  <div className="text-gray-400 text-sm">Total Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {filteredArticles.length}
                  </div>
                  <div className="text-gray-400 text-sm">Filtered Results</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {categories.length - 1}
                  </div>
                  <div className="text-gray-400 text-sm">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Info */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto mb-6">
            <p className="text-gray-400 text-center">
              Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onClick={handleArticleClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredArticles.length > 0 && filteredArticles.length >= 6 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <button
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              onClick={() => window.location.href = 'mailto:contact@jaiminraval.dev'}
            >
              <span className="flex items-center gap-2">
              Get In Touch
              <Mail size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Articles;