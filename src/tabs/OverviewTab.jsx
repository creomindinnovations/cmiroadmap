import React from 'react';

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        🎯 Complete 8-Month Roadmap
      </h2>

      {/* Critical Truth Alert */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl shadow-sm text-amber-900 text-sm">
        <span className="font-bold block mb-1">⚠️ Critical Truth</span>
        You must be fully prepared before 4th year placements begin! Starting preparation in final year is the biggest mistake students make.
      </div>

      {/* What You'll Crack */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl text-xs md:text-sm text-slate-700 space-y-2">
        <div className="font-bold text-emerald-800 flex items-center gap-2 text-sm">
          ✅ What You'll Crack
        </div>
        <p><strong className="text-slate-900">Service-Based:</strong> TCS, Infosys, Wipro, Cognizant, Accenture, Capgemini</p>
        <p><strong className="text-slate-900">Product-Based:</strong> Zoho, Deloitte, Tech Mahindra, Early-stage Startups</p>
        <p><strong className="text-slate-900">Off-Campus:</strong> Amazon, Microsoft, Flipkart (with dedicated effort)</p>
      </div>

      {/* Timeline Breakdown */}
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-sm space-y-1">
          <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">
            Months 1-2
          </span>
          <h3 className="font-semibold text-slate-800 text-sm pt-1">Aptitude & Reasoning (60 Days)</h3>
          <p className="text-xs text-slate-600">Foundation is crucial. Service-based companies have aptitude tests in first rounds.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-sm space-y-1">
          <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">
            Months 3-4
          </span>
          <h3 className="font-semibold text-slate-800 text-sm pt-1">CS Fundamentals (8 Weeks)</h3>
          <p className="text-xs text-slate-600">OOPS, DBMS, OS, Computer Networks - these 4 subjects are asked in every technical interview.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-sm space-y-1">
          <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">
            Months 5-7
          </span>
          <h3 className="font-semibold text-slate-800 text-sm pt-1">DSA - Data Structures & Algorithms</h3>
          <p className="text-xs text-slate-600">Key for product-based companies. Follow Striver's A2Z DSA Sheet. Solve 3-5 problems daily consistently.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-sm space-y-1">
          <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">
            Month 8
          </span>
          <h3 className="font-semibold text-slate-800 text-sm pt-1">Projects, Resume & Mock Interviews</h3>
          <p className="text-xs text-slate-600">Build 2-3 solid projects, perfect your resume, and take mock interviews to build confidence.</p>
        </div>
      </div>

      {/* Success Principles */}
      <div className="bg-sky-50/80 border border-sky-200 p-5 rounded-xl text-xs md:text-sm space-y-2 text-slate-700">
        <h3 className="font-bold text-sky-900 text-sm flex items-center gap-2">
          💡 Success Principles
        </h3>
        <p>💡 <strong>Consistency &gt; Intensity:</strong> Daily small steps beat irregular big efforts</p>
        <p>💡 <strong>Maintain Notes:</strong> Document aptitude formulas, CS concepts, DSA patterns</p>
        <p>💡 <strong>Practice Daily:</strong> 2nd year: 2-3 hours | 3rd year: 4-5 hours minimum</p>
        <p>💡 <strong>Weekly Revision:</strong> Review everything you learned each weekend</p>
        <p>💡 <strong>Mock Tests:</strong> Take one mock test every week to track progress</p>
      </div>
    </div>
  );
}