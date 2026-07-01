import React, { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;

    setSliderPosition(percentage);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setSliderPosition((value) => Math.max(0, value - 5));
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setSliderPosition((value) => Math.min(100, value + 5));
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) updatePosition(event.clientX);
    };
    const handleTouchMove = (event: TouchEvent) => {
      if (isDragging) updatePosition(event.touches[0].clientX);
    };
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[620px] overflow-hidden cursor-ew-resize select-none bg-surface-dim touch-none focus:outline-none focus:ring-4 focus:ring-secondary/35"
      role="slider"
      tabIndex={0}
      aria-label="Before and after renovation comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuetext={`${Math.round(sliderPosition)} percent before image visible`}
      onMouseDown={(event) => {
        setIsDragging(true);
        updatePosition(event.clientX);
      }}
      onTouchStart={(event) => {
        setIsDragging(true);
        updatePosition(event.touches[0].clientX);
      }}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After renovation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-label-caps z-10">
        AFTER
      </div>

      {/* Before Image (Foreground, clipped) */}
      <img
        src={beforeImage}
        alt="Before renovation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      <div
        className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 text-label-caps z-10"
        style={{ opacity: sliderPosition < 10 ? 0 : 1, transition: 'opacity 0.2s' }}
      >
        BEFORE
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-secondary flex items-center justify-center rounded-sm shadow-lg">
          <ChevronsLeftRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
