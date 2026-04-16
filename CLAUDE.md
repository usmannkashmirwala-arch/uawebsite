# UA Travels & Tours — Website

This file is the source of truth for Claude Code. **Read this entire file before making any edits.**

---

## About the Project

UA Travels & Tours is a multi-page travel agency website for a family-run business based in Karachi, Pakistan (30+ years of experience). The site promotes international travel packages, visa assistance, hotel bookings, flight deals, group tours, and customised itineraries.

**Live URL:** `https://usmannkashmirwala-arch.github.io/uawebsite/`
**GitHub Repo:** `https://github.com/usmannkashmirwala-arch/uawebsite`

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.8 | Type safety |
| Vite | 8 | Build tool |
| Tailwind CSS | 3 | Styling |
| React Router | v7 | Client-side routing (BrowserRouter with basename) |
| i18next | 25 | Internationalization (English only currently) |
| Remix Icons | 4.5 | Icon library — use `ri-*` classes |
| Font Awesome | 6.4 | Secondary icon library — use `fa-*` classes |
| unplugin-auto-import | — | Auto-imports React hooks and Router hooks (no manual imports needed) |

---

## Project File Structure

```
src/
├── components/feature/        # Shared UI: Navbar, Footer, HeroNavbar, ScrollToTop
├── pages/                     # One folder per route
│   ├── home/
│   │   ├── page.tsx           # Route entry point
│   │   └── components/        # Sections used only on this page
│   ├── about-us/
│   │   └── page.tsx
│   └── [other-pages]/
│       └── page.tsx
├── router/
│   ├── config.tsx             # ALL route definitions — add new routes here
│   └── index.ts
├── mocks/                     # Static data (no backend)
├── i18n/                      # Translation strings
├── App.tsx                    # Root: BrowserRouter + routes + i18n
├── main.tsx                   # Entry point
└── index.css                  # Tailwind base (@tailwind base/components/utilities)
```

---

## Brand & Design System

### Color Palette

Never introduce new primary colors. Always use these exact hex values:

| Name | Hex | When to Use |
|---|---|---|
| Primary dark green | `#1a2e2a` | Active nav links, borders, text on white bg |
| Navbar dark (non-home) | `#0f1c19` | Navbar background on non-home pages (unscrolled) |
| Footer background | `#0a1410` | Footer only |
| White | `#ffffff` | Text and elements on dark backgrounds |
| White overlays | `white/70`, `white/45`, `white/30`, `white/15` etc. | Subtle text/borders on dark backgrounds |

Accent colors (orange/amber) appear in some section components. Match the existing usage in that file — do not introduce new accent colors.

### Typography

- **Default font**: System font stack via Tailwind (no custom body font)
- **Pacifico**: Loaded via Google Fonts — use ONLY for decorative/logo-style display text, never for body text
- Always use Tailwind font utilities (`font-black`, `font-semibold`, `font-light`, etc.)

### Logo

Always use this exact image URL — never change it:
```
https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/54fcc53f122ddcc6f12f48c078ad2c76.png
```
- Navbar size: `h-10 w-auto object-contain`
- Footer size: `h-10 w-auto object-contain`

### Layout Conventions

- Max content width: `max-w-7xl mx-auto`
- Horizontal padding: `px-6 md:px-10`
- Section vertical padding: `py-20` (standard) or `pt-16 pb-10` (tight)
- All sections are full-width with contained content inside `max-w-7xl`

### Button / CTA Styles

Two button styles are used throughout the site. Do not deviate:

**1. Outlined White** (on dark / hero backgrounds):
```tsx
className="px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 hover:border-white whitespace-nowrap cursor-pointer"
```

**2. Outlined Dark** (on white / light backgrounds, e.g. scrolled navbar):
```tsx
className="px-5 py-1.5 border border-[#1a2e2a] text-[#1a2e2a] font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[#1a2e2a] hover:text-white whitespace-nowrap cursor-pointer"
```

### Section Label Style (uppercase eyebrow text)

```tsx
className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6"
```

### Icons

- Use Remix Icons (`ri-*`) as the primary icon set — consistent with navbar and existing components
- Font Awesome (`fa-*`) is available but prefer Remix Icons for new work
- Render icons as: `<i className="ri-icon-name text-xl"></i>`

---

## Navbar

File: `src/components/feature/Navbar.tsx`

**Do not change the navbar structure without understanding these rules:**

- Fixed position, full-width, `z-50`
- **Desktop**: Two rows
  - Row 1: Logo (left) + `topRowLinks` (center) + social icons + Contact Us button (right)
  - Row 2: `bottomRowLinks` (centered)
- **Mobile**: Single row with hamburger menu (`ri-menu-3-line` / `ri-close-line`)
- **Scroll behavior**: Transitions from transparent/dark → white background at `scrollY > 50`
- **Home page**: Transparent when unscrolled (transparent over hero image)
- **Other pages**: `bg-[#0f1c19]` when unscrolled

**To add a nav link**, add it to either `topRowLinks` or `bottomRowLinks` in `Navbar.tsx`.

---

## Footer

File: `src/components/feature/Footer.tsx`

- Background: `bg-[#0a1410]`
- Four-column grid: brand/description (spans 2), Navigation links, Services links
- Social links: Facebook, Instagram, WhatsApp
- Bottom bar: copyright + Privacy Policy + Terms of Service
- Decorative large "UATRIPS" watermark text at the very bottom

**To add a footer link**, add to `pages` array (Navigation column) or `services` array (Services column).

---

## Contact & Social Links

These exact URLs must always be used — never change them:

| Purpose | URL |
|---|---|
| "Contact Us" buttons (navbar + contact CTAs) | `https://wa.me/message/S2FTRUXB6BO4F1` (open in new tab) |
| Quote / Inquiry / Service CTAs | `https://tally.so/r/9qZjB4` (open in new tab) |
| Facebook | `https://facebook.com/profile.php?id=100077260250631&mibextid=wwXIfr` |
| Instagram | `https://instagram.com/uatravelsandtours` |
| WhatsApp (footer social icon) | `https://wa.me/923001234567` |

---

## Current Pages

| Route | File | Status |
|---|---|---|
| `/` | `src/pages/home/page.tsx` | Full page with multiple sections |
| `/customised-packages` | `src/pages/customised-packages/page.tsx` | Has sub-components |
| `/global-tours` | `src/pages/global-tours/page.tsx` | |
| `/hotel-bookings` | `src/pages/hotel-bookings/page.tsx` | |
| `/flight-deals` | `src/pages/flight-deals/page.tsx` | |
| `/group-tours` | `src/pages/group-tours/page.tsx` | |
| `/visa-assistance` | `src/pages/visa-assistance/page.tsx` | |
| `/support-service` | `src/pages/support-service/page.tsx` | |
| `/travel-insurance` | `src/pages/travel-insurance/page.tsx` | |
| `/about-us` | `src/pages/about-us/page.tsx` | |
| `/tomorrowland-packages` | `src/pages/tomorrowland/page.tsx` | Event-specific |
| `/full-moon-festival-thailand-2026` | `src/pages/full-moon-festival/page.tsx` | Event-specific |
| `*` (404) | `src/pages/NotFound.tsx` | |

---

## How to Add a New Page

Follow these steps exactly — in this order:

1. **Create the folder**: `src/pages/your-page-name/`
2. **Create `page.tsx`** using this exact structure:

```tsx
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function YourPageName() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page sections go here */}
      </main>
      <Footer />
    </div>
  );
}
```

3. **Register the route** in `src/router/config.tsx`:
```tsx
import YourPageName from "@/pages/your-page-name/page";
// add to routes array:
{ path: "/your-page-name", element: <YourPageName /> },
```

4. **Add to navbar** in `src/components/feature/Navbar.tsx` — add to `topRowLinks` or `bottomRowLinks`
5. **Add to footer** in `src/components/feature/Footer.tsx` — add to `pages` or `services` array

---

## Images

Hero and destination images use Readdy AI's image API:
```
https://readdy.ai/api/search-image?query=DESCRIPTIVE_QUERY&width=1600&height=900&seq=UNIQUE_ID&orientation=landscape
```
- Use a descriptive, specific query (e.g. `"Bali Indonesia lush tropical jungle waterfall rice terraces dramatic"`)
- Each image must have a unique `seq` value (e.g. `hero1`, `hero2`, `dest-bali`, etc.)
- For card images: `width=800&height=600`
- For hero/banner images: `width=1600&height=900`

---

## Code Conventions

- All component files use TypeScript (`.tsx`)
- Use the `@/` path alias for all imports from `src/` (e.g. `import Navbar from "@/components/feature/Navbar"`)
- **React hooks are auto-imported** — do NOT manually import `useState`, `useEffect`, `useCallback`, etc.
- **React Router hooks are auto-imported** — do NOT manually import `useNavigate`, `useLocation`, `Link`, `NavLink`, etc.
- Styling: Tailwind utility classes only — no separate `.css` files, no inline styles
- Components: functional only (no class components)
- Page files export a single default export named after the page (e.g. `export default function AboutUsPage()`)
- Section components within a page live in a `components/` subfolder of that page's directory

---

## Running & Building

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build → out/ directory
npm run lint         # ESLint check (must pass with 0 warnings)
npm run type-check   # TypeScript type check
```

---

## Deployment

**Auto-deploys to GitHub Pages on every push to `main`.**

The GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Runs `npm install && npm run build` with `BASE_PATH=/uawebsite/`
2. Copies `out/index.html` → `out/404.html` (fixes deep-link routing on GitHub Pages)
3. Deploys `out/` to the `gh-pages` branch

**Important rules:**
- Never push directly to `gh-pages` — it is fully managed by the workflow
- The `BASE_PATH` env variable must remain `/uawebsite/` to match the GitHub Pages subpath
- If the site moves to a custom domain (e.g. `uatrips.com`), update `BASE_PATH` to `/` in the workflow AND enable the custom domain in GitHub repo settings

---

## What NEVER to Change

- The logo image URL
- The WhatsApp Business contact URL (`https://wa.me/message/S2FTRUXB6BO4F1`)
- The social media URLs in both `Navbar.tsx` and `Footer.tsx`
- The `__BASE_PATH__` usage in `App.tsx` (the `basename` prop on BrowserRouter)
- The `__BASE_PATH__` and `__IS_PREVIEW__` defines in `vite.config.ts`
- The `out/` build output directory in `vite.config.ts`
