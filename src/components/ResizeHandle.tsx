'use client';

import { useState, useCallback } from 'react';

interface ResizeHandleProps {
  onResize: (newWidth: number) => void;
}

export default function ResizeHandle({ onResize }: ResizeHandleProps) {
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.clientX;
    const startWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--left-width') || '40');

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const containerWidth = window.innerWidth;
      const deltaPercent = (deltaX / containerWidth) * 100;
      const newWidth = Math.max(20, Math.min(80, startWidth + deltaPercent));
      
      onResize(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [onResize]);

  return (
    <div
      className={`w-1 bg-black cursor-col-resize transition-colors hover:bg-gray-700 ${
        isResizing ? 'bg-gray-700' : ''
      }`}
      onMouseDown={handleMouseDown}
      style={{
        zIndex: 10,
        flexShrink: 0
      }}
    />
  );
} 