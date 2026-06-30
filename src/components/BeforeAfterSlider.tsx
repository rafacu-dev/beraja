import React, {
  useState,
  useRef,
  useEffect,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;

    setSliderPosition(percentage);
  };

  const onMouseMove = (e: ReactMouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: ReactTouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden cursor-ew-resize select-none bg-surface-dim"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
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
        className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-label-caps z-10"
        style={{ opacity: sliderPosition < 10 ? 0 : 1, transition: 'opacity 0.2s' }}
      >
        BEFORE
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-secondary flex items-center justify-center rounded-sm shadow-lg">
          <ChevronsLeftRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
