/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Watch } from 'lucide-react';
import { storyContent, Lang } from './content/storyData';
import { LogoAsset } from './components/LogoAsset';
import { PinnedHighlightBlock } from './components/PinnedHighlightBlock';
import { RoadmapLinearPath } from './components/RoadmapLinearPath';
import { DarkImageFrame } from './components/DarkImageFrame';
import { FounderPortrait } from './components/FounderPortrait';
import { CoachWorkspaceHub } from './components/CoachWorkspaceHub';

const IMG_PROG_EN = '/assets/aistudio/01_program_builder_english_b64f3549.png';
const IMG_PROG_HE = '/assets/aistudio/04_program_builder_hebrew_rtl_2fd19368.png';
const IMG_LIVE_SESSION =
  '/assets/aistudio/02_live_session_history_and_actions_0bf979ca.png';
const IMG_VERSIONS =
  '/assets/aistudio/05_versions_and_publish_independent_copies_04f25414.png';
const IMG_EXERCISE_LIB = '/library-screen.jpg';
const IMG_EXERCISE_DETAIL = '/exercise-detail.jpg';
const IMG_HEALTH_DECL = '/health-declaration-review.jpg';
const IMG_LEAD_ATTR = '/lead-attribution.jpg';
const IMG_TIMELINE = '/inside-out-timeline.jpg';

const IMG_CLIENTS_LIST = '/clients-list.jpg';
const IMG_CLIENT_OVERVIEW = '/coach-client-overview.jpg';
const IMG_CHECKIN_REVIEW = '/checkin-review.jpg';
const IMG_NUTRITION_COACH = '/nutrition-coach-editor.jpg';
const IMG_NUTRITION_CLIENT = '/nutrition-client-app.jpg';
const IMG_CALENDAR_WEEK = '/calendar-week.jpg';
const IMG_BOOKING_CREDITS = '/booking-credits.jpg';
const IMG_PAIR_BILLING = '/pair-billing.jpg';
const IMG_MARKETPLACE = '/marketplace.jpg';

type ActiveSectionId =
  | 'top'
  | 'problem'
  | 'what'
  | 'platform'
  | 'structure'
  | 'security'
  | 'roadmap'
  | 'model'
  | 'team'
  | 'ask'
  | 'contact';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [isFadingLang, setIsFadingLang] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSectionId>('top');
  const [lineProgress, setLineProgress] = useState(0.06);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const [reachedSections, setReachedSections] = useState<
    Record<ActiveSectionId, boolean>
  >({
    top: true,
    problem: false,
    what: false,
    platform: false,
    structure: false,
    security: false,
    roadmap: false,
    model: false,
    team: false,
    ask: false,
    contact: false,
  });
  const [visibleSteps, setVisibleSteps] = useState<Record<string, boolean>>({});

  const storyContainerRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLElement | null>(null);
  const problemRef = useRef<HTMLElement | null>(null);
  const whatRef = useRef<HTMLElement | null>(null);
  const platformRef = useRef<HTMLElement | null>(null);
  const structureRef = useRef<HTMLElement | null>(null);
  const securityRef = useRef<HTMLElement | null>(null);
  const roadmapRef = useRef<HTMLElement | null>(null);
  const modelRef = useRef<HTMLElement | null>(null);
  const teamRef = useRef<HTMLElement | null>(null);
  const askRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const dir = lang === 'he' ? 'rtl' : 'ltr';
  const content = storyContent[lang];

  // Sync document lang and dir attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  // Close enlarged image modal on Escape
  useEffect(() => {
    if (!enlargedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setEnlargedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enlargedImage]);

  // Smooth language cross-fade handler
  const handleSwitchLanguage = (targetLang: Lang) => {
    if (targetLang === lang) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setLang(targetLang);
      return;
    }
    setIsFadingLang(true);
    window.setTimeout(() => {
      setLang(targetLang);
      window.setTimeout(() => {
        setIsFadingLang(false);
      }, 40);
    }, 150);
  };

  // Opening door transition on load or first scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setDoorsOpen(true);
      setLineProgress(1);
      setReachedSections({
        top: true,
        problem: true,
        what: true,
        platform: true,
        structure: true,
        security: true,
        roadmap: true,
        model: true,
        team: true,
        ask: true,
        contact: true,
      });
      return;
    }

    const timer = window.setTimeout(() => {
      setDoorsOpen(true);
    }, 140);

    const openOnScroll = () => {
      setDoorsOpen(true);
    };

    window.addEventListener('scroll', openOnScroll, {
      passive: true,
      once: true,
    });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', openOnScroll);
    };
  }, []);

  // Scroll progress for the drawing gold line and section node activation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const updateScrollStory = () => {
      if (!storyContainerRef.current) return;

      const rect = storyContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(1, rect.height - viewportHeight * 0.45);
      const scrolled = Math.max(0, -rect.top + viewportHeight * 0.28);
      const rawProgress = Math.min(
        1,
        Math.max(0.05, scrolled / totalScrollable)
      );

      if (!prefersReducedMotion) {
        setLineProgress(rawProgress);
      } else {
        setLineProgress(1);
      }

      const triggerLineY = viewportHeight * 0.55;

      const sectionRefs: { id: ActiveSectionId; el: HTMLElement | null }[] = [
        { id: 'top', el: topRef.current },
        { id: 'problem', el: problemRef.current },
        { id: 'what', el: whatRef.current },
        { id: 'platform', el: platformRef.current },
        { id: 'structure', el: structureRef.current },
        { id: 'security', el: securityRef.current },
        { id: 'roadmap', el: roadmapRef.current },
        { id: 'model', el: modelRef.current },
        { id: 'team', el: teamRef.current },
        { id: 'ask', el: askRef.current },
        { id: 'contact', el: contactRef.current },
      ];

      setReachedSections((prev) => {
        const next = { ...prev };
        sectionRefs.forEach(({ id, el }) => {
          if (id === 'top' || prefersReducedMotion) {
            next[id] = true;
          } else if (el) {
            const bounds = el.getBoundingClientRect();
            if (bounds.top <= triggerLineY) {
              next[id] = true;
            }
          }
        });
        return next;
      });

      const navTrigger = viewportHeight * 0.42;
      let currentActive: ActiveSectionId = 'top';
      for (const { id, el } of sectionRefs) {
        if (el) {
          const bounds = el.getBoundingClientRect();
          if (bounds.top <= navTrigger) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    updateScrollStory();
    window.addEventListener('scroll', updateScrollStory, { passive: true });
    window.addEventListener('resize', updateScrollStory, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollStory);
      window.removeEventListener('resize', updateScrollStory);
    };
  }, []);

  // IntersectionObserver for staggered step cards and section title slides
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const elements = document.querySelectorAll<HTMLElement>('[data-step-id]');

    if (prefersReducedMotion) {
      const allVisible: Record<string, boolean> = {};
      elements.forEach((el) => {
        const id = el.dataset.stepId;
        if (id) allVisible[id] = true;
      });
      setVisibleSteps(allVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.stepId;
            if (id) {
              setVisibleSteps((prev) =>
                prev[id] ? prev : { ...prev, [id]: true }
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content.contact.email).catch(() => {});
    }
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1800);
  };

  const navItems = [
    { id: 'problem', label: content.header.problem },
    { id: 'platform', label: content.header.platform },
    { id: 'structure', label: content.header.structure },
    { id: 'security', label: content.header.security },
    { id: 'roadmap', label: content.header.roadmap },
    { id: 'model', label: content.header.model },
    { id: 'team', label: content.header.team },
    { id: 'ask', label: content.header.ask },
    { id: 'contact', label: content.header.contact },
  ];

  const conceptDesignCaption = content.platform.captions.conceptDesign;

  // Feature cards in Platform section, each with large image(s) (full width on phones, at least two thirds on desktop), title above and caption below
  const platformFeatureCards = [
    {
      id: 'plat-checkins',
      status: content.platform.clientsAndCheckIns.status,
      secondaryStatus: undefined,
      title: content.platform.clientsAndCheckIns.title,
      description: content.platform.clientsAndCheckIns.description,
      extraNote: undefined,
      hasWatchIcons: false,
      images: [
        {
          src: IMG_CLIENTS_LIST,
          title: content.platform.clientsAndCheckIns.imageTitles[0],
          caption: conceptDesignCaption,
        },
        {
          src: IMG_CLIENT_OVERVIEW,
          title: content.platform.clientsAndCheckIns.imageTitles[1],
          caption: conceptDesignCaption,
        },
        {
          src: IMG_CHECKIN_REVIEW,
          title: content.platform.clientsAndCheckIns.imageTitles[2],
          caption: conceptDesignCaption,
        },
      ],
    },
    {
      id: 'plat-nutrition',
      status: content.platform.nutritionPlans.statusEditor,
      secondaryStatus: content.platform.nutritionPlans.statusCalculation,
      title: content.platform.nutritionPlans.title,
      description: content.platform.nutritionPlans.description,
      extraNote: undefined,
      hasWatchIcons: false,
      images: [
        {
          src: IMG_NUTRITION_COACH,
          title: content.platform.nutritionPlans.imageTitles[0],
          caption: conceptDesignCaption,
        },
        {
          src: IMG_NUTRITION_CLIENT,
          title: content.platform.nutritionPlans.imageTitles[1],
          caption: conceptDesignCaption,
        },
      ],
    },
    {
      id: 'plat-scheduling',
      status: content.platform.scheduling.status,
      secondaryStatus: undefined,
      title: content.platform.scheduling.title,
      description: content.platform.scheduling.description,
      extraNote: undefined,
      hasWatchIcons: false,
      images: [
        {
          src: IMG_CALENDAR_WEEK,
          title: content.platform.scheduling.imageTitles[0],
          caption: conceptDesignCaption,
        },
        {
          src: IMG_BOOKING_CREDITS,
          title: content.platform.scheduling.imageTitles[1],
          caption: conceptDesignCaption,
        },
      ],
    },
    {
      id: 'plat-payments',
      status: content.platform.payments.status,
      secondaryStatus: content.platform.payments.secondaryStatus,
      title: content.platform.payments.title,
      description: content.platform.payments.description,
      extraNote: content.platform.payments.onlinePaymentsNote,
      hasWatchIcons: false,
      images: [
        {
          src: IMG_PAIR_BILLING,
          title: content.platform.payments.imageTitle,
          caption: conceptDesignCaption,
        },
      ],
    },
    {
      id: 'plat-health',
      status: content.platform.healthDeclarations.status,
      secondaryStatus: content.platform.healthDeclarations.secondaryStatus,
      title: content.platform.healthDeclarations.title,
      description: content.platform.healthDeclarations.description,
      extraNote: undefined,
      hasWatchIcons: false,
      images: [
        {
          src: IMG_HEALTH_DECL,
          title: content.platform.healthDeclarations.title,
          caption: conceptDesignCaption,
        },
      ],
    },
    {
      id: 'plat-leads',
      status: content.platform.leadTracking.status,
      secondaryStatus: undefined,
      title: content.platform.leadTracking.title,
      description: content.platform.leadTracking.description,
      extraNote: undefined,
      hasWatchIcons: false,
      images: [
        {
          src: IMG_LEAD_ATTR,
          title: content.platform.leadTracking.title,
          caption: conceptDesignCaption,
        },
      ],
    },
    {
      id: 'plat-client-area',
      status: content.platform.clientPersonalArea.status,
      secondaryStatus: content.platform.clientPersonalArea.secondaryStatus,
      title: content.platform.clientPersonalArea.title,
      description: content.platform.clientPersonalArea.description,
      extraNote: content.platform.clientPersonalArea.watchSyncNote,
      hasWatchIcons: true,
      images: [
        {
          src: IMG_TIMELINE,
          title: content.platform.clientPersonalArea.title,
          caption: conceptDesignCaption,
        },
      ],
    },
  ];

  // All 6 training mockups with title above and caption below
  const trainingMockupGallery = [
    {
      id: 'mockup-0',
      title: content.platform.trainingPrograms.mockupTitles[0],
      caption: conceptDesignCaption,
      src: IMG_PROG_EN,
    },
    {
      id: 'mockup-1',
      title: content.platform.trainingPrograms.mockupTitles[1],
      caption: conceptDesignCaption,
      src: IMG_PROG_HE,
    },
    {
      id: 'mockup-2',
      title: content.platform.trainingPrograms.mockupTitles[2],
      caption: conceptDesignCaption,
      src: IMG_LIVE_SESSION,
    },
    {
      id: 'mockup-3',
      title: content.platform.trainingPrograms.mockupTitles[3],
      caption: conceptDesignCaption,
      src: IMG_EXERCISE_LIB,
    },
    {
      id: 'mockup-4',
      title: content.platform.trainingPrograms.mockupTitles[4],
      caption: conceptDesignCaption,
      src: IMG_VERSIONS,
    },
    {
      id: 'mockup-5',
      title: content.platform.trainingPrograms.mockupTitles[5],
      caption: conceptDesignCaption,
      src: IMG_EXERCISE_DETAIL,
    },
  ];

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-[#141210] text-[#F4F1E8] relative ${
        doorsOpen ? 'hero-doors-open' : ''
      }`}
    >
      {/* Opening dark doors that part calmly on load */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 flex overflow-hidden"
      >
        <div className="hero-door-left w-1/2 h-full bg-[#141210] border-e border-[#D8B04A]/30" />
        <div className="hero-door-right w-1/2 h-full bg-[#141210] border-s border-[#D8B04A]/30" />
      </div>

      {/* Click-to-enlarge Lightbox Modal */}
      {enlargedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={enlargedImage.caption || 'SEESA'}
          onClick={() => setEnlargedImage(null)}
          className="fixed inset-0 z-50 bg-[#141210]/95 backdrop-blur-sm p-4 sm:p-8 flex flex-col items-center justify-center cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl w-full bg-[#1B1815] border border-[#D8B04A]/45 p-3 sm:p-4 space-y-3"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-[#F4F1E8]/85">
                {enlargedImage.caption}
              </span>
              <button
                type="button"
                onClick={() => setEnlargedImage(null)}
                className="min-h-[36px] min-w-[36px] px-3 py-1 bg-[#141210] border border-[#F4F1E8]/20 hover:border-[#D8B04A] text-xs text-[#F4F1E8]"
              >
                ×
              </button>
            </div>
            <img
              src={enlargedImage.src}
              alt={enlargedImage.caption || 'SEESA'}
              referrerPolicy="no-referrer"
              className="w-full max-h-[80vh] object-contain bg-[#141210]"
            />
          </div>
        </div>
      )}

      {/* Slim Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#141210]/92 backdrop-blur-md border-b border-[#F4F1E8]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('top');
            }}
            className="min-h-[44px] inline-flex items-center shrink-0"
          >
            <LogoAsset variant="seesa" size="sm" alt="SEESA" />
          </a>

          {/* Navigation links */}
          <nav className="flex items-center gap-1 sm:gap-3 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const isCurrent =
                (item.id === 'problem' &&
                  (activeSection === 'problem' || activeSection === 'what')) ||
                item.id === activeSection;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`min-h-[44px] inline-flex items-center px-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                    isCurrent
                      ? 'border-[#D8B04A] text-[#F4F1E8]'
                      : 'border-transparent text-[#F4F1E8]/65 hover:text-[#F4F1E8]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Language Toggle: EN / עברית */}
          <div className="shrink-0 flex items-center border border-[#F4F1E8]/15 bg-[#1B1815]">
            <button
              type="button"
              onClick={() => handleSwitchLanguage('en')}
              className={`min-h-[44px] min-w-[44px] px-2.5 text-xs font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-[#D8B04A] text-[#141210]'
                  : 'text-[#F4F1E8]/75 hover:text-[#F4F1E8]'
              }`}
            >
              {content.header.en}
            </button>
            <button
              type="button"
              onClick={() => handleSwitchLanguage('he')}
              className={`min-h-[44px] min-w-[52px] px-2.5 text-xs font-medium transition-colors ${
                lang === 'he'
                  ? 'bg-[#D8B04A] text-[#141210]'
                  : 'text-[#F4F1E8]/75 hover:text-[#F4F1E8]'
              }`}
            >
              {content.header.he}
            </button>
          </div>
        </div>
      </header>

      {/* Main Continuous Scroll Story Container with cross-fade on language switch */}
      <main
        ref={storyContainerRef}
        className={`lang-crossfade max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pt-6 pb-16 relative ${
          isFadingLang ? 'lang-crossfade-fading' : ''
        }`}
      >
        <div className="relative ps-7 sm:ps-12 md:ps-16">
          {/* The Vertical Gold Line along the reading-start edge */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 start-2 sm:start-4 w-[1px] bg-[#D8B04A]/20"
          >
            <div
              className="gold-progress-fill w-full h-full bg-[#D8B04A] origin-top transition-transform duration-150 ease-out"
              style={{ transform: `scaleY(${lineProgress})` }}
            />
          </div>

          {/* SECTION: TOP (HERO) — SEESA logo with soft gold glint on load */}
          <section
            id="top"
            ref={topRef}
            className="relative scroll-mt-20 pt-2 pb-12 sm:pb-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-4 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.top
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div className="hero-reveal space-y-5 max-w-3xl">
              {/* SEESA Logo with one soft gold glint on load */}
              <div className="pt-1">
                <div className="logo-gold-glint">
                  <LogoAsset variant="seesa" size="lg" alt="SEESA" />
                </div>
              </div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.top.label}
              </div>

              {/* Hero Headline */}
              <h1
                className="text-3xl sm:text-5xl md:text-[3.35rem] font-semibold text-[#F4F1E8] leading-[1.12] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                {content.top.headline}
              </h1>

              {/* Subline */}
              <p className="text-base sm:text-lg text-[#F4F1E8]/78 leading-relaxed max-w-2xl">
                {content.top.subline}
              </p>

              {/* Button */}
              <div className="pt-1">
                <a
                  href="#roadmap"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('roadmap');
                  }}
                  className="card-lift min-h-[44px] inline-flex items-center px-5 py-2.5 text-sm font-medium text-[#141210] bg-[#D8B04A] hover:bg-[#D8B04A]/90 transition-colors whitespace-nowrap"
                >
                  {content.top.button}
                </a>
              </div>
            </div>
          </section>

          {/* SECTION: PROBLEM */}
          <section
            id="problem"
            ref={problemRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.problem
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-problem"
              className={`section-title-slide max-w-3xl space-y-3 mb-7 ${
                visibleSteps['title-problem'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.problem.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.problem.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.problem.points.map((point, idx) => {
                const stepId = `problem-point-${idx}`;
                return (
                  <div
                    key={stepId}
                    data-step-id={stepId}
                    style={
                      { '--step-delay': `${idx * 95}ms` } as React.CSSProperties
                    }
                    className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 hover:border-[#D8B04A]/45 p-5 ${
                      visibleSteps[stepId] ? 'is-visible' : ''
                    }`}
                  >
                    <p className="text-sm sm:text-base text-[#F4F1E8]/85 leading-relaxed">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION: WHAT SEESA IS */}
          <section
            id="what"
            ref={whatRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.what
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-what"
              className={`section-title-slide max-w-3xl space-y-3 mb-7 ${
                visibleSteps['title-what'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.what.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.what.title}
              </h2>

              <p className="text-sm sm:text-base text-[#F4F1E8]/78 leading-relaxed">
                {content.what.body}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {content.what.items.map((item, idx) => {
                const stepId = `what-item-${idx}`;
                return (
                  <div
                    key={stepId}
                    data-step-id={stepId}
                    style={
                      { '--step-delay': `${idx * 95}ms` } as React.CSSProperties
                    }
                    className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 hover:border-[#D8B04A]/45 p-4 flex items-center gap-3 ${
                      visibleSteps[stepId] ? 'is-visible' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#D8B04A] shrink-0"
                    />
                    <span className="text-sm sm:text-base font-medium text-[#F4F1E8]">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION: PLATFORM */}
          <section
            id="platform"
            ref={platformRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.platform
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-platform"
              className={`section-title-slide max-w-3xl space-y-3 mb-2 ${
                visibleSteps['title-platform'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.platform.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.platform.title}
              </h2>

              <p className="text-sm sm:text-base text-[#F4F1E8]/75 leading-relaxed">
                {content.platform.intro}
              </p>
            </div>

            {/* Everything a new coach needs, in one place (radial workspace hub + /workspace-nav.jpg) */}
            <CoachWorkspaceHub
              lang={lang}
              onEnlarge={(src, cap) => setEnlargedImage({ src, caption: cap })}
            />

            <div>
              {/* Pinned Highlight: Training programs and exercise library */}
              <PinnedHighlightBlock
                badge={content.platform.trainingPrograms.status}
                title={content.platform.trainingPrograms.title}
                description={content.platform.trainingPrograms.description}
                imageTitle={
                  content.platform.trainingPrograms.mockupTitles[
                    lang === 'he' ? 1 : 0
                  ]
                }
                caption={conceptDesignCaption}
                imageSrc={lang === 'he' ? IMG_PROG_HE : IMG_PROG_EN}
                onEnlargeImage={(src, cap) =>
                  setEnlargedImage({ src, caption: cap })
                }
                steps={
                  lang === 'he'
                    ? [
                        {
                          id: 'prog-he-1',
                          label:
                            content.platform.trainingPrograms.screen
                              .activeDayHeader,
                          text: `${content.platform.trainingPrograms.screen.exercises[0].name} · ${content.platform.trainingPrograms.screen.exercises[0].prescription}`,
                          ring: {
                            top: '33.8%',
                            left: '26.8%',
                            width: '54.1%',
                            height: '11.0%',
                          },
                        },
                        {
                          id: 'prog-he-2',
                          label:
                            content.platform.trainingPrograms.screen
                              .libraryTitle,
                          text: `${content.platform.trainingPrograms.screen.libraryItems[0].name} · ${content.platform.trainingPrograms.screen.libraryItems[1].name}`,
                          ring: {
                            top: '66.2%',
                            left: '1.2%',
                            width: '24.2%',
                            height: '32.5%',
                          },
                        },
                        {
                          id: 'prog-he-3',
                          label:
                            content.platform.trainingPrograms.screen
                              .headerStatus,
                          text: content.platform.trainingPrograms.screen
                            .versionNote,
                          ring: {
                            top: '95.2%',
                            left: '61.5%',
                            width: '19.5%',
                            height: '3.6%',
                          },
                        },
                      ]
                    : [
                        {
                          id: 'prog-en-1',
                          label:
                            content.platform.trainingPrograms.screen
                              .activeDayHeader,
                          text: `${content.platform.trainingPrograms.screen.exercises[0].name} · ${content.platform.trainingPrograms.screen.exercises[0].prescription}`,
                          ring: {
                            top: '33.8%',
                            left: '21.4%',
                            width: '51.8%',
                            height: '10.6%',
                          },
                        },
                        {
                          id: 'prog-en-2',
                          label:
                            content.platform.trainingPrograms.screen
                              .libraryTitle,
                          text: `${content.platform.trainingPrograms.screen.libraryItems[0].name} · ${content.platform.trainingPrograms.screen.libraryItems[1].name}`,
                          ring: {
                            top: '21.5%',
                            left: '74.8%',
                            width: '24.0%',
                            height: '28.8%',
                          },
                        },
                        {
                          id: 'prog-en-3',
                          label:
                            content.platform.trainingPrograms.screen
                              .headerStatus,
                          text: content.platform.trainingPrograms.screen
                            .versionNote,
                          ring: {
                            top: '94.8%',
                            left: '21.2%',
                            width: '24.5%',
                            height: '3.8%',
                          },
                        },
                      ]
                }
              />

              {/* All 6 Training Area Mockups at full readable width with title above and caption below */}
              <div className="py-6 border-b border-[#F4F1E8]/10 space-y-5">
                <p className="text-xs sm:text-sm text-[#F4F1E8]/70">
                  {content.platform.trainingPrograms.moreMockupsNote}
                </p>

                <div className="space-y-6">
                  {trainingMockupGallery.map((item, idx) => (
                    <div
                      key={item.id}
                      data-step-id={item.id}
                      style={
                        {
                          '--step-delay': `${idx * 80}ms`,
                        } as React.CSSProperties
                      }
                      className={`story-step-slide card-lift w-full md:w-11/12 ${
                        visibleSteps[item.id] ? 'is-visible' : ''
                      }`}
                    >
                      <DarkImageFrame
                        src={item.src}
                        alt={item.title}
                        title={item.title}
                        caption={item.caption}
                        onEnlarge={(resolvedSrc, cap) =>
                          setEnlargedImage({ src: resolvedSrc, caption: cap })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature cards with large attached images in dark frames (title above + caption below) */}
            <div className="space-y-6 pt-6">
              {platformFeatureCards.map((card, idx) => (
                <div
                  key={card.id}
                  data-step-id={card.id}
                  style={
                    { '--step-delay': `${idx * 85}ms` } as React.CSSProperties
                  }
                  className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 p-5 sm:p-6 space-y-5 ${
                    visibleSteps[card.id] ? 'is-visible' : ''
                  }`}
                >
                  <div className="space-y-2.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 border border-[#D8B04A] bg-[#D8B04A] text-[#141210] text-xs font-semibold">
                        {card.status}
                      </span>
                      {card.secondaryStatus && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#F4F1E8]/30 text-[#F4F1E8]/80 text-xs font-medium">
                          {card.hasWatchIcons && (
                            <Watch
                              aria-hidden="true"
                              className="w-3.5 h-3.5 text-[#D8B04A]"
                            />
                          )}
                          <span>{card.secondaryStatus}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-[#F4F1E8]">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#F4F1E8]/80 leading-relaxed">
                      {card.description}
                    </p>

                    {card.extraNote && (
                      <div className="pt-1 flex items-start gap-2.5 text-sm text-[#F4F1E8]/75 leading-relaxed">
                        {card.hasWatchIcons && (
                          <div
                            aria-hidden="true"
                            className="flex items-center gap-1.5 pt-0.5 shrink-0 text-[#D8B04A]"
                          >
                            <Watch className="w-4 h-4" />
                            <Smartphone className="w-4 h-4" />
                          </div>
                        )}
                        <p>{card.extraNote}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 w-full md:w-11/12">
                    {card.images.map((imgItem, imgIdx) => (
                      <DarkImageFrame
                        key={`${card.id}-img-${imgIdx}`}
                        src={imgItem.src}
                        alt={imgItem.title}
                        title={imgItem.title}
                        caption={imgItem.caption}
                        onEnlarge={(resolvedSrc, cap) =>
                          setEnlargedImage({ src: resolvedSrc, caption: cap })
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bold Marketplace Block at the end of the Platform section, full width, distinct gold-framed card */}
            <div
              data-step-id="plat-marketplace-bold"
              className={`story-step-slide card-lift mt-8 w-full bg-[#1B1815] border-2 border-[#D8B04A] shadow-[0_0_28px_rgba(216,176,74,0.14)] p-6 sm:p-8 space-y-6 ${
                visibleSteps['plat-marketplace-bold'] ? 'is-visible' : ''
              }`}
            >
              <div className="space-y-3 max-w-3xl">
                <div>
                  <span className="inline-block px-2.5 py-0.5 border border-[#D8B04A] text-[#D8B04A] text-xs font-medium">
                    {content.platform.marketplace.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F4F1E8] tracking-tight">
                  {content.platform.marketplace.title}
                </h3>
                <p className="text-sm sm:text-base text-[#F4F1E8]/85 leading-relaxed">
                  {content.platform.marketplace.text}
                </p>
              </div>

              <div className="w-full">
                <DarkImageFrame
                  src={IMG_MARKETPLACE}
                  alt={content.platform.marketplace.imageTitle}
                  title={content.platform.marketplace.imageTitle}
                  caption={content.platform.marketplace.caption}
                  onEnlarge={(resolvedSrc, cap) =>
                    setEnlargedImage({ src: resolvedSrc, caption: cap })
                  }
                />
              </div>
            </div>

            {/* Languages availability line */}
            <div className="pt-6 text-xs sm:text-sm text-[#F4F1E8]/65">
              {content.platform.clientPersonalArea.languagesNote}
            </div>
          </section>

          {/* SECTION: STRUCTURE (HOW IT IS ORGANIZED & ROLES AND PERMISSIONS) */}
          <section
            id="structure"
            ref={structureRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.structure
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-structure"
              className={`section-title-slide max-w-3xl space-y-3 mb-7 ${
                visibleSteps['title-structure'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.structure.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.structure.title}
              </h2>
            </div>

            {/* Three layers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {content.structure.layers.map((layer, idx) => {
                const stepId = `structure-layer-${idx}`;
                return (
                  <div
                    key={stepId}
                    data-step-id={stepId}
                    style={
                      { '--step-delay': `${idx * 95}ms` } as React.CSSProperties
                    }
                    className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 hover:border-[#D8B04A]/45 p-5 space-y-2 ${
                      visibleSteps[stepId] ? 'is-visible' : ''
                    }`}
                  >
                    <h3 className="text-base font-semibold text-[#F4F1E8]">
                      {layer.title}
                    </h3>
                    <p className="text-sm text-[#F4F1E8]/75 leading-relaxed">
                      {layer.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Roles and permissions */}
            <div className="space-y-5">
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.structure.rolesLabel}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {content.structure.roles.map((role, idx) => {
                  const stepId = `structure-role-${idx}`;
                  return (
                    <div
                      key={stepId}
                      data-step-id={stepId}
                      style={
                        {
                          '--step-delay': `${idx * 80}ms`,
                        } as React.CSSProperties
                      }
                      className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 px-4 py-3 flex items-center gap-2.5 ${
                        visibleSteps[stepId] ? 'is-visible' : ''
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#D8B04A] shrink-0"
                      />
                      <span className="text-sm font-medium text-[#F4F1E8]">
                        {role}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2.5 pt-2 max-w-3xl">
                <p className="text-sm text-[#F4F1E8]/85 leading-relaxed">
                  {content.structure.ownerIsolationNote}
                </p>
                {content.structure.notes.map((note, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-[#F4F1E8]/75 leading-relaxed"
                  >
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION: SECURITY AND PRIVACY */}
          <section
            id="security"
            ref={securityRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.security
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-security"
              className={`section-title-slide max-w-3xl space-y-3 mb-7 ${
                visibleSteps['title-security'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.security.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.security.title}
              </h2>
            </div>

            <div className="space-y-3 max-w-3xl">
              {content.security.points.map((point, idx) => {
                const stepId = `security-point-${idx}`;
                return (
                  <div
                    key={stepId}
                    data-step-id={stepId}
                    style={
                      { '--step-delay': `${idx * 85}ms` } as React.CSSProperties
                    }
                    className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 hover:border-[#D8B04A]/45 p-4 flex items-start gap-3 ${
                      visibleSteps[stepId] ? 'is-visible' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#D8B04A] mt-2 shrink-0"
                    />
                    <p className="text-sm sm:text-base text-[#F4F1E8]/85 leading-relaxed">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs sm:text-sm text-[#F4F1E8]/65">
              {content.security.disclaimer}
            </p>
          </section>

          {/* SECTION: ROADMAP — FIVE PHASES ALONG ONE VERTICAL LINEAR PATH */}
          <section
            id="roadmap"
            ref={roadmapRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.roadmap
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-roadmap"
              className={`section-title-slide max-w-3xl space-y-2.5 mb-7 ${
                visibleSteps['title-roadmap'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.roadmap.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.roadmap.title}
              </h2>

              <p className="text-sm sm:text-base text-[#F4F1E8]/75 leading-relaxed">
                {content.roadmap.intro}
              </p>
            </div>

            <RoadmapLinearPath lang={lang} />
          </section>

          {/* SECTION: PLANNED BUSINESS MODEL (Unpriced Tiers) */}
          <section
            id="model"
            ref={modelRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.model
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-model"
              className={`section-title-slide max-w-3xl space-y-2.5 mb-7 ${
                visibleSteps['title-model'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.model.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.model.title}
              </h2>

              <div className="text-xs sm:text-sm text-[#D8B04A]">
                {content.model.statusNote}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {content.model.tiers.map((tierText, idx) => {
                const stepId = `model-tier-${idx}`;
                return (
                  <div
                    key={stepId}
                    data-step-id={stepId}
                    style={
                      { '--step-delay': `${idx * 95}ms` } as React.CSSProperties
                    }
                    className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/12 hover:border-[#D8B04A]/50 p-5 flex items-center gap-3 ${
                      visibleSteps[stepId] ? 'is-visible' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#D8B04A] shrink-0"
                    />
                    <span className="text-sm sm:text-base font-medium text-[#F4F1E8]">
                      {tierText}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2 text-sm text-[#F4F1E8]/75">
              {content.model.notes.map((note, idx) => (
                <p key={idx}>{note}</p>
              ))}
            </div>
          </section>

          {/* SECTION: OWNER AND TEAM (Founder portrait crop, rounded corners, no caption + SAYRIS logo) */}
          <section
            id="team"
            ref={teamRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.team
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-team"
              className={`section-title-slide max-w-3xl space-y-3 mb-7 ${
                visibleSteps['title-team'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.team.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.team.title}
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {/* Founder Card with founder-portrait.jpg (portrait crop, rounded corners, no caption) + SAYRIS Logo */}
              <div
                data-step-id="team-founder"
                className={`story-step card-lift bg-[#1B1815] border border-[#F4F1E8]/12 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                  visibleSteps['team-founder'] ? 'is-visible' : ''
                }`}
              >
                <FounderPortrait
                  onEnlarge={(src, cap) =>
                    setEnlargedImage({ src, caption: cap })
                  }
                />

                <div className="space-y-4">
                  <LogoAsset variant="sayris" size="md" alt="SAYRIS ATHENA" />
                  <p className="text-sm sm:text-base text-[#F4F1E8]/85 leading-relaxed">
                    {content.team.founderBio}
                  </p>
                </div>
              </div>

              {/* How it is built */}
              <div
                data-step-id="team-how"
                style={{ '--step-delay': '90ms' } as React.CSSProperties}
                className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 p-5 space-y-1.5 ${
                  visibleSteps['team-how'] ? 'is-visible' : ''
                }`}
              >
                <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                  {content.team.howItIsBuiltLabel}
                </div>
                <p className="text-sm text-[#F4F1E8]/80 leading-relaxed">
                  {content.team.howItIsBuiltBody}
                </p>
              </div>

              {/* Open roles */}
              <div
                data-step-id="team-roles"
                style={{ '--step-delay': '180ms' } as React.CSSProperties}
                className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 p-5 space-y-1.5 ${
                  visibleSteps['team-roles'] ? 'is-visible' : ''
                }`}
              >
                <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                  {content.team.openRolesLabel}
                </div>
                <p className="text-sm text-[#F4F1E8]/80 leading-relaxed">
                  {content.team.openRolesBody}
                </p>
              </div>

              {/* Advisers and pilot coaches */}
              <div
                data-step-id="team-advisers"
                style={{ '--step-delay': '270ms' } as React.CSSProperties}
                className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 p-5 space-y-1.5 ${
                  visibleSteps['team-advisers'] ? 'is-visible' : ''
                }`}
              >
                <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                  {content.team.advisersLabel}
                </div>
                <p className="text-sm text-[#F4F1E8]/80 leading-relaxed">
                  {content.team.advisersBody}
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: WHAT WE ARE LOOKING FOR (ASK) */}
          <section
            id="ask"
            ref={askRef}
            className="relative scroll-mt-20 py-11 sm:py-14 border-b border-[#F4F1E8]/10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.ask
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-ask"
              className={`section-title-slide max-w-3xl space-y-3 mb-7 ${
                visibleSteps['title-ask'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.ask.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.ask.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {content.ask.items.map((item, idx) => {
                const stepId = `ask-item-${idx}`;
                return (
                  <div
                    key={stepId}
                    data-step-id={stepId}
                    style={
                      { '--step-delay': `${idx * 95}ms` } as React.CSSProperties
                    }
                    className={`story-step-slide card-lift bg-[#1B1815] border border-[#F4F1E8]/10 p-5 flex items-start gap-3 ${
                      visibleSteps[stepId] ? 'is-visible' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#D8B04A] mt-2 shrink-0"
                    />
                    <span className="text-sm sm:text-base text-[#F4F1E8]/85 leading-relaxed">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs sm:text-sm text-[#F4F1E8]/65">
              {content.ask.timelineNote}
            </p>
          </section>

          {/* SECTION: CONTACT */}
          <section
            id="contact"
            ref={contactRef}
            className="relative scroll-mt-20 pt-11 sm:pt-14 pb-10"
          >
            <span
              aria-hidden="true"
              className={`absolute top-14 -start-[25px] sm:-start-[37px] md:-start-[53px] w-3 h-3 rounded-full border transition-colors duration-300 ${
                reachedSections.contact
                  ? 'bg-[#D8B04A] border-[#D8B04A] shadow-[0_0_0_4px_rgba(216,176,74,0.16)]'
                  : 'bg-[#141210] border-[#D8B04A]/50'
              }`}
            />

            <div
              data-step-id="title-contact"
              className={`section-title-slide max-w-3xl space-y-4 ${
                visibleSteps['title-contact'] ? 'is-visible' : ''
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#D8B04A]">
                {content.contact.label}
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-[#F4F1E8] tracking-tight leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {content.contact.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`mailto:${content.contact.email}`}
                  className="card-lift min-h-[44px] inline-flex items-center px-4 py-2 bg-[#1B1815] border border-[#F4F1E8]/15 hover:border-[#D8B04A] text-sm sm:text-base text-[#F4F1E8] num-readable transition-colors"
                  dir="ltr"
                >
                  {content.contact.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`card-lift min-h-[44px] px-4 py-2 text-xs sm:text-sm font-medium border transition-colors ${
                    copiedEmail
                      ? 'bg-[#141210] text-[#D8B04A] border-[#D8B04A]'
                      : 'bg-[#D8B04A] text-[#141210] border-[#D8B04A] hover:bg-[#D8B04A]/90'
                  }`}
                >
                  {content.contact.copyButton}
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="mt-8 pt-6 border-t border-[#F4F1E8]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#F4F1E8]/60">
          <LogoAsset variant="seesa" size="sm" alt="SEESA" />
          <p>{content.footer.line}</p>
        </footer>
      </main>
    </div>
  );
}
