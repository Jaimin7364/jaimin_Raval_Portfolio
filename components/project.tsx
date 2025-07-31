'use client';
import { useState, useEffect } from 'react';
import { Search, Filter, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Full Stack', 'Web Development', 'Mobile App', 'Cloud Architecture', 'DevOps', 'Database'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24">
        {/* Header Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                My{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                A collection of my work spanning web development, mobile apps, cloud architecture, 
                and DevOps solutions. Each project represents a unique challenge and innovative solution.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {projects.length}
                  </div>
                  <div className="text-gray-400 text-sm">Total Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {projects.filter(p => p.status === 'Live').length}
                  </div>
                  <div className="text-gray-400 text-sm">Live Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-gray-400 text-sm">Featured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No projects found matching your criteria.</div>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='/contact' className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  Start a Project
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a href='https://github.com/Jaimin7364' className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                View All on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}