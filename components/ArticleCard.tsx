'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
  blogurl: string; // ✅ Add this field
}

interface ArticleCardProps {
  article: Article;
  onClick?: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(article);
    }
  };

  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden cursor-pointer group hover:border-blue-500/50"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {article.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User size={16} className="mr-1 text-gray-500" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1 text-gray-500" />
              <span>{article.publishDate}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-gray-500" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* ✅ Link to blogurl */}
        <a
          href={article.blogurl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 font-medium group-hover:text-purple-400 transition-colors duration-300"
          onClick={(e) => e.stopPropagation()} // prevent triggering card click
        >
          <span className="mr-2">Read More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
