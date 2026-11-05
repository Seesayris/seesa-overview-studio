import React, { useState, useEffect } from 'react';

interface DarkImageFrameProps {
  src: string;
  alt: string;
  caption: string;
  onEnlarge: (resolvedSrc: string, caption: string) => void;
  ring?: {
    top: string;
    left: string;
    width: string;
    height: string;
    shape?: 'pill' | 'circle';
  };
}

export const DarkImageFrame: React.FC<DarkImageFrameProps> = ({
  src,
  alt,
  caption,
  onEnlarge,
  ring,
}) => {
  // Build candidate paths so files in /public/ or /public/assets/aistudio/ resolve seamlessly
  const cleanName = src.replace(/^\/+/, '');
  const baseNoExt = cleanName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const candidatePaths = Array.from(
    new Set([
      src,
      `/${cleanName}`,
      `/assets/aistudio/${cleanName}`,
      `/img/${cleanName}`,
      `/${baseNoExt}.jpg`,
      `/${baseNoExt}.png`,
      `/assets/aistudio/${baseNoExt}.jpg`,
      `/assets/aistudio/${baseNoExt}.png`,
    ])
  );

  const [pathIdx, setPathIdx] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setPathIdx(0);
    setLoadFailed(false);
  }, [src]);

  const currentSrc = candidatePaths[pathIdx] || src;

  const handleError = () => {
    if (pathIdx + 1 < candidatePaths.length) {
      setPathIdx((prev) => prev + 1);
    } else {
      setLoadFailed(true);
    }
  };

  return (
    <div className="bg-[#1B1815] border border-[#F4F1E8]/15 p-2.5 sm:p-3 space-y-2">
      {/* Simple dark frame top bar */}
      <div className="flex items-center justify-between pb-2 border-b border-[#F4F1E8]/10 px-1 gap-3">
        <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-[#F4F1E8]/20" />
          <span className="w-2 h-2 rounded-full bg-[#F4F1E8]/20" />
          <span className="w-2 h-2 rounded-full bg-[#F4F1E8]/20" />
        </div>
        <span className="text-[11px] text-[#F4F1E8]/60 truncate">{caption}</span>
      </div>

      {/* Image surface with click-to-enlarge */}
      <button
        type="button"
        onClick={() => !loadFailed && onEnlarge(currentSrc, caption)}
        className="relative block w-full overflow-hidden bg-[#141210] border border-[#F4F1E8]/10 cursor-zoom-in text-start group"
      >
        {!loadFailed ? (
          <img
            src={currentSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={handleError}
            className="w-full h-auto block select-none"
          />
        ) : (
          <div className="min-h-[220px] sm:min-h-[260px] w-full bg-[#141210] flex items-center justify-center p-6 text-center">
            <span className="text-xs text-[#F4F1E8]/55">{caption}</span>
          </div>
        )}

        {/* Exact thin gold ring when provided */}
        {!loadFailed && ring && (
          <span
            aria-hidden="true"
            style={{
              top: ring.top,
              left: ring.left,
              width: ring.width,
              height: ring.height,
            }}
            className={`gold-highlight-ring pointer-events-none absolute z-10 ${
              ring.shape === 'circle' ? 'rounded-full' : 'rounded-md'
            }`}
          />
        )}
      </button>
    </div>
  );
};
