import React from 'react';
import { Lang, storyContent } from '../content/storyData';
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

  return (
    <div className="space-y-6">
      <div className="space-y-2 max-w-3xl">
        <h3 className="text-lg sm:text-xl font-semibold text-[#F4F1E8] tracking-tight">
          {hub.title}
        </h3>
        <p className="text-sm sm:text-base text-[#F4F1E8]/78 leading-relaxed">
          {hub.text}
        </p>
      </div>

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
