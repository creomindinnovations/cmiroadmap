import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';
import logo from '../assets/Logo White BG.png';

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#e6f0fa] flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Header / Brand */}
      <header className="flex items-center gap-3 z-10">
        <div className="flex items-center justify-center p-2 rounded-2xl bg-white/85 shadow-md border border-sky-100 backdrop-blur-sm">
          <img
            src={logo}
            alt="Creomind Innovations logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="font-extrabold text-lg tracking-wider text-[#0F2C59] leading-none">
            CREOMIND
          </h2>
          <p className="text-xs tracking-widest text-teal-600 font-semibold uppercase">
            INNOVATIONS
          </p>
          <p className="text-[10px] text-gray-500 font-mono">Private Limited</p>
          <p className="text-[8px] text-gray-400 font-mono">CIN : U62091AP2024PTC113441</p>
        </div>
      </header>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 my-8 max-w-7xl mx-auto w-full z-10">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 px-4 py-1.5 rounded-full text-xs text-sky-800 font-medium">
            <Lightbulb className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Placement Preparation Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F2C59] tracking-tight leading-tight">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700">
              Creomind Innovations
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-medium tracking-wide">
            Learn <span className="mx-2 text-sky-400">|</span> Prepare <span className="mx-2 text-sky-400">|</span> Build Your Future
          </p>

          <div className="pt-4">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Placement Preparation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* UnDraw Image Placeholder Container */}
        <div className="flex-1 flex justify-center items-center w-full max-w-md lg:max-w-xl">
          <img
            src="/undraw_illustration.svg" 
            alt="Placement Preparation Illustration"
            className="w-full h-auto drop-shadow-md"
            onError={(e) => {
              // Fallback placeholder if custom image is not found yet
              e.target.onerror = null;
              e.target.src = "https://illustrations.popsy.co/amber/student-with-laptop.svg";
            }}
          />
        </div>
      </main>

      <footer className="text-center text-xs text-slate-500 z-10">
        © {new Date().getFullYear()} Creomind Innovations Private Limited. All Rights Reserved.
      </footer>
    </div>
  );
}
