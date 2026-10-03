# Shahjad — Software Developer Portfolio

React + TypeScript + Vite + Framer Motion + Lucide. Static site: no backend, no database.

## Setup
1. Install Node.js 18 or newer (https://nodejs.org).
2. In this folder run:
   ```bash
   npm install
   npm run dev      # http://localhost:5173
   ```
3. Production build:
   ```bash
   npm run build    # output in dist/
   npm run preview  # test the build locally
   ```

## Fill in your details (src/data/portfolio.ts)
- `profile.email` and `profile.socials` (GitHub, LinkedIn, Instagram): currently placeholders.
- `projects[].demo` / `.code`: add live and GitHub URLs. Buttons appear once a URL is set.
- Projects marked `TODO: stack` need their tech stack (only the stacks shown in your artwork were used).
- Timeline, certifications and skills come only from your supplied images. Edit as needed.

## Replace media
All paths live in `src/data/assets.ts`. Overwrite files in `public/images` and `public/videos`
(keep names) or edit the paths. Edit the About text in `src/data/portfolio.ts` (`about`).

## Deploy
- **Vercel:** import the repo; settings are auto-detected (`vercel.json` included).
- **Netlify:** import the repo, or drag the `dist/` folder into Netlify Drop (`netlify.toml` included).
- **Render Static Site:** build command `npm install && npm run build`, publish directory `dist`.

## Structure
`src/components` (Navbar, Hero, About, Skills, Experience, Projects, Certifications, Contact, Footer),
`src/data` (assets, portfolio), `src/hooks`, `src/styles`.
