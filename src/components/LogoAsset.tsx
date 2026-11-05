import React from 'react';

export const SEESA_LOGO_PATH = '/assets/aistudio/SEESA_cream_gold_1200w_6e3bfeb3.png';
export const SAYRIS_LOGO_PATH = '/assets/aistudio/SAYRIS_gold_1200w_604b519d.png';

interface LogoAssetProps {
  variant: 'seesa' | 'sayris';
  size?: 'sm' | 'md' | 'lg';
  alt: string;
}

export const LogoAsset: React.FC<LogoAssetProps> = ({
  variant,
  size = 'sm',
  alt,
}) => {
  const src = variant === 'seesa' ? SEESA_LOGO_PATH : SAYRIS_LOGO_PATH;

  const sizeClasses =
    size === 'lg'
      ? 'h-10 sm:h-12'
      : size === 'md'
      ? 'h-7 sm:h-8'
      : 'h-5 sm:h-6';

  return (
    <div className="inline-flex items-center justify-center bg-transparent shrink-0">
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`w-auto object-contain select-none ${sizeClasses}`}
      />
    </div>
  );
};
