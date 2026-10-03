import React from 'react';
import { Instagram, Linkedin, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 text-white py-10 px-4 mt-12 border-t border-sky-200/20">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">
            🚀 Stay Connected with Creomind
          </h3>
          <p className="text-sky-100 text-sm mt-2 max-w-2xl mx-auto">
            Placement guidance, skill-building resources, mock interview support, and career mentorship for aspiring engineers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/jaganmohanreddybondala/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sky-900 hover:bg-sky-50 font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-sky-700" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-5 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all"
          >
            <Instagram className="w-4 h-4 text-pink-300" />
            <span>@creomind.innovations</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-left text-sm text-sky-100 border-t border-white/10 pt-6">
          <div className="space-y-2">
            <p className="font-semibold text-white">Company</p>
            <p>Creomind Innovations Private Limited</p>
            <p>CIN: U62091AP2024PTC113441</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Focus</p>
            <p>Career mentoring</p>
            <p>Technical training</p>
            <p>Placement readiness</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Support</p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-200" />
              <span>Remote and student-focused learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Free resources and guidance</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-2 text-xs text-sky-200">
          <p>💚 All resources are 100% FREE</p>
          <p>🎯 Follow consistently for 6-8 months</p>
          <p>🚀 You'll be industry-ready before you know it!</p>
          <p className="pt-2 text-sky-300 font-mono text-[11px]">
            Created with ❤️ | © {new Date().getFullYear()} Creomind Innovations | Follow for more content
          </p>
        </div>
      </div>
    </footer>
  );
}