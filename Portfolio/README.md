
# Portfolio

This repository contains a single-file portfolio site (HTML, CSS, inline SVGs) for Shashi Ranjan Kumar.

Live site (after Pages finishes publishing): https://ShrivastavaSunny.github.io/Portfolio/

Quick local preview:

```bash
cd "Complete Python/portfolio"
python3 -m http.server 8000
# then visit http://localhost:8000
```

Files of interest:
- `Portfolio/index.html` — main page
- `Portfolio/style.css` — styles
- `Portfolio/assets/` — images and other assets

Deployment:
- This repository contains a GitHub Actions workflow that publishes the `Portfolio/` folder to the `gh-pages` branch. The workflow file is at `.github/workflows/deploy-pages.yml`.

Portfolio site layout

Files/folders:

- index.html        — Main single-file portfolio (uses style.css and assets/)
- style.css         — External stylesheet referenced by index.html
- assets/
  - resume.pdf     — Resume PDF (linked from header and hero CTAs)
  - profile.jpg    — (optional) put a profile image here
- react/            — React + Tailwind starter component and README
  - Portfolio.jsx
  - README.md

How to serve locally

Simple static server (Python 3):

```bash
# from the folder containing this README
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000 in your browser
```

For React + Tailwind

Follow instructions in `react/README.md` to scaffold a Vite React app and copy `Portfolio.jsx` into `src/components`.
