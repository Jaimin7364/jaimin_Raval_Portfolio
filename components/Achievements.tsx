'use client';
import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Medal, Target, Users, Code, Zap, Calendar, ExternalLink, Github, Globe } from 'lucide-react';

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed', color: 'from-blue-400 to-purple-500' },
    { icon: Users, value: '100+', label: 'Clients Satisfied', color: 'from-green-400 to-blue-500' },
    { icon: Star, value: '25+', label: 'Awards Won', color: 'from-purple-400 to-pink-500' },
    { icon: Trophy, value: '5+', label: 'Years Experience', color: 'from-yellow-400 to-orange-500' }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Best Developer Award 2024',
      category: 'Awards',
      description: 'Recognized as the top developer for outstanding contributions to web development and innovation.',
      date: 'December 2024',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      featured: true
    },
    {
      id: 2,
      title: 'Open Source Contributor of the Year',
      category: 'Open Source',
      description: 'Contributed to over 15 major open-source projects with 500+ commits and 50+ pull requests.',
      date: 'November 2024',
      icon: Github,
      color: 'from-green-400 to-blue-500',
      featured: true
    },
    {
      id: 3,
      title: 'React Conference Speaker',
      category: 'Speaking',
      description: 'Delivered keynote presentation on "Modern React Patterns" to 1000+ developers.',
      date: 'October 2024',
      icon: Users,
      color: 'from-blue-400 to-purple-500',
      featured: false
    },
    {
      id: 4,
      title: 'Hackathon Winner - AI Innovation',
      category: 'Competitions',
      description: 'First place in 48-hour hackathon for developing an AI-powered code review tool.',
      date: 'September 2024',
      icon: Zap,
      color: 'from-purple-400 to-pink-500',
      featured: true
    },
    {
      id: 5,
      title: 'Published Technical Article',
      category: 'Writing',
      description: 'Article "Advanced React Patterns" featured on major tech publications with 50K+ views.',
      date: 'August 2024',
      icon: Globe,
      color: 'from-indigo-400 to-blue-500',
      featured: false
    },
    {
      id: 6,
      title: 'Team Leadership Excellence',
      category: 'Leadership',
      description: 'Successfully led a team of 8 developers to deliver 3 major projects ahead of schedule.',
      date: 'July 2024',
      icon: Users,
      color: 'from-green-400 to-teal-500',
      featured: false
    },
    {
      id: 7,
      title: 'Google Cloud Certified',
      category: 'Certifications',
      description: 'Achieved Professional Cloud Architect certification with distinction.',
      date: 'June 2024',
      icon: Medal,
      color: 'from-blue-400 to-cyan-500',
      featured: false
    },
    {
      id: 8,
      title: 'Performance Optimization Expert',
      category: 'Technical',
      description: 'Improved application performance by 60% across 5 major client projects.',
      date: 'May 2024',
      icon: Target,
      color: 'from-red-400 to-orange-500',
      featured: true
    }
  ];

  const categories = ['All', 'Awards', 'Open Source', 'Speaking', 'Competitions', 'Writing', 'Leadership', 'Certifications', 'Technical'];

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const featuredAchievements = achievements.filter(achievement => achievement.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      <main className="relative z-10 pt-24">
        {/* Header Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                My{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                A showcase of milestones, recognitions, and accomplishments throughout my journey 
                as a developer and technology enthusiast.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Achievements */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={achievement.id} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                            {achievement.category}
                          </span>
                          <span className="text-gray-400 text-sm">{achievement.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
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
          </div>
        </section>

        {/* All Achievements Grid */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              All{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            {filteredAchievements.length === 0 ? (
              <div className="text-center py-16">
                <Trophy size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No achievements found</h3>
                <p className="text-gray-400 mb-6">Try selecting a different category.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300"
                >
                  Show All
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={achievement.id} className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-xs text-gray-300">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Calendar size={12} />
                          <span>{achievement.date}</span>
                        </div>
                        {achievement.featured && (
                          <Star size={16} className="text-yellow-400 fill-current" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create New Achievements Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate and achieve great things with innovative solutions and cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  Start a Project
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                View My Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
    }
export default Achievements;