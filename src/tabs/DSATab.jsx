import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function DsaTab() {
  const dsaPlatforms = [
    { name: 'LeetCode', desc: 'Best for interview prep & company questions', url: 'https://leetcode.com/' },
    { name: 'Coding Ninjas', desc: 'Structured learning path with guided problems', url: 'https://www.naukri.com/code360' },
    { name: 'GeeksforGeeks', desc: 'Best for concept learning + practice', url: 'https://www.geeksforgeeks.org/' },
    { name: 'HackerRank', desc: 'Good for beginners & topic-wise practice', url: 'https://www.hackerrank.com/' },
    { name: 'CodeChef', desc: 'Monthly contests & practice problems', url: 'https://www.codechef.com/' },
    { name: 'Codeforces', desc: 'Competitive programming & contests', url: 'https://codeforces.com/' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        ⚡ Data Structures & Algorithms - 12 Weeks
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-amber-900 text-sm">
        <strong>⚠️ Why DSA is Crucial:</strong> This is where most students give up. Practice daily like gym - skip a week and you'll forget everything. Target: 250-400 problems in 12 weeks.
      </div>

      {/* Featured Sheet */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-6 rounded-2xl text-white shadow-md space-y-3">
        <h3 className="font-bold text-lg">🌟 Top DSA Sheet & Resource</h3>
        <p className="text-xs md:text-sm text-sky-100">
          Follow Striver's A2Z DSA Sheet consistently for complete coverage from basic to advanced algorithms.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sky-900 hover:bg-sky-50 font-bold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 shadow-sm"
          >
            Striver's A2Z DSA Sheet (MUST FOLLOW) <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.youtube.com/@takeUforward"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 border border-sky-400"
          >
            Striver's YouTube Channel <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Practice Platforms Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-800 text-base">💻 Practice Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dsaPlatforms.map((p, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-sky-100 shadow-sm glow-hover flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sky-900 text-sm">{p.name}</h4>
                <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
              >
                Start Solving <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}