'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Home,
  BookOpen,
  User,
  Mail,
  Code
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Articles', path: '/articles', icon: BookOpen },
    // { name : 'Achievements', path: '/achievements', icon: Trophy},
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Projects', path: '/projects', icon: Code },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md bg-gray-900/90 border-b border-gray-800 shadow-lg shadow-black/20'
        : 'backdrop-blur-sm bg-gray-900/50'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Jaimin Raval
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map(({ path, name, icon: Icon }) => (
            <li key={name}>
              <Link
                href={path}
                className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 relative group ${
                  isActive(path)
                    ? 'text-white bg-gradient-to-r from-blue-400/20 to-purple-500/20 border border-blue-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon size={16} />
                {name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                  isActive(path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-800 md:hidden">
            <ul className="py-4 px-6 space-y-2">
              {navItems.map(({ path, name, icon: Icon }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 ${
                      isActive(path)
                        ? 'text-white bg-gradient-to-r from-blue-400/20 to-purple-500/20 border border-blue-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;