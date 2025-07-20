'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import Lightbox from './Lightbox';

interface ProjectCardProps {
  project: Project;
  onProjectSelect?: (project: Project) => void;
  onProjectClear?: () => void;
}

export default function ProjectCard({ project, onProjectSelect, onProjectClear }: ProjectCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleClick = () => {
    if (isDesktop && onProjectSelect) {
      onProjectSelect(project);
    } else {
      setIsLightboxOpen(true);
    }
  };

  const handleDoubleClick = () => {
    if (isDesktop && onProjectClear) {
      onProjectClear();
    }
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <div 
        className="group cursor-pointer relative w-full" 
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ backgroundColor: '#e8e8e8' }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <Lightbox
        isOpen={isLightboxOpen}
        imageSrc={project.image}
        imageAlt={project.name}
        onClose={closeLightbox}
      />
    </>
  );
} 