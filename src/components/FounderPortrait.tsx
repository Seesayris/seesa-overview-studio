import React, { useState } from 'react';

interface FounderPortraitProps {
  onEnlarge: (src: string, caption: string) => void;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  onEnlarge,
}) => {
  const candidatePaths = [
    '/founder-portrait.jpg',
    '/assets/aistudio/founder-portrait.jpg',
    '/img/founder-portrait.jpg',
    '/founder-portrait.png',
    '/assets/aistudio/founder-portrait.png',
  ];

  const [pathIdx, setPathIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const currentSrc = candidatePaths[pathIdx];
  const altText = 'Sayris Athena, founder';

  const handleError = () => {
    if (pathIdx + 1 < candidatePaths.length) {
      setPathIdx((prev) => prev + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <button
      type="button"
      onClick={() => !failed && onEnlarge(currentSrc, '')}
      aria-label={altText}
      className="w-36 h-44 sm:w-40 sm:h-48 rounded-xl border border-[#D8B04A] bg-[#141210] overflow-hidden shrink-0 cursor-zoom-in relative block transition-opacity duration-500"
    >
      {!failed ? (
        <img
          src={currentSrc}
          alt={altText}
          referrerPolicy="no-referrer"
          onError={handleError}
          className="w-full h-full object-cover object-[50%_20%] block select-none"
        />
      ) : (
        <span className="w-full h-full flex items-center justify-center text-xs text-[#F4F1E8]/55 px-3 text-center">
          {altText}
        </span>
      )}
    </button>
  );
};
