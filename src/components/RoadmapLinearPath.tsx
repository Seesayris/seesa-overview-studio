import React, { useEffect, useRef, useState } from 'react';
import { ItemStatus, Lang, storyContent } from '../content/storyData';

type StatusFilter = 'all' | ItemStatus;

interface RoadmapLinearPathProps {
  lang: Lang;
}

export const RoadmapLinearPath: React.FC<RoadmapLinearPathProps> = ({
  lang,
}) => {
  const r = storyContent[lang].roadmap;
  const [filter, setFilter] = useState<StatusFilter>('all');
  const [pathProgress, setPathProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setPathProgress(1);
      return;
    }

    const updateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh * 0.82;
      const totalDistance = Math.max(1, rect.height - vh * 0.15);
      const covered = startY - rect.top;
      const nextProgress = Math.min(1, Math.max(0, covered / totalDistance));
      setPathProgress((prev) => Math.max(prev, nextProgress));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const getStatusBadgeClasses = (status: ItemStatus) => {
    if (status === 'live') {
      // Live (gold)
      return 'bg-[#D8B04A] text-[#141210] border-[#D8B04A] font-semibold';
    }
    if (status === 'inBuild') {
      // In build (outlined)
      return 'bg-transparent text-[#D8B04A] border-[#D8B04A] font-medium';
    }
    // Planned (muted)
    return 'bg-[#141210] text-[#F4F1E8]/60 border-[#F4F1E8]/25 font-normal';
  };

  const getChipContainerClasses = (status: ItemStatus) => {
    if (status === 'live') {
      return 'border-[#D8B04A]/55 bg-[#141210]';
    }
    if (status === 'inBuild') {
      return 'border-[#D8B04A]/35 bg-[#141210]';
    }
    return 'border-[#F4F1E8]/15 bg-[#141210]/70';
  };

  const legendBadges: { key: ItemStatus; label: string }[] = [
    { key: 'live', label: r.liveLabel },
    { key: 'inBuild', label: r.inBuildLabel },
    { key: 'planned', label: r.plannedLabel },
  ];

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Badge Legend (Live gold, In build outlined, Planned muted) */}
      <div className="flex flex-wrap items-center gap-3 p-3.5 bg-[#1B1815] border border-[#F4F1E8]/12 w-fit">
        {legendBadges.map((b) => {
          const isSelected = filter === b.key;
          return (
            <button
              key={b.key}
              type="button"
              onClick={() =>
                setFilter((prev) => (prev === b.key ? 'all' : b.key))
              }
              className={`min-h-[36px] px-3 py-1 text-xs border transition-all flex items-center gap-2 ${getStatusBadgeClasses(
                b.key
              )} ${isSelected ? 'ring-2 ring-[#F4F1E8]/70' : ''}`}
            >
              <span>{b.label}</span>
            </button>
          );
        })}
      </div>

      {/* Five phases along one vertical path with numbered nodes 1 to 5; alternating left and right on desktop */}
      <div className="relative">
        {/* Continuous vertical path line (start on mobile, centered on desktop) */}
        <div
          aria-hidden="true"
          className="absolute top-4 bottom-4 start-4 md:start-1/2 md:-translate-x-1/2 w-[2px] bg-[#D8B04A]/20"
        >
          <div
            className="gold-progress-fill w-full h-full bg-[#D8B04A] origin-top transition-transform duration-200"
            style={{ transform: `scaleY(${pathProgress})` }}
          />
        </div>

        <div className="space-y-8 md:space-y-10">
          {r.phases.map((phase, idx) => {
            const visibleItems =
              filter === 'all'
                ? phase.items
                : phase.items.filter((item) => item.status === filter);

            if (filter !== 'all' && visibleItems.length === 0) {
              return null;
            }

            const phaseThreshold = idx / Math.max(1, r.phases.length);
            const isNodeReached = pathProgress >= phaseThreshold;
            const isOddPhase = phase.number % 2 === 1;

            return (
              <div
                key={phase.number}
                className="relative ps-12 md:ps-0 md:grid md:grid-cols-12 md:gap-8 items-start"
              >
                {/* Numbered Node (1 to 5) on the vertical path */}
                <div
                  aria-hidden="true"
                  className={`
                    absolute top-4 start-0 md:start-1/2 md:-translate-x-1/2 z-10
                    w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-colors duration-300
                    ${
                      isNodeReached
                        ? 'bg-[#D8B04A] border-[#D8B04A] text-[#141210] roadmap-node-reached'
                        : 'bg-[#141210] border-[#D8B04A]/60 text-[#D8B04A]'
                    }
                  `}
                >
                  {phase.number}
                </div>

                {/* Phase Card: alternates left and right of the center line on desktop */}
                <div
                  className={`
                    md:col-span-5 bg-[#1B1815] border border-[#F4F1E8]/15 hover:border-[#D8B04A]/50 transition-colors p-5 sm:p-6 space-y-4
                    ${
                      isOddPhase
                        ? 'md:col-start-1 md:me-2'
                        : 'md:col-start-8 md:ms-2'
                    }
                  `}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D8B04A]/15 border border-[#D8B04A]/60 text-[#D8B04A] text-xs font-semibold shrink-0">
                        {phase.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-[#F4F1E8] tracking-tight">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#F4F1E8]/78 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Phase items as chips with a status badge: Live (gold), In build (outlined), Planned (muted) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {visibleItems.map((item) => (
                      <div
                        key={item.label}
                        className={`inline-flex flex-wrap items-center gap-2 px-3 py-1.5 border text-xs sm:text-[13px] leading-snug ${getChipContainerClasses(
                          item.status
                        )}`}
                      >
                        <span className="text-[#F4F1E8]/90">{item.label}</span>
                        <span
                          className={`px-2 py-0.5 text-[11px] border leading-none shrink-0 ${getStatusBadgeClasses(
                            item.status
                          )}`}
                        >
                          {item.statusText}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
