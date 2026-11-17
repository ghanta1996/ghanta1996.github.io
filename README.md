# Sriharsha Ghanta — Portfolio

A personal robotics engineering portfolio with a dark academic layout, built with HTML, CSS, and JavaScript. No build step or dependencies.

Run locally from the repository root: `python3 -m http.server 8000`.

- `index.html`: biography, contact details, and dated career milestones.
- `publications/index.html`: publications with year navigation, and patent families.
- `software/index.html`: engineering work with expandable contribution details.
- `experience/index.html`: career history and technical skills.
- `assets/resume.pdf`: original user-supplied resume, downloadable from navigation and footer.

Career content comes from the supplied 2026 resume. No portrait is included; one can be added when supplied. Styles are in `styles.css`. `script.js` updates the year and active navigation. All content, navigation, and resume downloads work without JavaScript.

Compatible with GitHub Pages from the root of main.

Clean URLs are provided by directory index files: `/software/`, `/experience/`, `/publications/`, and `/cv/`. Legacy `.html` pages redirect to their new locations. The CV page embeds the PDF with explicit open/download links and a browser fallback.
