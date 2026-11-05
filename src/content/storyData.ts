export type Lang = 'en' | 'he';

export type ItemStatus = 'live' | 'inBuild' | 'planned';

export interface RoadmapPhaseItem {
  label: string;
  status: ItemStatus;
  statusText: string;
}

export interface RoadmapPhase {
  number: number;
  title: string;
  description: string;
  items: RoadmapPhaseItem[];
}

export interface StoryContent {
  header: {
    problem: string;
    platform: string;
    structure: string;
    security: string;
    roadmap: string;
    model: string;
    team: string;
    ask: string;
    contact: string;
    en: string;
    he: string;
  };
  top: {
    label: string;
    headline: string;
    subline: string;
    button: string;
  };
  problem: {
    label: string;
    title: string;
    points: [string, string, string];
  };
  what: {
    label: string;
    title: string;
    body: string;
    items: [string, string, string, string];
  };
  platform: {
    label: string;
    title: string;
    intro: string;
    captions: {
      portalScreenshot: string;
      conceptDesign: string;
    };
    workspaceHub: {
      title: string;
      text: string;
      nodes: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
      mapImageTitle: string;
      mapImageCaption: string;
    };
    clientsAndCheckIns: {
      status: string;
      title: string;
      description: string;
      imageTitles: [string, string, string];
    };
    trainingPrograms: {
      status: string;
      title: string;
      description: string;
      screen: {
        headerTitle: string;
        headerStatus: string;
        activeDayHeader: string;
        exercises: {
          num: string;
          name: string;
          prescription: string;
        }[];
        versionNote: string;
        libraryTitle: string;
        libraryItems: {
          name: string;
          addSymbol: string;
        }[];
        caption: string;
      };
      moreMockupsNote: string;
      mockupTitles: [string, string, string, string, string, string];
    };
    nutritionPlans: {
      statusEditor: string;
      statusCalculation: string;
      title: string;
      description: string;
      imageTitles: [string, string];
    };
    scheduling: {
      status: string;
      title: string;
      description: string;
      imageTitles: [string, string];
    };
    payments: {
      status: string;
      secondaryStatus: string;
      title: string;
      description: string;
      onlinePaymentsNote: string;
      imageTitle: string;
    };
    healthDeclarations: {
      status: string;
      secondaryStatus: string;
      title: string;
      description: string;
    };
    leadTracking: {
      status: string;
      title: string;
      description: string;
    };
    clientPersonalArea: {
      status: string;
      secondaryStatus: string;
      title: string;
      description: string;
      watchSyncNote: string;
      languagesNote: string;
    };
    marketplace: {
      badge: string;
      title: string;
      text: string;
      imageTitle: string;
      caption: string;
    };
  };
  structure: {
    label: string;
    title: string;
    layers: {
      title: string;
      body: string;
    }[];
    rolesLabel: string;
    roles: [string, string, string, string, string, string];
    ownerIsolationNote: string;
    notes: [string, string, string];
  };
  security: {
    label: string;
    title: string;
    points: [string, string, string, string, string, string, string];
    disclaimer: string;
  };
  roadmap: {
    label: string;
    title: string;
    intro: string;
    liveLabel: string;
    inBuildLabel: string;
    plannedLabel: string;
    phases: [
      RoadmapPhase,
      RoadmapPhase,
      RoadmapPhase,
      RoadmapPhase,
      RoadmapPhase
    ];
  };
  model: {
    label: string;
    title: string;
    statusNote: string;
    tiers: [string, string, string];
    notes: [string, string, string];
  };
  team: {
    label: string;
    title: string;
    founderBio: string;
    howItIsBuiltLabel: string;
    howItIsBuiltBody: string;
    openRolesLabel: string;
    openRolesBody: string;
    advisersLabel: string;
    advisersBody: string;
  };
  ask: {
    label: string;
    title: string;
    items: [string, string, string];
    timelineNote: string;
  };
  contact: {
    label: string;
    title: string;
    email: string;
    copyButton: string;
  };
  footer: {
    line: string;
  };
}

export const storyContent: Record<Lang, StoryContent> = {
  en: {
    header: {
      problem: 'Problem',
      platform: 'Platform',
      structure: 'Structure',
      security: 'Security',
      roadmap: 'Roadmap',
      model: 'Model',
      team: 'Team',
      ask: 'Ask',
      contact: 'Contact',
      en: 'EN',
      he: 'עברית',
    },
    top: {
      label: 'Project overview',
      headline: 'The digital fitness hub for coaches and clients',
      subline: 'A coaching management platform, built in Israel, Hebrew-first.',
      button: 'See the roadmap',
    },
    problem: {
      label: 'The problem',
      title: 'Coaching runs on scattered tools.',
      points: [
        'Coaches run clients across chats, spreadsheets, documents and separate payment tools.',
        'Clients lose track of their plan and progress.',
        'Privacy of health information is hard to guarantee in generic tools.',
      ],
    },
    what: {
      label: 'What SEESA is',
      title: 'One platform for coaches, organizations and their clients.',
      body:
        'SEESA is a platform for independent coaches and for organizations with several coaches, such as gyms and studios. Each client gets a personal area. In phase 2, SEESA also serves independent trainees who do not work with a coach.',
      items: [
        'Independent coaches',
        'Organizations with several coaches',
        'Clients, in a personal area',
        'Independent trainees (phase 2)',
      ],
    },
    platform: {
      label: 'The platform',
      title: 'What the platform offers',
      intro:
        'Screens below are illustrations and design mockups with sample data. Each one is labelled.',
      captions: {
        portalScreenshot: 'Screenshot of the current portal, sample data',
        conceptDesign: 'Concept design, sample data',
      },
      workspaceHub: {
        title: 'Everything a new coach needs, in one place',
        text:
          'Clients, programs, nutrition, calendar, payments, forms, content studio, campaigns, lead management and support sit inside one workspace.',
        nodes: [
          'Clients',
          'Programs',
          'Nutrition',
          'Calendar',
          'Credits',
          'Payments',
          'Forms',
          'Content studio',
          'Campaigns',
          'Leads',
          'Check-ins',
          'Support',
        ],
        mapImageTitle: 'The connected coach workspace',
        mapImageCaption: 'Concept design',
      },
      clientsAndCheckIns: {
        status: 'Live',
        title: 'Clients and check-ins',
        description:
          'Every week the client submits a check-in: weight, measurements, energy, sleep, notes and progress photos. The coach reviews it, adds a note, and sees the trend over time. Nothing is shared outside the coach and the client.',
        imageTitles: [
          'Clients list',
          'Coach client overview, desktop and phone',
          'Check-in review with progress photos',
        ],
      },
      trainingPrograms: {
        status: 'In build',
        title: 'Training programs and exercise library',
        description:
          'A visual program builder, DOCX import, an exercise library with demonstrations, and versions you can publish without touching completed workouts.',
        screen: {
          headerTitle: 'Program Builder · Glutes Phase',
          headerStatus: 'Draft v3 · saved',
          activeDayHeader: 'Sunday · Glutes & Hamstrings',
          exercises: [
            {
              num: '1',
              name: 'Barbell Hip Thrust',
              prescription: '4 × 8-12 · 90s',
            },
            {
              num: '2',
              name: 'Romanian Deadlift',
              prescription: '4 × 8-10 · 90s',
            },
            {
              num: '3',
              name: 'Bulgarian Split Squat',
              prescription: '3 × 8-10 · 90s',
            },
            {
              num: '4',
              name: 'Seated Leg Curl',
              prescription: '3 × 12-15 · 60s',
            },
            {
              num: '5',
              name: 'Cable Hip Abduction',
              prescription: '3 × 15-20 · 45s',
            },
          ],
          versionNote: 'Published versions keep completed workouts intact.',
          libraryTitle: 'Exercise library',
          libraryItems: [
            { name: 'Cable Kickback', addSymbol: '+' },
            { name: 'Glute Bridge', addSymbol: '+' },
          ],
          caption: 'Concept design, sample data',
        },
        moreMockupsNote:
          'More design mockups of the training area. They show an earlier visual style, before the final gold palette.',
        mockupTitles: [
          'Program builder, English',
          'Program builder, Hebrew right to left',
          'Live session on a phone, with exercise actions',
          'Organization exercise library with filters',
          'Versions and publishing as independent copies',
          'Exercise detail on desktop and phone',
        ],
      },
      nutritionPlans: {
        statusEditor: 'Editor: Live',
        statusCalculation: 'Calculation: In build',
        title: 'Nutrition plans',
        description:
          'A coach editor for nutrition plans today. Automatic calories and macros from a food library are in build.',
        imageTitles: [
          'Nutrition plan editor, coach side',
          'Nutrition plan in the client app',
        ],
      },
      scheduling: {
        status: 'Live',
        title: 'Scheduling, credits and attendance',
        description:
          'A calendar, session packages, and credits deducted when attendance is confirmed.',
        imageTitles: [
          'Coach calendar, week view',
          'Session booking and credits',
        ],
      },
      payments: {
        status: 'Live',
        secondaryStatus: 'Online payments: Planned',
        title: 'Payments and receipts recording',
        description:
          'The coach collects payments directly. SEESA records them and takes no commission.',
        onlinePaymentsNote:
          "Online payments and automatic receipts through a payment provider's API are being assessed.",
        imageTitle: 'Pair training billing, two payers',
      },
      healthDeclarations: {
        status: 'Declarations: Live',
        secondaryStatus: 'Form builders: Planned',
        title: 'Health declarations and form builders',
        description:
          'Health declarations are collected before training and reviewed only by authorized people. Form builders for policies, questionnaires and onboarding are planned.',
      },
      leadTracking: {
        status: 'Live',
        title: 'Lead tracking',
        description: 'See where each new client came from.',
      },
      clientPersonalArea: {
        status: 'Live',
        secondaryStatus: 'Watch sync: Planned',
        title: "The client's personal area",
        description:
          'Plan, progress, check-ins and documents in one place for the client.',
        watchSyncNote:
          'Planned: sync with Apple Health and Health Connect for steps, heart rate and completed workouts, from Apple Watch and Android watches. Apps for iPhone and Android follow the portal.',
        languagesNote: 'Hebrew right to left and English, with French available.',
      },
      marketplace: {
        badge: 'Planned',
        title: 'A discovery platform, not only a management tool',
        text:
          'Clients search; SEESA matches and ranks coaches and sport and health professionals by area, specialty, language and availability. Every coach gets a landing page in the marketplace. Selling programs and sessions comes after being found. Built into the core of the platform, starting in Israel and Athens, Greece.',
        imageTitle: 'Find a coach, and a coach landing page',
        caption: 'Concept design, sample data',
      },
    },
    structure: {
      label: 'How it is organized',
      title: 'Three layers, each with its own boundaries.',
      layers: [
        {
          title: 'Platform owner level',
          body: "Runs the platform. Cannot open other organizations' client records.",
        },
        {
          title: 'Coach or organization workspace',
          body: 'Clients, programs, nutrition, schedule, credits and payment records.',
        },
        {
          title: 'Client area',
          body: "The client's plan, progress, check-ins and documents.",
        },
      ],
      rolesLabel: 'Roles and permissions',
      roles: [
        'Platform owner',
        'Organization owner',
        'Admin',
        'Team lead (coach with team permissions)',
        'Coach',
        'Client',
      ],
      ownerIsolationNote:
        "The platform owner cannot open other organizations' client records.",
      notes: [
        'Each person sees only what their role allows, checked on the server.',
        "Support access to a coach's data is planned to be granted by the coach only, scoped and time limited. It is not live today.",
        'Deactivating a client ends their access and keeps their records.',
      ],
    },
    security: {
      label: 'Security and privacy',
      title: 'What exists today, and what comes next.',
      points: [
        'Access is checked per organization and per client, on the server.',
        'Health data is treated as sensitive.',
        'Client documents and photos are kept in private storage and opened through short-lived links.',
        "Automated checks run daily: dependency vulnerabilities, leaked secrets, and the site's security headers and certificate.",
        'A database backup is taken before every database migration.',
        'Key changes, such as coach reassignment, coaching and payment edits and consent, are recorded with who made them.',
        'Before opening SEESA to other coaches, an independent security review is the next gate.',
      ],
      disclaimer: 'SEESA does not claim any certification or compliance status.',
    },
    roadmap: {
      label: 'Roadmap',
      title: 'Five phases, one direction',
      intro:
        'Phases overlap and are not strictly sequential. Statuses show where each item stands now. No launch dates.',
      liveLabel: 'Live',
      inBuildLabel: 'In build',
      plannedLabel: 'Planned',
      phases: [
        {
          number: 1,
          title: 'SEESA Coach Platform',
          description: 'The existing portal. Focus: improve, expand, stabilize.',
          items: [
            { label: 'Client management', status: 'live', statusText: 'Live' },
            {
              label: 'Check-ins with photos',
              status: 'live',
              statusText: 'Live',
            },
            {
              label: 'Coach calendar and credits',
              status: 'live',
              statusText: 'Live',
            },
            {
              label: 'Nutrition plan editor',
              status: 'live',
              statusText: 'Live',
            },
            {
              label: 'Health declaration intake',
              status: 'live',
              statusText: 'Live',
            },
            { label: 'Lead tracking', status: 'live', statusText: 'Live' },
            {
              label: 'Organization and roles foundation',
              status: 'live',
              statusText: 'Live',
            },
            {
              label: 'Client personal area',
              status: 'live',
              statusText: 'Live',
            },
            {
              label: 'Visual program builder and exercise library',
              status: 'inBuild',
              statusText: 'In build',
            },
            {
              label: 'Nutrition calculation from a food library',
              status: 'inBuild',
              statusText: 'In build',
            },
            {
              label: 'Pair and group training',
              status: 'inBuild',
              statusText: 'In build',
            },
            {
              label: 'Meeting booking',
              status: 'inBuild',
              statusText: 'In build',
            },
            {
              label: 'Personal notes and task area for coaches',
              status: 'inBuild',
              statusText: 'In build',
            },
            {
              label: 'Form builders (policies, questionnaires, onboarding)',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Messaging inside the portal',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Client progress journey (My Journey)',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Online payments and receipts through a payment provider API',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Finance integration with a separate finance app',
              status: 'planned',
              statusText: 'Planned',
            },
          ],
        },
        {
          number: 2,
          title: 'Coach Pilot and Independent Trainees',
          description:
            'Two parallel tracks. Coaches test the platform in real conditions; independent trainees get their own plans. Both depend on payment integration, security and legal documents.',
          items: [
            {
              label: 'Independent security review',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Opening to pilot coaches',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Coach subscription plans and billing',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label:
                'Independent trainees: a public preview without an account, then Basic and Plus plans',
              status: 'planned',
              statusText: 'Planned',
            },
          ],
        },
        {
          number: 3,
          title: 'SEESA Mobile Experience',
          description:
            'Apps for coaches and trainees, in sync with the portal. Development and testing can start in parallel with phase 2.',
          items: [
            {
              label: 'Mobile apps for iPhone and Android',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label:
                'Apple Health and Health Connect sync (steps, heart rate, completed workouts) from Apple Watch and Android watches',
              status: 'planned',
              statusText: 'Planned',
            },
          ],
        },
        {
          number: 4,
          title: 'Marketplace, Discovery and International Expansion',
          description:
            'Clients find the right professional; coaches and professionals get found. Depends on technical readiness, security standards and national and international legal requirements.',
          items: [
            {
              label:
                'Discovery: search, matching and ranking across coaches and sport and health professionals',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'A landing page for every coach',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label: 'Program store',
              status: 'planned',
              statusText: 'Planned',
            },
            {
              label:
                'International expansion, starting with Athens, Greece, then further markets including the United States',
              status: 'planned',
              statusText: 'Planned',
            },
          ],
        },
        {
          number: 5,
          title: 'Enterprise and Teams',
          description:
            'Larger organizations with several coaching teams, including teams that combine coaches, physiotherapists and dietitians.',
          items: [
            {
              label: 'Enterprise teams and advanced multi-coach management',
              status: 'planned',
              statusText: 'Planned',
            },
          ],
        },
      ],
    },
    model: {
      label: 'Planned business model',
      title: 'Coach subscriptions by number of active clients',
      statusNote: 'Planned, subject to change',
      tiers: [
        'Tier 1: up to 8 active clients',
        'Tier 2: up to 20 active clients',
        'Tier 3: unlimited active clients',
      ],
      notes: [
        'Enterprise plans are quoted per organization.',
        'Pilot coaches join on a launch arrangement.',
        'Independent trainees: a public preview without an account, then Basic and Plus plans. Prices are published at launch.',
      ],
    },
    team: {
      label: 'Owner and team',
      title: 'A founder-led product',
      founderBio:
        'Sayris Athena, founder and product owner. Personal trainer and entrepreneur in Eilat, competitive athlete (1st Place, NPC Israel, Wellness, 2025), founder of SEESAYRIS.',
      howItIsBuiltLabel: 'How it is built',
      howItIsBuiltBody:
        'A founder-led product with AI-assisted engineering under a documented review process. Every change is reviewed, tested and checked before release.',
      openRolesLabel: 'Open roles',
      openRolesBody: 'A security professional, additional engineering.',
      advisersLabel: 'Advisers and pilot coaches',
      advisersBody:
        'Advisers being appointed: an independent security specialist, and a lawyer with national and international experience for Phase 2 of the marketplace, which starts in Athens, Greece. Pilot coaches: a professional bodybuilding partner with a large team of trainees, and two more coaches from Israel, to be selected.',
    },
    ask: {
      label: 'What we are looking for',
      title: 'Support for the stage before opening to other coaches.',
      items: [
        'Development support.',
        'An independent security review before opening SEESA to other coaches.',
        'Funding for that stage.',
      ],
      timelineNote:
        'Timeline: follows the stages of the roadmap above, without calendar dates.',
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      email: 'info@seesayris.com',
      copyButton: 'Copy address',
    },
    footer: {
      line: 'SEESA is a product of SEESAYRIS.',
    },
  },
  he: {
    header: {
      problem: 'הבעיה',
      platform: 'הפלטפורמה',
      structure: 'מבנה',
      security: 'אבטחה',
      roadmap: 'מפת דרכים',
      model: 'מודל',
      team: 'צוות',
      ask: 'בקשה',
      contact: 'קשר',
      en: 'EN',
      he: 'עברית',
    },
    top: {
      label: 'סקירת פרויקט',
      headline: 'מרחב הכושר הדיגיטלי למאמנים ולמתאמנים',
      subline: 'פלטפורמה לניהול אימון אישי, נבנית בישראל, עברית קודם.',
      button: 'לצפייה במפת הדרכים',
    },
    problem: {
      label: 'הבעיה',
      title: 'אימון אישי מתנהל על כלים מפוזרים.',
      points: [
        "מאמנים מנהלים מתאמנים בין צ'אטים, גיליונות, מסמכים וכלי תשלום נפרדים.",
        'מתאמנים מאבדים את התמונה על התוכנית וההתקדמות שלהם.',
        'קשה להבטיח פרטיות של מידע בריאותי בכלים כלליים.',
      ],
    },
    what: {
      label: 'מהי SEESA',
      title: 'פלטפורמה אחת למאמנים, לארגונים וללקוחות שלהם.',
      body:
        'SEESA היא פלטפורמה למאמנים עצמאיים וגם לארגונים עם כמה מאמנים, כמו חדרי כושר וסטודיואים. כל מתאמן מקבל אזור אישי. בשלב 2 SEESA משרתת גם מתאמנים עצמאיים שאינם עובדים עם מאמן.',
      items: [
        'מאמנים עצמאיים',
        'ארגונים עם כמה מאמנים',
        'מתאמנים, באזור אישי',
        'מתאמנים עצמאיים (שלב 2)',
      ],
    },
    platform: {
      label: 'הפלטפורמה',
      title: 'מה הפלטפורמה מציעה',
      intro:
        'המסכים להלן הם איורים ועיצובים לדוגמה עם נתונים לדוגמה. כל אחד מהם מסומן.',
      captions: {
        portalScreenshot: 'צילום מסך מהפורטל הנוכחי, נתונים לדוגמה',
        conceptDesign: 'עיצוב קונספט, נתונים לדוגמה',
      },
      workspaceHub: {
        title: 'כל מה שמאמן חדש צריך, במקום אחד',
        text:
          'מתאמנים, תוכניות, תזונה, יומן, תשלומים, טפסים, סטודיו תוכן, קמפיינים, ניהול לידים ותמיכה נמצאים בתוך סביבת עבודה אחת.',
        nodes: [
          'מתאמנים',
          'תוכניות',
          'תזונה',
          'יומן',
          'קרדיטים',
          'תשלומים',
          'טפסים',
          'סטודיו תוכן',
          'קמפיינים',
          'לידים',
          "צ'ק-אין",
          'תמיכה',
        ],
        mapImageTitle: 'סביבת העבודה המחוברת של המאמן',
        mapImageCaption: 'עיצוב קונספט',
      },
      clientsAndCheckIns: {
        status: 'פעיל',
        title: "מתאמנים וצ'ק-אין",
        description:
          "בכל שבוע המתאמן שולח צ'ק-אין: משקל, היקפים, אנרגיה, שינה, הערות ותמונות התקדמות. המאמן סוקר, מוסיף הערה ורואה את המגמה לאורך זמן. דבר אינו משותף מחוץ למאמן ולמתאמן.",
        imageTitles: [
          'רשימת מתאמנים',
          'סקירת מתאמן למאמן, מחשב וטלפון',
          "סקירת צ'ק-אין עם תמונות התקדמות",
        ],
      },
      trainingPrograms: {
        status: 'בבנייה',
        title: 'תוכניות אימון וספריית תרגילים',
        description:
          'בונה תוכניות חזותי, ייבוא מ-DOCX, ספריית תרגילים עם הדגמות, וגרסאות שאפשר לפרסם בלי לשנות אימונים שכבר הושלמו.',
        screen: {
          headerTitle: 'בניית תוכנית · שלב ישבן',
          headerStatus: 'טיוטה v3 · נשמר',
          activeDayHeader: 'יום א׳ · ישבן וירך אחורית',
          exercises: [
            {
              num: '1',
              name: "היפ ת'רסט עם מוט",
              prescription: "4 × 8-12 · 90 שנ'",
            },
            {
              num: '2',
              name: 'דדליפט רומני',
              prescription: "4 × 8-10 · 90 שנ'",
            },
            {
              num: '3',
              name: 'סקוואט בולגרי',
              prescription: "3 × 8-10 · 90 שנ'",
            },
            {
              num: '4',
              name: 'כפיפת ברך בישיבה',
              prescription: "3 × 12-15 · 60 שנ'",
            },
            {
              num: '5',
              name: 'הרחקת ירך בכבל',
              prescription: "3 × 15-20 · 45 שנ'",
            },
          ],
          versionNote: 'גרסאות שפורסמו משאירות אימונים שהושלמו ללא שינוי.',
          libraryTitle: 'ספריית תרגילים',
          libraryItems: [
            { name: 'בעיטה בכבל', addSymbol: '+' },
            { name: 'גשר ישבן', addSymbol: '+' },
          ],
          caption: 'עיצוב קונספט, נתונים לדוגמה',
        },
        moreMockupsNote:
          'עוד עיצובים לדוגמה של אזור האימונים. הם מציגים סגנון חזותי מוקדם, לפני פלטת הזהב הסופית.',
        mockupTitles: [
          'בונה התוכניות, אנגלית',
          'בונה התוכניות, עברית מימין לשמאל',
          'אימון חי בטלפון, עם פעולות לתרגיל',
          'ספריית תרגילים ארגונית עם מסננים',
          'גרסאות ופרסום כעותקים עצמאיים',
          'פרטי תרגיל במחשב ובטלפון',
        ],
      },
      nutritionPlans: {
        statusEditor: 'עורך: פעיל',
        statusCalculation: 'חישוב: בבנייה',
        title: 'תוכניות תזונה',
        description:
          'עורך תוכניות תזונה למאמן כבר היום. חישוב אוטומטי של קלוריות ומקרו מתוך ספריית מזונות נמצא בבנייה.',
        imageTitles: [
          'עורך תוכניות תזונה, צד המאמן',
          'תוכנית תזונה באפליקציית המתאמן',
        ],
      },
      scheduling: {
        status: 'פעיל',
        title: 'שיבוץ, קרדיטים ונוכחות',
        description: 'יומן, חבילות אימונים, וקרדיטים שמנוכים כשהנוכחות מאושרת.',
        imageTitles: ['יומן מאמן, תצוגת שבוע', 'קביעת אימון וקרדיטים'],
      },
      payments: {
        status: 'פעיל',
        secondaryStatus: 'תשלומים מקוונים: מתוכנן',
        title: 'רישום תשלומים וקבלות',
        description:
          'המאמן גובה תשלומים ישירות. SEESA רושמת אותם ואינה לוקחת עמלה.',
        onlinePaymentsNote:
          'תשלומים מקוונים וקבלות אוטומטיות דרך API של ספק תשלומים נמצאים בבדיקה.',
        imageTitle: 'חיוב אימון זוגי, שני משלמים',
      },
      healthDeclarations: {
        status: 'הצהרות: פעיל',
        secondaryStatus: 'בוני טפסים: מתוכנן',
        title: 'הצהרות בריאות ובוני טפסים',
        description:
          'הצהרות בריאות נאספות לפני האימון ונסקרות רק על ידי אנשים מורשים. בוני טפסים לתקנונים, שאלונים וקליטה מתוכננים.',
      },
      leadTracking: {
        status: 'פעיל',
        title: 'מעקב אחר לידים',
        description: 'רואים מאיפה הגיע כל מתאמן חדש.',
      },
      clientPersonalArea: {
        status: 'פעיל',
        secondaryStatus: 'סנכרון שעון: מתוכנן',
        title: 'האזור האישי של המתאמן',
        description:
          "תוכנית, התקדמות, צ'ק-אין ומסמכים במקום אחד עבור המתאמן.",
        watchSyncNote:
          'מתוכנן: סנכרון עם Apple Health ו-Health Connect לצעדים, דופק ואימונים שהושלמו, משעוני Apple Watch ושעוני אנדרואיד. אפליקציות לאייפון ולאנדרואיד ימשיכו את הפורטל.',
        languagesNote: 'עברית מימין לשמאל ואנגלית, עם צרפתית זמינה.',
      },
      marketplace: {
        badge: 'מתוכנן',
        title: 'פלטפורמת גילוי, לא רק כלי ניהול',
        text:
          'מתאמנים מחפשים; SEESA מתאימה ומדרגת מאמנים ואנשי מקצוע בספורט ובבריאות לפי אזור, התמחות, שפה וזמינות. כל מאמן מקבל דף נחיתה במרקטפלייס. מכירת תוכניות ואימונים באה אחרי שנמצאים. נבנה בליבת הפלטפורמה, החל בישראל ובאתונה, יוון.',
        imageTitle: 'מציאת מאמן ודף נחיתה של מאמן',
        caption: 'עיצוב קונספט, נתונים לדוגמה',
      },
    },
    structure: {
      label: 'איך זה בנוי',
      title: 'שלוש שכבות, לכל אחת גבולות משלה.',
      layers: [
        {
          title: 'רמת בעל הפלטפורמה',
          body: 'מפעיל את הפלטפורמה. אינו יכול לפתוח רשומות מתאמנים של ארגונים אחרים.',
        },
        {
          title: 'סביבת העבודה של המאמן או הארגון',
          body: 'מתאמנים, תוכניות, תזונה, יומן, קרדיטים ורישומי תשלום.',
        },
        {
          title: 'אזור המתאמן',
          body: "התוכנית, ההתקדמות, הצ'ק-אין והמסמכים של המתאמן.",
        },
      ],
      rolesLabel: 'תפקידים והרשאות',
      roles: [
        'בעל הפלטפורמה',
        'בעל הארגון',
        'מנהל',
        'ראש צוות (מאמן עם הרשאות צוות)',
        'מאמן',
        'מתאמן',
      ],
      ownerIsolationNote:
        'בעל הפלטפורמה אינו יכול לפתוח רשומות מתאמנים של ארגונים אחרים.',
      notes: [
        'כל אדם רואה רק את מה שתפקידו מאפשר, והבדיקה מתבצעת בשרת.',
        'גישת תמיכה לנתוני מאמן מתוכננת להינתן רק על ידי המאמן, מוגבלת בהיקף ובזמן. היא עדיין לא פעילה היום.',
        'השבתת מתאמן מסיימת את הגישה שלו ושומרת את הרשומות שלו.',
      ],
    },
    security: {
      label: 'אבטחה ופרטיות',
      title: 'מה קיים היום ומה בא אחר כך.',
      points: [
        'הגישה נבדקת לפי ארגון ולפי מתאמן, בשרת.',
        'מידע בריאותי מטופל כמידע רגיש.',
        'מסמכי מתאמנים ותמונות נשמרים באחסון פרטי ונפתחים באמצעות קישורים קצרי חיים.',
        'בדיקות אוטומטיות רצות מדי יום: פגיעויות בספריות, סודות שהודלפו, וכותרות האבטחה והתעודה של האתר.',
        'גיבוי למסד הנתונים נלקח לפני כל מיגרציה של מסד הנתונים.',
        'שינויים מרכזיים, כמו שיוך מחדש של מאמן, עריכות של אימון ותשלומים והסכמה, נרשמים יחד עם מי שביצע אותם.',
        'לפני פתיחת SEESA למאמנים נוספים, הצעד הבא הוא בדיקת אבטחה עצמאית.',
      ],
      disclaimer: 'SEESA אינה טוענת לאף הסמכה או מעמד של עמידה בתקן.',
    },
    roadmap: {
      label: 'מפת דרכים',
      title: 'חמישה שלבים, כיוון אחד',
      intro:
        'השלבים חופפים ואינם בהכרח עוקבים. הסטטוסים מציגים היכן כל פריט עומד כעת. ללא תאריכי השקה.',
      liveLabel: 'פעיל',
      inBuildLabel: 'בבנייה',
      plannedLabel: 'מתוכנן',
      phases: [
        {
          number: 1,
          title: 'פלטפורמת המאמנים של SEESA',
          description: 'הפורטל הקיים. המיקוד: שיפור, הרחבה וייצוב.',
          items: [
            { label: 'ניהול מתאמנים', status: 'live', statusText: 'פעיל' },
            { label: "צ'ק-אין עם תמונות", status: 'live', statusText: 'פעיל' },
            {
              label: 'יומן מאמן וקרדיטים',
              status: 'live',
              statusText: 'פעיל',
            },
            {
              label: 'עורך תוכניות תזונה',
              status: 'live',
              statusText: 'פעיל',
            },
            {
              label: 'קליטת הצהרות בריאות',
              status: 'live',
              statusText: 'פעיל',
            },
            { label: 'מעקב אחר לידים', status: 'live', statusText: 'פעיל' },
            {
              label: 'תשתית ארגונים ותפקידים',
              status: 'live',
              statusText: 'פעיל',
            },
            { label: 'אזור אישי למתאמן', status: 'live', statusText: 'פעיל' },
            {
              label: 'בונה תוכניות חזותי וספריית תרגילים',
              status: 'inBuild',
              statusText: 'בבנייה',
            },
            {
              label: 'חישוב תזונתי מספריית מזונות',
              status: 'inBuild',
              statusText: 'בבנייה',
            },
            {
              label: 'אימון זוגי וקבוצתי',
              status: 'inBuild',
              statusText: 'בבנייה',
            },
            { label: 'קביעת פגישות', status: 'inBuild', statusText: 'בבנייה' },
            {
              label: 'אזור הערות ומשימות אישי למאמנים',
              status: 'inBuild',
              statusText: 'בבנייה',
            },
            {
              label: 'בוני טפסים (תקנונים, שאלונים, קליטה)',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'הודעות בתוך הפורטל',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'מסע ההתקדמות של המתאמן (My Journey)',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'תשלומים מקוונים וקבלות דרך API של ספק תשלומים',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'חיבור לאפליקציית כספים נפרדת',
              status: 'planned',
              statusText: 'מתוכנן',
            },
          ],
        },
        {
          number: 2,
          title: 'פיילוט מאמנים ומתאמנים עצמאיים',
          description:
            'שני מסלולים במקביל. מאמנים בודקים את הפלטפורמה בתנאים אמיתיים; מתאמנים עצמאיים מקבלים מסלולים משלהם. שניהם תלויים בחיבור תשלומים, באבטחה ובמסמכים משפטיים.',
          items: [
            {
              label: 'בדיקת אבטחה עצמאית',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'פתיחה למאמני פיילוט',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'מסלולי מנוי וחיוב למאמנים',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label:
                'מתאמנים עצמאיים: תצוגה מקדימה פתוחה ללא חשבון, ואחריה מסלולי Basic ו-Plus',
              status: 'planned',
              statusText: 'מתוכנן',
            },
          ],
        },
        {
          number: 3,
          title: 'חוויית המובייל של SEESA',
          description:
            'אפליקציות למאמנים ולמתאמנים, מסונכרנות עם הפורטל. פיתוח ובדיקות יכולים להתחיל במקביל לשלב 2.',
          items: [
            {
              label: 'אפליקציות לאייפון ולאנדרואיד',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label:
                'סנכרון Apple Health ו-Health Connect (צעדים, דופק, אימונים שהושלמו) משעוני Apple Watch ושעוני אנדרואיד',
              status: 'planned',
              statusText: 'מתוכנן',
            },
          ],
        },
        {
          number: 4,
          title: 'מרקטפלייס, גילוי והתרחבות בינלאומית',
          description:
            'מתאמנים מוצאים את איש המקצוע הנכון; מאמנים ואנשי מקצוע נמצאים. תלוי במוכנות טכנית, בתקני אבטחה ובדרישות משפטיות לאומיות ובינלאומיות.',
          items: [
            {
              label:
                'גילוי: חיפוש, התאמה ודירוג בין מאמנים ואנשי מקצוע בספורט ובבריאות',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'דף נחיתה לכל מאמן',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label: 'חנות תוכניות',
              status: 'planned',
              statusText: 'מתוכנן',
            },
            {
              label:
                'התרחבות בינלאומית, החל באתונה, יוון, ואחר כך שווקים נוספים כולל ארצות הברית',
              status: 'planned',
              statusText: 'מתוכנן',
            },
          ],
        },
        {
          number: 5,
          title: 'ארגונים וצוותים',
          description:
            'ארגונים גדולים יותר עם כמה צוותי אימון, כולל צוותים שמשלבים מאמנים, פיזיותרפיסטים ודיאטנים.',
          items: [
            {
              label: 'צוותים ארגוניים וניהול מתקדם של כמה מאמנים',
              status: 'planned',
              statusText: 'מתוכנן',
            },
          ],
        },
      ],
    },
    model: {
      label: 'מודל עסקי מתוכנן',
      title: 'מנויי מאמנים לפי מספר מתאמנים פעילים',
      statusNote: 'מתוכנן, כפוף לשינוי',
      tiers: [
        'מסלול 1: עד 8 מתאמנים פעילים',
        'מסלול 2: עד 20 מתאמנים פעילים',
        'מסלול 3: מתאמנים פעילים ללא הגבלה',
      ],
      notes: [
        'מסלולי ארגון מתומחרים בהצעת מחיר לכל ארגון.',
        'מאמני פיילוט מצטרפים בהסדר השקה.',
        'מתאמנים עצמאיים: תצוגה מקדימה פתוחה ללא חשבון, ואחריה מסלולי Basic ו-Plus. המחירים יפורסמו בהשקה.',
      ],
    },
    team: {
      label: 'הבעלים והצוות',
      title: 'מוצר בהובלת המייסדת',
      founderBio:
        'Sayris Athena, מייסדת ובעלת המוצר. מאמנת כושר ויזמית באילת, ספורטאית תחרותית (1st Place, NPC Israel, Wellness, 2025), מייסדת SEESAYRIS.',
      howItIsBuiltLabel: 'איך זה נבנה',
      howItIsBuiltBody:
        'מוצר בהובלת המייסדת, עם הנדסה בסיוע בינה מלאכותית בתהליך סקירה מתועד. כל שינוי נסקר, נבדק ונבחן לפני שחרור.',
      openRolesLabel: 'תפקידים פתוחים',
      openRolesBody: 'איש אבטחה מקצועי, הנדסה נוספת.',
      advisersLabel: 'יועצים ומאמני פיילוט',
      advisersBody:
        'יועצים בתהליך מינוי: מומחה אבטחה עצמאי, ועורך דין עם ניסיון לאומי ובינלאומי לשלב 2 של המרקטפלייס, שיתחיל באתונה, יוון. מאמני פיילוט: שותף מקצועי מתחום פיתוח הגוף עם צוות מתאמנים גדול, ושני מאמנים נוספים מישראל שייבחרו.',
    },
    ask: {
      label: 'מה אנחנו מחפשים',
      title: 'תמיכה בשלב שלפני הפתיחה למאמנים נוספים.',
      items: [
        'תמיכה בפיתוח.',
        'בדיקת אבטחה עצמאית לפני פתיחת SEESA למאמנים נוספים.',
        'מימון לשלב הזה.',
      ],
      timelineNote:
        'לוח זמנים: עוקב אחר שלבי מפת הדרכים שלמעלה, ללא תאריכים קלנדריים.',
    },
    contact: {
      label: 'קשר',
      title: 'צרו קשר',
      email: 'info@seesayris.com',
      copyButton: 'העתקת כתובת',
    },
    footer: {
      line: 'SEESA היא מוצר של SEESAYRIS.',
    },
  },
};
