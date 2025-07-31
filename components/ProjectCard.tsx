'use client';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, Calendar, Star, GitFork, Eye, Code, Smartphone, Cloud, Settings, Database, Globe } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoryIcons = {
    'Web Development': Globe,
    'Mobile App': Smartphone,
    'Cloud Architecture': Cloud,
    'DevOps': Settings,
    'Full Stack': Code,
    'Database': Database
  };
  
  const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code;
  
  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br opacity-80" style={{
          backgroundImage: project.gradient
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <CategoryIcon size={48} className="text-white/80" />
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
        {project.status === 'Live' && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Live
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-blue-400 font-medium">{project.category}</p>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <Calendar size={12} />
            {project.year}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={typeof tech === 'string' || typeof tech === 'number' ? tech : i}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Stats */}
        {project.stats && (
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
            {project.stats.stars && (
              <div className="flex items-center gap-1">
                <Star size={12} />
                {project.stats.stars}
              </div>
            )}
            {project.stats.forks && (
              <div className="flex items-center gap-1">
                <GitFork size={12} />
                {project.stats.forks}
              </div>
            )}
            {project.stats.views && (
              <div className="flex items-center gap-1">
                <Eye size={12} />
                {project.stats.views}
              </div>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={project.githubUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Code
          </Link>
          {project.liveUrl && (
  project.downloadable ? (
    <a
      href={project.liveUrl}
      download
      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
    >
      <ExternalLink size={16} />
      Live Demo
    </a>
  ) : (
    <Link
      href={project.liveUrl}
      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={16} />
      Live Demo
    </Link>
  )
)}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;