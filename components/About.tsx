'use client';
import React, { useState, useEffect } from 'react';
import { Code, Palette, Database, Cloud, Users, Heart, Download, ExternalLink, MapPin, CloudAlertIcon } from 'lucide-react';
import Image from 'next/image';
const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Full Stack Web Development', icon: Code, level: 95 },
    { name: 'UI/UX Design', icon: Palette, level: 88 },
    { name: 'Cloud Architecture', icon: Cloud, level: 85 },
    { name: 'Team Leadership', icon: Users, level: 90 },
    { name: 'Database Management', icon: Database, level: 80 },
    { name: 'DevOps | CI/CD Experties', icon: CloudAlertIcon, level: 85 },
  ];

  const experiences = [
    {
      title: 'Internship as an App Developer',
      company: 'S3CloudHub',
      period: 'May 2025 - June 2025',
      description: 'Designed and developed the frontend of an online gambling app, ensuring a seamless user interface and enhanced user experience.\nLed the deployment process, optimizing the app\'s performance and ensuring a smoothlaunch on the production environment.\nCoordinated testing, quality assurance, and team collaboration, ensuring the app met performance and security standards, while reducing bugs by 10% and improving project completion speed by 20%.',
      achievements: ['Get Experience of work with Flutter', 'Led team of 3 developers', 'Implemented CI/CD pipeline' , 'improve UI/UX Skills']
    },
    {
      title: 'Founder & Freelance IT Consultant',
      company: 'Yoranza Technologies',
      period: '2025 - present',
      description: 'Established Yoranza Technologies as a freelancing brand and startup offering end-to-end IT solutions. Provided consulting, development, and support services tailored to client needs across various industries.',
      achievements: ['Delivered 20+ successful IT projects for clients worldwide',
  'Worked across multiple domains including software development, automation, and system integration',
  'Built strong client relationships with a focus on quality, reliability, and innovation']
    },
  ];

  const interests = [
  'Creative Content Creation (YouTube)',
  'Mentoring and Guiding Aspiring Developers',
  'Public Speaking & Technical Presentations',
  'Entrepreneurship & Startup Building',
  'Exploring New Cultures and Places',
  'Storytelling through Tech & Media',
  'Productivity Systems & Personal Growth',
  'Building Meaningful Digital Experiences',
  'Tech for Social Impact',
  'Community Building & Collaboration'
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    About{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Me
                    </span>
                  </h1>
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin size={20} className="text-blue-400" />
                    <span className="text-gray-400">Mahesana , Gujarat</span>
                  </div>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    I&apos;m a passionate software engineer with over 2 years+ of experience crafting digital solutions across web, mobile, and cloud. I enjoy turning complex ideas into intuitive, impactful experiences.
                  </p>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe 
                    in continuous learning and the power of collaboration to build amazing things.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                  href="/resume/Jaimin Resume.pdf"
                  download className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                      <span className="flex items-center gap-2">
                        Download Resume
                        <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                      </span>
                    </a>
                    <a href='/contact' className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                      Get in Touch
                    </a>
                  </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <img
                            src="assets/logo.png"
                            alt="Profile Logo"
                            className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 font-medium">{exp.period}</div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Beyond{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Code
              </span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
              When I&apos;m not building amazing digital experiences, I enjoy exploring various interests that keep me inspired and creative.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <div key={index} className="group p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <Heart size={24} className="mx-auto mb-3 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-medium">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I&apos;m always excited to work on new projects and collaborate with like-minded individuals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='/contact' className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  Start a Conversation
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a href='/projects' className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                View My Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;