'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, imageAlt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-gray-600 hover:text-gray-900 text-2xl font-light"
      >
        ×
      </button>

      {/* Gallery content */}
      <div className="h-full overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured image */}
          <div className="mb-12 flex justify-center">
            <div className="relative max-w-4xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={900}
                className="object-contain max-h-[60vh] w-auto"
                priority
              />
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  // Could add navigation between images here
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 