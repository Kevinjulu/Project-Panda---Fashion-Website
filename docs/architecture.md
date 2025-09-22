# Architecture

This document describes the high-level structure and data flow of the project. It complements, but does not duplicate, the README.

System overview
- Frontend: static site (HTML/CSS/ES modules) under src/ with absolute asset paths (/images) and a particles background canvas.
- Backend: Express server (server/) exposing JSON APIs and persisting contact submissions into SQLite (server/data.db).
- Assets: public/images holds SVGs used across pages.

Data flow
1) User loads portfolio.html or contact.html
- particles.js draws the neon particle background on a fixed canvas.
- IntersectionObserver in main.js reveals elements with .reveal as they enter the viewport.

2) Portfolio filtering (client-only)
- main.js filters <article> cards in #portfolio-grid by their data-category attribute based on clicks on .filter-btn.

3) Social-proof notifications (optional)
- notifications.js fetches GET /api/payouts and periodically renders compact messages into a fixed container. If the API is missing or returns [], nothing is shown.

4) Contact submission (client → server → DB)
- contact.html form is handled by main.js: it serializes fields to JSON and POSTs /api/contact.
- server/routes/contact.js validates required fields and calls models/Contact.createContact.
- server/models/Contact.js inserts a row into SQLite (created_at uses SQLite datetime('now')).
- The endpoint returns { ok: true, contact: {...} } on 201; the UI shows a status message and resets the form.

Key modules
- src/js/main.js: entry; imports particles and notifications; sets footer year; scroll-reveal; portfolio filters; contact form submission.
- src/js/notifications.js: inits a floating stack; fetches /api/payouts; cycles messages every 4s; caps visible items to 4.
- src/js/particles.js: DPR-aware canvas sizing; animated radial gradients; auto-resizes on window events.
- server/server.js: Express app, JSON body parsing, CORS, routes, and port configuration.
- server/db.js: SQLite file bootstrap and contacts table creation.
- server/routes/contact.js: POST /api/contact.
- server/routes/payouts.js: GET /api/payouts (sample data array in-process).
- server/models/Contact.js: createContact, listContacts.

Local serving models
- Unified (recommended): Serve src/ and /images from Express so /api and pages share the same origin. This avoids proxy and CORS complexities.
- Split: Serve src/ via a static dev server and the API separately on :3000. If split, either proxy /api to :3000 or change fetch URLs to absolute (http://localhost:3000/api/...).

Extensibility
- Styling: CSS is organized into styles.css (tokens/base/layout), components.css (atoms/utilities), animations.css (motion). Consider a preprocessor or utility CSS if the project grows.
- Data: Replace sample payouts with a persistent source or compute on the server; extend the Contact model with indexing or exports as needed.
