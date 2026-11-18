# Sriharsha Ghanta — Portfolio

A personal robotics engineering portfolio with a dark academic layout, built with HTML, CSS, and JavaScript. No build step or dependencies.

Run locally from the repository root: `python3 -m http.server 8000`.

- `index.html`: biography, contact details, and dated career milestones.
- `publications/index.html`: publications with year navigation, and patent families.
- `software/index.html`: engineering work and technical contributions.
- `experience/index.html`: career history and technical skills.
- `assets/resume.pdf`: resume updated to use SteerAI as the employer name, downloadable from navigation and footer.

Career content comes from the supplied 2026 resume and user-provided project history. Publications are reconciled against the user-provided Google Scholar and ORCID profiles, with DOI metadata from Crossref. The source records and verification date are in `data/publications.json`. A processed portrait from the supplied image is included. Styles are in `styles.css`. `script.js` updates the year and active navigation. All content, navigation, and resume downloads work without JavaScript.

Compatible with GitHub Pages from the root of main.

Clean URLs are provided by directory index files: `/software/`, `/experience/`, `/publications/`, and `/cv/`. Legacy `.html` pages redirect to their new locations. The CV page displays rendered resume pages without a native PDF sidebar. It includes zoom/fit controls, accessible text transcripts, and direct PDF open/download links. If the PDF changes, regenerate the page images and transcripts.

Homepage illustrations are conceptual demonstrations, not product recordings. The LiDAR illustration uses first-return ray intersections with the room walls. There are no illustration controls: brief animations finish in under five seconds, pause offscreen, and remain static under reduced-motion preferences or without JavaScript.
