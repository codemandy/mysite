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
      className="cursor-col-resize transition-all duration-200 hover:bg-gray-400 group"
      onMouseDown={handleMouseDown}
      style={{
        width: '1px',
        backgroundColor: isResizing ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.2)',
        zIndex: 10,
        flexShrink: 0,
        marginLeft: '4px',
        marginRight: '4px'
      }}
    >
    </div>
  );
} 