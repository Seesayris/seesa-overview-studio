# Google AI Studio prompt: SEESA project overview, scroll story version (v4)

Audience: Seanovation and other partners, funders and advisers. Not a marketing site.
This replaces v3. The look comes from the current page, but the page becomes a scroll-driven story.

## What to attach in AI Studio

1. `index.html` from the v3 package (the current page). It is the source of the text and the visual language.
2. Logos only: `seesa-logo.png` and `sayris-logo.png` from the `img` folder.
3. Optional, only if the app accepts them: `health-declaration-review.png`, `lead-attribution.png`, `inside-out-timeline.png`.

Do NOT attach the silhouette images (`sil-front.webp`, `sil-side.webp`, `sil-back.webp`). Do not attach screenshots of the real app, coach screens or any photo.

## Test first

Run Step 1 only, and check it opens before asking for more. An earlier build failed with "Invalid argument".

---

## Prompt (paste everything below)

You are the design lead for SEESA, a coaching platform. I attach `index.html`, our current project overview page. Keep its brand, its dark calm look and its text. Do NOT keep its exact layout. Rebuild it as an interactive, scroll-driven story, with a few product screens that show the highlights of the platform.

### 1. Text lock (strict)

* Use the English and Hebrew text of the attached `index.html` exactly as it is. Do not rewrite, shorten, translate again or add claims.
* The only new text allowed is the small microcopy inside the product screens listed in section 5, and short step labels that reuse words already on the page.
* No numbers, customers, partners, dates, months, years, awards, testimonials, or prices other than the three coach tiers already in the file. No placeholder text.
* The Security section lists only what exists today. No certifications, no compliance badges, no words "secure" or "safe" as claims.
* No em dashes. En dashes in ranges and times are fine. No emoji.
* If you think a sentence should change, leave it and list it under "Text suggestions" in your reply.

### 2. Brand rules (strict)

* Logos only from the attached image files (`seesa-logo.png`, `sayris-logo.png`), on dark surfaces. Never type, redraw or restyle a logo in a font.
* Colors as CSS variables: gold `#D8B04A`, black `#141210`, cream `#F4F1E8`. Dark and calm. Gold for the line, actions, selected states and small marks.
* Font: Heebo only, Hebrew and English.
* SEESA is the platform. SEESAYRIS is the company. SAYRIS ATHENA is the founder's personal brand. Do not mix them.
* Voice: plain, factual, no hype, never first person.
* No people, no body silhouettes, no photos, no avatars with faces. Where a person is implied, use initials in a circle.

### 3. Languages

English and Hebrew with a language toggle. Hebrew is fully right to left, including inside every product screen and every animation (the line, the steps and the slides move in the reading direction). Use logical CSS properties. Numbers and prices stay readable inside Hebrew text.

### 4. The scroll story

Build the page as one continuous story that opens as the visitor scrolls.

* **Opening:** the hero opens on load or on the first scroll, for example the logo and the headline reveal while two dark panels part like doors, and the page then settles. Calm, about a second, no flashing.
* **The line:** a thin gold vertical line runs down the page along the reading-start edge. It draws itself as the visitor scrolls, like a progress line. Each section hangs on it with a small node that lights up when the section is reached.
* **Steps coming up:** content arrives in steps along the line. Cards, roadmap items and feature points rise or slide in one after another when they come into view (staggered by about 80 to 120 ms), then stay in place.
* **Pinned product screens:** in the highlights section, a product screen stays pinned in a device frame while short step captions scroll beside it. As each caption arrives, the screen changes its state (for example a session appears on the calendar, a filter is applied in the library).
* **Roadmap as a path:** the Roadmap section is a path along the line. Live items light up in gold first, In build items in a softer gold, Planned items stay outlined. Keep the status badges and their labels exactly as in the file. Add a status filter (All, Live, In build, Planned).
* **Navigation:** a slim sticky navigation that highlights the current section, and the language toggle.
* Motion respects `prefers-reduced-motion`: with it on, no movement, everything is simply visible and the line is drawn fully.
* Performance: use CSS scroll-driven animations or IntersectionObserver, light and smooth on a phone. No heavy libraries.

### 5. The highlights: a few product screens

Replace the long set of screens with a short highlights section of **five** screens, built in code inside simple dark device frames, in this order. Each has a status badge and a caption. Use fictional data only (for example Maya Cohen, Dana Levy, Noa Green, Dan Katz), obviously made-up numbers, no photos, no silhouettes. Captions: "Illustration, sample data" for Live, "Concept design, sample data" for In build and Planned. Never call them screenshots.

1. **Calendar (Live):** a week time grid with three or four sessions, one of them a meeting shown in a different tone (a violet square), a booking panel with the choice "Training / Meeting", a client credit line, and a "Mark attended" button. Footer note: "Marking attendance deducts one credit. Undo restores it."
2. **Marketplace (Planned):** a list of independent professionals as cards (initials circle, name, specialty such as "Strength coach" or "Nutrition", a "Book a session" button), with a search field and two filters. No prices, no discounts, no ratings. Badge: "Planned". Caption: "Concept design, sample data".
3. **Exercise library and program builder (In build):** an organization exercise library with filters (muscle group, equipment), exercise cards with plain dark geometric thumbnails (no people), and next to it a program day with five exercises showing sets, reps and rest and the note "Published versions keep completed workouts intact".
4. **Clients and check-ins (Live):** a client card with this week's check-in as numbers (weight, waist, energy), a "Needs review" status, and a short coach note field. No photos, no silhouettes.
5. **Nutrition plan (Live editor, calculation In build):** one day with four meals, foods with grams, daily totals for calories, protein, carbs and fat. Badge: "Automatic calculation: in build".

The other features (payments recording, health declarations, lead tracking, client personal area) appear as simple text cards with their status badge, as in the file, without screens. If the optional mockup images are attached, show the health declaration and lead tracking images inside their cards, captioned "Design mockup", with click to enlarge.

### 6. Sections and order

Keep the order and the text of the current page: hero, the problem, what SEESA is, highlights (new, section 5), how it is organized, roles and permissions, security and privacy, roadmap, planned business model, team, what we are looking for, contact.

### 7. Technical rules

* One standalone page. React and Tailwind are fine, or plain HTML, CSS and JavaScript.
* No backend, no login, no database, no forms. No Gemini or other API calls and no API key in the code. No analytics, cookies or tracking.
* No external images. Only the attached files and what you draw in code.
* `<meta name="robots" content="noindex, nofollow">`.
* Fonts: Heebo, loaded from Google Fonts is acceptable for this design version.
* 390 px first, then 768 and 1280. No horizontal scroll. Touch targets at least 44 px. Keyboard accessible, visible focus, readable contrast.
* Each product screen is its own component, so a real image can replace it later.

### 8. Step 1 (do this first, then stop)

Build only the opening hero, the sticky navigation, the language toggle and the drawing gold line with the first two sections (the problem, what SEESA is), using the real text, in English and Hebrew. Show me. After I say "continue", build the rest in this order: highlights with the five pinned screens, structure and roles, security, roadmap path with filter, business model, team, ask, contact.

### 9. Reply format

After each step, reply with: what you built, anything you were unsure about, and "Text suggestions" (things you were tempted to change but did not).
