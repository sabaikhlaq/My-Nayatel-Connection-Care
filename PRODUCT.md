# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS (no framework), built as clickable mobile-web screens at phone width (wireframes use 390×844). The coded screens are the source of truth; screens and components are then pushed to a Figma file for the portfolio. Figma edits do not flow back into code — change the code and re-push.

## Users

Primary: a Nayatel home-fibre subscriber in Pakistan whose connection has just dropped — for example a student who needs the internet for online classes or exams. Their job: find out whose fault it is (area network, fibre line, or their own router), fix it themselves if they can, otherwise report it without repeating what they've already tried, and track the technician visit through to resolution.

Secondary audience (for the portfolio, not the product): hiring managers and reviewers evaluating UI/UX design work.

## Product Purpose

Connection Care is a self-initiated UI/UX portfolio case study: a proposed feature for the Nayatel customer app that turns a dead connection into one guided flow — diagnose, self-fix, pre-filled complaint, visit tracking, and confirm-and-rate. Success means the user always knows what's wrong and what happens next, never re-enters information the system already has, and closes the loop by confirming the fix themselves.

## Positioning

The connection check drives everything downstream: its result decides whether the user sees an area-outage notice (no need to report), a guided router fix, or a complaint that is already filled in with the check result and the steps tried. The request isn't closed until the customer confirms it works, and "Not yet" reopens it with the same technician, nothing to fill in again.

## Operating Context

- Entry: existing app screens are not changed, only added to. The Dashboard's "Launch Complaint" leads to Support; a new "Connection health" card (area network, fibre line to home, router, last-checked time) is added at the top of Support and opens the connection check. EN / Roman Urdu toggle sits on the new flow screens. (The wireframes placed the health card on home; superseded 2026-10-29.)
- Bottom navigation matches the real app: Dashboard, Billing, Services, Support, More.
- Guided fix: 3 steps (restart router; check fibre cable — PON/Fibre port, LOS and PON lights; power and cables), each with "Fixed" / "Still not working" / skip to report.
- Complaint: problem auto-filled from the check, "already tried" list editable, technician visit slot picker, someone 18+ must be home, visit-charge policy, contact number.
- Tracker: reference number (NT-…), named technician with call action, ETA window, "next update by" time, progress timeline (Received → Technician assigned → On the way → Resolved).
- Hotspot fallback suggested when the user needs to be online now.

Hi-fi prototype: `hifi/index.html` (states reachable by hash, e.g. `#check-outage`; `?lang=ur` for Roman Urdu). Screens in `Connection Care Wireframes.html`: S1 Home (router issue), S2 Guided fix step 2/3, S3 Complaint pre-filled, S4 Tracker on the way, S5 Resolved confirm and rate; states: S1 Area outage, S4 Visit rescheduled.

## Capabilities and Constraints

- Mobile web prototype only; no real backend. Diagnostic results, technicians, times, and references are demonstration content.
- Bilingual: English and Roman Urdu. Layouts must tolerate both.
- Placeholders still open in the wireframes: bill amount and due date, package speed, reference number, visit-charge policy text, router illustration.
- Terminology from the wireframes: "Connection health", "Area network", "Fibre line to your home", "Your router", "Report a problem", "Visit", LOS / PON lights.

## Brand Commitments

Not affiliated with or commissioned by Nayatel. Nayatel's name appears because it is the subject of the case study; do not present any work as official, use Nayatel's logo or branding as if endorsed, or state official policy (e.g. visit charges, SLAs) as fact. Visual look matches the current MyNayatel app (reference screenshots in `My Nayatel App Screenshots(actual app)/`); new components are built in that style. Sample values replace real account data. Voice in the wireframes: plain, calm, reassuring, blame-free ("Nothing is wrong at your home", "No need to report it. We already know.").

## Evidence on Hand

- Wireframes: `Connection Care Wireframes.html` (7 screens/states).
- The author's own experience as a Nayatel customer, plus research the author has done. Research artifacts and findings haven't been added to the project yet. Ask before citing any finding, quote, statistic, or participant count. Never invent them.
- None on hand: real user quotes, usage metrics, Nayatel data, or outcome numbers. Do not fabricate them.

## Product Principles

1. Tell people whose fault it is first. Separating area, line, and home removes the anxiety and wasted effort.
2. Never ask twice. Everything the check found or the user tried moves forward automatically.
3. Always show what happens next and when: an ETA, a "next update by" time, and a named person.
4. The customer closes the loop. Resolution is confirmed by the user, and reopening is effortless.
5. Keep people online in the meantime: offer the hotspot fallback whenever waiting is unavoidable.

## Accessibility & Inclusion

Must work in English and Roman Urdu. Users may be stressed and on a phone with no home internet (mobile data), so keep pages lightweight and the instructions physically followable (cables, port labels, router lights).
