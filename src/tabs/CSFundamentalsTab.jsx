import React from 'react';
import { ExternalLink, Youtube } from 'lucide-react';

export default function CsFundamentalsTab() {
  const ytChannels = [
    { name: 'Gate Smashers', desc: 'Best for OS, DBMS, Networks (Hindi)', url: 'https://www.youtube.com/@GateSmashers' },
    { name: 'Knowledge Gate', desc: 'Detailed CS Fundamentals (Hindi)', url: 'https://www.youtube.com/@KnowledgeGate' },
    { name: 'Jenny\'s Lectures', desc: 'Complete CS subjects (Hindi)', url: 'https://www.youtube.com/@JennyslecturesCSIT' },
    { name: 'Neso Academy', desc: 'In-depth CS concepts (English)', url: 'https://www.youtube.com/@nesoacademy' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        💻 CS Fundamentals - 8 Weeks Plan
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-amber-900 text-sm">
        <strong>⚠️ Why CS Fundamentals Matter:</strong> Mandatory for technical interviews. OOPS, DBMS, OS, Computer Networks - these 4 subjects test your core Computer Science knowledge.
      </div>

      <div className="space-y-4">
        {/* Core Subjects Breakdown */}
        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2 text-xs md:text-sm">
          <span className="font-bold text-sky-800 block text-base">Week 1-2: Object-Oriented Programming (OOPS)</span>
          <p className="text-slate-600">4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction | Classes & Objects | Constructors | Method Overloading vs Overriding | Access Modifiers.</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2 text-xs md:text-sm">
          <span className="font-bold text-sky-800 block text-base">Week 3-4: Database Management Systems (DBMS)</span>
          <p className="text-slate-600">Normalization (1NF, 2NF, 3NF, BCNF) | SQL Queries (SELECT, JOIN, WHERE, GROUP BY, HAVING) | ACID Properties | Indexing & Transactions.</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2 text-xs md:text-sm">
          <span className="font-bold text-sky-800 block text-base">Week 5-6: Operating Systems (OS)</span>
          <p className="text-slate-600">Process vs Thread | CPU Scheduling Algorithms | Deadlocks (Conditions, Prevention, Avoidance) | Memory Management (Paging, Segmentation, Virtual Memory).</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2 text-xs md:text-sm">
          <span className="font-bold text-sky-800 block text-base">Week 7-8: Computer Networks (CN)</span>
          <p className="text-slate-600">OSI Model (All 7 layers) | TCP vs UDP | IP Addressing & Subnetting | HTTP vs HTTPS | DNS, DHCP Protocols.</p>
        </div>
      </div>

      {/* YouTube Channels Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-800 text-base">📺 Recommended YouTube Channels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ytChannels.map((ch, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm glow-hover flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sky-900 text-sm flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-500" />
                  {ch.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{ch.desc}</p>
              </div>
              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
              >
                Watch Now <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}