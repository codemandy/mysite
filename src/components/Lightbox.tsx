'use client';

import { useEffect } from 'react';
import Image from 'next/image';

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

      {/* Featured image */}
      <div className="h-full flex items-center justify-center p-8">
        <div className="relative max-w-4xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="object-contain max-h-[80vh] w-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
} 