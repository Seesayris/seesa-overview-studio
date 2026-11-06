import React, { useEffect, useRef, useState } from 'react';
import { DarkImageFrame } from './DarkImageFrame';

export interface ImageHighlightSpot {
  id: string;
  label: string;
  text: string;
  /** Exact percentage coordinates (0-100) for the thin gold ring over the real image */
  ring?: {
    top: string;
    left: string;
    width: string;
    height: string;
    shape?: 'pill' | 'circle';
  };
}

interface PinnedHighlightBlockProps {
  badge: string;
  secondaryBadge?: string;
  title: string;
  description: string;
  imageTitle: string;
  caption: string;
  imageSrc: string;
  steps: ImageHighlightSpot[];
  onEnlargeImage?: (src: string, caption: string) => void;
}

export const PinnedHighlightBlock: React.FC<PinnedHighlightBlockProps> = ({
  badge,
  secondaryBadge,
  title,
  description,
  imageTitle,
  caption,
  imageSrc,
  steps,
  onEnlargeImage,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(idx);
            }
          });
        },
        {
          rootMargin: '-28% 0px -42% 0px',
          threshold: 0.25,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [steps.length]);

  const currentSpot = steps[activeStep] || steps[0];

  return (
    <div className="space-y-6">
      <div className="space-y-2 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Status chip */}
          <span className="px-2.5 py-0.5 border border-[#D8B04A] text-[#D8B04A] font-medium">
            {badge}
          </span>
          {secondaryBadge && (
            <span className="px-2.5 py-0.5 border border-[#F4F1E8]/25 text-[#F4F1E8]/75 font-medium">
              {secondaryBadge}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-[#F4F1E8] tracking-tight">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-[#F4F1E8]/75 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Step Captions as a plain list with thin 1px divider lines (no background fill, no outer box) */}
      <div className="divide-y divide-[#F4F1E8]/10 border-y border-[#F4F1E8]/10">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              onClick={() => setActiveStep(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveStep(idx);
                }
              }}
              className={`py-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 cursor-pointer transition-colors ${
                isSelected ? 'text-[#F4F1E8]' : 'text-[#F4F1E8]/60 hover:text-[#F4F1E8]/85'
              }`}
            >
              <span className="text-xs font-medium text-[#D8B04A] shrink-0">
                {step.label}
              </span>
              <span className="text-xs sm:text-sm leading-relaxed">
                {step.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Full column width image directly on the page background */}
      <div className="w-full">
        <DarkImageFrame
          src={imageSrc}
          alt={imageTitle}
          title={imageTitle}
          caption={caption}
          onEnlarge={(resolvedSrc, cap) =>
            onEnlargeImage && onEnlargeImage(resolvedSrc, cap)
          }
          ring={currentSpot?.ring}
        />
      </div>
    </div>
  );
};
