# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start    # Dev server at http://localhost:3000 with hot reload
npm run build  # Production build to /build
npm test     # Jest in watch mode (React Testing Library)
```

## Architecture

Personal portfolio site built with React 19 + React Router 6, bootstrapped via Create React App. No TypeScript, no CSS framework — plain JS and scoped CSS files per component.

### Routing (`src/App.js`)

| Route | Component |
|---|---|
| `/` | `Home.js` — stacks all sections vertically |
| `/SudokuSolver` | `SudokuSolver.js` |
| `/GolfAssistant` | `GolfPage.js` |
| `/PersonalWebsite` | `PersonalWeb.js` |

### Section composition (`src/Pages/Home.js`)

Home assembles the page top-to-bottom: `NavBar → Header → WelcomeSection → ProjectsSection → PublicationsSection → Footer`. Detail pages follow the same pattern with `PagesNavbar` instead of `NavBar`.

### Styling conventions

Global CSS variables are defined in `src/index.css` — use these for colors, spacing, and typography rather than hardcoding values. Key tokens:

```css
--color-primary: #6371a2
--color-primary-dark: #3E4A78
--color-text-primary: #312f3c
--color-text-secondary: #9B9A9A
--color-bg-secondary: #F5F5F5
--content-max-width: 1250px
--section-padding: 64px
--border-radius-standard: 8px
--animate-time: 300ms
```

Additional utility classes live in `src/Styles/GlobalStyles.css`; project-page layouts in `src/Styles/pages.css`.

### Key dependencies

- **AOS** — scroll-triggered animations; initialized via `useEffect` on each page
- **react-ga4** — Google Analytics 4 (only activates on non-localhost domains, initialized in `src/index.js`)
- **FontAwesome** — icons throughout (`@fortawesome/react-fontawesome`)
- **react-router-dom** — client-side routing

### Shared components (`src/SharedComponents/`)

- `BlueButton.js` — primary CTA button with `onClick` prop
- `SocialIcons.js` — FontAwesome social links row
