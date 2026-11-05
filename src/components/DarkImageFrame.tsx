import React, { useState, useEffect } from 'react';

interface DarkImageFrameProps {
  src: string;
  alt?: string;
  title: string;
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

const KNOWN_HASHED_FALLBACKS: Record<string, string> = {
  'clients-list.jpg': '/assets/aistudio/clients-list_15a419dd.jpg',
  'coach-client-overview.jpg':
    '/assets/aistudio/coach-client-overview_c9551a73.jpg',
  'checkin-review.jpg': '/assets/aistudio/checkin-review_63736271.jpg',
  'nutrition-coach-editor.jpg':
    '/assets/aistudio/nutrition-coach-editor_6cae3f60.jpg',
  'nutrition-client-app.jpg':
    '/assets/aistudio/nutrition-client-app_77cc5fa8.jpg',
  'booking-credits.jpg': '/assets/aistudio/booking-credits_93ff9c83.jpg',
  'pair-billing.jpg': '/assets/aistudio/pair-billing_6a549c1f.jpg',
};

export const DarkImageFrame: React.FC<DarkImageFrameProps> = ({
  src,
  alt,
  title,
  caption,
  onEnlarge,
  ring,
}) => {
  const cleanName = src.replace(/^\/+/, '');
  const baseNoExt = cleanName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const hashedPath = KNOWN_HASHED_FALLBACKS[cleanName];

  const candidatePaths = Array.from(
    new Set(
      [
        src,
        `/${cleanName}`,
        hashedPath,
        `/assets/aistudio/${cleanName}`,
        `/img/${cleanName}`,
        `/${baseNoExt}.jpg`,
        `/${baseNoExt}.png`,
        `/assets/aistudio/${baseNoExt}.jpg`,
        `/assets/aistudio/${baseNoExt}.png`,
      ].filter(Boolean) as string[]
    )
  );

  const [pathIdx, setPathIdx] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setPathIdx(0);
    setLoadFailed(false);
  }, [src]);

  const currentSrc = candidatePaths[pathIdx] || src;
  const resolvedAlt = alt || title;

  const handleError = () => {
    if (pathIdx + 1 < candidatePaths.length) {
      setPathIdx((prev) => prev + 1);
    } else {
      setLoadFailed(true);
    }
  };

  return (
    <figure className="w-full bg-[#1B1815] border border-[#F4F1E8]/15 p-3 sm:p-4 space-y-2.5">
      {/* Title above the mockup or screenshot */}
      <div className="flex items-center justify-between pb-2 border-b border-[#F4F1E8]/10 px-1 gap-3">
        <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-[#D8B04A]/60" />
          <span className="w-2 h-2 rounded-full bg-[#F4F1E8]/20" />
          <span className="w-2 h-2 rounded-full bg-[#F4F1E8]/20" />
        </div>
        <div className="text-xs sm:text-sm font-medium text-[#F4F1E8] text-end">
          {title}
        </div>
      </div>

      {/* Image surface with click-to-enlarge (full width on phones, large on desktop) */}
      <button
        type="button"
        onClick={() => !loadFailed && onEnlarge(currentSrc, `${title}: ${caption}`)}
        className="relative block w-full overflow-hidden bg-[#141210] border border-[#F4F1E8]/10 cursor-zoom-in text-start group"
      >
        {!loadFailed ? (
          <img
            src={currentSrc}
            alt={resolvedAlt}
            referrerPolicy="no-referrer"
            onError={handleError}
            className="w-full h-auto block select-none"
          />
        ) : (
          <div className="min-h-[240px] sm:min-h-[300px] w-full bg-[#141210] flex flex-col items-center justify-center p-6 text-center gap-1.5">
            <span className="text-xs sm:text-sm font-medium text-[#F4F1E8]/75">
              {title}
            </span>
            <span className="text-xs text-[#F4F1E8]/45">{caption}</span>
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

      {/* Caption below the mockup or screenshot */}
      <figcaption className="pt-0.5 px-1 text-xs text-[#F4F1E8]/65 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
};
