import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AptitudeTab() {
  const practicePlatforms = [
    { title: 'IndiaBix', desc: 'Free - Thousands of aptitude questions', url: 'https://www.indiabix.com/' },
    { title: 'PrepInsta', desc: 'Company-specific test patterns', url: 'https://prepinsta.com/' },
    { title: 'LearnTheta', desc: 'AI-based adaptive practice', url: 'https://www.learntheta.com/' },
    { title: 'Placement Preparation', desc: 'Topic-wise practice sets', url: 'https://www.geeksforgeeks.org/placement-preparation-course/' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        🧮 Aptitude & Reasoning - 60 Days Plan
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-amber-900 text-sm">
        <strong>⚠️ Why Aptitude is Critical:</strong> Almost every service-based company has aptitude tests in the first round. If you fail here, no matter how good your coding is, you're eliminated.
      </div>

      {/* Quantitative Aptitude */}
      <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-sky-900">📊 Quantitative Aptitude (40 Days)</h3>
        
        <div className="space-y-3 text-xs md:text-sm text-slate-700">
          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="font-semibold text-sky-700 block">Week 1-2: Percentages & Ratios</span>
            <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
              <li>Basic Percentage Formulas & Conversions</li>
              <li>Percentage Increase/Decrease</li>
              <li>Ratio & Proportion Fundamentals</li>
              <li>Mixture & Alligation</li>
            </ul>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="font-semibold text-sky-700 block">Week 3-4: Profit, Loss & Interest</span>
            <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
              <li>Cost Price, Selling Price Concepts</li>
              <li>Profit % and Loss % Calculations</li>
              <li>Discount & Marked Price</li>
              <li>Simple Interest & Compound Interest</li>
            </ul>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="font-semibold text-sky-700 block">Week 5-6: Time, Speed, Distance & Work</span>
            <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
              <li>Speed = Distance/Time Formula Applications</li>
              <li>Relative Speed & Average Speed</li>
              <li>Trains, Boats & Streams Problems</li>
              <li>Time & Work Fundamentals</li>
              <li>Pipes & Cisterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practice Platforms with Light Glow */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-800 text-base">🌐 Best Practice Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {practicePlatforms.map((platform, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm glow-hover flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sky-800 text-sm">{platform.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{platform.desc}</p>
              </div>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
              >
                Practice Now <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

