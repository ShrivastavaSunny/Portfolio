React + Tailwind starter for Shashi's portfolio

Quick start (Vite + React):

1. Create a new project with Vite

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
```

2. Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Update `tailwind.config.js` content paths and add Tailwind directives to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Copy `react-tailwind/Portfolio.jsx` into `src/components/Portfolio.jsx` and import it into `src/App.jsx`.

5. Run dev server:

```bash
npm install
npm run dev
```

Notes:
- The component uses Tailwind utility classes. Tweak colors to match the static site's palette.
- Link `/resume.pdf` from the public folder so the `Resume` button works.
