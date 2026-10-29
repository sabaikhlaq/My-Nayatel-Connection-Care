---
name: Connection Care (MyNayatel app extension)
description: A guided connection-check, self-fix and visit-tracking flow built inside the existing MyNayatel Android app's navy-and-orange world.
colors:
  navy: "#284f94"
  navy-hero: "#3f609e"
  navy-deep: "#1f3f7a"
  orange: "#e87b1e"
  orange-press: "#cf6a12"
  orange-ink: "#b85a08"
  orange-wash: "#fff7ef"
  peach: "#ffeede"
  ember-on-navy: "#f19a4b"
  badge-blue: "#4a6fb5"
  badge-orange: "#ec8a35"
  sky: "#e5eeff"
  ground: "#f3f8fe"
  white: "#ffffff"
  ink: "#1b1d22"
  ink-2: "#4a5566"
  ink-3: "#5c6778"
  line: "#e2e8f1"
  line-strong: "#c9d3e2"
  quiet-fill: "#eef1f5"
  on-navy-2: "#d5e0f3"
  green: "#1d7a35"
  green-soft: "#e3f3e7"
  mint-on-navy: "#8fd6a2"
  amber-ink: "#8a4b00"
  amber-soft: "#fff1dc"
  badge-red: "#c4161c"
typography:
  display:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  headline-sm:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.25
  title-lg:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.45
  title:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.45
  title-sm:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15.5px"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45
  body-sm:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.25
  label:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.45
  label-sm:
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  tag: "4px"
  btn: "8px"
  input: "10px"
  tile: "12px"
  card: "14px"
  verdict: "18px"
  hero: "22px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  gutter: "16px"
  lg: "20px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "10px 18px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.orange-press}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.orange-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "10px 18px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.orange-wash}"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "10px 18px"
    height: "48px"
  button-text:
    textColor: "{colors.navy}"
    rounded: "6px"
    padding: "10px 8px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "16px"
  verdict-hero:
    backgroundColor: "{colors.navy-hero}"
    textColor: "{colors.white}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.verdict}"
    padding: "18px 16px"
  verdict-hero-checking:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  health-entry:
    backgroundColor: "{colors.navy-hero}"
    textColor: "{colors.white}"
    rounded: "{rounded.hero}"
    padding: "18px 16px 16px"
  status-ok:
    backgroundColor: "{colors.green-soft}"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px 4px 7px"
  status-attention:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px 4px 7px"
  status-waiting:
    backgroundColor: "{colors.quiet-fill}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px 4px 7px"
  status-checking:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px 4px 7px"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "10px 14px"
    height: "48px"
  slot:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "11px 12px"
  slot-selected:
    backgroundColor: "{colors.orange-wash}"
    textColor: "{colors.orange-ink}"
  tile:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
  icon-badge:
    backgroundColor: "{colors.badge-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    size: "40px"
  tabbar:
    backgroundColor: "{colors.white}"
    height: "68px"
  tab-active:
    textColor: "{colors.orange}"
  lang-toggle-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "5px 9px"
  dock:
    backgroundColor: "{colors.white}"
    padding: "12px 16px 14px"
---

# Design System: Connection Care (MyNayatel app extension)

## Overview

**Creative North Star: "The App They Already Trust"**

This system is not a new world. It is the existing MyNayatel Android app, sampled from screenshots and rebuilt faithfully, with a connection-care flow added in the same voice. A subscriber whose internet has just dropped should never feel they have left the app they know: the same navy hero cards with faint concentric arcs, the same orange call to action, peach usage tiles, light-blue grounds, white rounded cards, round icon badges and a five-tab bottom bar (Dashboard, Billing, Services, Support, More). Existing screens are reproduced unchanged; every new surface is an addition built from the same parts.

The mood is calm, plain and reassuring rather than technical. Density is that of a utility app on a 390px phone: a 16px gutter, 16px between blocks, generous 48px touch targets, one primary action per screen held in a sticky white dock. Diagnosis is communicated with words first, then icon, then a soft tint, so the user reads "who is at fault" before they read a colour. Depth is soft and navy-tinted; nothing glows, nothing is hard-edged.

Self-hosted Roboto (variable, 100–900) carries all text at two working weights, 400 and 500, matching Android's system face so the extension is indistinguishable from the host app.

**Key Characteristics:**
- Navy hero cards with faint white concentric arcs anchor the top of a screen.
- Orange is the action colour; navy is the structure and selection colour.
- Status is a word-plus-icon pill on a soft tint: green for working, amber for needs attention, never alarm red.
- White rounded cards on a pale blue ground, lifted by soft navy-tinted shadows.
- One primary action per flow screen, pinned in a white bottom dock.
- Bilingual layouts (English and Roman Urdu) that tolerate longer strings.

## Colors

A two-voice brand palette (structural navy, action orange) on cool pale-blue grounds, with soft green and amber reserved for diagnosis.

### Primary
- **MyNayatel Navy** (navy): the structural brand colour. Selected states (language toggle, tag buttons, completed timeline steps and step-meter segments), text links and text buttons, the navy secondary button, input focus ring, health-row node icons and the dashboard's "Pay bill online" bar.
- **Hero Navy** (navy-hero): the lighter navy of the app's hero cards. Backgrounds the dashboard Wi-Fi hero, the Connection health entry card on Support and the diagnosis verdict card.
- **Deep Navy** (navy-deep): text on sky-blue tinted surfaces (hotspot tip, reference-number pill) where navy itself would be too light.

### Secondary
- **Action Orange** (orange): primary buttons, the active bottom-tab, the current step in the step meter and timeline, the selected slot outline, lit rating stars, the global focus outline and the input caret.
- **Pressed Orange** (orange-press): hover and pressed state of primary buttons.
- **Orange Ink** (orange-ink): orange when it has to be read as text on white or peach (outline button label, tile values, selected slot day, "now" timeline time, technician avatar initials).
- **Orange Wash** (orange-wash): the background of a selected slot and the outline button's hover.
- **Peach** (peach): the dashboard usage tiles and the technician avatar disc.
- **Ember on Navy** (ember-on-navy): small line icons sitting on a navy hero (Wi-Fi hero list, entry-card rows needing attention).
- **Badge Blue / Badge Orange** (badge-blue, badge-orange): the two fills of the app's round category icon badges, alternated across a grid.

### Tertiary (diagnosis)
- **Working Green / Green Soft** (green, green-soft): the "Working" status chip, the resolved celebrate mark, the call-technician pill, "Paid" on the dashboard and the "tried" checkmarks.
- **Mint on Navy** (mint-on-navy): the "working" icon on navy heroes and on the dark toast.
- **Attention Amber / Amber Soft** (amber-ink, amber-soft): the "needs attention" status chip and the faulty node in the health rows. Amber, not red, carries every problem state.
- **Badge Red** (badge-red): the incumbent "New" count badge on the More tab, and nothing else.

### Neutral
- **Ground** (ground): the page background of every app screen except the dashboard (which is white).
- **Sky** (sky): the payment card, auto-filled badges, the hotspot tip, the checking status chip, health-row nodes and numbered instruction discs.
- **White** (white): cards, dock, tab bar, chips, inputs, slots.
- **Ink / Ink 2 / Ink 3** (ink, ink-2, ink-3): primary text, secondary text, and tertiary captions and timestamps.
- **Line / Line Strong** (line, line-strong): hairline dividers between rows; stronger strokes for input, slot and tag outlines and the timeline rail ahead of the current step.
- **Quiet Fill** (quiet-fill): the "waiting" status chip and the "sample" badge.
- **On-Navy Secondary** (on-navy-2): supporting copy and fact labels on navy heroes.

### Named Rules
**The Two Voices Rule.** Orange means "do this"; navy means "this is selected, this is structure". A selected tag, toggle or completed step is navy; only the next action and the current step are orange.

**The No-Alarm Rule.** Connection status never uses red. A fault is amber with a plain word ("Not responding", "Outage") and an alert icon. Badge Red stays on the app's "New" badge.

**The Ink for Text Rule.** When orange must be read as text on a light surface, use Orange Ink, not Action Orange.

## Typography

**Display Font:** Roboto (self-hosted variable woff2, with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Roboto (same file)

**Character:** One family, two weights. Regular 400 for reading, Medium 500 for every heading, button and value; 600 appears only on tiny numeric discs, port tags and the language toggle. No light display weights and no italic: it reads as the Android app it extends.

### Hierarchy
- **Display** (500, 30px, -0.01em, tabular figures): the ETA window on the tracker verdict. One per screen.
- **Headline** (500, 23px): the app's top-bar screen title and the "Fixed" celebrate headline.
- **Headline Small** (500, 21px, 1.25): the verdict sentence on the diagnosis hero; the guided-fix step heading runs a step below at 20px. Balanced wrapping.
- **Title Large** (500, 19px): sub-page bar titles, hero card headings, the rating question.
- **Title** (500, 18px): section headings on a screen ("Choose support category", "When should we visit?").
- **Title Small** (500, 15.5px): headings inside cards.
- **Body** (400, 15px, 1.45): default text, instruction steps, row names.
- **Body Small** (400, 14.5px, with 13.5px for fine print): supporting copy, chips, notes.
- **Button** (500, 16px, 1.25): all filled and outline buttons.
- **Label** (500, 13px) and **Label Small** (500, 12px): status chips, badges, tile CTAs, captions and timestamps.

### Named Rules
**The Sentence Case Rule.** New surfaces use sentence case for headings, buttons and chips. The uppercase "PAYMENT", "PAY BILL ONLINE" and "START" are reproductions of the incumbent dashboard and are not a pattern to extend.

**The Tabular Numbers Rule.** Times, ETAs, reference numbers, slot times, fact values and the phone input use tabular figures so values don't jitter when they update.

## Layout

A single-column mobile layout designed at 390 × 844. Each screen is a vertical stack: top bar (56px min) or sub-page bar with back arrow and language toggle, a scrolling content column, then either the five-tab bar (68px) on top-level app screens or a sticky white action dock on flow screens. Content is padded by a 16px gutter with 16px between blocks and 28px of bottom breathing room.

Spacing runs in 4px steps, mostly 8, 12 and 16; cards pad at 16px, compact rows at 12px vertical. Grids are small and fixed: three-up tiles and help items, two-up category cards, slot pickers and verdict facts. Below 370px the slot picker collapses to one column, dock button icons drop out and status chips tighten. Safe-area insets are respected in the tab bar and dock.

**The One Dock Rule.** A flow screen has one primary action, pinned in the bottom dock. Secondary choices sit beside it as an outline button or below it as a text button or hint.

## Elevation & Depth

Hybrid: tonal layering does most of the work (white cards on a pale blue ground, navy heroes on either), with soft, two-layer, navy-tinted shadows giving cards a gentle lift. Hero cards carry no shadow; their colour is their depth. Row-level separation uses hairlines, and outlined controls (inputs, slots, tags, done steps) use inset 1px strokes instead of shadows.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(31, 63, 122, 0.06), 0 3px 10px rgba(31, 63, 122, 0.07)`): every white card, tile, payment card and the checking-state verdict.
- **Raise** (`box-shadow: 0 2px 4px rgba(31, 63, 122, 0.08), 0 10px 24px rgba(31, 63, 122, 0.12)`): floating layers only (the toast).
- **Hairline lift** (`box-shadow: 0 1px 2px rgba(31, 63, 122, 0.04)`): chips and support category cards, matching the app's flatter treatment there.
- **Bar edge** (`box-shadow: 0 -1px 0 #e2e8f1, 0 -8px 20px rgba(31, 63, 122, 0.06)`): the top edge of the dock and tab bar.

### Named Rules
**The Navy Shadow Rule.** Shadows are tinted with Deep Navy, never neutral black, and stay soft and blurred. No hard offset shadows.

## Shapes

Rounded, friendly, and graded by size: the larger the surface, the softer the corner. Port tags 4px, buttons 8px, inputs 10px, tiles, category cards, slots, done steps and the toast 12px, standard cards 14px, the verdict hero 18px, the dashboard and Support hero cards 22px. Chips, status pills, toggles, badges and the call pill are fully round. Icon badges, health-row nodes, timeline dots, instruction numbers, avatars and the celebrate mark are circles.

**The Concentric Arcs Signature.** Every navy hero carries three concentric rings (radii 30, 62, 94 on a 200 grid, stroke 18) bleeding off one corner at 7% white. On the white checking-state verdict the same arcs drop to 5% navy. This is the app's own motif; reuse it only on hero cards.

Icons are 24px-grid line icons at a 1.75 stroke with round caps and joins, drawn in currentColor. Icon badges hold them at 22px inside a 40px circle (30px and 17px inside category cards).

## Components

### Buttons
Solid, square-shouldered and generous; they read as Android buttons.
- **Shape:** gently rounded (8px), 48px minimum height, 10px 18px padding, 16px Medium, optional 20px leading icon.
- **Primary:** Action Orange fill, white label. Hover and press go to Pressed Orange with a 0.985 press scale. Disabled is a pale orange (#f0c49c) fill.
- **Outline:** white fill, 1.5px inset Action Orange stroke, Orange Ink label; hover fills with Orange Wash.
- **Navy:** MyNayatel Navy fill, white label, for a second solid action that is not the next step.
- **Text button:** Navy 15px Medium, no fill, underline on hover.
- **Focus:** a 2px Action Orange outline at 2px offset, everywhere.

### Chips
- **Suggestion chip** (Support, incumbent): white pill, Navy 14.5px label, hairline lift.
- **Tag toggle** (rating reasons): white pill with a 1px Line Strong inset stroke; pressed becomes a solid Navy pill with white text.
- **Badge:** 12px Medium pill; "Auto-filled" is Navy on Sky, "Sample" is Ink 3 on Quiet Fill.

### Status Chips (signature)
Word + icon + tint, always all three. A 16px icon, 13px Medium label, pill, padding 4px 10px 4px 7px. Working: Green on Green Soft, check-circle icon. Fault ("Not responding", "Outage"): Amber Ink on Amber Soft, alert icon. Waiting: Ink 2 on Quiet Fill, clock icon. Checking: Navy on Sky with a spinning icon. A newly resolved chip pops in (0.35s scale from 0.85).

### Cards / Containers
- **Corner Style:** 14px for standard cards, 12px for tiles and compact cards.
- **Background:** white on the Ground; Peach for usage tiles; Sky for the payment card and the hotspot tip.
- **Shadow Strategy:** Card shadow (see Elevation); outlined cards use an inset Line stroke instead.
- **Internal Padding:** 16px; 14px 16px for tips and step-card bodies.

### Inputs / Fields
- **Style:** white, 10px radius, 48px tall, 10px 14px padding, 1px Line Strong inset stroke, 16px tabular text, orange caret.
- **Focus:** the stroke becomes a 2px Navy inset ring.
- **Slot picker:** a two-column grid of white 12px cards with a Line Strong stroke; day in 13px Ink 3, time in 15px Medium tabular. Selected: Orange Wash fill, 2px Action Orange inset ring, day in Orange Ink.

### Navigation
- **Bottom tab bar (incumbent):** white, 68px, five equal tabs (Dashboard, Billing, Services, Support, More), 26px line icon over a 12.5px label. Active tab is Action Orange, Medium. "New" badge is a Badge Red pill on More.
- **Top bar (incumbent):** title or account name at 21–23px Medium with search, notifications and menu icon buttons (40px circles).
- **Sub-page bar (new screens):** back icon button, 19px Medium title, and the EN / UR language toggle: a white pill with a Line inset stroke holding two 12px Semibold segments, the active one solid Navy.
- **Action dock:** white, top bar-edge shadow, one full-width button or a two-button row, optional 13px centred hint.

### Verdict Hero (signature)
The diagnosis answer. Hero Navy, 18px radius, concentric arcs top right, a 44px translucent-white icon disc, a 21px balanced verdict sentence, On-Navy Secondary support line, and an optional two-column facts row under a 18% white hairline (12.5px labels, 20px tabular values). A "next update" pill in 14% white may follow. While checking it turns white with a Sky icon disc and the Card shadow. A landed verdict rises 8px into place over 0.5s.

### Connection Health Entry Card
Added at the top of Support, built from the dashboard's Wi-Fi hero: Hero Navy, 22px radius, arcs top right, a 19px title with a last-checked time, three compact rows (area network, fibre line, router) whose icons are Mint on Navy when working and Ember on Navy otherwise, and a full-width primary button.

### Health Rows
The path from Nayatel to the home, one row per hop: a 36px circular node (Sky with Navy icon; Amber Soft or Green Soft when the hop is diagnosed), the hop name with a 12.5px Ink 3 sub-line, and a status chip at the end. Rows are separated by Line hairlines.

### Guided-Fix Step Card
A white card with no padding at the top: a router diagram on a pale panel (#f6f9fe) with a 12.5px caption, then a 16px body with a 20px step heading, numbered instructions in 24px Sky discs, navy port tags for labels like PON and LOS, and an "expect" line divided by a hairline with an orange icon. Above it, a three-segment step meter (4px bars: Navy done, Orange current, Line Strong to come).

### Timeline
Vertical progress (Received, Technician assigned, On the way, Resolved): 24px dots on a 2px rail. Done is solid Navy with a white check and Navy rail; now is Action Orange with a 5px orange halo and a repeating expanding ring; next is a white dot with a Line Strong ring and Ink 3 text.

### Toast
Dark slate (#1f2a3d) 12px bar floating 12px above the tab bar, white 14px text with a Mint on Navy icon, Raise shadow; fades in, holds, and fades out over 4s.

## Do's and Don'ts

### Do:
- **Do** build every new surface from the incumbent parts: navy hero, white 14px card, peach tile, sky tint, round icon badge, orange button.
- **Do** leave the existing Dashboard and Support layouts as they are; add, don't redesign.
- **Do** state connection status with a word, an icon and a soft tint together (green working, amber needs attention).
- **Do** keep one primary orange action per flow screen, in the bottom dock.
- **Do** use Orange Ink (not Action Orange) for orange text on white or peach.
- **Do** tint shadows with Deep Navy and keep them soft.
- **Do** use tabular figures for times, ETAs and reference numbers.
- **Do** design every string to survive Roman Urdu, which runs longer than English.
- **Do** honour reduced motion: all animation collapses to near-instant under `prefers-reduced-motion`.

### Don't:
- **Don't** use red for any connection or diagnosis state; Badge Red belongs only to the app's "New" badge.
- **Don't** put concentric arcs anywhere but a navy (or the checking-state white) hero card.
- **Don't** introduce uppercase labels or letter-spaced captions on new surfaces; the dashboard's uppercase payment card is incumbent only.
- **Don't** add a second typeface or weights beyond Roboto 400/500 (600 only on tiny numeric discs and tags).
- **Don't** use hard offset shadows, neutral black shadows or glows.
- **Don't** present sample values, policies or branding as official Nayatel material.
