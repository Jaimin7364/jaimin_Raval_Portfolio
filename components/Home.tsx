'use client';
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Code,
  Smartphone,
  Cloud,
  Settings,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  ExternalLink
} from 'lucide-react';
import Navbar from './Navbar';


// your component code continues...

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Software Engineer",
    "Web Developer", 
    "App Developer",
    "Cloud Architect",
    "DevOps Expert"
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    
    return () => clearInterval(roleInterval);
  }, []);

  const skills = [
    { icon: Code, name: "Full Stack Development", color: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, name: "Mobile Development", color: "from-green-500 to-emerald-500" },
    { icon: Cloud, name: "Cloud Architecture", color: "from-purple-500 to-violet-500" },
    { icon: Settings, name: "DevOps & CI/CD", color: "from-orange-500 to-red-500" },
    { icon: Database, name: "Database Design", color: "from-indigo-500 to-blue-500" },
    { icon: Globe, name: "Web Technologies", color: "from-pink-500 to-rose-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      <main className="relative z-10">
        {/* Navigation */}
        < Navbar/>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/logo.png"
                      alt="Jaimin Raval Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  Hi, I&apos;m{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Jaimin Raval
                  </span>
                </h1>
                <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
                  <span className="inline-block">
                    <span className="opacity-70">I&apos;m a </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold transition-all duration-500">
                      {roles[currentRole]}
                    </span>
                  </span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Passionate about creating innovative digital solutions that bridge the gap between 
                cutting-edge technology and exceptional user experiences. Specializing in full-stack 
                development, cloud architecture, and DevOps practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a href="/projects" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="/resume/Jaimin Resume.pdf"
                  download
                  className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-16">
                {[
                  { icon: Github, href: 'https://github.com/Jaimin7364', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/jaimin-raval-132751283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://x.com/JaiminRaval100?t=ZVjx3H-CihfeafrtLlg0ZA&s=09', label: 'Twitter' },
                  { icon: Mail, href: 'mailto:contact@jaiminraval.dev', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                  >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>

              <div className="animate-bounce">
                <ChevronDown size={32} className="mx-auto text-gray-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  My Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Leveraging cutting-edge technologies to build scalable, efficient, and innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map(({ icon: Icon, name, color }, index) => (
                <div
                  key={name}
                  className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {name}
                  </h3>
                  <div className="h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technologies I Work With
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Flutter',
                'AWS', 'Docker', 'Azure', 'MongoDB', 'PostgreSQL', 'Azure DevOps'
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
}