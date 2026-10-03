import React, { useState } from 'react';
import { LayoutDashboard, Calculator, BookOpen, Code2, FolderGit2, Library, ArrowLeft } from 'lucide-react';

import OverviewTab from '../tabs/OverviewTab';
import AptitudeTab from '../tabs/AptitudeTab';
import CsFundamentalsTab from '../tabs/CSFundamentalsTab';
import DsaTab from '../tabs/DSATab';
import ProjectsTab from '../tabs/ProjectsTab';
import ResourcesTab from '../tabs/ResourcesTab';
import Footer from './Footer';

export default function RoadmapDashboard({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'aptitude', label: 'Aptitude', icon: Calculator },
    { id: 'cs', label: 'CS Fundamentals', icon: BookOpen },
    { id: 'dsa', label: 'DSA', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'resources', label: 'Resources', icon: Library },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab onNavigateTab={(tab) => setActiveTab(tab)} />;
      case 'aptitude':
        return <AptitudeTab />;
      case 'cs':
        return <CsFundamentalsTab />;
      case 'dsa':
        return <DsaTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'resources':
        return <ResourcesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-slate-800 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full px-4 py-8 flex-1">
        
        {/* Navigation Header */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm text-sky-700 hover:text-sky-900 font-medium mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Creomind Innovations
        </button>

        {/* Title Header Card */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white shadow-lg shadow-sky-200 mb-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">
            🎯 Complete Placement Preparation Roadmap
          </h1>
          <p className="text-sky-100 font-medium text-sm md:text-base mb-4">
            From Zero to Hero in 6-8 Months
          </p>
          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full border border-white/30 font-semibold shadow-sm">
            💻 Service-Based & Product-Based Ready
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-sky-100 shadow-sm mb-6 flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20 font-semibold'
                    : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sky-600'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Component */}
        <div className="transition-opacity duration-300">
          {renderTabContent()}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}