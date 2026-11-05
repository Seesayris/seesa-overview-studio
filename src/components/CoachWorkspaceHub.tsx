import React from 'react';
import { Lang, storyContent } from '../content/storyData';
import { LogoAsset } from './LogoAsset';
import { DarkImageFrame } from './DarkImageFrame';

interface CoachWorkspaceHubProps {
  lang: Lang;
  onEnlarge: (src: string, caption: string) => void;
}

export const CoachWorkspaceHub: React.FC<CoachWorkspaceHubProps> = ({
  lang,
  onEnlarge,
}) => {
  const hub = storyContent[lang].platform.workspaceHub;
  const mapImageSrc =
    lang === 'he' ? '/workspace-map-he.jpg' : '/workspace-map-en.jpg';

  // 12 evenly spaced positions around the circle (starting at 12 o'clock, every 30 degrees)
  const radiusX = 37;
  const radiusY = 38;
  const nodePositions = hub.nodes.map((label, idx) => {
    const angleDeg = idx * 30 - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = 50 + radiusX * Math.cos(angleRad);
    const y = 50 + radiusY * Math.sin(angleRad);
    return {
      label,
      x,
      y,
    };
  });

  return (
    <div className="py-7 sm:py-9 border-b border-[#F4F1E8]/10 space-y-6">
      <div className="space-y-2 max-w-3xl">
        <h3 className="text-lg sm:text-xl font-semibold text-[#F4F1E8] tracking-tight">
          {hub.title}
        </h3>
        <p className="text-sm sm:text-base text-[#F4F1E8]/78 leading-relaxed">
          {hub.text}
        </p>
      </div>

      {/* Desktop: Radial Hub with SEESA logo image in center circle and gold lines to 12 nodes */}
      <div className="hidden md:block bg-[#1B1815] border border-[#F4F1E8]/12 p-6">
        <div className="relative w-full max-w-3xl h-[480px] mx-auto">
          {/* Gold connecting lines from center to all 12 nodes */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <circle
              cx="50"
              cy="50"
              r="37.5"
              fill="none"
              stroke="#D8B04A"
              strokeOpacity="0.16"
              strokeWidth="0.2"
              strokeDasharray="1 1"
            />
            {nodePositions.map((node, idx) => (
              <line
                key={idx}
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke="#D8B04A"
                strokeOpacity="0.55"
                strokeWidth="0.3"
              />
            ))}
          </svg>

          {/* Center Circle with SEESA Logo Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-36 h-36 rounded-full bg-[#141210] border border-[#D8B04A] shadow-[0_0_28px_rgba(216,176,74,0.18)] flex items-center justify-center p-4">
            <LogoAsset variant="seesa" size="md" alt="SEESA" />
          </div>

          {/* 12 Labelled Nodes around the circle */}
          {nodePositions.map((node, idx) => (
            <div
              key={idx}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 px-3 py-1.5 bg-[#141210] border border-[#D8B04A]/60 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#D8B04A] shrink-0"
              />
              <span className="text-xs sm:text-sm font-medium text-[#F4F1E8]">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Phone: SEESA logo image in center circle with 3-column grid of the 12 labels underneath */}
      <div className="md:hidden bg-[#1B1815] border border-[#F4F1E8]/12 p-5 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-[#141210] border border-[#D8B04A] shadow-[0_0_20px_rgba(216,176,74,0.16)] flex items-center justify-center p-3">
          <LogoAsset variant="seesa" size="sm" alt="SEESA" />
        </div>

        {/* Short connecting gold stem */}
        <div aria-hidden="true" className="w-[1px] h-5 bg-[#D8B04A]/65" />

        {/* 3-column grid of the same 12 labels under the logo */}
        <div className="w-full grid grid-cols-3 gap-2 pt-1 border-t border-[#D8B04A]/35">
          {hub.nodes.map((label, idx) => (
            <div
              key={idx}
              className="bg-[#141210] border border-[#D8B04A]/45 px-2 py-2.5 text-center flex items-center justify-center"
            >
              <span className="text-xs font-medium text-[#F4F1E8] leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* /workspace-map-en.jpg in English and /workspace-map-he.jpg in Hebrew, full content width, opens enlarged on tap/click */}
      <div className="w-full">
        <DarkImageFrame
          src={mapImageSrc}
          alt={hub.mapImageTitle}
          title={hub.mapImageTitle}
          caption={hub.mapImageCaption}
          onEnlarge={onEnlarge}
        />
      </div>
    </div>
  );
};
