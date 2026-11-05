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
    <div className="py-6 sm:py-8 border-b border-[#F4F1E8]/10 last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Scrolling Step Captions Column (4 cols on lg so the real image frame is 2/3 of content width) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2 py-0.5 border border-[#D8B04A]/60 text-[#D8B04A] font-medium">
                {badge}
              </span>
              {secondaryBadge && (
                <span className="px-2 py-0.5 border border-[#F4F1E8]/25 text-[#F4F1E8]/75 font-medium">
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

          {/* Scroll-triggered Step Captions */}
          <div className="space-y-2.5 pt-1">
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
                  className={`card-lift min-h-[44px] p-3.5 border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B1815] border-[#D8B04A] text-[#F4F1E8]'
                      : 'bg-[#1B1815]/45 border-[#F4F1E8]/10 text-[#F4F1E8]/65 hover:border-[#F4F1E8]/25'
                  }`}
                >
                  <div className="text-[11px] text-[#D8B04A] font-medium mb-0.5">
                    {step.label}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed">
                    {step.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pinned Large Device Frame Column (8 cols on lg = two thirds of content width) */}
        <div className="lg:col-span-8 lg:sticky lg:top-20">
          <div className="space-y-2.5">
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

            {currentSpot && (
              <div
                key={currentSpot.id}
                className="px-3.5 py-2 bg-[#1B1815] border border-[#D8B04A]/40 flex flex-wrap items-center justify-between gap-2 text-xs transition-opacity duration-300"
              >
                <span className="text-[#D8B04A] font-medium">
                  {currentSpot.label}
                </span>
                <span className="text-[#F4F1E8]/85">{currentSpot.text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
