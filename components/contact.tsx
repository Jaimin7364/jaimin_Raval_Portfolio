'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from './Navbar';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
      </div>

      <main className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                Have a project in mind, a question, or just want to say hello? Drop me a message below.
              </p>

              <div className="grid md:grid-cols-2 gap-10 text-left">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400">jaimin@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-green-400 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-pink-400 mt-1" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-400">Mahesana, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form -> Google Form POST */}
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSeUFf3ri2gUP-ZuXSVSiTTFg3081lfye9GbLISVSNbZZgZfRQ/formResponse"
                  method="POST"
                  target="_blank"
                  className="space-y-6"
                >
                  <input
                    type="text"
                    name="entry.1158531904"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    required
                  />
                  <input
                    type="email"
                    name="entry.1617578592"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    required
                  />
                  <input
                    type="text"
                    name="entry.500176676"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    required
                  />
                  <textarea
                    name="entry.429230236"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
