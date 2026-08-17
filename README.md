# Rana Academy Shimla — Premium GitHub Pages Rebuild

A self-contained, responsive static rebuild of Rana Academy Shimla using the academy's public content structure, student-result archive, contact details and academy photos.

## Included
- `index.html` — conversion-focused homepage
- `courses.html` — exam preparation tracks
- `resources.html` — searchable/filterable resource library
- `about.html` — academy story and preparation approach
- `achievements.html` — student result archive
- `contact.html` — WhatsApp-first enquiry flow
- `404.html` — custom not-found page
- `assets/css/style.css` — full responsive design system
- `assets/js/main.js` — navigation, filters, modal, WhatsApp form, reveal interactions
- `assets/images/` — optimized local photos + self-contained RA placeholder mark
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — SEO/PWA basics
- Legacy route folders (`current-affairs/`, `mock-test/`, etc.) — preserve old URL paths and route users into the rebuilt pages

## GitHub Pages deploy
1. Create/open a GitHub repository.
2. Upload **everything inside this ZIP** to the repository root.
3. GitHub → **Settings → Pages**.
4. Choose **Deploy from a branch** → `main` → `/ (root)`.
5. Save.
6. Add `ranaacademyshimla.com` as the custom domain only after the academy confirms the final build.

## Before production launch
- Confirm the current address/floor. The public site currently shows: Near Vik's Kitchen Restaurant, 3rd Floor Sharma Sadan, Upper Khalini, Shimla.
- Confirm permission to reuse academy/student photos.
- Replace `assets/images/rana-mark.svg` with the academy's exact original logo file when the original high-quality logo is supplied. The current SVG is a clean placeholder monogram, not a redraw of the old logo.
- Add newer 2025–2026 results/resources if the academy provides them.

## Cleanup / UX changes
- Removed spam-injected/casino content seen on the old homepage.
- Removed outdated “Mission 2022” positioning.
- Removed broken newsletter/contact-form dependency.
- No fake statistics added.
- Mobile-first sticky Call / Free Demo / WhatsApp actions.
- Real result photos retained where available.
- Accessible focus states and reduced-motion support.
- SVG interface icons instead of decorative emoji icons.
