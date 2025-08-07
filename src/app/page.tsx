'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import ResizeHandle from '@/components/ResizeHandle';
import Lightbox from '@/components/Lightbox';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { getThemeForProject, projectThemes } from '@/data/themes';
import { useTheme } from '@/hooks/useTheme';
import styles from '@/styles/backgrounds.module.css';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [leftSidebarWidth] = useState(20);
  const [middleWidth, setMiddleWidth] = useState(25);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>('');

  // Get current theme based on selected project
  const currentTheme = selectedProject 
    ? getThemeForProject(selectedProject.themeId || selectedProject.id)
    : projectThemes.default;
  
  // Apply theme using the custom hook (side effects only)
  useTheme(currentTheme);

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

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage('');
  };

  const handleResize = (newWidth: number) => {
    setMiddleWidth(newWidth);
    document.documentElement.style.setProperty('--middle-width', newWidth.toString());
    localStorage.setItem('middleWidth', newWidth.toString());
  };

  return (
    <div className="min-h-screen w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Sidebar - Project List */}
        <div 
          className={`flex flex-col ${styles.leftColumn}`}
          style={{ 
            width: `${leftSidebarWidth}%`,
            minWidth: '200px'
          }}
        >
          <Header />
          <div className="flex-1 overflow-y-auto px-4 py-4 mt-6">
            <div className="space-y-1">
              {projects.length > 0 ? projects.map((project) => (
                <div 
                  key={project.id}
                  className={`tracking-wider cursor-pointer hover:opacity-70 transition-opacity ${styles.navigationText}`}
                  style={{ fontSize: '11px' }}
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
          className={`flex flex-col ${styles.middleColumn}`}
          style={{ 
            width: `${middleWidth}%`,
            minWidth: '300px'
          }}
        >
          <main className="pl-8 pr-2 pt-8 mt-2 flex-1 overflow-y-auto">
            <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
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
          id="project-container"
          className="flex flex-col h-screen"
          style={{ 
            width: `${100 - leftSidebarWidth - middleWidth}%`,
            minWidth: '300px'
          }}
        >
          {selectedProject && (
            <div className="flex flex-row h-full">
              {/* Left Column - Images (60%) */}
              <div className={`w-[60%] pt-8 pb-8 overflow-y-auto hide-scrollbar ${styles.projectImagesSection}`} style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                <div>
                  {/* Main Image */}
                  <div className="w-full cursor-pointer" onClick={() => openLightbox(selectedProject.image)} style={{ marginBottom: '40px' }}>
                    <div className="relative w-full max-h-[60vh]">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        width={800}
                        height={600}
                        className="object-contain max-w-full max-h-full hover:opacity-90 transition-opacity"
                        priority
                      />
                    </div>
                    {selectedProject.imageTitles && selectedProject.imageTitles[0] && (
                      <div className="mt-2">
                        <p className={`text-xs ${styles.projectImageTitles}`} style={{ fontSize: '11px' }}>
                          {selectedProject.imageTitles[0]}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Additional Images (if any) */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    selectedProject.images.slice(1).map((imageSrc, index) => (
                      <div key={index} className="w-full cursor-pointer" onClick={() => openLightbox(imageSrc)} style={{ marginBottom: '40px' }}>
                        <div className="relative w-full max-h-[60vh]">
                          <Image
                            src={imageSrc}
                            alt={`${selectedProject.name} - Additional view ${index + 1}`}
                            width={800}
                            height={600}
                            className="object-contain max-w-full max-h-full hover:opacity-90 transition-opacity"
                          />
                        </div>
                        {selectedProject.imageTitles && selectedProject.imageTitles[index + 1] && (
                          <div className="mt-2">
                            <p className={`text-xs ${styles.projectImageTitles}`} style={{ fontSize: '11px' }}>
                              {selectedProject.imageTitles[index + 1]}
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
              
              {/* Right Column - Project Details (40%) */}
              <div className={`w-[40%] pt-8 pb-8 pl-4 pr-8 overflow-y-auto ${styles.projectDetailsSection}`}>
                <div className="space-y-6">
                  <h1 className={`text-lg font-medium tracking-wide uppercase ${styles.projectText}`} style={{ fontSize: '11px' }}>
                    {selectedProject.name}
                  </h1>
                  
                  <div className="space-y-4">
                    {selectedProject.year && (
                      <div className="space-y-1">
                        <h3 className={`text-xs font-medium tracking-wider ${styles.projectLabels}`} style={{ fontSize: '11px' }}>YEAR</h3>
                        <p className={`text-xs ${styles.projectText}`} style={{ fontSize: '11px' }}>{selectedProject.year}</p>
                      </div>
                    )}
                    
                    {selectedProject.medium && (
                      <div className="space-y-1">
                        <h3 className={`text-xs font-medium tracking-wider ${styles.projectLabels}`} style={{ fontSize: '11px' }}>MEDIUM</h3>
                        <p className={`text-xs ${styles.projectText}`} style={{ fontSize: '11px' }}>{selectedProject.medium}</p>
                      </div>
                    )}
                    
                    {selectedProject.dimensions && (
                      <div className="space-y-1">
                        <h3 className={`text-xs font-medium tracking-wider ${styles.projectLabels}`} style={{ fontSize: '11px' }}>DIMENSIONS</h3>
                        <p className={`text-xs ${styles.projectText}`} style={{ fontSize: '11px' }}>{selectedProject.dimensions}</p>
                      </div>
                    )}
                  </div>
                  
                  {selectedProject.description && (
                    <div className="space-y-2">
                      <h2 className={`text-sm font-medium tracking-wider ${styles.projectLabels}`} style={{ fontSize: '11px' }}>DESCRIPTION</h2>
                      <p className={`text-xs leading-relaxed ${styles.projectText}`} style={{ fontSize: '11px' }}>{selectedProject.description}</p>
                    </div>
                  )}
                  
                  {selectedProject.details && selectedProject.details.length > 0 && (
                    <div className="space-y-2">
                      <h2 className={`text-sm font-medium tracking-wider ${styles.projectLabels}`} style={{ fontSize: '11px' }}>DETAILS</h2>
                      <ul className="space-y-1">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className={`text-xs ${styles.projectText}`} style={{ fontSize: '11px' }}>
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

      {/* Lightbox */}
      {selectedProject && lightboxImage && (
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          imageSrc={lightboxImage}
          imageAlt={selectedProject.name}
        />
      )}

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen">
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
