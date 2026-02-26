'use client';

import React, { useEffect, useState } from 'react';

const CustomLoader: React.FC = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hexagonal code container */}
        <div className="relative w-64 h-64 mb-8">
          {/* Rotating hexagon border */}
          <div className="absolute inset-0 hexagon-border animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <polygon
                points="100,10 173,50 173,130 100,170 27,130 27,50"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="3"
                className="animate-pulse"
              />
              <polygon
                points="100,25 158,57.5 158,122.5 100,155 42,122.5 42,57.5"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Inner animated code brackets */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative text-6xl font-bold">
              <span className="absolute -left-12 text-blue-500 animate-bracket-left">{'<'}</span>
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                JR
              </span>
              <span className="absolute -right-12 text-pink-500 animate-bracket-right">{'>'}</span>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '4s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 -translate-x-1/2" />
          </div>
          <div className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '3s' }}>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 -translate-x-1/2" />
          </div>
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '5s' }}>
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50 -translate-y-1/2" />
          </div>
        </div>

        {/* Animated loading text with typing effect */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-sm animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-purple-500 rounded-sm animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-pink-500 rounded-sm animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          <span className="text-xl font-mono text-gray-300 animate-pulse">
            Loading<span className="animate-typing">...</span>
          </span>
        </div>

        {/* Binary code rain effect */}
        <div className="mt-6 text-xs font-mono text-green-500 opacity-50 animate-pulse">
          <div className="overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-scroll">
              01001010 01010010 01110000 01101111 01110010 01110100 01100110 01101111 01101100 01101001 01101111
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-progress rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes bracket-left {
          0%, 100% {
            transform: translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-10px);
            opacity: 0.5;
          }
        }

        @keyframes bracket-right {
          0%, 100% {
            transform: translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes typing {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 6s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-bracket-left {
          animation: bracket-left 2s ease-in-out infinite;
        }

        .animate-bracket-right {
          animation: bracket-right 2s ease-in-out infinite;
        }

        .animate-typing {
          animation: typing 1.5s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CustomLoader;
