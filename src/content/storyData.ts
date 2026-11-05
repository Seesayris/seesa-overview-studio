export type Lang = 'en' | 'he';

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
    clientsAndCheckIns: {
      status: string;
      title: string;
      description: string;
      screen: {
        name: string;
        status: string;
        subtitle: string;
        front: string;
        side: string;
        back: string;
        weightLabel: string;
        weightValue: string;
        waistLabel: string;
        waistValue: string;
        energyLabel: string;
        energyValue: string;
        notePlaceholder: string;
        actionButton: string;
        caption: string;
      };
    };
    trainingPrograms: {
      status: string;
      title: string;
      description: string;
      screen: {
        headerTitle: string;
        headerStatus: string;
        days: {
          day: string;
          label: string;
        }[];
        activeDayHeader: string;
        exercises: {
          num: string;
          name: string;
          prescription: string;
        }[];
        versionNote: string;
        libraryTitle: string;
        searchPlaceholder: string;
        libraryItems: {
          name: string;
          addSymbol: string;
        }[];
        caption: string;
      };
      moreMockupsNote: string;
      mockupCaptions: [string, string, string, string, string, string];
    };
    nutritionPlans: {
      statusEditor: string;
      statusCalculation: string;
      title: string;
      description: string;
      screen: {
        headerTitle: string;
        badge: string;
        meals: {
          name: string;
          items: {
            food: string;
            grams: string;
            kcal: string;
          }[];
        }[];
        totals: {
          caloriesLabel: string;
          caloriesValue: string;
          proteinLabel: string;
          proteinValue: string;
          carbsLabel: string;
          carbsValue: string;
          fatLabel: string;
          fatValue: string;
        };
        caption: string;
      };
    };
    scheduling: {
      status: string;
      title: string;
      description: string;
      screen: {
        headerTitle: string;
        creditLine: string;
        days: [string, string, string, string, string, string, string];
        slots: {
          time: string;
          client: string;
        }[];
        session1Line: string;
        session1Action: string;
        session2Line: string;
        session2Status: string;
        footerNote: string;
        caption: string;
      };
    };
    payments: {
      status: string;
      title: string;
      description: string;
      screen: {
        headerTitle: string;
        packageName: string;
        packagePriceLabel: string;
        packagePriceValue: string;
        recordedPaymentsLabel: string;
        recordedPaymentsValue: string;
        amountOwedLabel: string;
        amountOwedValue: string;
        actionButton: string;
        footerNote: string;
        caption: string;
      };
    };
    healthDeclarations: {
      status: string;
      title: string;
      description: string;
      caption: string;
    };
    leadTracking: {
      status: string;
      title: string;
      description: string;
      caption: string;
    };
    clientPersonalArea: {
      status: string;
      title: string;
      description: string;
      screen: {
        greeting: string;
        todayLabel: string;
        workoutTitle: string;
        workoutMeta: string;
        startButton: string;
        weekProgress: string;
        nextSessionLabel: string;
        nextSessionValue: string;
        caption: string;
      };
      mockupCaption: string;
      languagesNote: string;
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
    liveItems: [string, string, string, string, string, string, string, string];
    inBuildLabel: string;
    inBuildItems: [string, string, string, string, string];
    plannedLabel: string;
    plannedItems: [
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
  };
  model: {
    label: string;
    title: string;
    statusNote: string;
    tiers: {
      name: string;
      price: string;
      clients: string;
    }[];
    vatNote: string;
    notes: [string, string, string, string];
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
        'SEESA is a platform for independent coaches and for organizations with several coaches, such as gyms and studios. Each client gets a personal area. Later, SEESA will also serve independent trainees who do not work with a coach.',
      items: [
        'Independent coaches',
        'Organizations with several coaches',
        'Clients, in a personal area',
        'Independent trainees (later)',
      ],
    },
    platform: {
      label: 'The platform',
      title: 'What the platform offers',
      intro:
        'Screens below are illustrations and design mockups with sample data. Each one is labelled.',
      clientsAndCheckIns: {
        status: 'Live',
        title: 'Clients and check-ins',
        description:
          'Weekly check-ins with progress photos, reviewed by the coach.',
        screen: {
          name: 'Maya Cohen',
          status: 'Needs review',
          subtitle: 'Week 6 check-in · submitted Sunday',
          front: 'Front',
          side: 'Side',
          back: 'Back',
          weightLabel: 'Weight',
          weightValue: '61.4 kg',
          waistLabel: 'Waist',
          waistValue: '69 cm',
          energyLabel: 'Energy',
          energyValue: '4 / 5',
          notePlaceholder: 'Add a note for Maya…',
          actionButton: 'Mark reviewed',
          caption: 'Illustration, sample data',
        },
      },
      trainingPrograms: {
        status: 'In build',
        title: 'Training programs and exercise library',
        description:
          'A visual program builder, DOCX import, an exercise library with demonstrations, and versions you can publish without touching completed workouts.',
        screen: {
          headerTitle: 'Program Builder · Glutes Phase',
          headerStatus: 'Draft v3 · saved',
          days: [
            { day: 'Sun', label: 'Glutes & Hamstrings' },
            { day: 'Mon', label: 'Upper body' },
            { day: 'Tue', label: 'Rest day' },
            { day: 'Wed', label: 'Quads & Glutes' },
            { day: 'Thu', label: 'Upper body (pull)' },
            { day: 'Fri', label: 'Glutes & Hamstrings' },
            { day: 'Sat', label: 'Full body' },
          ],
          activeDayHeader: 'Sunday · Glutes & Hamstrings',
          exercises: [
            {
              num: '1',
              name: 'Barbell Hip Thrust',
              prescription: '4 × 8–12 · 90s',
            },
            {
              num: '2',
              name: 'Romanian Deadlift',
              prescription: '4 × 8–10 · 90s',
            },
            {
              num: '3',
              name: 'Bulgarian Split Squat',
              prescription: '3 × 8–10 · 90s',
            },
            {
              num: '4',
              name: 'Seated Leg Curl',
              prescription: '3 × 12–15 · 60s',
            },
            {
              num: '5',
              name: 'Cable Hip Abduction',
              prescription: '3 × 15–20 · 45s',
            },
          ],
          versionNote: 'Published versions keep completed workouts intact.',
          libraryTitle: 'Exercise library',
          searchPlaceholder: 'Search exercises…',
          libraryItems: [
            { name: 'Cable Kickback', addSymbol: '+' },
            { name: 'Glute Bridge', addSymbol: '+' },
          ],
          caption: 'Concept design, sample data',
        },
        moreMockupsNote:
          'More design mockups of the training area. They show an earlier visual style, before the final gold palette.',
        mockupCaptions: [
          'Design mockup · Program builder, English',
          'Design mockup · Program builder, Hebrew right to left',
          'Design mockup · Live session on a phone, with exercise actions',
          'Design mockup · Organization exercise library with filters',
          'Design mockup · Versions and publishing as independent copies',
          'Design mockup · Exercise detail on desktop and phone',
        ],
      },
      nutritionPlans: {
        statusEditor: 'Editor: Live',
        statusCalculation: 'Calculation: In build',
        title: 'Nutrition plans',
        description:
          'A coach editor for nutrition plans today. Automatic calories and macros from a food library are in build.',
        screen: {
          headerTitle: 'Nutrition plan · Sample day',
          badge: 'Automatic calculation: in build',
          meals: [
            {
              name: 'BREAKFAST',
              items: [
                { food: 'Oats', grams: '60 g', kcal: '228 kcal' },
                { food: 'Greek yogurt', grams: '200 g', kcal: '121 kcal' },
                { food: 'Blueberries', grams: '80 g', kcal: '44 kcal' },
              ],
            },
            {
              name: 'LUNCH',
              items: [
                { food: 'Chicken breast', grams: '150 g', kcal: '176 kcal' },
                { food: 'Cooked rice', grams: '180 g', kcal: '229 kcal' },
                { food: 'Olive oil', grams: '10 g', kcal: '90 kcal' },
                { food: 'Mixed vegetables', grams: '200 g', kcal: '52 kcal' },
              ],
            },
            {
              name: 'SNACK',
              items: [
                { food: 'Banana', grams: '100 g', kcal: '96 kcal' },
                { food: 'Almonds', grams: '20 g', kcal: '122 kcal' },
              ],
            },
            {
              name: 'DINNER',
              items: [
                { food: 'Salmon', grams: '140 g', kcal: '274 kcal' },
                { food: 'Baked potato', grams: '200 g', kcal: '152 kcal' },
                { food: 'Green salad', grams: '150 g', kcal: '40 kcal' },
              ],
            },
          ],
          totals: {
            caloriesLabel: 'Calories',
            caloriesValue: '1624',
            proteinLabel: 'Protein',
            proteinValue: '111 g',
            carbsLabel: 'Carbs',
            carbsValue: '187 g',
            fatLabel: 'Fat',
            fatValue: '48 g',
          },
          caption: 'Concept design, sample data',
        },
      },
      scheduling: {
        status: 'Live',
        title: 'Scheduling, credits and attendance',
        description:
          'A calendar, session packages, and credits deducted when attendance is confirmed.',
        screen: {
          headerTitle: 'Training schedule · This week',
          creditLine: 'Maya Cohen · 6 credits left',
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          slots: [
            { time: '08:00', client: 'Maya Cohen' },
            { time: '09:30', client: 'Dana Levy' },
            { time: '12:00', client: 'Noa Green' },
          ],
          session1Line: 'Maya Cohen 08:00 – 09:00',
          session1Action: 'Mark attended',
          session2Line: 'Dana Levy 09:30 – 10:30',
          session2Status: 'Upcoming',
          footerNote:
            'Marking attendance deducts one credit. Undo restores it.',
          caption: 'Illustration, sample data',
        },
      },
      payments: {
        status: 'Live',
        title: 'Payments and receipts recording',
        description:
          'The coach collects payments directly. SEESA records them and takes no commission.',
        screen: {
          headerTitle: 'Billing · Dana Levy',
          packageName: '8-session package',
          packagePriceLabel: 'Package price',
          packagePriceValue: '₪960',
          recordedPaymentsLabel: 'Recorded payments',
          recordedPaymentsValue: '₪480',
          amountOwedLabel: 'Amount owed',
          amountOwedValue: '₪480',
          actionButton: 'Record payment',
          footerNote:
            'The coach collects the payment directly. SEESA takes no commission.',
          caption: 'Illustration, sample data',
        },
      },
      healthDeclarations: {
        status: 'Live',
        title: 'Health declarations',
        description:
          'Collected before training and reviewed only by authorized people.',
        caption: 'Design mockup, sample data',
      },
      leadTracking: {
        status: 'Live',
        title: 'Lead tracking',
        description: 'See where each new client came from.',
        caption: 'Design mockup, sample data',
      },
      clientPersonalArea: {
        status: 'Live',
        title: "The client's personal area",
        description:
          'Plan, progress, check-ins and documents in one place for the client.',
        screen: {
          greeting: 'Hi Maya',
          todayLabel: "Today's workout",
          workoutTitle: 'Glutes & Hamstrings',
          workoutMeta: '5 exercises · about 45 minutes',
          startButton: 'Start workout',
          weekProgress: 'This week: 3 of 4 workouts',
          nextSessionLabel: 'Next session',
          nextSessionValue: 'Thursday 09:00 with your coach',
          caption: 'Illustration, sample data',
        },
        mockupCaption: 'Design mockup · Concept design',
        languagesNote: 'Hebrew right to left and English, with French available.',
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
      title: 'Now, next and later',
      intro: 'Statuses show where the project stands now.',
      liveLabel: 'Live',
      liveItems: [
        'Client management',
        'Check-ins with photos',
        'Coach calendar and credits',
        'Nutrition plan editor',
        'Health declaration intake',
        'Lead tracking',
        'Organization and roles foundation',
        'Client personal area',
      ],
      inBuildLabel: 'In build',
      inBuildItems: [
        'Visual program builder and exercise library',
        'Nutrition calculation from a food library',
        'Pair and group training',
        'Meeting booking',
        'Personal notes and task area for coaches',
      ],
      plannedLabel: 'Planned',
      plannedItems: [
        'Independent security review',
        'Opening to pilot coaches',
        'Coach subscription plans and billing',
        'Form builders (health declarations, policies, questionnaires, onboarding)',
        'Messaging inside the portal',
        'Client progress journey (My Journey)',
        'Program store and marketplace for independent trainees and professionals',
        'Finance integration with a separate finance app',
        'Mobile apps for iPhone and Android',
        'Enterprise teams',
      ],
    },
    model: {
      label: 'Planned business model',
      title: 'Coach subscriptions by number of active clients',
      statusNote: 'Planned, subject to change',
      tiers: [
        {
          name: 'Tier 1',
          price: 'ILS 69 / month',
          clients: 'Up to 8 active clients',
        },
        {
          name: 'Tier 2',
          price: 'ILS 199 / month',
          clients: 'Up to 20 active clients',
        },
        {
          name: 'Tier 3',
          price: 'ILS 399 / month',
          clients: 'Unlimited active clients',
        },
      ],
      vatNote: 'VAT included.',
      notes: [
        '14-day free trial.',
        'Enterprise plans are quoted per organization.',
        'Pilot coaches join on a launch arrangement.',
        'Plans for independent trainees are being validated.',
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
        'SEESA היא פלטפורמה למאמנים עצמאיים וגם לארגונים עם כמה מאמנים, כמו חדרי כושר וסטודיואים. כל מתאמן מקבל אזור אישי. בהמשך SEESA תשרת גם מתאמנים עצמאיים שאינם עובדים עם מאמן.',
      items: [
        'מאמנים עצמאיים',
        'ארגונים עם כמה מאמנים',
        'מתאמנים, באזור אישי',
        'מתאמנים עצמאיים (בהמשך)',
      ],
    },
    platform: {
      label: 'הפלטפורמה',
      title: 'מה הפלטפורמה מציעה',
      intro:
        'המסכים להלן הם איורים ועיצובים לדוגמה עם נתונים לדוגמה. כל אחד מהם מסומן.',
      clientsAndCheckIns: {
        status: 'פעיל',
        title: "מתאמנים וצ'ק-אין",
        description: "צ'ק-אין שבועי עם תמונות התקדמות, בסקירת המאמן.",
        screen: {
          name: 'מאיה כהן',
          status: 'ממתין לסקירה',
          subtitle: "צ'ק-אין שבוע 6 · נשלח ביום ראשון",
          front: 'חזית',
          side: 'צד',
          back: 'גב',
          weightLabel: 'משקל',
          weightValue: '61.4 kg',
          waistLabel: 'היקף מותן',
          waistValue: '69 cm',
          energyLabel: 'אנרגיה',
          energyValue: '4 / 5',
          notePlaceholder: 'הוסיפו הערה למאיה…',
          actionButton: 'סמן כנסקר',
          caption: 'איור, נתונים לדוגמה',
        },
      },
      trainingPrograms: {
        status: 'בבנייה',
        title: 'תוכניות אימון וספריית תרגילים',
        description:
          'בונה תוכניות חזותי, ייבוא מ-DOCX, ספריית תרגילים עם הדגמות, וגרסאות שאפשר לפרסם בלי לשנות אימונים שכבר הושלמו.',
        screen: {
          headerTitle: 'בניית תוכנית · שלב ישבן',
          headerStatus: 'טיוטה v3 · נשמר',
          days: [
            { day: 'א׳', label: 'ישבן וירך אחורית' },
            { day: 'ב׳', label: 'פלג גוף עליון' },
            { day: 'ג׳', label: 'יום מנוחה' },
            { day: 'ד׳', label: 'ארבע ראשי וישבן' },
            { day: 'ה׳', label: 'פלג גוף עליון (משיכה)' },
            { day: 'ו׳', label: 'ישבן וירך אחורית' },
            { day: 'ש׳', label: 'גוף מלא' },
          ],
          activeDayHeader: 'יום א׳ · ישבן וירך אחורית',
          exercises: [
            {
              num: '1',
              name: "היפ ת'רסט עם מוט",
              prescription: "4 × 8–12 · 90 שנ'",
            },
            {
              num: '2',
              name: 'דדליפט רומני',
              prescription: "4 × 8–10 · 90 שנ'",
            },
            {
              num: '3',
              name: 'סקוואט בולגרי',
              prescription: "3 × 8–10 · 90 שנ'",
            },
            {
              num: '4',
              name: 'כפיפת ברך בישיבה',
              prescription: "3 × 12–15 · 60 שנ'",
            },
            {
              num: '5',
              name: 'הרחקת ירך בכבל',
              prescription: "3 × 15–20 · 45 שנ'",
            },
          ],
          versionNote: 'גרסאות שפורסמו משאירות אימונים שהושלמו ללא שינוי.',
          libraryTitle: 'ספריית תרגילים',
          searchPlaceholder: 'חיפוש תרגילים…',
          libraryItems: [
            { name: 'בעיטה בכבל', addSymbol: '+' },
            { name: 'גשר ישבן', addSymbol: '+' },
          ],
          caption: 'עיצוב קונספט, נתונים לדוגמה',
        },
        moreMockupsNote:
          'עוד עיצובים לדוגמה של אזור האימונים. הם מציגים סגנון חזותי מוקדם, לפני פלטת הזהב הסופית.',
        mockupCaptions: [
          'עיצוב לדוגמה · בונה התוכניות, אנגלית',
          'עיצוב לדוגמה · בונה התוכניות, עברית מימין לשמאל',
          'עיצוב לדוגמה · אימון חי בטלפון, עם פעולות לתרגיל',
          'עיצוב לדוגמה · ספריית תרגילים ארגונית עם מסננים',
          'עיצוב לדוגמה · גרסאות ופרסום כעותקים עצמאיים',
          'עיצוב לדוגמה · פרטי תרגיל במחשב ובטלפון',
        ],
      },
      nutritionPlans: {
        statusEditor: 'עורך: פעיל',
        statusCalculation: 'חישוב: בבנייה',
        title: 'תוכניות תזונה',
        description:
          'עורך תוכניות תזונה למאמן כבר היום. חישוב אוטומטי של קלוריות ומקרו מתוך ספריית מזונות נמצא בבנייה.',
        screen: {
          headerTitle: 'תוכנית תזונה · יום לדוגמה',
          badge: 'חישוב אוטומטי: בבנייה',
          meals: [
            {
              name: 'ארוחת בוקר',
              items: [
                { food: 'שיבולת שועל', grams: '60 g', kcal: '228 kcal' },
                { food: 'יוגורט יווני', grams: '200 g', kcal: '121 kcal' },
                { food: 'אוכמניות', grams: '80 g', kcal: '44 kcal' },
              ],
            },
            {
              name: 'ארוחת צהריים',
              items: [
                { food: 'חזה עוף', grams: '150 g', kcal: '176 kcal' },
                { food: 'אורז מבושל', grams: '180 g', kcal: '229 kcal' },
                { food: 'שמן זית', grams: '10 g', kcal: '90 kcal' },
                { food: 'ירקות מעורבים', grams: '200 g', kcal: '52 kcal' },
              ],
            },
            {
              name: 'ארוחת ביניים',
              items: [
                { food: 'בננה', grams: '100 g', kcal: '96 kcal' },
                { food: 'שקדים', grams: '20 g', kcal: '122 kcal' },
              ],
            },
            {
              name: 'ארוחת ערב',
              items: [
                { food: 'סלמון', grams: '140 g', kcal: '274 kcal' },
                { food: 'תפוח אדמה אפוי', grams: '200 g', kcal: '152 kcal' },
                { food: 'סלט ירוק', grams: '150 g', kcal: '40 kcal' },
              ],
            },
          ],
          totals: {
            caloriesLabel: 'קלוריות',
            caloriesValue: '1624',
            proteinLabel: 'חלבון',
            proteinValue: '111 g',
            carbsLabel: 'פחמימות',
            carbsValue: '187 g',
            fatLabel: 'שומן',
            fatValue: '48 g',
          },
          caption: 'עיצוב קונספט, נתונים לדוגמה',
        },
      },
      scheduling: {
        status: 'פעיל',
        title: 'שיבוץ, קרדיטים ונוכחות',
        description: 'יומן, חבילות אימונים, וקרדיטים שמנוכים כשהנוכחות מאושרת.',
        screen: {
          headerTitle: 'יומן אימונים · השבוע',
          creditLine: 'מאיה כהן · נותרו 6 קרדיטים',
          days: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
          slots: [
            { time: '08:00', client: 'מאיה כהן' },
            { time: '09:30', client: 'דנה לוי' },
            { time: '12:00', client: 'נועה גרין' },
          ],
          session1Line: 'מאיה כהן 08:00 – 09:00',
          session1Action: 'סמן נוכחות',
          session2Line: 'דנה לוי 09:30 – 10:30',
          session2Status: 'בקרוב',
          footerNote: 'סימון נוכחות מנכה קרדיט אחד. ביטול מחזיר אותו.',
          caption: 'איור, נתונים לדוגמה',
        },
      },
      payments: {
        status: 'פעיל',
        title: 'רישום תשלומים וקבלות',
        description:
          'המאמן גובה תשלומים ישירות. SEESA רושמת אותם ואינה לוקחת עמלה.',
        screen: {
          headerTitle: 'חיוב · דנה לוי',
          packageName: 'חבילת 8 אימונים',
          packagePriceLabel: 'מחיר חבילה',
          packagePriceValue: '₪960',
          recordedPaymentsLabel: 'תשלומים שנרשמו',
          recordedPaymentsValue: '₪480',
          amountOwedLabel: 'יתרה לתשלום',
          amountOwedValue: '₪480',
          actionButton: 'רישום תשלום',
          footerNote:
            'המאמן גובה את התשלום ישירות. SEESA אינה לוקחת עמלה.',
          caption: 'איור, נתונים לדוגמה',
        },
      },
      healthDeclarations: {
        status: 'פעיל',
        title: 'הצהרות בריאות',
        description: 'נאספות לפני האימון ונסקרות רק על ידי אנשים מורשים.',
        caption: 'עיצוב לדוגמה, נתונים לדוגמה',
      },
      leadTracking: {
        status: 'פעיל',
        title: 'מעקב אחר לידים',
        description: 'רואים מאיפה הגיע כל מתאמן חדש.',
        caption: 'עיצוב לדוגמה, נתונים לדוגמה',
      },
      clientPersonalArea: {
        status: 'פעיל',
        title: 'האזור האישי של המתאמן',
        description:
          "תוכנית, התקדמות, צ'ק-אין ומסמכים במקום אחד עבור המתאמן.",
        screen: {
          greeting: 'היי מאיה',
          todayLabel: 'האימון של היום',
          workoutTitle: 'ישבן וירך אחורית',
          workoutMeta: '5 תרגילים · כ-45 דקות',
          startButton: 'התחלת אימון',
          weekProgress: 'השבוע: 3 מתוך 4 אימונים',
          nextSessionLabel: 'האימון הבא',
          nextSessionValue: 'יום חמישי 09:00 עם המאמן',
          caption: 'איור, נתונים לדוגמה',
        },
        mockupCaption: 'עיצוב לדוגמה · עיצוב קונספט',
        languagesNote: 'עברית מימין לשמאל ואנגלית, עם צרפתית זמינה.',
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
      title: 'עכשיו, בהמשך ובעתיד',
      intro: 'הסטטוסים מציגים היכן הפרויקט עומד כעת.',
      liveLabel: 'פעיל',
      liveItems: [
        'ניהול מתאמנים',
        "צ'ק-אין עם תמונות",
        'יומן מאמן וקרדיטים',
        'עורך תוכניות תזונה',
        'קליטת הצהרות בריאות',
        'מעקב אחר לידים',
        'תשתית ארגונים ותפקידים',
        'אזור אישי למתאמן',
      ],
      inBuildLabel: 'בבנייה',
      inBuildItems: [
        'בונה תוכניות חזותי וספריית תרגילים',
        'חישוב תזונתי מספריית מזונות',
        'אימון זוגי וקבוצתי',
        'קביעת פגישות',
        'אזור הערות ומשימות אישי למאמנים',
      ],
      plannedLabel: 'מתוכנן',
      plannedItems: [
        'בדיקת אבטחה עצמאית',
        'פתיחה למאמני פיילוט',
        'מסלולי מנוי וחיוב למאמנים',
        'בוני טפסים (הצהרות בריאות, תקנונים, שאלונים, קליטה)',
        'הודעות בתוך הפורטל',
        'מסע ההתקדמות של המתאמן (My Journey)',
        'חנות תוכניות ומרקטפלייס למתאמנים עצמאיים ולאנשי מקצוע',
        'חיבור לאפליקציית כספים נפרדת',
        'אפליקציות לאייפון ולאנדרואיד',
        'צוותים ארגוניים',
      ],
    },
    model: {
      label: 'מודל עסקי מתוכנן',
      title: 'מנויי מאמנים לפי מספר מתאמנים פעילים',
      statusNote: 'מתוכנן, כפוף לשינוי',
      tiers: [
        {
          name: 'מסלול 1',
          price: 'ILS 69 / חודש',
          clients: 'עד 8 מתאמנים פעילים',
        },
        {
          name: 'מסלול 2',
          price: 'ILS 199 / חודש',
          clients: 'עד 20 מתאמנים פעילים',
        },
        {
          name: 'מסלול 3',
          price: 'ILS 399 / חודש',
          clients: 'מתאמנים פעילים ללא הגבלה',
        },
      ],
      vatNote: 'כולל מע״מ.',
      notes: [
        'ניסיון חינם ל-14 יום.',
        'מסלולי ארגון מתומחרים בהצעת מחיר לכל ארגון.',
        'מאמני פיילוט מצטרפים בהסדר השקה.',
        'מסלולים למתאמנים עצמאיים נמצאים בבדיקה.',
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
