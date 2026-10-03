import React from 'react';

export default function ProjectsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        🏗️ Projects & Resume Building
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-amber-900 text-sm">
        <strong>⚠️ Quality Over Quantity:</strong> Don't add 10 random projects to your resume. Build 2-3 solid projects that you understand completely. Interviewers will ask about every line of code.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2">
          <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md inline-block">
            Project 1
          </span>
          <h3 className="font-bold text-slate-800 text-sm">Full Stack Web Application</h3>
          <p className="text-xs text-slate-600"><strong>Tech Stack:</strong> React.js + Node.js + MongoDB (MERN)</p>
          <p className="text-xs text-slate-600"><strong>Features:</strong> Auth, CRUD, Responsive Design</p>
          <p className="text-xs text-slate-600"><strong>Examples:</strong> Job Portal, E-commerce, Blog Platform</p>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2">
          <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md inline-block">
            Project 2
          </span>
          <h3 className="font-bold text-slate-800 text-sm">Real-Time Application</h3>
          <p className="text-xs text-slate-600"><strong>Tech Stack:</strong> Socket.io + Express + React</p>
          <p className="text-xs text-slate-600"><strong>Features:</strong> Real-time communication, Live updates</p>
          <p className="text-xs text-slate-600"><strong>Examples:</strong> Chat App, Live Dashboard</p>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-2">
          <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md inline-block">
            Project 3
          </span>
          <h3 className="font-bold text-slate-800 text-sm">Algorithm / Tool Project</h3>
          <p className="text-xs text-slate-600"><strong>Focus:</strong> Problem solving & core algorithms</p>
          <p className="text-xs text-slate-600"><strong>Examples:</strong> Path Finding Visualizer, Sorting Visualizer, Code Editor</p>
        </div>
      </div>

      {/* Resume Checklist */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-xs md:text-sm text-slate-700 space-y-2">
        <h3 className="font-bold text-emerald-900 text-base">📄 Resume Must-Haves</h3>
        <p>✅ <strong>1 Page Only:</strong> Recruiters spend 6 seconds per resume.</p>
        <p>✅ <strong>Clean Design:</strong> No fancy colors or graphics.</p>
        <p>✅ <strong>Skills Section:</strong> Only add what you actually know well.</p>
        <p>✅ <strong>Projects:</strong> 2-3 projects with tech stack & live links.</p>
        <p>✅ <strong>GitHub Link:</strong> Must have active repositories.</p>
      </div>
    </div>
  );
}