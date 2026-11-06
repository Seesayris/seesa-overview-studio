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
  '01_program_builder_english.png':
    '/assets/aistudio/01_program_builder_english_b64f3549.png',
  '02_live_session_history_and_actions.png':
    '/assets/aistudio/02_live_session_history_and_actions_0bf979ca.png',
  '04_program_builder_hebrew_rtl.png':
    '/assets/aistudio/04_program_builder_hebrew_rtl_2fd19368.png',
  '05_versions_and_publish_independent_copies.png':
    '/assets/aistudio/05_versions_and_publish_independent_copies_04f25414.png',
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
    <figure className="w-full space-y-2">
      {/* Small title above the image */}
      <div className="text-xs sm:text-sm font-medium text-[#F4F1E8]">
        {title}
      </div>

      {/* Image sitting directly on the page background (no window bar, no border, no padding, no box) */}
      <button
        type="button"
        onClick={() =>
          !loadFailed && onEnlarge(currentSrc, `${title}: ${caption}`)
        }
        className="relative block w-full overflow-hidden cursor-zoom-in text-start"
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
          <div className="py-8 w-full flex flex-col items-start justify-center gap-1">
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

      {/* Caption below the image */}
      <figcaption className="text-xs text-[#F4F1E8]/65 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
};
