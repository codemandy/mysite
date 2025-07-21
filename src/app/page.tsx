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
  const [leftSidebarWidth] = useState(20);
  const [middleWidth, setMiddleWidth] = useState(25);

  // Load saved width from localStorage on mount
  useEffect(() => {
    const savedMiddleWidth = localStorage.getItem('middleWidth');
    if (savedMiddleWidth) {
      const middleWidthValue = parseFloat(savedMiddleWidth);
      setMiddleWidth(middleWidthValue);
      document.documentElement.style.setProperty('--middle-width', middleWidthValue.toString());
    } else {
      document.documentElement.style.setProperty('--middle-width', '25');
    }
  }, []);

  const clearSelectedProject = () => {
    setSelectedProject(null);
  };

  const handleResize = (newWidth: number) => {
    setMiddleWidth(newWidth);
    document.documentElement.style.setProperty('--middle-width', newWidth.toString());
    localStorage.setItem('middleWidth', newWidth.toString());
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#f8f8f8' }}>
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Sidebar - Project List */}
        <div 
          className="flex flex-col"
          style={{ 
            width: `${leftSidebarWidth}%`,
            backgroundColor: '#f8f8f8',
            minWidth: '200px'
          }}
        >
          <Header />
          <div className="flex-1 overflow-y-auto px-4 py-4 mt-6">
            <div className="space-y-1">
              {projects.length > 0 ? projects.map((project) => (
                <div 
                  key={project.id}
                  className="tracking-wider cursor-pointer hover:opacity-70 transition-opacity"
                  style={{ color: '#2a2a2a', fontSize: '11px' }}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.id.toUpperCase()}
                </div>
              )) : (
                <div className="text-xs" style={{ color: '#2a2a2a', fontSize: '11px' }}>No projects found</div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Column - Project Grid */}
        <div 
          className="flex flex-col"
          style={{ 
            width: `${middleWidth}%`,
            backgroundColor: '#f8f8f8',
            minWidth: '300px'
          }}
        >
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
          className="flex flex-col pt-8 pb-8 pr-16 overflow-y-auto"
          style={{ 
            backgroundColor: '#f8f8f8',
            width: `${100 - leftSidebarWidth - middleWidth}%`,
            minWidth: '300px',
            paddingLeft: '0.75rem'
          }}
        >
          {selectedProject && (
            <div className="flex flex-row max-w-full gap-8">
              {/* Left side - Image */}
              <div className="flex-1 max-w-[60%]" style={{ marginLeft: '2rem' }}>
                <div className="relative w-full max-h-[80vh]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    width={800}
                    height={600}
                    className="object-contain max-w-full max-h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Right side - Details */}
              <div className="flex-1 max-w-[40%]">
                <div className="space-y-6">
                  <h1 className="text-lg font-medium tracking-wide uppercase" style={{ fontSize: '11px' }}>
                    {selectedProject.name}
                  </h1>
                  
                  <div className="space-y-4">
                    {selectedProject.year && (
                      <div className="space-y-1">
                        <h3 className="text-xs font-medium tracking-wider" style={{ color: '#555555', fontSize: '11px' }}>YEAR</h3>
                        <p className="text-xs" style={{ color: '#2a2a2a', fontSize: '11px' }}>{selectedProject.year}</p>
                      </div>
                    )}
                    
                    {selectedProject.medium && (
                      <div className="space-y-1">
                        <h3 className="text-xs font-medium tracking-wider" style={{ color: '#555555', fontSize: '11px' }}>MEDIUM</h3>
                        <p className="text-xs" style={{ color: '#2a2a2a', fontSize: '11px' }}>{selectedProject.medium}</p>
                      </div>
                    )}
                    
                    {selectedProject.dimensions && (
                      <div className="space-y-1">
                        <h3 className="text-xs font-medium tracking-wider" style={{ color: '#555555', fontSize: '11px' }}>DIMENSIONS</h3>
                        <p className="text-xs" style={{ color: '#2a2a2a', fontSize: '11px' }}>{selectedProject.dimensions}</p>
                      </div>
                    )}
                  </div>
                  
                  {selectedProject.description && (
                    <div className="space-y-2">
                      <h2 className="text-sm font-medium tracking-wider" style={{ fontSize: '11px' }}>DESCRIPTION</h2>
                      <p className="text-xs leading-relaxed" style={{ color: '#2a2a2a', fontSize: '11px' }}>{selectedProject.description}</p>
                    </div>
                  )}
                  
                  {selectedProject.details && selectedProject.details.length > 0 && (
                    <div className="space-y-2">
                      <h2 className="text-sm font-medium tracking-wider" style={{ fontSize: '11px' }}>DETAILS</h2>
                      <ul className="space-y-1">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className="text-xs" style={{ color: '#2a2a2a', fontSize: '11px' }}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
        <Header />
        
        {/* Project List on Mobile */}
        <div className="px-4 py-4 border-b border-gray-300">
          <div className="flex flex-wrap gap-3">
            {projects.map((project) => (
                              <div 
                  key={project.id}
                  className="text-xs tracking-wider cursor-pointer hover:opacity-70 transition-opacity"
                  style={{ color: '#2a2a2a', fontSize: '11px' }}
                  onClick={() => setSelectedProject(project)}
                >
                {project.id.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        
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
