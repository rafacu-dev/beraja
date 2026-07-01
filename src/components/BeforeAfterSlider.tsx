import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
}: BeforeAfterSliderProps) {
  return (
    <div
      data-before-after-slider
      className="relative w-full h-[500px] md:h-[620px] overflow-hidden select-none bg-surface-dim touch-none cursor-ew-resize focus:outline-none focus:ring-4 focus:ring-secondary/35"
      role="slider"
      tabIndex={0}
      aria-label="Before and after renovation comparison"
      aria-orientation="horizontal"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={50}
      aria-valuetext="50 percent before image visible"
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After renovation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-label-caps z-10">
        {afterLabel}
      </div>

      {/* Before Image (Foreground, clipped) */}
      <img
        data-before-after-before
        src={beforeImage}
        alt="Before renovation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: 'inset(0 50% 0 0)' }}
      />
      <div
        data-before-after-before-label
        className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 text-label-caps z-10"
        style={{ opacity: 1, transition: 'opacity 0.2s' }}
      >
        {beforeLabel}
      </div>

      {/* Slider Handle */}
      <div
        data-before-after-handle
        className="absolute inset-y-0 w-0.5 bg-white z-20"
        style={{ left: '50%' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-secondary flex items-center justify-center rounded-sm shadow-lg">
          <ChevronsLeftRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
