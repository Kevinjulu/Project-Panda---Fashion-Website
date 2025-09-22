# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Static, client-side website. No build system, no package manager, and no test framework are present.
- Source HTML lives in src/. CSS lives in src/css/. JavaScript modules live in src/js/ and are loaded via <script type="module">.
- Public assets (images, favicon) live in public/images and are referenced in HTML via absolute paths like /images/logo.svg.
- Some UI features depend on non-existent backend endpoints (/api/contact and /api/payouts). In local dev, these will 404; the frontend handles this gracefully.

Common commands (Windows PowerShell)
Serve locally (recommended: Node + live-server)
- Requires Node.js available on PATH.
- Serves src as web root and mounts /images to public/images so asset paths resolve.

  pwsh
  npx --yes live-server --port=5173 --mount=/images:public/images src

  Then open:
  - http://localhost:5173/portfolio.html
  - http://localhost:5173/contact.html

Serve locally (Python 3 fallback)
- Mirrors images into src/images (so absolute /images paths resolve as /images under src), then serves src/.

  pwsh
  robocopy public\images src\images /MIR
  python -m http.server 5173 --directory src
  # When done, optional cleanup:
  Remove-Item -Recurse -Force src\images

Notes
- There is no build, lint, or test step configured in this repo.
- If you add tooling later (e.g., npm scripts, linters, tests), update this file accordingly.

High-level architecture
- Pages (src/*.html)
  - portfolio.html: portfolio grid with client-side category filters.
  - contact.html: booking/contact form.
  - Both pages include a full-width <canvas id="particles"> background layer and a shared nav/footer.
- Styles (src/css)
  - styles.css: design tokens (CSS variables), base styles, layout (sections, grids), responsive rules, and global “glass” surface.
  - components.css: UI atoms (buttons, badges) and small utilities.
  - animations.css: scroll-reveal pattern, glow pulse, and subtle float animations.
- Scripts (ES modules in src/js)
  - main.js (entry):
    - Imports particles.js and notifications.js.
    - Sets the current year in the footer.
    - IntersectionObserver-based .reveal scroll-in animation.
    - Portfolio filters: toggles [data-category] cards by .filter-btn (data-filter values: all, runway, editorial, streetwear, couture).
    - Contact form handler: POSTs JSON to /api/contact; shows status messages; no backend included here.
  - notifications.js (optional social-proof):
    - Creates a fixed stack container.
    - GETs /api/payouts periodically and renders compact notifications (KES currency). If the endpoint is missing or returns empty, it quietly no-ops.
  - particles.js (visual background):
    - Renders neon particles on #particles using requestAnimationFrame, DPR-aware sizing, and window resize handling.
- Assets (public/images)
  - SVGs used across pages via absolute /images/... paths. Ensure your local/dev server maps that path correctly (see commands above).

Backend/API expectations
- /api/contact: accepts POST of form data (JSON). Frontend expects 2xx to show a success message.
- /api/payouts: returns an array of items with fields {name, city, amount, minutesAgo}. If unavailable, notifications stay hidden.
- These endpoints are not implemented in this repo; provide them via your platform of choice (server, serverless, or mocks) if needed during development.
