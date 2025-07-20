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
    const startWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--middle-width') || '25');

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const containerWidth = window.innerWidth;
      const deltaPercent = (deltaX / containerWidth) * 100;
      const newWidth = Math.max(15, Math.min(60, startWidth + deltaPercent));
      
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
      className="relative flex items-center justify-center cursor-col-resize transition-all duration-200 hover:bg-gray-600 group"
      onMouseDown={handleMouseDown}
      style={{
        width: '8px',
        backgroundColor: isResizing ? '#d0d0d0' : 'rgba(255, 255, 255, 0.8)',
        zIndex: 10,
        flexShrink: 0,
        borderLeft: '1px solid rgba(255, 255, 255, 0.8)',
        borderRight: '1px solid rgba(255, 255, 255, 0.8)'
      }}
    >
      {/* Draggable indicator dots */}
      <div className="flex flex-col gap-1 opacity-50 group-hover:opacity-80 transition-opacity">
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
} 