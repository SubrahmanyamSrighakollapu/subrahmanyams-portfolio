# My Portfolio — Subrahmanyam Srighakollapu

A complete, responsive **Next.js App Router + TypeScript** portfolio, implemented from the five supplied designs. Includes Home, About, Projects, Experience and Contact. Skills are sections on Home and About, matching the navigation in the references.

## Start locally

Install **Node.js 20.9 or later** (an active Node.js LTS release is recommended).

```bash
cd my-portfolio
npm ci
npm run dev
```

Open **http://localhost:3000**. The same commands work in PowerShell, Command Prompt, macOS and Linux terminals.

If Windows says `npm` is not recognized, install Node.js from its official website, close and reopen your terminal, and check `node -v` and `npm -v`.

## Production build and local preview

```bash
npm run build
npm start
```

`npm run build` produces a ready-to-host **`out/`** directory. A verified export is included in this download. `npm start` serves that export locally with the included dependency-free preview script; it does not run a backend or database.

For a TypeScript-only check:

```bash
npm run typecheck
```

## Pages and behavior

| URL | Content and interactions |
| --- | --- |
| `/` | Portrait hero, skills categories, featured projects, professional journey, story dialog |
| `/about/` | Personal story, values, skills, education, certifications and interests |
| `/projects/` | 12 project cards, category filters, search, empty state, project detail dialogs |
| `/experience/` | Professional roles, freelance projects, technologies and milestones |
| `/contact/` | Validated message form, character counter, contact links, copy buttons and map link |

Shared features: responsive mobile navigation, persistent light/dark preference, active navigation, resume download, keyboard-accessible dialogs, a skip link, visible focus styles, scroll progress and back-to-top control.

The story button opens a short written introduction. No source video was supplied, so no simulated video player is included. Project details open in a dialog; only supplied, known live URLs are linked. The meeting link prepares an email to arrange a suitable time, rather than claiming a booking has been made.

## Contact form

With no configuration, submitting a valid form opens the visitor's email application with a **draft**. The visitor reviews and sends it there. The site itself does **not** send or store messages, and it does not claim a message was delivered.

To use a hosted form service without adding your own backend, copy `.env.example` to `.env.local` and set an HTTPS endpoint:

```dotenv
NEXT_PUBLIC_CONTACT_ENDPOINT=https://your-form-provider.example/your-endpoint
```

The endpoint must accept a cross-origin JSON POST containing `name`, `email`, `subject` and `message`, and return a successful HTTP status only after accepting the message. Check the provider's documentation, CORS settings and privacy terms before enabling it. Never put API secrets in `NEXT_PUBLIC_*` variables. Rebuild after changing configuration.

Phone, email, GitHub, LinkedIn and map links work independently of the form. Copy buttons use the browser Clipboard API, which is available on HTTPS and localhost; a clear manual-copy message is announced if copying is unavailable.

## SEO setup before publishing

Set your actual public domain in `.env.local`:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

Then run `npm run build`. This adds the correct canonical URLs and full sitemap entries. When the domain is unset, the build intentionally omits canonical URLs and produces an empty sitemap instead of publishing a guessed domain.

Included: unique page titles and descriptions, semantic server-rendered HTML, one H1 per page, Open Graph and Twitter metadata, Person JSON-LD, `robots.txt`, `sitemap.xml`, a custom favicon, local fonts, descriptive image alt text, lazy-loaded below-the-fold images, and priority loading of hero artwork. Search ranking cannot be guaranteed by implementation alone; submit the final sitemap in Google Search Console after publishing.

## Edit content and styling

```text
src/
  app/
    page.tsx                 Homepage
    about/page.tsx           About page
    projects/page.tsx        Project listing
    experience/page.tsx      Experience page
    contact/page.tsx         Contact page
    layout.tsx               Shared layout and structured data
    globals.css              Design tokens and responsive styling
    robots.ts / sitemap.ts   SEO routes
  components/
    header.tsx               Desktop/mobile navigation and theme control
    shared.tsx               Buttons, sections, stats, CTA and footer
    motion.tsx               Direction-aware reveal observer and parallax
    projects.tsx             Search, filters and accessible project dialogs
    experience.tsx           Professional and freelance timelines
    skills.tsx               Interactive technology categories
    contact.tsx              Form and copy interactions
    story.tsx / dialog.tsx    Written introduction and dialog primitive
  data/portfolio.ts           Profile, skills, projects and work experience
  lib/seo.ts                 Metadata helper and public-domain configuration
public/
  images/                   Optimized local WebP assets
  tech/                     Local technology SVG icons
  fonts/                    Handwritten font and font licenses
  downloads/                Current résumé in DOCX format
scripts/
  dev.mjs                   Portable Next.js development launcher
  preview.mjs               Local preview of the static export
```

Edit personal details and project content in `src/data/portfolio.ts`. Update career or education copy in the corresponding page. Add a project's verified public URL through its optional `liveUrl` field. Replace the résumé in `public/downloads/` and update `profile.resume` if its filename or format changes.

## Images and design references

All site imagery and fonts are local; no hotlinked photos or paid asset service is required. `docs/ASSETS.md` records image provenance and the generation briefs. Original screens are retained in `docs/design-references/` for comparison.

Project previews and interest photos were extracted from the supplied screens to retain their exact artwork. Their source resolution is limited by those screenshots; replace these crops with original high-resolution project captures when available. Four larger portrait/desk assets were prepared from the supplied visual references, keeping the homepage’s casual portrait distinct from the suited About portrait. Layout and spacing adapt to the viewport; mobile screens were inferred because separate mobile designs were not supplied.

## Scroll animations

The shared motion controller uses one IntersectionObserver and one requestAnimationFrame-driven scroll handler. Sections fade and slide in from the direction they enter. They reset only after leaving the viewport, so scrolling back up replays the entrance. Portraits and hero art receive subtle bounded parallax. Cards add small hover transitions.

`prefers-reduced-motion: reduce` disables reveal, parallax, animation and smooth scrolling. Content remains visible with JavaScript disabled. CSS uses the `--ease` token for a consistent motion curve.

## Hosting

Deploy the contents of **`out/`** to a static host such as Netlify, Cloudflare Pages, an Nginx web root or an equivalent service. In a CI build, use `npm ci && npm run build` and set the output directory to `out`.

Example Nginx location block:

```nginx
location / {
    try_files $uri $uri/ $uri/index.html =404;
}
error_page 404 /404.html;
```

Use HTTPS. Set `NEXT_PUBLIC_SITE_URL` at build time to the final domain. There is no backend, database, API secret or admin login to configure.

## Included checks

See `docs/VALIDATION.md` for the build, layout and interaction checks performed for this delivery. Browser email/telephone application handoffs and third-party form services must be tested on the intended device/provider before enabling them in production.
