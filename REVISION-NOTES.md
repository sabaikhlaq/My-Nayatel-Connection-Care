# Connection Care: revision notes (31 Oct 2026)

## 1. Changelog

### Research credibility
- Rebuilt the evidence base from the 58 reviews actually collected on 22 Oct 2026 (Trustpilot 40, App Store 10, AppBrain 5, Google Play 3) plus 3 news reports. Every review is listed in a new evidence appendix with date, rating, a paraphrase (no reviewer names) and tags. All counts on the page are computed from that table.
- **Corrected a wrong claim.** The earlier version said about 15 reviews were about "is it me or Nayatel?". The recount found 4. The largest relevant theme is follow-up after reporting (18 of 58; 12 about internet faults). The problem statement, overview and reflection now lead with follow-up, and the page says openly that the connection-check idea rests partly on interpretation.
- Removed the bar charts. Counts stay as plain text ("n of 58") because they can now be checked against the appendix.
- Separated app problems (9) from service-quality problems (17) and out-of-scope themes (installation 17, billing 5, TV 2). Added the positive reviews (6), including one that praised clear follow-up.
- Added a method section (sources, dates, process) and an explicit list of limitations.
- The three quotes are short, verbatim excerpts with review IDs.

### Persona and journey
- Replaced the detailed persona with a proto-persona whose attributes cite review IDs. The one assumption is labelled.
- Zain is kept, clearly labelled as a fictional scenario.
- The journey map now compares "Today (from reviews)", with an evidence ID in every cell, against "Proposed (hypothesis)". Removed the invented "thinks" row and the emotion curve.

### Structure and writing
- Reordered to the 18-section structure in the brief, plus an evidence appendix.
- New sections: alternatives considered (chat assistant, better form, guided check), edge cases, technical considerations and handoff, and how I used AI.
- Rewrote the principles as plain statements, each with its reason. Shortened long paragraphs throughout.
- Added wireframe-vs-hi-fi pairs with annotations on what changed beyond styling.
- Added crops of the real components, plus type and spacing specs from DESIGN.md.
- Made the prototype easier to find: a "Try the prototype" button in the hero opens it and scrolls to it, alongside a "See the evidence" link.
- Added a "Status: concept, not yet tested with users" line to the hero.

### Prototype (hifi/app.js and hifi/styles.css)
All existing states, hash links, the language switching and the review panel are kept. Changes:
- **Diagnostics:** the verdict now says "look fine from our side… most likely cause", and the footer says "Checked 7:41 PM · based on signals from Nayatel's network and your router".
- **New state, check couldn't finish:** offers "Try the check again" or "Report without a check". The request then says the technician will start from the beginning.
- **Fibre safety:** step 2 is now "Look at the fibre cable": leave it plugged in; don't unplug it, open the connector or look into its end. Previously it said "Push it in until it clicks".
- **Skipping steps:** every step has "Skip this step" and "Report a problem", with a note that no step is required. Skipped steps are recorded as skipped, not as tried.
- **Request:** slots are labelled as requested times ("We'll confirm the exact visit…"), with an optional notes field and an optional photo of the router lights (a working file picker). The sent screen says "Requested time".
- **Tracker:** added an "Arrived" step, "Visit confirmed" wording, and a new "Running late" state with a revised window, the old window crossed out and an "Updated 10:58 AM" stamp.
- **No technician continuity promise:** the rescheduled and reopened copy no longer promises the same technician. The reopened screen hides the technician card and offers "Call support".
- **Resolution:** the question is now "Is your internet working again?", with "Yes, it's working" or "Still not working".
- **Outage:** new states for no restore estimate yet, a changed restore estimate (with an update stamp), and the outage fixed while the customer is still offline (re-checks line and router).
- New review-panel links for every new state. All new strings are in English and Roman Urdu.

## 2. Remaining research questions and technical assumptions
- Can Nayatel read fibre line status (for example LOS) and router reachability remotely, per customer, and how quickly?
- Which router/ONT models are in the field? The step diagrams assume one generic layout.
- Can area restore estimates be shared in the app, and how often do they update?
- Can the complaint system take requested windows and confirm one later? Who confirms, and when?
- Does field dispatch record "left", "arrived" and "late" events in real time?
- What is the visit-charge policy? The screen still links to a placeholder.
- After a no-show, should the customer be able to rebook? This is policy and isn't designed.
- How long to wait before closing an unconfirmed request? Proposed, not set.
- What happens with no mobile data at all (SMS? cached result?). Proposed only.
- Is Roman Urdu the right default for Urdu speakers, or is Urdu script needed too? Untested.
- How do customers read "most likely": as a guess or as a fact? Untested.
- Research gaps: no interviews, no usability tests, one coder, and a review sample that leans negative.

## 3. Prototype issues that still need manual testing
- "Change time" (tracker) reopens the whole request form instead of a time picker. It works, but it's heavier than needed.
- "View details", "Call", search, notifications and the other tabs are deliberate no-ops (`data-noop`). Check that nobody reads them as broken.
- The photo picker inside the case-study embed: some browsers restrict file pickers in sandboxed frames. Test in Chrome, Safari and on Android.
- The "Running late" state is reachable only from the review panel, not through the live flow.
- Back behaviour from presets: the back stack is rebuilt per preset. Spot-check back from every new state.
- Real phones: test on a large-screen iPhone and a small Android (reviews mention layout problems on large iPhones).
- Screen reader pass (TalkBack/VoiceOver) on the verdict, chips and timeline.
- Roman Urdu wrapping on narrow phones, especially the step 2 instructions and the dock buttons.
- The case study loads Google Fonts. Offline, it falls back to system fonts.

## 4. Hiring-manager assessment (honest)
- **Problem in 30 seconds:** yes. The overview states the problem, the solution and what isn't proven.
- **Research supports the problem:** reasonably, for follow-up and visit timing. The diagnosis idea is weaker, and the page says so.
- **Assumptions labelled:** yes. They're marked as hypothesis, fictional, proposed or needs engineering confirmation.
- **Defensible decisions:** each decision lists a trade-off. The alternatives section shows the chat and form options were considered.
- **Visual coherence:** strong. The work matches the existing app rather than inventing a brand.
- **Prototype access:** one click from the hero, and every state is linked.
- **Weakest points:** no user testing, and a small, self-selected sample. A reviewer will likely ask what you'd change after testing. Be ready to answer.
- **Fit for the role:** shows research synthesis, product thinking, interaction design, a small system, bilingual UI, and an honest account of AI use.
