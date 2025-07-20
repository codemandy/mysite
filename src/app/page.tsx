'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import ResizeHandle from '@/components/ResizeHandle';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [leftWidth, setLeftWidth] = useState(40);

  // Load saved width from localStorage on mount
  useEffect(() => {
    const savedWidth = localStorage.getItem('columnWidth');
    if (savedWidth) {
      const width = parseFloat(savedWidth);
      setLeftWidth(width);
      document.documentElement.style.setProperty('--left-width', width.toString());
    } else {
      document.documentElement.style.setProperty('--left-width', '40');
    }
  }, []);

  const clearSelectedProject = () => {
    setSelectedProject(null);
  };

  const handleResize = (newWidth: number) => {
    setLeftWidth(newWidth);
    document.documentElement.style.setProperty('--left-width', newWidth.toString());
    localStorage.setItem('columnWidth', newWidth.toString());
  };

  return (
    <div className="min-h-screen bg-black w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Column - Navigation and Projects */}
        <div 
          className="flex flex-col"
          style={{ 
            width: `${leftWidth}%`,
            backgroundColor: 'rgb(249, 250, 252)',
            minWidth: '300px'
          }}
        >
          <Header />
          <main className="px-2 pt-8 mt-2 flex-1 overflow-y-auto">
            <div style={{ marginLeft: '0.3rem' }}>
              <ProjectGrid 
                projects={projects}
                onProjectSelect={setSelectedProject}
                onProjectClear={clearSelectedProject}
              />
            </div>
          </main>
        </div>

        {/* Resize Handle */}
        <ResizeHandle onResize={handleResize} />
        
        {/* Right Column - Selected Image Display */}
        <div 
          className="flex bg-white flex-col pt-8 pb-8 pr-16 overflow-y-auto"
          style={{ 
            width: `${100 - leftWidth}%`,
            minWidth: '300px',
            paddingLeft: '0.75rem'
          }}
        >
          {selectedProject && (
            <div className="flex flex-col max-w-full">
              <div className="relative max-w-full max-h-[80vh] mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-full"
                  priority
                />
              </div>
              <h2 className="text-xs font-medium tracking-tight text-gray-900">
                {selectedProject.name}
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen" style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
        <Header />
        <main className="px-2 pt-8 mt-2">
          <div style={{ marginLeft: '0.3rem' }}>
            <ProjectGrid 
              projects={projects}
              onProjectSelect={setSelectedProject}
              onProjectClear={clearSelectedProject}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
