import React, { useEffect, useRef, useState } from 'react';
import { Lang, storyContent } from '../content/storyData';

type StageFilter = 'all' | 'live' | 'inBuild' | 'planned';

interface RoadmapLinearPathProps {
  lang: Lang;
}

export const RoadmapLinearPath: React.FC<RoadmapLinearPathProps> = ({
  lang,
}) => {
  const r = storyContent[lang].roadmap;
  const [filter, setFilter] = useState<StageFilter>('all');
  const [pathProgress, setPathProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Extract "now" / "עכשיו" from the existing roadmap title ("Now, next and later" / "עכשיו, בהמשך ובעתיד")
  const nowMarkerWord = r.title.split(',')[0].trim().toLowerCase();

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
      const startY = vh * 0.8;
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

  const stages = [
    {
      key: 'live' as const,
      badge: r.liveLabel,
      items: r.liveItems,
      startThreshold: 0,
      endThreshold: 0.38,
    },
    {
      key: 'inBuild' as const,
      badge: r.inBuildLabel,
      items: r.inBuildItems,
      startThreshold: 0.38,
      endThreshold: 0.64,
    },
    {
      key: 'planned' as const,
      badge: r.plannedLabel,
      items: r.plannedItems,
      startThreshold: 0.64,
      endThreshold: 1,
    },
  ];

  const visibleStages =
    filter === 'all' ? stages : stages.filter((s) => s.key === filter);

  return (
    <div ref={containerRef} className="space-y-6 max-w-2xl">
      {/* Status filter buttons using exact status labels (clicking active button resets to all) */}
      <div className="flex flex-wrap items-center gap-2">
        {stages.map((s) => {
          const isActive = filter === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() =>
                setFilter((prev) => (prev === s.key ? 'all' : s.key))
              }
              className={`card-lift min-h-[44px] px-3.5 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-[#D8B04A] text-[#141210] border-[#D8B04A]'
                  : 'bg-[#1B1815] text-[#F4F1E8]/80 border-[#F4F1E8]/15 hover:border-[#D8B04A]/65'
              }`}
            >
              {s.badge}
            </button>
          );
        })}
      </div>

      {/* One single vertical linear path on both phone and desktop */}
      <div className="space-y-0">
        {visibleStages.map((stage) => {
          const isLive = stage.key === 'live';
          const isInBuild = stage.key === 'inBuild';

          const stageSpan = stage.endThreshold - stage.startThreshold;
          const stageFill = Math.min(
            1,
            Math.max(0, (pathProgress - stage.startThreshold) / stageSpan)
          );

          const badgeClasses = isLive
            ? 'border-[#D8B04A] bg-[#D8B04A] text-[#141210]'
            : isInBuild
            ? 'border-[#D8B04A]/65 bg-[#D8B04A]/18 text-[#D8B04A]'
            : 'border-[#F4F1E8]/30 bg-transparent text-[#F4F1E8]/75';

          return (
            <div
              key={stage.key}
              className="relative ps-8 sm:ps-10 pb-8 last:pb-2"
            >
              {/* Single Vertical Line Stretch for this Stage (start-2 respects LTR left / RTL right) */}
              <div
                aria-hidden="true"
                className="absolute top-0 bottom-0 start-2 w-[2px]"
              >
                {isLive ? (
                  <>
                    <div className="w-full h-full bg-[#D8B04A]/20" />
                    <div
                      className="gold-progress-fill absolute top-0 inset-x-0 bg-[#D8B04A] origin-top transition-transform duration-200"
                      style={{
                        height: '100%',
                        transform: `scaleY(${stageFill})`,
                      }}
                    />
                  </>
                ) : isInBuild ? (
                  <>
                    <div className="w-full h-full bg-[#D8B04A]/12" />
                    <div
                      className="gold-progress-fill absolute top-0 inset-x-0 bg-[#D8B04A]/50 origin-top transition-transform duration-200"
                      style={{
                        height: '100%',
                        transform: `scaleY(${stageFill})`,
                      }}
                    />
                  </>
                ) : (
                  <div className="w-0 h-full border-s-2 border-dashed border-[#F4F1E8]/35" />
                )}
              </div>

              {/* Stage Status Badge */}
              <div className="mb-3 pt-1">
                <span
                  className={`inline-block px-2.5 py-0.5 text-xs font-medium border ${badgeClasses}`}
                >
                  {stage.badge}
                </span>
              </div>

              {/* Items as nodes along the single vertical line */}
              <div className="space-y-2.5">
                {stage.items.map((item, idx) => {
                  const nodeThreshold =
                    (idx + 0.4) / Math.max(1, stage.items.length);
                  const isNodeReached = stageFill >= nodeThreshold;

                  const nodeCircleClasses = isLive
                    ? isNodeReached
                      ? 'bg-[#D8B04A] border-[#D8B04A] roadmap-node-reached'
                      : 'bg-[#141210] border-[#D8B04A]/50'
                    : isInBuild
                    ? isNodeReached
                      ? 'bg-[#D8B04A]/55 border-[#D8B04A]/85 roadmap-node-reached'
                      : 'bg-[#141210] border-[#D8B04A]/35'
                    : isNodeReached
                    ? 'bg-[#141210] border-[#F4F1E8]/65 border-dashed roadmap-node-reached'
                    : 'bg-[#141210] border-[#F4F1E8]/35 border-dashed';

                  const cardBorderClasses = isLive
                    ? isNodeReached
                      ? 'border-[#D8B04A]/50 bg-[#1B1815]'
                      : 'border-[#F4F1E8]/12 bg-[#1B1815]/70'
                    : isInBuild
                    ? isNodeReached
                      ? 'border-[#D8B04A]/35 bg-[#1B1815]/85'
                      : 'border-[#F4F1E8]/10 bg-[#1B1815]/50'
                    : 'border-[#F4F1E8]/15 border-dashed bg-transparent';

                  return (
                    <div key={item} className="relative flex items-center">
                      {/* Node directly on the vertical line */}
                      <span
                        aria-hidden="true"
                        className={`absolute -start-[29px] sm:-start-[37px] w-3 h-3 rounded-full border transition-colors duration-300 ${nodeCircleClasses}`}
                      />

                      <div
                        className={`card-lift w-full px-4 py-2.5 border transition-colors ${cardBorderClasses}`}
                      >
                        <span className="text-sm text-[#F4F1E8]/90 leading-snug block">
                          {item}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Small "now" marker sitting where Live ends */}
              {isLive && (
                <div className="relative pt-4 flex items-center">
                  <span
                    aria-hidden="true"
                    className="absolute -start-[30px] sm:-start-[38px] w-3.5 h-3.5 rounded-full bg-[#D8B04A] border-2 border-[#141210]"
                  />
                  <span className="px-2 py-0.5 bg-[#D8B04A] text-[#141210] text-[11px] font-semibold leading-none">
                    {nowMarkerWord}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
