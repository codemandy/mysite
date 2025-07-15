'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import Lightbox from './Lightbox';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <div className="group cursor-pointer relative w-full" onClick={openLightbox}>
        <div className="relative w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={600}
            className="w-full h-auto group-hover:opacity-90 transition-opacity"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
        
        <div className="text-left">
          <p className="text-sm tracking-tight">{project.name}</p>
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